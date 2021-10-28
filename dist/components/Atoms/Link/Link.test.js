import React from 'react';
import { Icon } from "../Icon";
import { StyleguideArrow } from "../../../svgs";
import { mountWithTheme, mountWithThemeAndRouter, renderWithTheme, renderWithThemeAndRouter } from "../../../testRenderer";
import { Link } from "./Link";
describe('<Link /> component', function () {
  var onClick = jest.fn();
  var linkContent = 'Button';
  var linkHref = 'https://google.com/?how-to-write-tests';
  it('should render a button tag against the "onClick" attribute', function () {
    var button = renderWithTheme(React.createElement(Link, {
      onClick: onClick
    }, linkContent));
    var tree = mountWithTheme(React.createElement(Link, {
      onClick: onClick
    }, linkContent));
    expect(tree.find('button')).toHaveLength(1);
    expect(button).toMatchSnapshot();
  });
  it('should not render a button tag against the "href" attribute', function () {
    var tree = mountWithTheme(React.createElement(Link, {
      href: linkHref
    }, linkContent));
    expect(tree.find('button')).toHaveLength(0);
  });
  it('should not render a button tag against the "to" attribute', function () {
    var tree = mountWithThemeAndRouter(React.createElement(Link, {
      to: "/"
    }, linkContent));
    expect(tree.find('button')).toHaveLength(0);
  });
  it('should render an anchor tag against the "href" attribute', function () {
    var anchor = renderWithTheme(React.createElement(Link, {
      href: linkHref
    }, linkContent));
    var tree = mountWithTheme(React.createElement(Link, {
      href: linkHref
    }, linkContent));
    expect(tree.find('a')).toHaveLength(1);
    expect(anchor).toMatchSnapshot();
  });
  it('should not render an anchor tag against the "onClick" attribute', function () {
    var tree = mountWithTheme(React.createElement(Link, {
      onClick: onClick
    }, linkContent));
    expect(tree.find('a')).toHaveLength(0);
  });
  it('should render an anchor tag from a router link against the "to" attribute', function () {
    var routerLink = renderWithThemeAndRouter(React.createElement(Link, {
      to: "/"
    }, linkContent));
    var tree = mountWithThemeAndRouter(React.createElement(Link, {
      to: "/"
    }, linkContent));
    expect(tree.find('RouterLinkWrapper[data-test="ewb-router-link"]')).toHaveLength(1);
    expect(routerLink).toMatchSnapshot();
  });
  it('should not render an anchor tag from a router link against the "onClick" attribute', function () {
    var tree = mountWithTheme(React.createElement(Link, {
      onClick: onClick
    }, linkContent));
    expect(tree.find('RouterLinkWrapper[data-test="ewb-router-link"]')).toHaveLength(0);
  });
  it('should not render an anchor tag from a router link against the "href" attribute', function () {
    var tree = mountWithTheme(React.createElement(Link, {
      href: linkHref
    }, linkContent));
    expect(tree.find('RouterLinkWrapper[data-test="ewb-router-link"]')).toHaveLength(0);
  });
  it('should render an anchor tag with a left icon', function () {
    var tree = renderWithTheme(React.createElement(Link, {
      scale: "large",
      iconLeft: React.createElement(Icon, null, React.createElement(StyleguideArrow, null))
    }, linkContent));
    expect(tree).toMatchSnapshot();
  });
  it('should render an anchor tag with a right icon', function () {
    var tree = renderWithTheme(React.createElement(Link, {
      scale: "small",
      iconRight: React.createElement(Icon, null, React.createElement(StyleguideArrow, null))
    }, linkContent));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Link.test.js.map