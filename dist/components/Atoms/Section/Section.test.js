import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Section } from "./Section";
describe('Divider', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Section, {
      color: "primary"
    }));
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with paddings', function () {
    var tree = renderWithTheme(React.createElement(Section, {
      color: "primary",
      paddingTop: {
        mobile: 'xs',
        tablet: 'lg'
      },
      paddingBottom: {
        mobile: 'lg',
        desktop: 'xs'
      }
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Section.test.js.map