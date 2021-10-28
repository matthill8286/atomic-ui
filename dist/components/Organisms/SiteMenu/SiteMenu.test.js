import * as React from 'react';
import { TabItem } from "../../Molecules/TabBar/TabItem";
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { SiteMenu } from "./SiteMenu";
import { SiteMenuItems } from "./SiteMenu.mock";
describe('SiteMenu', function () {
  it('matches snapshot', function () {
    var tree = renderWithTheme(React.createElement(SiteMenu, {
      menuItems: SiteMenuItems
    }));
    expect(tree).toMatchSnapshot();
  });
  it('renders correct', function () {
    var comp = mountWithTheme(React.createElement(SiteMenu, {
      menuItems: SiteMenuItems
    }));
    var rows = comp.find(TabItem);
    expect(rows).toHaveLength(SiteMenuItems.length);
    expect(comp).toMatchSnapshot();
  });
  it('renders nothing when undefined', function () {
    var comp = mountWithTheme(React.createElement(SiteMenu, {
      menuItems: undefined
    }));
    var menu = comp.find(SiteMenu);
    expect(menu.children().exists()).toBeFalsy();
    expect(comp).toMatchSnapshot();
  });
  it('renders nothing when empty features', function () {
    var comp = mountWithTheme(React.createElement(SiteMenu, {
      menuItems: []
    }));
    var menu = comp.find(SiteMenu);
    expect(menu.children().exists()).toBeFalsy();
    expect(comp).toMatchSnapshot();
  });
});
//# sourceMappingURL=SiteMenu.test.js.map