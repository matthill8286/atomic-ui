import{objectWithoutProperties as o,extends as r}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import i from"react";import{Typo as t}from"../Typo/Typo.js";var e=function(o){return!o||"xs"!==o&&"sm"!==o?"":"xs 0 md"},n=function(n){var l=n.tag,a=void 0===l?"p":l,s=n.withMargins,d=void 0!==s&&s,m=n.bold,g=void 0!==m&&m,p=n.color,c=void 0===p?"grey5":p,u=n.fontSize,f=void 0===u?"xs":u,v=n.children,b=n.margin,h=o(n,["tag","withMargins","bold","color","fontSize","children","margin"]);return i.createElement(t,r({tag:a,color:c,fontSize:f,weight:g?"bold":"regular",margin:d&&f&&e("string"==typeof f?f:null==f?void 0:f.mobile)||b},h),v)};n.displayName="CopyText";export{n as CopyText};
//# sourceMappingURL=CopyText.js.map
