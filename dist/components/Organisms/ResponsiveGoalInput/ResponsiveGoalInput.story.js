function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { withState } from '@dump247/storybook-state';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ResponsiveGoalInput } from "./index";
var stories = storiesOf('Design System/Organisms/ResponsiveGoalInput', module);
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
      leftInputLabel: text('Left input label', 'Beginner'),
      rightInputLabel: text('Right input label', 'Master')
    };
  };

  return React.createElement(ResponsiveGoalInput, _extends({}, knobs(), {
    input: {
      proficiency: store.state.proficiency,
      id: 4,
      importance: store.state.importance,
      competencyName: 'Making the most of Microsoft Teams'
    },
    onProficiencyChange: onProficiencyChange,
    onImportanceChange: onImportanceChange,
    isOpenInitially: false
  }));
}));
//# sourceMappingURL=ResponsiveGoalInput.story.js.map