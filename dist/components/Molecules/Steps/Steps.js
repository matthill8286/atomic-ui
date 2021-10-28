function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Children, cloneElement, isValidElement } from 'react';
import { Card } from "../../Atoms/Card";
import { FlexBox } from "../../Helper/FlexBox";
import { StepConnector } from "./StepConnector";
export var Steps = function Steps(props) {
  var _props$activeStep = props.activeStep,
      activeStep = _props$activeStep === void 0 ? 0 : _props$activeStep,
      _props$completedStep = props.completedStep,
      completedStep = _props$completedStep === void 0 ? 0 : _props$completedStep,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 0 : _props$elevation,
      connector = props.connector,
      children = props.children,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'prominent' : _props$variant,
      onChange = props.onChange,
      other = _objectWithoutProperties(props, ["activeStep", "completedStep", "elevation", "connector", "children", "color", "variant", "onChange"]);

  var childrenArray = Children.toArray(children);
  var steps = childrenArray.map(function (step, stepIndex) {
    if (isValidElement(step)) {
      var active = activeStep === stepIndex;
      var completed = stepIndex <= completedStep;
      var elementPosition = 'default';
      if (stepIndex === 0) elementPosition = 'first';
      if (stepIndex === 1) elementPosition = 'second';
      if (stepIndex + 1 === Children.count(children)) elementPosition = 'last';
      var connectorProps = {
        elementPosition: elementPosition,
        active: stepIndex <= activeStep,
        prevActive: stepIndex - 1 === activeStep,
        completed: completed,
        color: color,
        variant: variant
      };
      var connectorComponent = isValidElement(connector) ? cloneElement(connector, _objectSpread(_objectSpread({}, connectorProps), connector.props)) : React.createElement(StepConnector, connectorProps);

      var stepProps = _objectSpread(_objectSpread({}, step.props), {}, {
        connector: connectorComponent,
        elementPosition: elementPosition,
        stepIndex: stepIndex,
        active: active,
        completed: completed,
        color: color,
        onClick: onChange,
        variant: variant
      });

      return cloneElement(step, stepProps);
    }
  });
  return React.createElement(Card, _extends({
    elevation: elevation,
    noBorder: ['top', 'right', 'bottom', 'left'],
    surface: "clear",
    padding: "md"
  }, other), React.createElement(FlexBox, {
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  }, steps));
};
Steps.displayName = 'Steps';
//# sourceMappingURL=Steps.js.map