function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { styled } from "../../../styles/styled";
import { IconArticle } from '@excelwithbusiness/webmobile-svg-library';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { Step } from "./Step";
import { StepConnectorRoot } from "./StepConnector";
var props = {
  title: 'Sign In',
  description: 'Test description',
  color: 'primary',
  active: false,
  completed: false,
  elementPosition: 'first',
  stepIndex: 0,
  variant: 'prominent'
};
describe('Step', function () {
  it('should render', function () {
    var tree = renderWithTheme(React.createElement(Step, props));
    expect(tree).toMatchSnapshot();
  });
  it('should render with custom icon', function () {
    var CustomIcon = function CustomIcon(_ref) {
      var _ref$active = _ref.active,
          active = _ref$active === void 0 ? false : _ref$active,
          _ref$completed = _ref.completed,
          completed = _ref$completed === void 0 ? false : _ref$completed,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? 'primary' : _ref$color,
          props = _objectWithoutProperties(_ref, ["active", "completed", "color"]);

      return React.createElement(Icon, _extends({
        color: active ? 'white' : completed ? color : 'grey2'
      }, props), React.createElement(IconArticle, null));
    };

    var withIconProps = _objectSpread(_objectSpread({}, props), {}, {
      icon: React.createElement(CustomIcon, null)
    });

    var tree = renderWithTheme(React.createElement(Step, withIconProps));
    expect(tree).toMatchSnapshot();
  });
  it('should render with custom connector', function () {
    var CustomConnectorLine = styled.span.withConfig({
      displayName: "Steptest__CustomConnectorLine",
      componentId: "sc-1s1uvov-0"
    })(["border-color:", ";border-style:solid;border-top-width:", ";border-bottom-width:", ";border-radius:4px;display:block;position:'relative';z-index:'auto';"], function (_ref2) {
      var theme = _ref2.theme,
          _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? 'primary' : _ref2$color,
          active = _ref2.active,
          completed = _ref2.completed,
          _ref2$elementPosition = _ref2.elementPosition,
          elementPosition = _ref2$elementPosition === void 0 ? 'default' : _ref2$elementPosition;
      return completed || active || elementPosition === 'first' ? theme.color[color] : theme.color.black;
    }, function (_ref3) {
      var borderWidth = _ref3.borderWidth;
      return borderWidth;
    }, function (_ref4) {
      var borderWidth = _ref4.borderWidth;
      return borderWidth;
    });

    var CustomConnector = function CustomConnector(props) {
      return React.createElement(StepConnectorRoot, props, React.createElement(CustomConnectorLine, _extends({}, props, {
        borderWidth: props.variant === 'simple' ? '2px' : '4px'
      })));
    };

    var withIconProps = _objectSpread(_objectSpread({}, props), {}, {
      connector: React.createElement(CustomConnector, null)
    });

    var tree = renderWithTheme(React.createElement(Step, withIconProps));
    expect(tree).toMatchSnapshot();
  });
  it('should call onClick function', function () {
    var onClick = jest.fn();
    var three = mountWithTheme(React.createElement(Step, _extends({}, props, {
      onClick: onClick
    })));
    three.childAt(0).simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
//# sourceMappingURL=Step.test.js.map