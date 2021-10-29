import{getBoxDimension as e}from"../../../styles/sc-shared-functions.js";import{styled as t,css as n}from"../../../styles/styled.js";import{Section as o}from"../../Atoms/Section/Section.js";import{FlexItem as i}from"../../Helper/FlexBox/FlexBox.js";var r=t(o).withConfig({displayName:"AppHeaderstyled__StyledSection",componentId:"sc-1lykkqz-0"})(["background:",";height:",";z-index:10;top:0;left:auto;right:0;position:fixed;"],(function(e){return e.theme.header.topBar}),(function(e){return e.theme.header.height})),d=t.div.withConfig({displayName:"AppHeaderstyled__StyledHeaderWrapper",componentId:"sc-1lykkqz-1"})((function(t){var o=t.theme;t.color;var i=t.padding;return n([""," box-shadow:",";display:flex;flex-direction:row;z-index:15;"],i?"padding: ".concat(e(o,i)||0,";"):"",(function(e){return e.theme.dimension.elevationLevel1}))})),a=t.div.withConfig({displayName:"AppHeaderstyled__StyledLogo",componentId:"sc-1lykkqz-2"})(["display:flex;flex:1;justify-content:flex-start;"]),l=t.div.withConfig({displayName:"AppHeaderstyled__StyledActionItems",componentId:"sc-1lykkqz-3"})(["display:flex;flex-grow:2;justify-content:flex-end;"]),p=t(i).withConfig({displayName:"AppHeaderstyled__StyledItemWrapper",componentId:"sc-1lykkqz-4"})(["align-self:center;margin-left:",";margin-right:",";"],(function(e){return e.theme.spacing.gap.narrow}),(function(e){return e.theme.spacing.gap.narrow}));export{l as StyledActionItems,d as StyledHeaderWrapper,p as StyledItemWrapper,a as StyledLogo,r as StyledSection};
//# sourceMappingURL=AppHeader.styled.js.map