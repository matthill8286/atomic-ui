import React from 'react';
import { useHistory } from 'react-router-dom';
import { NativeLazyLoadOptions } from "../../Atoms/Picture";
import { Card } from "../../Atoms/Card";
import { AssetTileCompact as CompactAssetTile, AssetTileCompactElement } from "../AssetTileCompact";
import { IconButton } from "../../Atoms/Button";
import { Icon } from "../../Atoms/Icon";
import { StyleguideBookmarkActive, StyleguideCheckmarkCircle } from "../../../svgs";
export var AssetTileCompactTile = function AssetTileCompactTile(_ref) {
  var _competencies$, _asset$type;

  var competencyLabel = _ref.competencyLabel,
      _ref$placeCard = _ref.placeCard,
      placeCard = _ref$placeCard === void 0 ? false : _ref$placeCard,
      _ref$showImage = _ref.showImage,
      showImage = _ref$showImage === void 0 ? true : _ref$showImage,
      _ref$showInteractions = _ref.showInteractions,
      showInteractions = _ref$showInteractions === void 0 ? true : _ref$showInteractions,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      isDisabled = _ref.isDisabled,
      asset = _ref.asset,
      mainLink = _ref.mainLink,
      onClick = _ref.onClick,
      onLockClick = _ref.onLockClick;

  if (!asset || !Object.keys(asset).length) {
    return null;
  }

  var history = useHistory();
  var title = asset.title,
      image = asset.image,
      provider = asset.provider,
      duration = asset.duration,
      competencies = asset.competencies,
      type = asset.type,
      interaction = asset.interaction,
      id = asset.id;
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

  var item = React.createElement(CompactAssetTile, {
    loading: loading,
    showImage: showImage,
    assetImage: image,
    title: title,
    onClick: onTileClickHandler,
    lazyLoadImage: NativeLazyLoadOptions.Eager
  }, React.createElement(AssetTileCompactElement, {
    title: asset === null || asset === void 0 ? void 0 : asset.title,
    provider: provider === null || provider === void 0 ? void 0 : provider.name,
    competency: (competencies === null || competencies === void 0 ? void 0 : (_competencies$ = competencies[0]) === null || _competencies$ === void 0 ? void 0 : _competencies$.text) || competencyLabel,
    type: asset === null || asset === void 0 ? void 0 : (_asset$type = asset.type) === null || _asset$type === void 0 ? void 0 : _asset$type.name,
    description: asset === null || asset === void 0 ? void 0 : asset.description,
    loading: loading,
    showInteractions: showInteractions,
    iconsComponent: React.createElement(React.Fragment, null, (interaction === null || interaction === void 0 ? void 0 : interaction.bookmarked) && React.createElement(IconButton, {
      isFlat: true,
      actionType: "ghost"
    }, React.createElement(Icon, {
      width: 20,
      height: 20,
      color: "grey5"
    }, React.createElement(StyleguideBookmarkActive, {
      height: "sm",
      width: "sm",
      fill: "grey2"
    }))), (interaction === null || interaction === void 0 ? void 0 : interaction.completed.status) && React.createElement(IconButton, {
      isFlat: true,
      actionType: "ghost"
    }, React.createElement(Icon, {
      width: 20,
      height: 20,
      color: "grey5"
    }, React.createElement(StyleguideCheckmarkCircle, null))))
  }));
  return React.createElement(React.Fragment, null, placeCard ? React.createElement(Card, {
    elevation: 0,
    noBorder: [],
    padding: "xs",
    shape: "rounded-xl",
    surface: "white"
  }, item) : item);
};
//# sourceMappingURL=AssetTileCompactTile.js.map