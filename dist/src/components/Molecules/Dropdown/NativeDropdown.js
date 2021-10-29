import e from"react";import{styled as o,css as n}from"../../../styles/styled.js";import t from"../../../../node_modules/@excelwithbusiness/webmobile-svg-library/dist/components/icon/IconArticle.js";import{CopyText as i}from"../../Atoms/Typography/CopyText/CopyText.js";import{media as r}from"../../../styles/media.js";import{Icon as a}from"../../Atoms/Icon/Icon.js";var l=o(i).withConfig({displayName:"NativeDropdown__StyledLabel",componentId:"sc-25g2j-0"})(["position:relative;display:block;width:calc(100% - ",");height:",";padding:0 12px;"," border-radius:",";box-shadow:",";","{width:",";height:",";padding:0;}"],(function(e){return e.theme.spacing.base.md}),(function(e){return e.theme.spacing.base.xxl}),(function(e){var o=e.theme;return!e.noBorder&&"border: 2px solid ".concat(o.color.grey5,";")}),(function(e){return e.theme.dimension.borderRadius3}),(function(e){return e.theme.dimension.elevationLevel2}),r.mobile,(function(e){return e.theme.spacing.base.lg}),(function(e){return e.theme.spacing.base.lg})),c=o.select.withConfig({displayName:"NativeDropdown__StyledSelect",componentId:"sc-25g2j-1"})(["appearance:none;border:none;display:block;overflow:hidden;outline:none;white-space:nowrap;text-overflow:ellipsis;background-color:transparent;box-shadow:none;cursor:pointer;width:100%;height:",";padding:"," 0;z-index:1;color:",";","{width:",";height:",";padding:0;color:transparent;}"],(function(e){return e.theme.spacing.base.xxl}),(function(e){return e.theme.spacing.base.xs}),(function(e){return e.theme.color.black}),r.mobile,(function(e){return e.theme.spacing.base.lg}),(function(e){return e.theme.spacing.base.lg})),s=n(["position:absolute;z-index:-1;"]),d=o(a).withConfig({displayName:"NativeDropdown__StyledIcon",componentId:"sc-25g2j-2"})([""," background-color:",";right:14px;top:14px;","{right:6px;top:6px;","}"],s,(function(e){var o=e.theme;return e.withBgColor?o.color.white:"transparent"}),r.mobile,(function(e){return e.hasMobileIcon&&"display: none;"})),p=o(a).withConfig({displayName:"NativeDropdown__StyledMobileIcon",componentId:"sc-25g2j-3"})([""," background-color:",";top:0;display:none;","{display:block;}"],s,(function(e){var o=e.theme;return e.withBgColor?o.color.white:"transparent"}),r.mobile),m=function(o){var n=o.className,i=o.children,r=o.icon,a=o.iconMobile,s=o.iconRotate,m=void 0===s?90:s,h=o.iconMobileRotate,g=void 0===h?90:h,u=o.noBorder,b=void 0!==u&&u,w=o.withBgColor,f=void 0===w||w,y=o.margin,v=o.padding,x=o.onChange,C=o.value;return e.createElement(l,{className:n,margin:y,padding:v,fontSize:"sm",lineHeight:"sm",noBorder:b,tag:"label"},e.createElement(c,{value:C,onChange:x},i),e.createElement(d,{rotate:m,withBgColor:f,width:20,height:20,hasMobileIcon:!!a},r||e.createElement(t,null)),a&&e.createElement(p,{rotate:g,withBgColor:f,width:20,height:20},a))};m.displayName="NativeDropdown";export{m as NativeDropdown};
//# sourceMappingURL=NativeDropdown.js.map
