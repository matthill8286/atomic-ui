import { shallow } from 'enzyme';
import React from 'react';
import { ProductsTable } from "./";
import { tableContentDataMock, tableHeadingDataMock } from "./ProductsTable.mock";
import { ProductsTableDesktop } from "./ProductsTableDesktop";
import { ProductsTableMobile } from "./ProductsTableMobile";
describe('<PDPSpecialTable />', function () {
  var props = {
    tableHeading: tableHeadingDataMock,
    tableContent: tableContentDataMock,
    a2cButtonText: 'In den Warenkorb',
    addToBasket: jest.fn(),
    getProductUrl: jest.fn(),
    getImageUrl: jest.fn()
  };
  it('renders Desktop table', function () {
    var component = shallow(React.createElement(ProductsTable, props));
    var desktopTable = component.find(ProductsTableDesktop);
    expect(desktopTable).toHaveLength(1);
  });
  it('renders Mobile table', function () {
    Object.defineProperty(window, 'innerWidth', {
      value: 320
    });
    var component = shallow(React.createElement(ProductsTable, props));
    var mobileTable = component.find(ProductsTableMobile);
    expect(mobileTable).toHaveLength(1);
    Object.defineProperty(window, 'innerWidth', {
      value: 1024
    });
  });
});
//# sourceMappingURL=index.test.js.map