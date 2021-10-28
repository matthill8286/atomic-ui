function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { LazyLoadImage } from "../../Molecules/LazyLoadImage";
import { media, spacing } from "../../../styles";
import { styled } from "../../../styles/styled";
export var StyledText = styled.div.withConfig({
  displayName: "ImageAndText__StyledText",
  componentId: "h8ezsj-0"
})(["flex-basis:100%;padding:0 ", ";margin-top:", ";h3{margin:0;}", "{flex-basis:calc(50% - 2 * ", ");padding:0 ", ";margin-top:0;}"], spacing.base.sm, spacing.base.xs, media.md, spacing.base.sm, spacing.base.sm);
export var StyledImage = styled.div.withConfig({
  displayName: "ImageAndText__StyledImage",
  componentId: "h8ezsj-1"
})(["flex-basis:100%;order:unset;padding:0 ", ";", "{flex-basis:calc(50% - 2 * ", ");order:", ";justify-content:center;display:flex;}"], spacing.base.sm, media.md, spacing.base.sm, function (_ref) {
  var order = _ref.order;
  return order;
});
export var StyledRow = styled.div.withConfig({
  displayName: "ImageAndText__StyledRow",
  componentId: "h8ezsj-2"
})(["flex-wrap:wrap;display:flex;margin:", " -", ";align-items:center;justify-content:space-between;"], spacing.base.sm, spacing.base.sm);

function getPrismicLqipParams(imageUrl, contentful) {
  var hasQueryParams = (imageUrl === null || imageUrl === void 0 ? void 0 : imageUrl.indexOf('?')) !== -1;
  return imageUrl ? contentful ? "".concat(imageUrl).concat(hasQueryParams ? '&' : '?', "q=1") : "".concat(imageUrl).concat(hasQueryParams ? '&' : '?', "blur=400&px=8") : undefined;
}

export var ImageAndText = function ImageAndText(_ref2) {
  var _image$mobile, _image$mobile2, _image$tablet, _image$tablet2;

  var children = _ref2.children,
      image = _ref2.image,
      imageAlignment = _ref2.imageAlignment,
      _ref2$withLQIP = _ref2.withLQIP,
      withLQIP = _ref2$withLQIP === void 0 ? false : _ref2$withLQIP,
      _ref2$contentful = _ref2.contentful,
      contentful = _ref2$contentful === void 0 ? false : _ref2$contentful,
      props = _objectWithoutProperties(_ref2, ["children", "image", "imageAlignment", "withLQIP", "contentful"]);

  return React.createElement(StyledRow, null, React.createElement(StyledImage, {
    order: imageAlignment === 'right' ? 1 : -1
  }, React.createElement(LazyLoadImage, _extends({}, props, {
    withLQIP: withLQIP,
    src: image.url,
    lowResSrc: getPrismicLqipParams(image.url, contentful),
    srcSm: image === null || image === void 0 ? void 0 : (_image$mobile = image.mobile) === null || _image$mobile === void 0 ? void 0 : _image$mobile.url,
    lowResSrcSm: getPrismicLqipParams(image === null || image === void 0 ? void 0 : (_image$mobile2 = image.mobile) === null || _image$mobile2 === void 0 ? void 0 : _image$mobile2.url, contentful),
    srcMd: image === null || image === void 0 ? void 0 : (_image$tablet = image.tablet) === null || _image$tablet === void 0 ? void 0 : _image$tablet.url,
    lowResSrcMd: getPrismicLqipParams(image === null || image === void 0 ? void 0 : (_image$tablet2 = image.tablet) === null || _image$tablet2 === void 0 ? void 0 : _image$tablet2.url, contentful),
    alt: image.alt,
    rounded: true
  }))), React.createElement(StyledText, null, children));
};
//# sourceMappingURL=ImageAndText.js.map