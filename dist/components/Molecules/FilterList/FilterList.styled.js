import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
export var StyledSkeleton = styled.div.withConfig({
  displayName: "FilterListstyled__StyledSkeleton",
  componentId: "t99kpa-0"
})(["position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;height:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.md;
});
export var StyledEntry = styled.div.withConfig({
  displayName: "FilterListstyled__StyledEntry",
  componentId: "t99kpa-1"
})(["cursor:", ";opacity:", ";color:", ";font-size:", ";display:block;position:relative;margin-bottom:", ";"], function (_ref2) {
  var isDisabled = _ref2.isDisabled;
  return isDisabled && 'not-allowed';
}, function (_ref3) {
  var isDisabled = _ref3.isDisabled;
  return isDisabled && 0.2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.black;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.font.size.sm;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.sm;
});
export var StyledEntryText = styled.span.withConfig({
  displayName: "FilterListstyled__StyledEntryText",
  componentId: "t99kpa-2"
})(["color:", ";display:inherit;font-family:", ";font-size:", ";width:75%;will-change:font-size,line-height,padding-left;float:left;", "{font-size:", ";line-height:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.black;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.font.family.default;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.font.size.xs;
}, media.md, function (_ref10) {
  var theme = _ref10.theme;
  return theme.font.size.sm;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.font.lineHeight.sm;
});
export var StyledEntryInfo = styled.span.withConfig({
  displayName: "FilterListstyled__StyledEntryInfo",
  componentId: "t99kpa-3"
})(["display:inline-flex;position:relative;top:3px;padding-left:", ";cursor:pointer;"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.base.xs;
});
//# sourceMappingURL=FilterList.styled.js.map