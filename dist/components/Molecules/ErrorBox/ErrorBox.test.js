import React from 'react';
import { ErrorBox } from "./";
import { renderWithTheme } from "../../../testRenderer";
describe('Loading Error', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(ErrorBox, {
      title: "Oops, something went wrong",
      subtitle: "Something went wrong. Please try again later.",
      buttonLabel: "Try again"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=ErrorBox.test.js.map