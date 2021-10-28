import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { LanguageMenu } from "./LanguageMenu";
import { languageMockItems } from "./LanguageMenu.mock";
describe('LanguageMenu', function () {
  var extendedLanguageHandler = function extendedLanguageHandler() {
    return jest.fn();
  };

  it('should render with languages', function () {
    var wrapper = renderWithTheme(React.createElement(LanguageMenu, {
      extendedLanguageHandler: extendedLanguageHandler,
      languages: languageMockItems,
      setupCurrentIndex: 0
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render testIdSuffix', function () {
    var tree = renderWithTheme(React.createElement(LanguageMenu, {
      testIdSuffix: "language",
      extendedLanguageHandler: extendedLanguageHandler,
      languages: languageMockItems,
      setupCurrentIndex: 0
    }));
    expect(tree).toMatchSnapshot();
  });
  it('should render with className', function () {
    var tree = renderWithTheme(React.createElement(LanguageMenu, {
      className: "selected",
      extendedLanguageHandler: extendedLanguageHandler,
      languages: languageMockItems,
      setupCurrentIndex: 0
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=LanguageMenu.test.js.map