function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { CopyText, Heading } from "../../Atoms/Typography";
import { Cell, Grid, Row } from "../../Helper/Grid";
import { AssetCarousel } from "./ScrollAssetCarousel";
import { mockPlaylistCollections, newAssetMocks } from "../AssetTile/elements/mockAsset";
import { AssetSponsoring, AssetStrategy, AssetTileLayout } from "../AssetTile";
var mockAssets = {
  asset1: newAssetMocks[0],
  asset2: newAssetMocks[1],
  asset3: newAssetMocks[2]
};
export var assetNames = ['asset1', 'asset2', 'asset3'];

var mockedAssetsWithNames = function mockedAssetsWithNames() {
  var assets = [];

  for (var i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]]);
  }

  return assets;
};

var usableAssets = [].concat(_toConsumableArray(mockedAssetsWithNames()), _toConsumableArray(mockedAssetsWithNames()));
var showSponsoring = boolean('Show Sponsoring', false);

var knobs = function knobs() {
  return {
    loading: boolean('Loading', false),
    slidesPerPageSettings: {
      desktop: number('Desktop', 3),
      tablet: number('tablet', 2),
      mobileBig: number('Large mobile', 2),
      mobileSmall: number('Small mobile', 2)
    },
    showArrows: boolean('Arrows', true),
    playlistOrientation: select('Playlist Orientation', ['portrait', 'landscape', undefined], 'portrait'),
    NoAssetsComponent: React.createElement("p", null, "No Assets here"),
    tileMargin: select('Tile Margin', ['xs', 'sm', 'md'], 'sm'),
    playlistView: select('Playlist Type', ['list', 'collection'], 'list'),
    title: boolean('With Title', false) ? customTitle() : undefined,
    tileWidth: number('TileWidth', 360),
    sponsoringDetails: {
      showUppercase: true,
      isSponsored: showSponsoring,
      label: text('Label', 'Sponsored Content'),
      title: text('Title', 'Sponsored Content Title'),
      infoText: text('Info Text', 'Some more information about this sponsored content')
    },
    onAssetClick: function onAssetClick() {
      return action('asset');
    },
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    renderAddToBookmarkButton: function renderAddToBookmarkButton() {
      return React.createElement("div", null, "Bookmark");
    },
    showNoAssets: boolean('With No Assets', false)
  };
};

var fixedWidth = function fixedWidth() {
  return boolean('With Grid', false);
};

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

storiesOf('Design System/Organisms/AssetCarousel', module).add('Default', function () {
  if (fixedWidth()) {
    return React.createElement(AssetCarousel, _extends({}, knobs(), {
      showBadges: true,
      title: customTitle(),
      context: 'dashboard',
      assets: !knobs().showNoAssets ? usableAssets : [],
      sponsoringDetails: undefined,
      fixedArrowPosition: false,
      onAssetClick: action('asset'),
      onLockClick: action('lock'),
      onSlideChange: action('slide changed'),
      withGrid: true
    }));
  }

  return React.createElement(AssetCarousel, _extends({}, knobs(), {
    showBadges: true,
    title: customTitle(),
    context: 'homepage',
    assets: !knobs().showNoAssets ? usableAssets : [],
    sponsoringDetails: undefined,
    fixedArrowPosition: false,
    onAssetClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed')
  }));
}).add('Playlist collection', function () {
  return React.createElement(AssetCarousel, _extends({}, knobs(), {
    showBookmark: false,
    fixedArrowPosition: false,
    context: 'webmobile-cms-landing-pages',
    playlistView: "collection",
    title: React.createElement(Heading, {
      bold: true,
      scale: 'level-2'
    }, "Your Collection"),
    slidesPerPageSettings: {
      desktop: 4,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 2
    },
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Your Playlists',
      title: 'Saved Playlists',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    assets: _toConsumableArray(mockPlaylistCollections),
    onAssetClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed')
  }));
}).add('Playlists with disabled indexes', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(AssetCarousel, {
    NoAssetsComponent: React.createElement(React.Fragment, null, "No Assets Found"),
    loading: false,
    slidesPerPageSettings: {
      desktop: 3,
      tablet: 2,
      mobileBig: 1,
      mobileSmall: 1
    },
    tileWidth: 380,
    strategyType: AssetStrategy.structured,
    context: "search",
    title: React.createElement(Heading, {
      bold: true,
      scale: 'level-2'
    }, "Structured Strategy"),
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    disabledAssetIndexes: [1, 2, 3, 4],
    assets: usableAssets,
    onAssetClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    fixedArrowPosition: false
  }))));
}).add('Playlists fixed width asset on desktop', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(AssetCarousel, _extends({}, knobs(), {
    NoAssetsComponent: React.createElement(React.Fragment, null, "No Assets Found"),
    loading: false,
    context: "dashboard",
    title: React.createElement(Heading, {
      bold: true,
      scale: 'level-2'
    }, "Fixed Width"),
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    slidesPerPageSettings: {
      desktop: 4,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 2
    },
    assets: [mockAssets.asset1, mockAssets.asset2, mockAssets.asset3],
    onAssetClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    fixedArrowPosition: false
  })))));
}).add('Playlists view landscape', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(AssetCarousel, _extends({}, knobs(), {
    NoAssetsComponent: React.createElement(React.Fragment, null, "No Assets Found"),
    loading: false,
    context: "dashboard",
    title: React.createElement(Heading, {
      bold: true,
      scale: 'level-2'
    }, "Your Bookmarks"),
    playlistView: "list",
    playlistLayout: AssetTileLayout.listItem,
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    slidesPerPageSettings: {
      desktop: 2,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 2
    },
    withScrollbar: true,
    assets: [mockAssets.asset1, mockAssets.asset2, mockAssets.asset3, mockAssets.asset1, mockAssets.asset2, mockAssets.asset3],
    onAssetClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    fixedArrowPosition: false
  })))), React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(CopyText, {
    display: "flex",
    fontSize: "lg"
  }, "Due to the amount of information on this version of asset tile, the best viewing mode is 2 assets per slide"))));
});
//# sourceMappingURL=ScrollAssetCarousel.story.js.map