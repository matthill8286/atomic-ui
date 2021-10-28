function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ImageAndText } from "./ImageAndText";
var imageUrls = {
  normal: 'https://images.prismic.io/mms-test/d0cf98d0-b801-4e96-b5aa-c63f94677b60_Steve_Banner_Teaser.png?auto=compress,format&rect=0,113,1200,675&w=640&h=360',
  small: 'https://images.prismic.io/mms-test/d0cf98d0-b801-4e96-b5aa-c63f94677b60_Steve_Banner_Teaser.png?auto=compress,format&rect=0,113,1200,675&w=320&h=180',
  big: 'https://images.prismic.io/mms-test/d0cf98d0-b801-4e96-b5aa-c63f94677b60_Steve_Banner_Teaser.png?auto=compress,format&rect=0,113,1200,675&w=480&h=270'
};
var image = {
  alt: 'this is the alt text',
  url: imageUrls.normal,
  mobileSmall: {
    url: imageUrls.small
  },
  mobileBig: {
    url: imageUrls.big
  }
};
storiesOf('Design System/Organisms/ImageAndText', module).add('Default', function () {
  var knobs = {
    imageAlignment: select('Image Alignment', ['right', 'left'], 'right')
  };
  return React.createElement("div", null, React.createElement(ImageAndText, _extends({
    image: image
  }, knobs), React.createElement("div", null, React.createElement("h3", null, text('Headline', 'ImageText - With Headline')), React.createElement("p", null, text('Paragraph', 'This is the paragraph')))));
});
//# sourceMappingURL=ImageAndText.story.js.map