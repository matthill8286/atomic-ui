function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { rotateForward } from "../../../styles/animation";
import { styled } from "../../../styles/styled";
var StyledLoadingWrapper = styled.div.withConfig({
  displayName: "LoadingIndicator__StyledLoadingWrapper",
  componentId: "mnz2yx-0"
})(["width:", "px;height:", "px;display:", ";position:absolute;& div{box-sizing:border-box;display:block;position:absolute;width:100%;height:100%;border:", "px solid;border-radius:50%;animation:", " 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:", " transparent transparent transparent;}& div:nth-child(1){animation-delay:-0.45s;}& div:nth-child(2){animation-delay:-0.3s;}& div:nth-child(3){animation-delay:-0.15s;}"], function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var isVisible = _ref3.isVisible;
  return isVisible ? 'block' : 'none';
}, function (_ref4) {
  var size = _ref4.size;
  return size * 0.1;
}, rotateForward, function (_ref5) {
  var theme = _ref5.theme,
      color = _ref5.color;
  return theme.color[color];
});
export var StyledLoadingWrapperAlternate = styled.ul.withConfig({
  displayName: "LoadingIndicator__StyledLoadingWrapperAlternate",
  componentId: "mnz2yx-1"
})(["position:absolute;display:", ";margin:0 auto;padding:0;justify-content:center;height:", "px;li{list-style:none;width:", "px;height:", "px;margin:0 3px;animation:animate 0.4s infinite alternate;background:", ";&:nth-child(2){animation-delay:0.1s;}&:nth-child(3){animation-delay:0.2s;}}@keyframes animate{0%{transform:scaleY(1);}25%{transform:scaleY(1);}50%{transform:scaleY(1);}75%{transform:scaleY(1);}100%{transform:scaleY(1.7);}}"], function (_ref6) {
  var isVisible = _ref6.isVisible;
  return isVisible ? 'flex' : 'none';
}, function (_ref7) {
  var size = _ref7.size;
  return size * 0.3;
}, function (_ref8) {
  var barWidth = _ref8.barWidth;
  return barWidth * 0.05;
}, function (_ref9) {
  var size = _ref9.size;
  return size * 0.3;
}, function (_ref10) {
  var theme = _ref10.theme,
      color = _ref10.color;
  return theme.color[color];
});
export var LoadingIndicator = function LoadingIndicator(_ref11) {
  var isVisible = _ref11.isVisible,
      _ref11$size = _ref11.size,
      size = _ref11$size === void 0 ? 50 : _ref11$size,
      _ref11$barWidth = _ref11.barWidth,
      barWidth = _ref11$barWidth === void 0 ? 15 : _ref11$barWidth,
      _ref11$color = _ref11.color,
      color = _ref11$color === void 0 ? 'primary' : _ref11$color,
      otherProps = _objectWithoutProperties(_ref11, ["isVisible", "size", "barWidth", "color"]);

  return React.createElement(StyledLoadingWrapper, _extends({
    isVisible: isVisible,
    size: size,
    barWidth: barWidth,
    color: color
  }, otherProps), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null));
};
//# sourceMappingURL=LoadingIndicator.js.map