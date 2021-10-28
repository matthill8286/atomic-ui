function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Link } from "../../../Atoms/Link";
import { SkeletonInlineItem } from "../../../Atoms/Skeleton";
import { CopyText, Heading, InfoText } from "../../../Atoms/Typography";
import { FlexBox, FlexItem } from "../../../Helper/FlexBox";
import { styled } from "../../../../styles/styled";
import { useWindowDimensions } from "../../../Helper";
import { breakpoints } from "../../../../styles";
var StyledAssetHeaderWrapper = styled.div.withConfig({
  displayName: "AssetHeader__StyledAssetHeaderWrapper",
  componentId: "gr5fwf-0"
})(["margin-bottom:", ";margin-right:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.sm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.xs;
});
var StyledHeading = styled(Heading).withConfig({
  displayName: "AssetHeader__StyledHeading",
  componentId: "gr5fwf-1"
})(["width:90%;"]);
var StyledLink = styled(Link).withConfig({
  displayName: "AssetHeader__StyledLink",
  componentId: "gr5fwf-2"
})(["display:inline;"]);
export var AssetHeader = function AssetHeader(_ref3) {
  var headerFontSize = _ref3.headerFontSize,
      _ref3$headerFontWeigh = _ref3.headerFontWeight,
      headerFontWeight = _ref3$headerFontWeigh === void 0 ? 'semibold' : _ref3$headerFontWeigh,
      href = _ref3.href,
      target = _ref3.target,
      _ref3$loading = _ref3.loading,
      loading = _ref3$loading === void 0 ? false : _ref3$loading,
      provider = _ref3.provider,
      _ref3$showProvider = _ref3.showProvider,
      showProvider = _ref3$showProvider === void 0 ? true : _ref3$showProvider,
      description = _ref3.description,
      title = _ref3.title,
      onClick = _ref3.onClick;

  if (loading) {
    return React.createElement(StyledAssetHeaderWrapper, null, React.createElement(SkeletonInlineItem, {
      text: "Manufacturer",
      fontSize: "xs"
    }), "\xA0", React.createElement(SkeletonInlineItem, {
      text: "Asset Line Item Headline",
      fontSize: "xs"
    }), showProvider && React.createElement(SkeletonInlineItem, {
      text: "Subline",
      fontSize: "xxs",
      newLine: true
    }));
  }

  var cleanTitle = provider ? title.replace(provider, '') : title;

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.sm;

  var Heading = function Heading() {
    return React.createElement(StyledHeading, {
      color: "black",
      fontSize: headerFontSize || 'lg',
      limitLines: 3,
      lineHeight: isMobile ? 'sm' : 'md',
      scale: "level-1",
      spacing: "half",
      tag: "p"
    }, React.createElement(CopyText, {
      fontSize: headerFontSize || 'lg',
      tag: "div",
      color: "grey6",
      weight: headerFontWeight
    }, cleanTitle));
  };

  return React.createElement(StyledAssetHeaderWrapper, null, showProvider && React.createElement(FlexBox, {
    flexWrap: "nowrap",
    justifyContent: "space-between"
  }, description && React.createElement(FlexItem, null, React.createElement(InfoText, {
    "data-test": "learning-asset-provider",
    fontSize: "xs",
    toUpperCase: true,
    margin: "0 0 xs",
    tag: "p",
    color: "grey5"
  }, description))), href ? React.createElement(StyledLink, _extends({
    inline: false,
    underline: false
  }, target ? {
    href: href,
    target: target,
    onClick: onClick
  } : {
    to: href,
    onClick: onClick
  }), React.createElement(Heading, null)) : React.createElement(Heading, null));
};
//# sourceMappingURL=AssetHeader.js.map