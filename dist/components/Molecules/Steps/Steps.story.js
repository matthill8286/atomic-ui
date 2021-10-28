function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { withState } from '@dump247/storybook-state';
import { button, radios, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { styled } from "../../../styles/styled";
import { IconCheckmarkCircleOutlined } from '@excelwithbusiness/webmobile-svg-library';
import { Step } from "./Step";
import { StepConnectorRoot } from "./StepConnector";
import { Steps } from "./Steps";
import readme from "./Steps.readme.md";
import withVariableArrayReadme from "./StepsVariableArray.readme.md";
import withConnectorReadme from "./StepsWithConnector.readme.md";
import withIconReadme from "./StepsWithIcon.readme.md";
var stories = storiesOf('Design System/Molecules/Steps', module);
var variants = {
  prominent: 'prominent',
  uniform: 'uniform',
  simple: 'simple'
};
var colors = ['primary', 'secondary', 'black'];
stories.add('Default', function () {
  var steps = [{
    title: 'One'
  }, {
    title: 'Two'
  }, {
    title: 'Three'
  }, {
    title: 'Four'
  }];
  var stepsIndex = steps.map(function (el, index) {
    return index;
  });
  var knobs = {
    color: select('color', colors, 'primary'),
    activeStep: select('activeStep', stepsIndex, 2),
    completedStep: select('completedStep', [-1].concat(_toConsumableArray(stepsIndex)), 1),
    variant: radios('variant', variants, 'uniform')
  };
  var description = text('description', 'This is a description');
  return React.createElement(Steps, knobs, steps.map(function (_ref, index) {
    var title = _ref.title;
    return React.createElement(Step, {
      key: index,
      title: title,
      description: description
    });
  }));
}, {
  info: readme
});
stories.add('onChange activeStep', withState({
  activeStep: 2,
  completedStep: 1
}, function (store) {
  var stepsProps = {
    color: 'primary',
    activeStep: store.state.activeStep,
    completedStep: store.state.completedStep
  };

  var handleChange = function handleChange(step) {
    store.set({
      activeStep: step,
      completedStep: step - 1
    });
  };

  return React.createElement(Steps, _extends({}, stepsProps, {
    onChange: handleChange
  }), React.createElement(Step, {
    title: "Sign In",
    description: "This is a description"
  }), React.createElement(Step, {
    title: "Address",
    description: "This is a description"
  }), React.createElement(Step, {
    title: "Payment",
    description: "This is a description"
  }), React.createElement(Step, {
    title: "Summary",
    description: "This is a description"
  }));
}), {
  info: readme
});
stories.add('with icon', function () {
  var steps = [{
    title: 'Sig In'
  }, {
    title: 'Address'
  }, {
    title: 'Payment'
  }, {
    title: 'Summary'
  }];
  var stepsIndex = steps.map(function (el, index) {
    return index;
  });
  var knobs = {
    color: select('color', colors, 'primary'),
    activeStep: select('activeStep', stepsIndex, 2),
    completedStep: select('completedStep', [-1].concat(_toConsumableArray(stepsIndex)), 1)
  };
  var description = text('description', 'This is a description');

  var CustomIcon = function CustomIcon(_ref2) {
    var _ref2$active = _ref2.active,
        active = _ref2$active === void 0 ? false : _ref2$active,
        _ref2$completed = _ref2.completed,
        completed = _ref2$completed === void 0 ? false : _ref2$completed,
        _ref2$color = _ref2.color,
        color = _ref2$color === void 0 ? 'primary' : _ref2$color,
        props = _objectWithoutProperties(_ref2, ["active", "completed", "color"]);

    return React.createElement(Icon, _extends({
      color: active ? 'white' : completed ? color : 'grey2'
    }, props), React.createElement(IconCheckmarkCircleOutlined, null));
  };

  return React.createElement(Steps, knobs, steps.map(function (_ref3, index) {
    var title = _ref3.title;
    return React.createElement(Step, {
      key: index,
      title: title,
      description: description,
      icon: React.createElement(CustomIcon, null)
    });
  }));
}, {
  info: withIconReadme
});
stories.add('with connector', function () {
  var steps = [{
    title: 'Sig In'
  }, {
    title: 'Address'
  }, {
    title: 'Payment'
  }, {
    title: 'Summary'
  }];
  var stepsIndex = steps.map(function (el, index) {
    return index;
  });
  var knobs = {
    color: select('color', colors, 'primary'),
    activeStep: select('activeStep', stepsIndex, 2),
    completedStep: select('completedStep', [-1].concat(_toConsumableArray(stepsIndex)), 1)
  };
  var description = text('description', 'This is a description');
  var CustomConnectorLine = styled.span.withConfig({
    displayName: "Stepsstory__CustomConnectorLine",
    componentId: "sc-11xp4ei-0"
  })(["border-color:", ";border-style:solid;border-top-width:", ";border-bottom-width:", ";border-radius:", ";display:block;"], function (_ref4) {
    var theme = _ref4.theme,
        _ref4$color = _ref4.color,
        color = _ref4$color === void 0 ? 'primary' : _ref4$color,
        active = _ref4.active,
        completed = _ref4.completed,
        _ref4$elementPosition = _ref4.elementPosition,
        elementPosition = _ref4$elementPosition === void 0 ? 'default' : _ref4$elementPosition;
    return completed || active || elementPosition === 'first' ? theme.color[color] : theme.color.grey2;
  }, function (_ref5) {
    var borderWidth = _ref5.borderWidth;
    return borderWidth;
  }, function (_ref6) {
    var borderWidth = _ref6.borderWidth;
    return borderWidth;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.dimension.borderRadius1;
  });

  var CustomConnector = function CustomConnector(props) {
    return React.createElement(StepConnectorRoot, props, React.createElement(CustomConnectorLine, _extends({}, props, {
      borderWidth: props.variant === 'simple' ? '2px' : '4px'
    })));
  };

  return React.createElement(Steps, _extends({}, knobs, {
    connector: React.createElement(CustomConnector, {
      color: "black"
    })
  }), steps.map(function (_ref8, index) {
    var title = _ref8.title;
    return React.createElement(Step, {
      key: index,
      title: title,
      description: description
    });
  }));
}, {
  info: withConnectorReadme
});
stories.add('Uniform', function () {
  var steps = [{
    title: 'One'
  }, {
    title: 'Two'
  }, {
    title: 'Three'
  }, {
    title: 'Four'
  }];
  var stepsIndex = steps.map(function (el, index) {
    return index;
  });
  var knobs = {
    color: select('color', colors, 'primary'),
    activeStep: select('activeStep', stepsIndex, 2),
    completedStep: select('completedStep', [-1].concat(_toConsumableArray(stepsIndex)), 1),
    variant: radios('variant', variants, 'uniform')
  };
  var description = text('description', 'This is a description');
  return React.createElement(Steps, knobs, steps.map(function (_ref9, index) {
    var title = _ref9.title;
    return React.createElement(Step, {
      key: index,
      title: title,
      description: description
    });
  }));
}, {
  info: readme
});
stories.add('variable arrays', withState({
  steps: [{
    title: 'Sign In'
  }, {
    title: 'Address'
  }, {
    title: 'Payment'
  }, {
    title: 'Summary'
  }],
  activeStep: 2,
  completedStep: 1
}, function (store) {
  var _store$state = store.state,
      steps = _store$state.steps,
      activeStep = _store$state.activeStep,
      completedStep = _store$state.completedStep;
  var knobs = {
    activeStep: activeStep,
    completedStep: completedStep,
    color: select('color', colors, 'primary'),
    variant: radios('variant', variants, 'prominent')
  };
  var increment = button('Add an element', function () {
    store.set({
      steps: [].concat(_toConsumableArray(steps), [{
        title: 'Added'
      }])
    });
  });
  var decrement = button('Remove an element', function () {
    if (steps.length > 3) {
      store.set({
        steps: steps.slice(0, -1)
      });
    } else {
      store.set({
        steps: steps
      });
    }
  });
  var reset = button('Reset to initial state', function () {
    store.reset();
  });

  var handleChange = function handleChange(step) {
    store.set({
      activeStep: step,
      completedStep: step - 1
    });
  };

  return React.createElement(Steps, _extends({}, knobs, {
    onChange: handleChange
  }), steps.map(function (_ref10, index) {
    var title = _ref10.title;
    return React.createElement(Step, {
      key: index
    });
  }));
}), {
  info: withVariableArrayReadme
});
//# sourceMappingURL=Steps.story.js.map