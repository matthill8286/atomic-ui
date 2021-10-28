function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Link } from "../../Atoms/Link";
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { ActionLink } from "./ActionLink";
describe('<ActionLink /> component', function () {
  var props = {
    children: 'Click me'
  };
  var defaultActionLink = React.createElement(ActionLink, props);
  test('should render a <Link /> component', function () {
    var actionLink = renderWithTheme(defaultActionLink);
    var wrapper = mountWithTheme(defaultActionLink);
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(actionLink).toMatchSnapshot();
  });
  test('should trigger onClick', function () {
    var onClick = jest.fn();
    var wrapper = mountWithTheme(React.createElement(ActionLink, _extends({}, props, {
      onClick: onClick
    })));
    wrapper.find(Link).simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
//# sourceMappingURL=ActionLink.test.js.map