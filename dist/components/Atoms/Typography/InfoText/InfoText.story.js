function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { saiyanTheme } from "../../../../styles/sc-vars-saiyan";
import { InfoText } from '..';
storiesOf('Design System/Atoms/Typography', module).add('InfoText', function () {
  var sampleText = text('Example text', "Lorem ipsum dolor");
  var scaleOptions = ['small', 'small-highlighted', 'extra-small'];
  var scale = select('Type scale', scaleOptions, 'small');
  var tagOptions = ['span', 'em', 'strong', 'div'];
  var tagName = select('Tag name', tagOptions, 'span');
  var showColors = boolean('Enable Custom Color', false);
  var selectedColor = select('Color', Object.keys(saiyanTheme.color), 'black');
  var limitLines = number('Limit Lines', 0);
  return React.createElement(InfoText, _extends({
    tag: tagName,
    scale: scale
  }, showColors && {
    color: selectedColor
  }, {
    limitLines: limitLines
  }), sampleText);
});
//# sourceMappingURL=InfoText.story.js.map