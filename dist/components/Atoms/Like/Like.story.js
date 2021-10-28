function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon } from "../Icon";
import { CopyText } from "../Typography";
import { saiyanTheme } from "../../../styles/sc-vars-saiyan";
import { IconUseful } from '@excelwithbusiness/webmobile-svg-library';
import { Like } from "./Like";
var scales = ['large', 'small'];
var sizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

var knobs = function knobs() {
  return {
    color: select('Color', Object.keys(saiyanTheme.color), 'grey4'),
    disabled: boolean('Set disabled', false),
    bold: boolean('Bold', true)
  };
};

storiesOf('Design System/Atoms/Like', module).add('Like', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleCopy = text('Example copy', "found this useful");
  var sampleLikes = text('Example likes', "38 ");
  var underline = boolean('Underline', true);
  return React.createElement(Like, _extends({}, knobs(), {
    scale: scale,
    likes: sampleLikes,
    underline: underline
  }), sampleCopy);
}).add('with Icon', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleCopy = text('Example copy', "found this useful");
  var sampleLikes = text('Example likes', "55");
  var iconPositions = ['left', 'right', 'both'];
  var iconPosition = select('Icon Position', iconPositions, 'left');
  var iconColor = select('Icon Color', Object.keys(saiyanTheme.color), 'grey4');
  var underline = boolean('Underline', true);
  return React.createElement(Like, _extends({}, knobs(), {
    scale: scale,
    underline: underline,
    likes: sampleLikes
  }, (iconPosition === 'left' || iconPosition === 'both') && {
    iconLeft: React.createElement(Icon, {
      color: iconColor
    }, React.createElement(IconUseful, null))
  }, (iconPosition === 'right' || iconPosition === 'both') && {
    iconRight: React.createElement(Icon, {
      color: iconColor
    }, React.createElement(IconUseful, null))
  }), sampleCopy);
}).add('inline Like no Icon', function () {
  var sampleCopy = text('Example copy', "Lorem ipsum Like");
  var fontSize = select('Size', sizes, sizes[3]);
  var underline = boolean('Underline', true);
  return React.createElement(CopyText, {
    fontSize: fontSize,
    tag: "div"
  }, React.createElement(Like, _extends({}, knobs(), {
    fontSize: fontSize,
    inline: true,
    underline: underline
  }), sampleCopy), ' extended copy');
});
//# sourceMappingURL=Like.story.js.map