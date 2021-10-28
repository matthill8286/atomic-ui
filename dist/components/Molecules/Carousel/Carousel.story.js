function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { storiesOf } from '@storybook/react';
import React from 'react';
import { Picture } from "../../Atoms/Picture";
import { VideoPlayerCore } from "../../Atoms/VideoPlayer";
import { Carousel } from "./Carousel";
import { defaultSettings, multiItemSettings, pictureEntries, thumbnailSettings, withVideoEntries } from "./Carousel.data";
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
export var renderWithPictureComponent = function renderWithPictureComponent(item, index, hasThumbnails) {
  return React.createElement("div", {
    key: item.assetID + index
  }, React.createElement(Picture, {
    src: hasThumbnails ? item.thUrl : item.url,
    alt: item.assetID
  }), hasThumbnails && item.usageType === 'Asset Video' && React.createElement("img", {
    src: "https://mycliplister.com/static/viewer/assets/skins/default/playButton.png",
    alt: "Play Video"
  }));
};

var renderWithPictureOrVideoComponent = function renderWithPictureOrVideoComponent(item, index, hasThumbnails) {
  if (!hasThumbnails && item.usageType === 'Asset Video') {
    return React.createElement(VideoPlayerCore, {
      key: item.videoID,
      url: item.url
    });
  } else {
    return renderWithPictureComponent(item, index, hasThumbnails);
  }
};

storiesOf('Design System/Molecules/Carousel', module).add('Default', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    sliderSettings: defaultSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index, hasThumbnails) {
      return renderWithPictureComponent(item, index, hasThumbnails);
    }
  }));
}).add('with Thumbnails', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    sliderSettings: thumbnailSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index, hasThumbnails) {
      return renderWithPictureComponent(item, index, hasThumbnails);
    },
    hasThumbnails: true
  }));
}).add('with Badges', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    sliderSettings: thumbnailSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index, hasThumbnails) {
      return renderWithPictureComponent(item, index, hasThumbnails);
    },
    badges: badges,
    hasThumbnails: true
  }));
}).add('with MultiItem', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    sliderSettings: multiItemSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index, hasThumbnails) {
      return renderWithPictureComponent(item, index, hasThumbnails);
    }
  }));
}).add('with white Dots', function () {
  return React.createElement("div", {
    style: _objectSpread({
      backgroundColor: 'lightgrey'
    }, carouselWrapperStyle)
  }, React.createElement(Carousel, {
    whiteDots: true,
    sliderSettings: defaultSettings,
    items: pictureEntries,
    renderSlide: function renderSlide(item, index, hasThumbnails) {
      return renderWithPictureComponent(item, index, hasThumbnails);
    }
  }));
}).add('with Video', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    boxShadow: true,
    sliderSettings: defaultSettings,
    items: withVideoEntries,
    renderSlide: function renderSlide(item, index, hasThumbnails) {
      return renderWithPictureOrVideoComponent(item, index, hasThumbnails);
    }
  }));
}).add('with video thumbnails', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    sliderSettings: thumbnailSettings,
    items: withVideoEntries,
    renderSlide: function renderSlide(items, index, hasThumbnails) {
      return renderWithPictureOrVideoComponent(items, index, hasThumbnails);
    },
    hasThumbnails: true
  }));
}).add('with Video', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    boxShadow: true,
    sliderSettings: defaultSettings,
    items: withVideoEntries,
    renderSlide: function renderSlide(item, index, hasThumbnails) {
      return renderWithPictureComponent(item, index, hasThumbnails);
    }
  }));
}).add('with video thumbnails', function () {
  return React.createElement("div", {
    style: carouselWrapperStyle
  }, React.createElement(Carousel, {
    sliderSettings: thumbnailSettings,
    items: withVideoEntries,
    renderSlide: function renderSlide(items, index, hasThumbnails) {
      return renderWithPictureOrVideoComponent(items, index, hasThumbnails);
    },
    hasThumbnails: true
  }));
});
//# sourceMappingURL=Carousel.story.js.map