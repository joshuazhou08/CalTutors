(()=>{"use strict";var n={383:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'footer {\n    padding: 60px;\n    background-color: rgb(21, 22, 24);\n    font-family: "Poppins", sans-serif;\n    width: 100vw;\n\n}\nfooter h1{\n    font-family: "Poppins", sans-serif;\n    font-weight: 700;\n    letter-spacing: 0.3px;\n    font-size: 30px;\n    color: rgb(240, 240, 240);\n    text-align: center;\n    margin-bottom: 16px;\n}\n\nfooter ul {\n    display: flex;\n    list-style-type: none;\n    padding: 0;\n    justify-content: center;\n}\n\n#social-icons{\n    display: flex\n}\n\nfooter li {\n    font-weight: 400;\n    padding: 0 18px;\n    font-size: 14px;\n    color: rgb(156, 156, 156);\n    text-align: center;\n}\nfooter a {\n    margin: 0; \n    padding: 0;\n}\nfooter a:hover {\n    transition: all 0.3s ease;\n    color: rgb(214, 214, 214);\n}\n\nfooter p {\n    color: rgba(255, 255, 255, 0.3);\n    margin-top: 48px;\n    font-size: 14px;\n}\n\nfooter svg {\n    fill: white;\n    cursor: pointer;\n}\n\n#social-icons li {\n    padding: 0;\n}\n\n#social-icons {\n    margin: 40px;\n    gap: 16px;\n}\n\n\n#TikTok {\n    width: 40px;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 820px){\n    footer ul {\n        display: grid;\n    }\n}',""]);const s=a},287:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".wrapper{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  \n  #hero {\n    overflow-y: hidden;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    background-color: white;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  \n  \n  #hero > .textwrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px;\n    max-width: 750px;\n    gap: 10px;\n    width: 550px;\n    text-align: center;\n  }\n  \n  #hero > .textwrapper *:not(button) {\n    margin: 0;\n  }\n  #hero h1{\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: calc(65px + 3vw);\n    color: var(--darkblue);\n  }\n\n  #hero-img {\n    width: 700px;\n  }\n\n  #hero p {\n    font-family: FoundersBold;\n    font-size: 32px;\n    font-weight: 200;\n  }\n\n  #caption {\n    font-size: 24px;\n    font-family: Founders;\n    font-weight: 200;\n    color: rgb(85, 85, 85);\n  }\n  \n  #get-started{\n    box-sizing: content-box;\n    border-radius: 5px;\n    padding: 10px 50px;\n    background-color: var(--darkblue);\n    border: 1px rgb(161, 200, 245) solid;\n    color: white;\n    font-size: 20px;\n    font-family: FoundersBold, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: 1000;\n    margin-top: 30px;\n  }\n  \n  #subjects {\n    width: 90vw;\n    padding: 10px 0;\n    gap: 10px;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  \n  #subjects > li {\n    background-color: white;\n  }\n  \n\n  \n  /* video stuff */\n  \n  video {\n    width: 100vw;\n    height: 300px;\n    object-position: bottom;\n    object-fit: cover;\n    filter: brightness(0.5);\n    position: absolute;\n    z-index: 0;\n    left: 0;\n  }\n  \n  #video {\n    margin-top: 75px;\n    color: white;\n    width: 880px;\n    min-height: 300px;\n  }\n  \n  #video > :not(video) {\n    position: relative;\n    z-index: 1;\n  }\n  \n  #video > h1{\n    font-size: 42px;\n    letter-spacing: 1px;\n    font-family: Founders, sans-serif;\n    margin: 2px 8px;\n  }\n  \n  .highlighted {\n    font-weight: 1000;\n    background-color: var(--lightblue);\n    color: black;\n    padding: 2px 2px;\n  }\n  /*For Booking Free Schedule */\n  \n  #bookFree {\n    min-height: 400px;\n    width: 100vw;\n    background-size: 100vw 100%;\n    background-position-y: 0;\n    justify-content: flex-start;\n    align-items: center;\n    padding-top: 50px;\n    gap: 10px;\n  }\n  \n  #bookFree * {\n    margin: 0;\n    padding: 0;\n    text-align: center;\n  }\n  \n  #bookFree > h1, #bookFree > p{\n    padding: 10px;\n  }\n\n  #bookFree > p {\n    background-color: rgba(255, 255, 255, 0.747);\n    color: black;\n  }\n  \n  #schedule {\n  \n    padding: 12px;\n    border-radius: 5px;\n    transition: ease 0.2s;\n    cursor: pointer;\n    border: 1px solid gray;\n    background-color: white;\n    font-size: 18px;\n  }\n  \n  #schedule:hover{\n    transition: ease 0.2s;\n    background-color: rgba(255, 255, 255, 0.541);\n  }\n  \n  @media only screen and (max-width: 990px){\n    #hero > div{\n      gap: 0;\n    }\n  \n    #hero > div >.wrapper {\n      margin: 10px;\n      display: grid;\n      gap: 0;\n    }\n    #hero > div > .wrapper > :not(button){\n      width: 80vw;\n    }\n  \n    #hero > div > .wrapper > button{\n      justify-self: center\n    }\n  \n  }",""]);const s=a},787:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"body {\n    color: #232323;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#slim-nav{\n    display: none;\n}\n\n#menu-button{\n    display: none;\n}\n\nnav{\n    position: fixed;\n    top: 0;\n    min-height: 60px;\n    z-index: 100;\n    color: inherit;\n    background-color: white;\n    box-shadow: 0px 7px 15px -2px rgba(0, 0, 0, 0.233);\n    display: flex;\n    width: 100vw;\n    justify-content: space-between;\n    padding: 0 30px;\n    align-items: center;\n}\n\n#Logo {\n    width: clamp(250px, calc(2vw + 70px), 500px);\n}\nli, nav > p {\n    padding: 10px 1vw;\n}\n\n#number {\n    font-weight: 550;\n    font-size: calc(12px + 0.3vw);\n    margin-left: auto;\n\n}\n\nnav > div {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    overflow-x: visible;\n}\nnav > div> button{\n    font-weight: 1000;\n    font-size: calc(12px + 0.3vw);\n    border-radius: 10px;\n    border-style: solid;\n}\nnav > div> button, #get-started {\n    padding: 10px 20px;\n    background-color: var(--darkblue);\n    border-color: var(--darkblue);\n    cursor: pointer;\n}\n\nnav > ul > li {\n    padding: 15px;\n}\na{\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n#wide-nav a{\n    font-size: calc(10px + 0.4vw);\n    margin: 1.5px;\n    line-height: 20px;\n    text-decoration: underline solid transparent;\n}\n\n#wide-nav a:hover {\n    transition: all 0.3s ease;\n    text-decoration: underline solid gray;\n    color: rgb(42, 59, 71);\n}\n\n#contact {\n    background-color: rgb(233, 233, 233);\n    border-color: rgb(233, 233, 233);\n}\n\n#embark {\n    color: white;\n}\n/*For Nav Bar To Become Condensed */\n@media only screen and (max-width: 1040px) {\n    /* Styles specific to phones */\n    #wide-nav{\n        display: none;\n    }\n\n    #number{\n        display: none;\n    }\n    #contact{\n        display: none;\n    }\n    #menu-button{\n        display: block;\n    }\n    #slim-nav{\n        top: 50px;\n        display: flex;\n        transition: all 0.3s ease;\n        flex-direction: column;\n        justify-content: space-around;\n        position: fixed;\n        z-index: 99;\n        align-items: center;\n        height: 70vh;\n        width: 100vw;\n        background-color: white;\n        transform-origin: top left;\n        transition: all 0.3s ease;\n    }\n    #slim-nav > li {\n        font-size: 16px;\n        font-family: FoundersBold;\n        font-weight: 1000;\n        display: flex;\n        flex-direction: column;\n        padding: 20px;\n        align-items: center;\n    }\n    #menu-button {\n        transition: all 0.3s ease;\n        border-radius: 5px;\n        padding: 5px;\n        width: 75px;\n        height: 50px;\n        object-fit: contain;\n        cursor: pointer;\n        background-color: #ebebeb;\n    }\n    #menu-button:hover{\n        transition: all 0.3s ease;\n        background-color: #dddddd;\n    }\n\n\n  }",""]);const s=a},269:(n,e,t)=>{t.d(e,{A:()=>g});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(417),l=t.n(s),d=new URL(t(313),t.b),c=new URL(t(61),t.b),p=new URL(t(833),t.b),u=a()(r()),h=l()(d),f=l()(c),m=l()(p);u.push([n.id,`@font-face { font-family: Bureau; src: url(${h}); } \n@font-face { font-family: FoundersBold; src: url(${f}); } \n@font-face { font-family: Founders; src: url(${m}); } \n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*Fix Scrolling */\n\n*, html {\n\n  scroll-behavior: smooth !important;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n  overflow-x: hidden;\n  \n}\n\n/* Remove default margin in favour of better control in authored CSS */\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  padding-top: 80px;\n  font-family: Founders, sans-serif;\n  margin: 0;\n}\n\n/* Set shorter line heights on headings and interactive elements */\n\n\n/* Balance text wrapping on headings */\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\nmain{\n  max-width: 100vw;\n}\n\n/*End of Reset*/`,""]);const g=u},866:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"h2,h4{\n    margin: 0;\n    min-height: 35px;\n}\n\nem{\n    font-size: 20px;\n}\n\n#testimonials {\n    min-height: 450px;\n    overflow-y: scroll;\n    padding: 20px;  \n    overflow-x: hidden;\n}\n\n#testWrapper{\n    text-align: center;\n    gap: 30px;\n    overflow-y: hidden;\n    overflow-x: scroll;\n    max-width: 100%;\n    scroll-snap-type: x mandatory;\n    /*scroll-behavior: smooth */\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n#testWrapper::-webkit-scrollbar {\n    display: none;\n  }\n/* Hide scrollbar for IE, Edge and Firefox */\n#testWrapper {\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n  }\n#testWrapper > div{\n    display: grid;\n    grid-template-rows: 110px 20px 20px auto;\n    min-width: 450px;\n    width: 450px;\n    overflow-y: hidden;\n    justify-items: center;\n    gap: 30px;\n    padding: 40px;\n    box-shadow: 0px 0px 20px -8px rgba(82, 82, 82, 0.75);\n    scroll-snap-align: start;\n}\n\n#testWrapper h2 {\n    font-weight: 800;\n}\n\n\n/*Scrolling Buttons */\n.scroll-right, .scroll-left{\n    width: 60px;\n    opacity: 0.5;\n    border-radius: 50%;\n    border: rgb(58, 56, 56) solid 2px;\n    position: absolute;\n    transition: all 0.3s ease;\n\n}\n\n.scroll-right:hover, .scroll-left:hover{\n    opacity: 0.9;\n    cursor: pointer;\n}\n\n.scroll-right{\n    right: 1vw;\n}\n\n.scroll-left{\n    transform: scaleX(-1);\n    object-position: 2px;\n    left: 1vw;\n}\n\n@media screen and (max-width:450px){\n    #testimonials{\n        padding: 0;\n    }\n\n    #testWrapper > div{\n        min-width: 100vw;\n    }\n\n    #testWrapper {\n        gap: 0;\n    }\n}",""]);const s=a},945:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".section{\n    padding: 10px 5vw;\n    max-width: 1800px;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.section .bodyText{\n    font-size: 18px;\n}\n\n.section img {\n    object-fit: cover;\n    width: 40%;\n}\n\n\n.section .wrapper{\n    width: 40%;\n    min-width: 450px;\n}\n\n@media only screen and (max-width: 990px){\n    .section{\n        gap: 10px;\n    }\n    .section .wrapper, .section img{\n        width: 90vw;\n        min-width: 0;\n    }\n\n  \n  }",""]);const s=a},515:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,":root{\n  --lightblue: rgb(60, 146, 216);\n  --buttonblue: rgb(159, 193, 245);\n  --darkblue: rgb(42, 93, 151);\n  --background: rgba(60, 167, 255, 0.082);\n}\n\n\n*{\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n.alignLeft {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 880px;\n  padding-left: 10px;\n}\n\n.hidden{\n  transform: scale(0.7);\n  opacity: 0; \n  display: none;\n}\n\n.active{\n  transform: scale(1);\n  opacity: 100;\n}\n\n.flex{\n  display: flex;\n}\n\n.verticalFlex{\n  display: flex;\n  flex-direction: column;\n}\n\n/*Font stuff */\n.foundersH{\n  font-family: FoundersBold, sans-serif;\n  font-weight: 800;\n  color: rgba(19, 31, 48, 1);\n}\n\n.smallerH{\n  font-size: 42px;\n}\n\n.centered{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.caption{\n  font-size: 15px;\n  color: rgb(85, 85, 85);\n  font-family: Founders;\n  text-align: center;\n  margin: 0;\n  line-height: 1.5em;\n}\n\nh1{\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: 1.4px;\n  margin: 20px 0;\n  font-family: Bureau, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nh2{\n  font-weight: 400;\n  text-align: center;\n  font-family: FoundersBold, sans-serif;\n}\n\np {\n  font-size: 20px;\n}\n\nul{\n  padding-left: 0px;\n  list-style: none;\n  display:flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n}\n\n.animatedHover{\n  transition: all 0.3s ease\n}\n\n.animatedHover:hover{\n  transition: all 0.3s ease;\n  transform: scale(1.02,1.02);\n}\n\n.emphasis {\n  color: var(--lightblue);\n  font-weight: bold;\n}\n\n.wrapper {\n  display: flex;\n  gap: 25px;\n  justify-content: center;\n  align-items: center;\n}\n\n.number {\n  background-color: var(--buttonblue);\n  font-weight: 1000;\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n@media (max-width: 768px){\n  h1, h2, p:not(.number) {\n    padding: 0 40px;\n  }\n}",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],d=o.base?l[0]+o.base:l[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var u=t(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=o(n,r),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},313:(n,e,t)=>{n.exports=t.p+"857c02a693e4d8c19baa.otf"},61:(n,e,t)=>{n.exports=t.p+"933e46628e790c08cfba.otf"},833:(n,e,t)=>{n.exports=t.p+"cf04cce70a64e312dd43.otf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),s=t(56),l=t.n(s),d=t(540),c=t.n(d),p=t(113),u=t.n(p),h=t(269),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(h.A,f),h.A&&h.A.locals&&h.A.locals;var m=t(515),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=c(),e()(m.A,g),m.A&&m.A.locals&&m.A.locals;var x=t(787),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=c(),e()(x.A,b),x.A&&x.A.locals&&x.A.locals;var y=t(383),v={};v.styleTagTransform=u(),v.setAttributes=l(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=c(),e()(y.A,v),y.A&&y.A.locals&&y.A.locals;var w=t(287),k={};k.styleTagTransform=u(),k.setAttributes=l(),k.insert=a().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=c(),e()(w.A,k),w.A&&w.A.locals&&w.A.locals;var A=t(945),S={};function T(n,e,t,o,r=!1){n.style.margin="24px",n.classList.add("section");const i=document.createElement("div");i.classList.add("wrapper"),i.classList.add("animatedHover"),n.appendChild(i);const a=document.createElement("h1");a.innerHTML=t,a.classList.add("foundersH"),i.appendChild(a);const s=document.createElement("p");s.innerHTML=o,s.classList.add("bodyText"),s.style.fontWeight=200,s.style.fontFamily="FoundersBold, serif",i.appendChild(s);const l=document.createElement("img");l.src=e,l.style.borderRadius="15px",l.classList.add("animatedHover"),n.appendChild(l),r&&(n.style.flexDirection="row-reverse"),console.log("ran")}S.styleTagTransform=u(),S.setAttributes=l(),S.insert=a().bind(null,"head"),S.domAPI=r(),S.insertStyleElement=c(),e()(A.A,S),A.A&&A.A.locals&&A.A.locals,document.querySelector("main");const E=t.p+"6cd0627fb4b0485d5252.png",j=t.p+"8b4578a5eeee2e457de5.jpg",z=t.p+"c90a9720e2ac1e66404a.png",I=t.p+"videos/tutoring.mp4",L=t.p+"4fc501b69ccbc5267bae.jpeg",F=t.p+"23600a1f016b67e4ac2a.png",C=(t.p,t.p+"6273610dab5a862df179.png");var H=t(866),q={};q.styleTagTransform=u(),q.setAttributes=l(),q.insert=a().bind(null,"head"),q.domAPI=r(),q.insertStyleElement=c(),e()(H.A,q),H.A&&H.A.locals&&H.A.locals;let M=0;function B(n,e,t,o,r=M){const i=document.querySelector("#testWrapper"),a=document.createElement("div");a.classList.add("animatedHover"),a.id=`review-${r}`,i.appendChild(a);const s=document.createElement("img");s.src=n,s.style.width="100px",a.appendChild(s);const l=document.createElement("h2");l.textContent=e,a.appendChild(l);const d=document.createElement("h4");d.textContent=t,a.appendChild(d);const c=document.createElement("em");c.textContent=o,a.appendChild(c),M+=1}B(C,"Syona Dalal","student","I think that Joshua helped me a lot in terms of reviewing some of the topics that I struggled \nwith in both physics and math so I feel more prepared to take the AP exams for Calculus BC and Physics 1. I \nwould definitely recommend him as a tutor and give him a 5 rating!"),B(C,"Nova Huang","parent","I highly recommend Joshua as a tutor. Despite our initial preference for in-person tutoring, \nhis online method proved effective for my daughter's math needs. Joshua's approach helped my shy daughter \nfeel comfortable, and she even found him to be a better teacher than her school instructor. He quickly covered \nall the necessary material in a short time frame, showing exceptional responsiveness, reliability, and strategic \nplanning. His prompt replies to questions and punctuality were crucial, given the last-minute task asked of him.."),B(C,"Isabella Maria","student","Josh was a super helpful tutor! He is very patient and focuses on the foundational \ntheories involved in solving a problem so I would be able to understand the topic better as a whole. I \nhighly recommend working with Josh."),B(C,"Justine Ruedas","student","Great tutor very patient."),B(C,"Jacob Shabanie","student","JZ is a great tutor who takes the time to explain every step intricately when solving problem. \nHe listens to what you say and explains what your problems are and is very flexible overall. I would \ndefinitely recommend JZ to anybody who needs help in math."),B(C,"Chih-Yi","parent","Joshua is a super math teacher. He is busy himself but he always trying his \nbest to work with our schedule. He is patient, caring and fun. He does not just teach but also goes beyond \nthe textbook just to make sure students get the big picture. It is rare to find a teacher like this anywhere \nthese days. My kids are lucky to have Joshua as their math teacher");const P=t.p+"e9a0bd4ea8b8e7893ef7.png",R=t.p+"3fe3ef135a15dd192135.png",W=t.p+"80989261f0638045adaa.png",J=document.querySelector("#menu-button");J.src=R,document.querySelector("#Logo").src=P;const U=document.querySelector("#slim-nav");J.addEventListener("click",(()=>{U.classList.toggle("hidden"),U.classList.toggle("active")})),document.querySelector("#contact").addEventListener("click",(()=>{window.open("https://forms.gle/uR35Wb4gU7EknXgn7")})),document.querySelector("#embark").addEventListener("click",(()=>{window.open("https://calendly.com/luminoustutor/1-hour-session")})),document.querySelector("#TikTok").src=W,document.querySelector("#social-icons li:nth-child(1) svg").addEventListener("click",(()=>{window.open("https://www.instagram.com/joshuatutoring/")})),document.querySelector("#social-icons li:nth-child(2)>svg").addEventListener("click",(()=>{window.open("mailto:luminoustutor@gmail.com")})),document.querySelector("#TikTok").addEventListener("click",(()=>{window.open("https://www.tiktok.com/@joshuatutoring")}));let N=0;function $(n,e,t=1e3){const o=n.split("");e.append(o[N]),N<n.length-1&&(N+=1,setTimeout((()=>$(n,e,t)),t))}const O=document.querySelector("#LUMINA");document.addEventListener("DOMContentLoaded",(()=>{$("LUMINA",O,150)})),T(document.querySelector("#section1"),E,'Your Head <span class = "emphasis">STEM </span> Tutor: Joshua',"My focus is on the <span class = \"emphasis\">Fundamentals</span>. During my time in school, I've realized most students struggle in classes due to \na lack of understanding of the fundamental 'whys' and 'hows' of math and science. Pure memorization of \nformulas only works for so long. With my lessons, I ensure you that your child will have a strong\ngrasp of the fundamentals to unlock their full potential."),T(document.querySelector("#section2"),z,'Your Head <span class = "emphasis"> Reading </span> And <span class = "emphasis"> Writing </span> Tutor: Sohrab',"I want to foster an environment for students to learn and grow and create an avenue for developing educational \ngoals and skills. I believe bridging the gap between academic learning in school and more engaging practices focused to each specific \nstudent is key to success in the classroom. ",!0),T(document.querySelector("#section3"),j,'First 30 Minutes Free <span class = "emphasis"> #TeamSpirit </span>','Your first 30 are on us. Client satisfaction is our first priority and open communication\nis our strength. We\'ll keep you updated with schedules and concerns over email or phone. It is our goal for your\nchild to learn while also having fun. Sit back, relax, and watch your child shine! \n<span class = "emphasis">#TeamSpirit</span>'),document.querySelector("video > source").src=I;const D=document.querySelector(".scroll-left"),Y=document.querySelector(".scroll-right"),_=document.querySelector("#testWrapper");D.src=L,Y.src=L,D.addEventListener("click",(()=>{_.scrollLeft-=450})),Y.addEventListener("click",(()=>{_.scrollLeft+=450})),document.querySelector("#bookFree").style.backgroundImage=`url(${F})`,document.querySelector("#schedule").addEventListener("click",(()=>{window.open("https://calendly.com/luminoustutor/30min")}))})()})();