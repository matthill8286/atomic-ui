import React from 'react';
import { Icon } from "../Icon";
import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
var StyledList = styled.ul.withConfig({
  displayName: "Lists__StyledList",
  componentId: "sc-1kuiyri-0"
})(["margin:", ";padding:", ";font-size:", ";", " ", " ", "{font-size:", ";", "{top:0;}}& li{margin:0;padding:0;margin-bottom:", ";& p:first-child{margin-top:0;}& p:last-child{margin-bottom:0;}}", "{float:left;position:relative;top:-2px;margin-right:", ";}"], function (_ref) {
  var theme = _ref.theme,
      withMargin = _ref.withMargin;
  return withMargin ? "".concat(theme.spacing.base.xs, " 0 ").concat(theme.spacing.base.md) : '0';
}, function (_ref2) {
  var theme = _ref2.theme,
      icon = _ref2.icon;
  return icon ? '0' : "0 0 0 ".concat(theme.spacing.base.sm);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.font.size.xs;
}, function (_ref4) {
  var icon = _ref4.icon;
  return icon && 'list-style-type: none;';
}, function (_ref5) {
  var theme = _ref5.theme,
      color = _ref5.color;
  return "color: ".concat(color ? theme.color[color] : theme.color.grey4, ";");
}, media.md, function (_ref6) {
  var theme = _ref6.theme;
  return theme.font.size.sm;
}, Icon, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.base.xs;
}, Icon, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.base.xs;
});
export var Lists = function Lists(props) {
  var _props$ordered = props.ordered,
      ordered = _props$ordered === void 0 ? false : _props$ordered,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? false : _props$icon,
      _props$withMargin = props.withMargin,
      withMargin = _props$withMargin === void 0 ? false : _props$withMargin,
      children = props.children,
      className = props.className,
      color = props.color;
  return React.createElement(StyledList, {
    as: ordered ? 'ol' : 'ul',
    icon: icon,
    withMargin: withMargin,
    className: className,
    color: color
  }, children);
};
//# sourceMappingURL=Lists.js.map