(()=>{"use strict";var n={383:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'footer {\n    padding: 60px;\n    background-color: rgb(21, 22, 24);\n    font-family: "Poppins", sans-serif;\n    width: 100vw;\n\n}\nfooter h1{\n    font-family: "Poppins", sans-serif;\n    font-weight: 700;\n    letter-spacing: 0.3px;\n    font-size: 30px;\n    color: rgb(240, 240, 240);\n    text-align: center;\n    margin-bottom: 16px;\n}\n\nfooter ul {\n    display: flex;\n    list-style-type: none;\n    padding: 0;\n    justify-content: center;\n}\n\n#social-icons{\n    display: flex\n}\n\nfooter li {\n    font-weight: 400;\n    padding: 0 18px;\n    font-size: 14px;\n    color: rgb(156, 156, 156);\n    text-align: center;\n}\nfooter a {\n    margin: 0; \n    padding: 0;\n}\nfooter a:hover {\n    transition: all 0.3s ease;\n    color: rgb(214, 214, 214);\n}\n\nfooter p {\n    color: rgba(255, 255, 255, 0.3);\n    margin-top: 48px;\n    font-size: 14px;\n}\n\nfooter svg {\n    fill: white;\n    cursor: pointer;\n}\n\n#social-icons li {\n    padding: 0;\n}\n\n#social-icons {\n    margin: 40px;\n    gap: 16px;\n}\n\n\n#TikTok {\n    width: 40px;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 820px){\n    footer ul {\n        display: grid;\n    }\n}',""]);const s=a},787:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"body {\n    color: #232323;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#slim-nav{\n    display: none;\n}\n\n#menu-button{\n    display: none;\n}\n\nnav{\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    color: inherit;\n    display: flex;\n    background-color: rgb(247, 250, 253);\n    width: 100vw;\n    gap: 1vw;\n    padding-left: 30px;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 18px;\n    height: 80px;\n}\n\nli, nav > p {\n    padding: 10px 1vw;\n}\n\n#number {\nfont-weight: 550;\nfont-size: calc(3px + 1vw);\nmargin-left: auto;\n}\n\n\n\nnav > div {\n    margin-right: 30px;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\nnav > div> button, #get-started {\n    padding: 10px 20px;\n    background-color: rgb(159, 193, 245);\n    border-radius: 5px;\n    border-style: solid;\n    border-color: rgb(159, 193, 245);\n    cursor: pointer;\n    width: 125px;\n}\n\nnav > ul > li {\n    padding: 15px;\n}\na{\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n#wide-nav a{\n    font-size: calc(10px + 0.5vw);\n    margin: 1.5px;\n    line-height: 20px;\n}\n\n#wide-nav a:hover {\n    transition: all 0.3s ease;\n    font-size: calc(11px + 0.5vw);\n    color: rgb(42, 59, 71);\n}\n\n\n\n#contact {\n    background-color: rgb(233, 233, 233);\n    border-color: rgb(233, 233, 233);\n}\n\n/*For Nav Bar To Become Condensed */\n@media only screen and (max-width: 990px) {\n    /* Styles specific to phones */\n    #wide-nav{\n        display: none;\n    }\n\n    #number{\n        display: none;\n    }\n    #contact{\n        display: none;\n    }\n    #menu-button{\n        display: block;\n    }\n    #slim-nav{\n        top: 60px;\n        display: flex;\n        transition: all 0.3s ease;\n        flex-direction: column;\n        justify-content: space-around;\n        position: fixed;\n        z-index: 99;\n        align-items: center;\n        height: 70vh;\n        width: 100vw;\n        background-color: white;\n        transform-origin: top left;\n        transition: all 0.3s ease;\n    }\n    #slim-nav > li {\n        font-size: 16px;\n        font-family: FoundersBold;\n        font-weight: 1000;\n        display: flex;\n        flex-direction: column;\n        padding: 20px;\n        align-items: center;\n    }\n    #menu-button {\n        transition: all 0.3s ease;\n        border-radius: 5px;\n        padding: 5px;\n        width: 75px;\n        height: 50px;\n        object-fit: contain;\n        cursor: pointer;\n        background-color: #ebebeb;\n    }\n    #menu-button:hover{\n        transition: all 0.3s ease;\n        background-color: #dddddd;\n    }\n\n    #embark{\n        font-size: 16px;\n        padding: 10px 10px\n    }\n    \n  }",""]);const s=a},269:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(417),l=t.n(s),c=new URL(t(313),t.b),d=new URL(t(61),t.b),p=new URL(t(833),t.b),u=a()(r()),f=l()(c),g=l()(d),h=l()(p);u.push([n.id,`@font-face { font-family: Bureau; src: url(${f}); } \n@font-face { font-family: FoundersBold; src: url(${g}); } \n@font-face { font-family: Founders; src: url(${h}); } \n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*Fix Scrolling */\n\n*, html {\n\n  scroll-behavior: smooth !important;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n  overflow-x: hidden;\n  \n}\n\n/* Remove default margin in favour of better control in authored CSS */\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n\n  font-family: Founders, sans-serif;\n  margin: 0;\n}\n\n/* Set shorter line heights on headings and interactive elements */\n\n\n/* Balance text wrapping on headings */\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\nmain{\n  max-width: 100vw;\n}\n\n/*End of Reset*/`,""]);const m=u},945:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".section{\n    padding: 10px 10vw;\n    max-width: 1800px;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.section .bodyText{\n    font-size: 18px;\n}\n\n.section img {\n    object-fit: cover;\n    width: 40%;\n}\n\n\n.section .wrapper{\n    width: 40%;\n    min-width: 450px;\n}\n\n@media only screen and (max-width: 990px){\n    .section{\n        gap: 10px;\n    }\n    .section .wrapper, .section img{\n        width: 90vw;\n        min-width: 0;\n    }\n\n  \n  }",""]);const s=a},515:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,":root{\n  --lightblue: rgb(60, 146, 216);\n}\n\n*{\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n.alignLeft {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 880px;\n  padding-left: 10px;\n}\n\n.hidden{\n  transform: scale(0.7);\n  opacity: 0; \n  display: none;\n}\n\n.active{\n  transform: scale(1);\n  opacity: 100;\n}\n\n.flex{\n  display: flex;\n}\n\n.verticalFlex{\n  display: flex;\n  flex-direction: column;\n}\n\n/*Font stuff */\n.foundersH{\n  font-family: FoundersBold, sans-serif;\n  font-weight: 800;\n  color: rgba(19, 31, 48, 1);\n}\n\n.smallerH{\n  font-size: 42px;\n}\n\n.centered{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1{\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: 1.4px;\n  margin: 20px 0;\n  font-family: Bureau, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nh2{\n  font-weight: 400;\n  text-align: center;\n  font-family: FoundersBold, sans-serif;\n}\n\np {\n  font-size: 20px;\n}\n\nul{\n  padding-left: 0px;\n  list-style: none;\n  display:flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n}\n\n.wrapper{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#hero {\n  overflow-y: hidden;\n}\n\n#hero > div {\n  display: flex;\n  justify-content: center;\n  align-items: center ;\n  gap: 8vw;\n  flex-wrap: wrap-reverse;\n}\n\n.animatedHover{\n  transition: all 0.3s ease\n}\n\n.animatedHover:hover{\n  transition: all 0.3s ease;\n  transform: scale(1.05,1.05);\n}\n\n#hero > div > .wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 30px;\n  border-radius: 30px;\n  gap: 20px;\n  background-color: rgba(255, 255, 255, 0.747);\n}\n\n#hero > div > .wrapper > :not(button){\n  font-weight: inherit;\n  width: 400px;\n  font-family: Bureau, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: 100;\n  font-size: 48px;\n}\n\n#hero > div > .wrapper> p {\n  font-size: 16px;\n  font-family: Founders, serif\n}\n\n#hero > div > .wrapper > button {\n  align-self: flex-start;\n  padding: 12px 50px;\n  font-size: 20px;\n}\n\n#get-started{\n  box-sizing: content-box;\n}\n\n#subjects {\n  width: 90vw;\n  padding: 10px 0;\n  gap: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n#subjects > li {\n  background-color: white;\n}\n\n.emphasis {\n  color: var(--lightblue);\n  font-weight: bold;\n}\n\n/* video stuff */\n\nvideo {\n  width: 100vw;\n  height: 300px;\n  object-position: bottom;\n  object-fit: cover;\n  filter: brightness(0.5);\n  position: absolute;\n  z-index: 0;\n  left: 0;\n}\n\n#video {\n  margin-top: 75px;\n  color: white;\n  width: 880px;\n  min-height: 300px;\n}\n\n#video > :not(video) {\n  position: relative;\n  z-index: 1;\n}\n\n#video > h1{\n  font-size: 42px;\n  letter-spacing: 1px;\n  font-family: Founders, sans-serif;\n  margin: 2px 8px;\n}\n\n.highlighted {\n  font-weight: 1000;\n  background-color: var(--lightblue);\n  color: black;\n  padding: 2px 2px;\n}\n/*For Booking Free Schedule */\n\n#bookFree {\n  min-height: 400px;\n  width: 100vw;\n  background-size: cover;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 50px;\n  gap: 10px;\n}\n\n#bookFree * {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.678);\n}\n\n#bookFree > h1, #bookFree > p{\n  padding: 10px;}\n\n#schedule {\n\n  padding: 12px;\n  border-radius: 5px;\n  transition: ease 1s;\n  cursor: pointer;\n  border: 1px solid gray;\n  background-color: white;\n  font-size: 18px;\n}\n\n#schedule:hover{\n  transition: ease 1s;\n  background-color: transparent;\n  border-color: white;\n}\n\n@media only screen and (max-width: 990px){\n  #hero > div{\n    gap: 0;\n  }\n\n  #hero > div >.wrapper {\n    margin: 10px;\n    gap: 0;\n  }\n  #hero > div > .wrapper > :not(button){\n    width: 80vw;\n  }\n\n}",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=o(n,r),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},313:(n,e,t)=>{n.exports=t.p+"857c02a693e4d8c19baa.otf"},61:(n,e,t)=>{n.exports=t.p+"933e46628e790c08cfba.otf"},833:(n,e,t)=>{n.exports=t.p+"cf04cce70a64e312dd43.otf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"c678fdfbbf6c3d88edde.png",e=t.p+"3fe3ef135a15dd192135.png",o=t.p+"80989261f0638045adaa.png",r=document.querySelector("#menu-button");r.src=e,document.querySelector("#Logo").src=n;const i=document.querySelector("#slim-nav");r.addEventListener("click",(()=>{i.classList.toggle("hidden"),i.classList.toggle("active")})),document.querySelector("#contact").addEventListener("click",(()=>{window.open("https://forms.gle/uR35Wb4gU7EknXgn7")})),document.querySelector("#embark").addEventListener("click",(()=>{window.open("https://calendly.com/luminoustutor/1-hour-session")})),document.querySelector("#TikTok").src=o,document.querySelector("#social-icons li:nth-child(1) svg").addEventListener("click",(()=>{window.open("https://www.instagram.com/joshuatutoring/")})),document.querySelector("#social-icons li:nth-child(2)>svg").addEventListener("click",(()=>{window.open("mailto:luminoustutor@gmail.com")})),document.querySelector("#TikTok").addEventListener("click",(()=>{window.open("https://www.tiktok.com/@joshuatutoring")}));var a=t(72),s=t.n(a),l=t(825),c=t.n(l),d=t(659),p=t.n(d),u=t(56),f=t.n(u),g=t(540),h=t.n(g),m=t(113),x=t.n(m),v=t(269),b={};b.styleTagTransform=x(),b.setAttributes=f(),b.insert=p().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=h(),s()(v.A,b),v.A&&v.A.locals&&v.A.locals;var w=t(515),y={};y.styleTagTransform=x(),y.setAttributes=f(),y.insert=p().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=h(),s()(w.A,y),w.A&&w.A.locals&&w.A.locals;var k=t(787),A={};A.styleTagTransform=x(),A.setAttributes=f(),A.insert=p().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=h(),s()(k.A,A),k.A&&k.A.locals&&k.A.locals;var S=t(383),z={};z.styleTagTransform=x(),z.setAttributes=f(),z.insert=p().bind(null,"head"),z.domAPI=c(),z.insertStyleElement=h(),s()(S.A,z),S.A&&S.A.locals&&S.A.locals;var j=t(945),T={};T.styleTagTransform=x(),T.setAttributes=f(),T.insert=p().bind(null,"head"),T.domAPI=c(),T.insertStyleElement=h(),s()(j.A,T),j.A&&j.A.locals&&j.A.locals,document.querySelector("main")})()})();