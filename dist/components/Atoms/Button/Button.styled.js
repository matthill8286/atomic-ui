import { darken } from 'polished';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
import { Icon } from "../Icon";
import { LoadingIndicator } from "../LoadingIndicator";
import { Status } from "../Status";
var buttonStyles = css(["", "{padding:0 ", "px;}", "{position:absolute;top:-6px;right:-6px;}display:flex;justify-content:center;align-items:center;border-radius:", ";box-sizing:border-box;outline:none;cursor:", ";appearance:none;-webkit-appearance:none;padding:", ";position:relative;text-decoration:none;font-family:", ";font-weight:", ";font-size:", ";height:", ";width:fit-content;box-shadow:", ";", " ", " ", " ", " ", ""], Icon, function (_ref) {
  var theme = _ref.theme,
      actionType = _ref.actionType;
  return actionType !== 'outlined' ? theme.defaultSpacing : 0;
}, Status, function (_ref2) {
  var round = _ref2.round,
      theme = _ref2.theme;
  return round ? "100%" : theme.dimension.borderRadius1;
}, function (_ref3) {
  var disabled = _ref3.disabled,
      isFlat = _ref3.isFlat;
  return disabled ? 'not-allowed' : isFlat ? 'default' : 'pointer';
}, function (_ref4) {
  var round = _ref4.round,
      squared = _ref4.squared;
  return round || squared ? '0' : '12px 24px';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.font.family.default;
}, function (_ref6) {
  var weight = _ref6.weight;
  return weight || 'normal';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.font.size.sm;
}, function (_ref8) {
  var size = _ref8.size,
      theme = _ref8.theme;
  return theme.button.size[size];
}, function (_ref9) {
  var elevated = _ref9.elevated,
      theme = _ref9.theme;
  return elevated ? theme.dimension.elevationLevel2 : 'none';
}, function (_ref10) {
  var size = _ref10.size,
      round = _ref10.round,
      theme = _ref10.theme,
      squared = _ref10.squared;
  return (round || squared) && "\n    width: ".concat(theme.button.size.sm, ";\n    height: ").concat(theme.button.size.sm, ";\n\n    ").concat(media.md, " {\n      width: ").concat(theme.button.size[size], ";\n      height: ").concat(theme.button.size[size], ";\n    }\n  ");
}, function (_ref11) {
  var disabled = _ref11.disabled,
      theme = _ref11.theme,
      isFlat = _ref11.isFlat;
  return !disabled && !isFlat && "\n    :hover {\n      box-shadow: ".concat(theme.dimension.elevationLevel3, ";\n    }");
}, function (_ref12) {
  var fullWidth = _ref12.fullWidth;
  return fullWidth && "\n    width: 100%;\n  ";
}, function (_ref13) {
  var theme = _ref13.theme,
      curved = _ref13.curved;
  return curved && "border-radius: ".concat(theme.dimension.borderRadius7, ";");
}, function (_ref14) {
  var actionType = _ref14.actionType,
      disabled = _ref14.disabled,
      isLoading = _ref14.isLoading,
      theme = _ref14.theme,
      isFlat = _ref14.isFlat;
  return actionType === 'prominent' && (disabled ? "\n        background: ".concat(theme.color.grey4, ";\n        border: 2px solid ").concat(theme.color.grey4, ";\n        color: ").concat(theme.color.white, ";\n        opacity: ").concat(theme.polished.inactive, ";") : "\n        background: ".concat(theme.color.primary, ";\n        border: 2px solid ").concat(theme.color.primary, ";\n        color: ").concat(isLoading ? 'transparent' : theme.color.white, ";\n\n        :hover {\n          background: ").concat(!isFlat && darken(theme.polished.darken, theme.color.primary), ";\n          border: 2px solid ").concat(!isFlat && darken(theme.polished.darken, theme.color.primary), ";\n        }")) || actionType === 'primary' && (disabled ? "\n          background: ".concat(theme.color.primary, ";\n          border: 2px solid ").concat(theme.color.primary, ";\n          color: ").concat(theme.color.grey2, ";\n          opacity: ").concat(theme.polished.inactive, ";") : "\n          background: ".concat(theme.color.primary, ";\n          border: 2px solid ").concat(theme.color.primary, ";\n          color: ").concat(isLoading ? 'transparent' : theme.color.white)) || actionType === 'secondary' && "background: ".concat(theme.color.white, ";\n\n      ").concat(disabled ? "\n          border: 2px solid ".concat(theme.color.grey4, ";\n          color: ").concat(theme.color.white, ";\n          opacity: ").concat(theme.polished.inactive, ";") : "\n          border: 2px solid ".concat(theme.color.grey5, ";\n          color: ").concat(isLoading ? 'transparent' : theme.color.grey5, ";")) || actionType === 'ghost' && "border: 2px solid ".concat(theme.color.white, ";\n       background: ").concat(theme.color.white, ";\n\n      ").concat(disabled ? "\n        color: ".concat(theme.color.grey5, ";\n        opacity: ").concat(theme.polished.inactive, ";") : "\n        color: ".concat(isLoading ? 'transparent' : theme.color.grey5, ";\n\n        :hover {\n          box-shadow: ").concat(!isFlat && theme.dimension.elevationLevel3, ";\n        }"), "\n    ") || actionType === 'inverted' && "border: 2px solid ".concat(theme.color.white, ";\n       background: ").concat(theme.color.grey4, ";\n       \n    ").concat(disabled ? "\n      color: ".concat(theme.color.white, ";\n      opacity: ").concat(theme.polished.inactive, ";") : "\n      color: ".concat(isLoading ? 'transparent' : theme.color.white, ";\n\n      :hover {\n        box-shadow: none;\n        background: ").concat(theme.color.grey4, ";\n      }"), "\n  ") || actionType === 'outlined' && "border: 2px solid ".concat(theme.color.primary, ";\n       background: ").concat(theme.color.white, ";\n\n    ").concat(disabled ? "\n      opacity: ".concat(theme.polished.inactive, ";\n      :hover {\n        box-shadow: none;\n      }\n        ") : "\n        color: ".concat(isLoading ? 'transparent' : theme.color.primary, ";\n      "), "\n  ") || actionType === 'lightBorder' && "border: 1px solid ".concat(theme.color.grey2, ";\n       background: ").concat(theme.color.white, ";\n       border-radius: ").concat(theme.dimension.borderRadius7, ";\n    ").concat(disabled ? "\n      opacity: ".concat(theme.polished.inactive, ";\n      :hover {\n        box-shadow: none;\n      }\n        ") : "\n      color: ".concat(isLoading ? 'transparent' : theme.color.grey5, ";\n      "), "\n  ") || actionType === 'darkBorder' && "border: 2px solid ".concat(theme.color.grey4, ";\n       background: ").concat(theme.color.white, ";\n\n    ").concat(disabled ? "\n      opacity: ".concat(theme.polished.inactive, ";\n      :hover {\n        box-shadow: none;\n      }\n        ") : "\n        color: ".concat(isLoading ? 'transparent' : theme.color.grey5, ";\n      "), "\n  ");
});
export var StyledAnchorButton = styled.a.withConfig({
  displayName: "Buttonstyled__StyledAnchorButton",
  componentId: "sc-1x5vu3j-0"
})(["", ";-webkit-appearance:none !important;:visited,:hover,:active{box-shadow:none;}"], buttonStyles);
export var StyledButton = styled.button.withConfig({
  displayName: "Buttonstyled__StyledButton",
  componentId: "sc-1x5vu3j-1"
})(["", ";> span{color:inherit;display:block;text-align:center;width:100%;}", ""], buttonStyles, function (_ref15) {
  var actionType = _ref15.actionType,
      disabled = _ref15.disabled,
      isLoading = _ref15.isLoading,
      theme = _ref15.theme;
  return actionType === 'primary' && (disabled ? "color: ".concat(theme.color.grey2, ";") : "color: ".concat(isLoading ? 'transparent' : theme.color.white));
});

var RouterLinkWrapper = function RouterLinkWrapper(_ref16) {
  var children = _ref16.children,
      className = _ref16.className,
      _ref16$to = _ref16.to,
      to = _ref16$to === void 0 ? '#' : _ref16$to;
  return React.createElement(RouterLink, {
    className: className,
    to: to
  }, children);
};

export var StyledRouterButton = styled(RouterLinkWrapper).withConfig({
  displayName: "Buttonstyled__StyledRouterButton",
  componentId: "sc-1x5vu3j-2"
})(["", ";"], buttonStyles);
export var StyledLoadingIndicator = styled(LoadingIndicator).withConfig({
  displayName: "Buttonstyled__StyledLoadingIndicator",
  componentId: "sc-1x5vu3j-3"
})(["top:0;bottom:0;left:0;right:0;margin:auto;"]);
//# sourceMappingURL=Button.styled.js.map