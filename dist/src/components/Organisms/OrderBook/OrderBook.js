import e from"react";import{OrderBookEntry as r}from"./OrderBookEntries.js";import{Table as o}from"../../Atoms/Table/Table.js";import{TableHead as t}from"../../Atoms/Table/TableHead.js";import{TableRow as l}from"../../Atoms/Table/TableRow.js";import{TableBody as i}from"../../Atoms/Table/TableBody.js";import{TableCell as a}from"../../Atoms/Table/TableCell.js";import{useWindowDimensions as s}from"../../Helper/useWindowDimensions/useWindowDimensions.js";import{breakpoints as n}from"../../../styles/sc-vars-global.js";import{CopyText as m}from"../../Atoms/Typography/CopyText/CopyText.js";var c={key:"ask",color:"#f00"},d=["Price","Size","Total"],p=function(r){var o=r.textColor,t=r.cellText;return e.createElement(a,{cellType:"th",collapsible:!1},e.createElement(m,{padding:"0",margin:"0",color:o||"grey4",toUpperCase:!0},t))},u=function(a){var m=a.isReversed,u=a.textColor,b=a.borderColor,f=a.backgroundColor,T=a.headerTextColor,y=a.rows,C=a.rowsKey,k=a.maxPriceSize,x=a.hideOnMobile,g=a.isOutlineRequired,j=s().breakpoint<n.md,v=Object.keys(y).map((function(e){return y[e]})).filter((function(e){return e}));return j&&C===c.key&&v.reverse(),e.createElement(o,{withBackground:!0,withBorderRadius:!1},e.createElement(t,{backgroundColor:f||"secondary",borderColor:b,isOutlineRequired:g},!x&&e.createElement(l,{isReversed:m||!1,disableHover:!0,textColor:u,backgroundColor:f||"secondary"},d.map((function(r){return e.createElement(p,{key:r,cellText:r,textColor:T})})))),e.createElement(i,{backgroundColor:f,fullBorder:!1},v.map((function(o){var t=o.price,l=o.size,i=o.total,a=i/k*100;return e.createElement(r,{color:"white",key:a,isReversed:m,maxPriceSize:k,colorSpriteWidth:a,price:t,size:l,total:i})}))))};export{u as OrderBookTable};
//# sourceMappingURL=OrderBook.js.map