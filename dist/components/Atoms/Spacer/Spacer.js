function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
var StyledSpacer = styled.div.withConfig({
  displayName: "Spacer__StyledSpacer",
  componentId: "e5oylt-0"
})(["display:block;width:100%;", ""], function (_ref) {
  var direction = _ref.direction,
      size = _ref.size,
      theme = _ref.theme;
  return direction === 'vertical' ? css(["width:", ";"], theme.spacing.baseMobile[size]) : css(["height:", ";", "{height:", ";}"], theme.spacing.baseMobile[size], media.md, theme.spacing.base[size]);
});
export var Spacer = function Spacer(_ref2) {
  var size = _ref2.size,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'horizontal' : _ref2$direction,
      otherProps = _objectWithoutProperties(_ref2, ["size", "direction"]);

  return size ? React.createElement(StyledSpacer, _extends({
    size: size,
    direction: direction
  }, otherProps)) : null;
};
//# sourceMappingURL=Spacer.js.map