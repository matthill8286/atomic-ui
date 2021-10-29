import e from"react";import{Grid as r}from"../../Helper/Grid/Grid.js";import{Row as t}from"../../Helper/Grid/Row.js";import{Cell as o}from"../../Helper/Grid/Cell.js";import{styled as l}from"../../../styles/styled.js";import{FlexBox as i}from"../../Helper/FlexBox/FlexBox.js";import{CopyText as m}from"../../Atoms/Typography/CopyText/CopyText.js";import{Divider as n}from"../../Atoms/Divider/Divider.js";var a=l.div.withConfig({displayName:"FeatureList__ListWrapper",componentId:"sc-1kkzri8-0"})(["padding-top:",";padding-bottom:",";"],(function(e){return e.theme.spacing.base.sm}),(function(e){return e.theme.spacing.base.sm})),s=function(l){var s=l.list;return s&&Array.isArray(s)&&s.length?e.createElement(i,{display:"flex",flexDirection:"column"},s.map((function(l,i){return""!==l.label&&l.label?e.createElement(e.Fragment,{key:"FeatureList-".concat(l.label,"-").concat(i)},e.createElement(a,null,e.createElement(r,{noPadding:!0},e.createElement(t,{noMargin:!0},e.createElement(o,{columns:6,colsMd:4,colsSm:4,colsXs:2},e.createElement(m,{weight:"semibold",color:"grey5",margin:"0"},l.label)),e.createElement(o,{columns:6,colsMd:4,colsSm:4,colsXs:2},e.createElement(m,{color:"grey5",margin:"0"},l.value))))),e.createElement(n,{color:"grey2",height:1})):null}))):null};s.displayName="FeatureList";export{s as FeatureList,a as ListWrapper};
//# sourceMappingURL=FeatureList.js.map
