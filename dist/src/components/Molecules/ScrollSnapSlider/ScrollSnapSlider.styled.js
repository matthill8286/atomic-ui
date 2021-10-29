import{css as i,styled as r}from"../../../styles/styled.js";import{StyledNavArrow as o}from"./NavArrow.js";import{handleGridPadding as l}from"../../Helper/Grid/Grid.js";import{media as e}from"../../../styles/media.js";var n=i(["box-sizing:border-box;margin:0 auto;max-width:1472px;",""],l(!1)),t=r.div.withConfig({displayName:"ScrollSnapSliderstyled__StyledOverflowWrapper",componentId:"sc-1hugk5l-0"})(["ul{",";}"],n),d=r.div.withConfig({displayName:"ScrollSnapSliderstyled__StyledHeading",componentId:"sc-1hugk5l-1"})([""," h1,h2,h3,h4{margin-left:0;margin-right:0;color:",";}"],n,(function(i){return i.theme.color.primary})),a=r.div.withConfig({displayName:"ScrollSnapSliderstyled__StyledGridScrollbar",componentId:"sc-1hugk5l-2"})(["",""],n),c=r.div.withConfig({displayName:"ScrollSnapSliderstyled__StyledHeadingNoGrid",componentId:"sc-1hugk5l-3"})(["h1,h2,h3,h4{margin-left:0;margin-right:0;color:",";}"],(function(i){return i.theme.color.primary})),s=r.div.withConfig({displayName:"ScrollSnapSliderstyled__StyledWrapper",componentId:"sc-1hugk5l-4"})((function(r){var l=r.showArrowsOnHover,n=r.isGridLayout;return i(["position:relative;"," ",""],!n&&"height: 100%",l&&"\n    ".concat(o," {\n      visibility: hidden;\n    }\n    ").concat(e.xl," {\n      &:hover ").concat(o," {\n        visibility: visible;\n      }\n    }\n  "))})),p=r.div.withConfig({displayName:"ScrollSnapSliderstyled__StyledScrollbar",componentId:"sc-1hugk5l-5"})((function(r){var o=r.isSliderScrollable,l=r.theme;return i(["background-color:",";height:2px;margin-top:",";opacity:",";overflow:hidden;position:relative;width:100%;span{background-color:",";height:100%;position:absolute;}"],l.color.grey2,l.spacing.base.sm,o?1:0,l.color.primary)}));export{a as StyledGridScrollbar,d as StyledHeading,c as StyledHeadingNoGrid,t as StyledOverflowWrapper,p as StyledScrollbar,s as StyledWrapper,n as gridCss};
//# sourceMappingURL=ScrollSnapSlider.styled.js.map
