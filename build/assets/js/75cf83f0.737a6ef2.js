"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[1177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=l.createContext({}),o=function(e){var t=l.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):A(A({},t),e)),a},c=function(e){var t=o(e.components);return l.createElement(g.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,g=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=o(a),u=n,p=s["".concat(g,".").concat(u)]||s[u]||d[u]||i;return a?l.createElement(p,A(A({ref:t},c),{},{components:a})):l.createElement(p,A({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,A=new Array(i);A[0]=u;var r={};for(var g in t)hasOwnProperty.call(t,g)&&(r[g]=t[g]);r.originalType=e,r[s]="string"==typeof e?e:n,A[1]=r;for(var o=2;o<i;o++)A[o]=a[o];return l.createElement.apply(null,A)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},993:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>A,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>g});var l=a(7462),n=(a(7294),a(3905));const i={},A="\uad00\uacc4\ub300\uc218\uc758 8\ub300 \uc5f0\uc0b0\uc790",r={unversionedId:"cs/database/sql/relational-algebra/RelatAlgeOperator",id:"cs/database/sql/relational-algebra/RelatAlgeOperator",isDocsHomePage:!1,title:"\uad00\uacc4\ub300\uc218\uc758 8\ub300 \uc5f0\uc0b0\uc790",description:"- \uc77c\ubc18\uc9d1\ud569 \uc5f0\uc0b0\uc790: \ud569\uc9d1\ud569 / \uad50\uc9d1\ud569 / \ucc28\uc9d1\ud569 / \uce74\ud2f0\uc158\uacf1",source:"@site/docs/cs/database/sql/relational-algebra/RelatAlgeOperator.md",sourceDirName:"cs/database/sql/relational-algebra",slug:"/cs/database/sql/relational-algebra/RelatAlgeOperator",permalink:"/docs/cs/database/sql/relational-algebra/RelatAlgeOperator",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cs/database/sql/relational-algebra/RelatAlgeOperator.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"\uad00\uacc4\ub300\uc218",permalink:"/docs/cs/database/sql/relational-algebra/RelationAlgebra"},next:{title:"\uad00\uacc4\ub300\uc218 vs SQL",permalink:"/docs/cs/database/sql/relational-algebra/SQLvsRA"}},g=[{value:"\ud83d\udc23 \uc77c\ubc18\uc9d1\ud569 \uc5f0\uc0b0\uc790",id:"-\uc77c\ubc18\uc9d1\ud569-\uc5f0\uc0b0\uc790",children:[{value:"\ud83e\udd5a \ud569\uc9d1\ud569 : \uc911\ubcf5\uc81c\uac70 \ud14c\uc774\ube14 \ud569",id:"-\ud569\uc9d1\ud569--\uc911\ubcf5\uc81c\uac70-\ud14c\uc774\ube14-\ud569",children:[]},{value:"\ud83e\udd5a \uad50\uc9d1\ud569 : \uacb9\uce58\ub294 \uac83\ub9cc \ud14c\uc774\ube14",id:"-\uad50\uc9d1\ud569--\uacb9\uce58\ub294-\uac83\ub9cc-\ud14c\uc774\ube14",children:[]},{value:"\ud83e\udd5a \ucc28\uc9d1\ud569 : A - B \ud55c \uacb0\uacfc \ud14c\uc774\ube14",id:"-\ucc28\uc9d1\ud569--a---b-\ud55c-\uacb0\uacfc-\ud14c\uc774\ube14",children:[]},{value:"\ud83e\udd5a \uce74\ud2f0\uc158 \uacf1 : \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc870\ud569 \uacbd\uc6b0\uc758 \uc218",id:"-\uce74\ud2f0\uc158-\uacf1--\uac00\ub2a5\ud55c-\ubaa8\ub4e0-\uc870\ud569-\uacbd\uc6b0\uc758-\uc218",children:[]}]},{value:"\ud83d\udc23 \uc21c\uc218\uad00\uacc4 \uc5f0\uc0b0\uc790",id:"-\uc21c\uc218\uad00\uacc4-\uc5f0\uc0b0\uc790",children:[{value:"\ud83e\udd5a \uc140\ub809\uc158 : \ud14c\uc774\ube14\uc5d0\uc11c \uc6d0\ud558\ub294 \ub370\uc774\ud130 \uc870\ud68c",id:"-\uc140\ub809\uc158--\ud14c\uc774\ube14\uc5d0\uc11c-\uc6d0\ud558\ub294-\ub370\uc774\ud130-\uc870\ud68c",children:[]},{value:"\ud83e\udd5a \ud504\ub85c\uc81d\uc158 : \ud14c\uc774\ube14\uc5d0\uc11c \ud2b9\uc815 \uc18d\uc131\ub9cc \uc9c0\uc815\ud574 \uc870\ud68c",id:"-\ud504\ub85c\uc81d\uc158--\ud14c\uc774\ube14\uc5d0\uc11c-\ud2b9\uc815-\uc18d\uc131\ub9cc-\uc9c0\uc815\ud574-\uc870\ud68c",children:[]},{value:"\ud83e\udd5a \uc870\uc778 : \uacb0\ud569",id:"-\uc870\uc778--\uacb0\ud569",children:[]},{value:"\ud83e\udd5a \ub514\ube44\uc804 : \ubd84\ud560",id:"-\ub514\ube44\uc804--\ubd84\ud560",children:[]}]}],o={toc:g},c="wrapper";function s(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,l.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\uad00\uacc4\ub300\uc218\uc758-8\ub300-\uc5f0\uc0b0\uc790"},"\uad00\uacc4\ub300\uc218\uc758 8\ub300 \uc5f0\uc0b0\uc790"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc9d1\ud569 \uc5f0\uc0b0\uc790: \ud569\uc9d1\ud569 / \uad50\uc9d1\ud569 / \ucc28\uc9d1\ud569 / \uce74\ud2f0\uc158\uacf1"),(0,n.kt)("li",{parentName:"ul"},"\uc21c\uc218\uad00\uacc4 \uc5f0\uc0b0\uc790: \uc140\ub809\uc158 / \ud504\ub85c\uc81d\uc158 / \uc870\uc778 / \ub514\ube44\uc804")))),(0,n.kt)("h2",{id:"-\uc77c\ubc18\uc9d1\ud569-\uc5f0\uc0b0\uc790"},"\ud83d\udc23 \uc77c\ubc18\uc9d1\ud569 \uc5f0\uc0b0\uc790"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-\ud569\uc9d1\ud569--\uc911\ubcf5\uc81c\uac70-\ud14c\uc774\ube14-\ud569"},"\ud83e\udd5a \ud569\uc9d1\ud569 : \uc911\ubcf5\uc81c\uac70 \ud14c\uc774\ube14 \ud569"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc911\ubcf5\uc744 \uc81c\uc678\ud558\uace0 \ub450 \ub9b4\ub808\uc774\uc158\uc758 \ud29c\ud50c\ub4e4\uc744 \ud569\uce68"),(0,n.kt)("li",{parentName:"ul"},"\u222a \ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604"),(0,n.kt)("li",{parentName:"ul"},"\ud569\uc9d1\ud569\uc740 '\ud569\uc9d1\ud569 \ud638\ud658 \uc870\uac74' \uc774 \ub9de\uc544\uc57c\ub9cc \uc2e4\ud589\ud560 \uc218 \uc788\uc74c.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uac2f\uc218\uac00 \ub2e4\ub974\uac70\ub098 \ub3c4\uba54\uc778\uc774 \ub2e4\ub974\uba74 \uc548\ub41c\ub2e4")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Union",src:a(1448).Z})),(0,n.kt)("h3",{id:"-\uad50\uc9d1\ud569--\uacb9\uce58\ub294-\uac83\ub9cc-\ud14c\uc774\ube14"},"\ud83e\udd5a \uad50\uc9d1\ud569 : \uacb9\uce58\ub294 \uac83\ub9cc \ud14c\uc774\ube14"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub450 \ub9b4\ub808\uc774\uc158\uc758 \ud29c\ud50c\ub4e4\uc758 \uacb9\uce58\ub294 \ubd80\ubd84\ub9cc\uc744 \ub3c4\ucd9c"),(0,n.kt)("li",{parentName:"ul"},"\u2229\ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Intersection",src:a(9133).Z}),"\n",(0,n.kt)("img",{alt:"Intersection2",src:a(4923).Z})),(0,n.kt)("h3",{id:"-\ucc28\uc9d1\ud569--a---b-\ud55c-\uacb0\uacfc-\ud14c\uc774\ube14"},"\ud83e\udd5a \ucc28\uc9d1\ud569 : A - B \ud55c \uacb0\uacfc \ud14c\uc774\ube14"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub450 \ub9b4\ub808\uc774\uc158\uc758 \ud29c\ud50c\ub4e4\uc758 \uacb9\uce58\uc9c0 \uc54a\ub294 \ubd80\ubd84\ub9cc\uc744 \ub3c4\ucd9c "),(0,n.kt)("li",{parentName:"ul"},"-\ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image7",src:a(1665).Z}),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"image8",src:a(3549).Z})),(0,n.kt)("h3",{id:"-\uce74\ud2f0\uc158-\uacf1--\uac00\ub2a5\ud55c-\ubaa8\ub4e0-\uc870\ud569-\uacbd\uc6b0\uc758-\uc218"},"\ud83e\udd5a \uce74\ud2f0\uc158 \uacf1 : \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc870\ud569 \uacbd\uc6b0\uc758 \uc218"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub450 \ub9b4\ub808\uc774\uc158(\ud14c\uc774\ube14) \uc5d0\uc11c \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc870\ud569\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uc5f0\uc0b0\uc790"),(0,n.kt)("li",{parentName:"ul"},"\ub450 \ud14c\uc774\ube14\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uacbd\uc6b0\uc758 \uc218\ub97c \ub098\ud0c0\ub0b4\ub294 \uc804\uccb4 \uc9d1\ud569\uc744 \ub3c4\ucd9c"),(0,n.kt)("li",{parentName:"ul"},"\uce74\ub514\uc158 \uacf1\ud574\uc11c \ub098\uc624\ub294\uac8c \uac12\uc774 \ud06c\uba74 \uc624\ubc84\ud5e4\ub4dc\uac00 \ub108\ubb34 \ucee4\uc9c0\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c\ub85c\ub294 \uce74\ud2f0\uc158 \uacf1 \uc5f0\uc0b0\uc790\ub294 \uc0ac\uc6a9\ud558\uc9c0\uc54a\uace0 \ub4a4\uc5d0\uc11c \ubc30\uc6b8 \uc870\uc778(join) \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\xd7\ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image9",src:a(3881).Z}),"\n",(0,n.kt)("img",{alt:"image10",src:a(9660).Z})),(0,n.kt)("h2",{id:"-\uc21c\uc218\uad00\uacc4-\uc5f0\uc0b0\uc790"},"\ud83d\udc23 \uc21c\uc218\uad00\uacc4 \uc5f0\uc0b0\uc790"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-\uc140\ub809\uc158--\ud14c\uc774\ube14\uc5d0\uc11c-\uc6d0\ud558\ub294-\ub370\uc774\ud130-\uc870\ud68c"},"\ud83e\udd5a \uc140\ub809\uc158 : \ud14c\uc774\ube14\uc5d0\uc11c \uc6d0\ud558\ub294 \ub370\uc774\ud130 \uc870\ud68c"),(0,n.kt)("p",null,"\u2022 \uc6d0\ud558\ub294 \ub370\uc774\ud130\ub97c\xa0 ",(0,n.kt)("inlineCode",{parentName:"p"},"\uc218\ud3c9\uc801"),"\uc73c\ub85c \ub3c4\ucd9c\ud568\n\u2022 \u03c3 (sigma)\ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select",src:a(5314).Z})),(0,n.kt)("h3",{id:"-\ud504\ub85c\uc81d\uc158--\ud14c\uc774\ube14\uc5d0\uc11c-\ud2b9\uc815-\uc18d\uc131\ub9cc-\uc9c0\uc815\ud574-\uc870\ud68c"},"\ud83e\udd5a \ud504\ub85c\uc81d\uc158 : \ud14c\uc774\ube14\uc5d0\uc11c \ud2b9\uc815 \uc18d\uc131\ub9cc \uc9c0\uc815\ud574 \uc870\ud68c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \ub370\uc774\ud130\ub97c\xa0 ",(0,n.kt)("inlineCode",{parentName:"li"},"\uc218\uc9c1\uc801"),"\uc73c\ub85c \ub3c4\ucd9c\ud568"),(0,n.kt)("li",{parentName:"ul"},"\u2022 \u03a0 (pi)\ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604"),(0,n.kt)("li",{parentName:"ul"},"\uc140\ub809\uc158\uacfc \ub2ec\ub9ac \uacb0\uacfc\ub9b4\ub808\uc774\uc158\uc5d0 \uc911\ubcf5\ub41c \ud29c\ud50c \uc874\uc7ac\uac00\ub2a5\uc131\uc774 \uc788\uc73c\uba70, \uc774\uacbd\uc6b0 \uc911\ubcf5 \uc790\ub3d9 \uc81c\uac70")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Projection",src:a(1199).Z})),(0,n.kt)("h3",{id:"-\uc870\uc778--\uacb0\ud569"},"\ud83e\udd5a \uc870\uc778 : \uacb0\ud569"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub450 \uac1c\uc758 \ub9b4\ub808\uc774\uc158\uc73c\ub85c\ubd80\ud130 \uc5f0\uad00\ub41c \ud22c\ud50c\ub4e4\uc744 \uacb0\ud569\ud558\ub294 \uc5f0\uc0b0\uc790"),(0,n.kt)("li",{parentName:"ul"},"\u22c8\ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604"),(0,n.kt)("li",{parentName:"ul"},"\uc870\uc778 \uc5f0\uc0b0\uc790\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc5f0\uc0b0 \ubc29\uc2dd\uc5d0 \ub530\ub77c \uc5ec\ub7ec \uc870\uc778\uc73c\ub85c \ub098\ub25c\ub2e4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc138\ud0c0 \uc870\uc778(theta join)"),(0,n.kt)("li",{parentName:"ul"},"\ub3d9\ub4f1 \uc870\uc778(equi join)"),(0,n.kt)("li",{parentName:"ul"},"\uc790\uc5f0 \uc870\uc778(natural join)"),(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 \uc870\uc778(outer join)"),(0,n.kt)("li",{parentName:"ul"},"\uc138\ubbf8 \uc870\uc778(semi join)")))),(0,n.kt)("h4",{id:"-\uc138\ud0c0-\uc870\uc778--\ub3d9\ub4f1\uc870\uc778"},"\ud83e\udd5a \uc138\ud0c0 \uc870\uc778 & \ub3d9\ub4f1\uc870\uc778"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc138\ud0c0 \uc870\uc778\uc740 \ub450 \ub9b4\ub808\uc774\uc158\uc5d0\uc11c \uacf5\ud1b5\ub41c \uc560\ud2b8\ub9ac\ubdf0\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \ube44\uad50 \uc5f0\uc0b0\uc790(=,\\<",">",",\\<=,\\<,",">","=,",">",")\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc870\uac74\uc744 \ub9cc\uc871\ud558\ub294 \ud29c\ud50c\ub4e4\uc744 \uacb0\ud569"),(0,n.kt)("li",{parentName:"ul"},"\ub3d9\ub4f1 \uc870\uc778\uc740 \uc138\ud0c0 \uc870\uc778 \uc911\uc5d0\uc11c \ube44\uad50 \uc5f0\uc0b0\uc790\uac00 =\uc778 \uc870\uc778\uc774\ub2e4.\xa0\uc989, \ub450 \ub9b4\ub808\uc774\uc158\uc5d0\uc11c \uacf5\ud1b5\ub41c \uc560\ud2b8\ub9ac\ubdf0\ud2b8\uc758 \uac12\uc774 \uac19\uc740 \ud29c\ud50c\ub4e4\uc744 \uacb0\ud569\n",(0,n.kt)("img",{alt:"theta",src:a(1723).Z}))),(0,n.kt)("h5",{id:"-\uc790\uc5f0\uc870\uc778"},"\ud83e\udd5a \uc790\uc5f0\uc870\uc778"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub3d9\ub4f1 \uc870\uc778\uc758 \uacb0\uacfc \ub9b4\ub808\uc774\uc158\uc5d0\uc11c \uc870\uc778 \uc560\ud2b8\ub9ac\ubdf0\ud2b8\ub97c \uc81c\uc678\ud55c \uc870\uc778 (\uc911\ubcf5 \ud544\ub4dc \uc81c\uac70)\n",(0,n.kt)("img",{alt:"natur",src:a(407).Z}))),(0,n.kt)("h4",{id:"-\uc678\ubd80\uc870\uc778"},"\ud83e\udd5a \uc678\ubd80\uc870\uc778"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub110\uac12\uc774 \ub4e4\uc5b4 \uc788\ub294 \ud22c\ud50c\ub4e4\uc744 \ub2e4\ub8e8\uae30 \uc704\ud574\uc11c \uc870\uc778 \uc5f0\uc0b0\uc744 \ud655\uc7a5\ud55c \uc870\uc778"),(0,n.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc778 \uc870\uc778\uc740 \ub450 \ub9b4\ub808\uc774\uc158\uc5d0\uc11c \ub300\uc751\ub418\ub294 \ud29c\ud50c\uc774 \uc5c6\uc744 \uacbd\uc6b0, \uadf8 \ud29c\ud50c\uc744 \uacb0\uacfc\uc5d0 \ud3ec\ud568\uc2dc\ud0a4\uc9c0 \uc54a\ub294\ub2e4. \ud558\uc9c0\ub9cc \uc678\ubd80 \uc870\uc778\uc740 \ub300\uc751\ub418\ub294 \ud29c\ud50c\uc774 \uc5c6\uc5b4\ub3c4 \uacb0\uacfc\uc5d0 \ud3ec\ud568\uc2dc\ud0a4\uace0, \uc0c1\ub300 \ub9b4\ub808\uc774\uc158\uc758 \uc560\ud2b8\ub9ac\ubdf0\ud2b8 \uac12\uc740 null\ub85c \ucc44\uc6b4\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 \uc870\uc778\uc5d0\ub294 \uc5b4\ub290 \ub9b4\ub808\uc774\uc158\uc744 \uae30\uc900\uc73c\ub85c null\ub85c \ucc44\uc6b0\ub294\uc9c0\uc5d0 \ub530\ub77c 3\uac00\uc9c0\ub85c \ub098\ub25c\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc67c\ucabd \uc678\ubd80 \uc870\uc778(left outer join)"),(0,n.kt)("li",{parentName:"ul"},"\uc624\ub978\ucabd \uc678\ubd80 \uc870\uc778(right outer join)"),(0,n.kt)("li",{parentName:"ul"},"\uc644\uc804 \uc678\ubd80 \uc870\uc778(full outer join)")))),(0,n.kt)("h6",{id:"left-outer-join"},"left outer join"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"leou",src:a(9420).Z})),(0,n.kt)("h6",{id:"right-outer-join"},"right outer join"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"riou",src:a(8425).Z})),(0,n.kt)("h6",{id:"full-outer-join"},"full outer join"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"fou",src:a(5531).Z})),(0,n.kt)("h3",{id:"-\ub514\ube44\uc804--\ubd84\ud560"},"\ud83e\udd5a \ub514\ube44\uc804 : \ubd84\ud560"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud55c \ud14c\uc774\ube14\uc5d0\uc11c \ub2e4\ub978 \ud14c\uc774\ube14\uc758 \ubaa8\ub4e0 \uac12\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \ud589\ub4e4\uc744 \ucc3e\uc544\uc8fc\ub294 \uc5f0\uc0b0\uc790"),(0,n.kt)("li",{parentName:"ul"},"\xf7\ub85c \uc5f0\uc0b0\uc790\ub97c \ud45c\ud604"),(0,n.kt)("li",{parentName:"ul"},"'\ubaa8\ub4e0 ~\uc5d0 \ub300\ud574 ~\ud558\ub294' \ud615\ud0dc\uc758 \uc9c8\uc758\uc5d0 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc74c"),(0,n.kt)("li",{parentName:"ul"},"\ub514\ube44\uc804\uc740 \ub098\ub204\ub294 \ud14c\uc774\ube14\uc758 \uc5f4\uc758 \uac1c\uc218\ub9cc\ud07c \uacb0\uacfc \ud14c\uc774\ube14\uc758 \uc5f4\uc758 \uac1c\uc218\uac00 \uc904\uc5b4\ub4e4\uac8c \ub41c\ub2e4")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image11",src:a(2056).Z}),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"image11",src:a(6141).Z}),"\n",(0,n.kt)("img",{alt:"image11",src:a(1138).Z})))}s.isMDXComponent=!0},9133:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Intersection-504a0c512b654e6af2ce51fa5498fd73.png"},4923:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Intersection2-dbc916fe18ecf7f4421221e04ba2099f.png"},1199:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACiCAYAAAB1T+48AAAFyUlEQVR4nO3aT0yTZwDH8Z+bF4wXC9sOmKgZPTAPnNjmYZ74E5REYnZA0MyDTvQiBBNjYNlFluAksh2URG+CethMucyoGBcMdtCTB+BQ2GSrQTetN3ta2MGUQGj7K1Dgdfl+EhNo3z7vS/vt0+d966a5ubk5ATm8t9EHgOAjElhEAotIYBEJLCKBRSQFkkqlFI/HlUqlVjxGPB5XMpks4FEVBpHkEI/Hs/6TpMFIRGU7d0mSEomE6qprlEgkso430N+vgf7+rPfXVdfo0fBwYf+IAti80QeQTTQa1d8vXuS17YcffaQ9e/Ysub2zo0O3Bm7kNcbU0z+W3FZXXbOs7Z3JycllPyYIAhvJ79PTeT+p5eXlGSM5eeqUvjp6NOdjHww90MXu7oz33bl/T5I0Njqqbzu/Ud+1q9qxY0dex5TJ9NSUXiwIfzASUXtr24rHWy+BjaT58GFJUtnOXTpz9qxaTrYsuj/9BOd6R5eWltr9TIyPZ70vHA4v2SYcDmswEtHE+LhisZgdf6HY6JgkKZlMKhQK6Yu9e+dDlHLPXBspsJGkNTY3KZH4a0WPffbsmd68eZNzm9nZ53acWzdvSpJ+ffhQVVVV83FMT03lfSzRaHT+50fDwzrQ0KBQKKRQKJT3GBsl8JFkE4vFVLuvLuc2Vy5fzntNks3Q0JBio2NqbG7SrYEb2l9fr/NdXZLezmbp2cH5sbdXlZ99qo/LyvRDb69qamt17+5dPm4K5fXr1xlv37Ztm31sY3PT/Iu6XNFoVC3Hjqt2X938GEcONanv2lVVVVXlPU7flT7FRsf082BEJSUlejwyojPt7fr6xIl34uMm8KfA5eXluvvLnXXf70B/v44calLtvjpd7OmRJHV0dqqxuUktx44v+vjIJpVK6fsLF3Sxu1s9vZdUUVGh0tJSXR8Y0OTEhNpOn9bLly8VDofn1z9BFNiZJH39IdvvaemPkzv372V8oh+PjKizo8Pub399/aIzpK1bt6qxuUkdnZ0qKiqSJBUVFel8V9f8toORSNbxksmkvjx4UH8+ndH1mzcWjZ0O5buuLnWcO6efbt8O9NpkU1D/01H6glW+tm/fPv9ipmW61tLe2qbG5iZVVlYuuv2T3buX/W5OJpN69eqVwuGwUqmUEonEouN48uSJSkpKcp5lpc90pLdvhJ7eSzrQ0LCs41hrgZ1JCjH9Zrp20t7apsrKymW9ENlmsUwWzmgVFRWLxsgUQJBnkLTARZJ+d65EcXHxmjzpCxeX2czMzKjl2PFV7WclV3HXQ+AieTQ8vOLTwvQ71V2Ob29ty7qPTGubIC8q10PgIjnQ0LDqz+T99fVL1hz5Ki4uXtW+c5mdfW7XWlu2bMnrSvF6CuzC9V0Tj8dVV12T9Swr33XNaq7rrBUiKZBMZzf/F0QCK/BXXLHxiAQWkcAiElhEAqsgF9OW890GNtZKLv0zk8AiElhr8t1NIb/N/O2ffws2Viaff/D+ih8b5GNbaLXLAWYSWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQksIoFFJLCIBBaRwCISWEQCi0hgEQmszWsxaNnOXWsxLDYIMwksIoFFJLA2zc3NzW30QSDYmElgEQksIoFFJLCIBBaRwCISWP8BD12hccDo3kEAAAAASUVORK5CYII="},5314:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,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"},1448:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Union-c647d4ecbc01b7cd4208a72be00a3723.png"},5531:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/fou-d5c3a9af83f5f4849a031aee081c2a2d.png"},9660:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/image10-9ab93e65b77d67dee231df057d56f845.png"},2056:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,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"},6141:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/image12-e3582c5a63f52c9fed6c2d4765241af2.png"},1138:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/image13-65d005128fb653450932175bc0d62c3d.png"},1665:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/image7-e01132ca77dad1dcc92068d63fd4e9dc.png"},3549:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/image8-90c196acb018e779fb5caa3dacacdf10.png"},3881:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,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"},9420:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/leou-e304427ccd68ce934c72ba3690e610ee.png"},407:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/natur-c1d15b208a0a222d08f554237f5919d8.png"},8425:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/riou-f1d9238c7345e734d533b48074dbd8e1.png"},1723:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/theta-2dc6370aeb79a0869511c26ad8bfe1b9.png"}}]);