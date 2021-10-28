import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from "../../Atoms/Table";
import { CopyText } from "../../Atoms/Typography";
import { convertPrice } from "../../../utils/convertPrice";
import { IconOrText } from "./IconOrText";
import { ImageAndTextCell } from "./ImageAndTextCell";
import { ProductCell } from "./ProductCell";
import { EmptyCell, StyledDesktopTable } from "./ProductsTableDesktop.styled";
export var ProductsTableDesktop = function ProductsTableDesktop(_ref) {
  var tableHeading = _ref.tableHeading,
      tableContent = _ref.tableContent,
      getProductUrl = _ref.getProductUrl,
      getImageUrl = _ref.getImageUrl,
      renderAddToBasketButton = _ref.renderAddToBasketButton;
  return React.createElement(StyledDesktopTable, null, React.createElement(Table, {
    layout: 'tableRow'
  }, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableCell, {
    key: 'blank cell',
    cellType: "th"
  }, "\xA0"), tableHeading && tableHeading.length && tableHeading.map(function (productElement) {
    var _productElement$price, _productElement$price2;

    if (!productElement.product) {
      return React.createElement(TableCell, {
        key: 'empty'
      }, React.createElement(EmptyCell, null, "\xA0"));
    }

    var _productElement$produ = productElement.product,
        title = _productElement$produ.title,
        titleImageId = _productElement$produ.titleImageId;
    var linkUrl = getProductUrl(title, productElement.productId);
    return React.createElement(TableCell, {
      key: productElement.productId,
      cellType: "th"
    }, productElement.product && React.createElement(ProductCell, {
      linkUrl: linkUrl
    }, React.createElement("img", {
      src: getImageUrl(titleImageId),
      alt: title
    }), React.createElement(CopyText, {
      tag: 'span',
      fontSize: 'sm',
      weight: "semibold"
    }, title.slice(0, 30)), React.createElement(CopyText, {
      tag: 'span',
      fontSize: 'sm'
    }, convertPrice(productElement === null || productElement === void 0 ? void 0 : (_productElement$price = productElement.price) === null || _productElement$price === void 0 ? void 0 : _productElement$price.price, productElement === null || productElement === void 0 ? void 0 : (_productElement$price2 = productElement.price) === null || _productElement$price2 === void 0 ? void 0 : _productElement$price2.currency, '', false))));
  }))), React.createElement(TableBody, null, tableContent.map(function (row, rowIndex) {
    return row.tableRow && React.createElement(TableRow, {
      key: 'feature-' + rowIndex
    }, row.tableRow.map(function (featureCell, index) {
      return React.createElement(TableCell, {
        key: index + featureCell.text,
        cellType: featureCell.isFeatureName ? 'th' : 'td'
      }, featureCell.isFeatureName ? React.createElement(ImageAndTextCell, null, featureCell.image && React.createElement("img", {
        src: featureCell.image.url,
        alt: ""
      }), React.createElement(CopyText, {
        tag: 'span',
        fontSize: 'sm'
      }, featureCell.text)) : React.createElement(IconOrText, {
        textType: featureCell.text
      }));
    }));
  }), renderAddToBasketButton && React.createElement(TableRow, null, React.createElement(TableCell, {
    key: "blank",
    cellType: "th",
    noBorder: true
  }, "\xA0"), tableHeading && tableHeading.length && tableHeading.map(function (product, index) {
    return React.createElement(TableCell, {
      key: product.productId + index,
      noBorder: true
    }, renderAddToBasketButton(product.productId));
  })))));
};
//# sourceMappingURL=ProductsTableDesktop.js.map