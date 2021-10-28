function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from "../Button";
import { Cell, Grid, Row } from "../../Helper/Grid";
import { IconSaveToPlaylist } from '@excelwithbusiness/webmobile-svg-library';
import { RadioButton } from "./RadioButton";
import { RadioGroup } from "./RadioGroup";
var selectableStates = {
  idle: 'idle',
  error: 'error',
  disabled: 'disabled'
};
storiesOf('Design System/Atoms/RadioButton', module).add('Radio button', function () {
  var knobs = function knobs() {
    return {
      displayType: select('Display type', {
        Radio: 'radio',
        Button: 'button'
      }, 'radio'),
      withIcon: boolean('With icon', false),
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

  var withIcon = knobs().withIcon ? {
    icon: React.createElement(IconSaveToPlaylist, null)
  } : undefined;
  return React.createElement(RadioButton, _extends({
    name: "radio",
    selectableId: "radioId"
  }, knobs(), withIcon, {
    onChangeValue: function onChangeValue(value) {
      return action("".concat(value, " changed"));
    }
  }));
}).add('More than one button with the same name (group)', function () {
  var knobs = function knobs() {
    return {
      displayType: select('Display type', {
        Radio: 'radio',
        Button: 'button'
      }, 'radio'),
      withIcon: boolean('With icon', false),
      isInactive: boolean('Inactive', false),
      selectableSize: select('Selectable size', {
        Large: 'large',
        Small: 'small'
      }, 'large'),
      label: text('Label', 'Label name')
    };
  };

  var withIcon = knobs().withIcon ? {
    icon: React.createElement(IconSaveToPlaylist, null)
  } : undefined;
  return React.createElement(React.Fragment, null, React.createElement(RadioButton, _extends({
    selectableId: "radioId1"
  }, knobs(), withIcon, {
    onChangeValue: function onChangeValue(value) {
      return action("".concat(value, " changed"));
    },
    name: "radios",
    value: "btn1"
  })), React.createElement(RadioButton, _extends({
    selectableId: "radioId2"
  }, knobs(), withIcon, {
    onChangeValue: function onChangeValue(value) {
      return action("".concat(value, " changed"));
    },
    name: "radios",
    value: "btn2"
  })));
}).add('RadioGroup', function () {
  return React.createElement(RadioGroup, {
    state: select('State', selectableStates, 'idle'),
    name: "my-group",
    onChange: action('New value')
  }, function (_ref) {
    var name = _ref.name,
        onChange = _ref.onChange,
        selected = _ref.selected,
        state = _ref.state;
    var value1 = 'btn1';
    var value2 = 'btn2';
    return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, null, React.createElement(RadioButton, {
      selectableId: "radioId1",
      name: name,
      onChangeValue: onChange,
      isChecked: selected === value1,
      value: value1,
      label: "Label name one",
      state: state
    })), React.createElement(Cell, null, React.createElement(RadioButton, {
      selectableId: "radioId2",
      name: name,
      onChangeValue: onChange,
      isChecked: selected === value2,
      value: value2,
      label: "Label name two",
      state: state
    }))), React.createElement(Row, null, React.createElement(Cell, null, "Selected Option is now: ", React.createElement("strong", null, selected || 'nothing'))), React.createElement(Row, null, React.createElement(Cell, null, React.createElement(Button, {
      disabled: state === 'disabled' ? true : false,
      onClick: function onClick() {
        return onChange();
      }
    }, "Unselect"))));
  });
});
//# sourceMappingURL=RadioButton.story.js.map