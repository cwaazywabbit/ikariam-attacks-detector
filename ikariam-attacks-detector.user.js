// ==UserScript==
// @name         Ikariam Attacks Detector
// @namespace    http://ikariam.ninja/
// @version      0.52
// @author       CwaazyWabbit
// @description  try to take over the world!
// @match        http*://*.ikariam.gameforge.com/*
// @require      https://greasyfork.org/scripts/3622-ikariam-developer-tools-v0-5-0/code/Ikariam Developer Tools V050+.user.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js
// @require      https://raw.githubusercontent.com/mckamey/countdownjs/master/countdown.min.js
// @require      https://raw.githubusercontent.com/icambron/moment-countdown/master/dist/moment-countdown.min.js
// @require      https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.js
// @updateURL    https://github.com/cwaazywabbit/ikariam-attacks-detector/raw/master/ikariam-attacks-detector.user.js
// @downloadURL  https://github.com/cwaazywabbit/ikariam-attacks-detector/raw/master/ikariam-attacks-detector.user.js
// @resource     toastCss https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.css
// @grant        unsafeWindow
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 N=\'1X\',q=[],e=8(1v,1q){7 J=1Y 1W(\'(\\\\d+)\'+1q,\'g\').1V(1v);1e(J?J[1]:0)},1b=8(){$.2().17(\'1S\');1T(7 i=0;i<q.t;i++){T(q[i])}q=[]},1j=8(3,I,r,2){7 f=1U(8(){3=6.3(3.1R()-I,\'1s\');7 d=6.3(3).M(),h=6.3(3).Q(),m=6.3(3).D(),s=6.3(3).C();d=$.z(d).t===1?\'0\'+d:d;h=$.z(h).t===1?\'0\'+h:h;m=$.z(m).t===1?\'0\'+m:m;s=$.z(s).t===1?\'0\'+s:s;9(3.26()===0){T(f);2.17()}$(\'#1E\'+r).5((d*1?d+\'يوم \':\'\')+(h*1?h+\'سا \':\'\')+(m*1?m+\'د \':\'\')+(s*1?s+\'ثا\':\'\'))},I);q.24(f);1e f};(8(){\'23 21\';7 1d=22(\'27\');W(1d);W(\'.2-5 p { 1G: 1H; 5-H: 1Q }\'+\'.u-2-c { 5-H: 1N; }\'+\'.2-5 p, .u-2-c b, .2-5 a, .u-2-c a { 1z-1M: 1J,1K; 1z-1L: 1I; }\'+\'.2-5 p, .u-2-c b { 1P: 1O; }\'+\'.2-5 a { 5-1Z: 2c; }\'+\'.u-2-c O { 2y-H: 2z; }\');v.1c.2A(8 2w(10){v.2v.2r(10,8 2s(2t,G,o){9(o&&o.1f){N=o.1f}9(G==v.K.1k.2C){}2B 9(G==v.K.1k.28){7 1a=o[0];9(1a==v.K.1c.2u){1b();$(\'.L\').2p(8(){7 L=$(2e),4=L.j(\'4\'),r=e(4,\'\'),1A=$(\'#\'+4+\'2f\').5(),E=$(\'#\'+4+\'2d\').5(),k=$(\'#\'+4+\'2q\').5(),Z=$(\'#\'+4+\'1i\').j(\'F\'),X=$(\'#\'+4+\'1i\').j(\'y\'),1D=$(\'#\'+4+\'1g\').j(\'F\'),1w=$(\'#\'+4+\'1g\').j(\'y\'),1B=$(\'#\'+4+\'29\').j(\'F\'),1n=$(\'#\'+4+\'P\').R(\'2a\')||$(\'#\'+4+\'P\').R(\'2b\')||$(\'#\'+4+\'P\').R(\'2g\')?\'<O 11="\'+12.16+\'//\'+15.14+\'/1l/1h/1m/V-2h.1y" />\':\'<O 11="\'+12.16+\'//\'+15.14+\'/1l/1h/1m/V-2n.1y" />\',19=$(\'#\'+4+\'2o\').5();9(1A===\'(في رحلة)\'){7 M=e(k,\'يوم\'),Q=e(k,\'ساعة\'),D=e(k,\'د\'),C=e(k,\'ثا\'),U=N,1r=6(6.1F(U).n(M,\'l\').n(Q,\'2l\').n(D,\'2i\').n(C,\'2j\'),\'w-x-B 1x:13:1C\'),1u=6(1r).2k(6(),\'l\'),1p=6(1u?6().1t(\'l\').1o(\'w-x-B\')+\' \'+E:6().1t(\'l\').n(1,\'l\').1o(\'w-x-B\')+\' \'+E,\'w-x-B 1x:13:1C\').1F(),S=1p-U,3=6.3(S*18,\'1s\');9(S>0){7 2=$.2({c:\'<b>\'+1n+\' رصدنا تحركًّا معاديًّا باتجاه <a y="\'+1w+\'">\'+1D+\'</a></b>\',5:\'<A 2m="2-5">\'+\'<p><b>الاشتباك خلال:</b> <A 4="1E\'+r+\'"></A></p>\'+\'<p><b>المهاجم:</b> \'+1B+\' <b>من:</b> <a y="\'+X+\'">\'+Z+\'</a></p>\'+\'<p><b>عدد الوحدات:</b> \'+19+\'</p>\'+\'</A>\',2F:2D,2E:Y,V:\'2x\',}),f=1j(3,18,r,2);2.25({20:8(){T(f)}})}}})}}})},Y)})();',62,166,'||toast|duration|id|text|moment|var|function|if|||heading||matchPart|intId||||attr|arrivesIn|day||add|data||intervals|uid||length|jq|IkaTools|DD|MM|href|trim|span|YYYY|seconds|minutes|arrivalDate|title|name|align|interval|match|Constants|hostile|days|serverTimestamp|img|MissionIcon|hours|hasClass|diffTime|clearInterval|currentTime|icon|GM_addStyle|attackerCityLink|true|attackerCity|response|src|location|mm|domain|document|protocol|reset|1000|units|view|resetAllNotifications|View|newCSS|return|time|TargetLink|advisors|OriginLink|createInterval|IkariamAjaxResponseType|skin|military|attackType|format|eventTime|part|estArrival|milliseconds|startOf|isSameDay|haystack|attackingCityLink|HH|png|font|state|attacker|ss|attackingCity|engageOn|unix|color|white|10px|Tahoma|Arial|size|family|center|rtl|direction|right|asMilliseconds|all|for|setInterval|exec|RegExp|undefined|new|decoration|afterHidden|strict|GM_getResourceText|use|push|update|asSeconds|toastCss|CHANGE_VIEW|OriginAvatar|blockade|deployfleet|none|ArrivalDate|this|State|defend_port|seafight|minute|second|isSame|hour|class|groundfight|Units|each|ArrivalTime|iterateIkariamAjaxResponse|lookForChangeView|index|MILITARY_ADVISOR|Utils|handlejaxResponse|error|vertical|middle|registerIkariamAjaxResponseCallback|else|UPDATE_GLOBAL_DATA|false|allowToastClose|hideAfter'.split('|'),0,{}))
