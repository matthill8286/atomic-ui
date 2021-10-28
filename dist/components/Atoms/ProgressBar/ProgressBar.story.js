import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ProgressBar } from "./ProgressBar";
storiesOf('Design System/Atoms/ProgressBar', module).add('Default', function () {
  var value = number('Value', 50);
  var small = boolean('Small Version', false);
  return React.createElement(ProgressBar, {
    value: value,
    small: small
  });
});
//# sourceMappingURL=ProgressBar.story.js.map