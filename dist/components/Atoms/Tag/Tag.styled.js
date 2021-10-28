import { css, styled } from "../../../styles/styled";
import { handlePadding } from "../Card/Card.styled";
export var StyledTagWrapper = styled.div.withConfig({
  displayName: "Tagstyled__StyledTagWrapper",
  componentId: "sc-2n1tgd-0"
})(function (_ref) {
  var theme = _ref.theme,
      hasLink = _ref.hasLink,
      marginRight = _ref.marginRight,
      color = _ref.color,
      padding = _ref.padding;
  return css(["color:", ";", ";border-color:", ";border-width:1px;border-radius:", ";border-style:solid;width:fit-content;margin-right:", ";margin-bottom:", ";", ";"], theme.color.grey5, !!padding && handlePadding(theme.spacing.base, padding), !color ? theme.color.grey2 : theme.color[color], theme.dimension.borderRadius6, marginRight && theme.spacing.base.sm, marginRight && theme.spacing.base.xs, hasLink && hoverStyle(theme));
});

var hoverStyle = function hoverStyle(theme) {
  return css(["&:hover{background-color:", ";cursor:pointer;}"], theme.color.grey1);
};

export var StyledAnchorTag = styled.a.withConfig({
  displayName: "Tagstyled__StyledAnchorTag",
  componentId: "sc-2n1tgd-1"
})(["text-decoration:none;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.grey5;
});
//# sourceMappingURL=Tag.styled.js.map