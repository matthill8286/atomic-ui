import{objectWithoutProperties as r,slicedToArray as e,extends as l}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import o,{useEffect as i}from"react";import{Slider as t}from"../../../../node_modules/@lifarl/react-scroll-snap-slider/dist/module.js";export{StyledArrow as StyledScrollSnapSliderArrow,StyledCarousel as StyledScrollSnapSliderCarousel,StyledUl as StyledScrollSnapSliderList,StyledNavWrapper as StyledScrollSnapSliderNavWrapper,StyledSlide as StyledScrollSnapSliderSlide,StyledSlider as StyledScrollSnapSliderSlider}from"../../../../node_modules/@lifarl/react-scroll-snap-slider/dist/module.js";import{NavArrow as s}from"./NavArrow.js";import{Scrollbar as n}from"./Scrollbar.js";import{StyledOverflowWrapper as d,StyledHeading as a,StyledWrapper as S,StyledGridScrollbar as c,StyledHeadingNoGrid as u}from"./ScrollSnapSlider.styled.js";export{StyledScrollbar as StyledScrollSnapSliderScrollbar}from"./ScrollSnapSlider.styled.js";var w="undefined"!=typeof window?require("css-scroll-snap-polyfill"):null,f=o.forwardRef((function(f,p){var m,v=f.slidesPerPageSettings,y=f.title,h=f.withGrid,P=void 0!==h&&h,A=f.isGridLayout,E=void 0===A||A,b=f.showArrows,g=void 0===b||b,C=f.showScrollbar,x=void 0!==C&&C,j=f.fixedArrowPosition,R=void 0===j||j,V=f.zeroArrowPosition,W=void 0!==V&&V;f.overEdgePosition,f.arrowPrevClass,f.arrowNextClass,f.arrowDataTest;var G=f.showArrowsOnHover,N=void 0===G||G,H=f.slideWidth,L=f.onScrollStart,_=f.onScrollEnd,k=f.onSlidesVisibilityChange,z=f.onSlideVisible,O=f.children,T=r(f,["slidesPerPageSettings","title","withGrid","isGridLayout","showArrows","showScrollbar","fixedArrowPosition","zeroArrowPosition","overEdgePosition","arrowPrevClass","arrowNextClass","arrowDataTest","showArrowsOnHover","slideWidth","onScrollStart","onScrollEnd","onSlidesVisibilityChange","onSlideVisible","children"]);i((function(){w()}),[]);var D,q=o.useState(!1),B=e(q,2)[1],F=o.useRef(null),U=function(r){var e=r.direction,l=r.ref,i=r.onClick;return o.createElement(s,{direction:e,ref:l,onClick:function(){return i(e)},showArrows:g,fixedArrowPosition:R,zeroArrowPosition:W})},I=o.useCallback((function(r){F.current=r,"function"!=typeof p&&p&&(p.current=r),B(x)}),[p,F,B,x]),J=function(){return o.createElement(S,l({isGridLayout:E,showArrowsOnHover:N},T),o.createElement(t,{ref:I,slideWidth:H,slidesPerPageSettings:v,renderCustomArrow:U,onScrollStart:L,onScrollEnd:_,onSlidesVisibilityChange:k,onSlideVisible:z},O))};return P?o.createElement(d,null,y?o.createElement(a,null,y):null,J(),x&&o.createElement(c,null,o.createElement(n,{sliderRef:null===(D=F.current)||void 0===D?void 0:D.sliderRef}))):o.createElement(o.Fragment,null,y?o.createElement(u,null,y):null,J(),x&&o.createElement(n,{sliderRef:null===(m=F.current)||void 0===m?void 0:m.sliderRef}))}));export{f as ScrollSnapSlider};
//# sourceMappingURL=ScrollSnapSlider.js.map