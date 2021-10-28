function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { CookieLayer } from "./CookieLayer";
describe('Cookie Layer', function () {
  var mainContent = "Welcome to Filtered!!. This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you, both on this website and through other media. To find out more about the cookies we use, see our Privacy Policy.";
  var onClick = jest.fn();
  var position = 'relative';
  var buttonProps = {
    primaryButtonProps: {
      buttonLabel: 'Accept',
      actionType: 'primary',
      onClick: jest.fn()
    },
    secondaryButtonProps: {
      buttonLabel: 'Manage Preferences',
      actionType: 'outlined',
      onClick: jest.fn()
    }
  };
  it('Should render cookie layer wrapper', function () {
    var tree = renderWithTheme(React.createElement(CookieLayer, _extends({
      position: position,
      mainContent: mainContent
    }, buttonProps)));
    expect(tree).toMatchSnapshot();
  });
  xit('Should be clickable', function () {
    var tree = mountWithTheme(React.createElement(CookieLayer, _extends({
      position: position,
      mainContent: mainContent
    }, buttonProps)));
    tree.find('button').at(0).simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
//# sourceMappingURL=CookieLayer.test.js.map