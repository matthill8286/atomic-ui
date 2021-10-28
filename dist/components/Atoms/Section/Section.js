function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
import { handleShape } from "../Card/Card.styled";

var handlePadding = function handlePadding(paddingTop, paddingBottom) {
  var top = _extends({}, paddingTop);

  var bottom = _extends({}, paddingBottom);

  return function (props) {
    return css(["", ";", ";", "{", ";", ";}", "{", ";", ";}"], top.mobile && "padding-top: ".concat(props.theme.spacing.base[top.mobile]), bottom.mobile && "padding-bottom: ".concat(props.theme.spacing.base[bottom.mobile]), media.md, top.tablet && "padding-top: ".concat(props.theme.spacing.base[top.tablet]), bottom.tablet && "padding-bottom: ".concat(props.theme.spacing.base[bottom.tablet]), media.lg, top.desktop && "padding-top: ".concat(props.theme.spacing.base[top.desktop]), bottom.desktop && "padding-bottom: ".concat(props.theme.spacing.base[bottom.desktop]));
  };
};

export var Section = styled.section.withConfig({
  displayName: "Section",
  componentId: "sc-10dbgur-0"
})(["width:100%;height:", ";left:0;right:0;background:", " no-repeat center center;background-image:", ";background-size:cover;", " ", " ", " ", "{background-image:", ";height:", ";}", "{background-image:", ";height:", ";}"], function (_ref) {
  var height = _ref.height;
  return height && height.mobile && "".concat(height.mobile, "px");
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color && theme.color[color];
}, function (_ref3) {
  var image = _ref3.image;
  return image && image.mobile && "url(".concat(image.mobile, ") ");
}, function (_ref4) {
  var paddingTop = _ref4.paddingTop,
      paddingBottom = _ref4.paddingBottom;
  return handlePadding(paddingTop, paddingBottom);
}, function (_ref5) {
  var center = _ref5.center;
  return center && "text-align: center;";
}, function (_ref6) {
  var shape = _ref6.shape;
  return shape && handleShape(shape);
}, media.md, function (_ref7) {
  var image = _ref7.image;
  return image && image.tablet && "url(".concat(image.tablet, ") ");
}, function (_ref8) {
  var height = _ref8.height;
  return height && height.tablet && "".concat(height.tablet, "px");
}, media.lg, function (_ref9) {
  var image = _ref9.image;
  return image && image.desktop && "url(".concat(image.desktop, ") ");
}, function (_ref10) {
  var height = _ref10.height;
  return height && height.desktop && "".concat(height.desktop, "px");
});
//# sourceMappingURL=Section.js.map