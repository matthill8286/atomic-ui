import React from 'react';
import { useWindowDimensions } from "../../Helper/useWindowDimensions";
import { breakpoints } from "../../../styles";
import { ProductsTableDesktop } from "./ProductsTableDesktop";
import { ProductsTableMobile } from "./ProductsTableMobile";
export var ProductsTable = function ProductsTable(props) {
  var _useWindowDimensions = useWindowDimensions(),
      breakpoint = _useWindowDimensions.breakpoint;

  if (!props.tableHeading || !props.tableContent) {
    return null;
  }

  return React.createElement("div", {
    className: "mms-products-table"
  }, breakpoint <= breakpoints.sm ? React.createElement(ProductsTableMobile, props) : React.createElement(ProductsTableDesktop, props));
};
//# sourceMappingURL=index.js.map