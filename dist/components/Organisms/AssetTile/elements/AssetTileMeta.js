import React from 'react';
import { Icon } from "../../../Atoms/Icon";
import { SkeletonBlockItem } from "../../../Atoms/Skeleton";
import { CopyText } from "../../../Atoms/Typography";
import { FlexBox, FlexItem } from "../../../Helper/FlexBox";
import { useWindowDimensions } from "../../../Helper/useWindowDimensions";
import { breakpoints, styled } from "../../../../styles";
var StyledFlexBox = styled(FlexBox).withConfig({
  displayName: "AssetTileMeta__StyledFlexBox",
  componentId: "sc-3wdnvk-0"
})(["", ";"], function (_ref) {
  var isDisabled = _ref.isDisabled;
  return "\n    ".concat(isDisabled ? "\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n        pointer-events: none;\n      " : '', "\n  ");
});
var StyledFlexItem = styled(FlexItem).withConfig({
  displayName: "AssetTileMeta__StyledFlexItem",
  componentId: "sc-3wdnvk-1"
})(["flex-direction:row;justify-content:flex-start;align-items:stretch;padding:0 2px;", " ", ";"], function (_ref2) {
  var isCompact = _ref2.isCompact;
  return "".concat(isCompact && "padding: 0");
}, function (_ref3) {
  var isFirstChild = _ref3.isFirstChild;
  return "\n    ".concat(isFirstChild && "\n        padding-left: 0;\n        margin-left: 0;\n      ", "\n  ");
});
export var AssetTileMeta = function AssetTileMeta(_ref4) {
  var metaItems = _ref4.metaItems,
      loading = _ref4.loading,
      isDisabled = _ref4.isDisabled,
      _ref4$inPlaylist = _ref4.inPlaylist,
      inPlaylist = _ref4$inPlaylist === void 0 ? false : _ref4$inPlaylist,
      justify = _ref4.justify,
      alignSelf = _ref4.alignSelf,
      isCompact = _ref4.isCompact,
      onClick = _ref4.onClick;

  if (!metaItems) {
    return null;
  }

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.sm;
  var showCompact = metaItems.length >= 2;

  if (loading) {
    return React.createElement(StyledFlexBox, {
      isDisabled: isDisabled
    }, React.createElement(SkeletonBlockItem, {
      height: "20px",
      width: "60%"
    }));
  }

  return React.createElement(StyledFlexBox, {
    justifyContent: justify || 'flex-start',
    alignContent: "center",
    flexDirection: isMobile && inPlaylist ? 'column' : 'row',
    flexWrap: showCompact ? 'wrap' : 'nowrap',
    isDisabled: isDisabled,
    onClick: onClick
  }, metaItems.map(function (_ref5, index) {
    var icon = _ref5.icon,
        text = _ref5.text;
    return React.createElement(StyledFlexItem, {
      key: index,
      padding: !isMobile,
      isCompact: isCompact,
      alignSelf: alignSelf || isMobile && inPlaylist ? 'center' : 'flex-start',
      isFirstChild: index === 0,
      isLastChild: index === (metaItems === null || metaItems === void 0 ? void 0 : metaItems.length)
    }, React.createElement(FlexBox, null, React.createElement(FlexItem, {
      alignSelf: "center"
    }, React.createElement(Icon, {
      width: 16,
      height: 16,
      color: "grey5"
    }, icon)), React.createElement(FlexItem, null, React.createElement(CopyText, {
      margin: isMobile ? '0 10px' : '0 5px 0',
      fontSize: "sm",
      color: "grey5",
      tag: "span"
    }, text))));
  }));
};
//# sourceMappingURL=AssetTileMeta.js.map