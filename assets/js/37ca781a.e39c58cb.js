"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={title:"TS Basics \u57fa\u790e\u89c0\u5ff5"},i=void 0,o={unversionedId:"TypeScript/basics",id:"TypeScript/basics",title:"TS Basics \u57fa\u790e\u89c0\u5ff5",description:"\u524d\u8a00",source:"@site/docs/TypeScript/basics.md",sourceDirName:"TypeScript",slug:"/TypeScript/basics",permalink:"/Annie-Docusaurus/docs/TypeScript/basics",draft:!1,tags:[],version:"current",frontMatter:{title:"TS Basics \u57fa\u790e\u89c0\u5ff5"},sidebar:"docSidebar",previous:{title:"commitlint - \u6aa2\u67e5\u63d0\u4ea4\u8a0a\u606f\u7684\u597d\u5e6b\u624b",permalink:"/Annie-Docusaurus/docs/Tools/Commitlint"},next:{title:"TS Utility Types",permalink:"/Annie-Docusaurus/docs/TypeScript/utility"}},p={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6587\u7ae0\u76ee\u9304",id:"\u6587\u7ae0\u76ee\u9304",level:2},{value:"\u578b\u5225\u8a3b\u8a18 &amp; \u578b\u5225\u63a8\u8ad6",id:"\u578b\u5225\u8a3b\u8a18--\u578b\u5225\u63a8\u8ad6",level:2},{value:"\u539f\u59cb\u8cc7\u6599\u578b\u5225",id:"\u539f\u59cb\u8cc7\u6599\u578b\u5225",level:2},{value:"TS \u7279\u6b8a\u578b\u5225",id:"ts-\u7279\u6b8a\u578b\u5225",level:2},{value:"\u51fd\u5f0f\u7684\u578b\u5225",id:"\u51fd\u5f0f\u7684\u578b\u5225",level:2},{value:"\u53ef\u9078\u53c3\u6578",id:"\u53ef\u9078\u53c3\u6578",level:3},{value:"\u53c3\u6578\u9810\u8a2d\u503c",id:"\u53c3\u6578\u9810\u8a2d\u503c",level:3},{value:"\u9663\u5217\u7684\u578b\u5225",id:"\u9663\u5217\u7684\u578b\u5225",level:2},{value:"\u5b57\u9762\u91cf\u578b\u5225",id:"\u5b57\u9762\u91cf\u578b\u5225",level:2},{value:"\u5143\u7d44 Tuple",id:"\u5143\u7d44-tuple",level:2},{value:"\u5217\u8209 Enum",id:"\u5217\u8209-enum",level:2},{value:"Numeric Enum",id:"numeric-enum",level:3},{value:"String Enum",id:"string-enum",level:3},{value:"\u7269\u4ef6\u7684\u578b\u5225",id:"\u7269\u4ef6\u7684\u578b\u5225",level:2},{value:"optional properties \u53ef\u9078\u5c6c\u6027",id:"optional-properties-\u53ef\u9078\u5c6c\u6027",level:3},{value:"readonly properties \u552f\u8b80\u5c6c\u6027",id:"readonly-properties-\u552f\u8b80\u5c6c\u6027",level:3},{value:"Index Signatures",id:"index-signatures",level:3},{value:"Union \u806f\u96c6 &amp; Intersection \u4ea4\u96c6",id:"union-\u806f\u96c6--intersection-\u4ea4\u96c6",level:2},{value:"\u578b\u5225\u65b7\u8a00 Type Assertion",id:"\u578b\u5225\u65b7\u8a00-type-assertion",level:2}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u96d6\u7136\u8b80\u904e\u4e0d\u5c11 TypeScript \u6559\u5b78\u7cfb\u5217\u6587\u7ae0\u3001\u5b98\u65b9\u6587\u4ef6\u4e5f\u7ffb\u770b\u4e86\u5e7e\u6b21\uff0c\u4f46\u7e3d\u89ba\u5f97\u4f7f\u7528\u8d77\u4f86\u9084\u662f\u6709\u4e9b\u7d81\u624b\u7d81\u8173\uff0c\u56e0\u6b64\u6c7a\u5b9a\u900f\u904e\u64b0\u5beb\u7b46\u8a18\u4f86\u91cd\u65b0\u8907\u7fd2\u91cd\u8981\u89c0\u5ff5\u3002"),(0,a.kt)("h2",{id:"\u6587\u7ae0\u76ee\u9304"},"\u6587\u7ae0\u76ee\u9304"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u578b\u5225\u8a3b\u8a18 Type Annotations & \u578b\u5225\u63a8\u8ad6 Type Inference"),(0,a.kt)("li",{parentName:"ul"},"\u539f\u59cb\u8cc7\u6599\u578b\u5225 Primitive Data Type"),(0,a.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u578b\u5225 Special Type"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u5f0f\u7684\u578b\u5225 Function Type"),(0,a.kt)("li",{parentName:"ul"},"\u7269\u4ef6\u7684\u578b\u5225 Object Type"),(0,a.kt)("li",{parentName:"ul"},"\u9663\u5217\u7684\u578b\u5225 Array Type"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u9762\u91cf\u578b\u5225 Literal Type"),(0,a.kt)("li",{parentName:"ul"},"\u5143\u7d44 Tuple Type"),(0,a.kt)("li",{parentName:"ul"},"\u5217\u8209 Enums Type"),(0,a.kt)("li",{parentName:"ul"},"\u806f\u96c6 Union & \u4ea4\u96c6 Intersection Type"),(0,a.kt)("li",{parentName:"ul"},"\u578b\u5225\u65b7\u8a00 Type Assertion")),(0,a.kt)("h2",{id:"\u578b\u5225\u8a3b\u8a18--\u578b\u5225\u63a8\u8ad6"},"\u578b\u5225\u8a3b\u8a18 & \u578b\u5225\u63a8\u8ad6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u578b\u5225\u8a3b\u8a18\uff08Type Annotations\uff09"),"\uff1a\u660e\u78ba\u6307\u5b9a\u8b8a\u6578\u3001\u51fd\u5f0f\u53c3\u6578\u6216\u51fd\u5f0f\u56de\u50b3\u503c\u7684\u8cc7\u6599\u578b\u5225\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let age: number;\nlet name: string;\nlet isStudent: boolean;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u578b\u5225\u63a8\u8ad6\uff08Type Inference\uff09"),"\uff1a\u5c31\u7b97\u7121\u660e\u78ba\u8a3b\u8a18\u8cc7\u6599\u578b\u5225\uff0cTS \u4e5f\u80fd\u8070\u660e\u5730\u6839\u64da\u4e00\u5957\u898f\u5247\u63a8\u5c0e\u51fa\u8b8a\u6578\u578b\u5225\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u96d6\u6c92\u6709\u8a3b\u8a18\u8b8a\u6578 myName \u578b\u5225\uff0c\u4f46 TS \u80fd\u81ea\u52d5\u63a8\u8ad6\u5176\u578b\u5225\u70ba \"string\"\nlet myName = 'Alice';\n\n//\u56e0\u6b64\uff0c\u7576\u5617\u8a66\u8ce6\u4e88\u8b8a\u6578 myName \u5176\u4ed6\u578b\u5225\u7684\u503c\u6642\uff08\u5982 \"number\" 12\uff09\uff0c\u5247\u6703\u5831\u932f\u3002\nmyName = 12;\n\n//TS Error: Type 'number' is not assignable to type 'string'.\n")),(0,a.kt)("h2",{id:"\u539f\u59cb\u8cc7\u6599\u578b\u5225"},"\u539f\u59cb\u8cc7\u6599\u578b\u5225"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"number"),(0,a.kt)("li",{parentName:"ul"},"string"),(0,a.kt)("li",{parentName:"ul"},"boolean"),(0,a.kt)("li",{parentName:"ul"},"null"),(0,a.kt)("li",{parentName:"ul"},"undefined")),(0,a.kt)("h2",{id:"ts-\u7279\u6b8a\u578b\u5225"},"TS \u7279\u6b8a\u578b\u5225"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"void\uff1a\u7a7a\u503c\uff0c\u6c92\u6709\u56de\u50b3\u503c\u7684\u51fd\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function sayHi(): void {\n  console.log('hi');\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"any\uff1a\u4efb\u610f\u578b\u5225\uff0c\u4e0d\u6703\u9032\u884c\u578b\u5225\u6aa2\u67e5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u82e5\u5ba3\u544a\u8b8a\u6578\u4f46\u672a\u8ce6\u503c\uff0c\u5247 TS \u6703\u9810\u8a2d\u5b83\u7684\u578b\u5225\u70ba any\nlet userName;\n\n//\u56e0\u6b64\uff0c\u8ce6\u4e88\u8a72\u8b8a\u6578\u4efb\u4f55\u578b\u5225\u7684\u503c\u90fd\u4e0d\u6703\u5831\u932f\nuserName = 'Annie';\nuserName = 100;\nuserName = true;\n")),(0,a.kt)("h2",{id:"\u51fd\u5f0f\u7684\u578b\u5225"},"\u51fd\u5f0f\u7684\u578b\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function add(a: number, b: number): number {\n  return a + b;\n}\n\nadd(1, 2); //3\n\n/** \u53c3\u6578\u578b\u5225\u6709\u8aa4\u6703\u5831\u932f */\nadd('100', 50); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.\n\n/** \u53c3\u6578\u6709\u5c11\u6703\u5831\u932f */\nadd(100); //Error: Expected 2 arguments, but got 1.\n\n/** \u53c3\u6578\u6709\u591a\u4e5f\u6703\u5831\u932f */\nadd(100, 50, 30); //Error: Expected 2 arguments, but got 3.\n")),(0,a.kt)("h3",{id:"\u53ef\u9078\u53c3\u6578"},"\u53ef\u9078\u53c3\u6578"),(0,a.kt)("p",null,"\u7576\u67d0\u53c3\u6578\u70ba\u53ef\u6709\u53ef\u7121\u6642\uff0c\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," \u8a3b\u8a18\uff0c\u6ce8\u610f\u53ef\u9078\u53c3\u6578\uff08optional parameter\uff09\u5fc5\u9808\u653e\u5728\u6700\u5f8c\u9762\uff0c\u4e5f\u5c31\u662f\u8aaa\u53ef\u9078\u53c3\u6578\u5f8c\u9762\u4e0d\u80fd\u653e\u5fc5\u8981\u53c3\u6578\uff08required parameter\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u53c3\u6578 c \u8a3b\u8a18\u70ba optional\uff0cTS \u6703\u8996\u5176\u578b\u5225\u70ba number \u6216\u662f undefined\nconst multiply = (a: number, b: number, c?: number): number => {\n  //\u56e0\u6b64\uff0c\u9700\u5148\u5224\u65b7 c \u662f\u5426\u70ba undefined\uff0c\u518d\u4f9d\u60c5\u6cc1\u9032\u884c\u4e0d\u540c\u904b\u7b97\n  if (c) {\n    //\u7576\u6709\u50b3\u5165\u53c3\u6578 c \u6642\n    return a * b * c;\n  } else {\n    //\u6c92\u6709\u50b3\u5165\u53c3\u6578 c \u6642\n    return a * b;\n  }\n};\n\nmultiply(1, 2);\nmultiply(1, 2, 3);\n")),(0,a.kt)("h3",{id:"\u53c3\u6578\u9810\u8a2d\u503c"},"\u53c3\u6578\u9810\u8a2d\u503c"),(0,a.kt)("p",null,"ES6 \u4e2d\uff0c\u53ef\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," \u8ce6\u4e88\u53c3\u6578\u9810\u8a2d\u503c\uff0c\u7576\u6c92\u6709\u50b3\u5165\u8a72\u53c3\u6578\u6642\uff0c\u5247\u6703\u81ea\u52d5\u4f7f\u7528\u9810\u8a2d\u503c\u9032\u884c\u904b\u7b97\u3002\n\u800c TS \u4e5f\u6703\u81ea\u52d5\u5c07\u6709\u8a2d\u5b9a\u9810\u8a2d\u503c\u7684\u53c3\u6578\u8996\u70ba\u300c\u53ef\u9078\u53c3\u6578\u300d\uff0c\u4e0d\u9700\u8981\u53e6\u5916\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," \u9032\u884c\u8a3b\u8a18\uff0c\u4e14\u4e5f\u653e\u7684\u4f4d\u7f6e\u4e5f\u7121\u9650\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const multiply = (a: number, b: number, c: number = 1): number => {\n  return a * b * c;\n};\n")),(0,a.kt)("h2",{id:"\u9663\u5217\u7684\u578b\u5225"},"\u9663\u5217\u7684\u578b\u5225"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u578b\u5225\uff0b\u65b9\u62ec\u865f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/** \u6578\u5b57\u9663\u5217 **/\nlet numArray: number[];\n\nnumArray = [1, 2, 3];\nnumArray = [];\nnumArray = ['1', '2', '3']; //Error: Type 'string' is not assignable to type 'number'.\nnumArray = [undefined, 1, 2]; //Error: Type 'undefined' is not assignable to type 'number'.\n\n/** \u63a5\u53d7\u4efb\u610f\u578b\u5225\u7684\u9663\u5217 **/\nlet anyArray: any[] = [1, 2, 'a', true, {}, undefined, null];\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u9663\u5217\u6cdb\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let strArray: Array<string> = ['a', 'b', 'c'];\nstrArray = [true, false]; //Error: Type 'boolean' is not assignable to type 'string'.\n")),(0,a.kt)("h2",{id:"\u5b57\u9762\u91cf\u578b\u5225"},"\u5b57\u9762\u91cf\u578b\u5225"),(0,a.kt)("p",null,"\u5b57\u9762\u91cf\u578b\u5225\uff08Literal Type\uff09\u80fd\u5920\u5c07\u578b\u5225\u9650\u5b9a\u70ba\u7279\u5b9a\u7684\u503c\uff0c\u5982\u4ee5\u4e0b\u7bc4\u4f8b\u4e2d\uff0c\u5c07\u8b8a\u6578 myTheme \u7684\u578b\u5225\u8a2d\u5b9a\u70ba 'dark' | 'light'\uff0c\u610f\u5473\u8457 myTheme \u7684\u503c\u5fc5\u9808\u662f 'dark' \u6216\u662f 'light' \u5176\u4e2d\u4e00\u8005\uff0c\u9664\u6b64\u4e4b\u5916\u7684\u503c\u6703\u5831\u932f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let myTheme: 'dark' | 'light';\nmyTheme = 'light'; //OK\nmyTheme = 'gray'; //Error: Type '\"gray\"' is not assignable to type '\"dark\" | \"light\"'.\n")),(0,a.kt)("h2",{id:"\u5143\u7d44-tuple"},"\u5143\u7d44 Tuple"),(0,a.kt)("p",null,"Tuple \u53ef\u4ee5\u88ab\u8996\u70ba\u4e00\u7a2e\u56b4\u683c\u7248\u672c\u7684\u9663\u5217\uff0c\u5176\u5143\u7d20\u7684\u6578\u91cf\u548c\u578b\u5225\u90fd\u662f\u5df2\u77e5\u4e14\u56fa\u5b9a\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let myTuple: [number, string, boolean];\nmyTuple = [1, 'hello', true];\nmyTuple = [1, 100, true]; //Error: Type 'number' is not assignable to type 'string'.\n")),(0,a.kt)("h2",{id:"\u5217\u8209-enum"},"\u5217\u8209 Enum"),(0,a.kt)("p",null,"Enum \u662f\u4e00\u7a2e\u7528\u4f86\u7ba1\u7406\u540c\u985e\u5225\u5e38\u6578\uff08\u4f7f\u7528 const \u5ba3\u544a\u7684\u8b8a\u6578\uff09\u7684\u7d50\u69cb\uff0c\u4f7f\u7528 Enum \u53ef\u589e\u52a0\u7a0b\u5f0f\u78bc\u53ef\u8b80\u6027\u3002"),(0,a.kt)("h3",{id:"numeric-enum"},"Numeric Enum"),(0,a.kt)("p",null,"Enums \u7684\u6210\u54e1\u6703\u5f9e 0 \u958b\u59cb\u81ea\u52d5\u88ab\u8ce6\u4e88\u6578\u503c\uff0c\u4f9d\u6b21\u905e\u589e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'//\u5b9a\u7fa9 Enum\nenum Weekday {\n  Mon,\n  Tue,\n  Wed,\n  Thu,\n  Fri,\n}\n\n//\u5b58\u53d6 Enum \u6210\u54e1\nconsole.log(Weekday.Mon); //0\nconsole.log(Weekday.Wed); //2\n\n//\u53cd\u5411\u6620\u5c04 (Reverse Mapping)\nconsole.log(Weekday[0]); //"Mon"\nconsole.log(Weekday.Mon); //0\n')),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u81ea\u884c\u5b9a\u7fa9\u6578\u503c\uff0c\u800c\u6c92\u6709\u660e\u78ba\u8ce6\u503c\u7684\u6210\u54e1\u6703\u63a5\u7e8c\u4e0a\u4e00\u500b\u6210\u54e1\u7684\u503c\u9032\u884c\u905e\u589e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Weekday {\n  Mon = 1,\n  Tue,\n  Wed = 100,\n  Thu,\n  Fri,\n}\n\nconsole.log(Weekday.Mon); //1\nconsole.log(Weekday.Tue); //2\nconsole.log(Weekday.Wed); //100\nconsole.log(Weekday.Fri); //102\n")),(0,a.kt)("h3",{id:"string-enum"},"String Enum"),(0,a.kt)("p",null,"Enum \u6210\u54e1\u9664\u4e86\u53ef\u8ce6\u4e88\u6578\u503c\u5916\uff0c\u4e5f\u53ef\u4ee5\u662f\u5b57\u4e32\u3002\u8981\u6ce8\u610f\u7684\u662f String Enum \u4e26\u6c92\u6709 Reverse Mapping \u529f\u80fd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Direction {\n  Up = 'UP',\n  Down = 'DOWN',\n  Left = 'LEFT',\n  Right = 'RIGHT',\n}\n")),(0,a.kt)("h2",{id:"\u7269\u4ef6\u7684\u578b\u5225"},"\u7269\u4ef6\u7684\u578b\u5225"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//interface\ninterface Person {\n  name: string;\n  age: number;\n}\n//type alias\ntype Person = {\n  name: string;\n  age: number;\n};\n")),(0,a.kt)("h3",{id:"optional-properties-\u53ef\u9078\u5c6c\u6027"},"optional properties \u53ef\u9078\u5c6c\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u5c6c\u6027 gender \u70ba optional property\ninterface Person {\n  name: string;\n  age: number;\n  gender?: 'male' | 'female';\n}\n\nconst userA: Person = {\n  name: 'Monica',\n  age: 30,\n  gender: 'female',\n};\n\nconst userB: Person = {\n  name: 'Phoebe',\n  age: 31,\n};\n")),(0,a.kt)("h3",{id:"readonly-properties-\u552f\u8b80\u5c6c\u6027"},"readonly properties \u552f\u8b80\u5c6c\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Person {\n  name: string;\n  age: number;\n  gender?: 'male' | 'female';\n  readonly id: number;\n}\n\nconst userA: Person = {\n  name: 'Monica',\n  age: 30,\n  gender: 'female',\n  id: 1,\n};\n\nuserA.id = 100; //Error: Cannot assign to 'id' because it is a read-only property.\n")),(0,a.kt)("h3",{id:"index-signatures"},"Index Signatures"),(0,a.kt)("p",null,"\u6709\u6642\u9084\u4e0d\u6e05\u695a\u7269\u4ef6\u5167\u7e3d\u5171\u6703\u6709\u54ea\u4e9b\u5c6c\u6027\u6216\u662f\u5c6c\u6027\u975e\u5e38\u591a\u800c\u4e0d\u60f3\u4e00\u4e00\u5217\u51fa\u6642\uff0c\u53ef\u5229\u7528 Index Signatures\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Product {\n  //key \u53ef\u4ee5\u81ea\u884c\u547d\u540d\uff0c\u4e00\u822c\u5927\u591a\u7fd2\u6163\u4f7f\u7528 key\n  [key: string]: string | number;\n}\n\nconst productA: Product = {\n  name: 'productName',\n  date: '2024/12/25',\n  price: 500,\n};\n")),(0,a.kt)("h2",{id:"union-\u806f\u96c6--intersection-\u4ea4\u96c6"},"Union \u806f\u96c6 & Intersection \u4ea4\u96c6"),(0,a.kt)("p",null,"\u4f7f\u7528\u7a0b\u5f0f\u7684\u908f\u8f2f\u904b\u7b97\u5b50\uff08&& , ||\uff09\u4f86\u7406\u89e3 TS \u88e1\u9762\u7684 Union \u548c Intersection \u578b\u5225\u6703\u7c21\u55ae\u8a31\u591a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Union \u806f\u96c6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u8b8a\u6578 strOrNum \u7684\u578b\u5225\u70ba string \u6216 number\uff0c\u9664\u6b64\u4e4b\u5916\u7684\u503c\u90fd\u6703\u5831\u932f\nlet strOrNum: string | number;\nstrOrNum = 999;\nstrOrNum = 'Typescript is fun';\nstrOrNum = undefined; //Error: Type 'undefined' is not assignable to type 'string | number'\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u5728\u7269\u4ef6\u578b\u5225\u6642\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Dog {\n  age: number;\n  isBarking: boolean;\n}\n\ninterface Cat {\n  color: string;\n  isMeowing: boolean;\n}\n\n//Pet\uff1a\u5fc5\u9808\u7b26\u5408 Dog \u6216 \u7b26\u5408 Cat\ntype Pet = Dog | Cat;\n\n//OK! \u5c6c\u6027\u7686\u7b26\u5408 Dog\nconst johnPet: Pet = {\n  age: 5,\n  isBarking: true,\n};\n\n//OK! \u5c6c\u6027\u7686\u7b26\u5408 Cat\nconst anniePet: Pet = {\n  color: 'black',\n  isMeowing: false,\n};\n\n//OK! \u5c6c\u6027\u7b26\u5408 Dog\uff0c\u96d6\u7136\u591a\u4e86\u5c6c\u6027 isMeowing \u4f46\u9084\u662f OK\uff01\nconst tedPet: Pet = {\n  age: 5,\n  isBarking: true,\n  isMeowing: false,\n};\n\n/** \u4ee5\u4e0b\u7bc4\u4f8b\u6703\u5831\u932f **/\n//\u65e2\u4e0d\u7b26\u5408 Dog\uff0c\u4e5f\u4e0d\u7b26\u5408 Cat\nconst rosePet: Pet = {\n  isBarking: true,\n  isMeowing: false,\n};\n//\u7a7a\u7269\u4ef6\u4e5f\u4e0d\u7b26\u5408 Dog\u3001Car\nconst noPet: Pet = {};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Intersection \u4ea4\u96c6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IProductInfo {\n  name: string;\n  price: number;\n}\n\ninterface IProductAppearance {\n  width: number;\n  height: number;\n  color: 'red' | 'blue' | 'green';\n}\n\ntype Product = IProductInfo & IProductAppearance;\n\nconst myProduct: Product = {\n  name: 'box',\n  price: 12,\n  width: 100,\n  height: 50,\n  color: 'red',\n};\n\n/** \u4ee5\u4e0b\u70ba\u5831\u932f\u793a\u7bc4 **/\n\n//\u591a\u4e86\u5c6c\u6027 id\nconst productA: Product = {\n  name: 'bottle',\n  price: 350,\n  width: 100,\n  height: 50,\n  color: 'blue',\n\n  id: 10, //Error: Object literal may only specify known properties, and 'id' does not exist in type 'Product'.\n};\n\n//\u5c11\u4e86\u5c6c\u6027 color\nconst productB: Product = {\n  name: 'pen',\n  price: 10,\n  width: 5,\n  height: 20,\n};\n\n//\u7a7a\u7269\u4ef6\u4e5f\u4e0d\u884c\nconst noProduct: Product = {};\n")),(0,a.kt)("h2",{id:"\u578b\u5225\u65b7\u8a00-type-assertion"},"\u578b\u5225\u65b7\u8a00 Type Assertion"),(0,a.kt)("p",null,"Type Assertion \u662f\u4e00\u7a2e\u7531\u958b\u767c\u8005\u4e3b\u52d5\u544a\u8a34 TS \u7de8\u8b6f\u5668\u67d0\u500b\u8b8a\u6578\u7684\u78ba\u5207\u578b\u5225\u7684\u65b9\u5f0f\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 document.getElementById('...') \u4f86\u9078\u53d6\u5143\u7d20\u6642\uff0cTS \u50c5\u50c5\u77e5\u9053\u6703\u56de\u50b3 HTMLElement\uff0c\u4f46\u8eab\u70ba\u958b\u767c\u8005\u7684\u6211\u5011\u9019\u6642\u6240\u64c1\u6709\u7684\u8cc7\u8a0a\u6bd4 TS \u9084\u591a\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u900f\u904e\u578b\u5225\u65b7\u8a00\u4f86\u544a\u8a34 TS \u66f4\u7cbe\u78ba\u7684\u578b\u5225\u70ba\u4f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u578b\u5225\u65b7\u8a00\u6709\u5169\u7a2e\u8868\u9054\u65b9\u5f0f\uff1a\n/** `as` keyword **/\nconst myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;\n\n/** angle-bracket syntax **/\nconst myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas');\n")))}m.isMDXComponent=!0}}]);