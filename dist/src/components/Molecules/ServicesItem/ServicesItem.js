import e from"react";import{styled as i,css as t}from"../../../styles/styled.js";import{Picture as r}from"../../Atoms/Picture/Picture.js";import{Heading as a}from"../../Atoms/Typography/Heading/Heading.js";import{CopyText as n}from"../../Atoms/Typography/CopyText/CopyText.js";var o=i(r).withConfig({displayName:"ServicesItem__ServicesItemImage",componentId:"sc-13ovq3w-0"})(["position:absolute;top:0;right:0;bottom:0;opacity:0.2;filter:alpha(opacity=20);-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';transition:all 0.3s linear;z-index:1;@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.img-cover{display:none;visibility:hidden;}}"]),l=i.div.withConfig({displayName:"ServicesItem__ServicesWrapper",componentId:"sc-13ovq3w-1"})(["position:relative;width:100%;height:100%;transition:all 0.3s linear;z-index:10;padding:",";background:"," no-repeat center center;&:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;}&:hover{transition:all 0.3s linear;img{opacity:0;filter:alpha(opacity=0);-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';transition:all 0.3s linear;}.the-overline{background:",";}}"],(function(e){return e.theme.spacing.base.md}),(function(e){var i=e.variant,t=e.theme;return"light"===i?t.color.white:t.color.black}),(function(e){var i=e.variant,t=e.theme;return"light"===i?t.color.black:t.color.alert})),s=i.div.withConfig({displayName:"ServicesItem__ServicesItemContent",componentId:"sc-13ovq3w-2"})(["position:relative;z-index:3;"]),c=i(a).withConfig({displayName:"ServicesItem__PostTitle",componentId:"sc-13ovq3w-3"})(["transition:all 0.3s linear;",""],(function(e){e.theme;var i=e.variant;return t("light"===i?["&:hover{color:#ff264a;.the-overline{background:#fff;}}"]:["color:white;&:hover{color:#fff;.the-overline{background:#ff264a;}}"])})),m=function(i){var t=i.title,r=i.description,m=i.backgroundImage,v=i.number,d=i.variant,p=i.withOverline,h=void 0===p||p,f=i.limitLines,g=i.children;return e.createElement(l,{variant:d},e.createElement(s,null,e.createElement("div",{className:"inner-divider"}),e.createElement("div",{className:"post-all inner-spacer-services"},e.createElement(a,{scale:"level-5",margin:"0",className:"services-sub-header-dark"},v),e.createElement("div",{className:"inner-divider-half"}),h&&e.createElement("div",{className:"the-overline services-dark the-overline-services"}),e.createElement("div",{className:"inner-divider-half"}),e.createElement(c,{scale:"level-2",tag:"div",uppercase:!0,variant:d},t),e.createElement("div",{className:"inner-divider-services"}),e.createElement("div",{className:"section-txt-services section-txt-services-dark"},e.createElement(n,{limitLines:f,color:"grey4",textAlign:"left"},r),g)),e.createElement("div",{className:"inner-divider"})),e.createElement(o,{alt:"Services Img",src:m}))};export{c as PostTitle,m as ServicesItem,s as ServicesItemContent,o as ServicesItemImage,l as ServicesWrapper};
//# sourceMappingURL=ServicesItem.js.map
