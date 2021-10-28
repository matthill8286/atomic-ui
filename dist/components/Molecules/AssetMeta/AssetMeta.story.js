function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { withState } from '@dump247/storybook-state';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AssetMeta } from "./AssetMeta";
var componentProps = {
  buttonTextLaunch: 'Launch',
  buttonTextComplete: 'Mark complete',
  list: [{
    label: 'Provider',
    value: 'Youtube'
  }, {
    label: 'Primary competency',
    value: 'Digital Marketing'
  }, {
    label: 'Type',
    value: 'Article'
  }, {
    label: 'Length',
    value: '16 minutes'
  }],
  competencyCopy: '5 competencies featured in this learning asset:',
  tags: [{
    text: 'CREATIVITY'
  }, {
    text: 'STORYTELLING'
  }, {
    text: 'DESIGN'
  }, {
    text: 'WRITING'
  }, {
    text: 'BRAINSTORMING'
  }]
};

var knobs = function knobs() {
  return {
    isShareInteraction: boolean('SharedInteractionIcon', true),
    isBookmarkInteraction: boolean('BookmarkInteractionIcon', true),
    isCreatePlaylistInteraction: boolean('CreatePlaylistInteractionIcon', true),
    isLandingPage: boolean('Landing page version', false)
  };
};

var setBookMark = function setBookMark(store, boo) {
  return store.set({
    bookmarked: boo
  });
};

var setCompleted = function setCompleted(store, boo) {
  return store.set({
    completed: boo
  });
};

storiesOf('Design System/Organisms/AssetMeta', module).add('Default', withState({
  bookmarked: false,
  completed: false
}, function (store) {
  var toggleBookmarked = function toggleBookmarked() {
    return setBookMark(store, !store.state.bookmarked);
  };

  var toggleCompleted = function toggleCompleted() {
    return setCompleted(store, !store.state.completed);
  };

  return React.createElement(AssetMeta, _extends({
    shareHandler: action('Share Clicked'),
    bookmarkHandler: function bookmarkHandler() {
      return toggleBookmarked();
    },
    completed: store.state.completed,
    bookmarked: store.state.bookmarked,
    completedHandler: function completedHandler() {
      return toggleCompleted();
    },
    savePlaylistHandler: action('Save Clicked')
  }, componentProps, knobs()));
})).add('Live chat', withState({
  bookmarked: false,
  completed: false
}, function (store) {
  var toggleBookmarked = function toggleBookmarked() {
    return setBookMark(store, !store.state.bookmarked);
  };

  var toggleCompleted = function toggleCompleted() {
    return setCompleted(store, !store.state.completed);
  };

  return React.createElement(AssetMeta, _extends({
    shareHandler: action('Share Clicked'),
    bookmarkHandler: function bookmarkHandler() {
      return toggleBookmarked();
    },
    completed: store.state.completed,
    bookmarked: store.state.bookmarked,
    completedHandler: function completedHandler() {
      return toggleCompleted();
    },
    savePlaylistHandler: action('Save Clicked'),
    chatSrc: "https://vimeo.com/event/1024953/chat/b887943750"
  }, componentProps, knobs()));
})).add('Landing Page Version', withState({
  bookmarked: false,
  completed: false
}, function (store) {
  var toggleBookmarked = function toggleBookmarked() {
    return setBookMark(store, !store.state.bookmarked);
  };

  var toggleCompleted = function toggleCompleted() {
    return setCompleted(store, !store.state.completed);
  };

  return React.createElement(AssetMeta, _extends({
    savePlaylistHandler: action('Save Clicked'),
    isCreatePlaylistInteraction: false,
    isBookmarkInteraction: false,
    isShareInteraction: false,
    isLandingPage: true
  }, componentProps));
}));
//# sourceMappingURL=AssetMeta.story.js.map