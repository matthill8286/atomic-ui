function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { StyledRelativeEmbeddedParent } from "./EmbeddedPlayer.styled";
export var EmbeddedWrapper = function EmbeddedWrapper(_ref) {
  var embedUrl = _ref.embedUrl,
      _ref$aspect = _ref.aspect,
      aspect = _ref$aspect === void 0 ? '16/9' : _ref$aspect,
      height = _ref.height,
      width = _ref.width,
      maxHeight = _ref.maxHeight,
      minHeight = _ref.minHeight,
      props = _objectWithoutProperties(_ref, ["embedUrl", "aspect", "height", "width", "maxHeight", "minHeight"]);

  return React.createElement(StyledRelativeEmbeddedParent, {
    aspect: aspect
  }, React.createElement(EmbeddedPlayer, _extends({
    embedUrl: embedUrl,
    height: height,
    width: width,
    maxHeight: maxHeight,
    minHeight: minHeight
  }, props)));
};
export var EmbeddedPlayer = function EmbeddedPlayer(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? '' : _ref2$title,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '100%' : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? '100%' : _ref2$height,
      embedUrl = _ref2.embedUrl,
      _ref2$frameBorder = _ref2.frameBorder,
      frameBorder = _ref2$frameBorder === void 0 ? '0' : _ref2$frameBorder,
      _ref2$sandbox = _ref2.sandbox,
      sandbox = _ref2$sandbox === void 0 ? [] : _ref2$sandbox,
      _ref2$features = _ref2.features,
      features = _ref2$features === void 0 ? ['picture-in-picture', 'showinfo=0'] : _ref2$features,
      allowfullscreen = _ref2.allowfullscreen,
      _ref2$maxHeight = _ref2.maxHeight,
      maxHeight = _ref2$maxHeight === void 0 ? '100%' : _ref2$maxHeight,
      _ref2$minHeight = _ref2.minHeight,
      minHeight = _ref2$minHeight === void 0 ? '0' : _ref2$minHeight,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["title", "width", "height", "embedUrl", "frameBorder", "sandbox", "features", "allowfullscreen", "maxHeight", "minHeight", "children"]);

  return React.createElement(React.Fragment, null, React.createElement("iframe", _extends({
    title: title,
    width: width,
    height: height,
    src: embedUrl,
    frameBorder: frameBorder,
    allow: features.join(),
    allowFullScreen: allowfullscreen,
    style: {
      maxHeight: maxHeight,
      minHeight: minHeight
    }
  }, props)), children);
};
//# sourceMappingURL=EmbeddedPlayer.js.map