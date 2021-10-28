import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Divider } from "./Divider";
describe('Divider', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Divider, {
      color: "primary"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Divider.test.js.map