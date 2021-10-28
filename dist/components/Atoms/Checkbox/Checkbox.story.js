function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from "./Checkbox";
var selectableStates = {
  idle: 'idle',
  error: 'error',
  disabled: 'disabled'
};
storiesOf('Design System/Atoms/Checkbox', module).add('Checkbox', function () {
  var knobs = function knobs() {
    return {
      isChecked: boolean('Checked', false),
      state: select('State', selectableStates, 'idle'),
      errorMessage: text('Errormessage', 'Ops something went wrong!'),
      selectableSize: select('Selectable size', {
        Large: 'large',
        Small: 'small'
      }, 'large'),
      label: text('Label', 'Label name'),
      value: text('Value', 'Some value')
    };
  };

  return React.createElement(Checkbox, _extends({
    name: "checkbox",
    selectableId: "selectableId"
  }, knobs(), {
    onChangeValue: action('onchangevalue')
  }));
});
//# sourceMappingURL=Checkbox.story.js.map