(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[181],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("mn0l"),c=a("iojd"),l=a("ahKI"),o=a.n(l),r=a("vumQ"),i=a("Ynrg");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,l=e.showCopy,s=void 0===l||l,m=Object(i["useCopy"])(),d=Object(c["a"])(m,2),u=d[0],p=d[1];return o.a.createElement("div",{className:"__dumi-default-code-block"},o.a.createElement(r["a"],Object(n["a"])({},r["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,c=e.tokens,l=e.getLineProps,r=e.getTokenProps;return o.a.createElement("pre",{className:a,style:n},s&&o.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":p,onClick:()=>u(t)}),c.map(((e,t)=>o.a.createElement("div",l({line:e,key:t}),e.map(((e,t)=>o.a.createElement("span",r({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("mn0l"),c=a("ahKI"),l=a.n(c);a("tCeM");t["a"]=e=>l.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return O}));var n=a("ahKI"),c=a.n(n),l=a("iojd"),o=a("/7QA"),r=a("9kvl"),i=a("Ynrg"),s=a("1KG/"),m=a.n(s),d="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return m.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function p(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},c={},o=Object.values(e.dependencies).filter((e=>e.css)),r="app".concat(a),i="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(l["a"])(e,2),a=t[0],n=t[1].version;c[a]=n})),c["react-dom"]||(c["react-dom"]=c.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(o.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(l["a"])(e,2),a=t[0],c=t[1],o=c.tsx,i=c.jsx,m=c.content,d={content:o||i||m};n["_"===a?r:a]=d,s=s||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),s&&(c["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:c,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:n})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a=Object(n["useState"])(),c=Object(l["a"])(a,2),o=c[0],r=c[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=p(e);function c(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,c("parameters",n),c("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),r((()=>()=>a.submit())),()=>a.remove()}}),[e]),o}var h=a("Bjia");a("YWOM");function b(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var f=e=>{var t,a=Object(n["useRef"])(null),s=Object(n["useContext"])(i["context"]),m=s.locale,d=Object(i["useLocaleProps"])(m,e),u=(null===r["a"]||void 0===r["a"]?void 0:r["a"].location.hash)==="#".concat(d.identifier),p=1===Object.keys(d.sources).length,f=v(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),E=Object(i["useMotions"])(d.motions||[],a.current),g=Object(l["a"])(E,2),j=g[0],w=g[1],_=Object(i["useCopy"])(),y=Object(l["a"])(_,2),O=y[0],x=y[1],k=Object(n["useState"])("_"),N=Object(l["a"])(k,2),C=N[0],M=N[1],Z=Object(n["useState"])(b(C,d.sources[C])),S=Object(l["a"])(Z,2),L=S[0],P=S[1],T=d.sources[C][L]||d.sources[C].content,V=Object(i["useTSPlaygroundUrl"])(m,T),A=Object(i["usePrefersColor"])(),I=Object(l["a"])(A,1);I[0];function K(e){M(e),P(b(e,d.sources[e]))}return c.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},c.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&c.a.createElement(i["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),c.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&c.a.createElement("span",{className:"debug-badge"},"Debug Only"),f&&c.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:f}),d.motions&&c.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:w,onClick:()=>j()}),c.a.createElement("div",{className:"spacer"}),c.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:()=>O(T)}),"tsx"===L&&c.a.createElement(i["Link"],{target:"_blank",to:V},c.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),c.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!p&&c.a.createElement(o["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:C,onChange:K},Object.keys(d.sources).map((e=>c.a.createElement(o["Tabs"].Tab,{title:"_"===e?"index.".concat(b(e,d.sources[e])):e,key:e})))),c.a.createElement("div",{className:"__dumi-default-previewer-source"},c.a.createElement(h["a"],{code:T,lang:L,showCopy:!1}))))},E=f,g=(a("oeoJ"),a("NEWu")),j=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),r=Object(l["a"])(a,2),s=r[0],m=r[1],d=Object(i["usePrefersColor"])(),u=Object(l["a"])(d,1),p=u[0],v=Object(n["useContext"])(i["context"]),h=v.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[p]),c.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":h},c.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),c.a.createElement("div",{className:"adm-doc-device-action"},c.a.createElement("a",{onClick:()=>m(Math.random())},w),c.a.createElement(o["Popover"],{content:c.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},c.a.createElement("a",null,_)),c.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},y)))}),w=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),_=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),y=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),O="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return c.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},c.a.createElement("div",{className:"adm-doc-previewer-source"},c.a.createElement(E,e)),c.a.createElement("div",{className:"adm-doc-previewer-device"},c.a.createElement(j,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),c=a.n(n),l=a("eqKt"),o=a.n(l),r=e=>c.a.createElement("a",{className:o.a.card,href:e.link,target:"_blank"},e.image&&c.a.createElement("img",{src:e.image,alt:e.title}),c.a.createElement("div",{className:o.a.content},c.a.createElement("div",{className:o.a.title},e.title),c.a.createElement("div",{className:o.a.description},e.description)));t["a"]=r},mVOg:function(e,t,a){"use strict";var n=a("iojd"),c=a("ahKI"),l=a.n(c),o=a("Ynrg"),r=a("/7QA");t["a"]=()=>{var e=Object(c["useContext"])(o["context"]),t=e.locale,a=Object(c["useState"])(!1),i=Object(n["a"])(a,2),s=i[0],m=i[1];return l.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},l.a.createElement(r["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},l.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},tM1e:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),c=a.n(n),l=a("Ynrg"),o=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX"),a("gKi5"),a("Bjia")),r=(a("0m3q"),c.a.memo((e=>{e.demos;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"pre-built-bundles"},c.a.createElement(l["AnchorLink"],{to:"#pre-built-bundles","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"Pre-Built Bundles"),c.a.createElement("p",null,"antd-mobile provides a set of pre-built bundles, consisting of two parts:"),c.a.createElement("p",null,"js resource:"),c.a.createElement(o["a"],{code:"/bundle/antd-mobile.cjs.development.js\n/bundle/antd-mobile.es.development.js\n/bundle/antd-mobile.umd.development.js",lang:"text"}),c.a.createElement("p",null,"The above bundles with ",c.a.createElement("code",null,".development")," are only meant for development, and are not suitable for production. Minified and optimized production bundles are available at:"),c.a.createElement(o["a"],{code:"/bundle/antd-mobile.cjs.js\n/bundle/antd-mobile.es.js\n/bundle/antd-mobile.umd.js\n/bundle/antd-mobile.compatible.umd.js",lang:"text"}),c.a.createElement("p",null,"Among them, we provide two versions of umd files, one is ",c.a.createElement("code",null,"antd-mobile.umd.js")," not processed by babel, the compatibility is ",c.a.createElement("code",null,"Chrome >= 61")," ",c.a.createElement("code",null,"iOS >= 11"),", the other is processed by babel ",c.a.createElement("code",null,"antd-mobile.compatible.umd.js"),", compatibility is ",c.a.createElement("code",null,"Chrome >= 49")," ",c.a.createElement("code",null,"iOS >= 9"),"."),c.a.createElement("p",null,"css resource:"),c.a.createElement(o["a"],{code:"/bundle/css-vars-patch.css\n/bundle/style.css",lang:"text"}),c.a.createElement("p",null,"These pre-built js files do not contain css content, so usually, you need to selectively import a certain version of js resources (such as ",c.a.createElement("code",null,"/bundle/antd-mobile.umd.js"),"), and then add additional Import ",c.a.createElement("code",null,"/bundle/style.css"),"."),c.a.createElement("p",null,"You can find it at ",c.a.createElement(l["Link"],{to:"https://unpkg.com/browse/antd-mobile@5/bundle/"},"unpkg")," or [jsdelivr](",c.a.createElement(l["Link"],{to:"https://www.jsdelivr.com/package/npm/antd-mobile?path"},"https://www.jsdelivr.com/package/npm/antd-mobile?path")," =bundle).")))})));t["default"]=e=>{var t=c.a.useContext(l["context"]),a=t.demos;return c.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),c.a.createElement(r,{demos:a})}}}]);