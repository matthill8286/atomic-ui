import React from 'react';
import { renderWithTheme } from "../../../../testRenderer";
import { CopyText } from "./CopyText";
describe('CopyText', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(CopyText, null, "Lorem Ipsum"));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=CopyText.test.js.map