function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { StyledInfoTypo } from "./Typo.styled";
export var Typo = function Typo(_ref) {
  var _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'span' : _ref$tag,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["tag", "children"]);

  return React.createElement(StyledInfoTypo, _extends({
    as: tag,
    tag: tag
  }, restProps), children);
};
Typo.displayName = 'Typo';
//# sourceMappingURL=Typo.js.map