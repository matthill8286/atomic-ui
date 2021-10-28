function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { AssetTileLayout } from "./AssetTile.interface";
import { useLayoutComponent } from "./helpers/layout";
import { Reduced } from "./AssetTilePresetProps";
var DEFAULT_LINE_LIMIT = 2;
export var AssetTile = function AssetTile(_ref) {
  var badges = _ref.badges,
      badgeActionType = _ref.badgeActionType,
      noBorder = _ref.noBorder,
      borderColor = _ref.borderColor,
      fullHeight = _ref.fullHeight,
      _ref$isCompact = _ref.isCompact,
      isCompact = _ref$isCompact === void 0 ? false : _ref$isCompact,
      _ref$isMobileView = _ref.isMobileView,
      isMobileView = _ref$isMobileView === void 0 ? false : _ref$isMobileView,
      expanded = _ref.expanded,
      fontSize = _ref.fontSize,
      inView = _ref.inView,
      strategyType = _ref.strategyType,
      assetIndex = _ref.assetIndex,
      _ref$assetView = _ref.assetView,
      assetView = _ref$assetView === void 0 ? 'list' : _ref$assetView,
      assetSponsoring = _ref.assetSponsoring,
      children = _ref.children,
      color = _ref.color,
      _ref$elevation = _ref.elevation,
      elevation = _ref$elevation === void 0 ? 0 : _ref$elevation,
      _ref$elevationHover = _ref.elevationHover,
      elevationHover = _ref$elevationHover === void 0 ? 0 : _ref$elevationHover,
      _ref$headlineLimitLin = _ref.headlineLimitLines,
      headlineLimitLines = _ref$headlineLimitLin === void 0 ? DEFAULT_LINE_LIMIT : _ref$headlineLimitLin,
      _ref$limitContentLine = _ref.limitContentLines,
      limitContentLines = _ref$limitContentLine === void 0 ? DEFAULT_LINE_LIMIT : _ref$limitContentLine,
      mainLink = _ref.mainLink,
      competencyLabel = _ref.competencyLabel,
      _ref$showBadges = _ref.showBadges,
      showBadges = _ref$showBadges === void 0 ? true : _ref$showBadges,
      _ref$showBookmark = _ref.showBookmark,
      showBookmark = _ref$showBookmark === void 0 ? true : _ref$showBookmark,
      _ref$showLock = _ref.showLock,
      showLock = _ref$showLock === void 0 ? false : _ref$showLock,
      _ref$showSkills = _ref.showSkills,
      showSkills = _ref$showSkills === void 0 ? true : _ref$showSkills,
      _ref$showAssetMeta = _ref.showAssetMeta,
      showAssetMeta = _ref$showAssetMeta === void 0 ? true : _ref$showAssetMeta,
      _ref$showFeatured = _ref.showFeatured,
      showFeatured = _ref$showFeatured === void 0 ? false : _ref$showFeatured,
      _ref$showOptions = _ref.showOptions,
      showOptions = _ref$showOptions === void 0 ? false : _ref$showOptions,
      _ref$showProvider = _ref.showProvider,
      showProvider = _ref$showProvider === void 0 ? true : _ref$showProvider,
      showInteractions = _ref.showInteractions,
      showMoreText = _ref.showMoreText,
      showLessText = _ref.showLessText,
      showLikes = _ref.showLikes,
      showMoreNumOfLines = _ref.showMoreNumOfLines,
      showImage = _ref.showImage,
      showMoreAlignment = _ref.showMoreAlignment,
      fadeOutColor = _ref.fadeOutColor,
      sponsoringDetails = _ref.sponsoringDetails,
      _ref$lazyloadLowQuali = _ref.lazyloadLowQuality,
      lazyloadLowQuality = _ref$lazyloadLowQuali === void 0 ? false : _ref$lazyloadLowQuali,
      renderAddToBookmarkButton = _ref.renderAddToBookmarkButton,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$isOpenAsset = _ref.isOpenAsset,
      isOpenAsset = _ref$isOpenAsset === void 0 ? false : _ref$isOpenAsset,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? AssetTileLayout.auto : _ref$layout,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
      asset = _ref.asset,
      lazyLoad = _ref.lazyLoad,
      onClick = _ref.onClick,
      onLockClick = _ref.onLockClick,
      onCompleteClick = _ref.onCompleteClick,
      roundImages = _ref.roundImages,
      withLQIP = _ref.withLQIP,
      withEllipsis = _ref.withEllipsis,
      withNativeLoading = _ref.withNativeLoading,
      videoFallbackImage = _ref.videoFallbackImage;
  var LayoutComponent = useLayoutComponent(layout);

  if (!asset && !loading) {
    return null;
  }

  var baseTileSettings = {
    loading: loading,
    fontSize: 'xs' || fontSize,
    sponsoringDetails: undefined,
    withEllipsis: true,
    headlineLimitLines: 2,
    showAssetMeta: true,
    showBookmark: showBookmark,
    showLock: showLock || false,
    showSkills: true
  };
  var isCollection = assetView === 'collection';
  var tileSettings = isCollection ? _objectSpread({}, Reduced) : _objectSpread({}, baseTileSettings);
  return React.createElement(LayoutComponent, _extends({
    elevationHover: elevationHover,
    expanded: expanded,
    fullHeight: fullHeight,
    asset: asset,
    color: color,
    badges: badges,
    mainLink: mainLink,
    competencyLabel: competencyLabel,
    inView: inView,
    assetView: assetView,
    strategyType: strategyType,
    isCompact: isCompact,
    isCollection: isCollection,
    isMobileView: isMobileView,
    lazyLoad: lazyLoad,
    loading: loading,
    noBorder: noBorder,
    roundImages: roundImages,
    assetSponsoring: assetSponsoring,
    borderColor: borderColor,
    limitContentLines: limitContentLines,
    onClick: onClick,
    onCompleteClick: onCompleteClick,
    onLockClick: onLockClick,
    videoFallbackImage: videoFallbackImage,
    showInteractions: showInteractions,
    showFeatured: showFeatured,
    showProvider: showProvider,
    isOpenAsset: isOpenAsset,
    showImage: showImage,
    showLikes: showLikes,
    showMoreText: showMoreText,
    showLessText: showLessText,
    showMoreAlignment: showMoreAlignment,
    showMoreNumOfLines: showMoreNumOfLines,
    fadeOutColor: fadeOutColor,
    renderAddToBookmarkButton: renderAddToBookmarkButton,
    showOptions: showOptions,
    orientation: orientation,
    sponsoringDetails: sponsoringDetails,
    withLQIP: withLQIP,
    withNativeLoading: withNativeLoading
  }, tileSettings), children);
};
//# sourceMappingURL=AssetTile.js.map