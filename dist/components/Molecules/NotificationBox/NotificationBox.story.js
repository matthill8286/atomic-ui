function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NotificationBox } from "./NotificationBox";
import { NotificationContentSort } from "./NotificationBox.interface";
var animation = ['fadeIn', 'fadeOut', 'shake'];
var arrowPosition = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
var types = ['alert', 'error', 'info', 'success'];
var buttonLayout = ['column', 'row'];
var actionButtonTypes = ['ghost', 'primary', 'prominent', 'secondary', 'inverted', 'outlined'];

var knobs = function knobs() {
  return {
    body: text('Body', 'Please complete the assets in the collection before this one to unlock this asset'),
    hasTitleIcon: boolean('Icon', true),
    isClosable: boolean('Closable', true),
    title: text('Title', 'Asset not available yet!'),
    type: select('Type', types, types[1]),
    animation: select('Animation', animation, undefined),
    buttonLayout: select('Button Layout', buttonLayout, buttonLayout[0])
  };
};

var buttonKnobs = function buttonKnobs() {
  return {
    actionBtnLabel: text('Button Label', 'OK'),
    onClick: action('click'),
    actionType: select('Button Type #1', actionButtonTypes, 'primary')
  };
};

var tooltipKnobs = function tooltipKnobs() {
  return {
    arrowleft: number('Arrow left', 0),
    arrowPosition: select('Arrow Position', arrowPosition, arrowPosition[0]),
    left: number('Left', 40),
    top: number('Top', 40)
  };
};

storiesOf('Design System/Molecules/Notification Box', module).add('Default', function () {
  return React.createElement(NotificationBox, _extends({}, knobs(), {
    buttons: [_objectSpread({}, buttonKnobs())]
  }));
}).add('Default, no button', function () {
  return React.createElement(NotificationBox, knobs());
}).add('Title only', function () {
  return React.createElement(NotificationBox, _extends({}, knobs(), {
    body: "",
    isClosable: false
  }));
}).add('Body only', function () {
  return React.createElement(NotificationBox, _extends({}, knobs(), {
    title: "",
    isClosable: false
  }));
}).add('Title and button', function () {
  return React.createElement(NotificationBox, _extends({}, knobs(), {
    buttons: [{
      actionBtnLabel: 'Self Destruct',
      onClick: action('onClick'),
      actionType: 'primary'
    }],
    body: ""
  }));
}).add('As ToolTip', function () {
  return React.createElement(NotificationBox, _extends({}, knobs(), {
    buttons: [{
      actionBtnLabel: 'Self Destruct',
      onClick: action('onClick'),
      actionType: 'primary'
    }],
    body: "",
    tooltip: _objectSpread({}, tooltipKnobs())
  }));
}).add('With two buttons', function () {
  return React.createElement(NotificationBox, _extends({}, knobs(), {
    buttons: [{
      actionBtnLabel: 'Button One',
      actionType: select('Button Type #1', actionButtonTypes, 'outlined'),
      onClick: action('onClickButon One')
    }, {
      actionBtnLabel: 'Button Two',
      actionType: select('Button Type #2', actionButtonTypes, 'primary'),
      href: 'https://www.google.co.uk?learning',
      target: '_blank'
    }],
    tooltip: _objectSpread({}, tooltipKnobs())
  }));
}).add('With links', function () {
  return React.createElement(BrowserRouter, null, React.createElement(NotificationBox, _extends({}, knobs(), {
    links: [{
      label: 'Link One',
      to: 'https://www.google.co.uk?learning'
    }, {
      label: 'Link Two',
      onClick: function onClick() {}
    }],
    tooltip: _objectSpread({}, tooltipKnobs())
  })));
}).add('With links and buttons', function () {
  return React.createElement(BrowserRouter, null, React.createElement(NotificationBox, _extends({}, knobs(), {
    buttons: [{
      actionBtnLabel: 'Button',
      actionType: select('Button Type #1', actionButtonTypes, 'primary'),
      onClick: action('onClick')
    }],
    links: [{
      label: 'Link',
      to: 'https://www.google.co.uk?learning',
      target: '_blank',
      decorationColor: 'prominent',
      bold: true,
      iconLeft: null,
      inline: false,
      fontSize: 'sm'
    }],
    sort: select('Sort', [NotificationContentSort.LinksButtons, NotificationContentSort.ButtonsLinks], NotificationContentSort.ButtonsLinks),
    alignLinks: "center",
    tooltip: _objectSpread({}, tooltipKnobs())
  })));
});
//# sourceMappingURL=NotificationBox.story.js.map