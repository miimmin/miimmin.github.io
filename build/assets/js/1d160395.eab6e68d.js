"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[8295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2866:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"04 \uc6f9 \uad6c\uc131\uc694\uc18c",last_update:{date:"2022-11-02"}},o=void 0,l={unversionedId:"books/frameworkless-front-end-development/04",id:"books/frameworkless-front-end-development/04",isDocsHomePage:!1,title:"04 \uc6f9 \uad6c\uc131\uc694\uc18c",description:"4\uc7a5\uc758 \ubaa9\uc801\uc740 DOM \uc694\uc18c\ub97c \ub80c\ub354\ub9c1\ud558\uace0 \uc2dc\uc2a4\ud15c\uc774\ub098 \uc0ac\uc6a9\uc790\uc758 \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",source:"@site/docs/books/frameworkless-front-end-development/04.md",sourceDirName:"books/frameworkless-front-end-development",slug:"/books/frameworkless-front-end-development/04",permalink:"/tech-blog/docs/books/frameworkless-front-end-development/04",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/books/frameworkless-front-end-development/04.md",tags:[],version:"current",frontMatter:{title:"04 \uc6f9 \uad6c\uc131\uc694\uc18c",last_update:{date:"2022-11-02"}}},s=[{value:"API",id:"api",children:[{value:"Custom Elements API(\uc0ac\uc6a9\uc790 \uc815\uc758 \uc694\uc18c)",id:"custom-elements-api\uc0ac\uc6a9\uc790-\uc815\uc758-\uc694\uc18c",children:[]},{value:"\uc18d\uc131(attributes) \uad00\ub9ac",id:"\uc18d\uc131attributes-\uad00\ub9ac",children:[]},{value:"attributeChangedCallback",id:"attributechangedcallback",children:[]},{value:"\uac00\uc0c1 DOM \ud1b5\ud569",id:"\uac00\uc0c1-dom-\ud1b5\ud569",children:[]},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8(Custom Event)",id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc774\ubca4\ud2b8custom-event",children:[]}]}],u={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4\uc7a5\uc758 \ubaa9\uc801\uc740 DOM \uc694\uc18c\ub97c \ub80c\ub354\ub9c1\ud558\uace0 \uc2dc\uc2a4\ud15c\uc774\ub098 \uc0ac\uc6a9\uc790\uc758 \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"\uc6f9 \uad6c\uc131 \uc694\uc18c\ub294 \uc138 \uac00\uc9c0 \uae30\uc220\ub85c \uad6c\uc131\ub41c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTML \ud15c\ud50c\ub9bf : ",(0,r.kt)("inlineCode",{parentName:"li"},"<template>")," \ud0dc\uadf8\ub294 \ucf58\ud150\uce20\uac00 \ub80c\ub354\ub9c1 \ub418\uc9c0\ub294 \uc54a\uc9c0\ub9cc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \ub3d9\uc801\uc778 \ucf58\ud150\uce20\ub97c \uc0dd\uc131\ud558\ub294\ub370 '\uc2a4\ud0ec\ud504'\ub85c \uc0ac\uc6a9\ub418\ub3c4\ub85d \ud558\ub824\ub294 \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc694\uc18c(Custom Elements)")," : \uc774 API\ub97c \ud1b5\ud574 \uac1c\ubc1c\uc790\ub294 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc790\uc2e0\ub9cc\uc758 DOM \uc694\uc18c\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"\uc100\ub3c4\uc6b0(Shadow) DOM")," : \uc774 \uae30\uc220\uc740 \uc6f9 \uad6c\uc131\uc694\uc18c(Web Component)\uac00 \uad6c\uc131\uc694\uc18c(Component) \uc678\ubd80\uc758 DOM\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\uc544\uc57c \ud558\ub294 \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud558\ub2e4.\n\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uacf5\uc720\ud560 \uc218 \uc788\ub3c4\ub85d Component \ub77c\uc774\ube0c\ub7ec\ub9ac\ub098 \uc704\uc82f\uc744 \uc791\uc131\ud558\ub824\ub294 \uacbd\uc6b0 \ub9e4\uc6b0 \uc720\uc6a9\ud558\ub2e4.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uc100\ub3c4\uc6b0 \ub3d4\uacfc \uac00\uc0c1 \ub3d4\uc740 \ub2e4\ub974\ub2e4. \uc100\ub3c4\uc6b0 \ub3d4\uc740 \ucea1\uc290\ud654\uc640 \uad00\ub828\ub418\uc5b4 \uc788\uc73c\uba70, \uac00\uc0c1 \ub3d4\uc740 \uc131\ub2a5\uacfc \uad00\ub828\ub418\uc5b4 \uc788\ub2e4.\n",(0,r.kt)("a",{parentName:"p",href:"https://develoger.com/shadow-dom-virtual-dom-889bf78ce701"},"\ucc38\uc870\ub9c1\ud06c")))),(0,r.kt)("h3",{id:"custom-elements-api\uc0ac\uc6a9\uc790-\uc815\uc758-\uc694\uc18c"},"Custom Elements API(\uc0ac\uc6a9\uc790 \uc815\uc758 \uc694\uc18c)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"mdn"))),(0,r.kt)("p",null,"Web Component \ud0dc\uadf8\ub97c \uc791\uc131\ud560\ub54c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"-(hypen)"),"\uc744 \ubd99\uc5ec\uc8fc\uc5b4\uc57c \ud55c\ub2e4. \ub450 \ub2e8\uc5b4 \uc774\uc0c1\uc758 \ud0dc\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee4\uc2a4\ud140 HTML\uc744 \ub9cc\ub4e0\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Custom HTML tag"',title:'"Custom',HTML:!0,'tag"':!0},"<hello-world />\n")),(0,r.kt)("h3",{id:"\uc18d\uc131attributes-\uad00\ub9ac"},"\uc18d\uc131(attributes) \uad00\ub9ac"),(0,r.kt)("p",null,"Web Component\uc758 \uac00\uc7a5 \uc911\uc694\ud55c \uae30\ub2a5\uc740 \uac1c\ubc1c\uc790\uac00 \uc5b4\ub5a4 \ud504\ub808\uc784\uc6cc\ud06c\uc640\ub3c4 \ud638\ud658\ub418\ub294 \uc0c8\ub85c\uc6b4 Component\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4\ub294 \uac83\uc774\ub2e4. \uc774 \ubaa9\uc801\uc744 \ub2ec\uc131\ud558\ub824\uba74 Component\uc5d0 \ub2e4\ub978 \ud45c\uc900 HTML \uc694\uc18c\uc640 \ub3d9\uc77c \uacf5\uc6a9 API\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4."),(0,r.kt)("h4",{id:"input\uc758-value-\uc18d\uc131-\ubcc0\uacbd"},"input\uc758 value \uc18d\uc131 \ubcc0\uacbd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title=" HTML\ub9c8\ud06c\uc5d0 \uc9c1\uc811 \ucd94\uac00"',title:'"',"HTML\ub9c8\ud06c\uc5d0":!0,"\uc9c1\uc811":!0,'\ucd94\uac00"':!0},'<input text="text" value="Frameworkless" />\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\uc138\ud130(setter) \uc0ac\uc6a9"',title:'"\uc138\ud130(setter)','\uc0ac\uc6a9"':!0},"input.value = 'Frameworkless';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="setAttributes \uba54\uc11c\ub4dc \uc0ac\uc6a9"',title:'"setAttributes',"\uba54\uc11c\ub4dc":!0,'\uc0ac\uc6a9"':!0},"input.setAttribute('value', 'Frameworkless');\n")),(0,r.kt)("h4",{id:"\uc885\ud569-\uc608\uc81c"},"\uc885\ud569 \uc608\uc81c"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/vigorous-jang-y1xgjf?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectedCallback"),": Custom Element\uc758 \ub77c\uc774\ud504 \uc0ac\uc774\ud074 \uba54\uc11c\ub4dc \uc911 \ud558\ub098\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 Component\uac00 DOM\uc5d0 \uc5f0\uacb0\ub420 \ub54c \ud638\ucd9c \ub41c\ub2e4. \ub9ac\uc561\ud2b8\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"componentDidMount")," \uba54\uc11c\ub4dc\uc640 \ub9e4\uc6b0 \uc720\uc0ac\ud558\ub2e4. \uc608\uc81c\ucc98\ub7fc Component\uc758 \ucf58\ud150\uce20\ub97c \ub80c\ub354\ub9c1\ud558\uac70\ub098 \ud0c0\uc774\uba38\ub97c \uc2dc\uc791\ud558\uac70\ub098 \ub610\ub294 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30\uc5d0 \uc88b\uc740 \uc7a5\uc18c\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disconnectedCallback"),": Component\uac00 DOM\uc5d0\uc11c \uc0ad\uc81c\ub420 \ub54c \ud638\ucd9c \ub418\uba70, \uc815\ub9ac \uc791\uc5c5\uc5d0 \uc720\uc6a9\ud55c \uba54\uc11c\ub4dc\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub85c \uc0c8\ub85c \uc0dd\uc131\ud55c Custom Element\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ube0c\ub77c\uc6b0\uc800 Component \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ucd94\uac00\ud574\uc57c \ub41c\ub2e4. \uc774\ub54c, ",(0,r.kt)("inlineCode",{parentName:"li"},"window.customElements")," \uc18d\uc131\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"define")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubb38\uc790\uc5f4\uc774 \uc544\ub2cc \uc18d\uc131\uc774 \ud544\uc694\ud55c \uacbd\uc6b0, \uc18d\uc131\uc744 \ubcc0\ud658\ud574\uc57c \ud55c\ub2e4.")),(0,r.kt)("h3",{id:"attributechangedcallback"},"attributeChangedCallback"),(0,r.kt)("p",null,"\ucd08\uae30 \ub80c\ub354\ub9c1 \uc774\ud6c4 \ud074\ub9b0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c \uc18d\uc131\uc744 \ubcc0\uacbd \ud560 \uacbd\uc6b0\uc5d0\ub294 \ud654\uba74\uc5d0 \ubc18\uc601\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/zen-leftpad-1qg7x0?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("p",null,"\uc774\ub54c\uc5d0\ub294 \uc18d\uc131\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub418\uac8c \ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4.\n\uc0c8\ub85c\uc6b4 color \uc18d\uc131\uc774 \uc81c\uacf5\ub420 \ub54c\ub9c8\ub2e4 DOM\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\ub3c4\ub85d helloworld \uad6c\uc131\uc694\uc18c\uc758 \ucf54\ub4dc\ub97c \uc218\uc815\ud55c\ub2e4."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/charming-pine-duc8n7?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HelloWorld.js"',title:'"HelloWorld.js"'},"const DEFAULT_COLOR = 'black';\n\nexport default class HelloWorld extends HTMLElement {\n  // highlight-next-line\n  static get observedAttributes() {\n    return ['color'];\n  }\n\n  get color() {\n    return this.getAttribute('color') || DEFAULT_COLOR;\n  }\n\n  set color(value) {\n    this.setAttribute('color', value);\n  }\n  // highlight-next-line\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (!this.div) {\n      return;\n    }\n\n    if (name === 'color') {\n      this.div.style.color = newValue;\n    }\n  }\n\n  connectedCallback() {\n    window.requestAnimationFrame(() => {\n      this.div = document.createElement('div');\n      this.div.textContent = 'Hello World!';\n      this.div.style.color = this.color;\n      this.appendChild(this.div);\n    });\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ub54c observedAttributes \ubc30\uc5f4\uc5d0 \ub098\uc5f4\ub41c \uc18d\uc131\ub9cc attributeChangedCallback\uac00 \ud2b8\ub9ac\uac70\ud55c\ub2e4.")),(0,r.kt)("h3",{id:"\uac00\uc0c1-dom-\ud1b5\ud569"},"\uac00\uc0c1 DOM \ud1b5\ud569"),(0,r.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub294 \ub9ce\uc740 \uc18d\uc131\uc744 \uac00\uc9c4 \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud558\ub2e4."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/agitated-paper-13g78t?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HelloWorld.js"',title:'"HelloWorld.js"'},"import applyDiff from './applyDiff.js';\n\nconst DEFAULT_COLOR = 'black';\n\nconst createDomElement = (color) => {\n  const div = document.createElement('div');\n  div.textContent = 'Hello World!';\n  div.style.color = color;\n  return div;\n};\n\nexport default class HelloWorld extends HTMLElement {\n  static get observedAttributes() {\n    return ['color'];\n  }\n\n  get color() {\n    return this.getAttribute('color') || DEFAULT_COLOR;\n  }\n\n  set color(value) {\n    this.setAttribute('color', value);\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    // highlight-next-line\n    if (!this.hasChildNodes()) {\n      return;\n    }\n\n    // highlight-next-line\n    applyDiff(this, this.firstElementChild, createDomElement(newValue));\n  }\n\n  connectedCallback() {\n    window.requestAnimationFrame(() => {\n      this.appendChild(createDomElement(this.color));\n    });\n  }\n}\n")),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc774\ubca4\ud2b8custom-event"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8(Custom Event)"),(0,r.kt)("h4",{id:"github-avatar-\uc608\uc81c"},"github avatar \uc608\uc81c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github avatar \uad6c\uc131 \uc694\uc18c\uc758 \uc21c\uc11c\ub3c4",src:n(3781).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uad6c\uc131\uc694\uc18c\uac00 DOM\uc5d0 \uc5f0\uacb0\ub418\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"loading"),"\uc774\ub77c\ub294 \uc790\ub9ac\ud45c\uc2dc\uc790\uac00 \ud45c\uc2dc\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uae43\ud5c8\ube0c REST API\ub85c \uc544\ubc14\ud0c0 \uc774\ubbf8\uc9c0 URL\uc744 \uac00\uc838\uc628\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc131\uacf5\ud558\uba74 \uc544\ubc14\ud0c0\uac00 \ud45c\uc2dc, \uc2e4\ud328\ud558\uba74 \uc624\ub958 \uc790\ub9ac\ud45c\uc2dc\uc790\uac00 \ud45c\uc2dc\ub41c\ub2e4.")),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/blissful-sutherland-ch5lqy?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="GitHubAvatar.js"',title:'"GitHubAvatar.js"'},"const ERROR_IMAGE = 'https://files-82ee7vgzc.now.sh';\nconst LOADING_IMAGE = 'https://files-8bga2nnt0.now.sh';\n\nconst getGitHubAvatarUrl = async (user) => {\n  if (!user) {\n    return;\n  }\n\n  const url = `https://api.github.com/users/${user}`;\n\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(response.statusText);\n  }\n  const data = await response.json();\n  return data.avatar_url;\n};\n\n// custom-html\nexport default class GitHubAvatar extends HTMLElement {\n  constructor() {\n    super();\n    // highlight-next-line\n    this.url = LOADING_IMAGE;\n  }\n\n  // user \uc18d\uc131 \uc815\uc758.\n  get user() {\n    return this.getAttribute('user');\n  }\n\n  set user(value) {\n    this.setAttribute('user', value);\n  }\n\n  render() {\n    window.requestAnimationFrame(() => {\n      this.innerHTML = '';\n      const img = document.createElement('img');\n      img.src = this.url;\n      this.appendChild(img);\n    });\n  }\n\n  async loadNewAvatar() {\n    const { user } = this;\n    if (!user) {\n      return;\n    }\n    try {\n      // highlight-next-line\n      this.url = await getGitHubAvatarUrl(user);\n    } catch (e) {\n      // highlight-next-line\n      this.url = ERROR_IMAGE;\n    }\n\n    this.render();\n  }\n\n  connectedCallback() {\n    this.render();\n    this.loadNewAvatar();\n  }\n}\n")),(0,r.kt)("h4",{id:"github-avatar-\uc0ac\uc6a9\uc790-\uc815\uc758-\uc774\ubca4\ud2b8"},"github avatar \uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/amazing-shockley-59186o?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import GitHubAvatar, { EVENTS } from './components/GitHubAvatar.js';\n\nwindow.customElements.define('github-avatar', GitHubAvatar);\n\ndocument.querySelectorAll('github-avatar').forEach((avatar) => {\n  avatar.addEventListener(EVENTS.AVATAR_LOAD_COMPLETE, (e) => {\n    console.log('Avatar Loaded', e.detail.avatar);\n  });\n\n  avatar.addEventListener(EVENTS.AVATAR_LOAD_ERROR, (e) => {\n    console.log('Avatar Loading error', e.detail.error);\n  });\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="GitHubAvatar.js"',title:'"GitHubAvatar.js"'},"const ERROR_IMAGE = 'https://files-82ee7vgzc.now.sh';\nconst LOADING_IMAGE = 'https://files-8bga2nnt0.now.sh';\nconst AVATAR_LOAD_COMPLETE = 'AVATAR_LOAD_COMPLETE';\nconst AVATAR_LOAD_ERROR = 'AVATAR_LOAD_ERROR';\n\n// highlight-start\nexport const EVENTS = {\n  AVATAR_LOAD_COMPLETE,\n  AVATAR_LOAD_ERROR,\n};\n// highlight-end\n\nconst getGitHubAvatarUrl = async (user) => {\n  if (!user) {\n    return;\n  }\n\n  const url = `https://api.github.com/users/${user}`;\n\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(response.statusText);\n  }\n  const data = await response.json();\n  return data.avatar_url;\n};\n\nexport default class GitHubAvatar extends HTMLElement {\n  constructor() {\n    super();\n    this.url = LOADING_IMAGE;\n  }\n\n  get user() {\n    return this.getAttribute('user');\n  }\n\n  set user(value) {\n    this.setAttribute('user', value);\n  }\n\n  render() {\n    window.requestAnimationFrame(() => {\n      this.innerHTML = '';\n      const img = document.createElement('img');\n      img.src = this.url;\n      this.appendChild(img);\n    });\n  }\n\n  // \uc0ac\uc6a9\uc790 \uc774\ubca4\ud2b8 \uc815\uc758\n  // highlight-start\n  onLoadAvatarComplete() {\n    const event = new CustomEvent(AVATAR_LOAD_COMPLETE, {\n      detail: {\n        avatar: this.url,\n      },\n    });\n\n    this.dispatchEvent(event);\n  }\n\n  onLoadAvatarError(error) {\n    const event = new CustomEvent(AVATAR_LOAD_ERROR, {\n      detail: {\n        error,\n      },\n    });\n\n    this.dispatchEvent(event);\n  }\n  // highlight-end\n\n  async loadNewAvatar() {\n    const { user } = this;\n    if (!user) {\n      return;\n    }\n    try {\n      this.url = await getGitHubAvatarUrl(user);\n      this.onLoadAvatarComplete();\n    } catch (e) {\n      this.url = ERROR_IMAGE;\n      this.onLoadAvatarError(e);\n    }\n\n    this.render();\n  }\n\n  connectedCallback() {\n    this.render();\n    this.loadNewAvatar();\n  }\n}\n")))}c.isMDXComponent=!0},3781:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-0ddd7375be538857fe89636737f5ce76.png"}}]);