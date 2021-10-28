function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { withState } from '@dump247/storybook-state';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { GoalInput } from "./GoalInput";
import { goalInputMocks } from "./__mocks__/goalInputs";
var stories = storiesOf('Design System/Organisms/GoalInput', module);
var initialState = goalInputMocks[0];
stories.add('Default', withState({
  proficiency: 0.2,
  importance: 0.4
}, function (store) {
  var onProficiencyChange = function onProficiencyChange(event) {
    var value = event.target.value;
    store.set({
      proficiency: value
    });
  };

  var onImportanceChange = function onImportanceChange(event) {
    var value = event.target.value;
    store.set({
      importance: value
    });
  };

  var knobs = function knobs() {
    return {
      headline: text('Headline', 'Making the most of Microsoft Teams'),
      whereInputLabel: text('Where Label', 'Where you are now:'),
      needInputLabel: text('Need Label', 'Where you need to be:'),
      whereInputName: text('Name for Where', 'where'),
      needInputName: text('name for Need', 'need'),
      withBubble: boolean('With Bubble', false),
      showMarks: boolean('Show Marks', false)
    };
  };

  return React.createElement(GoalInput, _extends({
    input: {
      proficiency: store.state.proficiency,
      id: 4,
      importance: store.state.importance,
      competencyName: 'Making the most of Microsoft Teams'
    },
    leftInputLabel: 'Beginner',
    rightInputLabel: 'Master',
    onProficiencyChange: onProficiencyChange,
    onImportanceChange: onImportanceChange
  }, knobs(), {
    whereInputName: 'where-input',
    needInputName: 'need-input'
  }));
}));
//# sourceMappingURL=GoalInput.story.js.map