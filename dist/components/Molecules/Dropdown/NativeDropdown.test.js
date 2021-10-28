import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { NativeDropdown } from "./NativeDropdown";
var options = [{
  label: 'one'
}, {
  label: ' two'
}];
describe('NativeDropdown', function () {
  it('should match snapshot', function () {
    var wrapper = renderWithTheme(React.createElement(NativeDropdown, {
      value: "two",
      onChange: function onChange() {}
    }, options.map(function (option) {
      return React.createElement("option", {
        key: option.label,
        value: option.label
      }, option.label);
    })));
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onChange', function () {
    var onChange = jest.fn();
    var wrapper = mountWithTheme(React.createElement(NativeDropdown, {
      value: "two",
      onChange: onChange
    }, options.map(function (option) {
      return React.createElement("option", {
        key: option.label,
        value: option.label
      }, option.label);
    })));
    wrapper.find('select').simulate('change', {
      target: {
        value: 'one'
      }
    });
    expect(onChange).toBeCalled();
  });
});
//# sourceMappingURL=NativeDropdown.test.js.map