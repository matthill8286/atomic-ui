function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css, styled } from "../../../styles/styled";
import { getSizeInPx } from "../../../styles";
var DefaultSize = 'xs';
var StyledHR = styled.hr.withConfig({
  displayName: "Divider__StyledHR",
  componentId: "qt1mps-0"
})(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? DefaultSize : _ref$height;
  return css(["height:", ";width:100%;background:", ";border-width:0;margin:0;"], getSizeInPx(height, theme.spacing.base), theme.color[color]);
});
export var Divider = function Divider(_ref2) {
  var color = _ref2.color,
      height = _ref2.height,
      otherProps = _objectWithoutProperties(_ref2, ["color", "height"]);

  return React.createElement(StyledHR, _extends({
    height: height,
    color: color
  }, otherProps));
};
//# sourceMappingURL=Divider.js.map