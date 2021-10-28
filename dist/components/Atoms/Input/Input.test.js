import React from 'react';
import { IconClose } from '@excelwithbusiness/webmobile-svg-library';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { CopyText } from "../Typography";
import { Input } from "./Input";
describe('Input', function () {
  it('should render', function () {
    var wrapper = renderWithTheme(React.createElement(Input, null));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with different states', function () {
    var states = ['idle', 'valid', 'error', 'disabled'];
    states.forEach(function (state) {
      var wrapper = renderWithTheme(React.createElement(Input, {
        state: state
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
  it('should render with helper component', function () {
    var wrapper = renderWithTheme(React.createElement(Input, {
      helper: React.createElement(CopyText, null, "help text")
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with errorMessage', function () {
    var wrapper = renderWithTheme(React.createElement(Input, {
      state: "error",
      errorMessage: "error message"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with masked input', function () {
    var wrapper = renderWithTheme(React.createElement(Input, {
      inputMaskProps: {
        mask: '11.11.1111'
      }
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with dense inputStyle', function () {
    var inputStyles = ['default', 'dense', 'large'];
    inputStyles.forEach(function (style) {
      var wrapper = renderWithTheme(React.createElement(Input, {
        inputStyle: style
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
  it('should fire InputEvents', function () {
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
    var wrapper = mountWithTheme(React.createElement(Input, events));
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
  describe('a11y:', function () {
    test('Input required attributes are set to true', function () {
      var wrapper = mountWithTheme(React.createElement(Input, {
        state: "idle",
        inputProps: {
          required: true
        }
      }));
      var input = wrapper.find('input');
      expect(input).toHaveLength(1);
      var inputProps = input.props();
      expect(inputProps['required']).toBe(true);
      expect(inputProps['aria-required']).toBe(true);
    });
    test('Input required attributes are set to false', function () {
      var wrapper = mountWithTheme(React.createElement(Input, {
        state: "idle"
      }));
      var input = wrapper.find('input');
      expect(input).toHaveLength(1);
      var inputProps = input.props();
      expect(inputProps['required']).toBe(false);
      expect(inputProps['aria-required']).toBe(false);
    });
    test('Input aria-invalid attribute is true if state = "error"', function () {
      var wrapper = mountWithTheme(React.createElement(Input, {
        state: "error",
        errorMessage: "error message"
      }));
      var input = wrapper.find('input');
      expect(input).toHaveLength(1);
      var inputProps = input.props();
      expect(inputProps['aria-invalid']).toBe(true);
    });
    test('Input aria-invalid attribute is false if state = "error"', function () {
      var wrapper = mountWithTheme(React.createElement(Input, {
        state: "idle"
      }));
      var input = wrapper.find('input');
      expect(input).toHaveLength(1);
      var inputProps = input.props();
      expect(inputProps['aria-invalid']).toBe(false);
    });
    test('Icon has aria-label attribute', function () {
      var wrapper = mountWithTheme(React.createElement(Input, {
        state: "idle",
        iconLabel: "Click me!",
        onClickIcon: function onClickIcon() {
          return null;
        },
        inputIcon: React.createElement(IconClose, null)
      }));
      var btn = wrapper.find('button');
      expect(btn).toHaveLength(1);
      var btnProps = btn.props();
      expect(btnProps['aria-label']).toBe('Click me!');
    });
  });
});
//# sourceMappingURL=Input.test.js.map