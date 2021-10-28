function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { breakpoints } from "../../../styles";
import { NativeLazyLoadOptions } from "./Picture.interface";
import { StyledPicture } from "./Picture.styled";
import { SkeletonBlockItem } from "../Skeleton";
export var Picture = function Picture(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      height = _ref.height,
      src = _ref.src,
      srcLg = _ref.srcLg,
      srcMd = _ref.srcMd,
      srcSm = _ref.srcSm,
      alt = _ref.alt,
      children = _ref.children,
      objectFit = _ref.objectFit,
      rounded = _ref.rounded,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? NativeLazyLoadOptions.Eager : _ref$loading,
      otherProps = _objectWithoutProperties(_ref, ["width", "height", "src", "srcLg", "srcMd", "srcSm", "alt", "children", "objectFit", "rounded", "loading"]);

  return React.createElement(StyledPicture, _extends({
    width: width,
    height: height,
    objectFit: objectFit || 'cover',
    rounded: rounded
  }, otherProps), React.createElement("picture", {
    style: {
      width: '100%',
      height: height
    }
  }, srcSm && React.createElement("source", {
    media: "(max-width: ".concat(breakpoints.sm - 1, "px)"),
    srcSet: srcSm
  }), srcMd && React.createElement("source", {
    media: "(max-width: ".concat(breakpoints.md - 1, "px)"),
    srcSet: srcMd
  }), srcLg && React.createElement("source", {
    media: "(max-width: ".concat(breakpoints.lg - 1, "px)"),
    srcSet: srcLg
  }), src ? React.createElement("img", {
    src: src,
    alt: alt || 'image',
    width: width,
    height: height,
    loading: loading
  }) : React.createElement(SkeletonBlockItem, {
    width: width,
    height: height
  })), children);
};
//# sourceMappingURL=Picture.js.map