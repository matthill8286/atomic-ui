function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Dropdown } from "./Dropdown";
import readme from "./Dropdown.readme.md";
var options = [{
  id: '0',
  label: 'BMW'
}, {
  id: '1',
  label: 'Audi'
}, {
  id: '2',
  label: 'Mercedes'
}, {
  id: '3',
  label: 'Porsche'
}, {
  id: '4',
  label: 'Very long text item that is long rly rly long long long'
}];
var commonKnobs = {
  onChange: action('on-change'),
  options: options
};
var story = storiesOf('Design System/Molecules/Dropdown/Dropdown', module);
story.add('Initial', function () {
  var knobs = _objectSpread(_objectSpread({}, commonKnobs), {}, {
    label: text('label', 'type a label'),
    withBackground: boolean('With Background Color', true)
  });

  return React.createElement(Dropdown, _extends({}, knobs, {
    placeholder: 'Placeholder'
  }));
}, {
  info: readme
});
story.add('Selected', function () {
  var knobs = _objectSpread(_objectSpread({}, commonKnobs), {}, {
    label: text('Label', 'type a label'),
    initialIndex: number('initialIndex', 0)
  });

  return React.createElement(Dropdown, knobs);
}, {
  info: readme
});
story.add('Native list', function () {
  var knobs = _objectSpread(_objectSpread({}, commonKnobs), {}, {
    label: text('Label', 'type a label'),
    initialIndex: number('initialIndex', 0),
    listType: 'native',
    noBorder: boolean('No Border', false)
  });

  return React.createElement(Dropdown, knobs);
}, {
  info: readme
});
//# sourceMappingURL=Dropdown.story.js.map