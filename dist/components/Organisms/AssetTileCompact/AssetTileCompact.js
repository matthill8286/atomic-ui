function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { StyledContentList, StyledAssetTileCompactWrapper } from "./AssetTileCompact.styled";
import { AssetImage } from "./elements";
export var AssetTileCompact = function AssetTileCompact(_ref) {
  var children = _ref.children,
      assetImage = _ref.assetImage,
      _ref$imageWidth = _ref.imageWidth,
      imageWidth = _ref$imageWidth === void 0 ? 132 : _ref$imageWidth,
      _ref$imageHeight = _ref.imageHeight,
      imageHeight = _ref$imageHeight === void 0 ? 74 : _ref$imageHeight,
      imageMaxWidth = _ref.imageMaxWidth,
      imageMinWidth = _ref.imageMinWidth,
      lazyLoadImage = _ref.lazyLoadImage,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$showImage = _ref.showImage,
      showImage = _ref$showImage === void 0 ? true : _ref$showImage,
      onClick = _ref.onClick,
      title = _ref.title,
      embedUrl = _ref.embedUrl,
      unsupportedMedia = _ref.unsupportedMedia,
      imageLink = _ref.imageLink,
      isVideo = _ref.isVideo,
      props = _objectWithoutProperties(_ref, ["children", "assetImage", "imageWidth", "imageHeight", "imageMaxWidth", "imageMinWidth", "lazyLoadImage", "loading", "showImage", "onClick", "title", "embedUrl", "unsupportedMedia", "imageLink", "isVideo"]);

  return React.createElement(StyledAssetTileCompactWrapper, _extends({
    "data-test": "compact-wrapper"
  }, props), showImage && React.createElement(AssetImage, {
    loading: !!loading,
    onPictureClick: onClick,
    title: title,
    width: "172px",
    height: "74px",
    assetImage: assetImage
  }), React.createElement(StyledContentList, {
    onClick: onClick
  }, children));
};
//# sourceMappingURL=AssetTileCompact.js.map