"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[8459],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=m(a),N=l,d=c["".concat(o,".").concat(N)]||c[N]||u[N]||r;return a?n.createElement(d,i(i({ref:t},k),{},{components:a})):n.createElement(d,i({ref:t},k))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},9531:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={},i="\ub77d\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c",p={unversionedId:"cs/database/transaction/LockProblem",id:"cs/database/transaction/LockProblem",isDocsHomePage:!1,title:"\ub77d\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c",description:"\ud83d\udc23 \ub77d\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c",source:"@site/docs/cs/database/transaction/LockProblem.md",sourceDirName:"cs/database/transaction",slug:"/cs/database/transaction/LockProblem",permalink:"/tech/docs/cs/database/transaction/LockProblem",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cs/database/transaction/LockProblem.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"\ub77d",permalink:"/tech/docs/cs/database/transaction/Lock"},next:{title:"Lock Escalation",permalink:"/tech/docs/cs/database/transaction/LockEscalation"}},o=[{value:"\ud83d\udc23 \ub77d\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c",id:"-\ub77d\uc73c\ub85c-\ubc1c\uc0dd\ud558\ub294-\ubb38\uc81c",children:[]},{value:"\ud83d\udc23 \ube14\ub85c\ud0b9 (Blocking)??",id:"-\ube14\ub85c\ud0b9-blocking",children:[{value:"\ud83e\udd5a\xa0\ube14\ub85c\ud0b9 (Blocking)??",id:"\ube14\ub85c\ud0b9-blocking",children:[]},{value:"\ud83e\udd5a\xa0\ube14\ub85c\ud0b9 \ud574\uc18c\ubc29\uc548",id:"\ube14\ub85c\ud0b9-\ud574\uc18c\ubc29\uc548",children:[]},{value:"\ud83e\udd5a\xa0\ube14\ub85c\ud0b9 \uc608\ubc29\ubc29\uc548",id:"\ube14\ub85c\ud0b9-\uc608\ubc29\ubc29\uc548",children:[]}]},{value:"\ud83d\udc23\xa0\uad50\ucc29\uc0c1\ud0dc (DeadLock)??",id:"\uad50\ucc29\uc0c1\ud0dc-deadlock",children:[{value:"\ud83e\udd5a\xa0\ub370\ub4dc\ub77d \ubc1c\uc0dd\uc870\uac74",id:"\ub370\ub4dc\ub77d-\ubc1c\uc0dd\uc870\uac74",children:[]},{value:"\ud83e\udd5a\xa0\ub370\ub4dc\ub77d \ud574\uacb0\ubc29\ubc95",id:"\ub370\ub4dc\ub77d-\ud574\uacb0\ubc29\ubc95",children:[]}]}],m={toc:o},k="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(k,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\ub77d\uc73c\ub85c-\ubc1c\uc0dd\ud558\ub294-\ubb38\uc81c"},"\ub77d\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c"),(0,l.kt)("h2",{id:"-\ub77d\uc73c\ub85c-\ubc1c\uc0dd\ud558\ub294-\ubb38\uc81c"},"\ud83d\udc23 \ub77d\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\ube14\ub85c\ud0b9 (Blokcing)"),(0,l.kt)("li",{parentName:"ul"},"\uad50\ucc29\uc0c1\ud0dc (DeadLock)")))),(0,l.kt)("h2",{id:"-\ube14\ub85c\ud0b9-blocking"},"\ud83d\udc23 \ube14\ub85c\ud0b9 (Blocking)??"),(0,l.kt)("h3",{id:"\ube14\ub85c\ud0b9-blocking"},"\ud83e\udd5a\xa0\ube14\ub85c\ud0b9 (Blocking)??"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"\ubca0\ud0c0\ub77d-\ubca0\ud0c0\ub77d"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\ubca0\ud0c0\ub77d-\uacf5\uc720\ub77d")," (\ubca0\ud0c0\ub77d\uacfc \ub2e4\ub978\ub77d)\uac04\uc758 \uacbd\ud569\uc774 \ubc1c\uc0dd\ud558\uc5ec \ud2b9\uc815 Transaction\uc774 \uc791\uc5c5\uc744 \uc9c4\ud589\ud558\uc9c0 \ubabb\ud558\uace0 \uba48\ucdb0\uc120 \uc0c1\ud0dc"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\ubca0\ud0c0\ub77d\uc740 \ube14\ub85c\ud0b9\uc744 \ubc1c\uc0dd\uc2dc\ud0b4 (\uacf5\uc720\ub77d\uc740 \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uc74c)")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LP0",src:a(1416).Z})),(0,l.kt)("h3",{id:"\ube14\ub85c\ud0b9-\ud574\uc18c\ubc29\uc548"},"\ud83e\udd5a\xa0\ube14\ub85c\ud0b9 \ud574\uc18c\ubc29\uc548"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\uc804\uc758 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc644\ub8cc(\ucee4\ubc0b OR \ub864\ubc31)\ud558\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc0c8 \ud2b8\ub79c\uc7ad\uc158\uc740 \uc774\uc804 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub9c8\ubb34\ub9ac\ub418\uc5b4\uc57c \uc9c4\ud589 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\ube14\ub85c\ud0b9\uc744 \ucd5c\uc18c\ud654\ud574\uc57c \uc131\ub2a5\uc774 \uc88b\uc544\uc9d0")))),(0,l.kt)("h3",{id:"\ube14\ub85c\ud0b9-\uc608\ubc29\ubc29\uc548"},"\ud83e\udd5a\xa0\ube14\ub85c\ud0b9 \uc608\ubc29\ubc29\uc548"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud55c \ud2b8\ub79c\uc7ad\uc158\uc758 \uae38\uc774\ub97c \ub108\ubb34 \uae38\uac8c\ud558\uc9c0 \uc54a\uae30"),(0,l.kt)("li",{parentName:"ol"},"\ucc98\uc74c\ubd80\ud130 \uc124\uacc4\ud560 \ub54c \uac19\uc740 \ub370\uc774\ud130\ub97c \uac31\uc2e0\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub3d9\uc2dc\uc5d0 \uc218\ud589\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud558\uae30"),(0,l.kt)("li",{parentName:"ol"},"\ud2b8\ub79c\uc7ad\uc158 \uaca9\ub9ac\uc131 \uc218\uc900\uc744 \ubd88\ud544\uc694\ud558\uac8c \uc0c1\ud5a5 \uc870\uc815\ud558\uc9c0 \uc54a\uae30"),(0,l.kt)("li",{parentName:"ol"},"\ucffc\ub9ac\ub97c \uc624\ub79c\uc2dc\uac04 \uc7a1\uc544\ub450\uc9c0 \uc54a\ub3c4\ub85d \uc801\uc808\ud55c \ud29c\ub2dd"),(0,l.kt)("li",{parentName:"ol"},"DBMS\uc5d0 \ub530\ub77c\uc11c lock \ub300\uae30 \uc2dc\uac04 \ub4f1\uc744 \uc124\uc815")),(0,l.kt)("p",null,"."),(0,l.kt)("h2",{id:"\uad50\ucc29\uc0c1\ud0dc-deadlock"},"\ud83d\udc23\xa0\uad50\ucc29\uc0c1\ud0dc (DeadLock)??"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"\uc2dd\uc0ac\ud558\ub294 \ucca0\ud559\uc790")),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\uac01 \ud504\ub85c\uc138\uc2a4\uac00 \ud560\ub2f9\ub41c \uc790\uc6d0\uc5d0 Lock\uc744 \uac78\uace0 \uc11c\ub85c\uc758 Lock\uc774 \uac78\ub9b0 \uc790\uc6d0\uc5d0 \uc811\uadfc\ud558\uc5ec, \ubaa8\ub4e0 \ud504\ub85c\uc138\uc2a4\uac00 Request \uc0c1\ud0dc\uac00 \ub418\uc5b4 \uc601\uc6d0\ud788 \ucc98\ub9ac\uac00 \ub418\uc9c0 \uc54a\ub294 \uc0c1\ud0dc")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LP1",src:a(8576).Z})),(0,l.kt)("h5",{id:"\ud504\ub85c\uc138\uc2a4\uac00-\uc790\uc6d0\uc744-\uc0ac\uc6a9\ud558\ub294-\uc808\ucc28"},"\ud504\ub85c\uc138\uc2a4\uac00 \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\ub294 \uc808\ucc28"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Request"),"\xa0:\xa0 \uc790\uc6d0\uc744 \uc694\uccad\ud558\uace0, \ub9cc\uc57d \ub2e4\ub978 \ud504\ub85c\uc138\uc2a4\uac00 \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5b4 \ubc1b\uc744 \uc218 \uc5c6\ub2e4\uba74 \ub300\uae30\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Allocate"),"\xa0: \uc790\uc6d0\uc744 \ubc1b\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Use"),"\xa0: \ud504\ub85c\uc138\uc2a4\uac00 \ubc1b\uc740 \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Release"),"\xa0: \ud504\ub85c\uc138\uc2a4\uac00 \uc790\uc6d0\uc744 \ub193\uc544\uc900\ub2e4.")),(0,l.kt)("h5",{id:"\uc790\uc6d0\ud560\ub2f9-\uadf8\ub798\ud504"},"\uc790\uc6d0\ud560\ub2f9 \uadf8\ub798\ud504"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LP2",src:a(2893).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"R\uc740 \uc790\uc6d0\uc774\uace0 P\ub294 \ud504\ub85c\uc138\uc2a4, \uc790\uc6d0 \ub0b4\uc758 \ub3d9\uadf8\ub77c\ubbf8\ub294 \uc790\uc6d0(\uc778\uc2a4\ud134\uc2a4)\uc758 \uac1c\uc218"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc790\uc6d0 \u2192 \ud504\ub85c\uc138\uc2a4"),"\ub85c \ud5a5\ud558\ub294 \uac04\uc120\uc740\xa0\ud574\ub2f9 \uc790\uc6d0\uc744 \ud504\ub85c\uc138\uc2a4\uac00 \ubcf4\uc720 \uc911(Allocate)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud504\ub85c\uc138\uc2a4 \u2192 \uc790\uc6d0"),"\uc73c\ub85c \ud5a5\ud558\ub294 \uac04\uc120\uc740\xa0\ud504\ub85c\uc138\uc2a4\uac00 \ud574\ub2f9 \uc790\uc6d0\uc744 \uc694\uccad(Request)"),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub798\ud504\uc5d0 \uc0ac\uc774\ud074(Cycle)\uc774 \uc5c6\ub2e4\uba74 Deadlock\uc774 \uc544\ub2c8\ub2e4.\xa0\ubc18\uba74,\xa0\uc0ac\uc774\ud074\uc774 \uc788\ub2e4\uba74 Deadlock\uc774 \ubc1c\uc0dd\ud560 '\uc218' \uc788\uc74c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc815\ud655\ud788 \ub9d0\ud558\uba74,\xa0\uc790\uc6d0\ub2f9 \ud558\ub098\uc758 \uc778\uc2a4\ud134\uc2a4\ub9cc \uc788\ub294 \uacbd\uc6b0\uc5d4 Deadlock / \uc5ec\ub7ec \uc778\uc2a4\ud134\uc2a4\uac00 \uc874\uc7ac\ud558\ub294 \uacbd\uc6b0\uc5d4 Deadlock\uc77c \uc218\ub3c4 \uc788\uace0 \uc544\ub2d0 \uc218\ub3c4 \uc788\uc74c.")))),(0,l.kt)("h3",{id:"\ub370\ub4dc\ub77d-\ubc1c\uc0dd\uc870\uac74"},"\ud83e\udd5a\xa0\ub370\ub4dc\ub77d \ubc1c\uc0dd\uc870\uac74"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0c1\ud638\ubc30\uc81c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc790\uc6d0\uc740 \ud55c \uc2dc\uc810\uc5d0 \ud504\ub85c\uc138\uc2a4 \ud558\ub098\ub9cc \uc0ac\uc6a9\uac00\ub2a5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc911\uc778 \uc790\uc6d0\uc744 \ub2e4\ub978 \ud504\ub85c\uc138\uc2a4\uac00 \uc0ac\uc6a9\ud558\ub824\uba74 \uc790\uc6d0\uc774 \ud574\uc81c\ub420 \ub54c\uae4c\uc9c0 \ub300\uae30"))))),(0,l.kt)("li",{parentName:"ul"},"\uc810\uc720\ub300\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc790\uc6d0\uc744 \ubcf4\uc720\ud55c \uc0c1\ud0dc\ub85c, \ub2e4\ub978 \ud504\ub85c\uc138\uc2a4\uc5d0 \ud560\ub2f9\ub41c \uc790\uc6d0\uc744 \uc810\uc720\ud558\uae30 \uc704\ud574 \ub300\uae30\ud558\ub294 \ud504\ub85c\uc138\uc2a4 \uc874\uc7ac"))),(0,l.kt)("li",{parentName:"ul"},"\ube44\uc120\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \ud560\ub2f9\ub41c \uc790\uc6d0\uc744 \uac15\uc81c\ub85c \ube90\uc744 \uc218 \uc5c6\uc74c"))),(0,l.kt)("li",{parentName:"ul"},"\uc21c\ud658\ub300\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub300\uae30 \ud504\ub85c\uc138\uc2a4\uc758 \uc9d1\ud569\uc774 \uc21c\ud658\ud615\ud0dc\ub85c \uc790\uc6d0\uc744 \ub300\uae30")))),(0,l.kt)("h3",{id:"\ub370\ub4dc\ub77d-\ud574\uacb0\ubc29\ubc95"},"\ud83e\udd5a\xa0\ub370\ub4dc\ub77d \ud574\uacb0\ubc29\ubc95"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\uc608\ubc29")," \ub370\ub4dc\ub77d\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d\xa0",(0,l.kt)("strong",{parentName:"li"},"\uc608\ubc29"),"(prevention) \ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\ud68c\ud53c")," \ub370\ub4dc\ub77d \ubc1c\uc0dd \uac00\ub2a5\uc131\uc744 \uc778\uc815\ud558\uba74\uc11c\ub3c4 \uc801\uc808\ud558\uac8c\xa0",(0,l.kt)("strong",{parentName:"li"},"\ud68c\ud53c"),"(avoidance) \ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\ud0d0\uc9c0\ud558\uc5ec \ud68c\ubcf5")," \ub370\ub4dc\ub77d \ubc1c\uc0dd\uc744 \ud5c8\uc6a9\ud558\uc9c0\ub9cc \ub370\ub4dc\ub77d\uc744\xa0",(0,l.kt)("strong",{parentName:"li"},"\ud0d0\uc9c0"),"(detection)\ud558\uc5ec,\xa0",(0,l.kt)("strong",{parentName:"li"},"\ub370\ub4dc\ub77d\uc5d0\uc11c \ud68c\ubcf5"),"\ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\ub370\ub4dc\ub77d \ud574\uacb0\ud558\uc9c0 \uc54a\uae30")," (Deadlock Ignorance) Deadlock\uc774 \uc77c\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4\uace0 \uac00\uc815\ud574 \uc544\ubb34\ub7f0 \uc870\uce58\ub3c4 \ucde8\ud558\uc9c0 \uc54a\uc74c")),(0,l.kt)("h5",{id:"\ub370\ub4dc\ub77d-\uc608\ubc29-prevention"},"\ud83d\udc7e\xa0\ub370\ub4dc\ub77d \uc608\ubc29 (prevention)"),(0,l.kt)("p",null,"\ub370\ub4dc\ub77d\uc758 \ubc1c\uc0dd\uc870\uac74 4\uac00\uc9c0 \uc911 \ud558\ub098\ub77c\ub3c4 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uac8c \ud558\ub294 \uac83"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc790\uc6d0\uc758 \uc0c1\ud638 \ubc30\uc81c \uc870\uac74\xa0\ubc29\uc9c0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud55c \ubc88\uc5d0 \uc5ec\ub7ec \ud504\ub85c\uc138\uc2a4\uac00 \uacf5\uc720 \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \ucd94\ud6c4 ",(0,l.kt)("inlineCode",{parentName:"li"},"\ub3d9\uae30\ud654")," \uad00\ub828 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc810\uc720 \ub300\uae30 \uc870\uac74 \ubc29\uc9c0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4 \uc2e4\ud589\uc5d0 \ud544\uc694\ud55c \ubaa8\ub4e0 \uc790\uc6d0\uc744 \ud55c\uaebc\ubc88\uc5d0 \uc694\uad6c\ud558\uace0 \ud5c8\uc6a9\ud560 \ub54c\uae4c\uc9c0 ",(0,l.kt)("inlineCode",{parentName:"li"},"\uc791\uc5c5\uc744 \ubcf4\ub958"),"\ud574\uc11c, \ub098\uc911\uc5d0 \ub610\ub2e4\ub978 \uc790\uc6d0\uc744 \uc810\uc720\ud558\uae30 \uc704\ud55c \ub300\uae30 \uc870\uac74\uc744 \uc131\ub9bd\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ube44\uc120\uc810 \uc870\uac74 \ubc29\uc9c0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \ub2e4\ub978 \ud504\ub85c\uc138\uc2a4\uc5d0\uac8c \ud560\ub2f9\ub41c \uc790\uc6d0\uc774 \uc120\uc810\uad8c\uc774 \uc5c6\ub2e4\uace0 \uac00\uc815\ud560 \ub54c, \ub192\uc740 \uc6b0\uc120\uc21c\uc704\uc758 \ud504\ub85c\uc138\uc2a4\uac00 \ud574\ub2f9 \uc790\uc6d0\uc744 \uc120\uc810\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc21c\ud658 \ub300\uae30 \uc870\uac74 \ubc29\uc9c0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc790\uc6d0\uc744 \uc21c\ud658 \ud615\ud0dc\ub85c \ub300\uae30\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc77c\uc815\ud55c ",(0,l.kt)("inlineCode",{parentName:"li"},"\ud55c \ucabd \ubc29\ud5a5\uc73c\ub85c\ub9cc \uc790\uc6d0\uc744 \uc694\uad6c"),"\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.")))),(0,l.kt)("h5",{id:"\ub370\ub4dc\ub77d-\ud68c\ud53c-avoidance"},"\ud83d\udc7e\xa0\ub370\ub4dc\ub77d \ud68c\ud53c (Avoidance)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Safe sequence"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\uace0 \uc774\ucc98\ub7fc \ud2b9\uc815\ud55c \uc21c\uc11c\ub85c \ud504\ub85c\uc138\uc2a4\ub4e4\uc5d0\uac8c \uc790\uc6d0\uc744 \ud560\ub2f9, \uc2e4\ud589 \ubc0f \uc885\ub8cc \ub4f1\uc758 \uc791\uc5c5\uc744 \ud560 \ub54c\xa0\ub370\ub4dc\ub77d\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uc21c\uc11c\ub97c \ucc3e\uc744 \uc218 \uc788\ub2e4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Safe state"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc758 \ud504\ub85c\uc138\uc2a4\ub4e4\uc774 \uc694\uccad\ud558\ub294 \ubaa8\ub4e0 \uc790\uc6d0\uc744, \ub370\ub4dc\ub77d\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uc73c\uba74\uc11c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"li"},"Safe Sequence"),"\ub85c \ubaa8\ub450\uc5d0\uac8c \ud560\ub2f9\ud574 \uc904 \uc218 \uc788\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"vs \ubd88\uc548\uc815\uc0c1\ud0dc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub370\ub4dc\ub77d \ubc1c\uc0dd\uac00\ub2a5\uc131\uc774 \uc788\ub294 \uc0c1\ud669 (\ub370\ub4dc\ub77d\uc774 \ubd88\uc548\uc815\uc0c1\ud130\uc758 \ubd80\ubd84\uc9d1\ud569)"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc740\ud589\uc6d0 \uc54c\uace0\ub9ac\uc998"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc790\uc6d0\ub4e4\uc758 \uac00\ub2a5\ud55c \ucd5c\ub300 \ud560\ub2f9\ub7c9\uc744 \uac00\uc9c0\uace0, ",(0,l.kt)("inlineCode",{parentName:"li"},"\uc2dc\ubbac\ub808\uc774\uc158")," \ud574\uc11c Safe state\uc5d0 \ub4e4 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud310\ub2e8\ud574 Safe sequence\ub97c \ucc3e\ub294 \uac83",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ucd1d N\uac1c\uc758 \uc790\uc6d0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Max"),"\ub294 \uac01 \ud504\ub85c\uc138\uc2a4\ub9c8\ub2e4 \ucd5c\ub300 \uc790\uc6d0 \uc694\uccad\ub7c9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Allocation"),"\uc740 \ud604\uc7ac \ud504\ub85c\uc138\uc2a4\uc5d0 \ud560\ub2f9 \uc911\uc778 \uc790\uc6d0\uc758 \uc591"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Need"),"\ub294 \ub354 \ud544\uc694\ud55c \uc790\uc6d0\uc758 \uc591(Max-Allocation)"))),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810: \uc81c\uc57d\uc774 \ud544\uc694\ud568",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4\uac00 \uc694\uad6c\ud558\ub294 \ucd5c\ub300 \uc790\uc6d0\uc758 \uc218\ub97c \uc54c\uc544\uc57c \ud568"),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4 \uc218\uac00 \uc77c\uc815\ud574\uc57c\ud568"),(0,l.kt)("li",{parentName:"ul"},"\ud560\ub2f9\ud560 \uc218 \uc788\ub294 \uc790\uc6d0 \uc218\uac00 \uc77c\uc815\ud574\uc57c\ud568"),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4\ub294 \uc790\uc6d0\uc0ac\uc6a9\ud6c4 \ubc18\ub4dc\uc2dc \ubc18\ub0a9\ud574\uc57c\ud568")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"(t=t0)"),(0,l.kt)("th",{parentName:"tr",align:null},"Max"),(0,l.kt)("th",{parentName:"tr",align:null},"Allocation"),(0,l.kt)("th",{parentName:"tr",align:null},"Need"),(0,l.kt)("th",{parentName:"tr",align:null},"Available"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P0"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P1"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P2"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- N=12, <P1, P0, P2>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc790\uc6d0 \ud560\ub2f9 \uadf8\ub798\ud504 \uc54c\uace0\ub9ac\uc998"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Request edge\uac00 Assignment edge\ub85c \ubcc0\uacbd\ub420 \ub54c \uc810\uc120\uc744 \ud3ec\ud568\ud558\uc5ec \uc0ac\uc774\ud074\uc774 \uc0dd\uae30\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc694\uccad\ub41c \uc790\uc6d0\uc744 \ud560\ub2f9")))),(0,l.kt)("h5",{id:"\ub370\ub4dc\ub77d-\ud0d0\uc9c0detection-\ubc0f-\ud68c\ubcf5recovery"},"\ud83d\udc7e\xa0\ub370\ub4dc\ub77d \ud0d0\uc9c0(Detection) \ubc0f \ud68c\ubcf5(Recovery)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\ud0d0\uc9c0 \uae30\ubc95")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Allocation, Request, Available \ub4f1\uc73c\ub85c \uc2dc\uc2a4\ud15c\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"\ub370\ub4dc\ub77d\uc774 \ubc1c\uc0dd\ud588\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud0d0\uc0c9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc989, \uc740\ud589\uc6d0 \uc54c\uace0\ub9ac\uc998\uc5d0\uc11c \ud588\ub358 \ubc29\uc2dd\uacfc \uc720\uc0ac\ud558\uac8c \ud604\uc7ac \uc2dc\uc2a4\ud15c\uc758 \uc790\uc6d0 \ud560\ub2f9 \uc0c1\ud0dc\ub97c \uac00\uc9c0\uace0 \ud30c\uc545\ud569\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc774 \uc678\uc5d0\ub3c4\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"\uc790\uc6d0 \ud560\ub2f9 \uadf8\ub798\ud504\ub97c \ud1b5\ud574 \ud0d0**\uc9c0**"),"\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\ud68c\ubcf5 \uae30\ubc95")),(0,l.kt)("p",{parentName:"li"},"\ub370\ub4dc\ub77d\uc744 \ud0d0\uc9c0 \uae30\ubc95\uc744 \ud1b5\ud574 \ubc1c\uacac\uc2dc, ",(0,l.kt)("inlineCode",{parentName:"p"},"\uc21c\ud658 \ub300\uae30"),"\uc5d0\uc11c \ubc97\uc5b4\ub098 \ub370\ub4dc\ub77d\uc73c\ub85c\ubd80\ud130 \ud68c\ubcf5\ud558\uae30 \uc704\ud55c \ubc29\ubc95"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ub2e8\uc21c\ud788 \ud504\ub85c\uc138\uc2a4\ub97c 1\uac1c \uc774\uc0c1 \uc911\ub2e8\uc2dc\ud0a4\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uad50\ucc29 \uc0c1\ud0dc\uc5d0 \ube60\uc9c4 \ubaa8\ub4e0 \ud504\ub85c\uc138\uc2a4\ub97c \uc911\ub2e8"),"\xa0: \uacc4\uc18d \uc5f0\uc0b0\uc911\uc774\ub358 \ud504\ub85c\uc138\uc2a4\ub4e4\ub3c4 \ubaa8\ub450 \uc77c\uc2dc\uc5d0 \uc911\ub2e8\ub418\uc5b4 \ubd80\ubd84 \uacb0\uacfc\uac00 \ud3d0\uae30\ub420 \uc218 \uc788\ub294 \ubd80\uc791\uc6a9\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud504\ub85c\uc138\uc2a4\ub97c \ud558\ub098\uc529 \uc911\ub2e8 \uc2dc\ud0ac \ub54c\ub9c8\ub2e4 \ud0d0\uc9c0 \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \ub370\ub4dc\ub77d\uc744 \ud0d0\uc9c0\ud558\uba74\uc11c \ud68c\ubcf5"),"\xa0: \ub9e4\ubc88 \ud0d0\uc9c0 \uc54c\uace0\ub9ac\uc998\uc744 \ud638\ucd9c \ubc0f \uc218\ud589\ud574\uc57c \ud558\ubbc0\ub85c \ubd80\ub2f4\uc774 \ub418\ub294 \uc791\uc5c5\uc77c \uc218 \uc788\uc74c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc790\uc6d0 \uc120\uc810\ud558\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4\uc5d0 \ud560\ub2f9\ub41c \uc790\uc6d0\uc744 \uc120\uc810\ud574\uc11c, \uad50\ucc29 \uc0c1\ud0dc\ub97c \ud574\uacb0\ud560 \ub54c\uae4c\uc9c0 \uadf8 \uc790\uc6d0\uc744 \ub2e4\ub978 \ud504\ub85c\uc138\uc2a4\uc5d0 \ud560\ub2f9")))))),(0,l.kt)("h5",{id:"\ub370\ub4dc\ub77d-\ud574\uacb0\ud558\uc9c0-\uc54a\uae30"},"\ud83d\udc7e\xa0\ub370\ub4dc\ub77d \ud574\uacb0\ud558\uc9c0 \uc54a\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deadlock\uc774 \ub9e4\uc6b0 \ub4dc\ubb3c\uac8c \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc5d0 Deadlock\uc5d0 \ub300\ud55c \uc870\uce58 \uc790\uccb4\uac00 \ub354 \ud070 \uc624\ubc84\ud5e4\ub4dc\uc77c \uc218 \uc788\ub2e4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc0ac\ub78c\uc774 \ub290\ub080 \ud6c4 \uc9c1\uc811 \ud504\ub85c\uc138\uc2a4\ub97c \uc8fd\uc774\ub294 \ub4f1\uc758 \ubc29\ubc95\uc73c\ub85c \ub300\ucc98"))),(0,l.kt)("li",{parentName:"ul"},"UNIX, Windows \ub4f1 \ub300\ubd80\ubd84\uc758 \ubc94\uc6a9 \uc6b4\uc601\uccb4\uc81c\uac00 \ucc44\ud0dd\ud558\ub294 \ubc29\uc2dd")))}c.isMDXComponent=!0},1416:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LP0-42ff486ce03dddf7d12c682b810491c8.png"},2893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LP1-dad7c1d15e6ee1e549a73a2151a57606.png"},8576:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LP2-453f01bfe1bb4f064ff2776627c37ef4.png"}}]);