import React from 'react';
import { SkeletonBlockItem } from "../../../Atoms/Skeleton";
import { LazyLoadImage } from "../../../Molecules/LazyLoadImage";
import { media } from "../../../../styles/media";
import { css, styled } from "../../../../styles/styled";
import { isAlternateTheme } from "../../../../utils/helper";
import { isPortrait } from "../AssetTile.styled";
var StyledPictureWrapper = styled.div.withConfig({
  displayName: "AssetImage__StyledPictureWrapper",
  componentId: "l46da6-0"
})(["", ""], function (_ref) {
  var hasBottomMargin = _ref.hasBottomMargin,
      theme = _ref.theme,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth;
  return "\n    text-align: center;\n    flex: 1;\n    height: ".concat(function (_ref2) {
    var orientation = _ref2.orientation,
        isCompact = _ref2.isCompact,
        height = _ref2.height;
    return !isPortrait(orientation) ? '100%' : height;
  }, ";\n\n    ").concat(media.md, " {\n      ").concat(!hasBottomMargin ? css(["margin:0;"]) : '', "\n      text-align: unset;\n    }\n");
});
export var AssetImage = function AssetImage(_ref3) {
  var children = _ref3.children,
      _ref3$hasBottomMargin = _ref3.hasBottomMargin,
      hasBottomMargin = _ref3$hasBottomMargin === void 0 ? false : _ref3$hasBottomMargin,
      height = _ref3.height,
      lazyLoad = _ref3.lazyLoad,
      _ref3$loading = _ref3.loading,
      loading = _ref3$loading === void 0 ? false : _ref3$loading,
      onPictureClick = _ref3.onPictureClick,
      assetImage = _ref3.assetImage,
      rounded = _ref3.rounded,
      title = _ref3.title,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '100%' : _ref3$width,
      minWidth = _ref3.minWidth,
      maxWidth = _ref3.maxWidth,
      withLQIP = _ref3.withLQIP,
      withNativeLoading = _ref3.withNativeLoading;

  if (loading) {
    return React.createElement(StyledPictureWrapper, {
      hasBottomMargin: hasBottomMargin,
      minWidth: minWidth,
      maxWidth: maxWidth,
      onClick: onPictureClick
    }, React.createElement(SkeletonBlockItem, {
      width: width,
      height: height
    }));
  }

  return React.createElement(StyledPictureWrapper, {
    hasBottomMargin: hasBottomMargin,
    onClick: onPictureClick
  }, React.createElement(LazyLoadImage, {
    "data-test": "asset-card-image",
    src: assetImage,
    alt: title,
    height: height,
    width: width,
    rounded: rounded,
    objectFit: isAlternateTheme() ? 'fill' : 'cover',
    lazyLoad: lazyLoad,
    withLQIP: withLQIP,
    withNativeLoading: withNativeLoading
  }, children));
};
//# sourceMappingURL=AssetImage.js.map