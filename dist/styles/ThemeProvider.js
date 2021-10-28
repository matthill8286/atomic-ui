import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { saiyanTheme } from "./sc-vars-saiyan";
export var ThemeProvider = function ThemeProvider(props) {
  var mergedTheme = Object.assign({}, saiyanTheme, props.theme);
  return React.createElement(Provider, {
    theme: mergedTheme
  }, props.children);
};
//# sourceMappingURL=ThemeProvider.js.map