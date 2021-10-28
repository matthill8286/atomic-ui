import React from 'react';
import { media } from "../../../styles";
import { css, styled } from "../../../styles/styled";
var StyledCollapsible = css(["", "{border-right:0;}"], media.maxSm);
var StyledTableRow = styled.tr.withConfig({
  displayName: "TableRow__StyledTableRow",
  componentId: "csl6ui-0"
})(["", " ", ""], function (_ref) {
  var collapsible = _ref.collapsible;
  return collapsible && StyledCollapsible;
}, function (_ref2) {
  var disableHover = _ref2.disableHover,
      verticalAlign = _ref2.verticalAlign,
      theme = _ref2.theme,
      isReversed = _ref2.isReversed,
      _ref2$hoverColor = _ref2.hoverColor,
      hoverColor = _ref2$hoverColor === void 0 ? 'grey1' : _ref2$hoverColor;
  return "\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    flex: 1;\n    vertical-align: ".concat(verticalAlign, ";\n    text-align: center;\n    border: none;\n     \n    ").concat(function (_ref3) {
    var textColor = _ref3.textColor;
    return textColor && "color: ".concat(theme.color[textColor], ";");
  }, ";\n      \n    ").concat(media.md, " {\n      border: none;\n      \n      ").concat(isReversed ? "\n            flex-direction: row-reverse;\n      " : "", ";\n      \n      ").concat(!disableHover ? "&:hover {\n          cursor: pointer;\n          background: ".concat(theme.color[hoverColor], ";\n        }") : '', ";\n    }\n  ");
});
export var StyledGhostRow = styled.div.withConfig({
  displayName: "TableRow__StyledGhostRow",
  componentId: "csl6ui-1"
})(["position:relative;display:flex;flex-direction:column;flex:1;"]);
export var StyledGhostSprite = styled.div.withConfig({
  displayName: "TableRow__StyledGhostSprite",
  componentId: "csl6ui-2"
})(["width:100%;height:100%;position:absolute;display:flex;flex:1;flex-direction:row;min-height:52px;padding:2px 0;", "{", ";}"], media.md, function (_ref4) {
  var isReversed = _ref4.isReversed;
  return isReversed ? "\n            flex-direction: row-reverse;\n      " : "";
});
export var StyledColoredData = styled.div.withConfig({
  displayName: "TableRow__StyledColoredData",
  componentId: "csl6ui-3"
})(["width:", ";background-color:", ";opacity:0.3;"], function (_ref5) {
  var showPercentage = _ref5.showPercentage;
  return showPercentage ? "".concat(showPercentage, "%") : "";
}, function (_ref6) {
  var theme = _ref6.theme,
      color = _ref6.color;
  return color ? theme.color[color] : 'rgba(206,11,50, 0.3)';
});
export var StyledSvgMarker = styled.div.withConfig({
  displayName: "TableRow__StyledSvgMarker",
  componentId: "csl6ui-4"
})(["position:absolute;top:0;left:0;right:0;display:flex;flex-direction:column-reverse;"]);
export var TableRow = function TableRow(_ref7) {
  var children = _ref7.children,
      _ref7$collapsible = _ref7.collapsible,
      collapsible = _ref7$collapsible === void 0 ? false : _ref7$collapsible,
      _ref7$verticalAlign = _ref7.verticalAlign,
      verticalAlign = _ref7$verticalAlign === void 0 ? 'middle' : _ref7$verticalAlign,
      _ref7$disableHover = _ref7.disableHover,
      disableHover = _ref7$disableHover === void 0 ? false : _ref7$disableHover,
      className = _ref7.className,
      hoverColor = _ref7.hoverColor,
      backgroundColor = _ref7.backgroundColor,
      isReversed = _ref7.isReversed;
  return React.createElement(StyledTableRow, {
    collapsible: collapsible,
    verticalAlign: verticalAlign,
    disableHover: disableHover,
    isReversed: isReversed,
    className: className,
    backgroundColor: backgroundColor,
    hoverColor: hoverColor
  }, children);
};
//# sourceMappingURL=TableRow.js.map