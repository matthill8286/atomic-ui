import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { loremIpsumArray } from "../../../utils/loremIpsumArray";
import { Tag } from "./Tag";
describe('Tag', function () {
  var tagContent = 'Tag ';
  it('Should render a tag', function () {
    var tree = renderWithTheme(React.createElement(Tag, {
      text: ""
    }, tagContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a tag with link', function () {
    var tree = renderWithTheme(React.createElement(Tag, {
      text: "",
      href: "#",
      targetBlank: true
    }, tagContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render 20 tags', function () {
    var tags = loremIpsumArray.slice(0, 20).map(function (t) {
      return React.createElement(Tag, {
        key: t,
        text: t,
        targetBlank: true,
        marginBottom: true,
        marginRight: true
      });
    });
    var tree = renderWithTheme(React.createElement(React.Fragment, null, tags));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Tag.test.js.map