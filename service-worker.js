"use strict";var precacheConfig=[["./index.html","de9f6fb09bb067f059d9c5c12cbea014"],["./static/css/main.22a98aed.css","c79db99400225d05975a99d55cc43a33"],["./static/js/main.4bac41e9.js","32cdba6608b1b176a2fe65ea73e3d45f"],["./static/media/atom.2041ba91.png","2041ba917bcd156e5d47f9011434ce8f"],["./static/media/bootstrap.22aa4d50.png","22aa4d502fc451a5ff07f67a8bedc272"],["./static/media/css.e605b589.png","e605b5899b620b782f5158c1bc1b226f"],["./static/media/electron.4df35abe.png","4df35abe8debc45e50c0d670409fac8c"],["./static/media/github.23b7069e.png","23b7069e350d18c7cb26fe3e5416a7bf"],["./static/media/gulp.2e168618.png","2e1686188938c972f31e38b52a1c3092"],["./static/media/html5.5b1db1c2.png","5b1db1c2f6cc5b6e1f3ef32c36de8317"],["./static/media/jQuery.949581b1.png","949581b17e67185c62df49fd8cdd0dbc"],["./static/media/js.8ed833b2.png","8ed833b2919daa173fedbf599c59064d"],["./static/media/linux.5a57dd35.png","5a57dd352be2b49e17ee44ec08a353eb"],["./static/media/macos.e42e5e71.png","e42e5e712d5a9cdcb399da655588f406"],["./static/media/materialize.3c2c40a1.png","3c2c40a1962d1f47c3950acf2143ef24"],["./static/media/react.d7b0dfeb.png","d7b0dfeb24556e88c4287d724d71533d"],["./static/media/rwd.f9812681.png","f981268167cbc45103cb4be3b06b6e54"],["./static/media/sass.efa28760.png","efa287600fda317c9b88c2299cc26e5a"],["./static/media/trianglify.553e86bd.svg","553e86bd6e6584547905b2c0176d57da"],["./static/media/webpack.30efd0ef.png","30efd0ef2acc99107b4d640da173e794"],["./static/media/windows.dec63c00.png","dec63c00c4b84ec1828c9aa3f5f3dc53"],["./static/media/wordpress.b7f62e59.png","b7f62e594d8f0b4104e0cd7bb400b52c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});