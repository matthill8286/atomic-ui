function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Typo } from "../../Atoms/Typography";
import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
import { StepIcon } from "./StepIcon";
var StepRoot = styled.div.withConfig({
  displayName: "Step__StepRoot",
  componentId: "sc-1g8lvsh-0"
})(["cursor:", ";flex:1;position:relative;padding:0 ", "px;"], function (_ref) {
  var pointer = _ref.pointer;
  return pointer ? 'pointer' : 'default';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.defaultSpacing;
});
var StepLabelRoot = styled.span.withConfig({
  displayName: "Step__StepLabelRoot",
  componentId: "sc-1g8lvsh-1"
})(["flex-direction:column;display:flex;align-items:center;", " ", ""], function (_ref3) {
  var elementPosition = _ref3.elementPosition;
  return elementPosition === 'first' && 'align-items: flex-start;';
}, function (_ref4) {
  var elementPosition = _ref4.elementPosition;
  return elementPosition === 'last' && 'align-items: flex-end;';
});
var StepDescription = styled(Typo).withConfig({
  displayName: "Step__StepDescription",
  componentId: "sc-1g8lvsh-2"
})(["", "{display:none;}"], media.maxMd);
export var Step = function Step(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$elementPositio = props.elementPosition,
      elementPosition = _props$elementPositio === void 0 ? 'default' : _props$elementPositio,
      _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      _props$stepIndex = props.stepIndex,
      stepIndex = _props$stepIndex === void 0 ? 0 : _props$stepIndex,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$description = props.description,
      description = _props$description === void 0 ? '' : _props$description,
      icon = props.icon,
      connector = props.connector,
      _onClick = props.onClick,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'prominent' : _props$variant,
      other = _objectWithoutProperties(props, ["color", "elementPosition", "active", "completed", "stepIndex", "title", "description", "icon", "connector", "onClick", "variant"]);

  var stepIconProps = {
    active: active,
    completed: completed,
    color: color,
    variant: variant,
    customIcon: icon
  };
  var textColor = active || completed ? color : 'grey2';
  return React.createElement(StepRoot, _extends({}, other, {
    pointer: !!_onClick,
    onClick: function onClick() {
      return _onClick && _onClick(stepIndex);
    }
  }), connector, variant != 'uniform' ? React.createElement(StepLabelRoot, {
    elementPosition: elementPosition
  }, title && React.createElement(Typo, {
    tag: "span",
    color: textColor,
    weight: active || completed ? 'semibold' : 'regular'
  }, title), description && React.createElement(StepDescription, {
    tag: "span",
    color: textColor
  }, description), React.createElement(StepIcon, stepIconProps)) : React.createElement(StepIcon, stepIconProps));
};
Step.displayName = 'Step';
//# sourceMappingURL=Step.js.map