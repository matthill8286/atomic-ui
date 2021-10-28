function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { saiyanTheme } from "../../../styles/sc-vars-saiyan";
import { Section } from "./Section";
var options = Object.keys(saiyanTheme.color);

var knobs = function knobs() {
  return {
    color: select('Colors', options, 'primary')
  };
};

var top = {
  tablet: 'xs',
  desktop: 'md'
};
var bottom = {
  mobile: 'lg',
  tablet: 'xl'
};
var height = {
  mobile: 350,
  tablet: 100,
  desktop: 400
};
var bgImage = {
  mobile: '/public/images/featured_backgrounds/03.jpg',
  tablet: '/public/images/featured_backgrounds/01.jpg'
};
storiesOf('Design System/Atoms/Section', module).add('Default', function () {
  return React.createElement(Section, _extends({
    paddingTop: top,
    paddingBottom: bottom
  }, knobs()), "Test");
}).add('Fixed Height', function () {
  return React.createElement(Section, _extends({
    paddingTop: top,
    paddingBottom: bottom,
    height: height
  }, knobs()), "Test");
}).add('with Image', function () {
  return React.createElement(Section, _extends({
    paddingTop: top,
    image: bgImage,
    paddingBottom: bottom,
    height: height
  }, knobs()), "Test");
});
//# sourceMappingURL=Section.story.js.map