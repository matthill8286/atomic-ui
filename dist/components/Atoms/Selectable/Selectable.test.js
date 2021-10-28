function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Checkbox } from "../Checkbox";
import { RadioButton } from "../RadioButton";
import { renderWithTheme } from "../../../testRenderer";
var mockProps = {
  label: '',
  value: '',
  name: '',
  onChangeValue: jest.fn(),
  selectableId: '',
  isChecked: false,
  state: 'idle'
};
describe('renders Selectables', function () {
  it('renders checkbox correctly', function () {
    var tree = renderWithTheme(React.createElement(Checkbox, mockProps));
    expect(tree).toMatchSnapshot();
  });
  it('renders radio button correctly', function () {
    var tree = renderWithTheme(React.createElement(RadioButton, mockProps));
    expect(tree).toMatchSnapshot();
  });
  it('renders radio button group correctly', function () {
    var tree = renderWithTheme(React.createElement(React.Fragment, null, React.createElement(RadioButton, _extends({}, mockProps, {
      selectableId: "radio1",
      name: "radios"
    })), React.createElement(RadioButton, _extends({}, mockProps, {
      selectableId: "radio2",
      name: "radios"
    }))));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Selectable.test.js.map