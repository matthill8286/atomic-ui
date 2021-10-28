import { Icon } from "../../Atoms/Icon";
import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
import { rgba } from 'polished';
import { fadingIn, fadingOut, falling, newspaper, shaking, slideFromBottom, slideFromRight, superScaled } from "../../../styles";
export var ModalWrapper = styled.div.withConfig({
  displayName: "Modalstyled__ModalWrapper",
  componentId: "sc-1lmeipc-0"
})(["z-index:201;top:0;bottom:0;right:0;left:0;position:fixed;overflow-y:auto;"]);
export var StyledModalBackground = styled.div.withConfig({
  displayName: "Modalstyled__StyledModalBackground",
  componentId: "sc-1lmeipc-1"
})(["position:fixed;position:sticky;right:0;bottom:0;top:0;left:0;z-index:100;width:100%;height:100%;background-color:", ";", "{overflow:auto;-webkit-overflow-scrolling:touch;}"], function (_ref) {
  var theme = _ref.theme,
      isWhite = _ref.isWhite;
  return isWhite ? theme.color.white : rgba(0, 0, 0, 0.7);
}, media.sm);
var modalWrapperPositions = {
  top: {
    top: 0
  },
  center: {
    top: 0,
    height: '100%'
  },
  bottom: {
    bottom: 0
  },
  confirm: {
    bottom: 0,
    height: 'auto'
  }
};
var modalWrapperPositionsMd = {
  top: {
    top: '48px',
    transform: 'translate(-50%)'
  },
  center: {
    top: '25%',
    transform: 'translate(-50%)'
  },
  bottom: {
    bottom: 0,
    transform: 'translate(-50%, 0)'
  },
  confirm: {
    top: '25%',
    transform: 'translate(-50%)',
    bottom: 'auto'
  }
};

var modalWrapperBottomMargins = function modalWrapperBottomMargins(position, theme) {
  return {
    top: theme.spacing.base.xxxxl,
    center: theme.spacing.base.xxxxl,
    bottom: 0
  }[position];
};

export var StyledModalInnerWrapper = styled.div.withConfig({
  displayName: "Modalstyled__StyledModalInnerWrapper",
  componentId: "sc-1lmeipc-2"
})(["background:", ";border-radius:", ";box-sizing:border-box;z-index:101;width:100%;height:100%;display:flex;flex-flow:column;overflow-y:", ";position:absolute;", " ", "{", " margin-bottom:", ";left:50%;display:block;padding:", ";border-radius:", ";height:", ";max-width:", ";};", ""], function (_ref2) {
  var contentBgColor = _ref2.contentBgColor,
      theme = _ref2.theme;
  return contentBgColor ? contentBgColor : theme.color.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dimension.borderRadius0;
}, function (_ref4) {
  var withScrollableContent = _ref4.withScrollableContent;
  return withScrollableContent ? 'auto' : 'hidden';
}, function (_ref5) {
  var position = _ref5.position;
  return modalWrapperPositions[position];
}, media.sm, function (_ref6) {
  var position = _ref6.position;
  return modalWrapperPositionsMd[position];
}, function (_ref7) {
  var theme = _ref7.theme,
      position = _ref7.position;
  return modalWrapperBottomMargins(position, theme);
}, function (_ref8) {
  var theme = _ref8.theme,
      paddingSize = _ref8.paddingSize;
  return {
    md: "".concat(theme.spacing.base.lg, " ").concat(theme.spacing.base.md),
    lg: "".concat(theme.spacing.base.xl, " ").concat(theme.spacing.base.xxxxxl)
  }[paddingSize];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.dimension.borderRadius1;
}, function (_ref10) {
  var withScrollableContent = _ref10.withScrollableContent;
  return withScrollableContent ? 'calc(100% - 100px)' : 'auto';
}, function (_ref11) {
  var size = _ref11.size;
  return size === 'sm' ? "440px" : size === 'md' ? "560px" : size === 'lg' ? "756px" : size === 'xl' && "1104px";
}, function (_ref12) {
  var animation = _ref12.animation;
  return [animation === 'fadeIn' && fadingIn, animation === 'fadeOut' && fadingOut, animation === 'shake' && shaking, animation === 'falling' && falling, animation === 'newspaper' && newspaper, animation === 'superScaled' && superScaled, animation === 'slideFromRight' && slideFromRight, animation === 'slideFromBottom' && slideFromBottom];
});
export var StyledModalContent = styled.div.withConfig({
  displayName: "Modalstyled__StyledModalContent",
  componentId: "sc-1lmeipc-3"
})(["width:100%;display:flex;flex-flow:column;& img{max-width:100%;}"]);
export var StyledModalDesktopWrapper = styled.div.withConfig({
  displayName: "Modalstyled__StyledModalDesktopWrapper",
  componentId: "sc-1lmeipc-4"
})(["padding:", ";max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;", "{overflow-y:scroll;-webkit-overflow-scrolling:touch;padding:0;}"], function (_ref13) {
  var theme = _ref13.theme;
  return "0 ".concat(theme.spacing.base.sm, " ").concat(theme.spacing.base.sm, " ").concat(theme.spacing.base.sm);
}, media.sm);
export var StyledModalHeader = styled.div.withConfig({
  displayName: "Modalstyled__StyledModalHeader",
  componentId: "sc-1lmeipc-5"
})(["display:flex;justify-content:", ";padding:", ";", ";", "{", ";", ";}"], function (_ref14) {
  var hasTitle = _ref14.hasTitle;
  return "".concat(hasTitle) ? 'center' : 'flex-start';
}, function (_ref15) {
  var theme = _ref15.theme;
  return "".concat(theme.spacing.base.sm);
}, function (_ref16) {
  var hasTitle = _ref16.hasTitle,
      theme = _ref16.theme;
  return !hasTitle && "min-height: ".concat(theme.spacing.base.md);
}, media.sm, function (_ref17) {
  var hasTitle = _ref17.hasTitle,
      theme = _ref17.theme;
  return "padding: 0 0 ".concat(hasTitle ? theme.spacing.base.sm : 0, " 0");
}, function (_ref18) {
  var hasTitle = _ref18.hasTitle;
  return !hasTitle && "min-height: 0";
});
export var StyledIcon = styled(Icon).withConfig({
  displayName: "Modalstyled__StyledIcon",
  componentId: "sc-1lmeipc-6"
})(["flex:1;display:flex;justify-content:flex-end;align-items:center;cursor:pointer;padding:0;z-index:1;outline:none;background:none;border:none;"]);
export var StlyedLeftContent = styled.div.withConfig({
  displayName: "Modalstyled__StlyedLeftContent",
  componentId: "sc-1lmeipc-7"
})(["flex:1;"]);
//# sourceMappingURL=Modal.styled.js.map