function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Cell, Grid, Row } from "../../Helper/Grid";
import { loveFilmAsset, microsoftAsset, mockAsset } from "./mockAssets";
import { LazyAssetCarousel } from "./LazyAssetCarousel";
import { AssetSponsoring, AssetStrategy, newAssetStructuredMocks } from "../AssetTile";
import { CopyText, Heading } from "../../Atoms/Typography";
import { StyleguideBookmarkOutlined } from "../../../svgs";
import { Icon } from "../../Atoms/Icon";
var mockAssets = {
  nexus: mockAsset,
  loveFilm: loveFilmAsset,
  microsoft: microsoftAsset
};

var structuredAssets = _toConsumableArray(newAssetStructuredMocks);

var setCompleted = _toConsumableArray(newAssetStructuredMocks).map(function (asset) {
  return _objectSpread(_objectSpread({}, asset), {}, {
    locked: false
  });
});

export var assetNames = ['nexus', 'loveFilm', 'microsoft'];

var Placeholder = function Placeholder(_ref) {
  var tint = _ref.tint;
  var styles = {
    padding: '1rem',
    background: tint ? '#444' : '#eee',
    minHeight: '375px'
  };
  return React.createElement("div", {
    style: styles
  });
};

Placeholder.displayName = 'Placeholder';

var customTitle = function customTitle() {
  return React.createElement(React.Fragment, null, React.createElement(AssetSponsoring, {
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    layout: "carousel"
  }), React.createElement(Heading, {
    bold: true,
    scale: "level-2",
    tag: "h2",
    color: "primary"
  }, "Playlists"));
};

var knobs = function knobs() {
  return {
    loading: boolean('Loading', false),
    arrows: boolean('Arrows', true),
    withOverflow: boolean('Overflow', true),
    withPadding: boolean('Add Padding', true),
    hideLeftOverflow: boolean('Hide Left Overflow', false),
    smallSlides: number('Slides in Small Viewport', 1),
    mediumSlides: number('Slides in Medium Viewport', 2),
    largeSlides: number('Slides in Large Viewport', 3),
    showArrows: boolean('Arrows', true),
    playlistOrientation: select('Playlist Orientation', ['portrait', 'landscape', undefined], 'portrait'),
    NoAssetsComponent: React.createElement(CopyText, null, "No Assets here"),
    tileMargin: select('Tile Margin', ['xs', 'sm', 'md'], 'sm'),
    playlistView: select('Playlist Type', ['list', 'collection'], 'list'),
    title: boolean('With Title', true) ? customTitle() : undefined,
    tileWidth: number('TileWidth', 360),
    onAssetClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    renderAddToBookmarkButton: function renderAddToBookmarkButton() {
      return React.createElement(Icon, {
        onClick: action('preBookmarkProps')
      }, React.createElement(StyleguideBookmarkOutlined, null));
    },
    showNoAssets: boolean('With No Assets', false),
    showCompleted: boolean('Set assets completed', false)
  };
};

var mockedAssetsWithNames = function mockedAssetsWithNames() {
  var assets = [];

  for (var i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]]);
  }

  return assets;
};

var fixedWidth = function fixedWidth() {
  return boolean('Fixed Column Width', false);
};

storiesOf('Design System/Organisms/LazyAssetCarousel', module).add('Default', function () {
  var assets = [];

  for (var i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]]);
  }

  if (fixedWidth()) {
    return React.createElement(Grid, {
      fixedColumnWidth: true
    }, React.createElement(Row, null, React.createElement(Cell, {
      columns: 12
    }, React.createElement(LazyAssetCarousel, _extends({}, knobs(), {
      context: 'homepage',
      strategyType: select('Playlist Strategy', [AssetStrategy.structured, AssetStrategy.timebox, undefined], undefined),
      assets: [].concat(assets, assets, assets, assets)
    })))));
  }

  return React.createElement(LazyAssetCarousel, _extends({}, knobs(), {
    brightArrows: true,
    context: 'homepage',
    strategyType: select('Playlist Strategy', [AssetStrategy.structured, AssetStrategy.timebox, undefined], undefined),
    assets: [].concat(assets, assets, assets, assets)
  }));
}).add('Loading', function () {
  var assets = [];

  for (var i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]]);
  }

  return React.createElement(LazyAssetCarousel, _extends({}, knobs(), {
    loading: true,
    context: 'homepage',
    assets: [].concat(assets, assets, assets, assets)
  }));
}).add('Playlists with disabled indexes', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(LazyAssetCarousel, _extends({}, knobs(), {
    tileWidth: 380,
    context: "structured-assets",
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    assets: knobs().showCompleted ? setCompleted : knobs().showNoAssets ? [] : structuredAssets,
    strategyType: AssetStrategy.structured,
    largeSlides: knobs().playlistOrientation === 'landscape' ? 2 : 3,
    mediumSlides: 2,
    smallSlides: 1
  })))));
});
//# sourceMappingURL=LazyAssetCarousel.story.js.map