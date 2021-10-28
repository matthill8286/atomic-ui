function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { EmbeddedPlayer } from "./EmbeddedPlayer";
import { text, boolean } from '@storybook/addon-knobs';
import { StyledRelativeEmbeddedParent } from "./EmbeddedPlayer.styled";
var youtubeUrl = 'https://www.youtube.com/embed/UFatVn1hP3o';
var soundCloudUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169176142&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
var embedPdf = 'public/pdf/the_wrong_box.pdf';
var spotify = 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3';
export var vimeo = 'https://player.vimeo.com/video/66140585?color=ffffff&title=0&byline=0&portrait=0';
var applePodcasts = 'https://embed.podcasts.apple.com/us/podcast/equity-monday-electric-car-boom-tech-regulation-some/id1215439780?i=1000509116446';
var castBox = 'https://castbox.fm/app/castbox/player/id2827072?v=8.22.11&autoplay=0';
var height = text('height', '400px');
var width = text('width', '600px');
var allowfullscreen = boolean('allowfullscreen', true);

var EmbeddedWrapper = function EmbeddedWrapper(_ref) {
  var embedUrl = _ref.embedUrl,
      aspect = _ref.aspect,
      height = _ref.height,
      width = _ref.width,
      maxHeight = _ref.maxHeight,
      props = _objectWithoutProperties(_ref, ["embedUrl", "aspect", "height", "width", "maxHeight"]);

  return React.createElement(StyledRelativeEmbeddedParent, {
    aspect: aspect,
    maxHeight: maxHeight
  }, React.createElement(EmbeddedPlayer, _extends({
    embedUrl: embedUrl,
    height: height,
    width: width,
    maxHeight: maxHeight
  }, props)));
};

storiesOf('Design System/Atoms/EmbeddedPlayer', module).add('YoutubePlayer default', function () {
  return React.createElement(EmbeddedPlayer, {
    embedUrl: "https://www.youtube.com/embed/UFatVn1hP3o"
  });
}).add('EmbeddedPlayer with custom features', function () {
  return React.createElement(EmbeddedPlayer, {
    embedUrl: youtubeUrl,
    height: height,
    width: width,
    allowfullscreen: allowfullscreen
  });
}).add('EmbeddedPlayer with custom wrapper', function () {
  return React.createElement(EmbeddedWrapper, {
    embedUrl: youtubeUrl,
    aspect: "16/9",
    height: "100%",
    width: width,
    allowfullscreen: allowfullscreen
  });
}).add('EmbeddedPlayer with local PDF', function () {
  return React.createElement(EmbeddedWrapper, {
    embedUrl: embedPdf,
    aspect: "4/3",
    height: "100%",
    width: "100%",
    allowfullscreen: allowfullscreen
  });
}).add('EmbeddedPlayer with SoundCloud', function () {
  return React.createElement(EmbeddedWrapper, {
    embedUrl: soundCloudUrl,
    aspect: "16/9",
    maxHeight: "100px",
    width: "100%",
    features: ['autoplay']
  });
}).add('EmbeddedPlayer with Spotify Album', function () {
  return React.createElement(EmbeddedWrapper, {
    embedUrl: spotify,
    aspect: "16/9",
    maxHeight: "300px",
    width: "100%",
    features: ['autoplay']
  });
}).add('EmbeddedPlayer with Pocast', function () {
  return React.createElement(EmbeddedWrapper, {
    embedUrl: castBox,
    aspect: "16/9",
    maxHeight: "300px",
    width: "100%",
    features: ['autoplay']
  });
}).add('EmbeddedPlayer with Apple Pocasts', function () {
  return React.createElement(EmbeddedWrapper, {
    embedUrl: applePodcasts,
    aspect: "16/9",
    maxHeight: "300px",
    width: "100%",
    features: ['autoplay', 'encrypted-media']
  });
});
//# sourceMappingURL=EmbeddedPlayer.story.js.map