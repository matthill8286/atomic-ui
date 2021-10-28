function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { SkeletonBlockItem } from "../../../Atoms/Skeleton";
import { StyledMediaContainer, StyledLinearGradient } from "../AssetTile.styled";
export var AssetMediaTile = function AssetMediaTile(_ref) {
  var AssetMediaWrapper = _ref.AssetMediaWrapper,
      children = _ref.children,
      orientation = _ref.orientation,
      height = _ref.height,
      width = _ref.width,
      minWidth = _ref.minWidth,
      minHeight = _ref.minHeight,
      isCompact = _ref.isCompact,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      unsupportedMedia = _ref.unsupportedMedia,
      isDisabled = _ref.isDisabled,
      onMediaClick = _ref.onMediaClick,
      assetImage = _ref.assetImage,
      videoFallbackImage = _ref.videoFallbackImage,
      mediaType = _ref.mediaType,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["AssetMediaWrapper", "children", "orientation", "height", "width", "minWidth", "minHeight", "isCompact", "loading", "unsupportedMedia", "isDisabled", "onMediaClick", "assetImage", "videoFallbackImage", "mediaType", "title"]);

  var inputProps = mediaType === 'Video' ? {
    src: videoFallbackImage
  } : {
    src: assetImage
  };
  return React.createElement(StyledMediaContainer, {
    imageHeight: height,
    width: width,
    isDisabled: isDisabled,
    isCompact: isCompact,
    onClick: onMediaClick,
    orientation: orientation
  }, loading || !assetImage ? React.createElement(SkeletonBlockItem, {
    height: "100%",
    width: "100%"
  }) : React.createElement(AssetMediaWrapper, {
    src: assetImage,
    rounded: true,
    height: height,
    width: width,
    title: title
  }, !isCompact && React.createElement(StyledLinearGradient, null), children));
};
//# sourceMappingURL=AssetMediaTile.js.map