import { Icon } from "../../Atoms/Icon";
import { CopyText, Typo } from "../../Atoms/Typography";
import { media } from "../../../styles/media";
import { getBoxDimension } from "../../../styles/sc-shared-functions";
import { css, styled } from "../../../styles/styled";
export var StyledAccordionEntry = styled.section.withConfig({
  displayName: "Accordionstyled__StyledAccordionEntry",
  componentId: "sc-9osld1-0"
})(function (_ref) {
  var noBorder = _ref.noBorder,
      theme = _ref.theme;
  return "\n  ".concat(!noBorder ? "border-top: ".concat(theme.dimension.borderWidth, " solid ").concat(theme.name === 'Alternate' ? '#8B8F91' : theme.color.grey2) : '', "\n");
});
export var StyledLabel = styled.div.withConfig({
  displayName: "Accordionstyled__StyledLabel",
  componentId: "sc-9osld1-1"
})(function (_ref2) {
  var padding = _ref2.padding,
      theme = _ref2.theme,
      withIconsOnRight = _ref2.withIconsOnRight,
      isLarge = _ref2.isLarge;
  return " \n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    font-family: ".concat(theme.font.family.default, ";\n    padding: ").concat(isLarge ? theme.spacing.base.md : theme.spacing.base.sm, " 0;\n    ").concat(withIconsOnRight ? 'flex-direction: row-reverse; justify-content: space-between;' : '', "\n    ").concat(padding ? "padding: ".concat(getBoxDimension(theme, padding) || 0, ";") : '', "\n    ").concat(media.maxSm, " {\n      flex-direction: row-reverse;\n      justify-content: space-between;\n    }\n");
});
export var StyledLabelHeading = styled(Typo).withConfig({
  displayName: "Accordionstyled__StyledLabelHeading",
  componentId: "sc-9osld1-2"
})(["word-break:break-word;max-height:", ";-webkit-line-clamp:4;"], function (_ref3) {
  var theme = _ref3.theme;
  return css(["calc(", " * 4)"], theme.spacing.base.md);
});
export var StyledIcon = styled(Icon).withConfig({
  displayName: "Accordionstyled__StyledIcon",
  componentId: "sc-9osld1-3"
})(["svg{transition:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return "transform ".concat(theme.transition.medium, " ").concat(theme.transition.defaultEasing);
});
export var StyledEntryContent = styled(CopyText).withConfig({
  displayName: "Accordionstyled__StyledEntryContent",
  componentId: "sc-9osld1-4"
})(function (_ref5) {
  var padding = _ref5.padding,
      theme = _ref5.theme,
      isLarge = _ref5.isLarge;
  return " \n    padding: ".concat(isLarge ? theme.spacing.base.md : theme.spacing.base.sm, ";\n    ").concat(padding ? "padding: ".concat(getBoxDimension(theme, padding) || 0, ";") : '', "\n    font-weight: ").concat(function (_ref6) {
    var theme = _ref6.theme;
    return theme.font.weight.regular;
  }, "\n");
});
//# sourceMappingURL=Accordion.styled.js.map