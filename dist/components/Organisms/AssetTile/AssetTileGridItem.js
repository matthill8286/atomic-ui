function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { AssetCard, AssetFeatured, AssetImage, AssetTileContent, AssetTileMeta, AssetSchedule, StyledBookmarkPlaceholder } from "./elements";
import { AssetLocked } from "./elements/AssetLocked";
import { isPortrait, StyledContentContainer, StyledDivider, StyledHeadingContainer, StyledResponsiveContainer, StyledTile, StyledAdditionalContent } from "./AssetTile.styled";
import { AssetStrategy, AssetTileLayout } from "./AssetTile.interface";
import { getMetaItemList } from "./helpers/icons";
import { AssetSponsoring } from "./elements/AssetSponsoring";
import { ShowMore } from "../../Atoms/ShowMore";
import { CopyText } from "../../Atoms/Typography";
var DEFAULT_LINE_LIMIT = 2;
export var AssetTileGridItem = function AssetTileGridItem(_ref) {
  var _asset$type, _provider$name;

  var _ref$badgeActionType = _ref.badgeActionType,
      badgeActionType = _ref$badgeActionType === void 0 ? 'prominent' : _ref$badgeActionType,
      _ref$assetView = _ref.assetView,
      assetView = _ref$assetView === void 0 ? 'list' : _ref$assetView,
      _ref$strategyType = _ref.strategyType,
      strategyType = _ref$strategyType === void 0 ? AssetStrategy.none : _ref$strategyType,
      children = _ref.children,
      color = _ref.color,
      _ref$elevation = _ref.elevation,
      elevation = _ref$elevation === void 0 ? 0 : _ref$elevation,
      _ref$elevationHover = _ref.elevationHover,
      elevationHover = _ref$elevationHover === void 0 ? 0 : _ref$elevationHover,
      isCollection = _ref.isCollection,
      _ref$isOpenAsset = _ref.isOpenAsset,
      isOpenAsset = _ref$isOpenAsset === void 0 ? false : _ref$isOpenAsset,
      _ref$headlineLimitLin = _ref.headlineLimitLines,
      headlineLimitLines = _ref$headlineLimitLin === void 0 ? DEFAULT_LINE_LIMIT : _ref$headlineLimitLin,
      _ref$limitContentLine = _ref.limitContentLines,
      limitContentLines = _ref$limitContentLine === void 0 ? DEFAULT_LINE_LIMIT : _ref$limitContentLine,
      assetSponsoring = _ref.assetSponsoring,
      icon = _ref.icon,
      mainLink = _ref.mainLink,
      badges = _ref.badges,
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
      _ref$showProvider = _ref.showProvider,
      showProvider = _ref$showProvider === void 0 ? true : _ref$showProvider,
      _ref$showFeatured = _ref.showFeatured,
      showFeatured = _ref$showFeatured === void 0 ? false : _ref$showFeatured,
      isDisabled = _ref.isDisabled,
      noBorder = _ref.noBorder,
      _ref$lazyloadLowQuali = _ref.lazyloadLowQuality,
      lazyloadLowQuality = _ref$lazyloadLowQuali === void 0 ? false : _ref$lazyloadLowQuali,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? AssetTileLayout.gridItem : _ref$layout,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      sponsoringDetails = _ref.sponsoringDetails,
      asset = _ref.asset,
      renderAddToBookmarkButton = _ref.renderAddToBookmarkButton,
      showMoreText = _ref.showMoreText,
      showLessText = _ref.showLessText,
      showMoreNumOfLines = _ref.showMoreNumOfLines,
      showMoreAlignment = _ref.showMoreAlignment,
      fadeOutColor = _ref.fadeOutColor,
      lazyLoad = _ref.lazyLoad,
      roundImages = _ref.roundImages,
      onClick = _ref.onClick,
      onCompleteClick = _ref.onCompleteClick,
      onPictureClick = _ref.onPictureClick,
      onHeadingClick = _ref.onHeadingClick,
      onLockClick = _ref.onLockClick,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
      videoFallbackImage = _ref.videoFallbackImage,
      rest = _objectWithoutProperties(_ref, ["badgeActionType", "assetView", "strategyType", "children", "color", "elevation", "elevationHover", "isCollection", "isOpenAsset", "headlineLimitLines", "limitContentLines", "assetSponsoring", "icon", "mainLink", "badges", "competencyLabel", "showBadges", "showBookmark", "showLock", "showSkills", "showAssetMeta", "showProvider", "showFeatured", "isDisabled", "noBorder", "lazyloadLowQuality", "layout", "loading", "sponsoringDetails", "asset", "renderAddToBookmarkButton", "showMoreText", "showLessText", "showMoreNumOfLines", "showMoreAlignment", "fadeOutColor", "lazyLoad", "roundImages", "onClick", "onCompleteClick", "onPictureClick", "onHeadingClick", "onLockClick", "orientation", "videoFallbackImage"]);

  if (!asset) {
    return null;
  }

  var history = useHistory();
  var ref = useRef(null);
  var title = asset.title,
      image = asset.image,
      provider = asset.provider,
      duration = asset.duration,
      type = asset.type,
      interaction = asset.interaction,
      id = asset.id;
  var metaInputs = isCollection ? {
    duration: asset === null || asset === void 0 ? void 0 : asset.totalAssetDuration,
    type: null,
    completedStatus: asset === null || asset === void 0 ? void 0 : asset.completionPercentage,
    numberOfAssets: asset === null || asset === void 0 ? void 0 : asset.numberOfAssets
  } : isOpenAsset ? {
    duration: asset === null || asset === void 0 ? void 0 : asset.eventDate,
    type: type === null || type === void 0 ? void 0 : type.name,
    completedStatus: null,
    numberOfAssets: null
  } : {
    duration: duration,
    type: type === null || type === void 0 ? void 0 : type.name,
    completedStatus: asset === null || asset === void 0 ? void 0 : asset.completionPercentage
  };
  var metaItems = getMetaItemList(_objectSpread({}, metaInputs));
  var useOverride = (asset === null || asset === void 0 ? void 0 : (_asset$type = asset.type) === null || _asset$type === void 0 ? void 0 : _asset$type.name) === 'Video' && !(asset !== null && asset !== void 0 && asset.image);
  var imageDimensions = orientation === 'portrait' ? {
    height: '200px',
    width: '100%',
    minHeight: '200px',
    maxWidth: '100%'
  } : {
    height: '300px',
    width: '100%',
    minHeight: '300px',
    maxWidth: '100%'
  };
  var onTileClick = React.useCallback(function (event) {
    if (loading || isDisabled) {
      return null;
    }

    if (typeof onClick === 'function') {
      onClick(event);
    }

    if (mainLink) {
      if (mainLink.to) return history.push(mainLink.to);
      if (mainLink.href) return window.location.href = mainLink.href;
    }
  }, [history, mainLink, onClick]);
  var onLockedClick = React.useCallback(function (event) {
    if (loading) {
      return null;
    }

    if (typeof onLockClick === 'function') {
      onLockClick(event);
    }
  }, [onLockClick]);

  var onTileClickHandler = function onTileClickHandler(event) {
    return asset !== null && asset !== void 0 && asset.locked ? onLockedClick(event) : onTileClick(event);
  };

  var assetMediaChildren = React.createElement(React.Fragment, null, React.createElement(StyledBookmarkPlaceholder, null, showBookmark && renderAddToBookmarkButton && renderAddToBookmarkButton({
    title: title,
    provider: provider,
    duration: duration,
    type: type,
    completed: interaction === null || interaction === void 0 ? void 0 : interaction.completed,
    bookmarked: interaction === null || interaction === void 0 ? void 0 : interaction.bookmarked,
    id: id
  })), showLock && !loading && React.createElement(AssetLocked, {
    color: "grey4",
    locked: asset === null || asset === void 0 ? void 0 : asset.locked
  }));
  return React.createElement(StyledTile, _extends({
    ref: ref,
    orientation: orientation
  }, rest), React.createElement(AssetCard, {
    elevationHover: elevationHover,
    isDisabled: (asset === null || asset === void 0 ? void 0 : asset.locked) || isDisabled,
    badges: badges,
    noBorder: noBorder,
    borderColor: "grey2"
  }, React.createElement(StyledResponsiveContainer, {
    orientation: orientation,
    "aria-orientation": "horizontal"
  }, React.createElement(AssetImage, _extends({
    lazyLoad: lazyLoad,
    loading: !!loading,
    assetImage: useOverride ? videoFallbackImage : image,
    rounded: roundImages,
    onPictureClick: onTileClickHandler,
    title: title
  }, imageDimensions), showFeatured && !loading && React.createElement(AssetFeatured, {
    loading: loading,
    featuredLabel: asset === null || asset === void 0 ? void 0 : asset.featureLabel,
    color: "grey5"
  }), strategyType === AssetStrategy.timebox && !loading && React.createElement(AssetSchedule, {
    timebox: asset === null || asset === void 0 ? void 0 : asset.timebox,
    color: "white"
  })), isPortrait(orientation) && React.createElement(StyledDivider, {
    color: "primary",
    height: "xs"
  }), React.createElement(StyledContentContainer, {
    "aria-orientation": "horizontal"
  }, assetMediaChildren, !loading && (assetSponsoring === null || assetSponsoring === void 0 ? void 0 : assetSponsoring.isSponsored) && React.createElement(AssetSponsoring, {
    layout: "tile",
    sponsoringDetails: assetSponsoring
  }), React.createElement(StyledHeadingContainer, null, React.createElement(AssetTileContent, {
    loading: !!loading,
    provider: (_provider$name = provider === null || provider === void 0 ? void 0 : provider.name) !== null && _provider$name !== void 0 ? _provider$name : undefined,
    isDisabled: isDisabled,
    isCompact: !showProvider,
    description: title,
    onHeadingClick: onTileClickHandler,
    skills: asset === null || asset === void 0 ? void 0 : asset.competencies,
    showSkills: showSkills,
    limitContentLines: limitContentLines
  })), !isPortrait(orientation) && React.createElement(StyledAdditionalContent, null, React.createElement(ShowMore, {
    lineHeight: 19,
    fontSize: 14,
    fontColor: "grey5",
    loading: loading,
    fadeOutBackgroundColor: fadeOutColor,
    labelAlignment: showMoreAlignment,
    fadeOutHeight: 35,
    numOfLines: showMoreNumOfLines || 4,
    showMoreText: showMoreText || 'Show more',
    showLessText: showLessText || 'Show less'
  }, (asset === null || asset === void 0 ? void 0 : asset.description) && React.createElement(CopyText, {
    tag: "p",
    padding: "0",
    margin: "xxs 0",
    color: "grey5",
    display: "flex"
  }, asset === null || asset === void 0 ? void 0 : asset.description.replace(/(<([^>]+)>)/gi, '')))), children, showAssetMeta && React.createElement(AssetTileMeta, {
    isCompact: isCollection,
    loading: !!loading,
    alignSelf: "flex-end",
    isDisabled: isDisabled,
    onClick: onTileClickHandler,
    metaItems: metaItems
  })))));
};
//# sourceMappingURL=AssetTileGridItem.js.map