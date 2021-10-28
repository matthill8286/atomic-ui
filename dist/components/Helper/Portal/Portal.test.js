import { mount } from 'enzyme';
import React from 'react';
import { Portal } from "./Portal";
describe('Portal', function () {
  beforeAll(function () {
    return console.error = jest.fn();
  });
  it('should render without crashing', function () {
    var Wrapper = function Wrapper(_ref) {
      var showPortal = _ref.showPortal;
      return React.createElement("div", null, React.createElement("div", {
        id: "target-element"
      }, React.createElement("p", null, "Some Content")), showPortal && React.createElement(React.Fragment, null, React.createElement(Portal, {
        targetRootId: "target-element"
      }, React.createElement("p", null, "Portal Content"))));
    };

    var tree = mount(React.createElement(Wrapper, {
      showPortal: false
    }), {
      attachTo: document.body
    });
    expect(tree.text()).toContain('Some Content');
    tree.setProps({
      showPortal: true
    });
    expect(tree.text()).toContain('Portal Content');
  });
});
//# sourceMappingURL=Portal.test.js.map