import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from "../../Atoms/Table";
import { CopyText } from "../../Atoms/Typography";
import { OrderBookEntry } from "./OrderBookEntries";
import { useWindowDimensions } from "../../Helper";
import { breakpoints } from "../../../styles";
var typeOptions = {
  ask: {
    key: 'ask',
    color: '#f00'
  },
  bid: {
    key: 'bid',
    color: '#00d964'
  }
};
var orderBookHeadings = ['Price', 'Size', 'Total'];

var OrderBookHeader = function OrderBookHeader(_ref) {
  var textColor = _ref.textColor,
      cellText = _ref.cellText;
  return React.createElement(TableCell, {
    cellType: "th",
    collapsible: false
  }, React.createElement(CopyText, {
    padding: "0",
    margin: "0",
    color: textColor || 'grey4',
    toUpperCase: true
  }, cellText));
};

export var OrderBookTable = function OrderBookTable(_ref2) {
  var isReversed = _ref2.isReversed,
      textColor = _ref2.textColor,
      borderColor = _ref2.borderColor,
      backgroundColor = _ref2.backgroundColor,
      headerTextColor = _ref2.headerTextColor,
      rows = _ref2.rows,
      rowsKey = _ref2.rowsKey,
      maxPriceSize = _ref2.maxPriceSize,
      hideOnMobile = _ref2.hideOnMobile,
      isOutlineRequired = _ref2.isOutlineRequired;

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.md;
  var displayRows = Object.keys(rows).map(function (key) {
    return rows[key];
  }).filter(function (k) {
    return k;
  });

  if (isMobile && rowsKey === typeOptions.ask.key) {
    displayRows.reverse();
  }

  return React.createElement(Table, {
    withBackground: true,
    withBorderRadius: false
  }, React.createElement(TableHead, {
    backgroundColor: backgroundColor || 'secondary',
    borderColor: borderColor,
    isOutlineRequired: isOutlineRequired
  }, !hideOnMobile && React.createElement(TableRow, {
    isReversed: isReversed || false,
    disableHover: true,
    textColor: textColor,
    backgroundColor: backgroundColor || 'secondary'
  }, orderBookHeadings.map(function (entry) {
    return React.createElement(OrderBookHeader, {
      key: entry,
      cellText: entry,
      textColor: headerTextColor
    });
  }))), React.createElement(TableBody, {
    backgroundColor: backgroundColor,
    fullBorder: false
  }, displayRows.map(function (row) {
    var price = row.price,
        size = row.size,
        total = row.total;
    var colorSpriteWidth = total / maxPriceSize * 100;
    return React.createElement(OrderBookEntry, {
      color: "white",
      key: colorSpriteWidth,
      isReversed: isReversed,
      maxPriceSize: maxPriceSize,
      colorSpriteWidth: colorSpriteWidth,
      price: price,
      size: size,
      total: total
    });
  })));
};
//# sourceMappingURL=OrderBook.js.map