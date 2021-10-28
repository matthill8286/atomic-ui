function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css, media, styled } from "../../../../styles";
import { getColor } from "../../../../utils/helper";
import { Typo } from "../Typo";
var StyledFeaturedHeading = styled(Typo).withConfig({
  displayName: "HeadingFeatured__StyledFeaturedHeading",
  componentId: "nodesf-0"
})(function (_ref) {
  var theme = _ref.theme,
      fixedSize = _ref.fixedSize,
      fixedMdSize = _ref.fixedMdSize;
  return css(["font-weight:bold;letter-spacing:normal;max-height:fit-content;padding-top:", ";text-transform:", ";line-height:", ";font-size:", ";", "{max-height:100%;}", ""], theme.heading.featured.fontPadding, theme.heading.featured.textTransform, theme.heading.featured.lineHeight.xs, fixedSize ? theme.font.size[fixedSize] : theme.heading.featured.fontSize, media.ie11, !fixedSize && css(["", "{font-size:", ";line-height:", ";}", ""], media.md, theme.font.size.xxxxl, theme.heading.featured.lineHeight.md, !fixedMdSize && css(["", "{font-size:", ";line-height:", ";}"], media.xl, theme.heading.featured.fontSize, theme.heading.featured.lineHeight.xl)));
});
export var HeadingFeatured = function HeadingFeatured(_ref2) {
  var children = _ref2.children,
      _ref2$uppercase = _ref2.uppercase,
      uppercase = _ref2$uppercase === void 0 ? false : _ref2$uppercase,
      _ref2$limitLines = _ref2.limitLines,
      limitLines = _ref2$limitLines === void 0 ? 2 : _ref2$limitLines,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'primary' : _ref2$color,
      _ref2$tag = _ref2.tag,
      tag = _ref2$tag === void 0 ? 'p' : _ref2$tag,
      restProps = _objectWithoutProperties(_ref2, ["children", "uppercase", "limitLines", "color", "tag"]);

  var props = _objectSpread({
    margin: '0',
    tag: tag,
    color: getColor({
      defaultColor: 'grey6',
      color: color
    }),
    fontFamily: 'featured',
    fontSize: 'xxxxl',
    spacing: 'base'
  }, restProps);

  return React.createElement(StyledFeaturedHeading, _extends({
    limitLines: limitLines,
    toUpperCase: uppercase
  }, props), children);
};
HeadingFeatured.displayName = 'HeadingFeatured';
//# sourceMappingURL=HeadingFeatured.js.map