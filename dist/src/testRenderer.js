import{mount as e}from"enzyme";import t from"react";import{MemoryRouter as r}from"react-router-dom";import n from"../node_modules/react-test-renderer/index.js";import{ThemeProvider as o}from"styled-components";import{saiyanTheme as m}from"./styles/sc-vars-saiyan.js";function c(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;return n.create(t.createElement(o,{theme:r},e)).toJSON()}function a(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;return n.create(t.createElement(o,{theme:c},t.createElement(r,null,e))).toJSON()}function l(e){return n.create(t.createElement(r,null,e)).toJSON()}function i(r){return e(t.createElement(o,{theme:m},r))}function u(n){return e(t.createElement(o,{theme:m},t.createElement(r,null,n)))}export{i as mountWithTheme,u as mountWithThemeAndRouter,l as renderWithRouter,c as renderWithTheme,a as renderWithThemeAndRouter};
//# sourceMappingURL=testRenderer.js.map