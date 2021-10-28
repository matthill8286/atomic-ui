function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withState } from '@dump247/storybook-state';
import { boolean, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { styled } from "../../../styles";
import { StyleguideArticle, StyleguideBookmarkActive, StyleguideBookmarkOutlined } from '@excelwithbusiness/webmobile-svg-library';
import { Icon } from "../Icon";
import { Status } from "../Status";
import { Typo } from "../Typography";
import { Button } from "./Button";
import Readme from "./Button.readme.md";
var StyledButtonGroupContainer = styled('div').withConfig({
  displayName: "Buttonstory__StyledButtonGroupContainer",
  componentId: "mdnmbq-0"
})(["flex:1;display:flex;flex-direction:row;"]);
var StyledButtonGroup = styled('div').withConfig({
  displayName: "Buttonstory__StyledButtonGroup",
  componentId: "mdnmbq-1"
})(["flex:1;"]);
var actionTypes = {
  ghost: 'ghost',
  primary: 'primary',
  prominent: 'prominent',
  secondary: 'secondary',
  inverted: 'inverted',
  outlined: 'outlined',
  lightBorder: 'lightBorder',
  darkBorder: 'darkBorder'
};
var sizes = {
  lg: 'lg',
  md: 'md',
  sm: 'sm'
};

var knobs = function knobs() {
  return {
    actionType: radios('Type', actionTypes, actionTypes.prominent),
    children: text('Content', 'Button'),
    size: radios('Size', sizes, sizes.md),
    isLoading: boolean('Loading', false),
    isFlat: boolean('Flattened', false),
    elevated: boolean('Elevated', false),
    weight: text('Font weight', 'bold')
  };
};

var knobsWithCheckmark = function knobsWithCheckmark() {
  return _objectSpread(_objectSpread({}, knobs()), {}, {
    showCheckmark: boolean('Loading Complete', false)
  });
};

storiesOf('Design System/Atoms/Button', module).add('Default', function () {
  return React.createElement(Button, knobsWithCheckmark());
}, {
  info: Readme
}).add('Disabled', function () {
  return React.createElement(Button, _extends({}, knobs(), {
    disabled: true
  }));
}, {
  info: Readme
}).add('Full width', function () {
  return React.createElement(Button, _extends({}, knobsWithCheckmark(), {
    fullWidth: true
  }));
}, {
  info: Readme
}).add('Anchor', function () {
  return React.createElement(Button, _extends({
    href: "#"
  }, knobs()));
}, {
  info: Readme
}).add('Router link', function () {
  return React.createElement(Button, _extends({
    to: "#"
  }, knobs()));
}, {
  info: Readme
}).add('Round', function () {
  return React.createElement(Button, _extends({
    round: true,
    size: 'lg'
  }, knobs()), "NO");
}, {
  info: Readme
}).add('Curved', function () {
  return React.createElement(Button, _extends({
    curved: true,
    size: 'lg'
  }, knobsWithCheckmark()), "Button text");
}, {
  info: Readme
}).add('Squared', function () {
  return React.createElement(Button, _extends({
    squared: true,
    size: 'lg'
  }, knobs()), "YES");
}, {
  info: Readme
}).add('with Icon', function () {
  return React.createElement(React.Fragment, null, React.createElement(Button, knobs(), React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideBookmarkActive, null)), "Icon on left side"), "\xA0", React.createElement(Button, knobs(), "Icon on right side", React.createElement(Icon, {
    color: "white",
    width: 24,
    height: 24
  }, React.createElement(StyleguideArticle, {
    fill: "white"
  }))), "\xA0", React.createElement(Button, _extends({}, knobs(), {
    squared: true
  }), React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideBookmarkActive, null))), "\xA0", React.createElement(Button, _extends({}, knobs(), {
    round: true
  }), React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideBookmarkOutlined, null))));
}).add('Bookmark ', withState({
  isAddedToBookmark: false
}, function (store) {
  return store.state.isAddedToBookmark ? React.createElement(Button, {
    to: "#",
    actionType: 'primary'
  }, React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideBookmarkActive, null)), "Added to Bookmark") : React.createElement(Button, {
    actionType: 'secondary',
    onClick: function onClick() {
      return store.set({
        isAddedToBookmark: !store.state.isAddedToBookmark
      });
    }
  }, React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideBookmarkActive, null)), "Add to Bookmark");
})).add('Bookmark Full Width', function () {
  return React.createElement(Button, {
    actionType: 'primary',
    size: "lg",
    fullWidth: true
  }, React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideBookmarkActive, null)), "Bookmark");
}).add('with Status', function () {
  return React.createElement(React.Fragment, null, React.createElement(Button, {
    round: true
  }, React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideBookmarkOutlined, null)), React.createElement(Status, {
    type: "black"
  }, "1")), "\xA0", React.createElement(Button, null, "Checkmark Status", React.createElement(Icon, {
    width: 16,
    height: 16
  }, React.createElement(StyleguideArticle, null)), React.createElement(Status, {
    type: "white"
  }, "1")));
}).add('with 3 Button Group', function () {
  return React.createElement(StyledButtonGroupContainer, null, React.createElement(StyledButtonGroup, null, React.createElement(Button, {
    fullWidth: true,
    actionType: "ghost"
  }, React.createElement(Typo, {
    fontSize: "sm",
    tag: "span",
    color: "grey5"
  }, "Test"))), React.createElement(StyledButtonGroup, null, React.createElement(Button, {
    fullWidth: true,
    actionType: "ghost"
  }, "Test")), React.createElement(StyledButtonGroup, null, React.createElement(Button, {
    fullWidth: true,
    actionType: "ghost"
  }, "Test")));
});
//# sourceMappingURL=Button.story.js.map