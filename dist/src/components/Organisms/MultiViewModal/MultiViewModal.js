import t,{useMemo as o,Children as e}from"react";import{useMultiViewModalState as r,useMultiViewModalAction as n}from"./MultiViewModal.store.js";import{Portal as i}from"../../Helper/Portal/Portal.js";import{Modal as l}from"../../Molecules/Modal/Modal.js";import{styled as a}from"../../../styles/styled.js";import{Button as s}from"../../Atoms/Button/Button.js";import{Icon as d}from"../../Atoms/Icon/Icon.js";import m from"../../../../node_modules/@excelwithbusiness/webmobile-svg-library/dist/components/styleguide/StyleguideArrow.js";var c=a(s).withConfig({displayName:"MultiViewModal__StyledBackButton",componentId:"sc-190ktho-0"})(["padding-left:0;"]),p=a(d).withConfig({displayName:"MultiViewModal__StyledBackArrow",componentId:"sc-190ktho-1"})(["padding:0 !important;position:relative;left:-7px;"]),u=function(a){var s=a.targetId,d=a.children,u=a.withScrollableContent,f=a.backButtonText,h=a.hideCloseButton,y=void 0!==h&&h,B=a.canClose,w=void 0===B||B,g=a.showBackButton,v=void 0===g||g,M=r(),C=M.isActive,k=M.activeViewId,b=M.hasBackButton,j=n(),I=j.goHome,A=j.close,E=o((function(){return e.toArray(d).find((function(t){return t.props.id===k}))}),[d,k]);return C?t.createElement(i,{targetRootId:s},t.createElement(l,{onClose:A,canClose:w,primaryButtonProps:null==E?void 0:E.props.primaryButtonProps,secondaryButtonProps:null==E?void 0:E.props.secondaryButtonProps,withScrollableContent:u,hideCloseButton:y},t.createElement(t.Fragment,null,b&&v&&t.createElement(c,{actionType:"ghost",onClick:I},t.createElement(p,{rotate:180,width:"sm",height:"sm"},t.createElement(m,null)),f),E))):null};u.displayName="MultiViewModal";export{u as MultiViewModal};
//# sourceMappingURL=MultiViewModal.js.map
