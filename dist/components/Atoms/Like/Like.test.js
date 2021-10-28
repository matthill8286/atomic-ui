import React from 'react';
import { Icon } from "../Icon";
import { IconArticle } from '@excelwithbusiness/webmobile-svg-library';
import { renderWithTheme } from "../../../testRenderer";
import { Like } from "./Like";
describe('Like', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Like, {
      scale: "small"
    }, "Test Like"));
    expect(tree).toMatchSnapshot();
  });
  it('renders with left Icon', function () {
    var tree = renderWithTheme(React.createElement(Like, {
      scale: "large",
      iconLeft: React.createElement(Icon, null, React.createElement(IconArticle, null))
    }, "Test Like with Icon"));
    expect(tree).toMatchSnapshot();
  });
  it('renders with right Icon', function () {
    var tree = renderWithTheme(React.createElement(Like, {
      scale: "small",
      iconRight: React.createElement(Icon, null, React.createElement(IconArticle, null))
    }, "Test Like with Icon"));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Like.test.js.map