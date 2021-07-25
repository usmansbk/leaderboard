(()=>{"use strict";var e,n,t,r,a,o,i,s,c,u,d={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"main {\n  display: flex;\n  justify-content: space-between;\n  width: 60%;\n}\n\n.scores-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.primary-button, .score-input {\n  padding: 8px 16px;\n}\n\n.add-score-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,f="".concat(u," ").concat(d);o[u]=d+1;var l=t(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(n[l].references++,n[l].updater(p)):n.push({identifier:f,updater:a(p,r),references:1}),i.push(f)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),u=0;u<o.length;u++){var d=t(o[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},f={};function l(e){var n=f[e];if(void 0!==n)return n.exports;var t=f[e]={id:e,exports:{}};return d[e](t,t.exports,l),t.exports}l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},l.d=(e,n)=>{for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=l(379),n=l.n(e),t=l(795),r=l.n(t),a=l(695),o=l.n(a),i=l(216),s=l.n(i),c=l(426),(u={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=l.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}}).domAPI=r(),u.insertStyleElement=s(),n()(c.Z,u),c.Z&&c.Z.locals&&c.Z.locals,window.addEventListener("load",(()=>{const e=document.getElementById("scores");new Array(10).fill(0).forEach(((n,t)=>{const r=document.createElement("li");r.innerText=t,e.appendChild(r)}))}))})();