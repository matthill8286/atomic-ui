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
  componentId: "sc-1ym7gzi-0"
})(["margin-bottom:", ";margin-right:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.sm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.xs;
});
var StyledHeading = styled(Heading).withConfig({
  displayName: "AssetHeader__StyledHeading",
  componentId: "sc-1ym7gzi-1"
})(["width:90%;"]);
var StyledLink = styled(Link).withConfig({
  displayName: "AssetHeader__StyledLink",
  componentId: "sc-1ym7gzi-2"
})(["display:inline;"]);
var StyledManufacturer = styled.span.withConfig({
  displayName: "AssetHeader__StyledManufacturer",
  componentId: "sc-1ym7gzi-3"
})(["font-weight:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.font.weight.bold;
});
var StyledEnergyEfficiencySlot = styled.div.withConfig({
  displayName: "AssetHeader__StyledEnergyEfficiencySlot",
  componentId: "sc-1ym7gzi-4"
})(["margin-top:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.xs;
});
export var AssetHeader = function AssetHeader(_ref5) {
  var headerFontSize = _ref5.headerFontSize,
      _ref5$headerFontWeigh = _ref5.headerFontWeight,
      headerFontWeight = _ref5$headerFontWeigh === void 0 ? 'semibold' : _ref5$headerFontWeigh,
      href = _ref5.href,
      target = _ref5.target,
      _ref5$loading = _ref5.loading,
      loading = _ref5$loading === void 0 ? false : _ref5$loading,
      provider = _ref5.provider,
      _ref5$showProvider = _ref5.showProvider,
      showProvider = _ref5$showProvider === void 0 ? true : _ref5$showProvider,
      description = _ref5.description,
      sublinePrice = _ref5.sublinePrice,
      title = _ref5.title,
      energyEfficiencySlot = _ref5.energyEfficiencySlot,
      onClick = _ref5.onClick;

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
      tag: "div"
    }, React.createElement(CopyText, {
      fontSize: headerFontSize || 'lg',
      tag: "div",
      color: "grey6",
      weight: headerFontWeight
    }, cleanTitle));
  };

  return React.createElement(React.Fragment, null, showProvider && React.createElement(FlexBox, {
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