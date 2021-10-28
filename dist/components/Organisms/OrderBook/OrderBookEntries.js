import React, { memo } from 'react';
import { StyledColoredData, StyledGhostRow, StyledGhostSprite, TableRow } from "../../Atoms/Table/TableRow";
import { TableCell } from "../../Atoms/Table";
import { CopyText } from "../../Atoms/Typography";
export var OrderBookEntry = memo(function (_ref) {
  var price = _ref.price,
      size = _ref.size,
      total = _ref.total,
      colorSpriteWidth = _ref.colorSpriteWidth,
      color = _ref.color,
      isReversed = _ref.isReversed;
  return React.createElement(React.Fragment, null, React.createElement(StyledGhostRow, null, React.createElement(StyledGhostSprite, {
    isReversed: isReversed
  }, React.createElement(StyledColoredData, {
    color: color,
    showPercentage: colorSpriteWidth
  }))), React.createElement(TableRow, {
    key: price,
    isReversed: isReversed,
    disableHover: true,
    backgroundColor: "white"
  }, React.createElement(TableCell, {
    mobileHeadline: true,
    cellColor: "white"
  }, React.createElement(CopyText, {
    bold: true,
    padding: "0",
    margin: "0",
    color: color
  }, price)), React.createElement(TableCell, {
    cellColor: "white"
  }, React.createElement(CopyText, {
    bold: true,
    padding: "0",
    margin: "0",
    color: "white"
  }, size)), React.createElement(TableCell, {
    cellColor: "white"
  }, React.createElement(CopyText, {
    bold: true,
    padding: "0",
    margin: "0",
    color: "white"
  }, total))));
});
export var OrderBookEntries = memo(function (_ref2) {
  var rows = _ref2.rows,
      rowsKey = _ref2.rowsKey,
      color = _ref2.color,
      isReversed = _ref2.isReversed,
      maxPriceSize = _ref2.maxPriceSize;

  if (!rows) {
    return null;
  }

  return React.createElement(React.Fragment, null, rows.map(function (row) {
    var price = row.price,
        size = row.size,
        total = row.total;
    var colorSpriteWidth = total / maxPriceSize * 100;
    return React.createElement(React.Fragment, null, React.createElement(StyledGhostRow, null, React.createElement(StyledGhostSprite, {
      isReversed: isReversed
    }, React.createElement(StyledColoredData, {
      color: color,
      showPercentage: colorSpriteWidth
    }))), React.createElement(TableRow, {
      key: price,
      isReversed: isReversed,
      disableHover: true,
      backgroundColor: "white"
    }, React.createElement(TableCell, {
      mobileHeadline: true,
      cellColor: "white"
    }, React.createElement(CopyText, {
      bold: true,
      padding: "0",
      margin: "0",
      color: color
    }, price)), React.createElement(TableCell, {
      cellColor: "white"
    }, React.createElement(CopyText, {
      bold: true,
      padding: "0",
      margin: "0",
      color: "white"
    }, size)), React.createElement(TableCell, {
      cellColor: "white"
    }, React.createElement(CopyText, {
      bold: true,
      padding: "0",
      margin: "0",
      color: "white"
    }, total))));
  }));
});
//# sourceMappingURL=OrderBookEntries.js.map