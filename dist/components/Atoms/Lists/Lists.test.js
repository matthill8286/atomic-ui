import React from 'react';
import { Icon } from "../Icon";
import { CopyText } from "../Typography/CopyText";
import { IconCheckmarkCircle } from '@excelwithbusiness/webmobile-svg-library';
import { renderWithTheme } from "../../../testRenderer";
import { Lists } from "./Lists";
describe('Lists', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Lists, null, React.createElement("li", null, React.createElement(CopyText, null, "Lorem ipsum"))));
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with icon', function () {
    var tree = renderWithTheme(React.createElement(Lists, null, React.createElement("li", null, React.createElement(CopyText, null, React.createElement(Icon, {
      color: "success",
      height: 24,
      width: 24
    }, React.createElement(IconCheckmarkCircle, null), "Lorem ipsum")))));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Lists.test.js.map