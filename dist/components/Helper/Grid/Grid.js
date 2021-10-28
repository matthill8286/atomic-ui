function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
import { fixedColumnValues, gridMargins } from "./constants";
export var handleGridPadding = function handleGridPadding(noPadding) {
  if (noPadding) {
    return css(["padding:0;"]);
  } else {
    return css(["padding:0 ", "px;", "{padding:0 ", "px;}", "{padding:0 ", "px;}", "{padding:0 ", "px;}", "{padding:0 ", "px;}"], gridMargins.xs, media.sm, gridMargins.sm, media.md, gridMargins.md, media.lg, gridMargins.lg, media.xl, gridMargins.xl);
  }
};
var StyledGrid = styled.div.withConfig({
  displayName: "Grid__StyledGrid",
  componentId: "hursja-0"
})(["box-sizing:border-box;margin:0 auto;max-width:1472px;", " ", " ", ""], function (_ref) {
  var noPadding = _ref.noPadding;
  return handleGridPadding(!!noPadding);
}, function (_ref2) {
  var align = _ref2.align;

  if (align === 'left') {
    return "\n    margin-right: auto;\n    margin-left: 0;\n  ";
  }

  if (align === 'right') {
    return "\n    margin-left: auto;\n    margin-right: 0;\n  ";
  }
}, function (_ref3) {
  var fixedColumnWidth = _ref3.fixedColumnWidth;
  return fixedColumnWidth && css(["width:", "px;", "{width:", "px;}", "{width:", "px;}", "{width:", "px;}", "{width:", "px;}"], fixedColumnValues.xs.totalWidth, media.sm, fixedColumnValues.sm.totalWidth, media.md, fixedColumnValues.md.totalWidth, media.lg, fixedColumnValues.lg.totalWidth, media.xl, fixedColumnValues.xl.totalWidth);
});
export var Grid = function Grid(_ref4) {
  var _ref4$tag = _ref4.tag,
      tag = _ref4$tag === void 0 ? 'div' : _ref4$tag,
      rest = _objectWithoutProperties(_ref4, ["tag"]);

  return React.createElement(StyledGrid, _extends({
    as: tag
  }, rest));
};
//# sourceMappingURL=Grid.js.map