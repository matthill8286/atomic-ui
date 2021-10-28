import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { ProgressBar } from "./ProgressBar";
describe('ProgressBar', function () {
  it('renders basic', function () {
    var tree = renderWithTheme(React.createElement(ProgressBar, {
      value: 12
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=ProgressBar.test.js.map