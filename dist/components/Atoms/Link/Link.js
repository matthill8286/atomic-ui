function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { smoothScrollWithEvent } from "../../../utils";
import { StyledIconWrapper, StyledLinkAnchor, StyledLinkButton, StyledLinkRouter, Text } from "./Link.styled";
export var Link = function Link(_ref) {
  var _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$branded = _ref.branded,
      branded = _ref$branded === void 0 ? false : _ref$branded,
      children = _ref.children,
      className = _ref.className,
      cursor = _ref.cursor,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'grey4' : _ref$color,
      decorationColor = _ref.decorationColor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      fontSize = _ref.fontSize,
      href = _ref.href,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      lineHeight = _ref.lineHeight,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'small' : _ref$scale,
      _ref$scrollOffset = _ref.scrollOffset,
      scrollOffset = _ref$scrollOffset === void 0 ? 0 : _ref$scrollOffset,
      _ref$smooth = _ref.smooth,
      smooth = _ref$smooth === void 0 ? false : _ref$smooth,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_self' : _ref$target,
      title = _ref.title,
      to = _ref.to,
      _ref$underline = _ref.underline,
      underline = _ref$underline === void 0 ? true : _ref$underline,
      _ref$isGrouped = _ref.isGrouped,
      isGrouped = _ref$isGrouped === void 0 ? false : _ref$isGrouped,
      ariaLabel = _ref.ariaLabel,
      otherProps = _objectWithoutProperties(_ref, ["bold", "branded", "children", "className", "cursor", "color", "decorationColor", "disabled", "fontSize", "href", "iconLeft", "iconRight", "inline", "lineHeight", "onClick", "onMouseDown", "scale", "scrollOffset", "smooth", "target", "title", "to", "underline", "isGrouped", "ariaLabel"]);

  var isSmall = scale === 'small';
  var isButton = onClick && !href && !to;
  var isRouterLink = to;
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
    isUnderlined: underline,
    isGrouped: isGrouped
  };
  var onClickWrapper;

  if (smooth) {
    onClickWrapper = function onClickWrapper(event) {
      try {
        smoothScrollWithEvent(event, scrollOffset);
      } catch (e) {}

      if ('function' == typeof onClick) {
        return onClick(event);
      }
    };
  } else {
    onClickWrapper = onClick;
  }

  var getChildren = function getChildren() {
    return React.createElement(React.Fragment, null, iconLeft && React.createElement(StyledIconWrapper, styleProps, iconLeft), typeof children === 'string' ? React.createElement(Text, {
      tag: "span",
      fontSize: fontSize || (isSmall ? 'xs' : 'sm'),
      lineHeight: lineHeight,
      bold: bold,
      color: color,
      isBranded: branded,
      isInline: inline,
      "aria-label": ariaLabel
    }, children) : children, iconRight && React.createElement(StyledIconWrapper, styleProps, iconRight));
  };

  var linkType = function linkType() {
    if (isButton) {
      return React.createElement(StyledLinkButton, _extends({
        className: className
      }, disabled ? {} : {
        onClick: onClickWrapper
      }, styleProps, otherProps), getChildren());
    }

    if (isRouterLink) {
      return React.createElement(StyledLinkRouter, _extends({
        onClick: onClickWrapper,
        to: to,
        className: className
      }, styleProps, {
        "data-test": "ewb-router-link"
      }), getChildren());
    }

    return React.createElement(StyledLinkAnchor, _extends({
      className: className,
      target: target,
      rel: target === '_blank' ? 'noopener noreferrer' : otherProps.rel
    }, disabled ? {} : {
      href: href,
      onClick: onClickWrapper
    }, styleProps, otherProps), getChildren());
  };

  return linkType();
};
//# sourceMappingURL=Link.js.map