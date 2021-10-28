import React from 'react';
import { Typo } from "../Typography";
import { media } from "../../../styles";
import { css, styled } from "../../../styles/styled";
import { isSaiyanTheme } from "../../../utils/helper";
var StyledCollapsible = css(["", "{", "}"], media.maxSm, function (_ref) {
  var mobileHeadline = _ref.mobileHeadline,
      theme = _ref.theme,
      noPadding = _ref.noPadding;
  return "\n      display: block;\n      padding-bottom: ".concat(mobileHeadline || noPadding ? 0 : theme.spacing.base.sm, ";\n      width: 100%;\n      color: ").concat(mobileHeadline ? theme.color.grey4 : undefined, ";\n      border: none;\n    ");
});

var borderProperty = function borderProperty(theme) {
  return isSaiyanTheme() ? "1px solid ".concat(theme.color.grey2) : "1px solid ".concat(theme.color.grey3);
};

var StyledCellBorder = css(["", ""], function (_ref2) {
  var theme = _ref2.theme,
      noBorder = _ref2.noBorder,
      borderDirection = _ref2.borderDirection;
  return "\n    border-radius: ".concat(theme.dimension.borderRadius0, ";\n    border-right: \n      ").concat(noBorder || borderDirection === 'bottom' ? 'none' : borderProperty(theme), ";\n    border-bottom: \n      ").concat(noBorder || borderDirection === 'right' ? 'none' : borderProperty(theme), ";\n  ");
});
var StyledDataCell = styled.td.withConfig({
  displayName: "TableCell__StyledDataCell",
  componentId: "sc-1uv0jt6-0"
})(["", " ", " ", ""], function (_ref3) {
  var collapsible = _ref3.collapsible;
  return collapsible && StyledCollapsible;
}, StyledCellBorder, function (_ref4) {
  var cellWidth = _ref4.cellWidth,
      textAlign = _ref4.textAlign,
      theme = _ref4.theme,
      noPadding = _ref4.noPadding,
      cellColor = _ref4.cellColor;
  return "\n    position: relative;\n    display: flex;\n    flex: 1;\n    color: ".concat(cellColor ? theme.color[cellColor] : '', ";\n    text-align: ").concat(textAlign, ";\n    width: ").concat(cellWidth ? "".concat(cellWidth, "%") : '', ";\n    padding: ").concat(noPadding ? 0 : theme.spacing.base.sm, ";\n  ");
});
export var TableCell = function TableCell(_ref5) {
  var children = _ref5.children,
      cellWidth = _ref5.cellWidth,
      _ref5$cellType = _ref5.cellType,
      cellType = _ref5$cellType === void 0 ? 'td' : _ref5$cellType,
      _ref5$borderDirection = _ref5.borderDirection,
      borderDirection = _ref5$borderDirection === void 0 ? 'bottom' : _ref5$borderDirection,
      _ref5$noBorder = _ref5.noBorder,
      noBorder = _ref5$noBorder === void 0 ? true : _ref5$noBorder,
      mobileHeadline = _ref5.mobileHeadline,
      noPadding = _ref5.noPadding,
      _ref5$collapsible = _ref5.collapsible,
      collapsible = _ref5$collapsible === void 0 ? true : _ref5$collapsible,
      _ref5$textAlign = _ref5.textAlign,
      textAlign = _ref5$textAlign === void 0 ? 'left' : _ref5$textAlign,
      _ref5$fullBorder = _ref5.fullBorder,
      fullBorder = _ref5$fullBorder === void 0 ? false : _ref5$fullBorder,
      colSpan = _ref5.colSpan,
      className = _ref5.className,
      cellColor = _ref5.cellColor;
  return React.createElement(StyledDataCell, {
    as: cellType,
    noBorder: noBorder,
    borderDirection: borderDirection,
    cellWidth: cellWidth,
    mobileHeadline: mobileHeadline,
    noPadding: noPadding,
    collapsible: collapsible,
    textAlign: textAlign,
    cellColor: cellColor,
    fullBorder: fullBorder,
    colSpan: colSpan,
    className: className
  }, typeof children === 'string' ? React.createElement(Typo, {
    weight: cellType === 'th' ? 'semibold' : 'regular',
    fontSize: 'sm'
  }, children) : children);
};
//# sourceMappingURL=TableCell.js.map