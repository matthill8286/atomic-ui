import{slicedToArray as e}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import n from"../../../../node_modules/lodash/debounce.js";import*as r from"react";import{breakpoints as i}from"../../../styles/sc-vars-global.js";var t={1472:"xxl",1232:"xl",1008:"lg",752:"md",512:"sm",0:"xs"},o=function(){if("undefined"==typeof window)return{width:0,height:0,breakpoint:0,breakpointName:"sm"};var e=window,n=e.innerWidth,r=e.innerHeight,o=Object.values(i).sort((function(e,n){return n-e})).find((function(e){return n>=e}))||0;return{width:n,height:r,breakpoint:o,breakpointName:t[o]}},a=function(e){var n;return[function(){void 0!==n&&cancelAnimationFrame(n),n=requestAnimationFrame(e)},function(){void 0!==n&&cancelAnimationFrame(n)}]},u=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,t=r.useState(o()),u=e(t,2),s=u[0],d=u[1];return r.useEffect((function(){if("undefined"!=typeof window){var r=function(){return d(o())},t="frame"===i?a(r):[n(r,i)],u=e(t,2),s=u[0],f=u[1];return r(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s),null==f||f()}}}),[i]),s};export{o as getWindowDimensions,u as useWindowDimensions};
//# sourceMappingURL=useWindowDimensions.js.map