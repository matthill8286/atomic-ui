import{toConsumableArray as r,slicedToArray as o}from"../../_virtual/_rollupPluginBabelHelpers.js";import{useInView as t}from"../../node_modules/react-intersection-observer/react-intersection-observer.m.js";var e,n;function c(r){var o=Array.prototype.slice.call(arguments,1);return o.join(r)}!function(r){r.svg="svg",r.jpg="jpg",r.png="png"}(e||(e={})),function(r){r.clip="clip",r.crop="crop",r.scale="scale",r.max="max"}(n||(n={}));var a=function(o,t){return t?"https://media.graphcms.com/".concat(c.apply(void 0,["/"].concat(r(t))),"/").concat(o):o?"https://media.graphcms.com/".concat(o):void 0},i=function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,c=t({triggerOnce:!0,threshold:.2}),i=o(c,2),p=i[0],s=i[1],l=r;return s||e||(l=r.map((function(r){return a(r,n)}))),[l,p]};export{e as DocumentOutput,n as ImageResizeFit,a as getTransformedImageVersion,i as useGraphCmsImages};
//# sourceMappingURL=useGraphCmsImages.js.map