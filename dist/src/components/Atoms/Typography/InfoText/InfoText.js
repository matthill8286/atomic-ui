import{objectWithoutProperties as e,extends as o}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import r from"react";import{Typo as t}from"../Typo/Typo.js";var l=function(l){var i=l.tag,a=void 0===i?"span":i,s=l.scale,m=void 0===s?"small":s,n=l.color,c=void 0===n?"grey4":n,d=l.weight,g=l.fontSize,p=l.children,h=e(l,["tag","scale","color","weight","fontSize","children"]),x="small"===m,f="extra-small"===m,v="small-highlighted"===m,u=x||v?"xxs":f&&"xxxs",y=x||f?"regular":v&&"semibold";return r.createElement(t,o({tag:a,color:c,fontSize:g||u||void 0,weight:d||y||void 0},h),p)};l.displayName="InfoText";export{l as InfoText};
//# sourceMappingURL=InfoText.js.map
