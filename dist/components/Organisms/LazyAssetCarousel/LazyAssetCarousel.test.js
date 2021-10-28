function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { SimpleCarousel } from "../../Molecules/SimpleCarousel";
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { LazyAssetCarousel } from "./LazyAssetCarousel";
import { assetNames, mockAssets } from "../AssetTile";

var MockAssetContextWrapperComponent = function MockAssetContextWrapperComponent(_ref) {
  var children = _ref.children;
  return children;
};

describe('Lazy Asset Carousel', function () {
  var carouselProps;
  var assets = [];

  for (var i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]]);
  }

  beforeEach(function () {
    carouselProps = {
      AssetContextWrapperComponent: MockAssetContextWrapperComponent,
      loading: false,
      lazyLoad: false,
      context: 'home',
      assets: [].concat(assets),
      onAssetClick: function onAssetClick() {},
      onEnergyClick: function onEnergyClick() {},
      onSlideChange: function onSlideChange() {}
    };
  });
  it('renders without crashing', function () {
    var wrapper = renderWithTheme(React.createElement(LazyAssetCarousel, carouselProps));
    expect(wrapper).toBeDefined();
  });
  it.skip('renders snapshot', function () {
    var wrapper = renderWithTheme(React.createElement(LazyAssetCarousel, carouselProps));
    expect(wrapper).toMatchSnapshot();
  });
  describe('with ssr and client', function () {
    it.skip('renders for ssr', function () {
      var wrapper = mountWithTheme(React.createElement(LazyAssetCarousel, _extends({}, carouselProps, {
        ssr: true
      })));
      var carousels = wrapper.find(SimpleCarousel);
      expect(carousels.length).toBe(3);
    });
    it('renders for client', function () {
      var wrapper = mountWithTheme(React.createElement(LazyAssetCarousel, carouselProps));
      var carousels = wrapper.find(SimpleCarousel);
      expect(carousels.length).toBe(1);
    });
    describe('with loading state', function () {
      it('renders as skeleton', function () {
        var wrapper = mountWithTheme(React.createElement(LazyAssetCarousel, _extends({}, carouselProps, {
          loading: true
        })));
        expect(wrapper).toBeDefined();
      });
      it('renders with lazyload', function () {
        var wrapper = mountWithTheme(React.createElement(LazyAssetCarousel, _extends({}, carouselProps, {
          loading: true,
          lazyLoad: true
        })));
        expect(wrapper).toBeDefined();
      });
    });
  });
});
//# sourceMappingURL=LazyAssetCarousel.test.js.map