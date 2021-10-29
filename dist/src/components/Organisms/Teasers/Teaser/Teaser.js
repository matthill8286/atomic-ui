import{objectWithoutProperties as e,slicedToArray as t,extends as i}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import n,{useState as o}from"react";import{useHistory as l}from"react-router-dom";import{breakpoints as r}from"../../../../styles/sc-vars-global.js";import{isAlternateTheme as a,useTheme as m}from"../../../../utils/helper.js";import{useGraphCmsImages as s}from"../../../../utils/useGraphCmsImages.js";import{StyledTeaser as c,StyledResponsiveContainer as d,StyledContentContainer as u,StyledHeadingContainer as g,StyledIcon as h,StyledPictureContainer as p,isPortrait as f,StyledTextLinkContainer as E,StyledDummyLink as v,StyledLinkContainer as b,StyledInfoTextContainer as y,StyledInfoTextChildren as L,StyledLinkListItemSpace as k,StyledLinkListContainer as w}from"./Teaser.styled.js";import{DANONE as x}from"../../../../styles/themes.js";import{useWindowDimensions as j}from"../../../Helper/useWindowDimensions/useWindowDimensions.js";import{Card as C}from"../../../Atoms/Card/CardV2.js";import{SkeletonBlockItem as A}from"../../../Atoms/Skeleton/SkeletonBlockItem.js";import{Picture as S}from"../../../Atoms/Picture/Picture.js";import{SkeletonInlineItem as T}from"../../../Atoms/Skeleton/SkeletonInlineItem.js";import{HeadingFeatured as I}from"../../../Atoms/Typography/Heading/HeadingFeatured.js";import{Link as H}from"../../../Atoms/Link/Link.js";import{Icon as F}from"../../../Atoms/Icon/Icon.js";import P from"../../../../../node_modules/@excelwithbusiness/webmobile-svg-library/dist/components/icon/IconArrow.js";import{CopyText as M}from"../../../Atoms/Typography/CopyText/CopyText.js";import{Foldable as z}from"../../../Atoms/Foldable/Foldable.js";var O=function(e){var t=e.image,i=e.withImagePadding,o=e.orientation,l=e.loading,r=e.alt;return t?n.createElement(p,{withImagePadding:i,orientation:o},l?n.createElement(A,{height:"100%",width:"100%"}):n.createElement(S,{alt:r,src:t,height:"100%",width:"100%",objectFit:i?"contain":"cover"})):null},_=function(e){var t=e.headline,i=e.headlineLimitLines,o=void 0===i?2:i,l=e.loading,r=e.orientation,a=m().name;return l?n.createElement(T,{fontSize:"xl",length:15}):n.createElement(I,{fixedMdSize:a===x,fixedSize:f(r)?"xl":void 0,limitLines:o},t)},W=function(e){var t=e.color,o=e.decorationColor,l=e.dummyMainLink,r=void 0!==l&&l,a=e.isSmall,m=e.loading,s=e.mainLink;if(s&&s.label){var c=s.to?{to:s.to}:{href:s.href};return m?n.createElement(E,{isSmall:a},n.createElement(A,{height:"20px",width:"100px"})):n.createElement(E,{isSmall:a},n.createElement(H,i({fontSize:"sm",iconLeft:n.createElement(F,{color:o||"primary"},n.createElement(P,null)),scale:"small"},o&&{decorationColor:o},t&&{color:t},c),s.label))}return r?n.createElement(v,null," "):null},B=function(e){var t=e.isAlternate,i=e.isFoldable,o=e.isOpen,l=e.isSmall,r=void 0===l||l,a=e.mainLink;return i?n.createElement(b,{isSmall:r},n.createElement(h,{height:"sm",width:"sm",color:t?"grey4":"primary",rotate:o?0:180,isSmall:r,hasMarginLeft:!0},n.createElement(P,null))):a&&!a.label&&(a.to||a.href)?n.createElement(b,{isSmall:r},n.createElement(h,{height:"sm",width:"sm",color:"primary",isSmall:r,hasMarginLeft:!0},n.createElement(P,null))):null},D=function(e){var t=e.contentText,i=e.children,o=e.loading,l=j().breakpoint<r.sm;return o?n.createElement(n.Fragment,null,n.createElement(T,{margin:"md 0 xxs"}),n.createElement(A,{height:"20px",width:"200px"})):t||i?n.createElement(y,null,t&&n.createElement(M,{limitLines:5,fontSize:"sm",lineHeight:l?"xs":"sm",margin:"sm 0 0 0"},t),i&&n.createElement(L,null,i)):null},Q=function(e){var t=e.linkList;if(t&&t.length>0){for(var i=new Array,o=0;o<t.length;o++){var l=t[o];o>0&&i.push(n.createElement(k,{key:"space_"+l.label})),i.push(n.createElement(H,{key:l.label+"_"+l.to,scale:"large",to:l.to},l.label))}return n.createElement(w,null,i)}return null},G=function(e){var t=e.children,i=e.isFoldable,o=e.isOpen;return i?n.createElement(z,{isOpen:o},t):n.createElement(n.Fragment,null,t)},V=function(m){var p=m.badgeActionType,f=m.badges,E=m.children,v=m.color,b=m.contentText,y=m.decorationColor,L=m.borderColor,k=m.dummyMainLink,w=void 0!==k&&k,x=m.elevation,A=void 0===x?0:x,S=m.elevationHover,T=void 0===S?4:S,I=m.foldable,H=void 0===I?"never":I,F=m.growHeadline,P=void 0!==F&&F,M=m.headline,z=m.headlineLimitLines,V=void 0===z?2:z,q=m.icon,J=m.image,K=m.altText,N=m.lazyloadLowQuality,R=void 0!==N&&N,U=m.linkList,X=m.loading,Y=void 0!==X&&X,Z=m.mainLink,$=m.onClick,ee=m.orientation,te=void 0===ee?"auto":ee,ie=m.withImagePadding,ne=void 0!==ie&&ie;m.contentful;var oe=e(m,["badgeActionType","badges","children","color","contentText","decorationColor","borderColor","dummyMainLink","elevation","elevationHover","foldable","growHeadline","headline","headlineLimitLines","icon","image","altText","lazyloadLowQuality","linkList","loading","mainLink","onClick","orientation","withImagePadding","contentful"]),le=j().breakpoint,re=l(),ae=le<r.sm,me="always"===H||"mobile"===H&&ae,se=o(!me),ce=t(se,2),de=ce[0],ue=ce[1],ge=!!U&&U.length>0,he=a(),pe=n.useCallback((function(e){if("function"==typeof $&&$(e),!me||de)if(!me||!de||Z&&Z.label||ge){if(!me&&Z){if(Z.to)return re.push(Z.to);if(Z.href)return window.location.href=Z.href}}else ue(!1);else ue(!0)}),[ge,re,me,de,Z,$,ue]),fe=n.useCallback((function(){me&&de&&ue(!1)}),[me,de,ue]),Ee=s([J],!R),ve=t(Ee,2),be=ve[0],ye=ve[1];return n.createElement(c,i({ref:ye,onClick:pe,hasLinkList:ge,isOpen:de,orientation:te},oe),n.createElement(C,{elevation:A,elevationHover:ge?0:T,shape:"rounded-big",display:"flex",badges:f,borderColor:L,badgeActionType:p},n.createElement(d,{orientation:te},n.createElement(O,{image:be[0],withImagePadding:ne,orientation:te,loading:Y,alt:K}),n.createElement(u,null,n.createElement(g,{onClick:fe,growHeadline:P},n.createElement(_,{headline:M,headlineLimitLines:V,loading:Y,orientation:te}),n.createElement(B,{isAlternate:he,isFoldable:me,isOpen:de,mainLink:Z})),q&&n.createElement(h,{color:"primary",hasMarginTop:!0},q),n.createElement(G,{isFoldable:me,isOpen:de},n.createElement(D,{contentText:b,loading:Y},E),n.createElement(Q,{linkList:U}),n.createElement(W,{color:v,decorationColor:y,dummyMainLink:w,loading:Y,mainLink:Z}))))))};export{V as Teaser};
//# sourceMappingURL=Teaser.js.map
