(()=>{var n={340:(n,e,r)=>{"use strict";r.d(e,{Z:()=>o});var t=r(645),a=r.n(t)()((function(n){return n[1]}));a.push([n.id,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: rgb(255, 235, 239);\r\n}\r\n\r\nbody {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 10% 10% auto 10% 10%;\r\n    grid-template-rows: 8% 18% 30% auto 12%; \r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.item-h {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    justify-self: center;\r\n    font-size: 2vh;\r\n    color: rgb(255, 27, 95);\r\n}\r\n\r\n.item-logo {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 2;\r\n    grid-row-end: 3;\r\n    justify-self: center;\r\n}\r\n\r\n.logo {\r\n    box-shadow: 1vh 1vh 0.5vh #ccc;\r\n    border-radius: 8vw;\r\n    width: 15vh;\r\n    height: 15vh;\r\n}\r\n\r\n.item-visualizer{\r\n    z-index: 99;\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 4;\r\n    grid-row-end: 4;\r\n    justify-self: center;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    background-color: #ffffff00;\r\n}\r\n\r\n.item-visualizer div {\r\n    background-color: #ffffff00;\r\n}\r\n\r\n.item-slides {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 3;\r\n    grid-row-end: 4;\r\n    justify-self: center;\r\n}\r\n\r\n#image_slide {\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: block;\r\n    object-fit: cover;\r\n    border-radius: 2vw;\r\n}\r\n\r\n.item-audio {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 5;\r\n    grid-row-end: 5;\r\n    justify-self: center;\r\n}",""]);const o=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var u=0;u<n.length;u++){var c=[].concat(n[u]);t&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},18:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var t=r(379),a=r.n(t),o=r(340);a()(o.Z,{insert:"head",singleton:!1});const i=o.Z.locals||{}},379:(n,e,r)=>{"use strict";var t,a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),o=[];function i(n){for(var e=-1,r=0;r<o.length;r++)if(o[r].identifier===n){e=r;break}return e}function u(n,e){for(var r={},t=[],a=0;a<n.length;a++){var u=n[a],c=e.base?u[0]+e.base:u[0],s=r[c]||0,l="".concat(c," ").concat(s);r[c]=s+1;var f=i(l),d={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(o[f].references++,o[f].updater(d)):o.push({identifier:l,updater:g(d,e),references:1}),t.push(l)}return t}function c(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function f(n,e,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,a);else{var o=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function d(n,e,r){var t=r.css,a=r.media,o=r.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,v=0;function g(n,e){var r,t,a;if(e.singleton){var o=v++;r=p||(p=c(e)),t=f.bind(null,r,o,!1),a=f.bind(null,r,o,!0)}else r=c(e),t=d.bind(null,r,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var a=i(r[t]);o[a].references--}for(var c=u(n,e),s=0;s<r.length;s++){var l=i(r[s]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}r=c}}}},950:(n,e,r)=>{"use strict";r.r(e);var t={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],i={CSS:{},springs:{}};function u(n,e,r){return Math.min(Math.max(n,e),r)}function c(n,e){return n.indexOf(e)>-1}function s(n,e){return n.apply(null,e)}var l={arr:function(n){return Array.isArray(n)},obj:function(n){return c(Object.prototype.toString.call(n),"Object")},pth:function(n){return l.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||l.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return l.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return l.hex(n)||l.rgb(n)||l.hsl(n)},key:function(n){return!t.hasOwnProperty(n)&&!a.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function f(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function d(n,e){var r=f(n),t=u(l.und(r[0])?1:r[0],.1,100),a=u(l.und(r[1])?100:r[1],.1,100),o=u(l.und(r[2])?10:r[2],.1,100),c=u(l.und(r[3])?0:r[3],.1,100),s=Math.sqrt(a/t),d=o/(2*Math.sqrt(a*t)),p=d<1?s*Math.sqrt(1-d*d):0,v=d<1?(d*s-c)/p:-c+s;function g(n){var r=e?e*n/1e3:n;return r=d<1?Math.exp(-r*d*s)*(1*Math.cos(p*r)+v*Math.sin(p*r)):(1+v*r)*Math.exp(-r*s),0===n||1===n?n:1-r}return e?g:function(){var e=i.springs[n];if(e)return e;for(var r=1/6,t=0,a=0;;)if(1===g(t+=r)){if(++a>=16)break}else a=0;var o=t*r*1e3;return i.springs[n]=o,o}}function p(n){return void 0===n&&(n=10),function(e){return Math.ceil(u(e,1e-6,1)*n)*(1/n)}}var v,g,h=function(){var n=.1;function e(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function t(n){return 3*n}function a(n,a,o){return((e(a,o)*n+r(a,o))*n+t(a))*n}function o(n,a,o){return 3*e(a,o)*n*n+2*r(a,o)*n+t(a)}return function(e,r,t,i){if(0<=e&&e<=1&&0<=t&&t<=1){var u=new Float32Array(11);if(e!==r||t!==i)for(var c=0;c<11;++c)u[c]=a(c*n,e,t);return function(c){return e===r&&t===i||0===c||1===c?c:a(function(r){for(var i=0,c=1;10!==c&&u[c]<=r;++c)i+=n;--c;var s=i+(r-u[c])/(u[c+1]-u[c])*n,l=o(s,e,t);return l>=.001?function(n,e,r,t){for(var i=0;i<4;++i){var u=o(e,r,t);if(0===u)return e;e-=(a(e,r,t)-n)/u}return e}(r,s,e,t):0===l?s:function(n,e,r,t,o){var i,u,c=0;do{(i=a(u=e+(r-e)/2,t,o)-n)>0?r=u:e=u}while(Math.abs(i)>1e-7&&++c<10);return u}(r,i,i+n,e,t)}(c),r,i)}}}}(),m=(v={linear:function(){return function(n){return n}}},g={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=u(n,1,10),t=u(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,e){g[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(g).forEach((function(n){var e=g[n];v["easeIn"+n]=e,v["easeOut"+n]=function(n,r){return function(t){return 1-e(n,r)(1-t)}},v["easeInOut"+n]=function(n,r){return function(t){return t<.5?e(n,r)(2*t)/2:1-e(n,r)(-2*t+2)/2}},v["easeOutIn"+n]=function(n,r){return function(t){return t<.5?(1-e(n,r)(1-2*t))/2:(e(n,r)(2*t-1)+1)/2}}})),v);function y(n,e){if(l.fnc(n))return n;var r=n.split("(")[0],t=m[r],a=f(n);switch(r){case"spring":return d(n,e);case"cubicBezier":return s(h,a);case"steps":return s(p,a);default:return s(t,a)}}function b(n){try{return document.querySelectorAll(n)}catch(n){return}}function w(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<r;o++)if(o in n){var i=n[o];e.call(t,i,o,n)&&a.push(i)}return a}function x(n){return n.reduce((function(n,e){return n.concat(l.arr(e)?x(e):e)}),[])}function M(n){return l.arr(n)?n:(l.str(n)&&(n=b(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function C(n,e){return n.some((function(n){return n===e}))}function O(n){var e={};for(var r in n)e[r]=n[r];return e}function S(n,e){var r=O(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function k(n,e){var r=O(n);for(var t in e)r[t]=l.und(n[t])?e[t]:n[t];return r}function T(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function I(n,e){return l.fnc(n)?n(e.target,e.id,e.total):n}function P(n,e){return n.getAttribute(e)}function j(n,e,r){if(C([r,"deg","rad","turn"],T(e)))return e;var t=i.CSS[e+r];if(!l.und(t))return t;var a=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+r;var u=100/a.offsetWidth;o.removeChild(a);var c=u*parseFloat(e);return i.CSS[e+r]=c,c}function B(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?j(n,a,r):a}}function D(n,e){return l.dom(n)&&!l.inp(n)&&(!l.nil(P(n,e))||l.svg(n)&&n[e])?"attribute":l.dom(n)&&C(o,e)?"transform":l.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(l.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function A(n,e,r,t){switch(D(n,e)){case"transform":return function(n,e,r,t){var a=c(e,"scale")?1:0+function(n){return c(n,"translate")||"perspective"===n?"px":c(n,"rotate")||c(n,"skew")?"deg":void 0}(e),o=E(n).get(e)||a;return r&&(r.transforms.list.set(e,o),r.transforms.last=e),t?j(n,o,t):o}(n,e,t,r);case"css":return B(n,e,r);case"attribute":return P(n,e);default:return n[e]||0}}function N(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=T(n)||0,a=parseFloat(e),o=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function F(n,e){if(l.col(n))return function(n){return l.rgb(n)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+r[1]+",1)":e:l.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,r,t){return e+e+r+r+t+t})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}(n):l.hsl(n)?function(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==i)e=r=t=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;e=s(f,l,o+1/3),r=s(f,l,o),t=s(f,l,o-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+c+")"}(n):void 0;var e,r}(n);if(/\s/g.test(n))return n;var r=T(n),t=r?n.substr(0,n.length-r.length):n;return e?t+e:t}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function q(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(t+=L(e,o)),e=o}return t}function $(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*P(n,"r")}(n);case"rect":return function(n){return 2*P(n,"width")+2*P(n,"height")}(n);case"line":return function(n){return L({x:P(n,"x1"),y:P(n,"y1")},{x:P(n,"x2"),y:P(n,"y2")})}(n);case"polyline":return q(n);case"polygon":return function(n){var e=n.points;return q(n)+L(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function z(n,e){var r=e||{},t=r.el||function(n){for(var e=n.parentNode;l.svg(e)&&l.svg(e.parentNode);)e=e.parentNode;return e}(n),a=t.getBoundingClientRect(),o=P(t,"viewBox"),i=a.width,u=a.height,c=r.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:t,viewBox:c,x:c[0]/1,y:c[1]/1,w:i,h:u,vW:c[2],vH:c[3]}}function H(n,e,r){function t(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var a=z(n.el,n.svg),o=t(),i=t(-1),u=t(1),c=r?1:a.w/a.vW,s=r?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function _(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=F(l.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:l.str(n)||e?t.split(r):[]}}function V(n){return w(n?x(l.arr(n)?n.map(M):M(n)):[],(function(n,e,r){return r.indexOf(n)===e}))}function Y(n){var e=V(n);return e.map((function(n,r){return{target:n,id:r,total:e.length,transforms:{list:E(n)}}}))}function Z(n,e){var r=O(e);if(/^spring/.test(r.easing)&&(r.duration=d(r.easing)),l.arr(n)){var t=n.length;2!==t||l.obj(n[0])?l.fnc(e.duration)||(r.duration=e.duration/t):n={value:n}}var a=l.arr(n)?n:[n];return a.map((function(n,r){var t=l.obj(n)&&!l.pth(n)?n:{value:n};return l.und(t.delay)&&(t.delay=r?0:e.delay),l.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t})).map((function(n){return k(n,r)}))}var W={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var o="";t.list.forEach((function(n,e){o+=e+"("+n+") "})),n.style.transform=o}}};function G(n,e){Y(n).forEach((function(n){for(var r in e){var t=I(e[r],n),a=n.target,o=T(t),i=A(a,r,o,n),u=N(F(t,o||T(i)),i),c=D(a,r);W[c](a,r,u,n.transforms,!0)}}))}function U(n,e){return w(x(n.map((function(n){return e.map((function(e){return function(n,e){var r=D(n.target,e.name);if(r){var t=function(n,e){var r;return n.tweens.map((function(t){var a=function(n,e){var r={};for(var t in n){var a=I(n[t],e);l.arr(a)&&1===(a=a.map((function(n){return I(n,e)}))).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(t,e),o=a.value,i=l.arr(o)?o[1]:o,u=T(i),c=A(e.target,n.name,u,e),s=r?r.to.original:c,f=l.arr(o)?o[0]:s,d=T(f)||T(c),p=u||d;return l.und(i)&&(i=s),a.from=_(f,p),a.to=_(N(i,f),p),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(o),a.isPathTargetInsideSVG=a.isPath&&l.svg(e.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),r=a,a}))}(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!l.und(n)}))}function X(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map((function(n){return t(n)+n.duration}))):e.duration,a.delay=r?Math.min.apply(Math,n.map((function(n){return t(n)+n.delay}))):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map((function(n){return t(n)+n.duration-n.endDelay}))):e.endDelay,a}var Q=0,R=[],J=function(){var n;function e(r){for(var t=R.length,a=0;a<t;){var o=R[a];o.paused?(R.splice(a,1),t--):(o.tick(r),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){nn.suspendWhenDocumentHidden&&(K()?n=cancelAnimationFrame(n):(R.forEach((function(n){return n._onDocumentVisibility()})),J()))})),function(){n||K()&&nn.suspendWhenDocumentHidden||!(R.length>0)||(n=requestAnimationFrame(e))}}();function K(){return!!document&&document.hidden}function nn(n){void 0===n&&(n={});var e,r=0,o=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise((function(n){return s=n}));return n.finished=e,e}var d=function(n){var e=S(t,n),r=S(a,n),o=function(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=k(function(n){for(var e=w(x(n.map((function(n){return Object.keys(n)}))),(function(n){return l.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),r={},t=function(t){var a=e[t];r[a]=n.map((function(n){var e={};for(var r in n)l.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e}))},a=0;a<e.length;a++)t(a);return r}(t),e)),e)l.key(a)&&r.push({name:a,tweens:Z(e[a],n)});return r}(r,n),i=Y(n.targets),u=U(i,o),c=X(u,r),s=Q;return Q++,k(e,{id:s,children:[],animatables:i,animations:u,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(n);function p(){var n=d.direction;"alternate"!==n&&(d.direction="normal"!==n?"normal":"reverse"),d.reversed=!d.reversed,e.forEach((function(n){return n.reversed=d.reversed}))}function v(n){return d.reversed?d.duration-n:n}function g(){r=0,o=v(d.currentTime)*(1/nn.speed)}function h(n,e){e&&e.seek(n-e.timelineOffset)}function m(n){for(var e=0,r=d.animations,t=r.length;e<t;){var a=r[e],o=a.animatable,i=a.tweens,c=i.length-1,s=i[c];c&&(s=w(i,(function(e){return n<e.end}))[0]||s);for(var l=u(n-s.start-s.delay,0,s.duration)/s.duration,f=isNaN(l)?1:s.easing(l),p=s.to.strings,v=s.round,g=[],h=s.to.numbers.length,m=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],M=s.from.numbers[y]||0;b=s.isPath?H(s.value,f*x,s.isPathTargetInsideSVG):M+f*(x-M),v&&(s.isColor&&y>2||(b=Math.round(b*v)/v)),g.push(b)}var C=p.length;if(C){m=p[0];for(var O=0;O<C;O++){p[O];var S=p[O+1],k=g[O];isNaN(k)||(m+=S?k+S:k+" ")}}else m=g[0];W[a.type](o.target,a.property,m,o.transforms),a.currentValue=m,e++}}function y(n){d[n]&&!d.passThrough&&d[n](d)}function b(n){var t=d.duration,a=d.delay,l=t-d.endDelay,g=v(n);d.progress=u(g/t*100,0,100),d.reversePlayback=g<d.currentTime,e&&function(n){if(d.reversePlayback)for(var r=c;r--;)h(n,e[r]);else for(var t=0;t<c;t++)h(n,e[t])}(g),!d.began&&d.currentTime>0&&(d.began=!0,y("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,y("loopBegin")),g<=a&&0!==d.currentTime&&m(0),(g>=l&&d.currentTime!==t||!t)&&m(t),g>a&&g<l?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,y("changeBegin")),y("change"),m(g)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,y("changeComplete")),d.currentTime=u(g,0,t),d.began&&y("update"),n>=t&&(o=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(r=i,y("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&p()):(d.paused=!0,d.completed||(d.completed=!0,y("loopComplete"),y("complete"),!d.passThrough&&"Promise"in window&&(s(),f(d)))))}return f(d),d.reset=function(){var n=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===n,d.remaining=d.loop,e=d.children;for(var r=c=e.length;r--;)d.children[r].reset();(d.reversed&&!0!==d.loop||"alternate"===n&&1===d.loop)&&d.remaining++,m(d.reversed?d.duration:0)},d._onDocumentVisibility=g,d.set=function(n,e){return G(n,e),d},d.tick=function(n){i=n,r||(r=i),b((i+(o-r))*nn.speed)},d.seek=function(n){b(v(n))},d.pause=function(){d.paused=!0,g()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,R.push(d),g(),J())},d.reverse=function(){p(),d.completed=!d.reversed,g()},d.restart=function(){d.reset(),d.play()},d.remove=function(n){rn(V(n),d)},d.reset(),d.autoplay&&d.play(),d}function en(n,e){for(var r=e.length;r--;)C(n,e[r].animatable.target)&&e.splice(r,1)}function rn(n,e){var r=e.animations,t=e.children;en(n,r);for(var a=t.length;a--;){var o=t[a],i=o.animations;en(n,i),i.length||o.children.length||t.splice(a,1)}r.length||t.length||e.pause()}nn.version="3.2.1",nn.speed=1,nn.suspendWhenDocumentHidden=!0,nn.running=R,nn.remove=function(n){for(var e=V(n),r=R.length;r--;)rn(e,R[r])},nn.get=A,nn.set=G,nn.convertPx=j,nn.path=function(n,e){var r=l.str(n)?b(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:z(r),totalLength:$(r)*(t/100)}}},nn.setDashoffset=function(n){var e=$(n);return n.setAttribute("stroke-dasharray",e),e},nn.stagger=function(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?y(e.easing):null,a=e.grid,o=e.axis,i=e.from||0,u="first"===i,c="center"===i,s="last"===i,f=l.arr(n),d=f?parseFloat(n[0]):parseFloat(n),p=f?parseFloat(n[1]):0,v=T(f?n[1]:n)||0,g=e.start||0+(f?d:0),h=[],m=0;return function(n,e,l){if(u&&(i=0),c&&(i=(l-1)/2),s&&(i=l-1),!h.length){for(var y=0;y<l;y++){if(a){var b=c?(a[0]-1)/2:i%a[0],w=c?(a[1]-1)/2:Math.floor(i/a[0]),x=b-y%a[0],M=w-Math.floor(y/a[0]),C=Math.sqrt(x*x+M*M);"x"===o&&(C=-x),"y"===o&&(C=-M),h.push(C)}else h.push(Math.abs(i-y));m=Math.max.apply(Math,h)}t&&(h=h.map((function(n){return t(n/m)*m}))),"reverse"===r&&(h=h.map((function(n){return o?n<0?-1*n:-n:Math.abs(m-n)})))}return g+(f?(p-d)/m:d)*(Math.round(100*h[e])/100)+v}},nn.timeline=function(n){void 0===n&&(n={});var e=nn(n);return e.duration=0,e.add=function(r,t){var o=R.indexOf(e),i=e.children;function u(n){n.passThrough=!0}o>-1&&R.splice(o,1);for(var c=0;c<i.length;c++)u(i[c]);var s=k(r,S(a,n));s.targets=s.targets||n.targets;var f=e.duration;s.autoplay=!1,s.direction=e.direction,s.timelineOffset=l.und(t)?f:N(t,f),u(e),e.seek(s.timelineOffset);var d=nn(s);u(d),i.push(d);var p=X(i,n);return e.delay=p.delay,e.endDelay=p.endDelay,e.duration=p.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},nn.easing=y,nn.penner=m,nn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};const tn=nn,an=n=>1/(n/60)*1e3;let on,un=new Uint8Array(40),cn=!1;window.onload=()=>{let n=tn({targets:"#image_logo",scale:"1.1",loop:!0,duration:an(92),autoplay:!1});console.log("index.js loaded.");let e=document.querySelector("#audio_player");e.volume=.5,e.play(),e.addEventListener("play",(r=>{cn=!1,console.log("media playing"),setTimeout((()=>{let r=e.captureStream(),t=new AudioContext;const a=t.createMediaStreamSource(r);let o=t.createAnalyser();a.connect(o);const i=t.createScriptProcessor();o.connect(i),i.connect(t.destination),n.play(),on=setInterval((()=>{let n=[...un];o.getByteFrequencyData(un),un.forEach(((e,r)=>{let t=Math.abs(e-n[r]);var a;tn({targets:`.item-visualizer div:nth-child(${r+1})`,translateY:t>10?`-${2.5*e}px`:`-${2.5*n[r]}px`,translateY:`-${2.5*e}px`,duration:an(92*(4-(a=t,0,255,0,3,3*(a-0)/255+0))),easing:"linear",complete:n=>{cn&&tn({targets:`.item-visualizer div:nth-child(${r+1})`,translateY:"0px",duration:an(92),easing:"easeInOutCirc"})}})}))}),an(368))}),500)})),e.addEventListener("pause",(e=>{cn=!0,console.log("media paused"),n.pause(),clearInterval(on)}))}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r(950),r(18)})();