(()=>{"use strict";var n={199:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"#hero {\n    flex-wrap: wrap-reverse;\n    justify-content: center;\n    align-items: center;\n    padding: 30px;\n    max-width: 1600px;\n    gap: 5%;\n}\n\n.caption {\n    text-align: center;\n    font-style: italic;\n    font-size: 16px;\n    margin: 10px 0 20px 0;\n}\n#hero p {\n    font-size: 19px;\n}\n#team {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.underline {\n    width: 150px;\n    height: 5px;\n    background-color: var(--lightblue);\n    margin: 10px 0 10px 0;\n}\n\n.major {\n    color: rgb(68, 68, 68);\n    font-size: 14px;\n    margin: 0 0 10px 0;\n}\n\n#about-hero{\n    width: 40%;\n}\n\n#hero > .text-wrapper{\n    margin-bottom: 50px;\n    width: 35%;\n}\n\n#team h1{\n    margin: 0;\n}\n\n\n.team-container{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap:3vw;\n    margin: 30px;\n}\n\n.team-container * {\n    transition: ease 1s;\n}\n.team-container img {\n    width: 250px;\n    height: 250px;\n    object-fit: cover;\n    margin-bottom: 20px;\n    border-radius: 50%;\n    background-color: rgba(119, 187, 214, 0.363);\n}\n\n.team-container div {\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px;\n    border-radius: 20px;\n}\n.team-container h1, .team-container h2, .team-container h4{\n    text-align: center;\n    margin: 0;\n}\n\n.team-container p {\n    text-align: center;\n    font-size: 20px;\n}\n\n.about-me{\n    position: absolute;\n    text-align: center;\n    background-color: rgba(255, 255, 255, 0.685);\n    color: rgb(0, 0, 0);\n    top: 0;\n    margin: 0;\n    padding: 20px;\n    opacity: 0;\n    width: 100%;\n    transition: all 0.3s ease;\n    height: 100%;\n    border: solid var(--lightblue) 1px;\n}\n@media only screen and (max-width: 990px){\n    #about-hero{\n        width: 80%;\n        margin-right: 0;\n    }\n    \n    #hero > .text-wrapper{\n        width: 80%;\n    }\n  \n  }",""]);const s=r},383:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,'footer {\n    padding: 60px;\n    background-color: rgb(21, 22, 24);\n    font-family: "Poppins", sans-serif;\n    width: 100vw;\n\n}\nfooter h1{\n    font-family: "Poppins", sans-serif;\n    font-weight: 700;\n    letter-spacing: 0.3px;\n    font-size: 30px;\n    color: rgb(240, 240, 240);\n    text-align: center;\n    margin-bottom: 16px;\n}\n\nfooter ul {\n    display: flex;\n    list-style-type: none;\n    padding: 0;\n    justify-content: center;\n}\n\n#social-icons{\n    display: flex\n}\n\nfooter li {\n    font-weight: 400;\n    padding: 0 18px;\n    font-size: 14px;\n    color: rgb(156, 156, 156);\n    text-align: center;\n}\nfooter a {\n    margin: 0; \n    padding: 0;\n}\nfooter a:hover {\n    transition: all 0.3s ease;\n    color: rgb(214, 214, 214);\n}\n\nfooter p {\n    color: rgba(255, 255, 255, 0.3);\n    margin-top: 48px;\n    font-size: 14px;\n}\n\nfooter svg {\n    fill: white;\n    cursor: pointer;\n}\n\n#social-icons li {\n    padding: 0;\n}\n\n#social-icons {\n    margin: 40px;\n    gap: 16px;\n}\n\n\n#TikTok {\n    width: 40px;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 820px){\n    footer ul {\n        display: grid;\n    }\n}',""]);const s=r},787:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"body {\n    color: #232323;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#slim-nav{\n    display: none;\n}\n\n#menu-button{\n    display: none;\n}\n\nnav{\n    position: fixed;\n    top: 0;\n    min-height: 60px;\n    z-index: 100;\n    color: inherit;\n    display: flex;\n    width: 100vw;\n    gap: 1vw;\n    padding-left: 30px;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 18px;\n    box-shadow: 0px 7px 15px -2px rgba(0, 0, 0, 0.233);\n    background-color: white;\n}\n\n#Logo {\n    width: clamp(200px, calc(1vw + 100px), 500px)\n}\nli, nav > p {\n    padding: 10px 1vw;\n}\n\n#number {\n    font-weight: 550;\n    font-size: calc(10px + 0.5vw);\n    margin-left: auto;\n\n}\n\nnav > div {\n    margin-right: 30px;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    overflow-x: visible;\n}\nnav > div> button, #get-started {\n    padding: 10px 20px;\n    background-color: rgb(159, 193, 245);\n    border-radius: 5px;\n    border-style: solid;\n    border-color: rgb(159, 193, 245);\n    cursor: pointer;\n}\n\nnav > ul > li {\n    padding: 15px;\n}\na{\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n#wide-nav a{\n    font-size: calc(10px + 0.5vw);\n    margin: 1.5px;\n    line-height: 20px;\n}\n\n#wide-nav a:hover {\n    transition: all 0.3s ease;\n    font-size: calc(11px + 0.5vw);\n    color: rgb(42, 59, 71);\n}\n\n#embark{\n    font-size: calc(10px + 0.5vw);\n}\n\n#contact {\n    background-color: rgb(233, 233, 233);\n    border-color: rgb(233, 233, 233);\n    font-size: calc(10px + 0.5vw);\n}\n\n/*For Nav Bar To Become Condensed */\n@media only screen and (max-width: 1040px) {\n    /* Styles specific to phones */\n    #wide-nav{\n        display: none;\n    }\n\n    #number{\n        display: none;\n    }\n    #contact{\n        display: none;\n    }\n    #menu-button{\n        display: block;\n        margin: 10px 0;\n    }\n    #slim-nav{\n        top: 50px;\n        display: flex;\n        transition: all 0.3s ease;\n        flex-direction: column;\n        justify-content: space-around;\n        position: fixed;\n        z-index: 99;\n        align-items: center;\n        height: 70vh;\n        width: 100vw;\n        background-color: white;\n        transform-origin: top left;\n        transition: all 0.3s ease;\n    }\n    #slim-nav > li {\n        font-size: 16px;\n        font-family: FoundersBold;\n        font-weight: 1000;\n        display: flex;\n        flex-direction: column;\n        padding: 20px;\n        align-items: center;\n    }\n    #menu-button {\n        transition: all 0.3s ease;\n        border-radius: 5px;\n        padding: 5px;\n        width: 75px;\n        height: 50px;\n        object-fit: contain;\n        cursor: pointer;\n        background-color: #ebebeb;\n    }\n    #menu-button:hover{\n        transition: all 0.3s ease;\n        background-color: #dddddd;\n    }\n\n    #embark{\n        font-size: 16px;\n        padding: 2vw 0.7vw;\n    }\n    \n  }",""]);const s=r},269:(n,e,t)=>{t.d(e,{A:()=>h});var o=t(601),i=t.n(o),a=t(314),r=t.n(a),s=t(417),l=t.n(s),c=new URL(t(313),t.b),d=new URL(t(61),t.b),p=new URL(t(833),t.b),u=r()(i()),f=l()(c),m=l()(d),g=l()(p);u.push([n.id,`@font-face { font-family: Bureau; src: url(${f}); } \n@font-face { font-family: FoundersBold; src: url(${m}); } \n@font-face { font-family: Founders; src: url(${g}); } \n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*Fix Scrolling */\n\n*, html {\n\n  scroll-behavior: smooth !important;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n  overflow-x: hidden;\n  \n}\n\n/* Remove default margin in favour of better control in authored CSS */\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  padding-top: calc(80px + 2vw);\n  font-family: Founders, sans-serif;\n  margin: 0;\n}\n\n/* Set shorter line heights on headings and interactive elements */\n\n\n/* Balance text wrapping on headings */\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\nmain{\n  max-width: 100vw;\n}\n\n/*End of Reset*/`,""]);const h=u},945:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,".section{\n    padding: 10px 5vw;\n    max-width: 1800px;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.section .bodyText{\n    font-size: 18px;\n}\n\n.section img {\n    object-fit: cover;\n    width: 40%;\n}\n\n\n.section .wrapper{\n    width: 40%;\n    min-width: 450px;\n}\n\n@media only screen and (max-width: 990px){\n    .section{\n        gap: 10px;\n    }\n    .section .wrapper, .section img{\n        width: 90vw;\n        min-width: 0;\n    }\n\n  \n  }",""]);const s=r},515:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,":root{\n  --lightblue: rgb(60, 146, 216);\n}\n\n*{\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n.alignLeft {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 880px;\n  padding-left: 10px;\n}\n\n.hidden{\n  transform: scale(0.7);\n  opacity: 0; \n  display: none;\n}\n\n.active{\n  transform: scale(1);\n  opacity: 100;\n}\n\n.flex{\n  display: flex;\n}\n\n.verticalFlex{\n  display: flex;\n  flex-direction: column;\n}\n\n/*Font stuff */\n.foundersH{\n  font-family: FoundersBold, sans-serif;\n  font-weight: 800;\n  color: rgba(19, 31, 48, 1);\n}\n\n.smallerH{\n  font-size: 42px;\n}\n\n.centered{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1{\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: 1.4px;\n  margin: 20px 0;\n  font-family: Bureau, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nh2{\n  font-weight: 400;\n  text-align: center;\n  font-family: FoundersBold, sans-serif;\n}\n\np {\n  font-size: 20px;\n}\n\nul{\n  padding-left: 0px;\n  list-style: none;\n  display:flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n}\n\n.animatedHover{\n  transition: all 0.3s ease\n}\n\n.animatedHover:hover{\n  transition: all 0.3s ease;\n  transform: scale(1.05,1.05);\n}\n\n@media (max-width: 768px){\n  h1, p{\n    padding: 0 10px;\n  }\n}",""]);const s=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var l=o(n,i),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},313:(n,e,t)=>{n.exports=t.p+"857c02a693e4d8c19baa.otf"},61:(n,e,t)=>{n.exports=t.p+"933e46628e790c08cfba.otf"},833:(n,e,t)=>{n.exports=t.p+"cf04cce70a64e312dd43.otf"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"c678fdfbbf6c3d88edde.png",e=t.p+"3fe3ef135a15dd192135.png",o=t.p+"80989261f0638045adaa.png",i=document.querySelector("#menu-button");i.src=e,document.querySelector("#Logo").src=n;const a=document.querySelector("#slim-nav");i.addEventListener("click",(()=>{a.classList.toggle("hidden"),a.classList.toggle("active")})),document.querySelector("#contact").addEventListener("click",(()=>{window.open("https://forms.gle/uR35Wb4gU7EknXgn7")})),document.querySelector("#embark").addEventListener("click",(()=>{window.open("https://calendly.com/luminoustutor/1-hour-session")})),document.querySelector("#TikTok").src=o,document.querySelector("#social-icons li:nth-child(1) svg").addEventListener("click",(()=>{window.open("https://www.instagram.com/joshuatutoring/")})),document.querySelector("#social-icons li:nth-child(2)>svg").addEventListener("click",(()=>{window.open("mailto:luminoustutor@gmail.com")})),document.querySelector("#TikTok").addEventListener("click",(()=>{window.open("https://www.tiktok.com/@joshuatutoring")}));var r=t(72),s=t.n(r),l=t(825),c=t.n(l),d=t(659),p=t.n(d),u=t(56),f=t.n(u),m=t(540),g=t.n(m),h=t(113),y=t.n(h),x=t(269),v={};v.styleTagTransform=y(),v.setAttributes=f(),v.insert=p().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=g(),s()(x.A,v),x.A&&x.A.locals&&x.A.locals;var w=t(515),b={};b.styleTagTransform=y(),b.setAttributes=f(),b.insert=p().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=g(),s()(w.A,b),w.A&&w.A.locals&&w.A.locals;var k=t(787),A={};A.styleTagTransform=y(),A.setAttributes=f(),A.insert=p().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=g(),s()(k.A,A),k.A&&k.A.locals&&k.A.locals;var S=t(383),E={};E.styleTagTransform=y(),E.setAttributes=f(),E.insert=p().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=g(),s()(S.A,E),S.A&&S.A.locals&&S.A.locals;var T=t(199),z={};z.styleTagTransform=y(),z.setAttributes=f(),z.insert=p().bind(null,"head"),z.domAPI=c(),z.insertStyleElement=g(),s()(T.A,z),T.A&&T.A.locals&&T.A.locals;var C=t(945),I={};I.styleTagTransform=y(),I.setAttributes=f(),I.insert=p().bind(null,"head"),I.domAPI=c(),I.insertStyleElement=g(),s()(C.A,I),C.A&&C.A.locals&&C.A.locals,document.querySelector("main");const j=t.p+"8076034feb661aed4d3a.png",L=t.p+"d2d68744286fecb4bc03.png",B=t.p+"efe212f4dfc2022c1f97.png",P=t.p+"8a98b3fec8ea2d11a8de.png";function F(n,e,t,o,i){let a=0;const r=document.createElement("div");r.style.position="relative";const s=document.createElement("img");s.src=n;const l=document.createElement("p");l.classList.add("major"),l.textContent=e;const c=document.createElement("h2");c.textContent=t,c.style.fontWeight=1e3;const d=document.createElement("h4");d.textContent=o,r.appendChild(s),r.appendChild(l),r.appendChild(c),r.appendChild(d);const p=document.createElement("p");return p.textContent=i,p.classList.add("about-me"),r.appendChild(p),p.addEventListener("mouseenter",(()=>{s.style.opacity=.4,l.style.opacity=0,c.style.opacity=0,d.style.opacity=0,p.style.opacity=1})),p.addEventListener("mouseleave",(()=>{s.style.opacity=1,l.style.opacity=1,c.style.opacity=1,d.style.opacity=1,p.style.opacity=0})),r.addEventListener("touchstart",(()=>{a?(s.style.opacity=1,l.style.opacity=1,c.style.opacity=1,d.style.opacity=1,p.style.opacity=0,a=0):(s.style.opacity=.4,l.style.opacity=0,c.style.opacity=0,d.style.opacity=0,p.style.opacity=1,a=1),console.log("clicked")})),r}document.querySelector("#about-hero").src=j;const M=document.querySelector("#management"),q=F(L,"UC Berkeley | EECS + Applied Math","Joshua Zhou","Founder","I am a rising second-year student as UC Berkeley. I am passionate about engineering\nand math and their applications in space. During my free time, I enjoy playing sports as well as creating art.\nI welcome you to Luminous and look forward to working with you! \n "),U=F(B,"IVC | Economics","Sohrab Sadjadi","Business Lead","Beginning in high school, I was always on the lookout for business ventures and\nopportunities. Working with Josh, I focus on delivering the best customer experience as both a tutor and\nmarketer. I really enjoy playing soccer as well as spending time with my friends. Welcome to Luminous!");M.appendChild(q),M.appendChild(U);const R=document.querySelector("#tutors"),H=F(P,"UC Berkeley | Political Science + Data Science","Daniel Delpassand","Writing And Professional Development","Hi! My name is Daniel, and I am a rising second-year. As I continued to \nmaster my writing skills through AP exams, college applications, and essays during my freshman year of college, \nI gained valuable insights into what can elevate a student’s writing from satisfactory to excellent. My main focus \nas your writing tutor is to ignite your intellectual fire, to give your writing ideas a deeper layer of nuance. \nThen, I will teach you how to execute these ideas with effective rhetoric. In my free time, I like to play \npickleball and chess. I look forward to working with you!");R.appendChild(H)})()})();