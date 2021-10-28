import { number, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { LoadingIndicator } from "./LoadingIndicator";
var loadingIndicatorColor = {
  white: 'white',
  black: 'black',
  primary: 'primary'
};

var knobs = function knobs() {
  return {
    isVisible: true,
    color: radios('Color', loadingIndicatorColor, loadingIndicatorColor.primary),
    size: number('Size', 50)
  };
};

storiesOf('Design System/Atoms/LoadingIndicator', module).add('Default', function () {
  return React.createElement(LoadingIndicator, knobs());
});
//# sourceMappingURL=LoadingIndicator.story.js.map