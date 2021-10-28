import { Divider } from "../../Atoms/Divider";
import { css, media, spacing, styled } from "../../../styles";
export var isPortrait = function isPortrait(orientation) {
  return orientation === 'portrait';
};
export var StyledTile = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledTile",
  componentId: "zbyj8k-0"
})(["", " display:flex;width:100%;margin-top:", ";", " ", "{", "}"], function (_ref) {
  var orientation = _ref.orientation,
      theme = _ref.theme;
  return css(["height:", ";"], isPortrait(orientation) ? "calc(100% - ".concat(theme.spacing.base.sm, ")") : "100%");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.sm;
}, function (_ref3) {
  var orientation = _ref3.orientation;
  return css(["flex-direction:", ";"], isPortrait(orientation) ? 'row' : 'column');
}, media.md, function (_ref4) {
  var orientation = _ref4.orientation,
      theme = _ref4.theme;
  return css(["height:", ";"], isPortrait(orientation) ? "calc(100% - ".concat(theme.spacing.base.sm, ")") : "100%");
});
export var StyledResponsiveContainer = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledResponsiveContainer",
  componentId: "zbyj8k-1"
})(["display:flex;position:relative;", " width:100%;", "{", "}"], function (_ref5) {
  var orientation = _ref5.orientation;
  return css(["flex-direction:", ";height:", ";min-height:", ";"], isPortrait(orientation) ? 'column' : 'row', !isPortrait(orientation) ? 'auto' : '100%', !isPortrait(orientation) ? '300px' : '100%');
}, media.maxSm, function (_ref6) {
  var orientation = _ref6.orientation;
  return css(["flex-direction:column;"]);
});
export var StyledMediaContainer = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledMediaContainer",
  componentId: "zbyj8k-2"
})(["", " padding:0;width:100%;cursor:pointer;align-self:center;height:", ";", "{max-width:100%;}", ";"], function (_ref7) {
  var orientation = _ref7.orientation,
      isCompact = _ref7.isCompact,
      width = _ref7.width;
  return css(["flex-direction:row;flex:", ";", ";"], isCompact ? 0 : isPortrait(orientation) ? 1 : 1, isCompact && "\n    margin-left: ".concat(spacing.base.sm, "\n    width: ").concat(width, "\n    "));
}, function (_ref8) {
  var imageHeight = _ref8.imageHeight,
      orientation = _ref8.orientation,
      isCompact = _ref8.isCompact;
  return !isPortrait(orientation) ? '100%' : imageHeight;
}, media.md, function (_ref9) {
  var isDisabled = _ref9.isDisabled;
  return "\n    ".concat(isDisabled ? "\n        -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n        pointer-events: none;\n      " : '', "\n  ");
});
export var StyledCardWrapper = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledCardWrapper",
  componentId: "zbyj8k-3"
})(["", ""], function (_ref10) {
  var isDisabled = _ref10.isDisabled;
  return css(["justify-content:space-between;position:relative;height:100%;box-sizing:border-box;overflow:hidden;cursor:pointer;", ""], isDisabled && "       \n      -ms-filter: grayscale(100%);\n        filter: grayscale(100%);\n        opacity: 0.4;\n        ");
});
export var StyledLinearGradient = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledLinearGradient",
  componentId: "zbyj8k-4"
})(["position:absolute;left:0;bottom:0;right:0;height:75px;z-index:1;background-color:rgba(0,0,0,0);background-image:linear-gradient(to top,rgba(0,0,0,0.4),rgba(0,0,0,0));"]);
export var StyledContentContainer = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledContentContainer",
  componentId: "zbyj8k-5"
})(function (_ref11) {
  var theme = _ref11.theme;
  return css(["flex:1;display:flex;position:relative;flex-direction:column;justify-content:space-between;padding:calc(", " - 2px);", "{padding:", ";}"], theme.spacing.base.md, media.md, theme.spacing.base.md);
});
export var StyledHeadingContainer = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledHeadingContainer",
  componentId: "zbyj8k-6"
})(["", ""], function (_ref12) {
  var theme = _ref12.theme,
      isDisabled = _ref12.isDisabled;
  return css(["display:flex;flex-direction:row;text-transform:", ";justify-content:flex-start;cursor:", ";flex-grow:initial;"], function (_ref13) {
    var theme = _ref13.theme;
    return theme.heading.featured.textTransform;
  }, isDisabled ? 'none' : 'pointer');
});
export var StyledAdditionalContent = styled.div.withConfig({
  displayName: "AssetTilestyled__StyledAdditionalContent",
  componentId: "zbyj8k-7"
})(["", ""], function (_ref14) {
  var theme = _ref14.theme;
  return css(["margin-bottom:", ";"], theme.spacing.base.sm);
});
export var StyledDivider = styled(Divider).withConfig({
  displayName: "AssetTilestyled__StyledDivider",
  componentId: "zbyj8k-8"
})(["margin:0;"]);
//# sourceMappingURL=AssetTile.styled.js.map