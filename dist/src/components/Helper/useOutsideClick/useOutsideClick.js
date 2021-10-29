import{useRef as n,useEffect as r}from"react";var t=function(t){var e=n(),c=n();return r((function(){e.current=t})),r((function(){return document.addEventListener("click",n),function(){return document.removeEventListener("click",n)};function n(n){c.current&&e.current&&!c.current.contains(n.target)&&e.current(n)}}),[]),c};export{t as useOutsideClick};
//# sourceMappingURL=useOutsideClick.js.map
