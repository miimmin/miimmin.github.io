"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[8457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8578:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={},i="\ubb34\uacb0\uc131",o={unversionedId:"cs/database/rdbms/Integrity",id:"cs/database/rdbms/Integrity",isDocsHomePage:!1,title:"\ubb34\uacb0\uc131",description:"\ud83d\udc23\xa0\ub370\uc774\ud130 \ubb34\uacb0\uc131?",source:"@site/docs/cs/database/rdbms/Integrity.md",sourceDirName:"cs/database/rdbms",slug:"/cs/database/rdbms/Integrity",permalink:"/docs/cs/database/rdbms/Integrity",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cs/database/rdbms/Integrity.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"Key",permalink:"/docs/cs/database/rdbms/Key"},next:{title:"\uc778\ub371\uc2a4",permalink:"/docs/cs/database/sql-advanced/Index"}},c=[{value:"\ud83d\udc23\xa0\ub370\uc774\ud130 \ubb34\uacb0\uc131?",id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131",children:[{value:"\ud83e\udd5a \uc77c\uad00\uc131 vs \uc815\ud655\uc131",id:"-\uc77c\uad00\uc131-vs-\uc815\ud655\uc131",children:[]},{value:"\ud83e\udd5a \ubb34\uacb0\uc131 vs \uc815\ud569\uc131",id:"-\ubb34\uacb0\uc131-vs-\uc815\ud569\uc131",children:[]}]},{value:"\ud83d\udc23 \ub370\uc774\ud130 \ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74",id:"-\ub370\uc774\ud130-\ubb34\uacb0\uc131-\uc81c\uc57d\uc870\uac74",children:[{value:"\ud83e\udd5a \uac1c\uccb4 \ubb34\uacb0\uc131",id:"-\uac1c\uccb4-\ubb34\uacb0\uc131",children:[]},{value:"\ud83e\udd5a \ucc38\uc870 \ubb34\uacb0\uc131",id:"-\ucc38\uc870-\ubb34\uacb0\uc131",children:[]},{value:"\ud83e\udd5a \ub3c4\uba54\uc778 \ubb34\uacb0\uc131",id:"-\ub3c4\uba54\uc778-\ubb34\uacb0\uc131",children:[]},{value:"\ud83e\udd5a Null \ubb34\uacb0\uc131",id:"-null-\ubb34\uacb0\uc131",children:[]},{value:"\ud83e\udd5a \uace0\uc720(Unique) \ubb34\uacb0\uc131",id:"-\uace0\uc720unique-\ubb34\uacb0\uc131",children:[]},{value:"\ud83e\udd5a \ud0a4 \ubb34\uacb0\uc131",id:"-\ud0a4-\ubb34\uacb0\uc131",children:[]},{value:"\ud83e\udd5a \uad00\uacc4 \ubb34\uacb0\uc131",id:"-\uad00\uacc4-\ubb34\uacb0\uc131",children:[]}]},{value:"\ud83d\udc23 \ub370\uc774\ud130 \ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74\uc758 \uc7a5\ub2e8\uc810",id:"-\ub370\uc774\ud130-\ubb34\uacb0\uc131-\uc81c\uc57d\uc870\uac74\uc758-\uc7a5\ub2e8\uc810",children:[{value:"\ud83e\udd5a \uc7a5\uc810",id:"-\uc7a5\uc810",children:[]},{value:"\ud83e\udd5a \ub2e8\uc810",id:"-\ub2e8\uc810",children:[]}]}],d={toc:c},s="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ubb34\uacb0\uc131"},"\ubb34\uacb0\uc131"),(0,r.kt)("h2",{id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131"},"\ud83d\udc23\xa0\ub370\uc774\ud130 \ubb34\uacb0\uc131?"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\ub370\uc774\ud130\uc758 \uc815\ud655\uc131, \uc77c\uad00\uc131\uc774 \uc720\uc9c0\ub418\ub294 \uac83")))),(0,r.kt)("h3",{id:"-\uc77c\uad00\uc131-vs-\uc815\ud655\uc131"},"\ud83e\udd5a \uc77c\uad00\uc131 vs \uc815\ud655\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77c\uad00\uc131 : \uc6d0\uc778\uacfc \uacb0\uacfc\uc758 \uc758\ubbf8\uac00 \uc5f0\uc18d\uc801\uc73c\ub85c \ubcf4\uc7a5\ub418\uc5b4 \ubcc0\ud558\uc9c0 \uc54a\ub294 \uc0c1\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"\uc815\ud655\uc131 : \uc911\ubcf5\uc774\ub098 \ub204\ub77d \uc5c6\ub294 \uc0c1\ud0dc")),(0,r.kt)("h3",{id:"-\ubb34\uacb0\uc131-vs-\uc815\ud569\uc131"},"\ud83e\udd5a \ubb34\uacb0\uc131 vs \uc815\ud569\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubb34\uacb0\uc131 : \ub370\uc774\ud130\uc758 \uc815\ud655\uc131, \uc77c\uad00\uc131\uc774 \uc720\uc9c0\ub418\ub294 \uac83",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubb34\uacb0\uc131\ud6fc\uc190 : \uace0\uac1d\ud14c\uc774\ube14\uacfc \uc8fc\ubb38\ud14c\uc774\ube14 \ubaa8\ub450 \uace0\uac1d\ubc88\ud638 -1\ub85c \uac00\uc84c\uc73c\ub098 \uace0\uac1d\ubc88\ud638 \ub3c4\uba54\uc778\uc740 1\uc774\uc0c1\uc758 \uac12\uc744 \uac00\uc838\uc57c\ud55c\ub2e4"))),(0,r.kt)("li",{parentName:"ul"},"\uc815\ud569\uc131 : \ub370\uc774\ud130\uc758 \uc62c\ubc14\ub978 \uc720\ubb34\uc640 \ubb34\uad00\ud558\uac8c \uc5b4\ub5a4 \ub370\uc774\ud130\ub4e4\uc758 \uac12\uc774 \uc11c\ub85c \uc77c\uce58\ud558\ub294 \uc0c1\ud0dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ube44\uc815\uaddc\ud654\ub97c \ud1b5\ud574 ",(0,r.kt)("a",{parentName:"li",href:"/docs/cs/database/normalization/DeNormalization"},"Anomaly(\uc774\uc0c1\ud604\uc0c1)")," \uc774 \ubc1c\uc0dd\ud558\uba74 \uc815\ud569\uc131\uc774 \uc9c0\ucf1c\uc9c0\uc9c0 \uc54a\ub294"),(0,r.kt)("li",{parentName:"ul"},"\uc815\ud569\uc131\ud6fc\uc190 : \uace0\uac1d\ud14c\uc774\ube14\uc740 -1\uc5d0\uc11c 2\ub85c \ubcc0\uacbd\ud588\uc73c\ub098, \uc8fc\ubb38\ud14c\uc774\ube14\uc740 \uace0\uac1d\ubc88\ud638\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc558\ub2e4")))),(0,r.kt)("h5",{id:"\ub370\uc774\ud130-\ubb34\uacb0\uc131\uc774-\uae68\uc9c4\ub2e4\uba74"},"\ub370\uc774\ud130 \ubb34\uacb0\uc131\uc774 \uae68\uc9c4\ub2e4\uba74?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc5d0 \uc911\ubcf5\ub41c \ub370\uc774\ud130 \uc874\uc7ac"),(0,r.kt)("li",{parentName:"ul"},"\ubd80\ubaa8-\uc790\uc2dd \ud14c\uc774\ube14 \uac04\uc758 \ub17c\ub9ac\uc801 \uad00\uacc4 \uae68\uc9d0"),(0,r.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ad\uc158\ubcc4 \ub370\uc774\ud130\uc758 \uc77c\uad00\uc131 \uae68\uc9d0"),(0,r.kt)("li",{parentName:"ul"},"\ub4f1\ub4f1 \uc7a6\uc740 \uc5d0\ub7ec\uc640 \uc7ac\uac1c\ubc1c\ube44\uc6a9")),(0,r.kt)("p",null,"."),(0,r.kt)("h2",{id:"-\ub370\uc774\ud130-\ubb34\uacb0\uc131-\uc81c\uc57d\uc870\uac74"},"\ud83d\udc23 \ub370\uc774\ud130 \ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ub370\uc774\ud130 \ubb34\uacb0\uc131\uc744 \ubcf4\uc7a5\ud558\uae30 \uc704\ud574 \uc800\uc7a5, \uc0ad\uc81c, \uc218\uc815 \ub4f1\uc744 \uc81c\uc57d\ud558\ub294 \uc870\uac74"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\uac1c\uccb4 \ubb34\uacb0\uc131"),(0,r.kt)("li",{parentName:"ol"},"\ucc38\uc870 \ubb34\uacb0\uc131"),(0,r.kt)("li",{parentName:"ol"},"\ub4f1\ub4f1")))),(0,r.kt)("h3",{id:"-\uac1c\uccb4-\ubb34\uacb0\uc131"},"\ud83e\udd5a \uac1c\uccb4 \ubb34\uacb0\uc131"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/cs/database/rdbms/Key"},"\uae30\ubcf8\ud0a4"),"(Primary key) \ud544\ub4dc\ub294 Null\uac12 \ud639\uc740 \uc911\ubcf5\uac12\uc744 \uac00\uc9c8 \uc218 \uc5c6\ub2e4 (aka ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\uae30\ubcf8\ud0a4 \uc81c\uc57d")),")"),(0,r.kt)("h3",{id:"-\ucc38\uc870-\ubb34\uacb0\uc131"},"\ud83e\udd5a \ucc38\uc870 \ubb34\uacb0\uc131"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/cs/database/rdbms/Key"},"\uc678\ub798\ud0a4"),"(Foreign Key)\uc740 Null\uc774\uac70\ub098 \ucc38\uc870\ud558\ub294 \ub9b4\ub808\uc774\uc158\uc758 \uae30\ubcf8\ud0a4\uac12\uacfc \ub3d9\uc77c\ud574\uc57c\ud55c\ub2e4. (aka ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\uc678\ub798\ud0a4 \uc81c\uc57d")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac01 \ub9b4\ub808\uc774\uc158\uc740 \ucc38\uc870\ud560 \uc218 \uc5c6\ub294 \uc678\ub798\ud0a4 \uac12\uc744 \uac00\uc9c8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub450 \ub9b4\ub808\uc774\uc158\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\ub294\ub370 \uc0ac\uc6a9")),(0,r.kt)("h5",{id:"\ucc38\uc870-\ubb34\uacb0\uc131\uc774-\uae68\uc9c0\ub294-\uc608\uc2dc"},"\ucc38\uc870 \ubb34\uacb0\uc131\uc774 \uae68\uc9c0\ub294 \uc608\uc2dc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dept 310\uc744 \uc0ad\uc81c\ud55c\ub2e4\uba74- \u2192 \ub354\uc774\uc0c1 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud14c\uc774\ube14\uc744 \ucc38\uc870 \u2192 \ucc38\uc870\ubb34\uacb0\uc131 \uae68\uc9d0")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"integrity.png",src:a(3102).Z})),(0,r.kt)("h3",{id:"-\ub3c4\uba54\uc778-\ubb34\uacb0\uc131"},"\ud83e\udd5a \ub3c4\uba54\uc778 \ubb34\uacb0\uc131"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud544\ub4dc\uc5d0 \ub300\ud55c \ud2b9\uc815 \ub3c4\uba54\uc778\uc744 \uc815\uc758\ud558\uace0 \uc774\uc5d0 \ub9de\ub294 \ub370\uc774\ud130\uac00 \uc785\ub825\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uc870\uac74")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ex. \uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638 \ud544\ub4dc\uc5d0 \ubb38\uc790\uac00 \uc785\ub825\ub418\ub294 \uacbd\uc6b0\uc5d4 \ub3c4\uba54\uc778\uc758 \ubb34\uacb0\uc131\uc774 \uae68\uc84c\ub2e4\uace0 \ubcfc \uc218 \uc788\uc74c"),(0,r.kt)("li",{parentName:"ul"},"ex. Null\uac12 \ud5c8\uc6a9\uc548\ud568")),(0,r.kt)("h3",{id:"-null-\ubb34\uacb0\uc131"},"\ud83e\udd5a Null \ubb34\uacb0\uc131"),(0,r.kt)("p",null,"\ud14c\uc774\ube14\uc758 \ud2b9\uc815 \uc18d\uc131 \uac12\uc774 Null\uc774 \ub420 \uc218 \uc5c6\uac8c \ud558\ub294 \uc870\uac74"),(0,r.kt)("h3",{id:"-\uace0\uc720unique-\ubb34\uacb0\uc131"},"\ud83e\udd5a \uace0\uc720(Unique) \ubb34\uacb0\uc131"),(0,r.kt)("p",null,"\ud14c\uc774\ube14\uc758 \ud2b9\uc815 \uc18d\uc131\uc5d0 \ub300\ud574 \ub808\ucf54\ub4dc \uac12\ub4e4\uc774 \uc720\uc77c\ud574\uc57c\ud558\ub294 \uc870\uac74"),(0,r.kt)("h3",{id:"-\ud0a4-\ubb34\uacb0\uc131"},"\ud83e\udd5a \ud0a4 \ubb34\uacb0\uc131"),(0,r.kt)("p",null,"\ud558\ub098\uc758 \ud14c\uc774\ube14\uc5d0\ub294 \uc801\uc5b4\ub3c4 \ud558\ub098\uc758 \ud0a4\uac00 \uc874\uc7ac\ud574\uc57c \ud558\ub294 \uc870\uac74"),(0,r.kt)("h3",{id:"-\uad00\uacc4-\ubb34\uacb0\uc131"},"\ud83e\udd5a \uad00\uacc4 \ubb34\uacb0\uc131"),(0,r.kt)("p",null,"\ud14c\uc774\ube14\uc758 \uc5b4\ub290 \ud55c \ub808\ucf54\ub4dc\uc5d0 \uc0bd\uc785 \uac00\ub2a5 \uc5ec\ubd80 \ub610\ub294 \ud55c \ud14c\uc774\ube14\uacfc \ub2e4\ub978 \ud14c\uc774\ube14\uc758 \ub808\ucf54\ub4dc\ub4e4 \uc0ac\uc774\uc758 \uad00\uacc4\uc5d0 \ub300\ud55c \uc801\uc808\uc131 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud55c \uc870\uac74"),(0,r.kt)("p",null,"."),(0,r.kt)("h2",{id:"-\ub370\uc774\ud130-\ubb34\uacb0\uc131-\uc81c\uc57d\uc870\uac74\uc758-\uc7a5\ub2e8\uc810"},"\ud83d\udc23 \ub370\uc774\ud130 \ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74\uc758 \uc7a5\ub2e8\uc810"),(0,r.kt)("h3",{id:"-\uc7a5\uc810"},"\ud83e\udd5a \uc7a5\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud0a4\ub9c8\ub97c \uc815\uc758\ud560 \ub54c \ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"\ud55c \ubc88"),"\ub9cc \uba85\uc2dc\ud558\uba74, \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uac31\uc2e0\ub420 \ub54c\ub9c8\ub2e4 DBMS\uac00 \uc790\ub3d9\uc73c\ub85c \uc81c\uc57d\uc870\uac74\uc744 \uac80\uc0ac\ud558\ubbc0\ub85c, \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\ub4e4\uc740 \uc81c\uc57d\uc870\uac74\uc744 \uc77c\uc77c\uc774 \uac80\uc0ac\ud560 \ud544\uc694\uac00 \uc5c6\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc9c1\uc811 \uc870\uac74\uc744 \uc720\uc9c0\ud558\ub294 \uacbd\uc6b0\ubcf4\ub2e4 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \ub354 \ub0ae\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74 \ub355\ubd84\uc5d0 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uc2e0\ub8b0\ub3c4\uac00 \uc62c\ub77c\uac10")),(0,r.kt)("h3",{id:"-\ub2e8\uc810"},"\ud83e\udd5a \ub2e8\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub798\ubc0d \uc791\uc5c5\uc774 \ud6e8\uc52c \ubcf5\uc7a1\ud574\uc9d0"),(0,r.kt)("li",{parentName:"ul"},"\ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74\uc744 \ubc18\ubcf5\ud574\uc11c \uad6c\ud604\ud574\uc57c \ud568"),(0,r.kt)("li",{parentName:"ul"},"\ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74\ub4e4 \uac04\uc5d0 \uc11c\ub85c \ucda9\ub3cc\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc74c")))}p.isMDXComponent=!0},3102:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/integrity-b71fc734fdcf1cf20b775061786f64ca.png"}}]);