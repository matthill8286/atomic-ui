import { Cell } from "../../Helper/Grid/Cell";
import { FlexBox } from "../../Helper/FlexBox";
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
import { getBoxDimension } from "../../../styles/sc-shared-functions";
export var StyledPicture = styled(Cell).withConfig({
  displayName: "AppFooterstyled__StyledPicture",
  componentId: "vehql8-0"
})(["", "{width:100%;}", "{justify-self:flex-start;width:100%;}"], media.xs, media.lg);
export var StyledCopyText = styled(Cell).withConfig({
  displayName: "AppFooterstyled__StyledCopyText",
  componentId: "vehql8-1"
})(["", "{justify-self:flex-start;padding-left:", ";}", "{justify-self:center;}", "{justify-self:flex-end;}"], media.xs, function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.sm;
}, media.lg, media.xl);
export var StyledGroupedActionLinksWrapper = styled(Cell).withConfig({
  displayName: "AppFooterstyled__StyledGroupedActionLinksWrapper",
  componentId: "vehql8-2"
})(["", "{justify-self:flex-start;}", "{justify-self:center;}"], media.xs, media.lg);
export var StyledFooterWrapper = styled.div.withConfig({
  displayName: "AppFooterstyled__StyledFooterWrapper",
  componentId: "vehql8-3"
})(function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color,
      padding = _ref2.padding;
  return css(["", ""], padding ? "padding: ".concat(getBoxDimension(theme, padding) || 0, ";") : '');
});
export var StyledGroupedActionLinks = styled(FlexBox).withConfig({
  displayName: "AppFooterstyled__StyledGroupedActionLinks",
  componentId: "vehql8-4"
})(["", "{justify-content:flex-start;flex-direction:column;}", "{flex-direction:row;justify-content:space-between;}"], media.xs, media.lg);
//# sourceMappingURL=AppFooter.styled.js.map