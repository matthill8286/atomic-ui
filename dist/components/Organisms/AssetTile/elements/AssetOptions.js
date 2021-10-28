function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { IconButton } from "../../../Atoms/Button";
import { css, styled } from "../../../../styles/styled";
import { Icon } from "../../../Atoms/Icon";
var StyledTopRight = styled.div.withConfig({
  displayName: "AssetOptions__StyledTopRight",
  componentId: "sc-1wy9c6c-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["position:absolute;z-index:10;display:flex;top:calc(", " - 0.5px);right:calc(", " + 1px);"], theme.spacing.base.sm, theme.spacing.base.sm);
});
export var StyledBottomRight = styled.div.withConfig({
  displayName: "AssetOptions__StyledBottomRight",
  componentId: "sc-1wy9c6c-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["position:absolute;z-index:10;display:flex;bottom:calc(", " - 0.5px);right:calc(", " + 1px);"], theme.spacing.base.sm, theme.spacing.base.sm);
});
export var StyledBottomLeft = styled.div.withConfig({
  displayName: "AssetOptions__StyledBottomLeft",
  componentId: "sc-1wy9c6c-2"
})(function (_ref3) {
  var theme = _ref3.theme;
  return css(["position:absolute;z-index:10;display:flex;bottom:calc(", " - 0.5px);left:calc(", " + 1px);"], theme.spacing.base.sm, theme.spacing.base.sm);
});
export var StyledTopLeft = styled.div.withConfig({
  displayName: "AssetOptions__StyledTopLeft",
  componentId: "sc-1wy9c6c-3"
})(function (_ref4) {
  var theme = _ref4.theme;
  return css(["position:absolute;z-index:10;display:flex;top:calc(", " - 0.5px);left:calc(", " + 1px);"], theme.spacing.base.sm, theme.spacing.base.sm);
});
export var StyledIconButton = styled(IconButton).withConfig({
  displayName: "AssetOptions__StyledIconButton",
  componentId: "sc-1wy9c6c-4"
})(["border:none;display:flex;padding:0;min-width:auto;justify-content:center;"]);
export var TopRight = function TopRight(_ref5) {
  var StyledPosition = _ref5.StyledPosition,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? 'grey5' : _ref5$color,
      onOptionClick = _ref5.onOptionClick,
      icon = _ref5.icon,
      _ref5$showOptions = _ref5.showOptions,
      showOptions = _ref5$showOptions === void 0 ? true : _ref5$showOptions,
      modifiers = _ref5.modifiers;

  if (!showOptions) {
    return null;
  }

  return React.createElement(StyledPosition, null, React.createElement(StyledIconButton, _extends({}, modifiers, {
    actionType: "inverted",
    onClick: onOptionClick
  }), React.createElement(Icon, {
    color: color,
    height: "md",
    width: "md"
  }, icon)));
};
//# sourceMappingURL=AssetOptions.js.map