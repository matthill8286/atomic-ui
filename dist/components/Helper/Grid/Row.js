function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
import { gutterWidth } from "./constants";

var handleRowMarginBottom = function handleRowMarginBottom(noMargin) {
  if (noMargin) {
    return css(["margin-bottom:0;"]);
  } else {
    return css(["margin-bottom:", "px;", "{margin-bottom:", "px;}", "{margin-bottom:", "px;}", "{margin-bottom:", "px;}", "{margin-bottom:", "px;}"], gutterWidth.xs, media.sm, gutterWidth.sm, media.md, gutterWidth.md, media.lg, gutterWidth.lg, media.xl, gutterWidth.xl);
  }
};

var StyledRow = styled.div.withConfig({
  displayName: "Row__StyledRow",
  componentId: "sc-1mmko15-0"
})(["display:flex;flex-flow:row wrap;align-items:stretch;margin:0;", " @supports (display:grid){display:grid;grid-gap:", "px;grid-template-columns:repeat(4,minmax(0,1fr));}", "{@supports (display:grid){grid-gap:", "px;grid-template-columns:repeat(8,minmax(0,1fr));}}", "{@supports (display:grid){grid-gap:", "px;}}", "{@supports (display:grid){grid-gap:", "px;grid-template-columns:repeat(12,minmax(0,1fr));}}", "{@supports (display:grid){grid-gap:", "px;}}"], function (_ref) {
  var noMargin = _ref.noMargin;
  return handleRowMarginBottom(!!noMargin);
}, gutterWidth.xs, media.sm, gutterWidth.sm, media.md, gutterWidth.md, media.lg, gutterWidth.lg, media.xl, gutterWidth.xl);
export var Row = function Row(_ref2) {
  var _ref2$tag = _ref2.tag,
      tag = _ref2$tag === void 0 ? 'div' : _ref2$tag,
      rest = _objectWithoutProperties(_ref2, ["tag"]);

  return React.createElement(StyledRow, _extends({
    as: tag
  }, rest));
};
//# sourceMappingURL=Row.js.map