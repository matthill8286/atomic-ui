function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { SkeletonBlockItem, SkeletonInlineItem } from "../../Atoms/Skeleton";
import { StyledContentColumn, StyledIconsWrapper, StyledAssetTileCompactElementWrapper, StyledRightIconsInfoText, StyledRightIconsWrapper, StyledInformationTypo } from "./AssetTileCompact.styled";
import { CopyText, Typo } from "../../Atoms/Typography";
import { FlexBox, useWindowDimensions } from "../../Helper";
import { StyledAssetInformation } from "./elements";
import { breakpoints } from "../../../styles";
export var AssetTileCompactElement = function AssetTileCompactElement(_ref) {
  var children = _ref.children,
      headerFontSize = _ref.headerFontSize,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      provider = _ref.provider,
      iconsComponent = _ref.iconsComponent,
      _ref$showInteractions = _ref.showInteractions,
      showInteractions = _ref$showInteractions === void 0 ? true : _ref$showInteractions,
      type = _ref.type,
      competency = _ref.competency,
      label = _ref.label,
      description = _ref.description,
      title = _ref.title,
      mobile = _ref.mobile,
      props = _objectWithoutProperties(_ref, ["children", "headerFontSize", "loading", "provider", "iconsComponent", "showInteractions", "type", "competency", "label", "description", "title", "mobile"]);

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.md;

  var renderRightIcons = function renderRightIcons() {
    if (!iconsComponent) {
      return null;
    }

    return React.createElement(React.Fragment, null, loading ? React.createElement(React.Fragment, null, React.createElement(SkeletonInlineItem, {
      text: "interaction icons"
    }), React.createElement(SkeletonBlockItem, {
      width: "300px",
      height: "10px"
    })) : React.createElement(StyledRightIconsInfoText, {
      fontSize: "xs",
      weight: "bold"
    }, React.createElement(StyledIconsWrapper, null, iconsComponent)));
  };

  var assetInformation = !loading ? React.createElement(React.Fragment, null, React.createElement(CopyText, {
    limitLines: 2,
    tag: "div",
    display: "flex",
    color: 'grey6',
    fontSize: "md",
    margin: "sm 0 0"
  }, title), !isMobile ? React.createElement(FlexBox, {
    display: "inline-flex"
  }, provider ? React.createElement(StyledInformationTypo, {
    display: "inline-flex",
    tag: "div",
    color: 'grey4',
    fontSize: "xs",
    padding: "0 sm 0 0"
  }, provider) : null, type ? React.createElement(StyledInformationTypo, {
    display: "inline-flex",
    tag: "div",
    color: 'grey4',
    fontSize: "xs",
    padding: "0 sm"
  }, type) : null, competency ? React.createElement(Typo, {
    display: "inline-flex",
    tag: "div",
    color: 'grey4',
    fontSize: "xs",
    padding: "0 sm"
  }, competency) : null) : null) : React.createElement(React.Fragment, null, React.createElement(SkeletonInlineItem, {
    text: "asset title",
    margin: "sm 0"
  }), React.createElement(SkeletonInlineItem, {
    text: "asset meta info",
    margin: "0"
  }));
  return React.createElement(StyledAssetTileCompactElementWrapper, props, React.createElement(StyledContentColumn, null, React.createElement(StyledAssetInformation, null, assetInformation)), React.createElement(StyledRightIconsWrapper, null, showInteractions && !loading && React.createElement(StyledIconsWrapper, null, renderRightIcons()), children));
};
//# sourceMappingURL=AssetTileCompactElement.js.map