import React from 'react';
import { mountWithTheme } from "../../../testRenderer";
import { Collapse } from "./Collapse";
describe('<Collapse> Atom', function () {
  test('renders correct open state', function () {
    var wrapper = mountWithTheme(React.createElement(Collapse, {
      isOpen: true
    }, "A label"));
    expect(wrapper.find(Collapse).prop('isOpen')).toEqual(true);
  });
  test('renders correct collapsed state', function () {
    var wrapper = mountWithTheme(React.createElement(Collapse, {
      isOpen: false,
      collapsedHeight: 24
    }, "A label"));
    expect(wrapper.find(Collapse).prop('isOpen')).toEqual(false);
    expect(wrapper.find(Collapse).prop('collapsedHeight')).toEqual(24);
  });
});
//# sourceMappingURL=Collapse.test.js.map