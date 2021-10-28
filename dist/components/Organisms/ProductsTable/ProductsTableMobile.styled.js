import { styled } from "../../../styles/styled";
export var StyledMobileTable = styled.div.withConfig({
  displayName: "ProductsTableMobilestyled__StyledMobileTable",
  componentId: "sc-12jkren-0"
})(["position:relative;overflow:hidden;background:white;"]);
export var StyledFixedTable = styled.div.withConfig({
  displayName: "ProductsTableMobilestyled__StyledFixedTable",
  componentId: "sc-12jkren-1"
})(["position:absolute;th{background:white;position:relative;z-index:1;::after{content:'';position:absolute;display:block;z-index:1;right:-10px;top:0;height:100%;width:10px;background:linear-gradient(to right,rgba(0,0,0,0.08) 0,transparent 100%);}}td,thead th{visibility:hidden;}thead th:first-child{visibility:visible;}"]);
export var StyledScrollTable = styled.div.withConfig({
  displayName: "ProductsTableMobilestyled__StyledScrollTable",
  componentId: "sc-12jkren-2"
})(["overflow-x:auto;thead{background:", ";}tbody td{position:relative;}tbody th{visibility:hidden;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.grey1;
});
//# sourceMappingURL=ProductsTableMobile.styled.js.map