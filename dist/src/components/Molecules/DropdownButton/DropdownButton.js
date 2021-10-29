import t from"react";import{styled as e,css as n}from"../../../styles/styled.js";import{Card as o}from"../../Atoms/Card/CardV2.js";import{Button as i}from"../../Atoms/Button/Button.js";import{Icon as r}from"../../Atoms/Icon/Icon.js";import{CopyText as a}from"../../Atoms/Typography/CopyText/CopyText.js";import{Picture as s}from"../../Atoms/Picture/Picture.js";import{isNonEmptyString as c}from"../../Helper/String/String.js";import d from"../../../../node_modules/@excelwithbusiness/webmobile-svg-library/dist/components/styleguide/StyleguideArrow.js";var l=e.div.withConfig({displayName:"DropdownButton__StyledContainer",componentId:"sc-37sbvi-0"})(["order:3;position:relative;"]),m=e(o).attrs((function(){return{elevation:2,shape:"rounded-small",noBorder:"none",padding:"0"}})).withConfig({displayName:"DropdownButton__StyledDropdown",componentId:"sc-37sbvi-1"})(["position:",";left:-100px;top:",";width:280px;margin:"," 0 0 0;opacity:0;visibility:hidden;z-index:99;transform:translateY(-",");transition:",";",""],(function(t){return t.isMobile?"relative":"absolute"}),(function(t){var e=t.theme;return t.isMobile?0:e.spacing.base.xxxl}),(function(t){return t.theme.spacing.base.sm}),(function(t){return t.theme.spacing.base.sm}),(function(t){var e=t.theme.transition,n=e.short,o=e.defaultEasing;return"visibility ".concat(n," ").concat(o,", opacity ").concat(n," ").concat(o,", transform ").concat(n," ").concat(o)}),(function(t){return t.showDropdown?n(["opacity:1;visibility:visible;transform:translateY(0);"]):""})),p=e(i).withConfig({displayName:"DropdownButton__StyledButton",componentId:"sc-37sbvi-2"})(["padding:0 ",";align-items:center;background-color:transparent;border-color:transparent;border-radius:",";cursor:pointer;:active,:focus{outline:none;}:hover{box-shadow:none;}","{padding:0;}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){width:130px;}&::-moz-focus-inner{border:0;}"],(function(t){return t.theme.spacing.base.xs}),(function(t){return t.theme.dimension.borderRadius1}),r),u=e.div.withConfig({displayName:"DropdownButton__StyledContentGrid",componentId:"sc-37sbvi-3"})(["display:flex;flex-wrap:wrap;"]),h=e(a).attrs((function(){return{tag:"span",bold:!0,color:"grey5",fontSize:"sm"}})).withConfig({displayName:"DropdownButton__StyledLabel",componentId:"sc-37sbvi-4"})(["justify-self:start;white-space:nowrap;"]),f=e(r).attrs((function(){return{color:"grey5",alignContent:"center"}})).withConfig({displayName:"DropdownButton__StyledIcon",componentId:"sc-37sbvi-5"})(["margin:0;align-self:center;"]),g=e(a).attrs((function(){return{tag:"span",color:"grey5",lineHeight:"sm"}})).withConfig({displayName:"DropdownButton__StyledAdditionalLabel",componentId:"sc-37sbvi-6"})(["grid-column:1 / 3;justify-self:start;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:9em;min-height:",";"],(function(t){return t.theme.font.lineHeight.sm})),y=e(s).withConfig({displayName:"DropdownButton__StyledPictureElement",componentId:"sc-37sbvi-7"})(["img{border-radius:50%;}"]),w=function(e){var n=e.onClick,o=e.additionalLabel,i=e.isOpen,r=void 0!==i&&i,a=e.label,s=e.height,l=e.width,m=e.secondaryIcon,w=void 0!==m&&m,b=e.primaryIcon,v=e.className,x=e.pictureSrc;return t.createElement(p,{className:v,actionType:"ghost",onClick:n},t.createElement(u,null,t.createElement(h,null,a),!c(x)&&b&&t.createElement(f,{height:s||l,width:l,padding:"0"},b),c(x)&&t.createElement(y,{height:s||l,width:l,src:x,alt:"Picture"}),w&&t.createElement(f,{width:16,height:16,rotate:r?270:90,animate:!0},t.createElement(d,null)),o&&t.createElement(g,null,o)))};export{w as DropdownButton,l as StyledContainer,m as StyledDropdown};
//# sourceMappingURL=DropdownButton.js.map
