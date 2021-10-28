import * as React from 'react';
import { mountWithTheme, renderWithThemeAndRouter } from "../../../testRenderer";
import { ToolTip } from "./ToolTip";
import { StyledToolTipContent, StyledToolTipWrapper } from "./ToolTip.styled";
describe('ToolTip', function () {
  it('renders basic', function () {
    var tree = renderWithThemeAndRouter(React.createElement(ToolTip, null));
    expect(tree).toMatchSnapshot();
  });
  it('renders default', function () {
    var comp = mountWithTheme(React.createElement(ToolTip, {
      content: "Lorem ipsum"
    }, React.createElement("span", null, "Link")));
    expect(comp.find(StyledToolTipWrapper)).toHaveLength(1);
    expect(comp).toMatchSnapshot();
  });
  it('renders primary', function () {
    var comp = mountWithTheme(React.createElement(ToolTip, {
      content: "Lorem ipsum",
      primary: true
    }, React.createElement("span", null, "Link")));
    expect(comp.find(StyledToolTipWrapper)).toHaveLength(1);
    expect(comp).toMatchSnapshot();
  });
  it('renders visible on hover and hides on leave', function () {
    var comp = mountWithTheme(React.createElement(ToolTip, {
      content: "Lorem ipsum"
    }, React.createElement("span", null, "Link")));
    expect(comp.find(StyledToolTipContent)).toHaveLength(0);
    comp.find(StyledToolTipWrapper).first().simulate('mouseenter');
    expect(comp.find(StyledToolTipContent)).toHaveLength(1);
    comp.find(StyledToolTipWrapper).first().simulate('mouseleave');
    expect(comp.find(StyledToolTipContent)).toHaveLength(0);
  });
});
//# sourceMappingURL=ToolTip.test.js.map