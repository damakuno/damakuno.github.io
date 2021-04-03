(()=>{var e={340:(e,n,r)=>{"use strict";r.d(n,{Z:()=>i});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"body {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 10% 20% auto 20% 10%;\r\n    grid-template-rows: 20% 30% auto;    \r\n    height: 100%;\r\n}\r\n\r\n.item-h {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    justify-self: center;\r\n}\r\n\r\n.item-logo {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 3;\r\n    grid-row-end: 3;\r\n    justify-self: center;\r\n    border-radius: 50px;\r\n}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},18:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>a});var t=r(379),o=r.n(t),i=r(340);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,n,r)=>{"use strict";var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),i=[];function a(e){for(var n=-1,r=0;r<i.length;r++)if(i[r].identifier===e){n=r;break}return n}function s(e,n){for(var r={},t=[],o=0;o<e.length;o++){var s=e[o],c=n.base?s[0]+n.base:s[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var l=a(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:u,updater:m(f,n),references:1}),t.push(u)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function l(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,v=0;function m(e,n){var r,t,o;if(n.singleton){var i=v++;r=p||(p=c(n)),t=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=c(n),t=f.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var c=s(e,n),d=0;d<r.length;d++){var u=a(r[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=c}}}},971:()=>{window.onload=()=>{console.log("index.js loaded.")}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(971),r(18)})();