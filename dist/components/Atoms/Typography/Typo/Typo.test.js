import React from 'react';
import { mountWithTheme } from "../../../../testRenderer";
import { Typo } from "./Typo";
var DEFAULT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod ligula.';
describe('Typo', function () {
  it('should render default', function () {
    var comp = mountWithTheme(React.createElement(Typo, null, DEFAULT_TEXT));
    var span = comp.find('span');
    expect(comp.debug()).toMatchSnapshot();
    expect(span).toBeDefined();
    expect(span.text()).toBe(DEFAULT_TEXT);
  });
  it('should render different tags', function () {
    var tags = ['div', 'p', 'h1'];
    tags.forEach(function (tag) {
      var comp = mountWithTheme(React.createElement(Typo, {
        tag: tag
      }, DEFAULT_TEXT));
      expect(comp.debug()).toMatchSnapshot();
      expect(comp.find(tag)).toBeDefined();
    });
  });
});
//# sourceMappingURL=Typo.test.js.map