import{media as t}from"../../../../styles/media.js";import{getBoxDimension as e}from"../../../../styles/sc-shared-functions.js";import{styled as i,css as o}from"../../../../styles/styled.js";import{FILTERED as s}from"../../../../styles/themes.js";var n=function(t,e,i){var o=i||e;return t.font.lineHeight[o]||t.font.lineHeight.sm},r=function(t,e){return e&&t.font.size[e]||e||t.font.size.sm},p=function(t){var e=t.theme;return o(["list-style-type:disc;padding-left:",";& li{list-style-type:disc;}"],e.spacing.base.lg)},l=function(t){var e=t.theme;return o(["list-style-type:decimal;padding-left:",";& li{list-style-type:decimal;}"],e.spacing.base.lg)},a=i.div.withConfig({displayName:"Typostyled__StyledInfoTypo",componentId:"wu2pop-0"})((function(i){var a=i.theme,f=i.tag,c=i.display,d=i.background,u=i.borderRadius,m=i.color,g=i.fontSize,y=i.lineHeight,h=i.weight,b=i.fontFamily,z=i.limitLines,w=i.underline,v=i.spacing,k=i.margin,x=i.padding,j=i.textAlign,C=i.toUpperCase,H=i.showCursor;return o([""," "," "," font-size:",";line-height:",";font-family:",";font-weight:",";letter-spacing:",";"," ",";",";"," "," "," "," "," "," "," "," "," ",""],k?"margin: ".concat(e(a,k)||0,";"):"",x?"padding: ".concat(e(a,x)||0,";"):"",m?"color: ".concat(m&&a.color[m]||a.color.grey4,";"):"",g&&r(a,"string"==typeof g?g:g.mobile),g&&n(a,"string"==typeof g?g:g.mobile,y),b&&a.font.family[b]||a.font.family.default,h&&a.font.weight[h]||a.font.weight.regular,v?a.font.spacing[v]:"normal",C&&"text-transform: uppercase;",j?"text-align: ".concat(j):"",H?"cursor: pointer":"",c?"display: ".concat(c,";"):"",w?"text-decoration: underline;":"",d?"background: ".concat(a.color[d]||d,";"):"",u?"border-radius: ".concat(a.dimension[u]||"0",";"):"","sup"===f&&function(e,i){return i&&"string"==typeof i?o(["font-size:",";top:",";"],i&&e.font.superscript.size[i]||e.font.superscript.size.sm,i&&e.font.superscript.top[i]||e.font.superscript.top.sm):i&&null!=i&&i.mobile?o(["font-size:",";top:",";"],i&&e.font.superscript.size[i.mobile]||e.font.superscript.size.sm,i&&e.font.superscript.top[i.mobile]||e.font.superscript.top.sm):i&&null!=i&&i.tablet?o(["","{font-size:",";top:",";}"],t.md,i&&e.font.superscript.size[i.tablet]||e.font.superscript.size.sm,i&&e.font.superscript.top[i.tablet]||e.font.superscript.top.sm):i&&null!=i&&i.desktop?o(["","{font-size:",";top:",";}"],t.lg,i&&e.font.superscript.size[i.desktop]||e.font.superscript.size.sm,i&&e.font.superscript.top[i.desktop]||e.font.superscript.top.sm):void 0}(a,g),"ul"===f&&p,"ol"===f&&l,z&&z>0?1===z?o(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",""],"featured"===b&&a.name===s&&"padding-left: 2px;"):o(["white-space:normal;overflow:hidden;"," max-height:calc("," * ",");-webkit-line-clamp:",";display:-webkit-box;-webkit-box-orient:vertical;"],"featured"===b&&a.name===s&&"padding-left: 2px;",n(a,g,y),z,z):"",(null==g?void 0:g.tablet)&&o(["","{font-size:",";line-height:",";}"],t.md,r(a,g.tablet),n(a,g.tablet,y)),(null==g?void 0:g.desktop)&&o(["","{font-size:",";line-height:",";}"],t.lg,r(a,g.desktop),n(a,g.desktop,y)))}));export{a as StyledInfoTypo};
//# sourceMappingURL=Typo.styled.js.map
