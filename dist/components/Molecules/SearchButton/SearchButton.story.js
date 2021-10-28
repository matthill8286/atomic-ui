function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { withState } from '@dump247/storybook-state';
import { radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { styled } from "../../../styles";
import { IconClose, IconSearch } from '@excelwithbusiness/webmobile-svg-library';
import { SearchButton } from "./SearchButton";
import Readme from "./SearchButton.readme.md";
var inputStates = {
  idle: 'idle',
  valid: 'valid',
  error: 'error'
};
var searchTypes = {
  search: 'search',
  text: 'text'
};

var searchKnobs = function searchKnobs() {
  return {
    margin: text('margin', ''),
    padding: text('padding', ''),
    placeholder: text('placeHolder', 'Search'),
    state: radios('state', inputStates, 'idle'),
    searchType: radios('searchType', searchTypes, 'search')
  };
};

var stories = storiesOf('Design System/Molecules/Search/SearchButton', module);
var options = {
  info: Readme
};
var StyledSearchWrapper = styled.div.withConfig({
  displayName: "SearchButtonstory__StyledSearchWrapper",
  componentId: "e633gu-0"
})(["width:90%;"]);

var SearchWrapper = function SearchWrapper(_ref) {
  var children = _ref.children;
  return React.createElement(StyledSearchWrapper, null, children);
};

stories.add('Default', withState({
  value: undefined
}, function (store) {
  var onChange = function onChange(_ref2) {
    var value = _ref2.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(SearchWrapper, null, React.createElement(SearchButton, _extends({
    searchIcon: React.createElement(IconSearch, null),
    onChange: onChange,
    value: store.state.value
  }, searchKnobs())));
}), options);
stories.add('with default value', withState({
  value: 'Search this!!'
}, function (store) {
  return React.createElement(SearchWrapper, null, React.createElement(SearchButton, _extends({
    value: store.state.value
  }, searchKnobs(), {
    searchIcon: React.createElement(IconSearch, null)
  })));
}), options);
stories.add('with autofocus', withState({
  value: ''
}, function (store) {
  var onChange = function onChange(_ref3) {
    var value = _ref3.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(SearchWrapper, null, React.createElement(SearchButton, {
    placeholder: "Placeholder",
    searchIcon: React.createElement(IconSearch, null),
    onChange: onChange,
    autofocus: true,
    value: store.state.value
  }));
}), options);
stories.add('with custom icon', withState({
  value: ''
}, function (store) {
  return React.createElement(SearchButton, {
    searchIcon: React.createElement(IconClose, null),
    value: store.state.value
  });
}), options);
stories.add('Accessibility', withState({
  value: undefined
}, function (store) {
  var onChange = function onChange(_ref4) {
    var value = _ref4.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(SearchButton, _extends({}, searchKnobs(), {
    iconLabel: "Enable self-destruct!",
    searchIcon: React.createElement(IconClose, null),
    searchProps: {
      id: 'test-field',
      required: true
    },
    searchType: "text",
    onChange: onChange,
    onClickIcon: function onClickIcon() {
      return alert('Boom!');
    },
    placeholder: "Try tabbing to use icon...",
    value: store.state.value
  }));
}), options);
stories.add('Accessibility: Error', withState({
  value: undefined
}, function (store) {
  var onChange = function onChange(_ref5) {
    var value = _ref5.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(SearchButton, _extends({}, searchKnobs(), {
    errorMessage: "You enetered the wrong information",
    inputProps: {
      id: 'test-field',
      required: true
    },
    searchType: "text",
    onChange: onChange,
    placeholder: "Enter some text...",
    state: "error",
    value: store.state.value
  }));
}), options);
//# sourceMappingURL=SearchButton.story.js.map