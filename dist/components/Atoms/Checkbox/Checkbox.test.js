import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Checkbox } from "./Checkbox";
var mockProps = {
  label: '',
  value: '',
  name: '',
  onChangeValue: jest.fn(),
  selectableId: '',
  isChecked: false,
  state: 'idle'
};
describe('Checkbox', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Checkbox, mockProps));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Checkbox.test.js.map