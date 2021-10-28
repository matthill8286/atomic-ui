function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Typo } from "../Typo";

var getMargins = function getMargins(fontSize) {
  if (fontSize && (fontSize === 'xs' || fontSize === 'sm')) {
    return 'xs 0 md';
  } else {
    return '';
  }
};

export var CopyText = function CopyText(_ref) {
  var _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'p' : _ref$tag,
      _ref$withMargins = _ref.withMargins,
      withMargins = _ref$withMargins === void 0 ? false : _ref$withMargins,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'grey5' : _ref$color,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 'xs' : _ref$fontSize,
      children = _ref.children,
      margin = _ref.margin,
      restProps = _objectWithoutProperties(_ref, ["tag", "withMargins", "bold", "color", "fontSize", "children", "margin"]);

  return React.createElement(Typo, _extends({
    tag: tag,
    color: color,
    fontSize: fontSize,
    weight: bold ? 'bold' : 'regular',
    margin: withMargins && fontSize && (typeof fontSize === 'string' ? getMargins(fontSize) : getMargins(fontSize === null || fontSize === void 0 ? void 0 : fontSize.mobile)) || margin
  }, restProps), children);
};
CopyText.displayName = 'CopyText';
//# sourceMappingURL=CopyText.js.map