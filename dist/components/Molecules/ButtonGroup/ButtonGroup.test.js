import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { ButtonGroup } from "./ButtonGroup";
describe('ButtonGroup', function () {
  it('renders correctly', function () {
    var component = renderWithTheme(React.createElement(ButtonGroup, null, "Hello"));
    expect(component).toMatchSnapshot();
  });
});
//# sourceMappingURL=ButtonGroup.test.js.map