import { boolean, color, number, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ShowMore } from "./";

var knobs = function knobs() {
  return {
    lineHeight: number('Line Height', 18),
    numOfLines: number('Number of Lines', 2),
    noShowLess: boolean('No Show Less', false),
    showMoreText: text('Show More Text', 'Show more'),
    showLessText: text('Show Less Text', 'Show less'),
    labelAlignment: radios('Label Alignment', {
      Start: 'flex-start',
      Center: 'center',
      End: 'flex-end'
    }, 'center'),
    fadeOutHeight: number('Fade out Height', 0),
    fadeOutBackgroundColor: color('Fade out Background', '#ffffff'),
    fontColor: radios('Font Color', {
      black: 'black',
      grey: 'grey5',
      white: 'white'
    }, 'grey5'),
    fontSize: number('Font Size', 16),
    fontWeight: radios('Font Weight', {
      regular: 'regular',
      semibold: 'semibold',
      bold: 'bold'
    }, 'semibold')
  };
};

storiesOf('Design System/Atoms/ShowMore', module).add('Default', function () {
  return React.createElement(ShowMore, knobs(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    Excepteur sint occaecat cupidatat non proident,\n    sunt in culpa qui officia deserunt mollit anim id est laborum.");
});
//# sourceMappingURL=ShowMore.story.js.map