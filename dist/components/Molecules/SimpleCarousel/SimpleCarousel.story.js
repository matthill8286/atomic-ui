function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from "../../Atoms/Badge";
import { Picture } from "../../Atoms/Picture";
import { VideoPlayerCore } from "../../Atoms/VideoPlayer";
import { ThemeProvider } from "../../../styles/ThemeProvider";
import { SimpleCarousel } from "./SimpleCarousel";
import { defaultSettings, multiItemSettings, pictureEntries, withVideoEntries } from "./SimpleCarousel.data";
import { saiyanTheme } from "../../../styles";
var carouselWrapperStyle = {
  maxWidth: '634px',
  margin: '0 auto'
};
var badges = [{
  id: 1,
  name: 'Sponsored'
}, {
  id: 2,
  name: 'Hot Hot Hot'
}];

var blackExampleTheme = _objectSpread(_objectSpread({}, saiyanTheme), {}, {
  color: _objectSpread(_objectSpread({}, saiyanTheme.color), {}, {
    contrastColor: '#454647'
  })
});

export var renderWithPictureComponent = function renderWithPictureComponent(item, index) {
  return React.createElement("div", {
    key: item.assetID + index
  }, React.createElement(Picture, {
    src: item.url,
    alt: item.assetID
  }));
};

var renderWithPictureOrVideoComponent = function renderWithPictureOrVideoComponent(item, index) {
  if (item.usageType === 'Asset Video') {
    return React.createElement(VideoPlayerCore, {
      key: item.videoID,
      videoId: item.videoID,
      url: item.url
    });
  } else {
    return renderWithPictureComponent(item, index);
  }
};

storiesOf('Design System/Molecules/Simple Carousel', module).add('Default', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(SimpleCarousel, {
    sliderSettings: defaultSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index) {
      return renderWithPictureComponent(item, index);
    }
  }));
}).add('with MultiItem', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(SimpleCarousel, {
    sliderSettings: multiItemSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index) {
      return renderWithPictureComponent(item, index);
    }
  }));
}).add('with Video', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(SimpleCarousel, {
    boxShadow: true,
    sliderSettings: defaultSettings,
    items: withVideoEntries,
    renderSlide: function renderSlide(item, index) {
      return renderWithPictureOrVideoComponent(item, index);
    }
  }));
}).add('with Badges', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Badge, {
    badges: badges
  }), React.createElement(SimpleCarousel, {
    boxShadow: true,
    sliderSettings: defaultSettings,
    items: withVideoEntries,
    renderSlide: function renderSlide(item, index) {
      return renderWithPictureOrVideoComponent(item, index);
    }
  }));
}).add('With black Alternate theme', function () {
  return React.createElement("div", {
    style: {
      backgroundColor: 'black'
    }
  }, React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(ThemeProvider, {
    theme: blackExampleTheme
  }, React.createElement(SimpleCarousel, {
    sliderSettings: defaultSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index) {
      return renderWithPictureComponent(item, index);
    },
    whiteDots: true,
    arrowsSurfaceColor: "contrastColor"
  }))));
});
//# sourceMappingURL=SimpleCarousel.story.js.map