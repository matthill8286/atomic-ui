import React from 'react';
import { Badge } from "./Badge";
import { renderWithTheme } from "../../../testRenderer";
var mockedBadges = [{
  id: 0,
  name: 'Badge No.1'
}, {
  id: 1,
  name: 'Some other label'
}, {
  id: 2,
  name: 'Free shipping'
}, {
  id: 3,
  name: 'Hot Hot Hot'
}, {
  id: 4,
  name: 'Last one'
}];
describe('Badge', function () {
  it('should render', function () {
    var tree = renderWithTheme(React.createElement(Badge, {
      badges: mockedBadges
    }));
    expect(tree).toMatchSnapshot();
  });
  it('should render with primary color', function () {
    var tree = renderWithTheme(React.createElement(Badge, {
      badges: mockedBadges,
      actionType: "prominent"
    }));
    expect(tree).toMatchSnapshot();
  });
  it('should render with secondary color', function () {
    var tree = renderWithTheme(React.createElement(Badge, {
      badges: mockedBadges,
      actionType: "secondary"
    }));
    expect(tree).toMatchSnapshot();
  });
  it('should render a badge line', function () {
    var tree = renderWithTheme(React.createElement(Badge, {
      isBadgeLine: true,
      badges: mockedBadges
    }));
    expect(tree).toMatchSnapshot();
  });
  it('should render a badge line secondary', function () {
    var tree = renderWithTheme(React.createElement(Badge, {
      badges: mockedBadges,
      isBadgeLine: true,
      actionType: "secondary"
    }));
    expect(tree).toMatchSnapshot();
  });
  it('should render a badge line disabled', function () {
    var tree = renderWithTheme(React.createElement(Badge, {
      badges: mockedBadges,
      isBadgeLine: true,
      actionType: "disabled"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Badge.test.js.map