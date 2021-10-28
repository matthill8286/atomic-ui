function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import zip from 'lodash/zip';
import React, { useMemo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from "../../Atoms/Table";
import { CopyText } from "../../Atoms/Typography";
import { convertPrice } from "../../../utils/convertPrice";
import { IconOrText } from "./IconOrText";
import { ImageAndTextCell } from "./ImageAndTextCell";
import { ProductCell } from "./ProductCell";
import { StyledFixedTable, StyledMobileTable, StyledScrollTable } from "./ProductsTableMobile.styled";
export var ProductsTableMobile = function ProductsTableMobile(_ref) {
  var tableHeading = _ref.tableHeading,
      tableContent = _ref.tableContent,
      getProductUrl = _ref.getProductUrl;

  var renderTable = function renderTable(features, content) {
    return React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, {
      collapsible: false
    }, React.createElement(TableCell, {
      key: "blank",
      cellType: "th",
      noBorder: true,
      collapsible: false
    }, "\xA0"), features && features.map(function (featureElement, index) {
      return React.createElement(TableCell, {
        collapsible: false,
        key: featureElement.text + index,
        cellType: 'th',
        borderDirection: "right"
      }, featureElement.isFeatureName ? React.createElement(ImageAndTextCell, null, featureElement.image && React.createElement("img", {
        src: featureElement.image.url,
        alt: ""
      }), React.createElement(CopyText, {
        tag: 'span',
        fontSize: 'sm'
      }, featureElement.text)) : React.createElement(IconOrText, {
        textType: featureElement.text
      }));
    }))), React.createElement(TableBody, null, content && content.map(function (productRow, index) {
      var _product$price, _product$price2;

      if (!productRow) {
        return null;
      }

      var product = tableHeading[index];

      if (!(product !== null && product !== void 0 && product.product)) {
        return null;
      }

      var productId = product.productId;
      var title = product.product.title;
      var linkUrl = getProductUrl(title, productId);
      return React.createElement(TableRow, {
        key: 'feature-' + index,
        collapsible: false
      }, React.createElement(TableCell, {
        key: 'product',
        cellType: 'th',
        noBorder: true,
        collapsible: false
      }, React.createElement(ProductCell, {
        linkUrl: linkUrl
      }, React.createElement(CopyText, {
        tag: 'span',
        fontSize: 'sm',
        weight: "semibold"
      }, title.slice(0, 30)), React.createElement(CopyText, {
        tag: 'span'
      }, ' ', convertPrice(product === null || product === void 0 ? void 0 : (_product$price = product.price) === null || _product$price === void 0 ? void 0 : _product$price.price, product === null || product === void 0 ? void 0 : (_product$price2 = product.price) === null || _product$price2 === void 0 ? void 0 : _product$price2.currency, '', false)))), productRow.map(function (feature, index) {
        return React.createElement(TableCell, {
          key: feature.text + index,
          borderDirection: "right",
          collapsible: false
        }, React.createElement(IconOrText, {
          textType: feature.text
        }));
      }));
    })));
  };

  var transposedContent = function transposedContent(content) {
    var contentMatrix = content ? content.map(function (_ref2) {
      var tableRow = _ref2.tableRow;
      return tableRow ? Object.values(tableRow) : null;
    }) : [];
    var transposed = zip.apply(void 0, _toConsumableArray(contentMatrix));
    var featureCells = transposed ? transposed[0] : [];
    var contentCells = transposed ? transposed.slice(1, transposed.length) : [];
    return {
      featureCells: featureCells,
      contentCells: contentCells
    };
  };

  var _useMemo = useMemo(function () {
    return transposedContent(tableContent);
  }, [tableContent]),
      featureCells = _useMemo.featureCells,
      contentCells = _useMemo.contentCells;

  var mobileTable = renderTable(featureCells, contentCells);
  return React.createElement(StyledMobileTable, null, React.createElement(StyledFixedTable, null, mobileTable), React.createElement(StyledScrollTable, null, mobileTable));
};
//# sourceMappingURL=ProductsTableMobile.js.map