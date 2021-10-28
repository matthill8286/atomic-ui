function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { PlaylistStage } from "./PlaylistStage";
import { backlink, props, PlaylistMock } from "./PlaylistStage.mocks";

var knobs = function knobs() {
  return {
    playlist: _objectSpread(_objectSpread({}, PlaylistMock), {}, {
      name: text('Article Title', 'Our Playlist'),
      description: text('Subtext', 'This is a description')
    })
  };
};

storiesOf('Design System/Organisms/Playlist Stage', module).add('Default', function () {
  return React.createElement(PlaylistStage, _extends({}, props, knobs()));
}).add('Without Image', function () {
  return React.createElement(PlaylistStage, _extends({}, props, knobs(), {
    withImage: false
  }));
}).add('Without Breadcrumbs', function () {
  return React.createElement(PlaylistStage, _extends({}, props, knobs(), {
    breadcrumbPath: undefined
  }));
}).add('With Backlink', function () {
  return React.createElement(PlaylistStage, _extends({}, props, knobs(), {
    breadcrumbPath: undefined,
    backlink: backlink
  }));
}).add('Different Headline Colour', function () {
  return React.createElement(PlaylistStage, _extends({}, props, knobs(), {
    headingColor: "black"
  }));
});
//# sourceMappingURL=PlaylistStage.story.js.map