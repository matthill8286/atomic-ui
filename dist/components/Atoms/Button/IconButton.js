function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { styled } from "../../../styles/styled";
import { Button } from "./Button";
export var StyledIconButton = styled(Button).withConfig({
  displayName: "IconButton__StyledIconButton",
  componentId: "sc-1f9hzdu-0"
})(["min-width:", ";height:", ";padding:0 ", ";"], function (_ref) {
  var width = _ref.width,
      theme = _ref.theme;
  return typeof width === 'number' ? "".concat(width, "px") : theme.spacing.base[width] || width;
}, function (_ref2) {
  var height = _ref2.height,
      theme = _ref2.theme;
  return typeof height === 'number' ? "".concat(height, "px") : theme.spacing.base[height] || height;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.base.xs;
});
export var IconButton = function IconButton(_ref4) {
  var _ref4$actionType = _ref4.actionType,
      actionType = _ref4$actionType === void 0 ? 'outlined' : _ref4$actionType,
      _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? 40 : _ref4$height,
      width = _ref4.width,
      color = _ref4.color,
      isLoading = _ref4.isLoading,
      isFlat = _ref4.isFlat,
      onClick = _ref4.onClick,
      rest = _objectWithoutProperties(_ref4, ["actionType", "height", "width", "color", "isLoading", "isFlat", "onClick"]);

  return React.createElement(StyledIconButton, _extends({
    color: color,
    actionType: actionType,
    width: width || height,
    height: height,
    isFlat: isFlat,
    isLoading: isLoading,
    onClick: onClick
  }, rest));
};
IconButton.displayName = 'IconButton';
//# sourceMappingURL=IconButton.js.map