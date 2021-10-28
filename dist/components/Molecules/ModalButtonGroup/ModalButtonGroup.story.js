function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ModalButtonGroup } from "./ModalButtonGroup";
import Readme from "./ModalButtonGroup.readme.md";
export var types = ['space-between', 'right', 'center'];

var knobs = function knobs() {
  return {
    buttonAlignment: select('Button type', types, types[0]),
    showButtonSeparator: boolean('With Button Seperator', true)
  };
};

storiesOf('Design System/Molecules/Modals/ModalButtonGroup', module).add('Default', function () {
  return React.createElement(ModalButtonGroup, _extends({}, knobs(), {
    primaryButtonProps: {
      buttonLabel: 'Call to action',
      actionType: 'primary',
      onClick: action('onClick call to action')
    },
    secondaryButtonProps: {
      buttonLabel: 'Close',
      actionType: 'outlined',
      onClick: action('onClick close')
    }
  }));
}, {
  info: Readme
}).add('Primary Button control', function () {
  return React.createElement(ModalButtonGroup, _extends({}, knobs(), {
    buttonAlignment: "center",
    primaryButtonProps: {
      buttonLabel: 'Call to action',
      actionType: 'primary',
      onClick: action('onClick call to action')
    }
  }));
}, {
  info: Readme
});
//# sourceMappingURL=ModalButtonGroup.story.js.map