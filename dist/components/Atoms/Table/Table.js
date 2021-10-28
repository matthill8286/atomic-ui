import React from 'react';
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
import { isSaiyanTheme } from "../../../utils/helper";
var StyledScrollable = css(["th,td{text-align:center !important;}", "{th,td{min-width:108px;}}"], media.maxSm);
var StyledTable = styled.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "sc-1xettuu-0"
})(["", " ", ""], function (_ref) {
  var isScrollable = _ref.isScrollable;
  return isScrollable ? StyledScrollable : '';
}, function (_ref2) {
  var layout = _ref2.layout,
      withBorderRadius = _ref2.withBorderRadius,
      withBackground = _ref2.withBackground,
      theme = _ref2.theme;
  return "\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    overflow: hidden;\n    border-spacing: 0;\n    border-collapse: collapse;\n    table-layout: ".concat(layout, ";\n    background-color: ").concat(withBackground ? theme.color.secondary : "", ";\n    border-radius: ").concat(withBorderRadius ? theme.dimension.borderRadius2 : '0', ";\n  ");
});
export var StyledFixedTable = styled.div.withConfig({
  displayName: "Table__StyledFixedTable",
  componentId: "sc-1xettuu-1"
})(["position:absolute;th,tbody tr td:first-child{position:relative;z-index:1;::before{content:'';position:absolute;display:block;z-index:1;left:0;top:0;height:100%;width:10px;background:linear-gradient(to right,rgba(0,0,0,0.01) 0,transparent 100%);}::after{content:'';position:absolute;display:block;z-index:1;right:-10px;top:0;height:100%;width:10px;background:linear-gradient(to right,rgba(0,0,0,0.07) 0,transparent 100%);}}td,thead th{visibility:hidden;}thead th:first-child{visibility:visible;}tbody tr td:first-child{visibility:visible;background-color:white;}", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return "\n    ".concat(media.maxSm, " {\n      overflow-x: hidden;\n      width: calc(100vw - ").concat(theme.spacing.base.lg, ");\n    }\n  ");
});
export var StyledScrollTable = styled.div.withConfig({
  displayName: "Table__StyledScrollTable",
  componentId: "sc-1xettuu-2"
})(["overflow-x:auto;thead{background:", ";}tbody td{position:relative;}tbody th{visibility:hidden;}"], function (_ref4) {
  var theme = _ref4.theme,
      isMMTheme = _ref4.isMMTheme;
  return isMMTheme ? theme.color.grey1 : theme.color.grey2;
});
export var Table = function Table(_ref5) {
  var children = _ref5.children,
      _ref5$layout = _ref5.layout,
      layout = _ref5$layout === void 0 ? 'auto' : _ref5$layout,
      _ref5$withBorderRadiu = _ref5.withBorderRadius,
      withBorderRadius = _ref5$withBorderRadiu === void 0 ? true : _ref5$withBorderRadiu,
      _ref5$fullBorder = _ref5.fullBorder,
      fullBorder = _ref5$fullBorder === void 0 ? false : _ref5$fullBorder,
      _ref5$isScrollable = _ref5.isScrollable,
      isScrollable = _ref5$isScrollable === void 0 ? false : _ref5$isScrollable,
      className = _ref5.className,
      ariaLabel = _ref5.ariaLabel,
      withBackground = _ref5.withBackground;

  var TableElement = function TableElement() {
    return React.createElement(StyledTable, {
      "aria-label": ariaLabel,
      layout: layout,
      withBackground: withBackground,
      withBorderRadius: withBorderRadius,
      fullBorder: fullBorder,
      isScrollable: isScrollable,
      className: className
    }, children);
  };

  if (isScrollable) {
    return React.createElement(React.Fragment, null, React.createElement(StyledFixedTable, null, React.createElement(TableElement, null)), React.createElement(StyledScrollTable, {
      isMMTheme: isSaiyanTheme()
    }, React.createElement(TableElement, null)));
  }

  return React.createElement(TableElement, null);
};
//# sourceMappingURL=Table.js.map