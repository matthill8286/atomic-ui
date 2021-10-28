import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { Button } from "./Button";
describe('Button', function () {
  var onClick = jest.fn();
  var buttonContent = 'Button ';
  it('Should render a button', function () {
    var tree = renderWithTheme(React.createElement(Button, {
      onClick: onClick
    }, buttonContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should be clickable', function () {
    var tree = mountWithTheme(React.createElement(Button, {
      onClick: onClick
    }, buttonContent));
    tree.find('button').simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });
  it('Should render an anchor', function () {
    var tree = renderWithTheme(React.createElement(Button, {
      href: "#"
    }, buttonContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a router Link', function () {
    var tree = renderWithTheme(React.createElement(Router, null, React.createElement(Button, {
      to: "/"
    }, buttonContent)));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a loading state', function () {
    var tree = renderWithTheme(React.createElement(Button, {
      onClick: onClick,
      isLoading: true
    }, buttonContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a completed checkmark', function () {
    var tree = renderWithTheme(React.createElement(Button, {
      onClick: onClick,
      showCheckmark: true
    }, buttonContent));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Button.test.js.map