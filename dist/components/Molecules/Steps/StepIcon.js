function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { cloneElement, isValidElement } from 'react';
import { Typo } from "../../Atoms/Typography";
import { css, styled } from "../../../styles/styled";
var FlexCenter = css(["display:flex;align-items:center;justify-content:center;flex-shrink:0;"]);
var StepIconRoot = styled.div.withConfig({
  displayName: "StepIcon__StepIconRoot",
  componentId: "sc-1wwjlde-0"
})(["margin-top:", ";margin-bottom:", ";position:relative;z-index:1;", ""], function (_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      active = _ref.active;
  return variant === 'simple' && !active ? '12px' : "".concat(theme.defaultSpacing, "px");
}, function (_ref2) {
  var variant = _ref2.variant,
      active = _ref2.active;
  return variant === 'simple' && !active ? '2px' : '0';
}, FlexCenter);
var Circle = styled.div.withConfig({
  displayName: "StepIcon__Circle",
  componentId: "sc-1wwjlde-1"
})(["border:", " solid ", ";border-radius:50%;width:", ";height:", ";background-color:", ";box-shadow:", " ", ";", ""], function (_ref3) {
  var active = _ref3.active,
      completed = _ref3.completed;
  return completed ? '6px' : active ? '4px' : '4px';
}, function (_ref4) {
  var theme = _ref4.theme,
      active = _ref4.active,
      completed = _ref4.completed,
      color = _ref4.color;
  return theme.color[active ? color : completed ? 'white' : "grey2"];
}, function (_ref5) {
  var completed = _ref5.completed;
  return completed ? '40px' : '24px';
}, function (_ref6) {
  var completed = _ref6.completed;
  return completed ? '40px' : '24px';
}, function (_ref7) {
  var theme = _ref7.theme,
      active = _ref7.active,
      completed = _ref7.completed,
      color = _ref7.color;
  return theme.color[active ? "white" : completed ? color : 'grey2'];
}, function (_ref8) {
  var active = _ref8.active,
      completed = _ref8.completed;
  return active || completed ? '2px 2px 4px' : '0 0 0';
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color['grey2'];
}, FlexCenter);
var Checkmark = styled.div.withConfig({
  displayName: "StepIcon__Checkmark",
  componentId: "sc-1wwjlde-2"
})(["position:relative;display:inline-block;width:", ";height:", ";::before{position:absolute;left:0;top:13px;height:31%;width:2px;background-color:", ";content:'';transform:translateX(12px) rotate(-45deg);transform-origin:left bottom;}::after{position:absolute;left:0;bottom:9px;height:2px;width:55%;background-color:", ";content:'';transform:translateX(12px) rotate(-45deg);transform-origin:left bottom;}"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.base.lg;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.base.lg;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.color['white'];
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.color['white'];
});
var Point = styled.div.withConfig({
  displayName: "StepIcon__Point",
  componentId: "sc-1wwjlde-3"
})(function (_ref14) {
  var theme = _ref14.theme,
      active = _ref14.active,
      backgroundColor = _ref14.backgroundColor;
  return {
    border: "2px solid ".concat(theme.color[backgroundColor]),
    backgroundColor: theme.color[backgroundColor],
    borderRadius: '50%',
    width: active ? 12 : 6,
    height: active ? 12 : 6
  };
});
export var StepIcon = function StepIcon(props) {
  var _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'prominent' : _props$variant,
      customIcon = props.customIcon,
      other = _objectWithoutProperties(props, ["active", "completed", "color", "variant", "customIcon"]);

  var renderIcon = function renderIcon() {
    if (customIcon && isValidElement(customIcon)) {
      return React.createElement(Circle, {
        active: active,
        completed: completed,
        color: color
      }, cloneElement(customIcon, {
        active: active,
        completed: completed,
        color: color
      }));
    }

    if (variant === 'simple') {
      return React.createElement(Point, {
        backgroundColor: active || completed ? color : 'grey2',
        active: active
      });
    }

    return React.createElement(Circle, {
      active: active,
      completed: completed,
      color: color
    }, completed ? React.createElement(Checkmark, {
      active: active,
      color: color
    }) : React.createElement(Typo, {
      color: active ? 'white' : color
    }));
  };

  return React.createElement(StepIconRoot, _extends({
    variant: variant,
    active: active
  }, other), renderIcon());
};
StepIcon.displayName = 'StepIcon';
//# sourceMappingURL=StepIcon.js.map