import React from 'react';
import { styled } from "../../../styles/styled";
var StyledTableBody = styled.tbody.withConfig({
  displayName: "TableBody__StyledTableBody",
  componentId: "usih2p-0"
})(["", ""], function (_ref) {
  var fullBorder = _ref.fullBorder,
      topBorder = _ref.topBorder,
      theme = _ref.theme,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? 'grey2' : _ref$borderColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'white' : _ref$backgroundColor;
  return "\n    display: flex;\n    flex-direction: column;\n    background-color: ".concat(theme.color[backgroundColor], ";\n    ").concat(topBorder && "border-top: 1px solid ".concat(theme.color[borderColor], ";"), "\n    ").concat(fullBorder && "\n        tr td {\n          border: 1px solid ".concat(theme.color[borderColor], ";\n        }\n        tr:last-child {\n          td:first-child {\n            border-bottom-left-radius: ").concat(theme.dimension.borderRadius2, ";\n          }\n          td:last-child {\n            border-bottom-right-radius: ").concat(theme.dimension.borderRadius2, ";\n          }\n        }\n      "), "\n  ");
});
export var TableBody = function TableBody(_ref2) {
  var children = _ref2.children,
      _ref2$fullBorder = _ref2.fullBorder,
      fullBorder = _ref2$fullBorder === void 0 ? false : _ref2$fullBorder,
      className = _ref2.className,
      _ref2$topBorder = _ref2.topBorder,
      topBorder = _ref2$topBorder === void 0 ? false : _ref2$topBorder,
      borderColor = _ref2.borderColor,
      backgroundColor = _ref2.backgroundColor;
  return React.createElement(StyledTableBody, {
    fullBorder: fullBorder,
    topBorder: topBorder,
    className: className,
    backgroundColor: backgroundColor,
    borderColor: borderColor
  }, children);
};
//# sourceMappingURL=TableBody.js.map