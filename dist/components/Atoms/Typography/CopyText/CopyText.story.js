function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { saiyanTheme } from "../../../../styles/sc-vars-saiyan";
import { CopyText } from "./CopyText";
storiesOf('Design System/Atoms/Typography', module).add('CopyText', function () {
  var sampleText = text('Sample text', "Lorem ipsum dolorsit amet consectetur adipisicing elit. Lorem ipsum dolorsit amet consectetur adipisicing elit. Lorem ipsum dolorsit amet consectetur adipisicing elit. Lorem ipsum dolorsit amet consectetur adipisicing elit.");
  var fontSizeOptions = ['xxs', 'xs', 'sm', 'md'];
  var fontSize = select('Type fontSize', fontSizeOptions, 'xs');
  var tagOptions = ['p', 'span', 'div'];
  var tagName = select('Tag name', tagOptions, 'p');
  var withMargins = boolean('With margins', false);
  var multiple = boolean('Multiple paragraphs', false);
  var showColors = boolean('Enable Custom Color', false);
  var selectedColor = select('Color', Object.keys(saiyanTheme.color), 'black');
  var isBold = boolean('Bold', false);
  var limitLines = number('Limit Lines', 0);
  return React.createElement(React.Fragment, null, React.createElement(CopyText, _extends({
    tag: tagName,
    fontSize: fontSize,
    withMargins: withMargins,
    bold: isBold
  }, showColors && {
    color: selectedColor
  }, {
    limitLines: limitLines
  }), sampleText), multiple && React.createElement(CopyText, _extends({
    tag: tagName,
    fontSize: fontSize,
    withMargins: withMargins,
    bold: isBold
  }, showColors && {
    color: selectedColor
  }, {
    limitLines: limitLines
  }), sampleText), multiple && React.createElement(CopyText, _extends({
    tag: tagName,
    fontSize: fontSize,
    withMargins: withMargins,
    bold: isBold
  }, showColors && {
    color: selectedColor
  }, {
    limitLines: limitLines
  }), sampleText));
});
//# sourceMappingURL=CopyText.story.js.map