import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Status } from "./Status";
describe('Status', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Status, {
      type: 'primary'
    }, "1"));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Status.test.js.map