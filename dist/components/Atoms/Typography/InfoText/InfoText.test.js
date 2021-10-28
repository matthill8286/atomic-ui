import React from 'react';
import { renderWithTheme } from "../../../../testRenderer";
import { InfoText } from "./InfoText";
describe('InfoText', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(InfoText, {
      scale: "small"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=InfoText.test.js.map