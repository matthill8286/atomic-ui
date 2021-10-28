import { mount } from 'enzyme';
import React from 'react';
import { renderWithThemeAndRouter } from "../../../testRenderer";
import { Foldable, StyledFoldable } from "./Foldable";

var assertHeightIsCorrect = function assertHeightIsCorrect(wrapper, height) {
  expect(wrapper.find(StyledFoldable).prop('style').height).toBe(height);
};

describe('Foldable', function () {
  beforeAll(function () {
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
      configurable: true,
      value: 50
    });
  });
  it('should render', function () {
    var tree = renderWithThemeAndRouter(React.createElement(Foldable, {
      isOpen: true
    }, React.createElement("div", null, "HIDDEN")));
    expect(tree).toMatchSnapshot();
  });
  it('should have a height of auto if initially opened', function () {
    var props = {
      isOpen: true
    };
    var wrapper = mount(React.createElement(Foldable, props, React.createElement("div", null, "HIDDEN")));
    expect(wrapper.state('height')).toBe(50);
    assertHeightIsCorrect(wrapper, 50);
  });
  it('should have a height of 0 if initially closed', function () {
    var props = {
      isOpen: false
    };
    var wrapper = mount(React.createElement(Foldable, props, React.createElement("div", null, "HIDDEN")));
    expect(wrapper.state('height')).toBe(0);
    assertHeightIsCorrect(wrapper, 0);
  });
  it('should update the height two times when opened', function () {
    var props = {
      isOpen: false
    };
    var wrapper = mount(React.createElement(Foldable, props, React.createElement("div", null, "HIDDEN")));
    var node = wrapper.find('[data-test="inner-foldable"]').instance();
    Object.defineProperty(node, 'clientHeight', {
      value: 100
    });
    var spy = jest.spyOn(wrapper.instance(), 'setState');
    expect(wrapper.state('height')).toBe(0);
    assertHeightIsCorrect(wrapper, 0);
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.setProps({
      isOpen: true
    });
    wrapper.childAt(0).simulate('transitionEnd');
    expect(spy).toHaveBeenCalledTimes(2);
    var calls = spy.mock.calls;
    var call1Arg1 = calls && calls[0] && calls[0][0];
    var call2Arg1 = calls && calls[1] && calls[1][0];

    if (call1Arg1 && 'height' in call1Arg1) {
      expect(call1Arg1.height).toBe(100);
    }

    if (call2Arg1 && 'height' in call2Arg1) {
      expect(call2Arg1.height).toBe('auto');
    }

    spy.mockClear();
  });
  it('should update the height two times when closed', function () {
    var props = {
      isOpen: true
    };
    var wrapper = mount(React.createElement(Foldable, props, React.createElement("div", null, "HIDDEN")));
    var node = wrapper.find('[data-test="inner-foldable"]').instance();
    Object.defineProperty(node, 'clientHeight', {
      value: 100
    });
    var spy = jest.spyOn(wrapper.instance(), 'setState');
    expect(wrapper.state('height')).toBe(50);
    assertHeightIsCorrect(wrapper, 50);
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.setProps({
      isOpen: false
    });
    expect(spy).toHaveBeenCalledTimes(2);
    var calls = spy.mock.calls;
    var call1Arg1 = calls && calls[0] && calls[0][0];
    var call2Arg1 = calls && calls[1] && calls[1][0];

    if (call1Arg1 && 'height' in call1Arg1) {
      expect(call1Arg1.height).toBe(100);
    }

    if (call2Arg1 && 'height' in call2Arg1) {
      expect(call2Arg1.height).toBe(0);
    }

    spy.mockClear();
  });
});
//# sourceMappingURL=Foldable.test.js.map