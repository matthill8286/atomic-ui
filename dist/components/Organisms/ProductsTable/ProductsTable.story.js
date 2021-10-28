import { storiesOf } from '@storybook/react';
import React from 'react';
import { ProductsTable } from "./";
import { tableContentDataMock, tableHeadingDataMock } from "./ProductsTable.mock";
storiesOf('Design System/Organisms/ProductsTable', module).add('Default', function () {
  return React.createElement(ProductsTable, {
    tableHeading: tableHeadingDataMock,
    tableContent: tableContentDataMock,
    getProductUrl: function getProductUrl() {
      return '/de/product/_koenic-kwm-71412-a3-2291622.html';
    },
    getImageUrl: function getImageUrl(id) {
      return id;
    }
  });
});
//# sourceMappingURL=ProductsTable.story.js.map