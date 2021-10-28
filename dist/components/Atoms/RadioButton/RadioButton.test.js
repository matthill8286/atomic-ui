import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { RadioButton } from "./RadioButton";
var mockProps = {
  label: '',
  value: '',
  name: '',
  onChangeValue: jest.fn(),
  selectableId: '',
  isChecked: false,
  state: 'idle'
};
describe('Radio button', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(RadioButton, mockProps));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=RadioButton.test.js.map