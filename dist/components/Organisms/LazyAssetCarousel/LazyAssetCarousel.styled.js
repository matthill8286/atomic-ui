import { css, styled } from "../../../styles/styled";
export var StyledTileWrapper = styled.div.withConfig({
  displayName: "LazyAssetCarouselstyled__StyledTileWrapper",
  componentId: "sc-16hv4kd-0"
})(["outline:none;height:100%;padding:", ";padding-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.base.sm, " 0 ").concat(theme.spacing.base.sm, ";");
}, function (_ref2) {
  var theme = _ref2.theme,
      withLabels = _ref2.withLabels;
  return withLabels ? theme.spacing.base.sm : theme.spacing.base.xs;
});
export var ClippingWrapper = styled.div.withConfig({
  displayName: "LazyAssetCarouselstyled__ClippingWrapper",
  componentId: "sc-16hv4kd-1"
})(["margin-top:-15px;padding-top:15px;", ""], function (_ref3) {
  var hideLeft = _ref3.hideLeft;
  return hideLeft && css(["clip-path:inset(0 -10000px -100px 0);"]);
});
export var StyledHeading = styled.div.withConfig({
  displayName: "LazyAssetCarouselstyled__StyledHeading",
  componentId: "sc-16hv4kd-2"
})(["h1,h2,h3,h4{margin-left:0;margin-right:0;color:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.primary;
});
//# sourceMappingURL=LazyAssetCarousel.styled.js.map