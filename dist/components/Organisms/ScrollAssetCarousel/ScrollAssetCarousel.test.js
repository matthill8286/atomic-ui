function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import 'jest-styled-components';
import React from 'react';
import { SkeletonBlockItem } from "../../Atoms/Skeleton";
import { ScrollSnapSlider } from "../../Molecules/ScrollSnapSlider";
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from "../../../testRenderer";
import { assetNames, mockAssets } from "../AssetTile/elements/mocks";
import { AssetCarousel } from "./ScrollAssetCarousel";
describe('Asset Carousel', function () {
  var carouselProps;
  var assets = [];

  for (var i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]]);
  }

  beforeEach(function () {
    carouselProps = {
      loading: false,
      lazyLoad: true,
      tileWidth: 375,
      context: 'dashboard',
      assets: [].concat(assets),
      slidesPerPageSettings: {
        desktop: 3,
        tablet: 2,
        mobileSmall: 1,
        mobileBig: 1
      },
      NoAssetsComponent: null,
      onAssetClick: function onAssetClick() {},
      onSlideChange: function onSlideChange() {}
    };
  });
  it('renders the Scroll Snap Slider', function () {
    var wrapper = renderWithThemeAndRouter(React.createElement(AssetCarousel, carouselProps));
    expect(wrapper).toBeDefined();
  });
  describe('with loading state', function () {
    it.skip('renders as skeleton', function () {
      var wrapper = mountWithThemeAndRouter(React.createElement(AssetCarousel, _extends({}, carouselProps, {
        loading: true
      })));
      expect(wrapper).toBeDefined();
      expect(wrapper.find(ScrollSnapSlider)).toBeDefined();
      expect(wrapper.find(SkeletonBlockItem).length).toEqual(3);
    });
  });
  describe('with promoted element', function () {
    var PromotedElement = function PromotedElement() {
      return React.createElement("div", null, "I am Promoted");
    };

    it('renders given element', function () {
      var wrapper = mountWithThemeAndRouter(React.createElement(AssetCarousel, _extends({}, carouselProps, {
        promotedIndex: 2,
        promoted: React.createElement(PromotedElement, null)
      })));
      expect(wrapper).toBeDefined();
      expect(wrapper.find(PromotedElement)).toBeDefined();
    });
  });
});
//# sourceMappingURL=ScrollAssetCarousel.test.js.map