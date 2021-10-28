import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Logo } from "./Logo";
describe('Logo', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Logo, null));
    expect(tree).toMatchSnapshot();
  });
  it('can render white', function () {
    var tree = renderWithTheme(React.createElement(Logo, {
      white: true
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Logo.test.js.map