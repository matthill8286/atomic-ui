import { storiesOf } from '@storybook/react';
import React from 'react';
import { OrderBookTable } from "./index";
import { cryptoCurrenciesMock } from "../../Atoms/Table/Table.mock";
import { FlexBox, FlexItem, useWindowDimensions } from "../../Helper";
import { breakpoints, media, styled } from "../../../styles";
var StyledTableWrapper = styled(FlexBox).withConfig({
  displayName: "OrderBookstory__StyledTableWrapper",
  componentId: "kt57ef-0"
})(["", "{flex-direction:row;}"], media.md);
storiesOf('Design System/Organisms/OrderBookTable', module).add('default', function () {
  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.md;
  return React.createElement(StyledTableWrapper, {
    flexDirection: "column"
  }, React.createElement(FlexItem, {
    flex: "1"
  }, React.createElement(OrderBookTable, {
    rows: cryptoCurrenciesMock.asks,
    rowsKey: "asks",
    maxPriceSize: cryptoCurrenciesMock.maxPriceSize,
    textColor: "error",
    headerTextColor: "white",
    isReversed: true,
    backgroundColor: "secondary",
    isOutlineRequired: false
  })), React.createElement(FlexItem, {
    flex: "1"
  }, React.createElement(OrderBookTable, {
    rows: cryptoCurrenciesMock.bids,
    rowsKey: "bids",
    backgroundColor: "secondary",
    headerTextColor: "white",
    textColor: "info",
    hideOnMobile: isMobile,
    maxPriceSize: cryptoCurrenciesMock.maxPriceSize,
    isOutlineRequired: false
  })));
}, {
  info: null
});
//# sourceMappingURL=OrderBook.story.js.map