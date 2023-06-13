"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[4264],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6347:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="\uc778\ub371\uc2a4\uc758 \uc790\ub8cc\uad6c\uc870",o={unversionedId:"cs/database/sql-advanced/IndexDataStructure",id:"cs/database/sql-advanced/IndexDataStructure",isDocsHomePage:!1,title:"\uc778\ub371\uc2a4\uc758 \uc790\ub8cc\uad6c\uc870",description:"\ud83d\udc23 \uc778\ub371\uc2a4\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c \uc5b4\ub5a4 \uc790\ub8cc\uad6c\uc870\ub97c \uc368??",source:"@site/docs/cs/database/sql-advanced/IndexDataStructure.md",sourceDirName:"cs/database/sql-advanced",slug:"/cs/database/sql-advanced/IndexDataStructure",permalink:"/tech/docs/cs/database/sql-advanced/IndexDataStructure",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cs/database/sql-advanced/IndexDataStructure.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"\uc778\ub371\uc2a4",permalink:"/tech/docs/cs/database/sql-advanced/Index"},next:{title:"\uc815\uaddc\ud654",permalink:"/tech/docs/cs/database/normalization/Normalization"}},d=[{value:"\ud83d\udc23 \uc778\ub371\uc2a4\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c \uc5b4\ub5a4 \uc790\ub8cc\uad6c\uc870\ub97c \uc368??",id:"-\uc778\ub371\uc2a4\ub294-\ub0b4\ubd80\uc801\uc73c\ub85c-\uc5b4\ub5a4-\uc790\ub8cc\uad6c\uc870\ub97c-\uc368",children:[]},{value:"\ud83d\udc23\xa0\ud574\uc2dc \ud14c\uc774\ube14 (Hash Table)??",id:"\ud574\uc2dc-\ud14c\uc774\ube14-hash-table",children:[{value:"\ud83e\udd5a \ud574\uc2dc \ud14c\uc774\ube14 \ub3d9\uc791\ubc29\uc2dd",id:"-\ud574\uc2dc-\ud14c\uc774\ube14-\ub3d9\uc791\ubc29\uc2dd",children:[]},{value:"\ud83e\udd5a\ud574\uc2dc \ud14c\uc774\ube14\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc774\uc720",id:"\ud574\uc2dc-\ud14c\uc774\ube14\uc744-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\ub294-\uc774\uc720",children:[]}]},{value:"\ud83d\udc23\xa0B+ Tree",id:"b-tree",children:[{value:"\ud83e\udd5a\xa0B-Tree",id:"b-tree-1",children:[]},{value:"\ud83e\udd5a B+Tree",id:"-btree",children:[]}]}],c={toc:d},s="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc778\ub371\uc2a4\uc758-\uc790\ub8cc\uad6c\uc870"},"\uc778\ub371\uc2a4\uc758 \uc790\ub8cc\uad6c\uc870"),(0,r.kt)("h2",{id:"-\uc778\ub371\uc2a4\ub294-\ub0b4\ubd80\uc801\uc73c\ub85c-\uc5b4\ub5a4-\uc790\ub8cc\uad6c\uc870\ub97c-\uc368"},"\ud83d\udc23 \uc778\ub371\uc2a4\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c \uc5b4\ub5a4 \uc790\ub8cc\uad6c\uc870\ub97c \uc368??"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\ud574\uc2dc\ud14c\uc774\ube14"),(0,r.kt)("li",{parentName:"ul"},"B+Tree")))),(0,r.kt)("h2",{id:"\ud574\uc2dc-\ud14c\uc774\ube14-hash-table"},"\ud83d\udc23\xa0\ud574\uc2dc \ud14c\uc774\ube14 (Hash Table)??"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud574\uc2dc \ud14c\uc774\ube14\uc740 (Key, Value)\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\uad6c\uc870"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"O(1)")," ****\ube60\ub978 \ub370\uc774\ud130 \uac80\uc0c9\uc774 \ud544\uc694\ud560 \ub54c \uc720\uc6a9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud574\uc2dc \ud14c\uc774\ube14\uc740 Key\uac12\uc744 \uc774\uc6a9\ud574 \uace0\uc720\ud55c index\ub97c \uc0dd\uc131\ud558\uc5ec \uadf8 index\uc5d0 \uc800\uc7a5\ub41c \uac12\uc744 \uaebc\ub0b4\uc624\ub294 \uad6c\uc870\uc774\ub2e4.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ids0",src:a(6456).Z})),(0,r.kt)("h3",{id:"-\ud574\uc2dc-\ud14c\uc774\ube14-\ub3d9\uc791\ubc29\uc2dd"},"\ud83e\udd5a \ud574\uc2dc \ud14c\uc774\ube14 \ub3d9\uc791\ubc29\uc2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\ud2b9\uc815 \uceec\ub7fc \uc778\ub371\uc2a4 \uc0dd\uc131\n\u2192 \ud574\ub2f9 \uceec\ub7fc\uc758 \ub370\uc774\ud130(key)\ub4e4\uc744 \uc624\ub984\ucc28\uc21c \uc815\ub82c\ud558\uc5ec \ubcc4\ub3c4\uc758 \uba54\ubaa8\ub9ac \uacf5\uac04\uc5d0 \ub370\uc774\ud130\uc758 \ubb3c\ub9ac\uc801 \uc8fc\uc18c(value)\uc640 \ud568\uaed8 (key,value)\ub85c \uc800\uc7a5\ub428\n\u2192 \ucffc\ub9ac\uc5d0 "\uc778\ub371\uc2a4 \uc0dd\uc131 \uceec\ub7fc\uc744 Where \uc870\uac74\uc73c\ub85c \uac70\ub294 \ub4f1"\uc758 \uc791\uc5c5\uc744 \ud558\uba74 ',(0,r.kt)("inlineCode",{parentName:"li"},"\uc635\ud2f0\ub9c8\uc774\uc800"),"\uc5d0\uc11c \ud310 \uc0dd\uc131\ub41c \uc778\ub371\uc2a4 \uc0ac\uc6a9\n\u2192 \uba3c\uc800 \uc778\ub371\uc2a4\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub294 \ub370\uc774\ud130\uc758 \ubb3c\ub9ac\uc801 \uc8fc\uc18c\ub85c \uac00\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uc2dd\uc73c\ub85c \ub3d9\uc791 (\uadf8\ub9bc\ucc38\uc870)")),(0,r.kt)("h3",{id:"\ud574\uc2dc-\ud14c\uc774\ube14\uc744-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\ub294-\uc774\uc720"},"\ud83e\udd5a\ud574\uc2dc \ud14c\uc774\ube14\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc774\uc720"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud574\uc2dc\uac00 \ub4f1\ud638(=) \uc5f0\uc0b0\uc5d0\ub9cc \ud2b9\ud654\ub418\uc5c8\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\u2192 \ud574\uc2dc \ud568\uc218\ub294 \uac12\uc774 1\uc774\ub77c\ub3c4 \ub2ec\ub77c\uc9c0\uba74 \uc644\uc804\ud788 \ub2e4\ub978 \ud574\uc2dc \uac12\uc744 \uc0dd\uc131\ud558\ub294\ub370, \uc774\ub7ec\ud55c \ud2b9\uc131\uc5d0 \uc758\ud574\xa0\ubd80\ub4f1\ud638 \uc5f0\uc0b0(>, <)\uc774 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac80\uc0c9\uc744 \uc704\ud574\uc11c\ub294 \ud574\uc2dc \ud14c\uc774\ube14\uc774 \uc801\ud569\ud558\uc9c0 \uc54a\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ex. "\ub098\ub294"\uc73c\ub85c \uc2dc\uc791\ud558\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uac80\uc0c9\ud558\uae30 \uc704\ud55c \ucffc\ub9ac\ubb38\uc740 \uc778\ub371\uc2a4\uc758 \ud61c\ud0dd\uc744 \uc804\ud600 \ubc1b\uc9c0 \ubabb\ud558\uac8c \ub41c\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uc778\ub371\uc2a4\uc5d0\uc11c\ub294 B+Tree\uac00 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub41c\ub2e4.')))),(0,r.kt)("h2",{id:"b-tree"},"\ud83d\udc23\xa0B+ Tree"),(0,r.kt)("h3",{id:"b-tree-1"},"\ud83e\udd5a\xa0B-Tree"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"B-Tree\ub294 \ud0d0\uc0c9 \uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud574 \ub192\uc774\ub97c \uade0\ud615 \uc788\uac8c \uc720\uc9c0\ud558\ub294 Balanced Tree"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"ids1",src:a(510).Z})))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ubaa8\ub4e0 \ub178\ub4dc\uac00 (key, value) \ub97c \ud568\uaed8 \uac16\ub294\ub2e4 \u2192 \ud480\uc2a4\uce94\uc2dc \ubaa8\ub4e0 \ub178\ub4dc\ub97c \ud0d0\uc0c9\ud574\uc57c\ud55c\ub2e4"),(0,r.kt)("li",{parentName:"ol"},"node\uc758 key\uc758 \uc218\uac00 k\uac1c\ub77c\uba74, \uc790\uc2dd node\uc758 \uc218\ub294 k+1\uac1c\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"node\uc758 key\ub294 \ubc18\ub4dc\uc2dc \uc815\ub82c\ub41c \uc0c1\ud0dc\uc5ec\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc790\uc2dd node\ub4e4\uc758 key\ub294 \ud604\uc7ac node\uc758 key\ub97c \uae30\uc900\uc73c\ub85c \ud06c\uae30 \uc21c\uc73c\ub85c \ub098\ub258\uac8c \ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"root node\ub294 \ud56d\uc0c1 2\uac1c \uc774\uc0c1\uc758 \uc790\uc2dd node\ub97c \uac16\ub294\ub2e4. (root node\uac00 leaf node\uc778 \uacbd\uc6b0 \uc81c\uc678)"),(0,r.kt)("li",{parentName:"ol"},"M\ucc28 \ud2b8\ub9ac\uc77c \ub54c, root node\uc640 leaf node\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 node\ub294 \ucd5c\uc18c\xa0\u2308M2\u2309\u2308M2\u2309, \ucd5c\ub300\xa0MM\uac1c\uc758 \uc11c\ube0c \ud2b8\ub9ac\ub97c \uac16\ub294\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ubaa8\ub4e0 leaf node\ub4e4\uc740 \uac19\uc740 level\uc5d0 \uc788\uc5b4\uc57c \ud55c\ub2e4.")),(0,r.kt)("h3",{id:"-btree"},"\ud83e\udd5a B+Tree"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DB\uc758 \uc778\ub371\uc2a4\ub97c \uc704\ud574\xa0B-Tree\ub97c \uac1c\uc120\uc2dc\ud0a8 \uc790\ub8cc\uad6c\uc870"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub9ac\ud504\ub178\ub4dc(",(0,r.kt)("inlineCode",{parentName:"li"},"\ub370\uc774\ud130\ub178\ub4dc"),")\ub9cc \uc778\ub371\uc2a4\uc640 \ud568\uaed8 \ub370\uc774\ud130\uc758 \uc8fc\uc18c\uac12(Value)\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \ub098\uba38\uc9c0 \ub178\ub4dc(",(0,r.kt)("inlineCode",{parentName:"li"},"\uc778\ub371\uc2a4\ub178\ub4dc"),")\ub4e4\uc740 \ub370\uc774\ud130\ub97c \uc704\ud55c \uc778\ub371\uc2a4(Key)\ub9cc\uc744 \uac16\ub294\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub9ac\ud504\ub178\ub4dc\ub4e4\uc740 LinkedList\ub85c \uc5f0\uacb0\ub418\uc5b4 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ub178\ub4dc \ud06c\uae30\ub294 \uc778\ub371\uc2a4 \ub178\ub4dc\uc758 \ud06c\uae30\uc640 \uac19\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"B+Tree\ub294 O(\ud835\udc59\ud835\udc5c\ud835\udc542\ud835\udc5blog2n)"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"ids1",src:a(1545).Z}),"\n",(0,r.kt)("img",{alt:"ids3",src:a(5767).Z})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"InnoDB\uc5d0\uc11c\uc758 B+Tree\ub294 \uc77c\ubc18\uc801\uc778 \uad6c\uc870\ubcf4\ub2e4 \ub354\uc6b1 \ubcf5\uc7a1\ud558\uac8c \uad6c\ud604",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"InnoDB\uc5d0\uc11c\ub294 \uac19\uc740 \ub808\ubca8\uc758 \ub178\ub4dc\ub4e4\ub07c\ub9ac\ub294 Linked List\uac00 \uc544\ub2cc Double Linked List\ub85c \uc5f0\uacb0\ub418\uc5c8\uc73c\uba70, \uc790\uc2dd \ub178\ub4dc\ub4e4\uc740 Single Linked List\ub85c \uc5f0\uacb0\ub418\uc5b4 \uc788\ub2e4.")))),(0,r.kt)("h5",{id:"btree-\uc758-\uc7a5\uc810"},"\ud83d\udc7e\xa0B+Tree \uc758 \uc7a5\uc810"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"leaf node\ub97c \uc81c\uc678\ud558\uace0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"\uba54\ubaa8\ub9ac\ub97c \ud6a8\uc728"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\ud558\ub098\uc758 node\uc5d0 \ub354 \ub9ce\uc740 \ud3ec\uc778\ud130\ub97c \uac00\uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud2b8\ub9ac\uc758 \ub192\uc774\uac00 \ub354 \ub0ae\uc544\uc9c0\ubbc0\ub85c \uac80\uc0c9 \uc18d\ub3c4\ub97c \ud5a5\uc0c1")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Full scan\uc744 \ud558\ub294 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"leaf node\uc5d0\ub9cc \ub370\uc774\ud130\uac00 \uc800\uc7a5"),"\ub418\uc5b4 \uc788\uace0, ",(0,r.kt)("inlineCode",{parentName:"li"},"leaf node\ub07c\ub9ac linked list\ub85c \uc5f0\uacb0"),"\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc120\ud615 \uc2dc\uac04\uc774 \uc18c\ubaa8"),"\ub428")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubd80\ub4f1\ud638\ub97c \uc774\uc6a9\ud55c \uc21c\ucc28\uac80\uc0c9 \ud6a8\uc728"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\ubc18\uba74 B-Tree\ub294 \ubaa8\ub4e0 node\ub97c \ud655\uc778\ud574\uc57c \ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\ubb3c\ub860 Best Case\uc5d0 \ub300\ud574 B-Tree\ub294 \ub9ac\ud504\ub178\ub4dc\uae4c\uc9c0 \uac00\uc9c0 \uc54a\uc544\ub3c4 \ud0d0\uc0c9\ud560 \uc218 \uc788\ub294 BTree\uc5d0 \ube44\ud574 \ubb34\uc870\uac74 \ub9ac\ud504\ub178\ub4dc\uae4c\uc9c0 \uac00\uc57c\ud55c\ub2e4\ub294 \ub2e8\uc810"))),(0,r.kt)("p",null,"\u21d2 B+Tree\ub294 O(\ud835\udc59\ud835\udc5c\ud835\udc542\ud835\udc5blog2n) \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub97c \uac16\uc9c0\ub9cc \ud574\uc2dc\ud14c\uc774\ube14\ubcf4\ub2e4 \uc778\ub371\uc2f1\uc5d0 \ub354\uc6b1 \uc801\ud569\ud55c \uc790\ub8cc\uad6c\uc870\uc784"))}p.isMDXComponent=!0},6456:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ids0-902d02c527ec3e2a88e0bcef87c83fd7.png"},510:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ids1-30ca0b00613ccc18a98c76092fa0b871.png"},1545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ids2-ff18a1c56ed367a5f016fa14609877a0.png"},5767:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ids3-b49e5166b29a8621807230b56fae714c.png"}}]);