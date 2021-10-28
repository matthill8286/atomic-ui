import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { Dropdown } from "./Dropdown";
import { StyledDropdownOption, StyledList } from "./Dropdown.styled";
describe('Dropdown', function () {
  it('renders', function () {
    var wrapper = renderWithTheme(React.createElement(Dropdown, {
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('renders and show options list', function () {
    var wrapper = mountWithTheme(React.createElement(Dropdown, {
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    }));
    wrapper.find('DropdownWithoutState').simulate('click');
    var dropDownWithOptions = wrapper.findWhere(function (item) {
      return item.props().showDropdown === true;
    });
    expect(dropDownWithOptions).toBeDefined();
  });
  it('toggles the dropdown on click', function () {
    var wrapper = mountWithTheme(React.createElement(Dropdown, {
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    }));
    var button = wrapper.find('div').first();
    button.simulate('click');
    expect(wrapper.find(StyledList).findWhere(function (item) {
      return item.props().active;
    }));
  });
  it('accepts an optional label prop', function () {
    var wrapper = mountWithTheme(React.createElement(Dropdown, {
      label: "Label text",
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    }));
    var label = wrapper.find('label');
    expect(label.length).toEqual(1);
    expect(label.text()).toEqual('Label text');
  });
  it('should select the option with given initialIndex prop', function () {
    var wrapper = mountWithTheme(React.createElement(Dropdown, {
      initialIndex: 1,
      label: "Label text",
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    }));
    expect(wrapper.find(StyledDropdownOption).findWhere(function (item) {
      var props = item.props();
      return props.active && props.children === 'two';
    }));
  });
});
//# sourceMappingURL=Dropdown.test.js.map