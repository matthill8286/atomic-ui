import React from 'react';
import { CopyText } from "../../Atoms/Typography";
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { SearchButton } from "./SearchButton";
describe('SearchButton', function () {
  it('should render', function () {
    var wrapper = renderWithTheme(React.createElement(SearchButton, null));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with different states', function () {
    var states = ['idle', 'valid', 'error'];
    states.forEach(function (state) {
      var wrapper = renderWithTheme(React.createElement(SearchButton, {
        state: state
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
  it('should render with helper component', function () {
    var wrapper = renderWithTheme(React.createElement(SearchButton, {
      helper: React.createElement(CopyText, null, "help text")
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with errorMessage', function () {
    var wrapper = renderWithTheme(React.createElement(SearchButton, {
      state: "error",
      errorMessage: "error message"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with dense searchStyle', function () {
    var searchStyles = ['default', 'dense', 'large'];
    searchStyles.forEach(function (style) {
      var wrapper = renderWithTheme(React.createElement(SearchButton, {
        inputStyle: style
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
  it('should fireSearchEvents', function () {
    var events = {
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onClick: jest.fn(),
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onKeyDown: jest.fn(),
      onKeyUp: jest.fn(),
      onClickIcon: jest.fn()
    };
    var wrapper = mountWithTheme(React.createElement(SearchButton, events));
    var input = wrapper.find('input');
    input.simulate('mouseEnter');
    expect(events.onMouseEnter).toBeCalledTimes(1);
    input.simulate('mouseLeave');
    expect(events.onMouseLeave).toBeCalledTimes(1);
    input.simulate('click');
    expect(events.onClick).toBeCalledTimes(1);
    input.simulate('focus');
    expect(events.onFocus).toBeCalledTimes(1);
    input.simulate('blur');
    expect(events.onBlur).toBeCalledTimes(1);
    input.simulate('change', {
      target: {
        value: 'hallo!'
      }
    });
    expect(events.onChange).toBeCalledTimes(1);
    input.simulate('keyDown');
    expect(events.onKeyDown).toBeCalledTimes(1);
    input.simulate('keyUp');
    expect(events.onKeyUp).toBeCalledTimes(1);
  });
});
//# sourceMappingURL=SearchButton.test.js.map