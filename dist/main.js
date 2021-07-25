(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  font-family: "Montserrat", sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nli {\n  padding: 8px;\n}\n\nli:nth-child(odd) {\n  background-color: lightgrey;\n}\n\nbody {\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 40px 0;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.scores-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 40px;\n  flex-wrap: wrap;\n}\n\n.primary-button,\n.score-input {\n  padding: 8px 16px;\n}\n\n.action-button {\n  align-self: flex-end;\n}\n\n.add-score-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.primary-button {\n  border: none;\n  background-color: #8e44ad;\n  color: #fff;\n  cursor: pointer;\n}\n\n.primary-button:hover {\n  opacity: 0.8;\n}\n\n.primary-button:active {\n  opacity: 0.6;\n}\n\n.score-input:focus {\n  outline: none;\n  border: 1px solid #8e44ad;\n  box-shadow: 0 0 10px #719ece;\n}\n\n/* Large screen devices */\n@media screen and (min-width: 992px) {\n  main {\n    flex-direction: row;\n    padding: 40px;\n  }\n}\n',""]);const o=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var f=t(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(e[f].references++,e[f].updater(p)):e.push({identifier:l,updater:a(p,r),references:1}),i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),u=0;u<o.length;u++){var d=t(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,a=t.media,o=t.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{const n="https://us-central1-js-capstone-backend.cloudfunctions.net/api/";async function e(e,t){return(await fetch(`${n}${e}`,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}})).json()}var r=t(379),a=t.n(r),o=t(795),i=t.n(o),s=t(695),c=t.n(s),u=t(216),d=t.n(u),l=t(426),f={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=c()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};f.domAPI=i(),f.insertStyleElement=d(),a()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,window.addEventListener("load",(async()=>{const t=await async function(n){const{result:t}=await e("games",{name:"usman"});return function(n=""){const e="Game with ID: ".length-1,t=n.lastIndexOf(" ");return n.substring(e,t+1)}(t)}(),r=document.getElementById("refresh-button"),a=document.getElementById("add-score");r.addEventListener("click",(async()=>{!function(n=[]){const e=document.getElementById("scores");e.innerHTML="",n.forEach((({user:n,score:t})=>{const r=document.createElement("li");r.innerText=`${n}: ${t}`,e.appendChild(r)}))}(await async function(e){const{result:t}=await async function(e){return(await fetch(`${n}${e}`)).json()}(`games/${e}/scores/`);return t}(t))})),a.addEventListener("submit",(async n=>{n.preventDefault();const r=a.elements[0],o=a.elements[1],i={user:r.value,score:o.value};await async function(n,t){const{result:r}=await e(`games/${n}/scores/`,t);return r}(t,i),a.reset()}))}))})()})();