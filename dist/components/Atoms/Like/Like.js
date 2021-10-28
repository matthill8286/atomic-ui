function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Likes, StyledIconWrapper, StyledLike, Text } from "./Like.styled";
export var Like = function Like(_ref) {
  var _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      children = _ref.children,
      className = _ref.className,
      cursor = _ref.cursor,
      color = _ref.color,
      decorationColor = _ref.decorationColor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      fontSize = _ref.fontSize,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      lineHeight = _ref.lineHeight,
      onClick = _ref.onClick,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'small' : _ref$scale,
      copy = _ref.copy,
      likes = _ref.likes,
      _ref$underline = _ref.underline,
      underline = _ref$underline === void 0 ? true : _ref$underline,
      props = _objectWithoutProperties(_ref, ["bold", "children", "className", "cursor", "color", "decorationColor", "disabled", "fontSize", "iconLeft", "iconRight", "inline", "lineHeight", "onClick", "scale", "copy", "likes", "underline"]);

  var isSmall = scale === 'small';
  var styleProps = {
    color: decorationColor || color,
    cursor: cursor,
    hasIconLeft: !!iconLeft,
    hasIconRight: !!iconRight,
    isBold: bold,
    isDisabled: disabled,
    isInline: inline,
    isLarge: scale === 'large',
    isSmall: isSmall,
    isUnderlined: underline
  };

  if (!likes) {
    return null;
  }

  return React.createElement(StyledLike, _extends({
    className: className,
    onClick: onClick
  }, styleProps, props), iconLeft && React.createElement(StyledIconWrapper, styleProps, iconLeft), React.createElement(Likes, {
    tag: "div",
    fontSize: fontSize || (isSmall ? 'xs' : 'sm'),
    lineHeight: lineHeight,
    bold: bold,
    color: color,
    isInline: inline
  }, likes), React.createElement(Text, {
    tag: "div",
    fontSize: fontSize || (isSmall ? 'xs' : 'sm'),
    lineHeight: lineHeight,
    color: color,
    isInline: inline
  }, children), iconRight && React.createElement(StyledIconWrapper, styleProps, iconRight));
};
//# sourceMappingURL=Like.js.map