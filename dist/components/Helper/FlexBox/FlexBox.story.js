import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { FlexBox, FlexItem } from "./FlexBox";
import readme from "./FlexBox.readme.md";
storiesOf('Design System/Helper/FlexBox', module).add('Default', function () {
  var flexBoxKnobs = {
    debug: boolean('box debug', true),
    display: select('box display', ['flex', 'inline-flex'], 'flex'),
    flexDirection: select('box flexDirection', ['row', 'row-reverse', 'column', 'column-reverse'], 'row'),
    flexWrap: select('box:flexWrap', ['nowrap', 'wrap', 'wrap-reverse'], 'wrap'),
    justifyContent: select('box justifyContent', ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'], 'flex-start'),
    alignContent: select('box alignContent', ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'], 'flex-start'),
    alignItems: select('box alignItems', ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'], 'flex-start')
  };
  var firstFlexItemProps = {
    debug: boolean('first_item debug', true),
    order: number('first_item order', 0),
    flex: text('first_item flex', '0 1 auto'),
    alignSelf: select('first_item alignSelf', ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'], 'auto')
  };
  var secondFlexItemProps = {
    debug: boolean('second_item debug', true),
    order: number('second_item order', 0),
    flex: text('second_item flex', '0 1 auto'),
    alignSelf: select('second_item alignSelf', ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'], 'auto')
  };
  return React.createElement(FlexBox, flexBoxKnobs, React.createElement(FlexItem, firstFlexItemProps, "First Item"), React.createElement(FlexItem, secondFlexItemProps, "Second Item"));
}, {
  info: readme
});
//# sourceMappingURL=FlexBox.story.js.map