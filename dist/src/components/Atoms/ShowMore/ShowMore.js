import{slicedToArray as e}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import t,{useState as o,useRef as l,useEffect as n}from"react";import{Wrapper as r,ContentWrapper as i,FadeOutOverlay as a,LabelWrapper as m,FlexItem as s}from"./ShowMore.styled.js";import d from"../../../../node_modules/@excelwithbusiness/webmobile-svg-library/dist/components/styleguide/StyleguideArrow.js";import{SkeletonBlockItem as u}from"../Skeleton/SkeletonBlockItem.js";import{Icon as c}from"../Icon/Icon.js";var g=function(g){var f=g.lineHeight,h=g.numOfLines,p=g.children,v=g.labelAlignment,b=void 0===v?"flex-start":v,w=g.labelNoLineHeight,E=void 0!==w&&w,H=g.showMoreText,S=g.showLessText,k=g.noShowLess,C=void 0!==k&&k,j=g.fadeOutHeight,x=g.fadeOutBackgroundColor,y=g.fontSize,O=void 0===y?16:y,A=g.fontColor,B=g.fontWeight,L=g.padding,I=g.loading,M=o(!0),T=e(M,2),_=T[0],z=T[1],N=o(!1),W=e(N,2),F=W[0],P=W[1],q=l(null),D=_||!C,G=h*f;return n((function(){var e;G<Number(null===(e=q.current)||void 0===e?void 0:e.scrollHeight)&&P(!0)}),[G]),I?t.createElement(u,{width:"80%",height:"auto"}):t.createElement(t.Fragment,null,t.createElement(r,{visibleHeight:G,isCollapsed:_},t.createElement(i,{ref:q},p),F&&_&&t.createElement(a,{fadeOutHeight:Math.min(j||0,G),fadeOutBackgroundColor:x})),F&&D&&t.createElement(m,{labelAlignment:b,fontSize:O,fontColor:A,fontWeight:B,onClick:function(){return z(!_)},padding:L,lineHeight:E?0:f},t.createElement(s,null,_?H:S,t.createElement(c,{rotate:_?90:-90,height:O,width:O,alignSelf:"center"},t.createElement(d,null)))))};export{g as ShowMore};
//# sourceMappingURL=ShowMore.js.map