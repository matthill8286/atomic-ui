function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { css, styled } from "../../../styles/styled";

var getStepConnectorPositions = function getStepConnectorPositions(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      elementPosition = _ref.elementPosition,
      rightMargin = _ref.rightMargin,
      leftMargin = _ref.leftMargin;
  var positions = {
    uniform: {
      first: css(["left:50%;right:0;"]),
      second: css(["left:-50%;right:50%;"]),
      last: css(["left:-50%;right:50%;"]),
      default: css(["left:-50%;right:50%;"])
    },
    prominent: {
      first: css(["left:10px;right:calc(100% - ", ");"], theme.spacing.base.md),
      second: css(["left:calc(-100% + ", ");right:50%;"], theme.spacing.base.md),
      last: css(["left:-50%;right:10px;"]),
      default: css(["left:-50%;right:50%;"])
    },
    simple: {
      first: css(["display:none;"]),
      second: css(["left:calc(-100% + ", "px);right:calc(50% + ", "px);"], 42 + leftMargin, 28 + rightMargin),
      last: css(["left:calc(-50% + ", "px);right:calc(0% + ", "px);"], 28 + leftMargin, 42 + rightMargin),
      default: css(["left:calc(-50% + ", "px);right:calc(50% + ", "px);"], 28 + leftMargin, 28 + rightMargin)
    }
  };
  return positions[variant][elementPosition];
};

var BottomPositions = {
  uniform: {
    completed: '16px',
    default: '8px'
  },
  prominent: {
    completed: '16px',
    default: '8px'
  },
  simple: {
    completed: '5px',
    default: '5px'
  }
};
export var StepConnectorRoot = styled.div.withConfig({
  displayName: "StepConnector__StepConnectorRoot",
  componentId: "sc-1yk6517-0"
})(function (_ref2) {
  var theme = _ref2.theme,
      _ref2$elementPosition = _ref2.elementPosition,
      elementPosition = _ref2$elementPosition === void 0 ? 'default' : _ref2$elementPosition,
      active = _ref2.active,
      completed = _ref2.completed,
      prevActive = _ref2.prevActive,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'prominent' : _ref2$variant;
  var leftMargin = active ? 4 : 0;
  var rightMargin = prevActive ? 4 : 0;
  var currentPosition = getStepConnectorPositions({
    theme: theme,
    variant: variant,
    elementPosition: elementPosition,
    leftMargin: leftMargin,
    rightMargin: rightMargin
  });
  var bottomPosition = completed ? BottomPositions[variant]['completed'] : BottomPositions[variant]['default'];
  return css(["position:absolute;bottom:", ";", ";"], bottomPosition, currentPosition);
});
export var StepConnectorLine = styled.span.withConfig({
  displayName: "StepConnector__StepConnectorLine",
  componentId: "sc-1yk6517-1"
})(["border-color:", ";border-style:solid;border-top-width:", ";border-bottom-width:", ";border-radius:", ";display:block;"], function (_ref3) {
  var theme = _ref3.theme,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'primary' : _ref3$color,
      active = _ref3.active,
      completed = _ref3.completed,
      _ref3$elementPosition = _ref3.elementPosition,
      elementPosition = _ref3$elementPosition === void 0 ? 'default' : _ref3$elementPosition;
  return completed || active || elementPosition === 'first' ? theme.color[color] : theme.color.grey2;
}, function (_ref4) {
  var borderWidth = _ref4.borderWidth;
  return borderWidth;
}, function (_ref5) {
  var borderWidth = _ref5.borderWidth;
  return borderWidth;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.dimension.borderRadius1;
});
export var StepConnector = function StepConnector(props) {
  return React.createElement(StepConnectorRoot, props, React.createElement(StepConnectorLine, _extends({}, props, {
    borderWidth: props.variant === 'simple' ? '2px' : '4px'
  })));
};
StepConnector.displayName = 'StepConnector';
//# sourceMappingURL=StepConnector.js.map