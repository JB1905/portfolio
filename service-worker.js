"use strict";var precacheConfig=[["/portfolio-alpha/index.html","2d962cdaa97c51f84da39597e143ffba"],["/portfolio-alpha/static/css/main.ed963468.css","3af30d932bc17e3e443585924d980a75"],["/portfolio-alpha/static/js/main.a6956b9a.js","32e30b3027496b3591da491f2bf62480"],["/portfolio-alpha/static/media/atom.2041ba91.png","2041ba917bcd156e5d47f9011434ce8f"],["/portfolio-alpha/static/media/bootstrap.22aa4d50.png","22aa4d502fc451a5ff07f67a8bedc272"],["/portfolio-alpha/static/media/css.e605b589.png","e605b5899b620b782f5158c1bc1b226f"],["/portfolio-alpha/static/media/electron.4df35abe.png","4df35abe8debc45e50c0d670409fac8c"],["/portfolio-alpha/static/media/github.23b7069e.png","23b7069e350d18c7cb26fe3e5416a7bf"],["/portfolio-alpha/static/media/gulp.2e168618.png","2e1686188938c972f31e38b52a1c3092"],["/portfolio-alpha/static/media/html5.5b1db1c2.png","5b1db1c2f6cc5b6e1f3ef32c36de8317"],["/portfolio-alpha/static/media/jQuery.949581b1.png","949581b17e67185c62df49fd8cdd0dbc"],["/portfolio-alpha/static/media/js.8ed833b2.png","8ed833b2919daa173fedbf599c59064d"],["/portfolio-alpha/static/media/linux.5a57dd35.png","5a57dd352be2b49e17ee44ec08a353eb"],["/portfolio-alpha/static/media/macos.e42e5e71.png","e42e5e712d5a9cdcb399da655588f406"],["/portfolio-alpha/static/media/materialize.3c2c40a1.png","3c2c40a1962d1f47c3950acf2143ef24"],["/portfolio-alpha/static/media/react.d7b0dfeb.png","d7b0dfeb24556e88c4287d724d71533d"],["/portfolio-alpha/static/media/rwd.f9812681.png","f981268167cbc45103cb4be3b06b6e54"],["/portfolio-alpha/static/media/sass.efa28760.png","efa287600fda317c9b88c2299cc26e5a"],["/portfolio-alpha/static/media/trianglify.553e86bd.svg","553e86bd6e6584547905b2c0176d57da"],["/portfolio-alpha/static/media/webpack.30efd0ef.png","30efd0ef2acc99107b4d640da173e794"],["/portfolio-alpha/static/media/windows.dec63c00.png","dec63c00c4b84ec1828c9aa3f5f3dc53"],["/portfolio-alpha/static/media/wordpress.b7f62e59.png","b7f62e594d8f0b4104e0cd7bb400b52c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/portfolio-alpha/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});