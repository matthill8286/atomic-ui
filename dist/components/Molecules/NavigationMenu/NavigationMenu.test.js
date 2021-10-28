import React from 'react';
import { renderWithThemeAndRouter } from "../../../testRenderer";
import { navigationMockItems } from "./navigation.mock";
import { NavigationMenu } from "./NavigationMenu";
describe('NavigationMenu', function () {
  it('should render with items', function () {
    var wrapper = renderWithThemeAndRouter(React.createElement(NavigationMenu, {
      extendedNavigationHandler: function extendedNavigationHandler() {
        return jest.fn();
      },
      navActionList: navigationMockItems,
      testIdSuffix: "data-test-menu",
      initialLink: undefined,
      iconAsMainUi: true,
      button: {
        actionLabel: 'Log Out',
        onClick: function onClick() {
          return jest.fn();
        },
        href: '/letuslogout'
      }
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with text for the main actiuon', function () {
    var wrapper = renderWithThemeAndRouter(React.createElement(NavigationMenu, {
      extendedNavigationHandler: function extendedNavigationHandler() {
        return jest.fn();
      },
      navActionList: navigationMockItems,
      testIdSuffix: "data-test-menu",
      initialLink: "Events",
      iconAsMainUi: false,
      button: {
        actionLabel: 'Log Out',
        onClick: function onClick() {
          return jest.fn();
        },
        href: '/letuslogout'
      }
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=NavigationMenu.test.js.map