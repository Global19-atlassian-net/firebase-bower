!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(oe){"use strict";try{(function(){oe=oe&&Object.prototype.hasOwnProperty.call(oe,"default")?oe.default:oe;var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var u=function(){return(u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function p(t,s,a,c){return new(a=a||Promise)(function(r,e){function n(t){try{o(c.next(t))}catch(t){e(t)}}function i(t){try{o(c.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?r(t.value):((e=t.value)instanceof a?e:new a(function(t){t(e)})).then(n,i)}o((c=c.apply(t,s||[])).next())})}function S(r,n){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(r,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function a(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function n(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}var i,t,e,g=(i=Error,r(t=s,e=i),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o),s);function o(){this.constructor=t}function s(t,e){var r=i.call(this,e)||this;return r.code=t,r.name="FirebaseError",Object.setPrototypeOf(r,s.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,c.prototype.create),r}var c=(l.prototype.create=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n,i=e[0]||{},o=this.service+"/"+t,s=this.errors[t],a=s?(n=i,s.replace(d,function(t,e){var r=n[e];return null!=r?String(r):"<"+e+"?>"})):"Error",c=this.serviceName+": "+a+" ("+o+").",u=new g(o,c),l=0,f=Object.keys(i);l<f.length;l++){var h=f[l];"_"!==h.slice(-1)&&(h in u&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),u[h]=i[h])}return u},l);function l(t,e,r){this.service=t,this.serviceName=e,this.errors=r}var d=/\{\$([^}]+)}/g,f=(h.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},h.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},h.prototype.setServiceProps=function(t){return this.serviceProps=t,this},h);function h(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function v(r){return new Promise(function(t,e){r.onsuccess=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function y(r,n,i){var o,t=new Promise(function(t,e){v(o=r[n].apply(r,i)).then(t,e)});return t.request=o,t}function m(t,r,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[r][e]},set:function(t){this[r][e]=t}})})}function b(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return y(this[r],t,arguments)})})}function w(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return this[r][t].apply(this[r],arguments)})})}function _(t,n,e,r){r.forEach(function(r){r in e.prototype&&(t.prototype[r]=function(){return t=this[n],(e=y(t,r,arguments)).then(function(t){if(t)return new C(t,e.request)});var t,e})})}function E(t){this._index=t}function C(t,e){this._cursor=t,this._request=e}function T(t){this._store=t}function I(r){this._tx=r,this.complete=new Promise(function(t,e){r.oncomplete=function(){t()},r.onerror=function(){e(r.error)},r.onabort=function(){e(r.error)}})}function L(t,e,r){this._db=t,this.oldVersion=e,this.transaction=new I(r)}function O(t){this._db=t}m(E,"_index",["name","keyPath","multiEntry","unique"]),b(E,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),_(E,"_index",IDBIndex,["openCursor","openKeyCursor"]),m(C,"_cursor",["direction","key","primaryKey","value"]),b(C,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(r){r in IDBCursor.prototype&&(C.prototype[r]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[r].apply(e._cursor,t),v(e._request).then(function(t){if(t)return new C(t,e._request)})})})}),T.prototype.createIndex=function(){return new E(this._store.createIndex.apply(this._store,arguments))},T.prototype.index=function(){return new E(this._store.index.apply(this._store,arguments))},m(T,"_store",["name","keyPath","indexNames","autoIncrement"]),b(T,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),_(T,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),w(T,"_store",IDBObjectStore,["deleteIndex"]),I.prototype.objectStore=function(){return new T(this._tx.objectStore.apply(this._tx,arguments))},m(I,"_tx",["objectStoreNames","mode"]),w(I,"_tx",IDBTransaction,["abort"]),L.prototype.createObjectStore=function(){return new T(this._db.createObjectStore.apply(this._db,arguments))},m(L,"_db",["name","version","objectStoreNames"]),w(L,"_db",IDBDatabase,["deleteObjectStore","close"]),O.prototype.transaction=function(){return new I(this._db.transaction.apply(this._db,arguments))},m(O,"_db",["name","version","objectStoreNames"]),w(O,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[T,E].forEach(function(t){o in t.prototype&&(t.prototype[o.replace("open","iterate")]=function(){var t,e=(t=arguments,Array.prototype.slice.call(t)),r=e[e.length-1],n=this._store||this._index,i=n[o].apply(n,e.slice(0,-1));i.onsuccess=function(){r(i.result)}})})}),[E,T].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,r){var n=this,i=[];return new Promise(function(e){n.iterateCursor(t,function(t){t?(i.push(t.value),void 0===r||i.length!=r?t.continue():e(i)):e(i)})})})});var P,k="0.4.13",M=1e4,F="w:"+k,j="FIS_v2",N="https://firebaseinstallations.googleapis.com/v1",A=36e5,R=((P={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',P["not-registered"]="Firebase Installation is not registered.",P["installation-not-found"]="Firebase Installation not found.",P["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',P["app-offline"]="Could not process request. Application offline.",P["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",P),D=new c("installations","Installations",R);function x(t){return t instanceof g&&t.code.includes("request-failed")}function B(t){var e=t.projectId;return N+"/projects/"+e+"/installations"}function q(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function H(n,i){return p(this,void 0,void 0,function(){var e,r;return S(this,function(t){switch(t.label){case 0:return[4,i.json()];case 1:return e=t.sent(),r=e.error,[2,D.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function K(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function V(t,e){var r=e.refreshToken,n=K(t);return n.append("Authorization",j+" "+r),n}function z(r){return p(this,void 0,void 0,function(){var e;return S(this,function(t){switch(t.label){case 0:return[4,r()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,r()]:[2,e]}})})}function U(e){return new Promise(function(t){setTimeout(t,e)})}function $(t){return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t}(t))).replace(/\+/g,"-").replace(/\//g,"_")}var G=/^[cdef][\w-]{21}$/,W="";function J(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=$(t).substr(0,22);return G.test(e)?e:W}catch(t){return W}}function Y(t){return t.appName+"!"+t.appId}var Z=new Map;function Q(t,e){var r=Y(t);X(r,e),function(t,e){var r=et();r&&r.postMessage({key:t,fid:e});rt()}(r,e)}function X(t,e){var r,n,i=Z.get(t);if(i)try{for(var o=a(i),s=o.next();!s.done;s=o.next()){(0,s.value)(e)}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}var tt=null;function et(){return!tt&&"BroadcastChannel"in self&&((tt=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){X(t.data.key,t.data.fid)}),tt}function rt(){0===Z.size&&tt&&(tt.close(),tt=null)}var nt,it,ot,st,at="firebase-installations-database",ct=1,ut="firebase-installations-store",lt=null;function ft(){var e,t,r;return lt||(e=function(t){switch(t.oldVersion){case 0:t.createObjectStore(ut)}},t=y(indexedDB,"open",[at,ct]),(r=t.request)&&(r.onupgradeneeded=function(t){e&&e(new L(r.result,t.oldVersion,r.transaction))}),lt=t.then(function(t){return new O(t)})),lt}function ht(s,a){return p(this,void 0,void 0,function(){var e,r,n,i,o;return S(this,function(t){switch(t.label){case 0:return e=Y(s),[4,ft()];case 1:return r=t.sent(),n=r.transaction(ut,"readwrite"),[4,(i=n.objectStore(ut)).get(e)];case 2:return o=t.sent(),[4,i.put(a,e)];case 3:return t.sent(),[4,n.complete];case 4:return t.sent(),o&&o.fid===a.fid||Q(s,a.fid),[2,a]}})})}function pt(i){return p(this,void 0,void 0,function(){var e,r,n;return S(this,function(t){switch(t.label){case 0:return e=Y(i),[4,ft()];case 1:return r=t.sent(),[4,(n=r.transaction(ut,"readwrite")).objectStore(ut).delete(e)];case 2:return t.sent(),[4,n.complete];case 3:return t.sent(),[2]}})})}function gt(a,c){return p(this,void 0,void 0,function(){var e,r,n,i,o,s;return S(this,function(t){switch(t.label){case 0:return e=Y(a),[4,ft()];case 1:return r=t.sent(),n=r.transaction(ut,"readwrite"),[4,(i=n.objectStore(ut)).get(e)];case 2:return o=t.sent(),void 0!==(s=c(o))?[3,4]:[4,i.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,i.put(s,e)];case 5:t.sent(),t.label=6;case 6:return[4,n.complete];case 7:return t.sent(),!s||o&&o.fid===s.fid||Q(a,s.fid),[2,s]}})})}function dt(i){return p(this,void 0,void 0,function(){var n,e,r;return S(this,function(t){switch(t.label){case 0:return[4,gt(i,function(t){var e=yt(t||{fid:J(),registrationStatus:0}),r=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(o){return p(this,void 0,void 0,function(){var e,r,n,i;return S(this,function(t){switch(t.label){case 0:return[4,vt(o)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,U(100)];case 3:return t.sent(),[4,vt(o)];case 4:return e=t.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,dt(o)];case 6:return r=t.sent(),n=r.installationEntry,(i=r.registrationPromise)?[2,i]:[2,n];case 7:return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var r=Promise.reject(D.create("app-offline"));return{installationEntry:e,registrationPromise:r}}var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(n,i){return p(this,void 0,void 0,function(){var e,r;return S(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(a,t){var c=t.fid;return p(this,void 0,void 0,function(){var e,r,n,i,o,s;return S(this,function(t){switch(t.label){case 0:return e=B(a),r=K(a),n={fid:c,authVersion:j,appId:a.appId,sdkVersion:F},i={method:"POST",headers:r,body:JSON.stringify(n)},[4,z(function(){return fetch(e,i)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return s=t.sent(),[2,{fid:s.fid||c,registrationStatus:2,refreshToken:s.refreshToken,authToken:q(s.authToken)}];case 3:return[4,H("Create Installation",o)];case 4:throw t.sent()}})})}(n,i)];case 1:return e=t.sent(),[2,ht(n,e)];case 2:return x(r=t.sent())&&409===r.serverCode?[4,pt(n)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,ht(n,{fid:i.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw r;case 7:return[2]}})})}(t,n);return{installationEntry:n,registrationPromise:i}}}(i,e);return n=r.registrationPromise,r.installationEntry})];case 1:return(e=t.sent()).fid!==W?[3,3]:(r={},[4,n]);case 2:return[2,(r.installationEntry=t.sent(),r)];case 3:return[2,{installationEntry:e,registrationPromise:n}]}})})}function vt(t){return gt(t,function(t){if(!t)throw D.create("installation-not-found");return yt(t)})}function yt(t){return 1===(e=t).registrationStatus&&e.registrationTime+M<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function mt(t,l){var f=t.appConfig,h=t.platformLoggerProvider;return p(this,void 0,void 0,function(){var n,i,o,s,a,c,u;return S(this,function(t){switch(t.label){case 0:return e=f,r=l.fid,n=B(e)+"/"+r+"/authTokens:generate",i=V(f,l),(o=h.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),s={installation:{sdkVersion:F}},a={method:"POST",headers:i,body:JSON.stringify(s)},[4,z(function(){return fetch(n,a)})];case 1:return(c=t.sent()).ok?[4,c.json()]:[3,3];case 2:return u=t.sent(),[2,q(u)];case 3:return[4,H("Generate Auth Token",c)];case 4:throw t.sent()}var e,r})})}function bt(a,c){return void 0===c&&(c=!1),p(this,void 0,void 0,function(){var s,e,r;return S(this,function(t){switch(t.label){case 0:return[4,gt(a.appConfig,function(t){if(!_t(t))throw D.create("not-registered");var e,r,n,i=t.authToken;if(c||2!==(n=i).requestStatus||function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+A}(n)){if(1===i.requestStatus)return s=function(n,i){return p(this,void 0,void 0,function(){var e,r;return S(this,function(t){switch(t.label){case 0:return[4,wt(n.appConfig)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,U(100)];case 3:return t.sent(),[4,wt(n.appConfig)];case 4:return e=t.sent(),[3,2];case 5:return 0===(r=e.authToken).requestStatus?[2,bt(n,i)]:[2,r]}})})}(a,c),t;if(!navigator.onLine)throw D.create("app-offline");var o=(e=t,r={requestStatus:1,requestTime:Date.now()},u(u({},e),{authToken:r}));return s=function(i,o){return p(this,void 0,void 0,function(){var e,r,n;return S(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,mt(i,o)];case 1:return e=t.sent(),n=u(u({},o),{authToken:e}),[4,ht(i.appConfig,n)];case 2:return t.sent(),[2,e];case 3:return!x(r=t.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,pt(i.appConfig)];case 4:return t.sent(),[3,7];case 5:return n=u(u({},o),{authToken:{requestStatus:0}}),[4,ht(i.appConfig,n)];case 6:t.sent(),t.label=7;case 7:throw r;case 8:return[2]}})})}(a,o),o}return t})];case 1:return e=t.sent(),s?[4,s]:[3,3];case 2:return r=t.sent(),[3,4];case 3:r=e.authToken,t.label=4;case 4:return[2,r]}})})}function wt(t){return gt(t,function(t){if(!_t(t))throw D.create("not-registered");var e,r=t.authToken;return 1===(e=r).requestStatus&&e.requestTime+M<Date.now()?u(u({},t),{authToken:{requestStatus:0}}):t})}function _t(t){return void 0!==t&&2===t.registrationStatus}function St(e,r){return void 0===r&&(r=!1),p(this,void 0,void 0,function(){return S(this,function(t){switch(t.label){case 0:return[4,function(r){return p(this,void 0,void 0,function(){var e;return S(this,function(t){switch(t.label){case 0:return[4,dt(r)];case 1:return(e=t.sent().registrationPromise)?[4,e]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e.appConfig)];case 1:return t.sent(),[4,bt(e,r)];case 2:return[2,t.sent().token]}})})}function Et(a,c){return p(this,void 0,void 0,function(){var n,i,o,s;return S(this,function(t){switch(t.label){case 0:return e=a,r=c.fid,n=B(e)+"/"+r,i=V(a,c),o={method:"DELETE",headers:i},[4,z(function(){return fetch(n,o)})];case 1:return(s=t.sent()).ok?[3,3]:[4,H("Delete Installation",s)];case 2:throw t.sent();case 3:return[2]}var e,r})})}function Ct(t,n){var i=t.appConfig;return function(t,e){et();var r=Y(t),n=Z.get(r);n||(n=new Set,Z.set(r,n)),n.add(e)}(i,n),function(){var t,e,r;t=n,e=Y(i),(r=Z.get(e))&&(r.delete(t),0===r.size&&Z.delete(e),rt())}}function Tt(t){return D.create("missing-app-config-values",{valueName:t})}function It(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}(nt=oe).INTERNAL.registerComponent(new f("installations",function(t){var e=t.getProvider("app").getImmediate(),r={appConfig:function(t){var e,r;if(!t||!t.options)throw Tt("App Configuration");if(!t.name)throw Tt("App Name");try{for(var n=a(["projectId","apiKey","appId"]),i=n.next();!i.done;i=n.next()){var o=i.value;if(!t.options[o])throw Tt(o)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(i){return p(this,void 0,void 0,function(){var e,r,n;return S(this,function(t){switch(t.label){case 0:return[4,dt(i.appConfig)];case 1:return e=t.sent(),r=e.installationEntry,(n=e.registrationPromise)?n.catch(console.error):bt(i).catch(console.error),[2,r.fid]}})})}(r)},getToken:function(t){return St(r,t)},delete:function(){return function(n){return p(this,void 0,void 0,function(){var e,r;return S(this,function(t){switch(t.label){case 0:return[4,gt(e=n.appConfig,function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(r=t.sent()))return[3,6];if(1!==r.registrationStatus)return[3,2];throw D.create("delete-pending-registration");case 2:if(2!==r.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw D.create("app-offline");case 3:return[4,Et(e,r)];case 4:return t.sent(),[4,pt(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(r)},onIdChange:function(t){return Ct(r,t)}}},"PUBLIC")),nt.registerVersion("@firebase/installations",k),(st=ot=ot||{})[st.DEBUG=0]="DEBUG",st[st.VERBOSE=1]="VERBOSE",st[st.INFO=2]="INFO",st[st.WARN=3]="WARN",st[st.ERROR=4]="ERROR",st[st.SILENT=5]="SILENT";function Lt(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(e<t.logLevel)){var i=(new Date).toISOString(),o=kt[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,It(["["+i+"]  "+t.name+":"],r))}}var Ot={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},Pt=ot.INFO,kt=((it={})[ot.DEBUG]="log",it[ot.VERBOSE]="log",it[ot.INFO]="info",it[ot.WARN]="warn",it[ot.ERROR]="error",it),Mt=(Object.defineProperty(Ft.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in ot))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!0,configurable:!0}),Ft.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?Ot[t]:t},Object.defineProperty(Ft.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!0,configurable:!0}),Object.defineProperty(Ft.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!0,configurable:!0}),Ft.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,It([this,ot.DEBUG],t)),this._logHandler.apply(this,It([this,ot.DEBUG],t))},Ft.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,It([this,ot.VERBOSE],t)),this._logHandler.apply(this,It([this,ot.VERBOSE],t))},Ft.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,It([this,ot.INFO],t)),this._logHandler.apply(this,It([this,ot.INFO],t))},Ft.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,It([this,ot.WARN],t)),this._logHandler.apply(this,It([this,ot.WARN],t))},Ft.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,It([this,ot.ERROR],t)),this._logHandler.apply(this,It([this,ot.ERROR],t))},Ft);function Ft(t){this.name=t,this._logLevel=Pt,this._logHandler=Lt,this._userLogHandler=null}var jt,Nt=(At.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var r=Date.now()-e,n=r<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+r+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+n+"."),n},At.prototype.fetch=function(s){return p(this,void 0,void 0,function(){var e,r,n,i,o;return S(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=t.sent(),r=e[0],(n=e[1])&&this.isCachedDataFresh(s.cacheMaxAgeMillis,r)?[2,n]:(s.eTag=n&&n.eTag,[4,this.client.fetch(s)]);case 2:return i=t.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===i.status&&o.push(this.storage.setLastSuccessfulFetchResponse(i)),[4,Promise.all(o)];case 3:return t.sent(),[2,i]}})})},At);function At(t,e,r,n){this.client=t,this.storage=e,this.storageCache=r,this.logger=n}var Rt=((jt={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",jt["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",jt["registration-api-key"]="Undefined API key. Check Firebase app initialization.",jt["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",jt["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",jt["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",jt["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",jt["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",jt["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",jt["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',jt["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',jt["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",jt["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",jt),Dt=new c("remoteconfig","Remote Config",Rt);var xt=(Bt.prototype.fetch=function(_){return p(this,void 0,void 0,function(){var r,n,i,o,s,a,c,u,l,f,h,p,g,d,v,y,m,b,w;return S(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:r=t.sent(),n=r[0],i=r[1],o=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",s=o+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,a={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":_.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:i,app_id:this.appId,language_code:(void 0===e&&(e=navigator),e.languages&&e.languages[0]||e.language)},u={method:"POST",headers:a,body:JSON.stringify(c)},l=fetch(s,u),f=new Promise(function(t,e){_.signal.addEventListener(function(){var t=new Error("The operation was aborted.");t.name="AbortError",e(t)})}),t.label=2;case 2:return t.trys.push([2,5,,6]),[4,Promise.race([l,f])];case 3:return t.sent(),[4,l];case 4:return h=t.sent(),[3,6];case 5:throw p=t.sent(),g="fetch-client-network","AbortError"===p.name&&(g="fetch-timeout"),Dt.create(g,{originalErrorMessage:p.message});case 6:if(d=h.status,v=h.headers.get("ETag")||void 0,200!==h.status)return[3,11];b=void 0,t.label=7;case 7:return t.trys.push([7,9,,10]),[4,h.json()];case 8:return b=t.sent(),[3,10];case 9:throw w=t.sent(),Dt.create("fetch-client-parse",{originalErrorMessage:w.message});case 10:y=b.entries,m=b.state,t.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===m?d=500:"NO_CHANGE"===m?d=304:"NO_TEMPLATE"!==m&&"EMPTY_CONFIG"!==m||(y={}),304!==d&&200!==d)throw Dt.create("fetch-status",{httpStatus:d});return[2,{status:d,eTag:v,config:y}]}var e})})},Bt);function Bt(t,e,r,n,i,o){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=r,this.projectId=n,this.apiKey=i,this.appId=o}var qt=(Ht.prototype.addEventListener=function(t){this.listeners.push(t)},Ht.prototype.abort=function(){this.listeners.forEach(function(t){return t()})},Ht);function Ht(){this.listeners=[]}var Kt=["1","true","t","yes","y","on"],Vt=(zt.prototype.asString=function(){return this._value},zt.prototype.asBoolean=function(){return"static"!==this._source&&0<=Kt.indexOf(this._value.toLowerCase())},zt.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},zt.prototype.getSource=function(){return this._source},zt);function zt(t,e){void 0===e&&(e=""),this._source=t,this._value=e}var Ut=($t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=ot.DEBUG;break;case"silent":this._logger.logLevel=ot.SILENT;break;default:this._logger.logLevel=ot.ERROR}},Object.defineProperty($t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!0,configurable:!0}),Object.defineProperty($t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!0,configurable:!0}),$t.prototype.activate=function(){return p(this,void 0,void 0,function(){var e,r,n;return S(this,function(t){switch(t.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return e=t.sent(),r=e[0],n=e[1],r&&r.config&&r.eTag&&r.eTag!==n?[4,Promise.all([this._storageCache.setActiveConfig(r.config),this._storage.setActiveConfigEtag(r.eTag)])]:[2,!1];case 2:return t.sent(),[2,!0]}})})},$t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then(function(){t._isInitializationComplete=!0})),this._initializePromise},$t.prototype.fetch=function(){return p(this,void 0,void 0,function(){var n,i,o,s=this;return S(this,function(t){switch(t.label){case 0:n=new qt,setTimeout(function(){return p(s,void 0,void 0,function(){return S(this,function(t){return n.abort(),[2]})})},this.settings.fetchTimeoutMillis),t.label=1;case 1:return t.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:n})];case 2:return t.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return t.sent(),[3,6];case 4:return i=t.sent(),r="fetch-throttle",o=(e=i)instanceof g&&-1!==e.code.indexOf(r)?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(o)];case 5:throw t.sent(),i;case 6:return[2]}var e,r})})},$t.prototype.fetchAndActivate=function(){return p(this,void 0,void 0,function(){return S(this,function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}})})},$t.prototype.getAll=function(){var r=this;return function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(u(u({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce(function(t,e){return t[e]=r.getValue(e),t},{})},$t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},$t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},$t.prototype.getString=function(t){return this.getValue(t).asString()},$t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new Vt("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new Vt("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new Vt("static"))},$t);function $t(t,e,r,n,i){this.app=t,this._client=e,this._storageCache=r,this._storage=n,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}function Gt(t,e){var r=t.target.error||void 0;return Dt.create(e,{originalErrorMessage:r&&r.message})}var Wt="app_namespace_store",Jt="firebase_remote_config",Yt=1;var Zt=(Qt.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},Qt.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},Qt.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},Qt.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},Qt.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},Qt.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},Qt.prototype.getActiveConfig=function(){return this.get("active_config")},Qt.prototype.setActiveConfig=function(t){return this.set("active_config",t)},Qt.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},Qt.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},Qt.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},Qt.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},Qt.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},Qt.prototype.get=function(a){return p(this,void 0,void 0,function(){var o,s=this;return S(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(r,e){var t=o.transaction([Wt],"readonly").objectStore(Wt),n=s.createCompositeKey(a);try{var i=t.get(n);i.onerror=function(t){e(Gt(t,"storage-get"))},i.onsuccess=function(t){var e=t.target.result;r(e?e.value:void 0)}}catch(t){e(Dt.create("storage-get",{originalErrorMessage:t&&t.message}))}})]}})})},Qt.prototype.set=function(a,c){return p(this,void 0,void 0,function(){var o,s=this;return S(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(t,e){var r=o.transaction([Wt],"readwrite").objectStore(Wt),n=s.createCompositeKey(a);try{var i=r.put({compositeKey:n,value:c});i.onerror=function(t){e(Gt(t,"storage-set"))},i.onsuccess=function(){t()}}catch(t){e(Dt.create("storage-set",{originalErrorMessage:t&&t.message}))}})]}})})},Qt.prototype.delete=function(a){return p(this,void 0,void 0,function(){var o,s=this;return S(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return o=t.sent(),[2,new Promise(function(t,e){var r=o.transaction([Wt],"readwrite").objectStore(Wt),n=s.createCompositeKey(a);try{var i=r.delete(n);i.onerror=function(t){e(Gt(t,"storage-delete"))},i.onsuccess=function(){t()}}catch(t){e(Dt.create("storage-delete",{originalErrorMessage:t&&t.message}))}})]}})})},Qt.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},Qt);function Qt(t,e,r,n){void 0===n&&(n=new Promise(function(e,r){var t=indexedDB.open(Jt,Yt);t.onerror=function(t){r(Gt(t,"storage-open"))},t.onsuccess=function(t){e(t.target.result)},t.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(Wt,{keyPath:"compositeKey"})}}})),this.appId=t,this.appName=e,this.namespace=r,this.openDbPromise=n}var Xt=(te.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},te.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},te.prototype.getActiveConfig=function(){return this.activeConfig},te.prototype.loadFromStorage=function(){return p(this,void 0,void 0,function(){var e,r,n,i,o,s;return S(this,function(t){switch(t.label){case 0:return e=this.storage.getLastFetchStatus(),r=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),[4,e];case 1:return(i=t.sent())&&(this.lastFetchStatus=i),[4,r];case 2:return(o=t.sent())&&(this.lastSuccessfulFetchTimestampMillis=o),[4,n];case 3:return(s=t.sent())&&(this.activeConfig=s),[2]}})})},te.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},te.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},te.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},te);function te(t){this.storage=t}var ee=(re.prototype.fetch=function(r){return p(this,void 0,void 0,function(){var e;return S(this,function(t){switch(t.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=t.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(r,e)]}})})},re.prototype.attemptFetch=function(u,t){var l=t.throttleEndTimeMillis,f=t.backoffCount;return p(this,void 0,void 0,function(){var s,a,c;return S(this,function(t){switch(t.label){case 0:return[4,(i=u.signal,o=l,new Promise(function(t,e){var r=Math.max(o-Date.now(),0),n=setTimeout(t,r);i.addEventListener(function(){clearTimeout(n),e(Dt.create("fetch-throttle",{throttleEndTimeMillis:o}))})}))];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,5,,7]),[4,this.client.fetch(u)];case 3:return s=t.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return t.sent(),[2,s];case 5:if(!function(t){if(t instanceof g){var e=Number(t.httpStatus);return 429===e||500===e||503===e||504===e}}(a=t.sent()))throw a;return c={throttleEndTimeMillis:Date.now()+(e=f,r=1e3*Math.pow(2,e),n=Math.round(.5*r*(Math.random()-.5)*2),Math.min(144e5,r+n)),backoffCount:f+1},[4,this.storage.setThrottleMetadata(c)];case 6:return t.sent(),[2,this.attemptFetch(u,c)];case 7:return[2]}var e,r,n,i,o})})},re);function re(t,e){this.client=t,this.storage=e}var ne,ie="@firebase/remote-config";(ne=oe).INTERNAL.registerComponent(new f("remoteConfig",function(t,e){var r=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();if("undefined"==typeof window)throw Dt.create("registration-window");var i=r.options,o=i.projectId,s=i.apiKey,a=i.appId;if(!o)throw Dt.create("registration-project-id");if(!s)throw Dt.create("registration-api-key");if(!a)throw Dt.create("registration-app-id");e=e||"firebase";var c=new Zt(a,r.name,e),u=new Xt(c),l=new Mt(ie);l.logLevel=ot.ERROR;var f=new xt(n,ne.SDK_VERSION,e,o,s,a),h=new ee(f,c),p=new Nt(h,c,u,l),g=new Ut(r,p,u,c,l);return g.ensureInitialized(),g},"PUBLIC").setMultipleInstances(!0)),ne.registerVersion(ie,"0.1.24")}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-remote-config.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-remote-config.js.map
