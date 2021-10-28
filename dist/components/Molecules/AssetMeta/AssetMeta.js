import React from 'react';
import { IconButton } from "../../Atoms/Button";
import { Card } from "../../Atoms/Card";
import { Icon } from "../../Atoms/Icon";
import { Tag } from "../../Atoms/Tag";
import { FlexBox, FlexItem } from "../../Helper/FlexBox";
import { FeatureList } from "../FeatureList";
import { IconBookmark, IconBookmarkActive, IconCheckmarkCircle, IconCheckmarkCircleOutlined, StyleguideExpand, IconSaveToPlaylist, IconShare } from '@excelwithbusiness/webmobile-svg-library';
import { CompetencyText, CompleteButton, IconsWrapper, LaunchButton } from "./AssetMeta.styled";
import { isNonEmptyString } from "../../Helper/String";
import { EmbeddedWrapper } from "../../Atoms/EmbeddedPlayer";
export var AssetMeta = function AssetMeta(_ref) {
  var _ref$isShareInteracti = _ref.isShareInteraction,
      isShareInteraction = _ref$isShareInteracti === void 0 ? false : _ref$isShareInteracti,
      _ref$isBookmarkIntera = _ref.isBookmarkInteraction,
      isBookmarkInteraction = _ref$isBookmarkIntera === void 0 ? false : _ref$isBookmarkIntera,
      _ref$isCreatePlaylist = _ref.isCreatePlaylistInteraction,
      isCreatePlaylistInteraction = _ref$isCreatePlaylist === void 0 ? false : _ref$isCreatePlaylist,
      _ref$isLandingPage = _ref.isLandingPage,
      isLandingPage = _ref$isLandingPage === void 0 ? false : _ref$isLandingPage,
      _ref$hideLaunched = _ref.hideLaunched,
      hideLaunched = _ref$hideLaunched === void 0 ? false : _ref$hideLaunched,
      bookmarked = _ref.bookmarked,
      completed = _ref.completed,
      shareHandler = _ref.shareHandler,
      bookmarkHandler = _ref.bookmarkHandler,
      savePlaylistHandler = _ref.savePlaylistHandler,
      launchHandler = _ref.launchHandler,
      completedHandler = _ref.completedHandler,
      buttonTextLaunch = _ref.buttonTextLaunch,
      buttonTextComplete = _ref.buttonTextComplete,
      list = _ref.list,
      competencyCopy = _ref.competencyCopy,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? [] : _ref$tags,
      _ref$chatSrc = _ref.chatSrc,
      chatSrc = _ref$chatSrc === void 0 ? '' : _ref$chatSrc,
      chatMaxHeight = _ref.chatMaxHeight;
  return React.createElement(FlexBox, {
    flexDirection: "column",
    alignItems: "center"
  }, React.createElement(IconsWrapper, null, isBookmarkInteraction && React.createElement(FlexItem, {
    padding: true
  }, React.createElement(IconButton, {
    round: true,
    size: "md",
    weight: "bold",
    onClick: bookmarkHandler,
    actionType: "darkBorder",
    height: 45,
    width: 45
  }, bookmarked ? React.createElement(IconBookmarkActive, null) : React.createElement(IconBookmark, null))), isShareInteraction && React.createElement(FlexItem, {
    padding: true
  }, React.createElement(IconButton, {
    round: true,
    size: "md",
    weight: "bold",
    onClick: shareHandler,
    actionType: "darkBorder",
    height: 45,
    width: 45
  }, React.createElement(IconShare, null))), isCreatePlaylistInteraction && React.createElement(FlexItem, {
    padding: true
  }, React.createElement(IconButton, {
    round: true,
    size: "md",
    weight: "bold",
    onClick: savePlaylistHandler,
    actionType: "darkBorder",
    height: 45,
    width: 45
  }, React.createElement(IconSaveToPlaylist, null)))), isNonEmptyString(chatSrc) ? React.createElement(EmbeddedWrapper, {
    embedUrl: chatSrc,
    aspect: "1/4",
    maxHeight: chatMaxHeight
  }) : React.createElement(Card, {
    elevation: 1,
    shape: "rounded-small",
    padding: "lg"
  }, !hideLaunched && React.createElement(LaunchButton, {
    weight: "bold",
    curved: true,
    fullWidth: true,
    onClick: launchHandler
  }, React.createElement(Icon, {
    width: 20,
    height: 20,
    color: "white"
  }, React.createElement(StyleguideExpand, {
    fill: 'white'
  })), buttonTextLaunch), !isLandingPage && React.createElement(CompleteButton, {
    color: "primary",
    weight: "bold",
    curved: true,
    actionType: "outlined",
    fullWidth: true,
    onClick: completedHandler
  }, React.createElement(Icon, {
    width: 25,
    height: 25,
    color: "primary"
  }, completed ? React.createElement(IconCheckmarkCircle, null) : React.createElement(IconCheckmarkCircleOutlined, null)), buttonTextComplete), list && React.createElement(FeatureList, {
    list: list
  }), React.createElement(CompetencyText, {
    padding: "sm 0"
  }, competencyCopy), React.createElement(FlexBox, {
    flexWrap: "wrap"
  }, tags.map(function (_ref2, idx) {
    var text = _ref2.text;
    return React.createElement(FlexItem, {
      key: "Tag-".concat(idx)
    }, text && React.createElement(Tag, {
      color: "primary",
      marginBottom: true,
      marginRight: true,
      padding: {
        left: 'lg',
        right: 'lg'
      },
      text: text,
      weight: "semibold"
    }));
  }))));
};
AssetMeta.displayName = 'AssetMeta';
//# sourceMappingURL=AssetMeta.js.map