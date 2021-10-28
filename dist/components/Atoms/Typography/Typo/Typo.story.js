function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TypeRhythm } from "../utils/TypeRhythm";
import { Typo } from "./Typo";
var fontSizes = {
  xxxs: 'xxxs',
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
  xxxl: 'xxxl',
  xxxxl: 'xxxxl'
};
var fontFamilies = {
  default: 'default',
  featured: 'featured',
  meta: 'meta'
};
var fontColors = {
  primary: 'primary',
  secondary: 'secondary',
  grey1: 'grey1',
  grey2: 'grey2',
  grey3: 'grey3',
  grey4: 'grey4',
  grey5: 'grey5',
  black: 'black',
  white: 'white',
  success: 'success',
  alert: 'alert',
  error: 'error',
  info: 'info',
  selected: 'selected'
};
var fontWeights = {
  regular: 'regular',
  semibold: 'semibold',
  bold: 'bold'
};
var fontLineHeights = {
  Auto: undefined,
  xxxs: 'xxxs',
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
  xxxl: 'xxxl',
  xxxxl: 'xxxxl'
};
var textTags = {
  Span: 'span',
  Paragraph: 'p',
  Div: 'div',
  'Heading 1': 'h1',
  'Heading 2': 'h2',
  'Heading 3': 'h3',
  'Heading 4': 'h4',
  ul: 'ul',
  ol: 'ol',
  li: 'li',
  sup: 'sup'
};
var textMargins = ['', 'md', 'lg', 'xs 0 sm 0', 'md 0 lg 0'];
var lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod ligula.\nSed sagittis, nulla non tincidunt cursus, lacus ipsum pellentesque massa, eu sollicitudin diam nulla id leo.\nCurabitur maximus tincidunt augue vitae facilisis. Aliquam ac pharetra enim, ac aliquam nunc.\nMorbi nec mollis dolor. Nunc eu ullamcorper ex. Vestibulum tempor urna pulvinar sapien lobortis, et posuere velit aliquam.\nProin feugiat dui nec neque fringilla tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere\ncubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris lobortis\nconsequat ullamcorper.";
storiesOf('Design System/Atoms/Typography', module).add('Typo', function () {
  var content = text('Text', lipsum);

  var knobs = function knobs() {
    return {
      tag: select('Tag', textTags, textTags.Paragraph),
      fontSize: select('Font Size', fontSizes, fontSizes.sm),
      fontFamily: select('Font Family', fontFamilies, fontFamilies.default),
      color: select('Color', fontColors, fontColors.grey4),
      weight: select('Weight', fontWeights, fontWeights.regular),
      underline: boolean('Underline', false),
      lineHeight: select('Line Heights', fontLineHeights, fontLineHeights.Auto),
      limitLines: number('Limit Lines', 0)
    };
  };

  var margin = select('Margins', textMargins, '');
  return React.createElement(TypeRhythm, {
    visible: boolean('Show Rythm', false)
  }, React.createElement(Typo, _extends({}, knobs(), {
    margin: margin
  }), content));
}).add('Responsive Typo', function () {
  var content = text('Text', lipsum);

  var knobs = function knobs() {
    return {
      tag: select('Tag', textTags, textTags.Paragraph),
      fontFamily: select('Font Family', fontFamilies, fontFamilies.default),
      color: select('Color', fontColors, fontColors.black),
      weight: select('Weight', fontWeights, fontWeights.regular),
      underline: boolean('Underline', false),
      lineHeight: select('Line Heights', fontLineHeights, fontLineHeights.Auto),
      limitLines: number('Limit Lines', 0)
    };
  };

  var margin = select('Margins', textMargins, '');
  return React.createElement(TypeRhythm, {
    visible: boolean('Show Rythm', false)
  }, React.createElement(Typo, _extends({}, knobs(), {
    margin: margin,
    fontSize: {
      mobile: 'xs',
      tablet: 'md',
      desktop: 'xxl'
    }
  }), content));
});
//# sourceMappingURL=Typo.story.js.map