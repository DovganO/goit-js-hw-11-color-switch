parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"en75":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}require("./css/common.css");var a=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r={startBtnEl:document.querySelector('button[data-action="start"]'),stopBtnEl:document.querySelector('button[data-action="stop"]')};r.startBtnEl.classList.add("btn","is-active"),r.stopBtnEl.classList.add("btn");var i=function(){function n(e){var a=e.startBtn;t(this,n),this.intervalId=null,this.isActive=!1,this.startBtn=a}return e(n,[{key:"start",value:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval(function(){document.body.style.backgroundColor=a[s(0,a.length-1)]},1e3))}},{key:"stop",value:function(){clearInterval(this.intervalId),this.isActive=!1}}]),n}(),s=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)},o=new i({startBtn:r.startBtnEl});r.startBtnEl.addEventListener("click",o.start.bind(o)),r.stopBtnEl.addEventListener("click",o.stop.bind(o));
},{"./css/common.css":"en75"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.1e2581d0.js.map