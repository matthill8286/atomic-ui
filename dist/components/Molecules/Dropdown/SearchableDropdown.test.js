function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { StyledList } from "./Dropdown.styled";
import { DropdownOption } from "./DropdownOption";
import { SearchableDropdown } from "./SearchableDropdown";
describe('SearchableDropdown', function () {
  var props = {
    index: -1,
    inputValue: undefined,
    label: 'oh my label',
    onSelectChange: jest.fn(),
    onInputChange: jest.fn()
  };
  it('renders', function () {
    var wrapper = renderWithTheme(React.createElement(SearchableDropdown, _extends({}, props, {
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    })));
    expect(wrapper).toMatchSnapshot();
  });
  it('toggles the dropdown on click', function () {
    var wrapper = mountWithTheme(React.createElement(SearchableDropdown, _extends({}, props, {
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    })));
    var button = wrapper.find('div').first();
    button.simulate('click');
    expect(wrapper.find(StyledList).findWhere(function (item) {
      return item.props().active;
    }));
  });
  it('accepts an optional label prop', function () {
    var wrapper = mountWithTheme(React.createElement(SearchableDropdown, _extends({}, props, {
      label: "Label text",
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    })));
    var label = wrapper.find('label');
    expect(label.length).toEqual(1);
    expect(label.text()).toEqual('Label text');
  });
  it('should select the option with given index prop', function () {
    var wrapper = mountWithTheme(React.createElement(SearchableDropdown, _extends({}, props, {
      index: 1,
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    })));
    expect(wrapper.find(DropdownOption).findWhere(function (item) {
      var props = item.props();
      return props.active && props.children === 'two';
    }));
  });
});
//# sourceMappingURL=SearchableDropdown.test.js.map