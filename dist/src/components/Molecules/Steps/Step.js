import{objectWithoutProperties as e,extends as t}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import o from"react";import{media as i}from"../../../styles/media.js";import{styled as n}from"../../../styles/styled.js";import{StepIcon as r}from"./StepIcon.js";import{Typo as l}from"../../Atoms/Typography/Typo/Typo.js";var a=n.div.withConfig({displayName:"Step__StepRoot",componentId:"sc-1kuxhut-0"})(["cursor:",";flex:1;position:relative;padding:0 ","px;"],(function(e){return e.pointer?"pointer":"default"}),(function(e){return e.theme.defaultSpacing})),c=n.span.withConfig({displayName:"Step__StepLabelRoot",componentId:"sc-1kuxhut-1"})(["flex-direction:column;display:flex;align-items:center;"," ",""],(function(e){return"first"===e.elementPosition&&"align-items: flex-start;"}),(function(e){return"last"===e.elementPosition&&"align-items: flex-end;"})),p=n(l).withConfig({displayName:"Step__StepDescription",componentId:"sc-1kuxhut-2"})(["","{display:none;}"],i.maxMd),s=function(i){var n=i.color,s=void 0===n?"primary":n,m=i.elementPosition,d=void 0===m?"default":m,u=i.active,f=void 0!==u&&u,v=i.completed,g=void 0!==v&&v,y=i.stepIndex,x=void 0===y?0:y,h=i.title,S=void 0===h?"":h,_=i.description,I=void 0===_?"":_,P=i.icon,j=i.connector,k=i.onClick,C=i.variant,E=void 0===C?"prominent":C,b=e(i,["color","elementPosition","active","completed","stepIndex","title","description","icon","connector","onClick","variant"]),w={active:f,completed:g,color:s,variant:E,customIcon:P},N=f||g?s:"grey2";return o.createElement(a,t({},b,{pointer:!!k,onClick:function(){return k&&k(x)}}),j,"uniform"!=E?o.createElement(c,{elementPosition:d},S&&o.createElement(l,{tag:"span",color:N,weight:f||g?"semibold":"regular"},S),I&&o.createElement(p,{tag:"span",color:N},I),o.createElement(r,w)):o.createElement(r,w))};s.displayName="Step";export{s as Step};
//# sourceMappingURL=Step.js.map
