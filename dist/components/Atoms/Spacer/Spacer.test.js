import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Spacer } from "./Spacer";
describe('Spacer', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Spacer, {
      size: 'md'
    }));
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly in vertical direction', function () {
    var tree = renderWithTheme(React.createElement(Spacer, {
      direction: "vertical",
      size: 'md'
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Spacer.test.js.map