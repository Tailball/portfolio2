"use strict";var precacheConfig=[["/index.html","d715cb8d85dc39be3e4b7579080b10f8"],["/static/css/main.02fa95e5.css","84211ac5dc6ba26b002af3836edc4e82"],["/static/js/main.cc378671.js","a919d9a525b6f8660e0ff3fd04ee74a1"],["/static/media/10_punkrocknight.fecf2736.jpg","fecf27368834b7ca2a6ecfbd75d09a58"],["/static/media/10_punkrocknight_full.fd3f4e41.jpg","fd3f4e41eae3e9841fb7cdb4780c9d57"],["/static/media/11_portfolio.665fb931.jpg","665fb93193957da52f0ba2897798874c"],["/static/media/11_portfolio_full.094078d3.jpg","094078d3d643ff22fb8f68243012f092"],["/static/media/12_oolf.f0da944a.jpg","f0da944a29302b8ffe1c67d5179eb641"],["/static/media/12_oolf_full.15185158.jpg","151851584e4b5269329b354dd48e2cdc"],["/static/media/1_moodwood.3abd5b80.jpg","3abd5b80713ed8a903d4e60e5dff4798"],["/static/media/1_moodwood_full.13c1a683.jpg","13c1a68338086def57d70fd11266e48b"],["/static/media/2_rumspringa.266e2fba.jpg","266e2fba8ddf831a8beb4f0db01e4e43"],["/static/media/2_rumspringa_full.d2f9a298.jpg","d2f9a2985bf0a499bc995918b81ac628"],["/static/media/3_punklives.3016d585.jpg","3016d585aa469ac69c4f0a596a13b49d"],["/static/media/3_punklives_full.15acad26.jpg","15acad26cff1345c68686b249776654c"],["/static/media/4_punkrocknight.f58f32de.jpg","f58f32de743da0d7b94947a92f8ce069"],["/static/media/4_punkrocknight_full.b9e8c48a.jpg","b9e8c48a2947a61f5e9f166fe92a2b33"],["/static/media/5_cremekarfest.c364e23d.jpg","c364e23d62735aa2df7eb2ff03785e01"],["/static/media/5_cremekarfest_full.7bf526a0.jpg","7bf526a0ed023a185129831741b6c23e"],["/static/media/5_daily.7e98d912.jpg","7e98d91272a64f0aa2fd9281aa7ab1ea"],["/static/media/5_daily_full.3d933d1f.jpg","3d933d1f827fbdad12fef69fe09f777c"],["/static/media/6_punkrockbrawl.41aafea2.jpg","41aafea2c3177dacbe6694fb9b0d23c9"],["/static/media/6_punkrockbrawl_full.9eecfe52.jpg","9eecfe52d114ceea5a46794deb7d5523"],["/static/media/7_pennywasright.de4dee35.jpg","de4dee352e6aade44de79e5a6231002a"],["/static/media/7_pennywasright_full.51892694.jpg","518926947e7fc2f3f8e52d8877691c01"],["/static/media/8_elephant.2998817d.jpg","2998817d0ccbaa0e67ef6bc614083dfa"],["/static/media/8_elephant_full.a85c37dc.jpg","a85c37dc2415dc09b585970a03541b9a"],["/static/media/9_foriam.abe71de7.jpg","abe71de711be9253490d6628dfb22396"],["/static/media/9_foriam_full.1da232c9.jpg","1da232c9ef3d6fc9897d5bf65b698161"],["/static/media/cable-call-communication-33999.b7f42a2f.jpg","b7f42a2f41d2f1bbf62eab7742641abd"],["/static/media/pexels-photo-1142948.d496cad2.jpeg","d496cad2a256b2fb6e3fab214f92015f"],["/static/media/pexels-photo.169899cf.jpg","169899cff956663f349d4a1dc9c47dce"],["/static/media/steve-roe-711013-unsplash.d2379c28.jpg","d2379c28f87bc5307ecad425d3a55c70"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});