// ==UserScript==
// @name         Ikariam Attacks Detector
// @namespace    http://ikariam.ninja/
// @version      0.45
// @description  try to take over the world!
// @author       Shadi
// @match        https://s*-*.ikariam.gameforge.com/*
// @require      https://greasyfork.org/scripts/3622-ikariam-developer-tools-v0-5-0/code/Ikariam Developer Tools V050+.user.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js
// @require      https://raw.githubusercontent.com/mckamey/countdownjs/master/countdown.min.js
// @require      https://raw.githubusercontent.com/icambron/moment-countdown/master/dist/moment-countdown.min.js
// @require      https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.js
// @updateUrl    https://raw.githubusercontent.com/cwaazywabbit/ikariam-attacks-detector/master/dist/ikaraim-attacks-detector.user.js
// @downloadUrl  https://raw.githubusercontent.com/cwaazywabbit/ikariam-attacks-detector/master/dist/ikaraim-attacks-detector.user.js
// @resource     toastCss https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.css
// @grant        unsafeWindow
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

var serverTimestamp = 'undefined',
    intervals = [],
    matchPart = function(haystack, part) {
        var match = new RegExp('(\\d+)' + part, 'g').exec(haystack);
        return (match ? match[1] : 0);
    },
    findIdxByObj = function(prop, val) {
        for (var i = 0; i < intervals.length; i++) {
            if (intervals[i][prop] === val) {
                return i;
            }
        }
    },
    popInterval = function(id, val) {
        var intIdx = findIdxByObj(id, val),
            interval = intervals[intIdx];
        clearInterval(interval.id);
        interval.toast.reset();
        intervals.splice(intervals[intIdx], 1);
    },
    clearAllIntervals = function() {
        for (var i = 0; i < intervals.length; i++) {
            clearInterval(intervals[i].id);
        }
        $.toast().reset('all');
    },
    createInterval = function(duration, interval, uid) {
        return setInterval(function() {
            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds();

            if (!d && !h && !m && !s) {
                popInterval('uid', uid);
            } else {
                d = $.trim(d).length === 1 ? '0' + d : d;
                h = $.trim(h).length === 1 ? '0' + h : h;
                m = $.trim(m).length === 1 ? '0' + m : m;
                s = $.trim(s).length === 1 ? '0' + s : s;

                // show how many hours, minutes and seconds are left
                $('#engageOn' + uid).text((d * 1 ? d + 'يوم ' : '') + (h * 1 ? h + 'سا ' : '') + (m * 1 ? m + 'د ' : '') + (s * 1 ? s + 'ثا' : ''));
            }
        }, interval);
    };

(function() {
    'use strict';

    var newCSS = GM_getResourceText('toastCss');
    GM_addStyle(newCSS);
    GM_addStyle('.toast-text p { color: white; text-align: right }' +
                '.jq-toast-heading { text-align: center; }' +
                '.toast-text p, .jq-toast-heading b { font-family: Tahoma,Arial; font-size: 11px; direction: rtl; }' +
                '.toast-text a { text-decoration: none; }');

    IkaTools.View.registerIkariamAjaxResponseCallback(
            function handlejaxResponse(response) {
                IkaTools.Utils.iterateIkariamAjaxResponse(response, function lookForChangeView(index, name, data) {
                    if (data && data.time) { serverTimestamp = data.time ; }

                    if (name == IkaTools.Constants.IkariamAjaxResponseType.UPDATE_GLOBAL_DATA) {
                    }
                    else if (name == IkaTools.Constants.IkariamAjaxResponseType.CHANGE_VIEW) {
                        var view = data[0];
                        if (view == IkaTools.Constants.View.MILITARY_ADVISOR) {
                            clearAllIntervals();

                            $('.hostile').each(function() {
                                var hostile = $(this),
                                    id = hostile.attr('id'),
                                    uid = matchPart(id, ''),
                                    state = $('#' + id + 'State').text(),
                                    arrivalDate = $('#' + id + 'ArrivalDate').text(),
                                    arrivesIn = $('#' + id + 'ArrivalTime').text(),
                                    attackerCity = $('#' + id + 'OriginLink').attr('title'),
                                    attackerCityLink = $('#' + id + 'OriginLink').attr('href'),
                                    attackingCity = $('#' + id + 'TargetLink').attr('title'),
                                    attackingCityLink = $('#' + id + 'TargetLink').attr('href'),
                                    attacker = $('#' + id + 'OriginAvatar').attr('title'),
                                    attackType = $('#' + id + 'MissionIcon').hasClass('blockade') || 
                                    $('#' + id + 'MissionIcon').hasClass('deployfleet') || 
                                    $('#' + id + 'MissionIcon').hasClass('defend_port') ? 'بحـــــري' : 'بــــري',
                                    units = $('#' + id + 'Units').text();

                                if (state === '(في رحلة)') {
                                    var days = matchPart(arrivesIn, 'يوم'),
                                        hours = matchPart(arrivesIn, 'ساعة'),
                                        minutes = matchPart(arrivesIn, 'د'),
                                        seconds = matchPart(arrivesIn, 'ثا'),
                                        currentTime = serverTimestamp,
                                        estArrival = moment(moment.unix(currentTime).add(days, 'day').add(hours, 'hour').add(minutes, 'minute').add(seconds, 'second'), 'DD-MM-YYYY HH:mm:ss'),
                                        isSameDay = moment(estArrival).isSame(moment(), 'day'),
                                        eventTime = moment(isSameDay ? 
                                                           moment().startOf('day').format('DD-MM-YYYY') + ' ' + arrivalDate : 
                                                           moment().startOf('day').add(1, 'day').format('DD-MM-YYYY') + ' ' + arrivalDate, 
                                                           'DD-MM-YYYY HH:mm:ss').unix(),
                                        diffTime = eventTime - currentTime,
                                        duration = moment.duration(diffTime * 1000, 'milliseconds'),
                                        intId = createInterval(duration, 1000, uid);

                                    if (diffTime > 0) {
                                        var myToast = $.toast({
                                            heading: '<b>رصدنا تحرّكًا معاديًا ضد إحدى المدن</b>',
                                            text : '<span class="toast-text"><p><b>الاشتباك خلال:</b> <span id="engageOn' + uid + '"></span></p><p><b>المهاجم:</b> ' + attacker + '</p><p><b>المدينة الأصل:</b> <a href="' + attackerCityLink + '">' + attackerCity + '</a></p><p><b>المدينة الهدف:</b> <a href="' + attackingCityLink + '">' + attackingCity + '</a></p><p><b>نوع التحرك:</b> ' + attackType + '</p><p><b>عدد الوحدات:</b> ' + units + '</p></span>',
                                            hideAfter : false,
                                            allowToastClose: true,
                                            icon: 'error',
                                            //position: 'bottom-right',
                                        });

                                        intervals.push({'id': intId, 'toast': myToast, 'uid': uid});

                                        myToast.update({
                                            afterHidden: function () {
                                                popInterval('id', intId);
                                            }
                                        });
                                    } else {
                                        popInterval('id', intId);
                                    }
                                }
                            });
                        }
                    }
                });
            } , true);
})();
