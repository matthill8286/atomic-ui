import { Button } from "../../Atoms/Button";
import { Icon } from "../../Atoms/Icon";
import { fadingIn, fadingOut, shaking } from "../../../styles/animation";
import { media } from "../../../styles/media";
import { margin } from "../../../styles/sc-shared-functions";
import { css, styled } from "../../../styles/styled";
export var StyledNotificationHeadline = styled.div.withConfig({
  displayName: "NotificationBoxStyled__StyledNotificationHeadline",
  componentId: "sc-1hqjafm-0"
})(["display:flex;align-items:center;", "{margin-right:", ";> svg{position:relative;", "{width:24px;height:24px;}}}"], Icon, function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.xs;
}, media.md);
export var StyledCopyTextDiv = styled.div.withConfig({
  displayName: "NotificationBoxStyled__StyledCopyTextDiv",
  componentId: "sc-1hqjafm-1"
})(["margin-top:", ";", " &:first-child{&,> *{margin-top:0;}}&:last-child > *{margin-bottom:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.xs;
}, margin);
export var StyledButton = styled(Button).withConfig({
  displayName: "NotificationBoxStyled__StyledButton",
  componentId: "sc-1hqjafm-2"
})([""]);
var buttonRowCss = css(["flex-direction:row;& ", ":first-child{margin-right:", ";}& ", ":last-child{margin-left:", ";}"], StyledButton, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.base.xs;
}, StyledButton, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.xs;
});
var buttonColumnCss = css(["& ", ":nth-child(n + 2){margin-top:", ";}"], StyledButton, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.xs;
});
export var StyledButtonDiv = styled.div.withConfig({
  displayName: "NotificationBoxStyled__StyledButtonDiv",
  componentId: "sc-1hqjafm-3"
})(["display:flex;align-items:center;flex-direction:column;justify-content:center;margin-top:", ";", ""], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.md;
}, function (_ref7) {
  var buttonLayout = _ref7.buttonLayout;
  return buttonLayout === 'row' ? buttonRowCss : buttonColumnCss;
});
export var StyledLinkDiv = styled.div.withConfig({
  displayName: "NotificationBoxStyled__StyledLinkDiv",
  componentId: "sc-1hqjafm-4"
})(["display:flex;align-items:start;flex-direction:column;justify-content:start;font-size:", ";", " + &{margin-top:", ";}", ""], function (_ref8) {
  var theme = _ref8.theme;
  return theme.font.size.sm;
}, StyledButtonDiv, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.base.sm;
}, function (_ref10) {
  var alignLinks = _ref10.alignLinks;
  return alignLinks === 'center' && css(["> a,button{margin:0 auto;}"]);
});
export var StyledNotificationClose = styled.button.withConfig({
  displayName: "NotificationBoxStyled__StyledNotificationClose",
  componentId: "sc-1hqjafm-5"
})(["appearance:none;border:0;padding:0;margin:0;border-radius:0;background:transparent;position:absolute;cursor:pointer;right:0;top:0;z-index:1;width:", ";height:", ";display:flex;place-items:center;place-content:center;&:focus{outline:0;user-focus:none;}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.base.lg;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.base.lg;
});
export var StyledNotificationBoxWrapper = styled.div.withConfig({
  displayName: "NotificationBoxStyled__StyledNotificationBoxWrapper",
  componentId: "sc-1hqjafm-6"
})(["", " min-width:0;z-index:25;", "{max-width:", "px;", "}", " ", ""], function (_ref13) {
  var rootPosition = _ref13.rootPosition;
  return "position: " + (rootPosition ? "".concat(rootPosition, ";") : "absolute") + ";";
}, media.sm, function (_ref14) {
  var theme = _ref14.theme;
  return 64 * theme.defaultSpacing;
}, function (_ref15) {
  var maxWidth = _ref15.maxWidth;
  return maxWidth && "max-width: ".concat(maxWidth, ";");
}, function (_ref16) {
  var maxWidth = _ref16.maxWidth;
  return maxWidth && "max-width: ".concat(maxWidth, ";");
}, function (_ref17) {
  var animation = _ref17.animation,
      title = _ref17.title,
      tooltip = _ref17.tooltip;
  return [animation === 'fadeIn' && fadingIn, animation === 'fadeOut' && fadingOut, animation === 'shake' && shaking, !title && css(["p:first-child{margin-top:0;}"]), tooltip && css(["top:", "px;left:", "px;width:", ";"], tooltip.top, tooltip.left, tooltip.width ? "".concat(tooltip.width, "px") : 'inherit')];
});
export var StyledArrow = styled.span.withConfig({
  displayName: "NotificationBoxStyled__StyledArrow",
  componentId: "sc-1hqjafm-7"
})(["position:absolute;background-color:", ";border-radius:", ";border:none;height:20px;margin:0;padding:0;transform:rotate(45deg);width:20px;", ""], function (_ref18) {
  var theme = _ref18.theme;
  return theme.color.white;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.dimension.borderRadius1;
}, function (_ref20) {
  var arrowLeft = _ref20.arrowLeft,
      arrowPosition = _ref20.arrowPosition,
      theme = _ref20.theme;
  return [arrowPosition[0] === 'top' ? "top: -".concat(theme.spacing.base.xs, ";") : "bottom: -".concat(theme.spacing.base.xs, ";"), arrowPosition[1] === 'left' ? "left: ".concat(theme.spacing.base.md, ";") : "right: ".concat(theme.spacing.base.md, ";"), arrowLeft && "left: ".concat(arrowLeft, "px; right: auto;")];
});
export var StyledBodyHtml = styled.span.withConfig({
  displayName: "NotificationBoxStyled__StyledBodyHtml",
  componentId: "sc-1hqjafm-8"
})(["color:inherit;a,a:hover,a:focus,a:active{color:inherit;}"]);
//# sourceMappingURL=NotificationBoxStyled.js.map