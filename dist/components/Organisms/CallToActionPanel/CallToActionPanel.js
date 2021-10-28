function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { LazyLoadImage } from "../../Molecules/LazyLoadImage";
import { media, spacing } from "../../../styles";
import { styled } from "../../../styles/styled";
import { Section } from "../../Atoms/Section";
import { CallToActionElement } from "./CallToActionElement";
import { AssetTile, AssetTileLayout } from "../AssetTile";
var StyledAssetTile = styled.div.withConfig({
  displayName: "CallToActionPanel__StyledAssetTile",
  componentId: "sg5894-0"
})(["width:100%;", "{width:90%;margin:0 auto;}"], media.maxSm);
export var StyledCtaTextColumn = styled.div.withConfig({
  displayName: "CallToActionPanel__StyledCtaTextColumn",
  componentId: "sg5894-1"
})(["flex-basis:100%;flex-wrap:nowrap;flex-direction:column;margin:", " auto;padding:", " ", ";", "{flex-direction:row;flex:1;padding:", ";margin:", " 0;}"], spacing.base.xs, spacing.base.sm, spacing.base.md, media.md, spacing.base.lg, spacing.base.sm);
export var StyledCtaImageColumn = styled.div.withConfig({
  displayName: "CallToActionPanel__StyledCtaImageColumn",
  componentId: "sg5894-2"
})(["order:unset;flex:unset;flex-direction:column;display:flex;padding:0;margin:", " 0;> svg,img{margin:0 auto;}", "{flex-direction:row;flex:0.5;margin:", " 0;padding-right:", ";padding-left:", ";justify-content:", ";order:", ";> svg,img{margin:0 auto;justify-content:", ";", ";}}"], spacing.base.sm, media.md, spacing.base.sm, function (_ref) {
  var alignment = _ref.alignment;
  return alignment === 'left' ? spacing.base.lg : 0;
}, function (_ref2) {
  var alignment = _ref2.alignment;
  return alignment === 'right' ? spacing.base.lg : spacing.base.sm;
}, function (_ref3) {
  var alignment = _ref3.alignment;
  return alignment === 'right' ? 'center' : 'flex-start';
}, function (_ref4) {
  var order = _ref4.order;
  return order;
}, function (_ref5) {
  var alignment = _ref5.alignment;
  return alignment === 'right' ? 'center' : 'flex-start';
}, function (_ref6) {
  var alignment = _ref6.alignment;
  return alignment === 'left' && "flex: 1;";
});
export var StyledCtaRow = styled(Section).withConfig({
  displayName: "CallToActionPanel__StyledCtaRow",
  componentId: "sg5894-3"
})(["flex-wrap:wrap;display:flex;max-width:1250px;align-items:center;justify-content:space-around;padding:0 ", ";margin:0;"], spacing.base.sm);

function getGraphCmsImageParams(imageUrl) {
  return imageUrl ? "".concat(imageUrl, "&blur=400&px=8") : undefined;
}

export var CallToActionPanel = function CallToActionPanel(_ref7) {
  var _image$mobile, _image$mobile2, _image$tablet, _image$tablet2;

  var children = _ref7.children,
      image = _ref7.image,
      svg = _ref7.svg,
      alignment = _ref7.alignment,
      _ref7$withLQIP = _ref7.withLQIP,
      withLQIP = _ref7$withLQIP === void 0 ? false : _ref7$withLQIP,
      _ref7$showReadMore = _ref7.showReadMore,
      showReadMore = _ref7$showReadMore === void 0 ? false : _ref7$showReadMore,
      _ref7$showFeatured = _ref7.showFeatured,
      showFeatured = _ref7$showFeatured === void 0 ? false : _ref7$showFeatured,
      _ref7$isOpenAsset = _ref7.isOpenAsset,
      isOpenAsset = _ref7$isOpenAsset === void 0 ? false : _ref7$isOpenAsset,
      element = _ref7.element,
      showMore = _ref7.showMore,
      asset = _ref7.asset,
      onAssetClick = _ref7.onAssetClick,
      richTextCopy = _ref7.richTextCopy,
      props = _objectWithoutProperties(_ref7, ["children", "image", "svg", "alignment", "withLQIP", "showReadMore", "showFeatured", "isOpenAsset", "element", "showMore", "asset", "onAssetClick", "richTextCopy"]);

  return React.createElement(StyledCtaRow, null, React.createElement(StyledCtaImageColumn, {
    alignment: alignment,
    order: alignment === 'right' ? 1 : -1
  }, image || image && asset ? React.createElement(LazyLoadImage, _extends({}, props, {
    withLQIP: withLQIP,
    src: image.url,
    lowResSrc: getGraphCmsImageParams(image.url),
    srcSm: image === null || image === void 0 ? void 0 : (_image$mobile = image.mobile) === null || _image$mobile === void 0 ? void 0 : _image$mobile.url,
    lowResSrcSm: getGraphCmsImageParams(image === null || image === void 0 ? void 0 : (_image$mobile2 = image.mobile) === null || _image$mobile2 === void 0 ? void 0 : _image$mobile2.url),
    srcMd: image === null || image === void 0 ? void 0 : (_image$tablet = image.tablet) === null || _image$tablet === void 0 ? void 0 : _image$tablet.url,
    lowResSrcMd: getGraphCmsImageParams(image === null || image === void 0 ? void 0 : (_image$tablet2 = image.tablet) === null || _image$tablet2 === void 0 ? void 0 : _image$tablet2.url),
    alt: image.alt,
    rounded: true
  })) : asset ? React.createElement(StyledAssetTile, null, React.createElement(AssetTile, {
    assetView: "list",
    orientation: "portrait",
    asset: asset,
    isOpenAsset: isOpenAsset,
    showFeatured: showFeatured,
    competencyLabel: asset === null || asset === void 0 ? void 0 : asset.competency,
    layout: AssetTileLayout.gridItem,
    onClick: onAssetClick
  })) : svg), React.createElement(StyledCtaTextColumn, {
    alignment: alignment
  }, React.createElement(CallToActionElement, {
    showReadMore: showReadMore,
    showMore: showMore,
    element: element,
    richTextCopy: richTextCopy
  }), children));
};
//# sourceMappingURL=CallToActionPanel.js.map