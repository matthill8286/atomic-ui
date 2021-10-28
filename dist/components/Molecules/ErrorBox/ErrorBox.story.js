import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ErrorBox } from "./";

var knobs = function knobs() {
  return {
    title: text('title', 'Oops'),
    subtitle: text('subtitle', 'Something went wrong'),
    buttonLabel: text('button label', 'Try again')
  };
};

storiesOf('Design System/Molecules/ErrorBox', module).add('Default', function () {
  return React.createElement(ErrorBox, knobs());
});
//# sourceMappingURL=ErrorBox.story.js.map