"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u3010D3.js\u3011\u7c21\u4ecb\uff1a\u57fa\u672c\u64cd\u4f5c - Part 1"},i=void 0,p={unversionedId:"Frontend/d3-part1",id:"Frontend/d3-part1",title:"\u3010D3.js\u3011\u7c21\u4ecb\uff1a\u57fa\u672c\u64cd\u4f5c - Part 1",description:"\u7c21\u4ecb",source:"@site/docs/Frontend/d3-part1.md",sourceDirName:"Frontend",slug:"/Frontend/d3-part1",permalink:"/Annie-Docusaurus/docs/Frontend/d3-part1",draft:!1,tags:[],version:"current",frontMatter:{title:"\u3010D3.js\u3011\u7c21\u4ecb\uff1a\u57fa\u672c\u64cd\u4f5c - Part 1"},sidebar:"docSidebar",previous:{title:"Hello Docusaurus!",permalink:"/Annie-Docusaurus/docs/intro"},next:{title:"\u3010D3.js\u3011\u7c21\u4ecb\uff1a\u8cc7\u6599\u9a45\u52d5 - Part 2",permalink:"/Annie-Docusaurus/docs/Frontend/d3-part2"}},o={},d=[{value:"\u7c21\u4ecb",id:"intro",level:2},{value:"\u74b0\u5883\u8a2d\u5b9a",id:"setup",level:2},{value:"\u57fa\u672c\u8a9e\u6cd5",id:"syntax",level:2},{value:"Select: \u9078\u53d6 DOM \u5143\u7d20",id:"select-\u9078\u53d6-dom-\u5143\u7d20",level:3},{value:"Manipulation: \u64cd\u4f5c DOM \u5143\u7d20",id:"manipulation-\u64cd\u4f5c-dom-\u5143\u7d20",level:3},{value:"\u5c0f\u7df4\u7fd2\uff1a\u88fd\u4f5c\u8056\u8a95\u6a39",id:"practice",level:2},{value:"Resources",id:"resources",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"\u7c21\u4ecb"),(0,r.kt)("p",null,"D3 \u662f Data-Driven Documents\uff08\u8cc7\u6599\u9a45\u52d5\u6587\u4ef6\uff09\u7684\u7e2e\u5beb\uff0c\u662f\u500b\u8cc7\u6599\u8996\u89ba\u5316\u7684 JS \u51fd\u5f0f\u5eab\u3002\n\u6bd4\u8d77\u5176\u4ed6\u8cc7\u6599\u8996\u89ba\u5316\u5de5\u5177\uff0cD3 \u7d66\u4e86\u958b\u767c\u8005\u66f4\u591a\u7684\u638c\u63a7\u6b0a\uff0c\u66f4\u80fd\u5920\u96a8\u5fc3\u6240\u6b32\u5730\u5275\u5efa\u8996\u89ba\u5716\u5f62\uff0c\u56e0\u6b64\u5b78\u7fd2\u9580\u6abb\u4e5f\u76f8\u5c0d\u9ad8\u4e86\u4e00\u4e9b\uff08\u6211\u89ba\u5f97\u5566 \ud83e\udd23\uff09"),(0,r.kt)("h2",{id:"setup"},"\u74b0\u5883\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u65b9\u6cd5\u4e00\u3001CDN \u8f09\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-=html"},'<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js" integrity="sha512-M7nHCiNUOwFt6Us3r8alutZLm9qMt4s9951uo8jqO4UwJ1hziseL6O3ndFyigx6+LREfZqnhHxYjKRJ8ZQ69DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n')),(0,r.kt)("p",null,"\u65b9\u6cd5\u4e8c\u3001npm \u5b89\u88dd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install d3\n")),(0,r.kt)("h2",{id:"syntax"},"\u57fa\u672c\u8a9e\u6cd5"),(0,r.kt)("h3",{id:"select-\u9078\u53d6-dom-\u5143\u7d20"},"Select: \u9078\u53d6 DOM \u5143\u7d20"),(0,r.kt)("p",null,"d3 \u63d0\u4f9b\u4e86\u5169\u7a2e\u9078\u53d6 DOM \u5143\u7d20\u7684\u65b9\u5f0f\uff0c\u90fd\u662f\u900f\u904e\u50b3\u5165 CSS \u9078\u64c7\u5668\u4f86\u6307\u540d\u8981\u9078\u53d6\u7684\u5143\u7d20\u70ba\u4f55\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d3.select(\u201ccss selector\u201d)"),"\uff1a\u56de\u50b3\u7b2c\u4e00\u500b\u7b26\u5408\u9078\u64c7\u5668\u7684\u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d3.selectAll(\u201ccss selector\u201d)"),"\uff1a\u56de\u50b3\u6240\u6709\u7b26\u5408\u9078\u64c7\u5668\u7684\u5143\u7d20")),(0,r.kt)("p",null,"\ud83d\udccc \u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-=html"},'<div class="container">\n  <p></p>\n  <p></p>\n  <p></p>\n</div>\n')),(0,r.kt)("p",null,"\u82e5\u8981\u9078\u53d6\u5916\u5c64\u7684 div\uff0c\u53ef\u4ee5\u9019\u6a23\u5beb\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"d3.select(\u201c.container\u201d)")),(0,r.kt)("p",null,"\u82e5\u8981\u9078\u53d6 div \u88e1\u9762\u6240\u6709 p\uff0c\u53ef\u4ee5\u9019\u6a23\u5beb\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"d3.selectAll(\u201cp\u201d)")),(0,r.kt)("h3",{id:"manipulation-\u64cd\u4f5c-dom-\u5143\u7d20"},"Manipulation: \u64cd\u4f5c DOM \u5143\u7d20"),(0,r.kt)("p",null,"\u5b78\u6703\u9078\u53d6 DOM \u5143\u7d20\u5f8c\uff0c\u4e0b\u4e00\u6b65\u5c31\u662f\u8981\u8a66\u8457\u91dd\u5c0d\u5df2\u9078\u53d6\u7684 DOM \u5143\u7d20\u9032\u884c\u64cd\u4f5c\uff0cD3 \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".attr(\u201cname\u201d, \u201cvalue\u201d)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u5143\u7d20\u5c6c\u6027\uff08attribute\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".classed(\u201cclass\u201d, boolean)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5957\u7528\u6216\u4e0d\u5957\u7528\u7279\u5b9a CSS class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".style(\u201cname\u201d, \u201cvalue\u201d)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e CSS \u6a23\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".property\uff1a\u65b0\u589e\u5143\u7d20\u5c6c\u6027\uff08property\uff09")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u5143\u7d20\u5c6c\u6027\uff08property\uff09\uff0c\u4f8b\u5982 input \u7684 checked property")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".text(\u201ccontent\u201d)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e/\u4fee\u6539\u5143\u7d20\u5167\u6587\u5b57\u5167\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".html(\u201ccontent\u201d)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u5143\u7d20\u5167 html \u5167\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".append(\u201celement name\u201d)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5143\u7d20\u5167\u7684\u6700\u5f8c\u65b9\u65b0\u589e\u65b0\u7684\u5143\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".insert(\u201cname\u201d, \u201cbefore\u201d)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5143\u7d20\u5167\u5f8c\u65b9\u63d2\u5165")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".remove()")),(0,r.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u5143\u7d20")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u270f\ufe0f \u5982\u679c insert() \u6c92\u6709\u6307\u5b9a\u8981\u5728\u8ab0\u7684\u5f8c\u65b9\u63d2\u5165\uff0c\u5247\u7d50\u679c\u6703\u548c .append() \u4e00\u6a23\u3002")),(0,r.kt)("h2",{id:"practice"},"\u5c0f\u7df4\u7fd2\uff1a\u88fd\u4f5c\u8056\u8a95\u6a39"),(0,r.kt)("p",null,"\u61c9\u7528\u524d\u9762\u6240\u5b78\u7684 D3 \u8a9e\u6cd5\u4f86\u88fd\u4f5c\u4e00\u68f5\u4e00\u9ede\u90fd\u4e0d\u8056\u8a95\u7684 SVG \u8056\u8a95\u6a39\u5427\uff01"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"christmas-tree",src:n(8496).Z,width:"1384",height:"634"}),"\nP.S. \u5f8c\u9762\u7684\u7df4\u7fd2\u70ba\u6c42\u65b9\u4fbf\u5feb\u901f\uff0c\u6211\u6703\u4f7f\u7528 CDN \u8f09\u5165 \u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b65\u9a5f\u62c6\u89e3\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f09\u5165 D3.js (\u4f7f\u7528 CDN)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js" integrity="sha512-M7nHCiNUOwFt6Us3r8alutZLm9qMt4s9951uo8jqO4UwJ1hziseL6O3ndFyigx6+LREfZqnhHxYjKRJ8ZQ69DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5206\u6790\u5716\u578b"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"<polygon>")," \u88fd\u4f5c\u6a39\u7684\u4e09\u5c64"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"<rect>")," \u88fd\u4f5c\u6a39\u6728\u5e95\u5ea7"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"<circle>")," \u88fd\u4f5c\u71c8\u98fe")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u64ec\u5b9a HTML \u67b6\u69cb"),(0,r.kt)("p",{parentName:"li"},"\u5148\u64ec\u5b9a\u51fa\u6a39\u7684\u4e09\u5c64\uff0c\u5176\u4ed6\u6771\u897f\u7df4\u7fd2\u4f7f\u7528 d3 \u7684 append() \u4f9d\u5e8f\u52a0\u4e0a\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-=html"},'<svg height="500" width="500">\n<polygon id="top"/>\n<polygon id="middle"/>\n<polygon id="bottom"/>\n</svg>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u904b\u7528 D3 \u64cd\u4f5c DOM \u5143\u7d20"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u7c21\u55ae\u793a\u7bc4\u5982\u4f55\u505a\u51fa\u6700\u4e0a\u5c64\u7684\u6a39\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-=js"},'d3.select("#top").attr("points", "300,10 250,60 350,60")\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".select(#top)"),"\uff1a\u9078\u53d6 ",(0,r.kt)("inlineCode",{parentName:"li"},'<polygon id="top"/>')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'.attr("point", "....")'),"\uff1a\u65b0\u589e point attribute \u756b\u51fa\u4e09\u89d2\u5f62")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u9084\u4e0d\u592a\u8a8d\u8b58 SVG \u53ef\u80fd\u6703\u88ab\u90a3\u4e32\u6578\u5b57\u7d66\u5687\u5230\uff0c\u4e0d\u679c\u53ea\u8981\u60f3\u50cf\u81ea\u5df1\u5728\u5ea7\u6a19\u4e0a\u73a9\u9023\u9023\u770b\u5c31\u6703\u7c21\u55ae\u8a31\u591a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u60f3\u50cf\u529b\u5c31\u662f\u4f60\u7684\u8d85\u80fd\u529b"),(0,r.kt)("p",{parentName:"li"},"\u767c\u63ee\u60f3\u50cf\u529b\u66ff\u8056\u8a95\u6a39\u52a0\u4e0a\u4e00\u4e9b\u88dd\u98fe\u5427\uff5e\n\u9019\u908a\u9644\u4e0a\u6211\u7684 codepen \u9023\u7d50\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/annie-chien/pen/vYvKBYd"},"\u4e00\u9ede\u90fd\u4e0d\u8056\u8a95\u7684\u8056\u8a95\u6a39 SVG")))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/d3js-tutorial-data-visualization-for-beginners/"},"D3.js Tutorial \u2013 Data Visualization for Beginners")))}u.isMDXComponent=!0},8496:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tree-3251920f855380b7731beaafbae895d1.png"}}]);