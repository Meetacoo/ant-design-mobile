(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("mn0l"),l=a("iojd"),r=a("ahKI"),c=a.n(r),o=a("vumQ"),i=a("Ynrg");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,s=void 0===r||r,m=Object(i["useCopy"])(),d=Object(l["a"])(m,2),u=d[0],E=d[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(o["a"],Object(n["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,r=e.getLineProps,o=e.getTokenProps;return c.a.createElement("pre",{className:a,style:n},s&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>u(t)}),l.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},HwBF:function(e,t,a){},N0lm:function(e,t,a){"use strict";var n=a("mn0l"),l=a("ahKI"),r=a.n(l);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return _}));var n=a("ahKI"),l=a.n(n),r=a("iojd"),c=a("/7QA"),o=a("9kvl"),i=a("Ynrg"),s=a("1KG/"),m=a.n(s),d="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return m.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function E(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},l={},c=Object.values(e.dependencies).filter((e=>e.css)),o="app".concat(a),i="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(r["a"])(e,2),a=t[0],n=t[1].version;l[a]=n})),l["react-dom"]||(l["react-dom"]=l.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(c.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(r["a"])(e,2),a=t[0],l=t[1],c=l.tsx,i=l.jsx,m=l.content,d={content:c||i||m};n["_"===a?o:a]=d,s=s||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),s&&(l["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:l,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:n})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a=Object(n["useState"])(),l=Object(r["a"])(a,2),c=l[0],o=l[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=E(e);function l(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,l("parameters",n),l("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),o((()=>()=>a.submit())),()=>a.remove()}}),[e]),c}var h=a("Bjia");a("YWOM");function p(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var f=e=>{var t,a=Object(n["useRef"])(null),s=Object(n["useContext"])(i["context"]),m=s.locale,d=Object(i["useLocaleProps"])(m,e),u=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(d.identifier),E=1===Object.keys(d.sources).length,f=v(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),b=Object(i["useMotions"])(d.motions||[],a.current),g=Object(r["a"])(b,2),w=g[0],y=g[1],k=Object(i["useCopy"])(),j=Object(r["a"])(k,2),_=j[0],O=j[1],x=Object(n["useState"])("_"),N=Object(r["a"])(x,2),C=N[0],A=N[1],L=Object(n["useState"])(p(C,d.sources[C])),S=Object(r["a"])(L,2),I=S[0],M=S[1],Z=d.sources[C][I]||d.sources[C].content,P=Object(i["useTSPlaygroundUrl"])(m,Z),T=Object(i["usePrefersColor"])(),V=Object(r["a"])(T,1);V[0];function K(e){A(e),M(p(e,d.sources[e]))}return l.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&l.a.createElement(i["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),f&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:f}),d.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>w()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":O,onClick:()=>_(Z)}),"tsx"===I&&l.a.createElement(i["Link"],{target:"_blank",to:P},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!E&&l.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:C,onChange:K},Object.keys(d.sources).map((e=>l.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(p(e,d.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(h["a"],{code:Z,lang:I,showCopy:!1}))))},b=f,g=(a("oeoJ"),a("NEWu")),w=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),o=Object(r["a"])(a,2),s=o[0],m=o[1],d=Object(i["usePrefersColor"])(),u=Object(r["a"])(d,1),E=u[0],v=Object(n["useContext"])(i["context"]),h=v.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[E]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":h},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>m(Math.random())},y),l.a.createElement(c["Popover"],{content:l.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,k)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},j)))}),y=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),k=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),j=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),_="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(b,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(w,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("eqKt"),c=a.n(r),o=e=>l.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:c.a.content},l.a.createElement("div",{className:c.a.title},e.title),l.a.createElement("div",{className:c.a.description},e.description)));t["a"]=o},mVOg:function(e,t,a){"use strict";var n=a("iojd"),l=a("ahKI"),r=a.n(l),c=a("Ynrg"),o=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(c["context"]),t=e.locale,a=Object(l["useState"])(!1),i=Object(n["a"])(a,2),s=i[0],m=i[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},w2f6:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("HwBF");function o(e,t){return u(e)||d(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function u(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=o(r,2),s=i[0],m=i[1],d=Object(n["useState"])(!1),u=o(d,2),E=u[0],v=u[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){m(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},ya2X:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),r=a("Ynrg"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),o=(a("gKi5"),a("Bjia"),a("0m3q"),a("w2f6")),i=l.a.memo((e=>{var t=e.demos,a=t["ellipsis-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"ellipsis-\u6587\u672c\u7701\u7565"},l.a.createElement(r["AnchorLink"],{to:"#ellipsis-\u6587\u672c\u7701\u7565","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ellipsis \u6587\u672c\u7701\u7565"),l.a.createElement("p",null,"\u5c55\u793a\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u9690\u53bb\u90e8\u5206\u5185\u5bb9\u5e76\u7528\u201c...\u201d\u66ff\u4ee3\u3002"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6587\u672c\u5185\u5bb9\u957f\u5ea6\u6216\u9ad8\u5ea6\u8d85\u8fc7\u5217\u5bbd\u6216\u884c\u9ad8\u3002"),l.a.createElement("li",null,"\u56fe\u8868\u4e2d\u7a7a\u95f4\u6709\u9650\uff0c\u6587\u672c\u5185\u5bb9\u65e0\u6cd5\u5b8c\u5168\u663e\u793a\u3002"),l.a.createElement("li",null,"\u81ea\u9002\u5e94\u8c03\u6574\u65f6\u5bbd\u5ea6\u53d8\u5c0f\u3002")),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(c["default"],t["ellipsis-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"ellipsis"},l.a.createElement(r["AnchorLink"],{to:"#ellipsis","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Ellipsis"),l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"collapseText"),l.a.createElement("td",null,"\u6536\u8d77\u64cd\u4f5c\u7684\u6587\u6848"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"''"))),l.a.createElement("tr",null,l.a.createElement("td",null,"content"),l.a.createElement("td",null,"\u6587\u672c\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"direction"),l.a.createElement("td",null,"\u7701\u7565\u4f4d\u7f6e"),l.a.createElement("td",null,l.a.createElement("code",null,"'start' | 'end' | 'middle'")),l.a.createElement("td",null,l.a.createElement("code",null,"'end'"))),l.a.createElement("tr",null,l.a.createElement("td",null,"expandText"),l.a.createElement("td",null,"\u5c55\u5f00\u64cd\u4f5c\u7684\u6587\u6848"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"''"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onContentClick"),l.a.createElement("td",null,"\u70b9\u51fb\u6587\u672c\u5185\u5bb9\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"(e: React.MouseEvent) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"rows"),l.a.createElement("td",null,"\u5c55\u793a\u51e0\u884c"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"stopPropagationForActionButtons"),l.a.createElement("td",null,"\u963b\u6b62\u5c55\u5f00\u64cd\u4f5c\uff0c\u6536\u8d77\u64cd\u4f5c\u5f15\u53d1\u7684\u4e8b\u4ef6\u5192\u6ce1"),l.a.createElement("td",null,l.a.createElement("code",null,"PropagationEvent[]")),l.a.createElement("td",null,l.a.createElement("code",null,"[]"))))),l.a.createElement("h2",{id:"faq"},l.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"FAQ"),l.a.createElement("h3",{id:"\u6587\u672c\u5185\u5bb9\u5305\u542b\u8f83\u957f\u4e14\u8fde\u7eed\u7684\u6570\u5b57\u6216\u82f1\u6587\u65f6\u4e0d\u4f1a\u51fa\u73b0\u7701\u7565\u600e\u4e48\u529e"},l.a.createElement(r["AnchorLink"],{to:"#\u6587\u672c\u5185\u5bb9\u5305\u542b\u8f83\u957f\u4e14\u8fde\u7eed\u7684\u6570\u5b57\u6216\u82f1\u6587\u65f6\u4e0d\u4f1a\u51fa\u73b0\u7701\u7565\u600e\u4e48\u529e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6587\u672c\u5185\u5bb9\u5305\u542b\u8f83\u957f\u4e14\u8fde\u7eed\u7684\u6570\u5b57\u6216\u82f1\u6587\u65f6\uff0c\u4e0d\u4f1a\u51fa\u73b0\u7701\u7565\u600e\u4e48\u529e\uff1f"),l.a.createElement("p",null,l.a.createElement("code",null,"Ellipsis")," \u7ec4\u4ef6\u5185\u90e8\u4f1a\u8bfb\u53d6 ",l.a.createElement("code",null,"word-break")," \u8fd9\u4e2a CSS \u5c5e\u6027\u7684\u503c\uff0c\u5982\u679c\u672a\u8bbe\u7f6e\u8be5\u6837\u5f0f\u5c5e\u6027\u7684\u503c\uff0c\u9ed8\u8ba4\u503c\u4e3a\uff1a",l.a.createElement("code",null,"normal"),"\u3002\u6240\u4ee5\uff0c\u5f53\u6587\u672c\u5185\u5bb9\u4e2d\u5305\u542b\u5927\u91cf\u6570\u5b57\u6216\u82f1\u6587\u65f6\uff0c\u6587\u672c\u5185\u5bb9\u65e0\u6cd5\u7701\u7565\uff08\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u884c\u4e3a\uff09\u3002 \u6b64\u65f6\uff0c\u5982\u679c\u9700\u8981\u8ba9\u6587\u672c\u7701\u7565\u751f\u6548\uff0c\u53ef\u4ee5\u624b\u52a8\u5728 ",l.a.createElement("code",null,"Ellipsis")," \u7ec4\u4ef6\u6216\u5176\u5916\u5c42\u5143\u7d20\u4e2d\uff0c\u6dfb\u52a0 ",l.a.createElement("code",null,"word-break")," \u6837\u5f0f\uff08\u6bd4\u5982\uff0c",l.a.createElement("code",null,"word-break: break-word"),"\uff09\uff0c",l.a.createElement("code",null,"Ellipsis")," \u7ec4\u4ef6\u4f1a\u5b8c\u5168\u9075\u5faa\u6837\u5f0f\u7ee7\u627f\u884c\u4e3a\uff0c\u62ff\u5230\u4f60\u8bbe\u7f6e\u7684 ",l.a.createElement("code",null,"word-break"),"\uff0c\u4ece\u800c\u5b9e\u73b0\u81ea\u52a8\u7701\u7565\u3002"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);