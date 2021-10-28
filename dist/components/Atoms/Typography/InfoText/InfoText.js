function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Typo } from "../Typo";
export var InfoText = function InfoText(_ref) {
  var _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'span' : _ref$tag,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'small' : _ref$scale,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'grey4' : _ref$color,
      weight = _ref.weight,
      fontSize = _ref.fontSize,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["tag", "scale", "color", "weight", "fontSize", "children"]);

  var isSmall = scale === 'small';
  var isExtraSmall = scale === 'extra-small';
  var isHighlighted = scale === 'small-highlighted';
  var presetFontSize = (isSmall || isHighlighted) && 'xxs' || isExtraSmall && 'xxxs';
  var presetFontWeight = (isSmall || isExtraSmall) && 'regular' || isHighlighted && 'semibold';
  return React.createElement(Typo, _extends({
    tag: tag,
    color: color,
    fontSize: fontSize || presetFontSize || undefined,
    weight: weight || presetFontWeight || undefined
  }, restProps), children);
};
InfoText.displayName = 'InfoText';
//# sourceMappingURL=InfoText.js.map