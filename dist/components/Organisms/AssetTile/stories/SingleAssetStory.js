function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';
import { Cell, Grid, Offset, Row } from "../../../Helper/Grid";
import { StorybookWrapper } from "../../../../utils/StorybookWrapper";
import { AssetTileLayout } from "../AssetTile.interface";
import { assetNames, assetOptions, baseProps, gridSelection, mockAssets } from "../elements/mocks";
import { action } from '@storybook/addon-actions';
import { AssetTile } from "./..";
import { StyledIconButton } from "./AssetTileGridItemStory";
import { Icon } from "../../../Atoms/Icon";
import { StyleguideBookmarkOutlined } from "../../../../svgs";
export var SingleAssetStory = function SingleAssetStory() {
  var itemCount = select('Items per Row', gridSelection, 3);
  var selectedAssetType = select('Asset', assetOptions, 'auto');
  var auto = selectedAssetType === 'auto';

  var props = _objectSpread(_objectSpread({}, baseProps), {}, {
    loading: boolean('Loading state', false),
    isDisabled: boolean('Disabled', false),
    videoFallbackImage: 'public/images/teasers/02.jpg'
  });

  var showLock = boolean('Locked state', false);
  var showFeatured = boolean('Featured Asset', false);
  var sponsored = boolean('Sponsored asset', false);
  var assets = [];

  for (var i = 0; i < itemCount; i++) {
    assets.push(mockAssets[auto && assetNames[i] || selectedAssetType]);
  }

  var showAssets = showLock ? _objectSpread(_objectSpread({}, assets[0]), {}, {
    locked: true
  }) : _objectSpread({}, assets[0]);
  return React.createElement(StorybookWrapper, null, React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Offset, {
    columns: 3
  }), React.createElement(Cell, {
    columns: 6
  }, React.createElement(AssetTile, _extends({}, props, {
    asset: showAssets,
    showLock: showLock,
    showBookmark: !showLock,
    showFeatured: showFeatured,
    noBorder: [],
    onLockClick: action('Lock clicked'),
    onClick: action('Tile clicked'),
    renderAddToBookmarkButton: function renderAddToBookmarkButton() {
      return React.createElement(StyledIconButton, {
        round: true,
        isFlat: true
      }, React.createElement(Icon, {
        color: "grey5",
        height: "md"
      }, React.createElement(StyleguideBookmarkOutlined, null)));
    },
    layout: AssetTileLayout.gridItem,
    assetSponsoring: {
      isSponsored: sponsored,
      showUppercase: false,
      label: 'Asset Sponsor',
      title: 'Sponsored',
      infoText: 'Some random content so we can showcase sponsored asset content'
    }
  }))))));
};
//# sourceMappingURL=SingleAssetStory.js.map