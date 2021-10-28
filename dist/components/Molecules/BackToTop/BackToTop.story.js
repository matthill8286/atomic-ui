import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BackToTop } from "./BackToTop";
import { ScrollAwareBackToTop } from "./ScrollAwareBackToTop";
storiesOf('Design System/Molecules/Back To Top', module).add('Default', function () {
  return React.createElement(BackToTop, {
    visible: 'VISIBLE'
  });
}).add('Transparent', function () {
  return React.createElement(BackToTop, {
    visible: 'TRANSPARENT'
  });
}).add('Hidden', function () {
  return React.createElement(BackToTop, {
    visible: 'HIDDEN'
  });
}).add('onClick Event', function () {
  return React.createElement(BackToTop, {
    visible: 'TRANSPARENT',
    onClick: action('onClick')
  });
}).add('ScrollAwareBackToTop', function () {
  return React.createElement("div", {
    style: {
      height: '200vh'
    }
  }, "Scroll down", React.createElement(ScrollAwareBackToTop, null));
});
//# sourceMappingURL=BackToTop.story.js.map