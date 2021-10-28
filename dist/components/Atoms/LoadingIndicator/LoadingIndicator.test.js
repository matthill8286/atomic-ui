import * as React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { LoadingIndicator } from "./LoadingIndicator";
describe('LoadingIndicator', function () {
  it('renders filtered theme', function () {
    var tree = renderWithTheme(React.createElement(LoadingIndicator, {
      isVisible: false
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=LoadingIndicator.test.js.map