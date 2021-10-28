import { withState } from '@dump247/storybook-state';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SearchDropdown } from "./SearchDropdown";
import readme from "./SearchDropdown.readme.md";
import { SearchDropdownOption } from "./SearchDropdownOption";
var options = [{
  id: '1',
  label: 'Robotics: Kinematics and Mathematical Foundations',
  type: 'Online Course',
  provider: 'EDX',
  competency: 'Aritifical Intelligence'
}, {
  id: '2',
  label: 'The Field Guide to Human-Centered Design',
  type: 'Learning guide',
  provider: 'Ideo.org',
  competency: 'Being Agile'
}, {
  id: '3',
  label: 'A Virtual Crash Course in Design Thinking',
  type: 'Online Course',
  provider: 'Stanford d.School',
  competency: 'Aritifical Intelligence'
}, {
  id: '4',
  label: 'The Era of Blind Faith in Big Data Must End',
  type: 'Video',
  provider: 'TED',
  competency: 'Using Data to Make Decisions'
}, {
  id: '5',
  label: 'Robotics: Kinematics and Mathematical Foundations',
  type: 'Online Course',
  provider: 'EDX',
  competency: 'Aritifical Intelligence'
}, {
  id: '6',
  label: 'The Field Guide to Human-Centered Design',
  type: 'Learning guide',
  provider: 'Ideo.org',
  competency: 'Being Agile'
}, {
  id: '7',
  label: 'A Virtual Crash Course in Design Thinking',
  type: 'Online Course',
  provider: 'Stanford d.School',
  competency: 'Aritifical Intelligence'
}, {
  id: '8',
  label: 'The Era of Blind Faith in Big Data Must End',
  type: 'Video',
  provider: 'TED',
  competency: 'Using Data to Make Decisions'
}];
var story = storiesOf('Design System/Molecules/Search/SearchDropdown', module);
story.add('Initial', withState({
  index: -1,
  inputValue: ''
}, function (store) {
  var onSelectChange = function onSelectChange(item, index) {
    store.set({
      index: index,
      inputValue: item.label
    });
  };

  var onInputChange = function onInputChange(event) {
    store.set({
      inputValue: event.target.value
    });
  };

  return React.createElement(SearchDropdown, {
    index: store.state.index,
    inputValue: store.state.inputValue,
    options: options,
    onSelectChange: onSelectChange,
    onInputChange: onInputChange
  });
}), {
  info: readme
});
story.add('Active state', withState({
  index: -1,
  inputValue: ''
}, function (store) {
  var onSelectChange = function onSelectChange(item, index) {
    store.set({
      index: index,
      inputValue: item.label
    });
  };

  var onInputChange = function onInputChange(event) {
    store.set({
      inputValue: event.target.value
    });
  };

  return React.createElement(SearchDropdown, {
    index: store.state.index,
    inputValue: store.state.inputValue,
    options: options,
    initializeOpen: true,
    onSelectChange: onSelectChange,
    onInputChange: onInputChange
  });
}), {
  info: readme
});
story.add('custom dropdown option', withState({
  index: -1,
  inputValue: ''
}, function (store) {
  return React.createElement(SearchDropdownOption, {
    active: false,
    label: options[0].label,
    provider: options[0].provider,
    competency: options[0].competency,
    type: options[0].type,
    onClick: function onClick() {
      return null;
    }
  });
}), {
  info: readme
});
story.add('custom active dropdown option', withState({
  index: -1,
  inputValue: ''
}, function (store) {
  return React.createElement(SearchDropdownOption, {
    active: true,
    label: options[0].label,
    provider: options[0].provider,
    competency: options[0].competency,
    type: options[0].type,
    onClick: function onClick() {
      return null;
    }
  });
}), {
  info: readme
});
//# sourceMappingURL=SearchDropdown.story.js.map