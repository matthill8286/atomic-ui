function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Status } from "./Status";
import { Icon } from "../Icon";
import { StyleguideBookmarkOutlined } from "../../../svgs";
var statusTypes = {
  0: 'white',
  1: 'black',
  2: 'primary'
};

var knobs = function knobs() {
  return {
    type: radios('Type', statusTypes, statusTypes[2])
  };
};

storiesOf('Design System/Atoms/Status', module).add('Default', function () {
  return React.createElement(Status, knobs(), "1");
}).add('With Icon', function () {
  return React.createElement(Icon, {
    color: "grey4",
    height: "md"
  }, React.createElement(StyleguideBookmarkOutlined, null), React.createElement(Status, _extends({}, knobs(), {
    withinIcon: true
  }), "1"));
});
//# sourceMappingURL=Status.story.js.map