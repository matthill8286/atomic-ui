import{extends as e}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import*as t from"react";import{AssetSkills as i}from"./AssetSkills.js";import{css as n,styled as o}from"../../../../styles/styled.js";import{Typo as l}from"../../../Atoms/Typography/Typo/Typo.js";import{useWindowDimensions as r}from"../../../Helper/useWindowDimensions/useWindowDimensions.js";import{breakpoints as s}from"../../../../styles/sc-vars-global.js";import{SkeletonBlockItem as a}from"../../../Atoms/Skeleton/SkeletonBlockItem.js";import{Spacer as p}from"../../../Atoms/Spacer/Spacer.js";import{CopyText as m}from"../../../Atoms/Typography/CopyText/CopyText.js";var c=n(["min-height:44px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;"]),d=o.div.withConfig({displayName:"AssetTileContent__StyledProviderWrapper",componentId:"gdlwym-0"})(["flex-direction:row;width:100%;flex-wrap:wrap;display:flex;",""],(function(e){var t=e.isCompact;return"".concat(t?"\n  justify-content: flex-end;":"\n  justify-content: space-between;\n  ")})),f=o(l).withConfig({displayName:"AssetTileContent__StyledHeadingDescription",componentId:"gdlwym-1"})(["display:flex;flex-direction:column;justify-content:space-between;",";"],(function(e){var t=e.isDisabled;return"\n    ".concat(t?"\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n      ":"","\n  ")})),y=o((function(i){return t.createElement(m,e({weight:"bold",toUpperCase:!0},i))})).withConfig({displayName:"AssetTileContent__StyledProvider",componentId:"gdlwym-2"})(["display:flex;padding-top:5px;",";"],(function(e){var t=e.isDisabled;return"\n    ".concat(t?"\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n      ":"","\n  ")})),g=o.div.withConfig({displayName:"AssetTileContent__StyledSkills",componentId:"gdlwym-3"})(["margin-top:0;",";"],(function(e){var t=e.isDisabled;return"\n    ".concat(t?"\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n      ":"","\n  ")})),w=o.div.withConfig({displayName:"AssetTileContent__StyledHeaderWrapper",componentId:"gdlwym-4"})([""," ",";display:flex;flex-direction:column;flex-basis:100%;"],(function(e){return e.withEllipsis&&c}),(function(e){var t=e.theme;return"margin-bottom: ".concat(t.spacing.base.sm)})),u=function(e){var n=e.provider,o=e.description,l=e.limitContentLines,m=void 0===l?2:l,c=e.isDisabled,u=void 0!==c&&c,x=e.loading,h=void 0!==x&&x,v=e.isCompact,b=void 0!==v&&v,C=e.withEllipsis,k=void 0===C||C,E=e.showSkills,S=void 0===E||E,j=e.skills,A=e.competencyLabel,_=e.onHeadingClick,T=r().breakpoint<s.sm;return h?t.createElement(w,null,!b&&t.createElement(a,{width:"170px",height:"23px"}),t.createElement(p,{size:"md"}),t.createElement(a,{width:"90%",height:"25px"}),t.createElement(p,{size:"md"})):t.createElement(w,{withEllipsis:k,onClick:_},t.createElement(d,{isCompact:b},!b&&t.createElement(y,{isDisabled:u,"data-test":"learning-asset-provider",color:"grey5",display:"inline-flex",fontSize:"xs",textAlign:"left",toUpperCase:!0,margin:"0 0 xs",tag:"h1"},n),S&&t.createElement(g,null,t.createElement(i,{loading:h,color:"grey4",skills:j,competencyLabel:A}))),o&&t.createElement(f,{weight:"bold",tag:"div",margin:"xs 0 0",fontSize:"lg",textAlign:"left",lineHeight:T?"sm":"md",color:"grey6",limitLines:m,isDisabled:u,"data-test":"learning-asset-description"},o))};export{u as AssetTileContent,g as StyledSkills};
//# sourceMappingURL=AssetTileContent.js.map
