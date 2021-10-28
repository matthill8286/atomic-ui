import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { LazyLoadImage } from "./LazyLoadImage";
var highResSrc = 'public/images/featured_backgrounds/01.jpg';
var lowResSrc = 'public/images/featured_backgrounds/02.jpg';
var thresholdOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.01
};
var rootMarginOptions = {
  range: true,
  min: -100,
  max: 500,
  step: 10
};
var threshold = number('Inner Threshold', 0, thresholdOptions);
var rootMargin = "".concat(number('Outer Threshold', 0, rootMarginOptions), "px");
storiesOf('Design System/Molecules/LazyLoadImage', module).add('Default', function () {
  return React.createElement("div", null, "scroll down", React.createElement("div", {
    style: {
      height: '1000px'
    }
  }), "here it comes", React.createElement(LazyLoadImage, {
    src: highResSrc,
    threshold: threshold,
    rootMargin: rootMargin,
    width: '800px',
    height: '600px'
  }), "here it was");
}).add('LQIP', function () {
  return React.createElement("div", null, "scroll down", React.createElement("div", {
    style: {
      height: '1000px'
    }
  }), "here it comes", React.createElement("div", {
    style: {
      height: '600px',
      width: '800px'
    }
  }, React.createElement(LazyLoadImage, {
    src: highResSrc,
    lowResSrc: lowResSrc,
    threshold: threshold,
    rootMargin: rootMargin,
    withLQIP: true
  })), "here it was");
}).add('Native', function () {
  return React.createElement("div", null, "scroll down", React.createElement("div", {
    style: {
      height: '1000px'
    }
  }), "here it comes", React.createElement(LazyLoadImage, {
    src: highResSrc,
    threshold: threshold,
    rootMargin: rootMargin,
    width: '800px',
    height: '600px',
    withNativeLoading: true
  }), "here it was");
});
//# sourceMappingURL=LazyLoadImage.story.js.map