import React from 'react';
import { css, styled } from "../../../styles/styled";
import { isSaiyanTheme } from "../../../utils/helper";
var StyledTableHeadMedia = css(["", ""], function (_ref) {
  var isOutlineRequired = _ref.isOutlineRequired,
      theme = _ref.theme,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'grey1' : _ref$backgroundColor,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? 'grey2' : _ref$borderColor;
  return "\n    ".concat(isOutlineRequired ? "border: 1px solid ".concat(theme.color[borderColor]) : '', ";\n    background-color: ").concat(theme.color[backgroundColor], ";\n    th:first-child {\n      border-top-left-radius: ").concat(theme.dimension.borderRadius2, ";\n    }\n    th:last-child {\n      border-top-right-radius: ").concat(theme.dimension.borderRadius2, ";\n    }\n  ");
});
var StyledTableHeadSaturn = css(["", ""], function (_ref2) {
  var isOutlineRequired = _ref2.isOutlineRequired,
      theme = _ref2.theme,
      _ref2$backgroundColor = _ref2.backgroundColor,
      backgroundColor = _ref2$backgroundColor === void 0 ? 'grey2' : _ref2$backgroundColor,
      _ref2$borderColor = _ref2.borderColor,
      borderColor = _ref2$borderColor === void 0 ? 'grey3' : _ref2$borderColor;
  return "\n      ".concat(isOutlineRequired ? "border: 1px solid ".concat(theme.color[borderColor]) : '', ";\n      background-color: ").concat(theme.color[backgroundColor], ";\n  ");
});
var StyledTableHead = styled.thead.withConfig({
  displayName: "TableHead__StyledTableHead",
  componentId: "sc-1t7alt2-0"
})(["display:flex;flex-direction:row;", ""], function (_ref3) {
  var isMMTheme = _ref3.isMMTheme;
  return isMMTheme ? StyledTableHeadMedia : StyledTableHeadSaturn;
});
export var TableHead = function TableHead(_ref4) {
  var children = _ref4.children,
      _ref4$isOutlineRequir = _ref4.isOutlineRequired,
      isOutlineRequired = _ref4$isOutlineRequir === void 0 ? false : _ref4$isOutlineRequir,
      className = _ref4.className,
      backgroundColor = _ref4.backgroundColor,
      borderColor = _ref4.borderColor;
  return React.createElement(StyledTableHead, {
    isMMTheme: isSaiyanTheme(),
    isOutlineRequired: isOutlineRequired,
    className: className,
    backgroundColor: backgroundColor,
    borderColor: borderColor
  }, children);
};
//# sourceMappingURL=TableHead.js.map