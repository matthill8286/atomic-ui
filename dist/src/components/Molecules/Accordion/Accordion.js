import{objectWithoutProperties as n,slicedToArray as e,toConsumableArray as t}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import i,{forwardRef as r,useReducer as o,useEffect as c,useContext as s,useImperativeHandle as d}from"react";import{AccordionEntry as a}from"./AccordionEntry.js";import{useWindowDimensions as u}from"../../Helper/useWindowDimensions/useWindowDimensions.js";import{ThemeContext as l}from"styled-components";var p=function(n,e){switch(e.type){case"open":return e.shouldCloseOthers?[e.id]:n.concat(e.id);case"close":return n.filter((function(n){return n!==e.id}));case"openBatch":return e.entries.reduce((function(n,e,t){return n.concat(e.id||t.toString())}),[]);case"checkNewEntries":return n.concat(e.entries.filter((function(n){return"string"==typeof n.id&&n.isOpenInitially})).map((function(n){return n.id})));default:return n}},f=function(n){var t=e(n,3),i=t[0],r=t[1],o=t[2];if(r)return o.reduce((function(n,e,t){return e.isOpenInitially||i===t?n.concat(e.id||t.toString()):n}),[]);var c=o.find((function(n){return!!n.isOpenInitially}));return c?[c.id||o.indexOf(c).toString()]:i>-1&&i<o.length?[o[i].id||i.toString()]:[]},m=r((function(r,m){var g=r.entries,h=r.isUnfoldable,y=void 0!==h&&h,I=r.openedIndex,v=void 0===I?-1:I,b=r.onChange,O=r.isExpandedFrom,w=r.isLarge,C=r.customLabelHeading,E=r.withIconsOnRight,x=void 0!==E&&E,P=r.labelPadding,k=r.entryPadding,B=r.withCustomIcon,H=void 0!==B&&B,L=r.customIcon,S=n(r,["entries","isUnfoldable","openedIndex","onChange","isExpandedFrom","isLarge","customLabelHeading","withIconsOnRight","labelPadding","entryPadding","withCustomIcon","customIcon"]),j=o(p,[v,y,g],f),R=e(j,2),T=R[0],W=R[1];c((function(){v>-1&&!T.includes("".concat(v))&&W({type:"open",id:"".concat(v),shouldCloseOthers:!y})}),[v]);var A=i.useRef(g.map((function(n){return n.id}))),D=g.filter((function(n){return!A.current.includes(n.id)}));A.current=t(g.map((function(n){return n.id}))),D.length>0&&W({type:"checkNewEntries",entries:D});var F=u().breakpoint,N=s(l),U=O?N.breakpoints[O]:void 0,_=function(n){var e=T.includes(n);W(e?{type:"close",id:n}:{type:"open",id:n,shouldCloseOthers:!y}),b&&b({index:g.findIndex((function(e){return e.id===n}))||+n,eventType:e?"HIDE":"SHOW"})};return c((function(){F>=U&&W({type:"openBatch",entries:g})}),[]),d(m,(function(){return{openEntryById:function(n){T.includes(n)||_(n)}}})),g?i.createElement("section",S,g.map((function(n,e){var t=n.id||e.toString(),r=T.includes(t);return i.createElement(a,{isLarge:w,entryPadding:k,details:n.details,id:t,isOpen:r,key:t,looksOpenInitiallyFromBreakpoint:U,onChange:_,labelPadding:P,title:n.title,customLabelHeading:C,noBorderTop:n.noBorderTop,withIconsOnRight:x,withCustomIcon:H,customIcon:L})}))):null}));export{m as Accordion};
//# sourceMappingURL=Accordion.js.map
