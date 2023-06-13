"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[1052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7974:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},l="Key",o={unversionedId:"cs/database/rdbms/Key",id:"cs/database/rdbms/Key",isDocsHomePage:!1,title:"Key",description:"\ud83d\udc23 \ud0a4??",source:"@site/docs/cs/database/rdbms/Key.md",sourceDirName:"cs/database/rdbms",slug:"/cs/database/rdbms/Key",permalink:"/tech/docs/cs/database/rdbms/Key",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cs/database/rdbms/Key.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"\uad00\uacc4\ub300\uc218 vs SQL",permalink:"/tech/docs/cs/database/sql/relational-algebra/SQLvsRA"},next:{title:"\ubb34\uacb0\uc131",permalink:"/tech/docs/cs/database/rdbms/Integrity"}},s=[{value:"\ud83d\udc23 <strong>\ud0a4??</strong>",id:"-\ud0a4",children:[]},{value:"\ud83d\udc23 <strong>\ud0a4 \uc885\ub958\ub294?</strong>",id:"-\ud0a4-\uc885\ub958\ub294",children:[{value:"\ud83e\udd5a <strong>\uc288\ud37c \ud0a4(Super Key)</strong>",id:"-\uc288\ud37c-\ud0a4super-key",children:[]},{value:"\ud83e\udd5a <strong>\ubcf5\ud569 \ud0a4(Composite Key)</strong>",id:"-\ubcf5\ud569-\ud0a4composite-key",children:[]},{value:"\ud83e\udd5a <strong>\ud6c4\ubcf4 \ud0a4(Candidate key)</strong>",id:"-\ud6c4\ubcf4-\ud0a4candidate-key",children:[]},{value:"\ud83e\udd5a <strong>\uae30\ubcf8 \ud0a4(Primary key)</strong>",id:"-\uae30\ubcf8-\ud0a4primary-key",children:[]},{value:"\ud83e\udd5a <strong>\ub300\uccb4 \ud0a4(Surrogate key)</strong>",id:"-\ub300\uccb4-\ud0a4surrogate-key",children:[]},{value:"\ud83e\udd5a <strong>\uc678\ub798 \ud0a4(Foreign Key)</strong>",id:"-\uc678\ub798-\ud0a4foreign-key",children:[]}]}],p={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key"},"Key"),(0,a.kt)("h2",{id:"-\ud0a4"},"\ud83d\udc23 ",(0,a.kt)("strong",{parentName:"h2"},"\ud0a4??")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\uc2dd\ubcc4\uc790"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RDBMS\uc5d0\uc11c \uc870\uac74\uc5d0 \ub9cc\uc871\ud558\ub294 \ud29c\ud50c\uc744 \ucc3e\uac70\ub098 \uc21c\uc11c\ub300\ub85c \uc815\ub82c\ud560 \ub54c \ub2e4\ub978 \ud29c\ud50c\ub4e4\uacfc \uad6c\ubcc4\ud560 \uc218 \uc788\ub294 \uae30\uc900\uc774 \ub418\ub294 Attribute(\uc18d\uc131)")),(0,a.kt)("blockquote",null,(0,a.kt)("h6",{parentName:"blockquote",id:"\ud29c\ud50c--\ub9b4\ub808\uc774\uc158\uc744-\uad6c\uc131\ud558\ub294-\uac01\uac01\uc758-\ud589-\uc18d\uc131\uc758-\ubaa8\uc784\uc73c\ub85c-\uad6c\uc131"},"*\ud29c\ud50c : \ub9b4\ub808\uc774\uc158\uc744 \uad6c\uc131\ud558\ub294 \uac01\uac01\uc758 \ud589, \uc18d\uc131\uc758 \ubaa8\uc784\uc73c\ub85c \uad6c\uc131"),(0,a.kt)("h6",{parentName:"blockquote",id:"\ud29c\ud50c\uc758-\uc218--\uce74\ub514\ub110\ub9ac\ud2f0cardinality--\uae30\uc218--\ub300\uc751\uc218"},"*\ud29c\ud50c\uc758 \uc218 = \uce74\ub514\ub110\ub9ac\ud2f0(Cardinality) = \uae30\uc218 = \ub300\uc751\uc218")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-\ud0a4-\uc885\ub958\ub294"},"\ud83d\udc23 ",(0,a.kt)("strong",{parentName:"h2"},"\ud0a4 \uc885\ub958\ub294?")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"key1.png",src:r(6264).Z})),(0,a.kt)("h3",{id:"-\uc288\ud37c-\ud0a4super-key"},"\ud83e\udd5a ",(0,a.kt)("strong",{parentName:"h3"},"\uc288\ud37c \ud0a4(Super Key)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc720\uc77c\uc131"),"\uc744 \ub9cc\uc871\ud558\ub294 \ud0a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc720\uc77c\uc131: \uc5b4\ub5a4 \uc18d\uc131\ub07c\ub9ac \ubb36\ub358 \uc911\ubcf5\uac12\uc774 \uc548\ub098\uc624\uace0 \uc11c\ub85c \uad6c\ubcc4"),"\ub9cc \ud560 \uc218 \uc788\uc73c\uba74 \ub41c\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"ex. {\ud559\ubc88 + \uc774\ub984}, {\uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638 + \ud559\ubc88}")),(0,a.kt)("h3",{id:"-\ubcf5\ud569-\ud0a4composite-key"},"\ud83e\udd5a ",(0,a.kt)("strong",{parentName:"h3"},"\ubcf5\ud569 \ud0a4(Composite Key)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\uac1c \uc774\uc0c1"),"\uc758 \uc18d\uc131(attribute)\uc744 \uc0ac\uc6a9\ud55c \ud0a4."),(0,a.kt)("h3",{id:"-\ud6c4\ubcf4-\ud0a4candidate-key"},"\ud83e\udd5a ",(0,a.kt)("strong",{parentName:"h3"},"\ud6c4\ubcf4 \ud0a4(Candidate key)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc720\uc77c\uc131"),"\uacfc\xa0",(0,a.kt)("strong",{parentName:"p"},"\ucd5c\uc18c\uc131"),"\uc744 \ub9cc\uc871\ud558\ub294 \ud0a4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc288\ud37c\ud0a4\ub4e4 \uc911\uc5d0\uc11c \uc18d\uc131\uc744 \ucd5c\uc18c\ud55c\uc758 \uac2f\uc218")),(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8\ud0a4\uac00 \ub420 \uc218 \uc788\ub294 \ud6c4\ubcf4\uc774\uae30 \ub54c\ubb38\uc5d0 \ud6c4\ubcf4\ud0a4\ub77c\uace0 \ubd88\ub9b0\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"ex. \uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638, \ud559\ubc88 \ub4f1")),(0,a.kt)("h3",{id:"-\uae30\ubcf8-\ud0a4primary-key"},"\ud83e\udd5a ",(0,a.kt)("strong",{parentName:"h3"},"\uae30\ubcf8 \ud0a4(Primary key)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud6c4\ubcf4 \ud0a4\uc5d0\uc11c \uc120\ud0dd\ub41c \ud0a4")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NULL \uc548\ub428!"),(0,a.kt)("li",{parentName:"ul"},"\uc720\uc77c\uc131!"),(0,a.kt)("li",{parentName:"ul"},"\ucd5c\uc18c\uc131!"),(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc5d0\uc11c \uae30\ubcf8\ud0a4\ub294\xa0",(0,a.kt)("strong",{parentName:"li"},"\uc624\uc9c1 1\uac1c"),"\ub9cc \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4    ")),(0,a.kt)("h3",{id:"-\ub300\uccb4-\ud0a4surrogate-key"},"\ud83e\udd5a ",(0,a.kt)("strong",{parentName:"h3"},"\ub300\uccb4 \ud0a4(Surrogate key)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud6c4\ubcf4 \ud0a4 \uc911\uc5d0 \uae30\ubcf8 \ud0a4\ub85c \uc120\ud0dd\ub418\uc9c0 \uc54a\uc740 \ud0a4")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud6c4\ubcf4\ud0a4\uac00 \ub450\uac1c \uc774\uc0c1\uc77c \uacbd\uc6b0 \uadf8 \uc911\uc5d0\uc11c \uc5b4\ub290 \ud558\ub098\ub97c\xa0",(0,a.kt)("strong",{parentName:"li"},"\uae30\ubcf8\ud0a4\ub85c \uc9c0\uc815\ud558\uace0 \ub0a8\uc740 \ud6c4\ubcf4\ud0a4"),"\ub4e4\uc744 \ub300\uccb4\ud0a4\ub77c\ud55c\ub2e4    ")),(0,a.kt)("h3",{id:"-\uc678\ub798-\ud0a4foreign-key"},"\ud83e\udd5a ",(0,a.kt)("strong",{parentName:"h3"},"\uc678\ub798 \ud0a4(Foreign Key)")),(0,a.kt)("p",null,"\ud14c\uc774\ube14(Relation) \uac04\uc758 \uae30\ubcf8 \ud0a4(Primary key)\ub97c \ucc38\uc870\ud558\ub294 \uc18d\uc131"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ucc38\uc870\ud560(A)\uc5f4\uc758 \uac12\uc740 \ucc38\uc870\ud560(A) \ud14c\uc774\ube14\uc5d0\uc11c \uae30\ubcf8\ud0a4(Primary Key)\ub85c \uc124\uc815")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\ucc38\uc870 \ubb34\uacb0\uc131 \uc81c\uc57d\uc870\uac74"),": NULL\uac12\uc774\uac70\ub098 \ubd80\ubaa8\ud14c\uc774\ube14\uc758 \uae30\ubcf8\ud0a4 \uac12\uacfc \ub3d9\uc77c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc678\ub798 \ud0a4 \uc18d\uc131\uc740 \ucc38\uc870\ud560 \uc218 \uc5c6\ub294 \uac12\uc744 \uc9c0\ub2d0 \uc218 \uc5c6\uc74c"))),(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14(Relation)\ub4e4 \uac04\uc758 \uad00\uacc4\ub97c \ub098\ud0c0\ub0b4\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"key2.png",src:r(3358).Z})))}u.isMDXComponent=!0},6264:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/key1-6e207cb87dd0f8ca2da2dbf7fe9ddf85.png"},3358:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/key2-a20d77ae3bd2538fb3ccbee00b2e7158.png"}}]);