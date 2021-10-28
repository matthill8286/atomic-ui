function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { FlexBox, FlexItem } from "./FlexBox";
describe('FlexBox', function () {
  var props = {};
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(FlexBox, props));
    expect(tree).toMatchSnapshot();
  });
  it('renders with direction column', function () {
    var tree = renderWithTheme(React.createElement(FlexBox, _extends({}, props, {
      flexDirection: "column"
    })));
    expect(tree).toMatchSnapshot();
  });
  it('renders with flex wrap', function () {
    var tree = renderWithTheme(React.createElement(FlexBox, _extends({}, props, {
      flexWrap: "wrap"
    })));
    expect(tree).toMatchSnapshot();
  });
});
describe('FlexItem', function () {
  var props = {};
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(FlexItem, props));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=FlexBox.test.js.map