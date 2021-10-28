import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { IconUser } from '@excelwithbusiness/webmobile-svg-library';
import { Picture } from "../../Atoms/Picture";
import { DropdownButton } from "./DropdownButton";
import { Dropdown } from "../Dropdown";
var onClick = jest.fn();
describe('DropdownButton', function () {
  it('renders', function () {
    var wrapper = renderWithTheme(React.createElement(DropdownButton, {
      width: 35,
      height: 35,
      isOpen: false,
      onClick: onClick
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should be clickable', function () {
    var wrapper = mountWithTheme(React.createElement(DropdownButton, {
      width: 35,
      height: 35,
      isOpen: false,
      onClick: onClick
    }));
    wrapper.simulate('click');
    var options = React.createElement(Dropdown, {
      options: [{
        label: 'one'
      }, {
        label: 'two'
      }]
    });
    expect(options).toBeDefined();
  });
  it('renders isOpen prop as false', function () {
    var wrapper = mountWithTheme(React.createElement(DropdownButton, {
      width: 35,
      height: 35,
      isOpen: false,
      onClick: onClick
    }));
    expect(wrapper.find(DropdownButton).prop('isOpen')).toEqual(false);
  });
  it('render profile icon', function () {
    var wrapper = mountWithTheme(React.createElement(DropdownButton, {
      width: 35,
      height: 35,
      isOpen: false,
      primaryIcon: React.createElement(IconUser, {
        height: 35,
        width: 35
      }),
      onClick: onClick
    }));
    expect(wrapper.find(IconUser)).toHaveLength(1);
  });
  it('render profile picture', function () {
    var wrapper = mountWithTheme(React.createElement(DropdownButton, {
      width: 35,
      height: 35,
      isOpen: false,
      pictureSrc: "https://media.graphcms.com/xlJatgRxRASTguH6kE3A",
      onClick: onClick
    }));
    expect(wrapper.find(Picture)).toHaveLength(1);
  });
});
//# sourceMappingURL=DropdownButton.test.js.map