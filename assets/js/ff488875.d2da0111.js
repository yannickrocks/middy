"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1531],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),p=r,f=c["".concat(o,".").concat(p)]||c[p]||m[p]||l;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),s=a(7392),o=a(7094),u=a(2466),d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a,i=e.lazy,c=e.block,p=e.defaultValue,f=e.values,h=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),w=N.tabGroupChoices,C=N.setTabGroupChoices,S=(0,r.useState)(g),x=S[0],O=S[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=w[h];null!=j&&j!==x&&y.some((function(e){return e.value===j}))&&O(j)}var E=function(e){var t=e.currentTarget,a=T.indexOf(t),n=y[a].value;n!==x&&(P(t),O(n),null!=h&&C(h,String(n)))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=T.indexOf(e.currentTarget)+1;a=null!=(n=T[r])?n:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;a=null!=(l=T[i])?l:T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},4785:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(5488),s=a(5162),o=["components"],u={title:"ssm"},d=void 0,m={unversionedId:"middlewares/ssm",id:"middlewares/ssm",title:"ssm",description:"This middleware fetches parameters from AWS Systems Manager Parameter Store.",source:"@site/docs/middlewares/ssm.md",sourceDirName:"middlewares",slug:"/middlewares/ssm",permalink:"/docs/middlewares/ssm",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/ssm.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"ssm"},sidebar:"tutorialSidebar",previous:{title:"sqs-partial-batch-failure",permalink:"/docs/middlewares/sqs-partial-batch-failure"},next:{title:"sts",permalink:"/docs/middlewares/sts"}},c={},p=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Bundling",id:"bundling",level:2}],f={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This middleware fetches parameters from ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html"},"AWS Systems Manager Parameter Store"),"."),(0,l.kt)("p",null,"Parameters to fetch can be defined by path and by name (not mutually exclusive). See AWS docs ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/mt/organize-parameters-by-hierarchy-tags-or-amazon-cloudwatch-events-with-amazon-ec2-systems-manager-parameter-store/"},"here"),"."),(0,l.kt)("p",null,"Parameters can be assigned to the function handler's ",(0,l.kt)("inlineCode",{parentName:"p"},"context")," object by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"setToContext")," flag to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". By default all parameters are added with uppercase names."),(0,l.kt)("p",null,"The Middleware makes a single API request to fetch all the parameters defined by name, but must make an additional request per specified path. This is because the AWS SDK currently doesn't expose a method to retrieve parameters from multiple paths."),(0,l.kt)("p",null,"For each parameter defined by name, you also provide the name under which its value should be added to ",(0,l.kt)("inlineCode",{parentName:"p"},"context"),". For each path, you instead provide a prefix, and by default the value import each parameter returned from that path will be added to ",(0,l.kt)("inlineCode",{parentName:"p"},"context")," with a name equal to what's left of the parameter's full name ",(0,l.kt)("em",{parentName:"p"},"after")," the defined path, with the prefix prepended. If the prefix is an empty string, nothing is prepended. You can override this behaviour by providing your own mapping function with the ",(0,l.kt)("inlineCode",{parentName:"p"},"getParamNameFromPath")," config option."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"To install this middleware you can use NPM:"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/ssm\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/ssm\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"AWS.SSM"),"): AWS.SSM class constructor (e.g. that has been instrumented with AWS X-Ray). Must be from ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-sdk")," v2."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (optional): Options to pass to AWS.SSM class constructor."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," (string) (optional): Internal key where role tokens are stored. See ",(0,l.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},"@middy/sts")," on to set this."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (optional): Enable AWS X-Ray by passing ",(0,l.kt)("inlineCode",{parentName:"li"},"captureAWSClient")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fetchData")," (object) (required): Mapping of internal key name to API request parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"Names"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"Path"),". ",(0,l.kt)("inlineCode",{parentName:"li"},"SecureString")," are automatically decrypted."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,l.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cacheKey")," (string) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"ssm"),"): Cache key for the fetched data responses. Must be unique across all middleware."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cacheExpiry")," (number) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"-1"),"): How long fetch data responses should be cached for. ",(0,l.kt)("inlineCode",{parentName:"li"},"-1"),": cache forever, ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),": never cache, ",(0,l.kt)("inlineCode",{parentName:"li"},"n"),": cache for n ms."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setToContext")," (boolean) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"): Store role tokens to ",(0,l.kt)("inlineCode",{parentName:"li"},"request.context"),".")),(0,l.kt)("p",null,"NOTES:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,l.kt)("inlineCode",{parentName:"li"},"ssm:GetParameters")," and/or ",(0,l.kt)("inlineCode",{parentName:"li"},"ssm:GetParametersByPath")," depending on what you're requesting."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSM")," has ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/ssm.html"},"throughput limitations"),". Switching to Advanced Parameter type or increasing ",(0,l.kt)("inlineCode",{parentName:"li"},"maxRetries")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"retryDelayOptions.base")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," may be required.")),(0,l.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport ssm from '@middy/ssm'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nlet globalDefaults = {}\nhandler\n  .use(ssm({\n    fetchData: {\n      accessToken: '/dev/service_name/access_token',  // single value\n      dbParams: '/dev/service_name/database/',        // object of values, key for each path\n      defaults: '/dev/defaults'\n    },\n    setToContext: true\n  }))\n  .before((request) => {\n    globalDefaults = request.context.defaults.global\n  })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport {getInternal} from '@middy/util'\nimport ssm from '@middy/ssm'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nlet globalDefaults = {}\nhandler\n  .use(ssm({\n    fetchData: {\n      defaults: '/dev/defaults'\n    },\n    cacheKey: 'ssm-defaults'\n  }))\n  .use(ssm({\n    fetchData: {\n      accessToken: '/dev/service_name/access_token',  // single value\n      dbParams: '/dev/service_name/database/',        // object of values, key for each path\n    },\n    cacheExpiry: 15*60*1000,\n    cacheKey: 'ssm-secrets'\n  }))\n  // ... other middleware that fetch\n  .before(async (request) => {\n    const data = await getInternal(['accessToken','dbParams','defaults'], request)\n    Object.assign(request.context, data)\n  })\n")),(0,l.kt)("h2",{id:"bundling"},"Bundling"),(0,l.kt)("p",null,"To exclude ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk")," add ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk/clients/ssm.js")," to the exclude list."))}h.isMDXComponent=!0}}]);