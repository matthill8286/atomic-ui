function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { withState } from '@dump247/storybook-state';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputRange } from "./InputRange";
var stories = storiesOf('Design System/Molecules/InputRange/Basic', module);
stories.add('default', withState({
  value: '0.5'
}, function (store) {
  var onChange = function onChange(event) {
    var value = event.target.value;
    store.set({
      value: value
    });
  };

  var knobs = function knobs() {
    return {
      min: text('min', '0'),
      max: text('max', '1'),
      step: text('step', '0.1'),
      markAmount: number('markAmount', 1),
      showMarks: boolean('Show Marks', true),
      withBubble: boolean('With Bubble', true),
      allowMoreThanMax: boolean('allowMoreThanMax', false)
    };
  };

  return React.createElement(InputRange, _extends({
    value: store.state.value,
    onChange: onChange
  }, knobs()));
}));
//# sourceMappingURL=InputRange.story.js.map