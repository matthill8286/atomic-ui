var _newAssetMocks$, _newAssetMocks$2, _newAssetMocks$2$prov;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { IconButton } from "../../Atoms/Button/IconButton";
import { SkeletonBlockItem } from "../../Atoms/Skeleton";
import { FlexBox, Icon, Spacer } from "../../..";
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { AssetTileCompact } from "./AssetTileCompact";
import { AssetTileCompactElement } from "./AssetTileCompactElement";
import { StyleguideAddToTrash } from '@excelwithbusiness/webmobile-svg-library';
import { newAssetMocks } from "../AssetTile/elements/mockAsset";
var assetLineItemElementProps = {
  title: (_newAssetMocks$ = newAssetMocks[0]) === null || _newAssetMocks$ === void 0 ? void 0 : _newAssetMocks$.title,
  provider: (_newAssetMocks$2 = newAssetMocks[0]) === null || _newAssetMocks$2 === void 0 ? void 0 : (_newAssetMocks$2$prov = _newAssetMocks$2.provider) === null || _newAssetMocks$2$prov === void 0 ? void 0 : _newAssetMocks$2$prov.name,
  description: 'Testing the description'
};
describe('AssetTileCompact', function () {
  it('renders correct snapshot with asset data', function () {
    var mockClick = jest.fn();
    var wrapper = renderWithTheme(React.createElement(AssetTileCompact, {
      assetImage: newAssetMocks[0].image,
      loading: false
    }, React.createElement(AssetTileCompactElement, _extends({
      onClick: mockClick
    }, assetLineItemElementProps, {
      loading: false
    }))));
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correct snapshot with button children', function () {
    var mockClick = jest.fn();
    var wrapper = renderWithTheme(React.createElement(AssetTileCompact, {
      loading: false,
      assetImage: newAssetMocks[0].image
    }, React.createElement(AssetTileCompactElement, _extends({
      onClick: mockClick
    }, assetLineItemElementProps, {
      loading: false,
      showInteractions: false
    })), React.createElement(FlexBox, {
      flexDirection: "row"
    }, React.createElement(IconButton, null, React.createElement(Icon, {
      width: 20,
      height: 20
    }, React.createElement(StyleguideAddToTrash, null))), React.createElement(Spacer, {
      direction: "vertical",
      size: "md"
    }))));
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correct snapshot in loading state', function () {
    var mockClick = jest.fn();
    var wrapper = renderWithTheme(React.createElement(AssetTileCompact, {
      loading: true,
      assetImage: newAssetMocks[0].image
    }, React.createElement(AssetTileCompactElement, _extends({
      onClick: mockClick
    }, assetLineItemElementProps, {
      loading: true
    }))));
    expect(wrapper).toMatchSnapshot();
  });
  it('renders Skeleton-Elements in loading state', function () {
    var mockClick = jest.fn();
    var wrapper = mountWithTheme(React.createElement(AssetTileCompact, {
      loading: true
    }, React.createElement(AssetTileCompactElement, _extends({
      onClick: mockClick
    }, assetLineItemElementProps, {
      loading: true
    }))));
    expect(wrapper.find(SkeletonBlockItem).length).toBe(1);
  });
});
describe('AssetTileCompactElement', function () {
  it('should be clickable', function () {
    var mockClick = jest.fn();
    var wrapper = mountWithTheme(React.createElement(AssetTileCompact, {
      onClick: mockClick
    }, React.createElement(AssetTileCompactElement, _extends({}, assetLineItemElementProps, {
      loading: true
    }))));
    wrapper.find(AssetTileCompactElement).simulate('click');
    expect(mockClick.mock.calls.length).toEqual(1);
  });
});
//# sourceMappingURL=AssetTileCompact.test.js.map