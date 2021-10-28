var _icons;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { IconArticle, IconOnlineCourse, IconSaveToPlaylist, IconAsset, IconAssetTime, IconPercentage, StyleguideVideoThin, StyleguidePodcast } from "../../../../svgs";
export var AssetTileIcons;

(function (AssetTileIcons) {
  AssetTileIcons["Video"] = "Video";
  AssetTileIcons["Article"] = "Article";
  AssetTileIcons["Podcast"] = "Podcast";
  AssetTileIcons["Online"] = "Online course";
  AssetTileIcons["Playlist"] = "Playlist";
  AssetTileIcons["Webinar"] = "Webinar";
})(AssetTileIcons || (AssetTileIcons = {}));

var icons = (_icons = {}, _defineProperty(_icons, AssetTileIcons.Video, React.createElement(StyleguideVideoThin, null)), _defineProperty(_icons, AssetTileIcons.Article, React.createElement(IconArticle, null)), _defineProperty(_icons, AssetTileIcons.Podcast, React.createElement(StyleguidePodcast, null)), _defineProperty(_icons, AssetTileIcons.Online, React.createElement(IconOnlineCourse, null)), _defineProperty(_icons, AssetTileIcons.Playlist, React.createElement(IconSaveToPlaylist, null)), _defineProperty(_icons, AssetTileIcons.Webinar, React.createElement(StyleguideVideoThin, null)), _icons);

var getIconByTypeName = function getIconByTypeName(typeName) {
  var iconsComponent = icons[typeName];

  if (!iconsComponent) {
    return React.createElement(IconArticle, null);
  }

  return icons[typeName];
};

export var getMetaItemList = function getMetaItemList(_ref) {
  var duration = _ref.duration,
      type = _ref.type,
      completedStatus = _ref.completedStatus,
      numberOfAssets = _ref.numberOfAssets;
  var payload = [];

  if (type) {
    payload.push({
      text: type,
      icon: getIconByTypeName(type)
    });
  }

  if (numberOfAssets) {
    payload.push({
      text: numberOfAssets,
      icon: React.createElement(IconAsset, null)
    });
  }

  if (duration) {
    payload.push({
      text: "".concat(duration),
      icon: React.createElement(IconAssetTime, null)
    });
  }

  if (completedStatus) {
    payload.push({
      text: completedStatus,
      icon: React.createElement(IconPercentage, null)
    });
  }

  return payload;
};
//# sourceMappingURL=icons.js.map