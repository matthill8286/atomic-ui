function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { useWindowDimensions } from "../../Helper/useWindowDimensions";
import { SimpleCarousel } from "../../Molecules/SimpleCarousel";
import { breakpoints } from "../../../styles";
import { AssetTile, AssetTileLayout } from "../AssetTile";
import { ClippingWrapper, StyledTileWrapper, StyledHeading } from "./LazyAssetCarousel.styled";
import { useBadges } from "./useBadges";
export var LazyAssetCarousel = function LazyAssetCarousel(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? true : _ref$loading,
      _ref$lazyLoad = _ref.lazyLoad,
      lazyLoad = _ref$lazyLoad === void 0 ? true : _ref$lazyLoad,
      _ref$assets = _ref.assets,
      assets = _ref$assets === void 0 ? [] : _ref$assets,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? 'homepage-asset-carousel' : _ref$context,
      _ref$withOverflow = _ref.withOverflow,
      withOverflow = _ref$withOverflow === void 0 ? true : _ref$withOverflow,
      _ref$withPadding = _ref.withPadding,
      withPadding = _ref$withPadding === void 0 ? true : _ref$withPadding,
      _ref$hideLeftOverflow = _ref.hideLeftOverflow,
      hideLeftOverflow = _ref$hideLeftOverflow === void 0 ? false : _ref$hideLeftOverflow,
      _ref$arrows = _ref.arrows,
      arrows = _ref$arrows === void 0 ? true : _ref$arrows,
      _ref$brightArrows = _ref.brightArrows,
      brightArrows = _ref$brightArrows === void 0 ? true : _ref$brightArrows,
      _ref$dots = _ref.dots,
      dots = _ref$dots === void 0 ? true : _ref$dots,
      title = _ref.title,
      _ref$smallSlides = _ref.smallSlides,
      smallSlides = _ref$smallSlides === void 0 ? 1 : _ref$smallSlides,
      _ref$mediumSlides = _ref.mediumSlides,
      mediumSlides = _ref$mediumSlides === void 0 ? 2 : _ref$mediumSlides,
      _ref$largeSlides = _ref.largeSlides,
      largeSlides = _ref$largeSlides === void 0 ? 4 : _ref$largeSlides,
      _ref$smallConfig = _ref.smallConfig,
      smallConfig = _ref$smallConfig === void 0 ? {} : _ref$smallConfig,
      _ref$mediumConfig = _ref.mediumConfig,
      mediumConfig = _ref$mediumConfig === void 0 ? {} : _ref$mediumConfig,
      _ref$largeConfig = _ref.largeConfig,
      largeConfig = _ref$largeConfig === void 0 ? {} : _ref$largeConfig,
      _ref$showBookmark = _ref.showBookmark,
      showBookmark = _ref$showBookmark === void 0 ? true : _ref$showBookmark,
      _ref$showSkills = _ref.showSkills,
      showSkills = _ref$showSkills === void 0 ? true : _ref$showSkills,
      showProvider = _ref.showProvider,
      _ref$showLock = _ref.showLock,
      showLock = _ref$showLock === void 0 ? false : _ref$showLock,
      fixedWidth = _ref.fixedWidth,
      tileWidth = _ref.tileWidth,
      _ref$playlistOrientat = _ref.playlistOrientation,
      playlistOrientation = _ref$playlistOrientat === void 0 ? 'portrait' : _ref$playlistOrientat,
      _ref$playlistView = _ref.playlistView,
      playlistView = _ref$playlistView === void 0 ? 'list' : _ref$playlistView,
      _ref$playlistLayout = _ref.playlistLayout,
      playlistLayout = _ref$playlistLayout === void 0 ? AssetTileLayout.gridItem : _ref$playlistLayout,
      _ref$strategyType = _ref.strategyType,
      strategyType = _ref$strategyType === void 0 ? undefined : _ref$strategyType,
      videoFallbackImage = _ref.videoFallbackImage,
      renderAddToBookmarkButton = _ref.renderAddToBookmarkButton,
      _ref$onAssetClick = _ref.onAssetClick,
      onAssetClick = _ref$onAssetClick === void 0 ? function () {
    return null;
  } : _ref$onAssetClick,
      _ref$onLockClick = _ref.onLockClick,
      onLockClick = _ref$onLockClick === void 0 ? function () {
    return null;
  } : _ref$onLockClick,
      _ref$onSlideChange = _ref.onSlideChange,
      onSlideChange = _ref$onSlideChange === void 0 ? function () {
    return null;
  } : _ref$onSlideChange,
      customSlickSettings = _ref.customSlickSettings;

  var _useWindowDimensions = useWindowDimensions(),
      breakpoint = _useWindowDimensions.breakpoint;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      prevSlideIndex = _useState2[0],
      setPrevSlideIndex = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDragging = _useState4[0],
      setIsDragging = _useState4[1];

  if (!assets) {
    return null;
  }

  var assetsPerSlideWithHook = breakpoint >= breakpoints.lg ? largeSlides : breakpoint >= breakpoints.md ? mediumSlides : smallSlides;
  var currentConfig = breakpoint >= breakpoints.lg ? largeConfig : breakpoint >= breakpoints.md ? mediumConfig : smallConfig;

  var getLeftOverflow = function getLeftOverflow(config) {
    var _config$hideLeftOverf;

    return (_config$hideLeftOverf = config.hideLeftOverflow) !== null && _config$hideLeftOverf !== void 0 ? _config$hideLeftOverf : hideLeftOverflow;
  };

  var withArrows = function withArrows(config) {
    var _config$arrows;

    return (_config$arrows = config.arrows) !== null && _config$arrows !== void 0 ? _config$arrows : arrows;
  };

  var withDots = function withDots(config) {
    var _config$dots;

    return (_config$dots = config.dots) !== null && _config$dots !== void 0 ? _config$dots : dots;
  };

  var handleSlideChange = function handleSlideChange(assetsPerSlide) {
    return function (nextSlideIndex) {
      return function (assets) {
        setIsDragging(false);
        var direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous';
        var slideIndex = nextSlideIndex / assetsPerSlide + 1;
        var totalNumberOfPages = assets.length / assetsPerSlide;
        setPrevSlideIndex(nextSlideIndex);
        var assetsInSlide = assets.slice(slideIndex * assetsPerSlide, slideIndex * assetsPerSlide + assetsPerSlide);
        onSlideChange === null || onSlideChange === void 0 ? void 0 : onSlideChange({
          assets: assetsInSlide,
          direction: direction,
          assetAmount: assetsPerSlide,
          pageNumber: slideIndex,
          context: context,
          numberOfPages: totalNumberOfPages
        });
      };
    };
  };

  var handleAssetClick = function handleAssetClick(assetsPerSlide) {
    return function (e, asset, index, pageNumber) {
      if (isDragging) {
        e.preventDefault();
      } else {
        onAssetClick({
          asset: asset,
          index: index,
          assetsPerSlide: assetsPerSlide,
          pageNumber: pageNumber,
          context: context
        });
      }
    };
  };

  var handleLockClick = function handleLockClick(assetsPerSlide) {
    return function (e, asset, index, pageNumber) {
      if (isDragging) {
        e.preventDefault();
      } else {
        onLockClick === null || onLockClick === void 0 ? void 0 : onLockClick({
          asset: asset,
          index: index,
          assetsPerSlide: assetsPerSlide,
          pageNumber: pageNumber,
          context: context
        });
      }
    };
  };

  var slickSettings = function slickSettings(config) {
    return _objectSpread({
      infinite: false,
      speed: 250,
      initialSlide: 0,
      dots: withDots(config),
      arrows: withArrows(config),
      beforeChange: function beforeChange(oldSlide, newSlide) {
        if (oldSlide !== newSlide) {
          setIsDragging(true);
        }
      }
    }, customSlickSettings);
  };

  var carouselSettings = function carouselSettings(config) {
    var _config$withOverflow, _config$withPadding;

    return {
      hasOverflow: (_config$withOverflow = config.withOverflow) !== null && _config$withOverflow !== void 0 ? _config$withOverflow : withOverflow,
      hasPadding: (_config$withPadding = config.withPadding) !== null && _config$withPadding !== void 0 ? _config$withPadding : withPadding,
      fixedWidth: fixedWidth,
      brightArrows: brightArrows
    };
  };

  var tileSettings = {
    showBadges: true,
    loading: loading,
    isCompact: false,
    fontSize: 'xs',
    withEllipsis: true
  };

  var renderAsset = function renderAsset(assetsPerSlide) {
    return function (asset, index) {
      var slideIndex = Math.floor(index / assetsPerSlide);
      var isDummyTile = !withOverflow && !asset.description;
      var badges = useBadges({
        asset: asset,
        playlistView: playlistView
      });
      var loading = tileSettings.loading || isDummyTile;
      return React.createElement(StyledTileWrapper, {
        key: index,
        withLabels: true
      }, React.createElement(AssetTile, _extends({}, tileSettings, {
        showProvider: showProvider,
        showSkills: showSkills,
        assetIndex: slideIndex,
        isDisabled: asset === null || asset === void 0 ? void 0 : asset.locked,
        videoFallbackImage: videoFallbackImage,
        isCollection: playlistView === 'collection',
        orientation: playlistOrientation,
        badges: badges,
        sponsoringDetails: undefined,
        showBookmark: showBookmark,
        showLock: showLock,
        assetView: playlistView,
        fontSize: "sm",
        strategyType: strategyType,
        renderAddToBookmarkButton: renderAddToBookmarkButton,
        onClick: function onClick(e) {
          return handleAssetClick(assetsPerSlide)(e, asset, index, slideIndex);
        },
        onLockClick: function onLockClick(e) {
          return handleLockClick(assetsPerSlide)(e, asset, index, slideIndex);
        },
        loading: loading,
        layout: playlistLayout,
        asset: asset,
        lazyLoad: lazyLoad
      })));
    };
  };

  return React.createElement(ClippingWrapper, {
    hideLeft: getLeftOverflow(currentConfig)
  }, title ? React.createElement(StyledHeading, null, title) : null, React.createElement(SimpleCarousel, _extends({
    tileWidth: tileWidth,
    fixedWidth: fixedWidth,
    sliderSettings: _objectSpread(_objectSpread({}, slickSettings(currentConfig)), {}, {
      afterChange: function afterChange(current) {
        return handleSlideChange(assetsPerSlideWithHook)(current)(assets);
      },
      slidesToShow: assetsPerSlideWithHook,
      slidesToScroll: assetsPerSlideWithHook
    }),
    items: assets,
    renderSlide: renderAsset(assetsPerSlideWithHook)
  }, carouselSettings(currentConfig))));
};
LazyAssetCarousel.displayName = 'LazyAssetCarousel';
//# sourceMappingURL=LazyAssetCarousel.js.map