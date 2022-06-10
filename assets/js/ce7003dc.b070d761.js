"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9071],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6949:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={title:"Inline Middlewares",position:3},s=void 0,d={unversionedId:"writing-middlewares/inline-middlewares",id:"writing-middlewares/inline-middlewares",title:"Inline Middlewares",description:"Sometimes you want to create handlers that serve a very small need and that are not",source:"@site/docs/writing-middlewares/03-inline-middlewares.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/inline-middlewares",permalink:"/docs/writing-middlewares/inline-middlewares",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/03-inline-middlewares.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:3,frontMatter:{title:"Inline Middlewares",position:3},sidebar:"tutorialSidebar",previous:{title:"Configurable Middlewares",permalink:"/docs/writing-middlewares/configurable-middlewares"},next:{title:"Internal Storage",permalink:"/docs/writing-middlewares/internal-storage"}},c={},p=[],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you want to create handlers that serve a very small need and that are not\nnecessarily re-usable. In such cases, you probably will need to hook only into one of\nthe different phases (",(0,o.kt)("inlineCode",{parentName:"p"},"before"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"after")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"onError"),")."),(0,o.kt)("p",null,"In these cases you can use ",(0,o.kt)("strong",{parentName:"p"},"inline middlewares")," which are shortcut functions to hook\nlogic into Middy's control flow."),(0,o.kt)("p",null,"Let's see how inline middlewares work with a simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\n\nexport const handler = middy((event, context) => {\n    // do stuff\n  })\n  .before(async (request) => {\n    // do something in the before phase\n  })\n  .after(async (request) => {\n    // do something in the after phase\n  })\n  .onError(async (request) => {\n    // do something in the on error phase\n  })\n")),(0,o.kt)("p",null,"As you can see above, a middy instance also exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"before"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"after")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onError"),"\nmethods to allow you to quickly hook in simple inline middlewares."))}m.isMDXComponent=!0}}]);