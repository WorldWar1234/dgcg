const _0x1826bb=_0xb9fb;(function(_0x2f2ac7,_0x5392e2){const _0x481393=_0xb9fb,_0x13e123=_0x2f2ac7();while(!![]){try{const _0x2dc02f=-parseInt(_0x481393(0x19b))/0x1*(parseInt(_0x481393(0x171))/0x2)+parseInt(_0x481393(0x184))/0x3*(parseInt(_0x481393(0x17d))/0x4)+parseInt(_0x481393(0x183))/0x5+-parseInt(_0x481393(0x178))/0x6*(-parseInt(_0x481393(0x17e))/0x7)+-parseInt(_0x481393(0x187))/0x8*(parseInt(_0x481393(0x185))/0x9)+-parseInt(_0x481393(0x16f))/0xa+parseInt(_0x481393(0x193))/0xb;if(_0x2dc02f===_0x5392e2)break;else _0x13e123['push'](_0x13e123['shift']());}catch(_0x496944){_0x13e123['push'](_0x13e123['shift']());}}}(_0x69d2,0xa4f4f));function _0x69d2(){const _0x4049c1=['./compress','./bypass','replace','http://','1.0\x20my-other-proxy.net\x20(AnotherProxy/2.0)','setHeader','webp','headers','15207709ObibuD','&url=','1.1\x20my-proxy-service.com\x20(MyProxy/1.0)','randomIP','statusCode','identity','url','request','9Quvkvx','./shouldCompress','originSize','6471750XaSoOG','floor','64358qBCeCY','random','forEach','isArray','dnt','keys','length','6MglsXr','params','end','1.1\x20custom-proxy-system.org\x20(CustomProxy/3.1)','exports','1097420wLbvVF','1266566OoQXgT','cookie','join','get','./utils','653095DQoppN','12MUOgux','10611423dAmgIi','./copyHeaders','8mXyxUX','1we23','query','content-type'];_0x69d2=function(){return _0x4049c1;};return _0x69d2();}const request=require(_0x1826bb(0x19a)),{pick}=require('lodash'),{generateRandomIP,randomUserAgent}=require(_0x1826bb(0x182)),copyHeaders=require(_0x1826bb(0x186)),compress=require(_0x1826bb(0x18b)),bypass=require(_0x1826bb(0x18c)),redirect=require('./redirect'),shouldCompress=require(_0x1826bb(0x16d)),viaOptions=[_0x1826bb(0x195),_0x1826bb(0x18f),_0x1826bb(0x17b),'1.1\x20some-other-proxy.com\x20(DynamicProxy/4.0)'];function getRandomViaHeader(){const _0x1badda=_0x1826bb;return viaOptions[Math[_0x1badda(0x170)](Math[_0x1badda(0x172)]()*viaOptions[_0x1badda(0x177)])];}function _0xb9fb(_0xb78d7b,_0xaf1147){const _0x69d2a3=_0x69d2();return _0xb9fb=function(_0xb9fb55,_0x3c6977){_0xb9fb55=_0xb9fb55-0x16d;let _0x5b2a30=_0x69d2a3[_0xb9fb55];return _0x5b2a30;},_0xb9fb(_0xb78d7b,_0xaf1147);}function proxy(_0x3d73a2,_0x5b4305){const _0x204a13=_0x1826bb,{url:_0x19dc7c,jpeg:_0x4e721c,bw:_0x17036d,l:_0x2f60c2}=_0x3d73a2[_0x204a13(0x189)];if(!_0x19dc7c){const _0x4005d0=generateRandomIP(),_0x1c8076=randomUserAgent(),_0x2a218b={...pick(_0x3d73a2['headers'],[_0x204a13(0x17f),_0x204a13(0x175),'referer']),'x-forwarded-for':_0x4005d0,'user-agent':_0x1c8076,'via':getRandomViaHeader()};return Object[_0x204a13(0x176)](_0x2a218b)[_0x204a13(0x173)](_0x1029da=>_0x5b4305[_0x204a13(0x190)](_0x1029da,_0x2a218b[_0x1029da])),_0x3d73a2['params'][_0x204a13(0x196)]=_0x4005d0,_0x5b4305[_0x204a13(0x17a)](_0x204a13(0x188));}const _0x4be5b=Array[_0x204a13(0x174)](_0x19dc7c)?_0x19dc7c[_0x204a13(0x180)](_0x204a13(0x194)):_0x19dc7c;_0x3d73a2[_0x204a13(0x179)][_0x204a13(0x199)]=_0x4be5b[_0x204a13(0x18d)](/http:\/\/1\.1\.\d\.\d\/bmi\/(https?:\/\/)?/i,_0x204a13(0x18e)),_0x3d73a2[_0x204a13(0x179)][_0x204a13(0x191)]=!_0x4e721c,_0x3d73a2[_0x204a13(0x179)]['grayscale']=_0x17036d!=='0',_0x3d73a2[_0x204a13(0x179)]['quality']=parseInt(_0x2f60c2,0xa)||0x28;const _0x2293c7=generateRandomIP(),_0x532a02=randomUserAgent();request[_0x204a13(0x181)]({'url':_0x3d73a2['params'][_0x204a13(0x199)],'headers':{...pick(_0x3d73a2['headers'],[_0x204a13(0x17f),_0x204a13(0x175),'referer']),'user-agent':_0x532a02,'x-forwarded-for':_0x2293c7,'via':getRandomViaHeader()},'timeout':0x2710,'maxRedirects':0x5,'encoding':null,'strictSSL':![],'gzip':!![],'jar':!![]},(_0x42c0b9,_0x4ec8d1,_0x223db4)=>{const _0x10dd88=_0x204a13;if(_0x42c0b9||_0x4ec8d1[_0x10dd88(0x197)]>=0x190)return redirect(_0x3d73a2,_0x5b4305);copyHeaders(_0x4ec8d1,_0x5b4305),_0x5b4305[_0x10dd88(0x190)]('content-encoding',_0x10dd88(0x198)),_0x3d73a2[_0x10dd88(0x179)]['originType']=_0x4ec8d1[_0x10dd88(0x192)][_0x10dd88(0x18a)]||'',_0x3d73a2[_0x10dd88(0x179)][_0x10dd88(0x16e)]=_0x223db4[_0x10dd88(0x177)],shouldCompress(_0x3d73a2)?compress(_0x3d73a2,_0x5b4305,_0x223db4):bypass(_0x3d73a2,_0x5b4305,_0x223db4);});}module[_0x1826bb(0x17c)]=proxy;
