import{extends as e}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import*as t from"react";import{styled as n}from"../../../../styles/styled.js";import{Heading as i}from"../../../Atoms/Typography/Heading/Heading.js";import{Link as r}from"../../../Atoms/Link/Link.js";import{SkeletonInlineItem as o}from"../../../Atoms/Skeleton/SkeletonInlineItem.js";import{useWindowDimensions as a}from"../../../Helper/useWindowDimensions/useWindowDimensions.js";import{breakpoints as s}from"../../../../styles/sc-vars-global.js";import{FlexBox as l,FlexItem as m}from"../../../Helper/FlexBox/FlexBox.js";import{InfoText as p}from"../../../Atoms/Typography/InfoText/InfoText.js";import{CopyText as c}from"../../../Atoms/Typography/CopyText/CopyText.js";var d=n.div.withConfig({displayName:"AssetHeader__StyledAssetHeaderWrapper",componentId:"sc-1ym7gzi-0"})(["margin-bottom:",";margin-right:",";"],(function(e){return e.theme.spacing.base.sm}),(function(e){return e.theme.spacing.base.xs})),g=n(i).withConfig({displayName:"AssetHeader__StyledHeading",componentId:"sc-1ym7gzi-1"})(["width:90%;"]),f=n(r).withConfig({displayName:"AssetHeader__StyledLink",componentId:"sc-1ym7gzi-2"})(["display:inline;"]);n.span.withConfig({displayName:"AssetHeader__StyledManufacturer",componentId:"sc-1ym7gzi-3"})(["font-weight:",";"],(function(e){return e.theme.font.weight.bold})),n.div.withConfig({displayName:"AssetHeader__StyledEnergyEfficiencySlot",componentId:"sc-1ym7gzi-4"})(["margin-top:",";"],(function(e){return e.theme.spacing.base.xs}));var y=function(n){var i=n.headerFontSize,r=n.headerFontWeight,y=void 0===r?"semibold":r,u=n.href,h=n.target,x=n.loading,v=void 0!==x&&x,S=n.provider,E=n.showProvider,w=void 0===E||E,H=n.description;n.sublinePrice;var b=n.title;n.energyEfficiencySlot;var z=n.onClick;if(v)return t.createElement(d,null,t.createElement(o,{text:"Manufacturer",fontSize:"xs"})," ",t.createElement(o,{text:"Asset Line Item Headline",fontSize:"xs"}),w&&t.createElement(o,{text:"Subline",fontSize:"xxs",newLine:!0}));var A=S?b.replace(S,""):b,C=a().breakpoint<s.sm,_=function(){return t.createElement(g,{color:"black",fontSize:i||"lg",limitLines:3,lineHeight:C?"sm":"md",scale:"level-1",spacing:"half",tag:"div"},t.createElement(c,{fontSize:i||"lg",tag:"div",color:"grey6",weight:y},A))};return t.createElement(t.Fragment,null,w&&t.createElement(l,{flexWrap:"nowrap",justifyContent:"space-between"},H&&t.createElement(m,null,t.createElement(p,{"data-test":"learning-asset-provider",fontSize:"xs",toUpperCase:!0,margin:"0 0 xs",tag:"p",color:"grey5"},H))),u?t.createElement(f,e({inline:!1,underline:!1},h?{href:u,target:h,onClick:z}:{to:u,onClick:z}),t.createElement(_,null)):t.createElement(_,null))};export{y as AssetHeader};
//# sourceMappingURL=AssetHeader.js.map
