import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { BackToTop } from "./BackToTop";
describe('BackToTop', function () {
  it('renders corretly', function () {
    var tree = renderWithTheme(React.createElement(BackToTop, {
      visible: "VISIBLE"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=BackToTop.test.js.map