function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { boolean, optionsKnob as options, select } from '@storybook/addon-knobs';
import * as React from 'react';
import { Grid, Row } from "../../../Helper/Grid";
import { StorybookWrapper } from "../../../../utils/StorybookWrapper";
import { AssetTileLayout } from "../AssetTile.interface";
import { Reduced } from "../AssetTilePresetProps";
import { assetNames, assetOptions, baseProps, featureOptions, gridSelection, mockAssets, presetProps } from "../elements/mocks";
import { AssetTileExpanderRow } from "./AssetExpanderRow";
import { action } from '@storybook/addon-actions';
import { css, styled } from "../../../../styles";
import { IconButton } from "../../../Atoms/Button";
import { Icon } from "../../../Atoms/Icon";
import { StyleguideBookmarkOutlined } from "../../../../svgs";
export var StyledIconButton = styled(IconButton).withConfig({
  displayName: "AssetTileGridItemStory__StyledIconButton",
  componentId: "sc-11nwnlk-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["border:none;display:flex;padding:0;min-width:auto;justify-content:center;"]);
});
export var AssetTileGridItemStory = function AssetTileGridItemStory() {
  var itemCount = select('Items per Row', gridSelection, 3);
  var selectedAssetType = select('Asset', assetOptions, 'auto');
  var auto = selectedAssetType === 'auto';

  var props = _objectSpread(_objectSpread({}, baseProps), {}, {
    loading: boolean('Loading state', false),
    isDisabled: boolean('Disabled', false),
    orientation: select('Orientation', ['portrait', 'landscape', undefined], 'portrait'),
    renderAddToBookmarkButton: function renderAddToBookmarkButton() {
      return React.createElement(StyledIconButton, {
        round: true,
        isFlat: true,
        onClick: action('Bookmark clicked')
      }, React.createElement(Icon, {
        color: "grey5",
        height: "md"
      }, React.createElement(StyleguideBookmarkOutlined, null)));
    }
  });

  var preset = select('Presets', presetProps, 'None');
  var selectedFeatures = options('Features', featureOptions, Object.values(featureOptions), {
    display: 'check'
  });
  var features = preset !== 'None' ? Reduced : Object.values(featureOptions).reduce(function (a, v) {
    a[v] = selectedFeatures.includes(v);
    return a;
  }, {});
  var assets = [];

  for (var i = 0; i < itemCount; i++) {
    assets.push(mockAssets[auto && assetNames[i] || selectedAssetType]);
  }

  return React.createElement(StorybookWrapper, null, React.createElement(Grid, null, React.createElement(Row, null, React.createElement(AssetTileExpanderRow, _extends({}, props, {
    assets: assets,
    onLockClick: action('Lock clicked'),
    onClick: action('Tile clicked'),
    layout: AssetTileLayout.gridItem
  }, features)))));
};
//# sourceMappingURL=AssetTileGridItemStory.js.map