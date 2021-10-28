function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { useGraphCmsImages } from "../../../../utils/useGraphCmsImages";
import { Link } from "../../../Atoms/Link";
import { ImageTeaser } from "../ImageTeaser/ImageTeaser";
import { styled } from "../../../../styles";
var StyledImageTeaser = styled.div.withConfig({
  displayName: "LinkImageTeaser__StyledImageTeaser",
  componentId: "sc-1vzw7bm-0"
})(["cursor:pointer;height:100%;"]);

var getLinkTargetValue = function getLinkTargetValue(isLinkBlank) {
  return isLinkBlank ? '_blank' : '_self';
};

export var LinkImageTeaser = function LinkImageTeaser(_ref) {
  var link = _ref.link,
      images = _ref.images,
      contentful = _ref.contentful,
      lazyloadLowQuality = _ref.lazyloadLowQuality,
      onClick = _ref.onClick,
      otherImageTeaserProps = _objectWithoutProperties(_ref, ["link", "images", "contentful", "lazyloadLowQuality", "onClick"]);

  var _useGraphCmsImages = useGraphCmsImages([images.xl, images.lg, images.md, images.sm], !lazyloadLowQuality),
      _useGraphCmsImages2 = _slicedToArray(_useGraphCmsImages, 2),
      finalImages = _useGraphCmsImages2[0],
      ref = _useGraphCmsImages2[1];

  var isRelativeUrl = link === null || link === void 0 ? void 0 : link.to;
  var isAbsoluteUrl = !isRelativeUrl && (link === null || link === void 0 ? void 0 : link.href);
  return React.createElement(React.Fragment, null, isRelativeUrl && React.createElement(Link, {
    to: link.to,
    target: getLinkTargetValue(!!link.isLinkBlank)
  }, React.createElement(StyledImageTeaser, {
    "data-test": "link-wrapped-teaser",
    onClick: onClick,
    ref: ref
  }, React.createElement(ImageTeaser, _extends({}, otherImageTeaserProps, {
    finalImages: finalImages
  })))), isAbsoluteUrl && React.createElement("a", {
    href: link.href,
    target: getLinkTargetValue(!!link.isLinkBlank)
  }, React.createElement(StyledImageTeaser, {
    onClick: onClick,
    ref: ref,
    "data-test": "anchor-wrapped-teaser"
  }, React.createElement(ImageTeaser, _extends({}, otherImageTeaserProps, {
    finalImages: finalImages
  })))), !link && React.createElement(StyledImageTeaser, {
    onClick: onClick,
    ref: ref
  }, React.createElement(ImageTeaser, _extends({}, otherImageTeaserProps, {
    finalImages: finalImages
  }))));
};
//# sourceMappingURL=LinkImageTeaser.js.map