import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { saiyanTheme } from "./styles/sc-vars-saiyan";
export function renderWithTheme(tree) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : saiyanTheme;
  return renderer.create(React.createElement(ThemeProvider, {
    theme: theme
  }, tree)).toJSON();
}
export function renderWithThemeAndRouter(tree) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : saiyanTheme;
  return renderer.create(React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(Router, null, tree))).toJSON();
}
export function renderWithRouter(tree) {
  return renderer.create(React.createElement(Router, null, tree)).toJSON();
}
export function mountWithTheme(tree) {
  return mount(React.createElement(ThemeProvider, {
    theme: saiyanTheme
  }, tree));
}
export function mountWithThemeAndRouter(tree) {
  return mount(React.createElement(ThemeProvider, {
    theme: saiyanTheme
  }, React.createElement(Router, null, tree)));
}
//# sourceMappingURL=testRenderer.js.map