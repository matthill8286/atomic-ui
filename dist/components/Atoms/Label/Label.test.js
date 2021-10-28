import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Label } from "./Label";
describe('<Label> Atom', function () {
  test('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Label, {
      htmlFor: "filed-1"
    }, "A label"));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Label.test.js.map