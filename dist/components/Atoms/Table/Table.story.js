function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from "./index";
import { cryptoCurrenciesMock, customTableElements } from "./Table.mock";
import Readme from "./Table.readme.md";
import { StyledColoredData, StyledGhostRow, StyledGhostSprite } from "./TableRow";
import { CopyText } from "../Typography";
import { styled } from "../../../styles";
var StyledTableWrapper = styled.div.withConfig({
  displayName: "Tablestory__StyledTableWrapper",
  componentId: "sc-1wdxdcs-0"
})(["max-width:600px;"]);
storiesOf('Design System/Atoms/Table', module).add('default', function () {
  var tableKnobs = {
    layout: select('table-layout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
    withBorderRadius: boolean('withBorderRadius', true, 'Table'),
    ariaLabel: 'this is a table'
  };
  var tableCellKnobs = {
    borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
    noBorder: boolean('noBorder', false, 'Cell')
  };
  return React.createElement(StyledTableWrapper, null, React.createElement(Table, _extends({}, tableKnobs, {
    withBackground: true
  }), React.createElement(TableHead, {
    backgroundColor: "secondary",
    borderColor: "grey2",
    isOutlineRequired: true
  }, React.createElement(TableRow, {
    isReversed: true,
    disableHover: true,
    backgroundColor: "secondary"
  }, React.createElement(TableCell, _extends({
    cellType: "th"
  }, tableCellKnobs), React.createElement(CopyText, {
    padding: "0",
    margin: "0",
    color: "grey4",
    toUpperCase: true
  }, "Price")), React.createElement(TableCell, _extends({
    cellType: "th"
  }, tableCellKnobs), React.createElement(CopyText, {
    padding: "0",
    margin: "0",
    color: "grey4",
    toUpperCase: true
  }, "Size")), React.createElement(TableCell, _extends({
    cellType: "th"
  }, tableCellKnobs), React.createElement(CopyText, {
    padding: "0",
    margin: "0",
    color: "grey4",
    toUpperCase: true
  }, "Total")))), React.createElement(TableBody, {
    backgroundColor: "secondary"
  }, Object.keys(cryptoCurrenciesMock.asks).map(function (crypto) {
    var values = cryptoCurrenciesMock.asks[crypto];
    var colorSpriteWidth = cryptoCurrenciesMock.asks[crypto].total / cryptoCurrenciesMock.maxPriceSize * 100;
    return React.createElement(React.Fragment, null, React.createElement(StyledGhostRow, null, React.createElement(StyledGhostSprite, {
      isReversed: true
    }, cryptoCurrenciesMock.ticker === 'PI_XBTUSD' ? React.createElement(StyledColoredData, {
      color: "error",
      showPercentage: colorSpriteWidth
    }) : null)), React.createElement(TableRow, {
      key: values.price,
      isReversed: true,
      disableHover: true,
      backgroundColor: "white"
    }, React.createElement(TableCell, _extends({}, tableCellKnobs, {
      mobileHeadline: true,
      cellColor: "white"
    }), React.createElement(CopyText, {
      bold: true,
      padding: "0",
      margin: "0",
      color: "error"
    }, values.price)), React.createElement(TableCell, _extends({
      cellColor: "white"
    }, tableCellKnobs), React.createElement(CopyText, {
      bold: true,
      padding: "0",
      margin: "0",
      color: "white"
    }, values.size)), React.createElement(TableCell, _extends({
      cellColor: "white"
    }, tableCellKnobs), React.createElement(CopyText, {
      bold: true,
      padding: "0",
      margin: "0",
      color: "white"
    }, values.total))));
  }))));
}, {
  info: Readme
}).add('customTableElements | desktop', function () {
  var tableKnobs = {
    layout: select('table-layout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
    withBorderRadius: boolean('withBorderRadius', true, 'Table'),
    ariaLabel: 'this is a table'
  };
  var tableCellKnobs = {
    borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
    noBorder: boolean('noBorder', false, 'Cell')
  };
  return React.createElement(Table, tableKnobs, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableCell, _extends({
    cellType: "th",
    collapsible: true
  }, tableCellKnobs), React.createElement("div", null, "Allow")), React.createElement(TableCell, _extends({
    cellType: "th",
    collapsible: false
  }, tableCellKnobs), React.createElement("div", null, "Category")))), React.createElement(TableBody, null, customTableElements.map(function (row, index) {
    return React.createElement(TableRow, {
      key: index
    }, React.createElement(TableCell, _extends({}, tableCellKnobs, {
      cellWidth: 10,
      collapsible: false,
      noBorder: row.noBorder
    }), row.asset), React.createElement(TableCell, _extends({}, tableCellKnobs, {
      cellWidth: 10,
      collapsible: false,
      noBorder: row.noBorder
    }), row.assetNumber));
  })));
}, {
  info: Readme
});
//# sourceMappingURL=Table.story.js.map