function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { SkeletonBlockItem } from "../../../Atoms/Skeleton";
import { Spacer } from "../../../Atoms/Spacer";
import { CopyText, Typo } from "../../../Atoms/Typography";
import { useWindowDimensions } from "../../../Helper/useWindowDimensions";
import { breakpoints, css, styled } from "../../../../styles";
import { AssetSkills } from "./AssetSkills";

var Provider = function Provider(props) {
  return React.createElement(CopyText, _extends({
    weight: "bold",
    toUpperCase: true
  }, props));
};

var Ellipsis = css(["min-height:44px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;"]);
var StyledProviderWrapper = styled.div.withConfig({
  displayName: "AssetTileContent__StyledProviderWrapper",
  componentId: "gdlwym-0"
})(["flex-direction:row;width:100%;flex-wrap:wrap;display:flex;", ""], function (_ref) {
  var isCompact = _ref.isCompact;
  return "".concat(!isCompact ? "\n  justify-content: space-between;\n  " : "\n  justify-content: flex-end;");
});
var StyledHeadingDescription = styled(Typo).withConfig({
  displayName: "AssetTileContent__StyledHeadingDescription",
  componentId: "gdlwym-1"
})(["display:flex;flex-direction:column;justify-content:space-between;", ";"], function (_ref2) {
  var isDisabled = _ref2.isDisabled;
  return "\n    ".concat(isDisabled ? "\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n      " : '', "\n  ");
});
var StyledProvider = styled(Provider).withConfig({
  displayName: "AssetTileContent__StyledProvider",
  componentId: "gdlwym-2"
})(["display:flex;padding-top:5px;", ";"], function (_ref3) {
  var isDisabled = _ref3.isDisabled;
  return "\n    ".concat(isDisabled ? "\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n      " : '', "\n  ");
});
export var StyledSkills = styled.div.withConfig({
  displayName: "AssetTileContent__StyledSkills",
  componentId: "gdlwym-3"
})(["margin-top:0;", ";"], function (_ref4) {
  var isDisabled = _ref4.isDisabled;
  return "\n    ".concat(isDisabled ? "\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n      " : '', "\n  ");
});
var StyledHeaderWrapper = styled.div.withConfig({
  displayName: "AssetTileContent__StyledHeaderWrapper",
  componentId: "gdlwym-4"
})(["", " ", ";display:flex;flex-direction:column;flex-basis:100%;"], function (_ref5) {
  var withEllipsis = _ref5.withEllipsis;
  return withEllipsis && Ellipsis;
}, function (_ref6) {
  var theme = _ref6.theme;
  return "margin-bottom: ".concat(theme.spacing.base.sm);
});
export var AssetTileContent = function AssetTileContent(_ref7) {
  var provider = _ref7.provider,
      description = _ref7.description,
      _ref7$limitContentLin = _ref7.limitContentLines,
      limitContentLines = _ref7$limitContentLin === void 0 ? 2 : _ref7$limitContentLin,
      _ref7$isDisabled = _ref7.isDisabled,
      isDisabled = _ref7$isDisabled === void 0 ? false : _ref7$isDisabled,
      _ref7$loading = _ref7.loading,
      loading = _ref7$loading === void 0 ? false : _ref7$loading,
      _ref7$isCompact = _ref7.isCompact,
      isCompact = _ref7$isCompact === void 0 ? false : _ref7$isCompact,
      _ref7$withEllipsis = _ref7.withEllipsis,
      withEllipsis = _ref7$withEllipsis === void 0 ? true : _ref7$withEllipsis,
      _ref7$showSkills = _ref7.showSkills,
      showSkills = _ref7$showSkills === void 0 ? true : _ref7$showSkills,
      skills = _ref7.skills,
      competencyLabel = _ref7.competencyLabel,
      onHeadingClick = _ref7.onHeadingClick;

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.sm;

  if (loading) {
    return React.createElement(StyledHeaderWrapper, null, !isCompact && React.createElement(SkeletonBlockItem, {
      width: "170px",
      height: "23px"
    }), React.createElement(Spacer, {
      size: "md"
    }), React.createElement(SkeletonBlockItem, {
      width: "90%",
      height: "25px"
    }), React.createElement(Spacer, {
      size: "md"
    }));
  }

  return React.createElement(StyledHeaderWrapper, {
    withEllipsis: withEllipsis,
    onClick: onHeadingClick
  }, React.createElement(StyledProviderWrapper, {
    isCompact: isCompact
  }, !isCompact && React.createElement(StyledProvider, {
    isDisabled: isDisabled,
    "data-test": "learning-asset-provider",
    color: "grey5",
    display: "inline-flex",
    fontSize: "xs",
    textAlign: "left",
    toUpperCase: true,
    margin: "0 0 xs",
    tag: "h1"
  }, provider), showSkills && React.createElement(StyledSkills, null, React.createElement(AssetSkills, {
    loading: loading,
    color: "grey4",
    skills: skills,
    competencyLabel: competencyLabel
  }))), description && React.createElement(StyledHeadingDescription, {
    weight: "bold",
    tag: "div",
    margin: "xs 0 0",
    fontSize: "lg",
    textAlign: "left",
    lineHeight: isMobile ? 'sm' : 'md',
    color: "grey6",
    limitLines: limitContentLines,
    isDisabled: isDisabled,
    "data-test": "learning-asset-description"
  }, description));
};
//# sourceMappingURL=AssetTileContent.js.map