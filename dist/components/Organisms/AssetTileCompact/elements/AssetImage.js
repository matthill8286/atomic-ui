function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Link } from "../../../Atoms/Link";
import { NativeLazyLoadOptions, Picture } from "../../../Atoms/Picture";
import { SkeletonBlockItem } from "../../../Atoms/Skeleton";
import { media } from "../../../../styles/media";
import { styled } from "../../../../styles/styled";
var StyledPictureWrapper = styled.div.withConfig({
  displayName: "AssetImage__StyledPictureWrapper",
  componentId: "sc-1othqgi-0"
})(["align-items:center;display:flex;margin-left:12px;", "{text-align:unset;}"], media.md);
export var AssetImage = function AssetImage(_ref) {
  var assetImage = _ref.assetImage,
      children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      onPictureClick = _ref.onPictureClick,
      _ref$lazyLoad = _ref.lazyLoad,
      lazyLoad = _ref$lazyLoad === void 0 ? NativeLazyLoadOptions.Eager : _ref$lazyLoad,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      imageLink = _ref.imageLink,
      props = _objectWithoutProperties(_ref, ["assetImage", "children", "width", "height", "title", "onPictureClick", "lazyLoad", "loading", "imageLink"]);

  var AssetPicture = function AssetPicture() {
    return React.createElement(Picture, {
      rounded: true,
      src: assetImage,
      alt: title,
      width: width,
      height: height,
      loading: lazyLoad
    }, children);
  };

  return React.createElement(StyledPictureWrapper, _extends({
    onClick: onPictureClick
  }, props), assetImage && !loading ? imageLink ? React.createElement(Link, {
    to: imageLink,
    inline: false,
    underline: false
  }, React.createElement(AssetPicture, null)) : React.createElement(AssetPicture, null) : React.createElement(SkeletonBlockItem, {
    width: width,
    height: height
  }));
};
//# sourceMappingURL=AssetImage.js.map