// ==UserScript==
// @name         Ikariam Attacks Detector (Original)
// @namespace    http://ikariam.ninja/
// @version      0.60
// @author       CwaazyWabbit
// @description  try to take over the world!
// @include      http*://s*-*.ikariam.gameforge.com/*
// @exclude      http*://board.ikariam.gameforge.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js
// @require      https://raw.githubusercontent.com/mckamey/countdownjs/master/countdown.min.js
// @require      https://raw.githubusercontent.com/icambron/moment-countdown/master/dist/moment-countdown.min.js
// @require      https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.js
// @require      https://github.com/cwaazywabbit/ikariam-attacks-detector/raw/master/ikariam-developer-tools.user.js
// @updateURL    https://github.com/cwaazywabbit/ikariam-attacks-detector/raw/master/ikariam-attacks-detector.user.js
// @downloadURL  https://github.com/cwaazywabbit/ikariam-attacks-detector/raw/master/ikariam-attacks-detector.user.js
// @resource     toastCss https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.css
// @include      http*://*.ikariam.gameforge.com/*
// @grant        unsafeWindow
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

var _0x28e1=['format','DD-MM-YYYY','startOf','DD-MM-YYYY\x20HH:mm:ss','<b>','\x20رصدنا\x20تحركًّا\x20معاديًّا\x20باتجاه\x20<a\x20href=\x22','match','<span\x20class=\x22toast-text\x22>','<p><b>الاشتباك\x20خلال:</b>\x20<span\x20id=\x22engageOn','\x22></span></p>','<p><b>المهاجم:</b>\x20','\x20<b>من:</b>\x20<a\x20href=\x22','</a></p>','</span>','indexOf','update','each','yIp','rbv','debugger','ArrivalTime','OriginAvatar','blockade','ساعة','</a></b>','<p><b>عدد\x20الوحدات:</b>\x20','</p>','سفن','tfq','WGj','constructor','KUu','nyQ','undefined','(\x5cd+)','exec','toast','all','length','duration','asMilliseconds','milliseconds','days','hours','minutes','seconds','trim','asSeconds','reset','#engageOn','text','يوم\x20','push','VQF','tQM','DAf','WBb','ABF','سا\x20','apply','wjj','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','log','warn','info','error','exception','trace','aFh','console','debug','toastCss','.toast-text\x20p\x20{\x20color:\x20white;\x20text-align:\x20right\x20}','.toast-text\x20p,\x20.jq-toast-heading\x20b,\x20.toast-text\x20a,\x20.jq-toast-heading\x20a\x20{\x20font-family:\x20Tahoma,Arial;\x20font-size:\x2010px;\x20}','.toast-text\x20p,\x20.jq-toast-heading\x20b\x20{\x20direction:\x20rtl;\x20}','.toast-text\x20a\x20{\x20text-decoration:\x20none;\x20}','.jq-toast-heading\x20img\x20{\x20vertical-align:\x20middle;\x20}','View','registerIkariamAjaxResponseCallback','skA','iHk','iterateIkariamAjaxResponse','ztJ','YPd','time','cot','Constants','IkariamAjaxResponseType','UPDATE_GLOBAL_DATA','rpv','XXl','actionRequest','backgroundData','name','isCapital','islandXCoord','islandYCoord','ownerId','ownerName','headerData','ambrosia','currentResources','freeTransporters','income','maxActionPoints','CHANGE_VIEW','MILITARY_ADVISOR','aYP','attr','State','ArrivalDate','OriginLink','title','href','TargetLink','MissionIcon','hasClass','deployfleet','defend_port','protocol','/skin/advisors/military/icon-seafight.png\x22\x20/>','<img\x20src=\x22','domain','/skin/advisors/military/icon-groundfight.png\x22\x20/>','Units','(في\x20رحلة)','يوم','unix','add','day','hour','minute','second','isSame'];(function(a,d){var b=function(b){while(--b){a['push'](a['shift']());}};var c=function(){var a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(b,h,i,e){e=e||{};var c=h+'='+i;var a=0x0;for(var a=0x0,f=b['length'];a<f;a++){var g=b[a];c+=';\x20'+g;var d=b[g];b['push'](d);f=b['length'];if(d!==!![]){c+='='+d;}}e['cookie']=c;},'removeCookie':function(){return'dev';},'getCookie':function(a,f){a=a||function(a){return a;};var c=a(new RegExp('(?:^|;\x20)'+f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var e=function(a,b){a(++b);};e(b,d);return c?decodeURIComponent(c[0x1]):undefined;}};var e=function(){var b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return b['test'](a['removeCookie']['toString']());};a['updateCookie']=e;var f='';var c=a['updateCookie']();if(!c){a['setCookie'](['*'],'counter',0x1);}else if(c){f=a['getCookie'](null,'counter');}else{a['removeCookie']();}};c();}(_0x28e1,0x12f));var _0x128e=function(a,c){a=a-0x0;var b=_0x28e1[a];return b;};var _0x3b938b=_0x128e('0x0'),_0x42342f=[],_0x7ec452=_0x128e('0x0'),_0x42df62=function(b,c){var a=new RegExp(_0x128e('0x1')+c,'g')[_0x128e('0x2')](b);return a?a[0x1]:0x0;},_0x53731a=function(){$[_0x128e('0x3')]()['reset'](_0x128e('0x4'));for(var a=0x0;a<_0x42342f[_0x128e('0x5')];a++){clearInterval(_0x42342f[a]);}_0x42342f=[];},_0x50b45a=function(a,c,d,e){var b=setInterval(function(){a=moment[_0x128e('0x6')](a[_0x128e('0x7')]()-c,_0x128e('0x8'));var f=moment[_0x128e('0x6')](a)[_0x128e('0x9')](),g=moment[_0x128e('0x6')](a)[_0x128e('0xa')](),h=moment[_0x128e('0x6')](a)[_0x128e('0xb')](),i=moment[_0x128e('0x6')](a)[_0x128e('0xc')]();f=$['trim'](f)[_0x128e('0x5')]===0x1?'0'+f:f;g=$[_0x128e('0xd')](g)[_0x128e('0x5')]===0x1?'0'+g:g;h=$[_0x128e('0xd')](h)[_0x128e('0x5')]===0x1?'0'+h:h;i=$[_0x128e('0xd')](i)['length']===0x1?'0'+i:i;if(a[_0x128e('0xe')]()===0x0){clearInterval(b);e[_0x128e('0xf')]();}$(_0x128e('0x10')+d)[_0x128e('0x11')]((f*0x1?f+_0x128e('0x12'):'')+(g*0x1?g+'سا\x20':'')+(h*0x1?h+'د\x20':'')+(i*0x1?i+'ثا':''));},c);_0x42342f[_0x128e('0x13')](b);return b;};(function(){var a=function(){var a=!![];return function(d,b){var c=a?function(){if(b){var a=b['apply'](d,arguments);b=null;return a;}}:function(){};a=![];return c;};}();var b=a(this,function(){var b=function(){return'\x64\x65\x76';},c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var d=function(){var a=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!a['\x74\x65\x73\x74'](b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var e=function(){var a=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return a['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var a=function(a){var b=~-0x1>>0x1+0xff%0x0;if(a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===b)){f(a);}};var f=function(b){var c=~-0x4>>0x1+0xff%0x0;if(b['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==c){a(b);}};if(!d()){if(!e()){a('\x69\x6e\x64\u0435\x78\x4f\x66');}else{a('\x69\x6e\x64\x65\x78\x4f\x66');}}else{a('\x69\x6e\x64\u0435\x78\x4f\x66');}});b();var c=function(){if(_0x128e('0x14')!==_0x128e('0x15')){var a=!![];return function(d,b){if(_0x128e('0x16')!==_0x128e('0x17')){var c=a?function(){if(b){if('FgU'===_0x128e('0x18')){var c=_0x3a880a(function(){_0x1f9faf=moment['duration'](duration[_0x128e('0x7')]()-_0x243811,_0x128e('0x8'));var a=moment['duration'](_0x225a2d)[_0x128e('0x9')](),b=moment[_0x128e('0x6')](_0x44872f)['hours'](),c=moment[_0x128e('0x6')](_0x5c5706)[_0x128e('0xb')](),d=moment[_0x128e('0x6')](_0x39eeeb)['seconds']();_0x5a8328=$[_0x128e('0xd')](_0x4b48b5)['length']===0x1?'0'+_0x2832f1:_0x448a17;_0x48a55d=$[_0x128e('0xd')](_0x4779e7)[_0x128e('0x5')]===0x1?'0'+_0x400424:_0x537b1a;_0x496f31=$['trim'](_0x341120)[_0x128e('0x5')]===0x1?'0'+_0x2995d0:_0x371ee0;_0x1dd707=$[_0x128e('0xd')](_0x585ddb)[_0x128e('0x5')]===0x1?'0'+_0x39a8d0:_0x4392ff;if(duration[_0x128e('0xe')]()===0x0){_0x373803(_0x19dc04);toast[_0x128e('0xf')]();}_0x179c11(_0x128e('0x10')+_0x1ae853)[_0x128e('0x11')]((_0x53b7dc*0x1?_0x14f313+_0x128e('0x12'):'')+(_0x309166*0x1?_0xc44860+_0x128e('0x19'):'')+(_0x1d8d3a*0x1?_0x1cb734+'د\x20':'')+(_0x37b618*0x1?_0x40ec7a+'ثا':''));},_0x42b139);_0x42342f[_0x128e('0x13')](_0x4e2ebd);return _0x3e2cc6;}else{var a=b[_0x128e('0x1a')](d,arguments);b=null;return a;}}}:function(){};a=![];return c;}else{_0x50e509=moment[_0x128e('0x6')](duration[_0x128e('0x7')]()-_0x19f9fb,'milliseconds');var e=moment[_0x128e('0x6')](_0xd89989)[_0x128e('0x9')](),f=moment['duration'](_0x22ffe8)[_0x128e('0xa')](),g=moment[_0x128e('0x6')](_0x1921e7)[_0x128e('0xb')](),h=moment[_0x128e('0x6')](_0x1cb9dc)['seconds']();_0x59d034=$[_0x128e('0xd')](_0x32ac99)[_0x128e('0x5')]===0x1?'0'+_0x279e1e:_0x195256;_0x253055=$[_0x128e('0xd')](_0x51f50f)['length']===0x1?'0'+_0x35a747:_0x4b67f8;_0x1b8b6e=$[_0x128e('0xd')](_0xe1c48d)[_0x128e('0x5')]===0x1?'0'+_0x1fcb3b:_0x3d41c7;_0x511471=$[_0x128e('0xd')](_0x22471e)[_0x128e('0x5')]===0x1?'0'+_0x426884:_0x34921c;if(duration[_0x128e('0xe')]()===0x0){_0x15eda1(_0x36607d);toast['reset']();}_0x2e8ed8('#engageOn'+_0x1d8f1a)[_0x128e('0x11')]((_0x2d2e8f*0x1?_0x578c77+_0x128e('0x12'):'')+(_0x25a16e*0x1?_0x168f87+_0x128e('0x19'):'')+(_0x4aa521*0x1?_0x31d4c4+'د\x20':'')+(_0x593529*0x1?_0x1f1d1d+'ثا':''));}};}else{_0x4397ed();}}();var d=c(this,function(){var b=function(){};var a;try{if(_0x128e('0x1b')!=='RZz'){var c=Function(_0x128e('0x1c')+_0x128e('0x1d')+');');a=c();}else{}}catch(b){a=window;}if(!a['console']){a['console']=function(b){var a={};a[_0x128e('0x1e')]=b;a[_0x128e('0x1f')]=b;a['debug']=b;a[_0x128e('0x20')]=b;a[_0x128e('0x21')]=b;a[_0x128e('0x22')]=b;a[_0x128e('0x23')]=b;return a;}(b);}else{if(_0x128e('0x24')!==_0x128e('0x24')){}else{a[_0x128e('0x25')][_0x128e('0x1e')]=b;a['console']['warn']=b;a['console'][_0x128e('0x26')]=b;a[_0x128e('0x25')]['info']=b;a['console']['error']=b;a[_0x128e('0x25')][_0x128e('0x22')]=b;a['console'][_0x128e('0x23')]=b;}}});d();'use strict';var e=GM_getResourceText(_0x128e('0x27'));GM_addStyle(e);GM_addStyle(_0x128e('0x28')+'.jq-toast-heading\x20{\x20text-align:\x20center;\x20}'+_0x128e('0x29')+_0x128e('0x2a')+_0x128e('0x2b')+_0x128e('0x2c'));IkaTools[_0x128e('0x2d')][_0x128e('0x2e')](function a(b){if(_0x128e('0x2f')!==_0x128e('0x30')){IkaTools['Utils'][_0x128e('0x31')](b,function a(U,c,b){if(_0x128e('0x32')!==_0x128e('0x33')){if(b&&b[_0x128e('0x34')]){if('sjA'===_0x128e('0x35')){if(_0x38af74){var f=fn[_0x128e('0x1a')](_0x441f60,_0x12bf6b);_0x28f779=null;return _0x5084b9;}}else{_0x3b938b=b[_0x128e('0x34')];}}if(c==IkaTools[_0x128e('0x36')][_0x128e('0x37')][_0x128e('0x38')]){if(_0x128e('0x39')===_0x128e('0x3a')){}else{_0x7ec452=b;var g=b[_0x128e('0x3b')],h=b[_0x128e('0x3c')]['id'],i=b[_0x128e('0x3c')][_0x128e('0x3d')],j=b[_0x128e('0x3c')][_0x128e('0x3e')],k=b[_0x128e('0x3c')][_0x128e('0x3f')],l=b[_0x128e('0x3c')][_0x128e('0x40')],m=b[_0x128e('0x3c')][_0x128e('0x41')],n=b[_0x128e('0x3c')][_0x128e('0x42')],o=b[_0x128e('0x43')][_0x128e('0x44')],p=b[_0x128e('0x43')][_0x128e('0x45')],q=b[_0x128e('0x43')][_0x128e('0x46')],r=b[_0x128e('0x43')]['gold'],s=b[_0x128e('0x43')][_0x128e('0x47')],t=b[_0x128e('0x43')][_0x128e('0x48')];}}else if(c==IkaTools[_0x128e('0x36')][_0x128e('0x37')][_0x128e('0x49')]){var d=b[0x0];if(d==IkaTools[_0x128e('0x36')][_0x128e('0x2d')][_0x128e('0x4a')]){if(_0x128e('0x4b')!==_0x128e('0x4b')){var v=_0x2ff28c(this),w=hostile[_0x128e('0x4c')]('id'),x=_0x20b5d6(_0x33be42,''),e=_0x437415('#'+_0x376227+_0x128e('0x4d'))['text'](),z=_0x236193('#'+_0x4d4bc5+_0x128e('0x4e'))[_0x128e('0x11')](),A=_0x1c76c7('#'+_0x436618+'ArrivalTime')[_0x128e('0x11')](),B=_0x480012('#'+_0x463530+_0x128e('0x4f'))[_0x128e('0x4c')](_0x128e('0x50')),C=_0x383a43('#'+_0x165ef3+_0x128e('0x4f'))[_0x128e('0x4c')](_0x128e('0x51')),D=_0x58e639('#'+_0x2f12fb+_0x128e('0x52'))[_0x128e('0x4c')](_0x128e('0x50')),E=_0x49413e('#'+_0x2357d4+'TargetLink')['attr'](_0x128e('0x51')),F=_0x463408('#'+_0x2272ed+'OriginAvatar')['attr'](_0x128e('0x50')),G=_0x895972('#'+_0x2ef7ea+_0x128e('0x53'))[_0x128e('0x54')]('blockade')||_0x2745c0('#'+_0x192b32+'MissionIcon')[_0x128e('0x54')](_0x128e('0x55'))||_0x25e473('#'+_0x298116+_0x128e('0x53'))[_0x128e('0x54')](_0x128e('0x56'))?'<img\x20src=\x22'+location[_0x128e('0x57')]+'//'+document['domain']+_0x128e('0x58'):_0x128e('0x59')+location[_0x128e('0x57')]+'//'+document[_0x128e('0x5a')]+_0x128e('0x5b'),H=_0x4f1d4a('#'+_0x51a1ff+_0x128e('0x5c'))[_0x128e('0x11')]();if(_0x402a70===_0x128e('0x5d')){var I=_0x122d65(_0x43d640,_0x128e('0x5e')),J=_0x56078c(_0x2f7183,'ساعة'),K=_0x23294a(_0x51aa4a,'د'),L=_0x41af22(_0x37af86,'ثا'),M=_0x5eb0df,N=_0x22c4d8(moment[_0x128e('0x5f')](_0x503544)[_0x128e('0x60')](_0x475dc7,_0x128e('0x61'))[_0x128e('0x60')](_0x596c10,_0x128e('0x62'))['add'](_0x20fd6a,_0x128e('0x63'))[_0x128e('0x60')](_0x524a47,_0x128e('0x64')),'DD-MM-YYYY\x20HH:mm:ss'),O=_0x343917(_0x3da07f)[_0x128e('0x65')](_0x4f97d5(),'day'),P=_0x7948af(_0x6a7cd4?_0x5731a5()['startOf'](_0x128e('0x61'))[_0x128e('0x66')](_0x128e('0x67'))+'\x20'+_0x56bb0a:_0x44a88a()[_0x128e('0x68')](_0x128e('0x61'))[_0x128e('0x60')](0x1,'day')['format'](_0x128e('0x67'))+'\x20'+_0x59e89a,_0x128e('0x69'))[_0x128e('0x5f')](),Q=_0x1e2d6e-_0x4e51c0,R=moment[_0x128e('0x6')](_0x30002f*0x3e8,_0x128e('0x8'));if(_0x942359>0x0){var S=$['toast']({'_0x36ceeb':_0x128e('0x6a')+_0x2de4c4+_0x128e('0x6b')+_0x1f8ea4+'\x22>'+_0x365587+'</a></b>','_0x1f57b0':units[_0x128e('0x6c')](/\d+/)[0x0]==0x1?'':_0x128e('0x6d')+_0x128e('0x6e')+_0x568e66+_0x128e('0x6f')+_0x128e('0x70')+_0x2c21fb+_0x128e('0x71')+_0x2dc076+'\x22>'+_0x5e246d+_0x128e('0x72')+'<p><b>عدد\x20الوحدات:</b>\x20'+_0x35712b+'</p>'+_0x128e('0x73'),'_0x4fe4f8':![],'_0x5dc4a9':!![],'_0x13325':units[_0x128e('0x74')]('سفن')!=-0x1?_0x128e('0x21'):_0x128e('0x20'),'_0x2e854b':0x64}),T=_0xd960db(_0x2fd02a,0x3e8,_0x46427e,_0x4eb081);toast[_0x128e('0x75')]({'_0x23feb6':function(){_0x48e465(_0x463b15);}});}}}else{_0x53731a();$('.hostile')[_0x128e('0x76')](function(){if(_0x128e('0x77')===_0x128e('0x78')){(function(){}['constructor'](_0x128e('0x79'))());}else{var n=$(this),a=n[_0x128e('0x4c')]('id'),d=_0x42df62(a,''),w=$('#'+a+'State')[_0x128e('0x11')](),e=$('#'+a+_0x128e('0x4e'))[_0x128e('0x11')](),b=$('#'+a+_0x128e('0x7a'))['text'](),y=$('#'+a+'OriginLink')['attr'](_0x128e('0x50')),i=$('#'+a+_0x128e('0x4f'))[_0x128e('0x4c')](_0x128e('0x51')),j=$('#'+a+_0x128e('0x52'))[_0x128e('0x4c')](_0x128e('0x50')),k=$('#'+a+_0x128e('0x52'))[_0x128e('0x4c')]('href'),l=$('#'+a+_0x128e('0x7b'))[_0x128e('0x4c')](_0x128e('0x50')),m=$('#'+a+_0x128e('0x53'))[_0x128e('0x54')](_0x128e('0x7c'))||$('#'+a+_0x128e('0x53'))['hasClass'](_0x128e('0x55'))||$('#'+a+_0x128e('0x53'))['hasClass'](_0x128e('0x56'))?_0x128e('0x59')+location[_0x128e('0x57')]+'//'+document['domain']+_0x128e('0x58'):_0x128e('0x59')+location['protocol']+'//'+document[_0x128e('0x5a')]+_0x128e('0x5b'),c=$('#'+a+_0x128e('0x5c'))[_0x128e('0x11')]();if(w===_0x128e('0x5d')){var o=_0x42df62(b,_0x128e('0x5e')),p=_0x42df62(b,_0x128e('0x7d')),q=_0x42df62(b,'د'),r=_0x42df62(b,'ثا'),f=_0x3b938b,t=moment(moment[_0x128e('0x5f')](f)[_0x128e('0x60')](o,'day')[_0x128e('0x60')](p,'hour')[_0x128e('0x60')](q,'minute')['add'](r,_0x128e('0x64')),_0x128e('0x69')),u=moment(t)['isSame'](moment(),_0x128e('0x61')),v=moment(u?moment()[_0x128e('0x68')](_0x128e('0x61'))[_0x128e('0x66')](_0x128e('0x67'))+'\x20'+e:moment()['startOf'](_0x128e('0x61'))[_0x128e('0x60')](0x1,_0x128e('0x61'))[_0x128e('0x66')](_0x128e('0x67'))+'\x20'+e,_0x128e('0x69'))[_0x128e('0x5f')](),g=v-f,x=moment[_0x128e('0x6')](g*0x3e8,'milliseconds');if(g>0x0){var h=$['toast']({'heading':_0x128e('0x6a')+m+_0x128e('0x6b')+k+'\x22>'+j+_0x128e('0x7e'),'text':c[_0x128e('0x6c')](/\d+/)[0x0]==0x1?'':_0x128e('0x6d')+_0x128e('0x6e')+d+_0x128e('0x6f')+'<p><b>المهاجم:</b>\x20'+l+_0x128e('0x71')+i+'\x22>'+y+_0x128e('0x72')+_0x128e('0x7f')+c+_0x128e('0x80')+_0x128e('0x73'),'hideAfter':![],'allowToastClose':!![],'icon':c[_0x128e('0x74')](_0x128e('0x81'))!=-0x1?_0x128e('0x21'):_0x128e('0x20'),'stack':0x64}),s=_0x50b45a(x,0x3e8,d,h);h[_0x128e('0x75')]({'afterHidden':function(){clearInterval(s);}});}}}});}}}}else{var y=$[_0x128e('0x3')]({'_0x10de39':'<b>'+_0x5365a9+_0x128e('0x6b')+_0x5976d1+'\x22>'+_0x31c955+'</a></b>','_0x2bc0c3':units[_0x128e('0x6c')](/\d+/)[0x0]==0x1?'':'<span\x20class=\x22toast-text\x22>'+_0x128e('0x6e')+_0x253a6a+'\x22></span></p>'+_0x128e('0x70')+_0x26e8d1+_0x128e('0x71')+_0x4e72ab+'\x22>'+_0x1e309e+_0x128e('0x72')+_0x128e('0x7f')+_0x5899f6+_0x128e('0x80')+_0x128e('0x73'),'_0x3957b7':![],'_0x6bd7f4':!![],'_0x14def4':units['indexOf'](_0x128e('0x81'))!=-0x1?_0x128e('0x21'):'info','_0x3c7385':0x64}),u=_0x2d6081(_0x14cd14,0x3e8,_0x33ca7b,_0x95c004);toast['update']({'_0x46b936':function(){_0x459463(_0x52d3a8);}});}});}else{that[_0x128e('0x25')][_0x128e('0x1e')]=_0x2b53dd;that[_0x128e('0x25')][_0x128e('0x1f')]=_0x15a1de;that['console']['debug']=_0x3bbc9b;that[_0x128e('0x25')][_0x128e('0x20')]=_0x59f6e8;that['console'][_0x128e('0x21')]=_0x506272;that[_0x128e('0x25')][_0x128e('0x22')]=_0x351a3b;that['console'][_0x128e('0x23')]=_0x54a5ff;}},!![]);}());var _0x2d6937=function(){function a(b){if((''+b/b)['length']!==0x1||b%0x14===0x0){if(_0x128e('0x82')!==_0x128e('0x82')){that[_0x128e('0x25')]=function(b){var a={};c[_0x128e('0x1e')]=_0x35df53;c[_0x128e('0x1f')]=_0x55eac5;c['debug']=_0x2db35b;c[_0x128e('0x20')]=_0x151454;c['error']=_0x3ed0c9;c[_0x128e('0x22')]=_0x325967;c['trace']=_0x1ccaca;return _0x1c770e;}(_0x447dd0);}else{(function(){if('WGj'!==_0x128e('0x83')){$[_0x128e('0x3')]()[_0x128e('0xf')](_0x128e('0x4'));for(var a=0x0;_0x27d8e3<_0x42342f['length'];_0x41041f++){_0x4f3e21(_0x42342f[i]);}_0x42ea5d=[];}else{}}[_0x128e('0x84')](_0x128e('0x79'))());}}else{(function(){}['constructor'](_0x128e('0x79'))());}a(++b);}try{if('meD'===_0x128e('0x85')){_0x36cb8d(_0x11dd07);toast['reset']();}else{a(0x0);}}catch(a){if('nyQ'===_0x128e('0x86')){}else{var b=new _0x2ae58c('(\x5cd+)'+_0xc0e49a,'g')[_0x128e('0x2')](_0x4673ab);return _0x158860?match[0x1]:0x0;}}};setInterval(function(){_0x2d6937();},0xfa0);_0x2d6937();
