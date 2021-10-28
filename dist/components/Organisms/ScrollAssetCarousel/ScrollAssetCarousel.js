function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ScrollSnapSlider } from "../../Molecules/ScrollSnapSlider";
import { breakpoints } from "../../../styles";
import { AssetSponsoring, AssetTile, AssetTileLayout } from "../AssetTile";
import { CarouselWrapper, TileFragment, TileWrapper } from "./ScrollAssetCarousel.styled";
import { useWindowDimensions } from "../../Helper";
export var AssetCarousel = function AssetCarousel(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? true : _ref$loading,
      _ref$lazyLoad = _ref.lazyLoad,
      lazyLoad = _ref$lazyLoad === void 0 ? true : _ref$lazyLoad,
      promoted = _ref.promoted,
      _ref$promotedIndex = _ref.promotedIndex,
      promotedIndex = _ref$promotedIndex === void 0 ? 0 : _ref$promotedIndex,
      _ref$assets = _ref.assets,
      assets = _ref$assets === void 0 ? [] : _ref$assets,
      _ref$disabledAssetInd = _ref.disabledAssetIndexes,
      disabledAssetIndexes = _ref$disabledAssetInd === void 0 ? [] : _ref$disabledAssetInd,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? 'home-scroll-carousel' : _ref$context,
      _ref$tileMargin = _ref.tileMargin,
      tileMargin = _ref$tileMargin === void 0 ? 'md' : _ref$tileMargin,
      _ref$withOverflow = _ref.withOverflow,
      withOverflow = _ref$withOverflow === void 0 ? true : _ref$withOverflow,
      _ref$withGrid = _ref.withGrid,
      withGrid = _ref$withGrid === void 0 ? false : _ref$withGrid,
      _ref$showArrows = _ref.showArrows,
      showArrows = _ref$showArrows === void 0 ? true : _ref$showArrows,
      _ref$showBookmark = _ref.showBookmark,
      showBookmark = _ref$showBookmark === void 0 ? true : _ref$showBookmark,
      NoAssetsComponent = _ref.NoAssetsComponent,
      _ref$showSkills = _ref.showSkills,
      showSkills = _ref$showSkills === void 0 ? true : _ref$showSkills,
      showProvider = _ref.showProvider,
      sponsoringDetails = _ref.sponsoringDetails,
      _ref$showLock = _ref.showLock,
      showLock = _ref$showLock === void 0 ? false : _ref$showLock,
      _ref$playlistOrientat = _ref.playlistOrientation,
      playlistOrientation = _ref$playlistOrientat === void 0 ? 'portrait' : _ref$playlistOrientat,
      _ref$playlistView = _ref.playlistView,
      playlistView = _ref$playlistView === void 0 ? 'list' : _ref$playlistView,
      _ref$playlistLayout = _ref.playlistLayout,
      playlistLayout = _ref$playlistLayout === void 0 ? AssetTileLayout.gridItem : _ref$playlistLayout,
      strategyType = _ref.strategyType,
      videoFallbackImage = _ref.videoFallbackImage,
      _ref$fixedArrowPositi = _ref.fixedArrowPosition,
      fixedArrowPosition = _ref$fixedArrowPositi === void 0 ? true : _ref$fixedArrowPositi,
      _ref$zeroArrowPositio = _ref.zeroArrowPosition,
      zeroArrowPosition = _ref$zeroArrowPositio === void 0 ? false : _ref$zeroArrowPositio,
      renderAddToBookmarkButton = _ref.renderAddToBookmarkButton,
      title = _ref.title,
      _ref$tileWidth = _ref.tileWidth,
      tileWidth = _ref$tileWidth === void 0 ? 250 : _ref$tileWidth,
      slidesPerPageSettings = _ref.slidesPerPageSettings,
      _ref$hideDummies = _ref.hideDummies,
      hideDummies = _ref$hideDummies === void 0 ? false : _ref$hideDummies,
      dataTest = _ref.dataTest,
      withLQIP = _ref.withLQIP,
      withNativeLoading = _ref.withNativeLoading,
      _ref$withScrollbar = _ref.withScrollbar,
      withScrollbar = _ref$withScrollbar === void 0 ? true : _ref$withScrollbar,
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
      onInView = _ref.onInView,
      arrowPrevClass = _ref.arrowPrevClass,
      arrowNextClass = _ref.arrowNextClass;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      scrolled = _useState2[0],
      scrolledSet = _useState2[1];

  var _useWindowDimensions = useWindowDimensions(),
      breakpoint = _useWindowDimensions.breakpoint;

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      prevSlideIndex = _useState4[0],
      setPrevSlideIndex = _useState4[1];

  var assetsPerSlideWithHook = breakpoint >= breakpoints.lg ? slidesPerPageSettings.desktop : breakpoint >= breakpoints.md ? slidesPerPageSettings.tablet : slidesPerPageSettings.mobileBig;

  var _useInView = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50px 0px'
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  useEffect(function () {
    if (inView && onInView !== undefined && !loading && assets.length > 0) {
      onInView({
        context: context
      });
    }
  }, [inView, loading, onInView, context, assets]);

  if (!assets || assets.length < 1) {
    return !loading ? NoAssetsComponent : null;
  }

  var handleSlideChange = function handleSlideChange(assetsPerSlide) {
    return function (nextSlideIndex) {
      scrolledSet(false);
      var direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous';
      var slideIndex = nextSlideIndex / assetsPerSlide;
      setPrevSlideIndex(nextSlideIndex);
      var assetsInSlide = assets.slice(slideIndex * assetsPerSlide, slideIndex * assetsPerSlide + assetsPerSlide);
      onSlideChange === null || onSlideChange === void 0 ? void 0 : onSlideChange({
        assets: assetsInSlide,
        direction: direction,
        assetAmount: assetsPerSlide,
        pageNumber: slideIndex,
        context: context
      });
    };
  };

  var handleAssetClick = function handleAssetClick(assetsPerSlide) {
    return function (event, asset, index, pageNumber) {
      if (scrolled) {
        event.preventDefault();
      }

      if (!asset.locked && onAssetClick) {
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
    return function (event, asset, index, pageNumber) {
      if (onLockClick) {
        onLockClick({
          asset: asset,
          index: index,
          assetsPerSlide: assetsPerSlide,
          pageNumber: pageNumber,
          context: context
        });
      }
    };
  };

  var tileSettings = {
    loading: loading,
    fontSize: 'sm',
    sponsoringDetails: undefined,
    withEllipsis: true
  };
  var carouselOrientation = playlistLayout === AssetTileLayout.gridItem ? 'portrait' : 'landscape';
  var isGridLayout = playlistLayout === AssetTileLayout.gridItem;

  var renderAsset = function renderAsset(assetsPerSlide) {
    return function (asset, index) {
      var slideIndex = Math.floor(index / assetsPerSlide);
      var isDummyTile = !withOverflow && !asset.description;

      var assetTileAsset = _objectSpread({}, asset);

      var Wrapper = sponsoringDetails !== null && sponsoringDetails !== void 0 && sponsoringDetails.isSponsored ? TileFragment : TileWrapper;
      var assetsWithSponsor = assetTileAsset === null || assetTileAsset === void 0 ? void 0 : assetTileAsset.sponsored;
      var loading = tileSettings.loading || isDummyTile;
      var disabled = disabledAssetIndexes.findIndex(function (x) {
        return x === index;
      }) !== -1;
      return React.createElement(Wrapper, {
        hideDummy: isDummyTile && hideDummies && !scrolled,
        "aria-rowindex": index,
        key: "AssetTile-".concat(index),
        withLabels: assetsWithSponsor
      }, React.createElement(AssetTile, _extends({}, tileSettings, {
        showProvider: showProvider,
        showSkills: showSkills,
        badges: playlistView === 'collection' && (asset === null || asset === void 0 ? void 0 : asset.__typename) && [{
          name: asset === null || asset === void 0 ? void 0 : asset.__typename,
          actionType: 'prominent'
        }] || [],
        videoFallbackImage: videoFallbackImage,
        isCollection: playlistView === 'collection',
        orientation: carouselOrientation,
        sponsoringDetails: undefined,
        showBookmark: showBookmark,
        showLock: showLock,
        isDisabled: disabled,
        assetView: playlistView,
        assetIndex: index,
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
        asset: assetTileAsset,
        lazyLoad: lazyLoad,
        inView: inView
      })));
    };
  };

  var renderAssets = function renderAssets() {
    if (!promoted) return [].concat(_toConsumableArray(assets.map(renderAsset(assetsPerSlideWithHook))), [React.createElement("div", {
      key: "right-spacer"
    })]);
    var promotedElement = promoted ? [promoted] : [];
    return [].concat(_toConsumableArray(assets.slice(0, promotedIndex).map(renderAsset(assetsPerSlideWithHook))), promotedElement, _toConsumableArray(assets.slice(promotedIndex).map(renderAsset(assetsPerSlideWithHook))), [React.createElement("div", {
      key: "right-spacer"
    })]);
  };

  return React.createElement(CarouselWrapper, _extends({
    tileMargin: tileMargin,
    isGridLayout: isGridLayout,
    tileWidth: tileWidth,
    setFixedWidth: (slidesPerPageSettings === null || slidesPerPageSettings === void 0 ? void 0 : slidesPerPageSettings.desktop) >= 4 || assets.length < 4,
    ref: ref,
    key: "Carousel-".concat(assets.length)
  }, typeof dataTest !== 'undefined' && {
    'data-test': dataTest
  }), sponsoringDetails ? React.createElement(AssetSponsoring, {
    layout: "carousel",
    sponsoringDetails: sponsoringDetails
  }) : null, React.createElement(ScrollSnapSlider, {
    slideWidth: tileWidth,
    isGridLayout: isGridLayout,
    withGrid: withGrid,
    showScrollbar: withScrollbar && assets.length > 3,
    onScrollStart: function onScrollStart() {
      if (!scrolled) scrolledSet(true);
    },
    onScrollEnd: handleSlideChange(assetsPerSlideWithHook),
    showArrows: showArrows && assets.length > 3,
    arrowDataTest: "scroll-snap-slider-arrow",
    arrowPrevClass: arrowPrevClass,
    arrowNextClass: arrowNextClass,
    fixedArrowPosition: fixedArrowPosition,
    zeroArrowPosition: zeroArrowPosition,
    slidesPerPageSettings: slidesPerPageSettings,
    title: title
  }, renderAssets()));
};
//# sourceMappingURL=ScrollAssetCarousel.js.map