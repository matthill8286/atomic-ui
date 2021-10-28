function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { Link } from "../../Atoms/Link";
import { Section } from "../../Atoms/Section";
import { CopyText } from "../../Atoms/Typography";
import { Breadcrumb } from "../../Molecules/Breadcrumb";
import { IconArrow } from '@excelwithbusiness/webmobile-svg-library';
import { isSaiyanTheme } from "../../../utils/helper";
import { StyledAssetTileMetaWrapper, StyledBacklinkWrapper, StyledBreadcrumbWrapper, StyledContentWrapper, StyledHeadingArticle, StyledPlaylistStage, StyledPlaylistStageGrid, StyledPlaylistStageTitle, StyledProgressWrapper } from "./PlaylistStage.styled";
import { AssetTileMeta } from "../AssetTile/elements";
import { getMetaItemList } from "../AssetTile/helpers/icons";
import { ProgressBar } from "../../Atoms/ProgressBar";
export var PlaylistStage = function PlaylistStage(_ref) {
  var playlist = _ref.playlist,
      backlink = _ref.backlink,
      breadcrumbPath = _ref.breadcrumbPath,
      colors = _ref.colors,
      _ref$headingColor = _ref.headingColor,
      headingColor = _ref$headingColor === void 0 ? 'selected' : _ref$headingColor,
      height = _ref.height,
      paddingBottom = _ref.paddingBottom,
      paddingTop = _ref.paddingTop,
      _ref$withImage = _ref.withImage,
      withImage = _ref$withImage === void 0 ? true : _ref$withImage,
      _ref$withMetaItems = _ref.withMetaItems,
      withMetaItems = _ref$withMetaItems === void 0 ? true : _ref$withMetaItems,
      homeLink = _ref.homeLink,
      shape = _ref.shape,
      rest = _objectWithoutProperties(_ref, ["playlist", "backlink", "breadcrumbPath", "colors", "headingColor", "height", "paddingBottom", "paddingTop", "withImage", "withMetaItems", "homeLink", "shape"]);

  var name = playlist.name,
      image = playlist.image,
      strategy = playlist.strategy,
      totalAssetDuration = playlist.totalAssetDuration,
      completionPercentage = playlist.completionPercentage,
      numberOfAssets = playlist.numberOfAssets,
      description = playlist.description;
  var metaItems = getMetaItemList({
    duration: totalAssetDuration,
    type: undefined,
    completedStatus: completionPercentage,
    numberOfAssets: numberOfAssets
  });
  var imageMap = {
    mobile: image,
    tablet: image,
    desktop: image
  };
  var PlaylistStageContent = React.useCallback(function () {
    return React.createElement(StyledPlaylistStageGrid, null, React.createElement(StyledPlaylistStageTitle, {
      withImage: withImage,
      isSkewedBorder: false,
      isRoundBorder: !isSaiyanTheme()
    }, React.createElement(StyledContentWrapper, {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "space-between"
    }, backlink && React.createElement(StyledBacklinkWrapper, null, React.createElement(Icon, {
      color: "grey6",
      rotate: 90,
      width: "sm"
    }, React.createElement(IconArrow, null)), React.createElement(Link, {
      href: backlink.link,
      color: "grey6",
      fontSize: "sm",
      inline: true
    }, backlink.name)), React.createElement(StyledHeadingArticle, {
      breadcrumbPath: breadcrumbPath,
      color: headingColor,
      fontFamily: "default",
      weight: "bold",
      fontSize: "xl",
      lineHeight: "xxl",
      textAlign: "center",
      scale: "level-2",
      tag: "h2"
    }, name), React.createElement(StyledBreadcrumbWrapper, null, breadcrumbPath && React.createElement(Breadcrumb, {
      homeLink: homeLink,
      paths: breadcrumbPath
    })), description && React.createElement(CopyText, {
      as: "div",
      margin: "sm 0",
      fontSize: "sm",
      textAlign: "center",
      limitLines: 2
    }, description)), withMetaItems && React.createElement(React.Fragment, null, React.createElement(StyledAssetTileMetaWrapper, {
      justifyContent: "center",
      flexDirection: "row"
    }, React.createElement(AssetTileMeta, {
      inPlaylist: true,
      justify: "center",
      loading: false,
      metaItems: metaItems
    })), React.createElement(StyledProgressWrapper, {
      isSmall: true
    }, React.createElement(ProgressBar, {
      value: parseInt(completionPercentage, 0),
      small: true
    })))));
  }, [name, breadcrumbPath, headingColor, description]);
  return React.createElement(StyledPlaylistStage, rest, withImage ? React.createElement(Section, {
    color: colors,
    height: height,
    image: imageMap,
    paddingBottom: paddingBottom,
    paddingTop: paddingTop,
    shape: shape
  }, React.createElement(PlaylistStageContent, null)) : React.createElement(PlaylistStageContent, null));
};
//# sourceMappingURL=PlaylistStage.js.map