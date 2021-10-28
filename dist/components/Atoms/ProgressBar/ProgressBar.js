function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { styled } from "../../../styles/styled";
var StyledProgressBar = styled.progress.withConfig({
  displayName: "ProgressBar__StyledProgressBar",
  componentId: "sc-1sy2sdl-0"
})(["display:inline-block;appearance:none;position:relative;height:", ";border:none;background:", ";background-size:auto;width:100%;overflow:hidden;color:", ";&::-webkit-progress-value{background:", ";}&::-webkit-progress-bar{background:", ";}&::-moz-progress-bar{background:", ";}&::-ms-fill{background:", ";}"], function (_ref) {
  var isSmall = _ref.isSmall;
  return isSmall ? '4px' : '15px';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.grey2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.grey2;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.primary;
});
export var ProgressBar = function ProgressBar(_ref8) {
  var value = _ref8.value,
      _ref8$max = _ref8.max,
      max = _ref8$max === void 0 ? 100 : _ref8$max,
      _ref8$small = _ref8.small,
      small = _ref8$small === void 0 ? false : _ref8$small,
      otherProps = _objectWithoutProperties(_ref8, ["value", "max", "small"]);

  return React.createElement(StyledProgressBar, _extends({
    max: max,
    value: value,
    isSmall: small
  }, otherProps));
};
//# sourceMappingURL=ProgressBar.js.map