import { Icon } from "../../Atoms/Icon";
import { Link } from "../../Atoms/Link";
import { skeleton } from "../../../styles/animation";
import { media } from "../../../styles/media";
import { margin, padding } from "../../../styles/sc-shared-functions";
import { css, styled } from "../../../styles/styled";
export var StyledBreadcrumb = styled.div.withConfig({
  displayName: "Breadcrumbstyled__StyledBreadcrumb",
  componentId: "nzzs8a-0"
})(["", " ", " text-indent:", ";", " min-height:", ";"], margin, padding, function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && '-9999px';
}, function (_ref2) {
  var isLoading = _ref2.isLoading;
  return isLoading && skeleton;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.font.lineHeight.sm;
});
export var StyledUl = styled.ul.withConfig({
  displayName: "Breadcrumbstyled__StyledUl",
  componentId: "nzzs8a-1"
})(["display:flex;margin:0;padding:0;"]);
export var StyledLi = styled.li.withConfig({
  displayName: "Breadcrumbstyled__StyledLi",
  componentId: "nzzs8a-2"
})(["display:inline-block;margin-right:", ";color:", ";", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.xs;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.grey4;
}, function (_ref6) {
  var isLastButOne = _ref6.isLastButOne;
  return !isLastButOne ? css(["display:none;", "{display:inline-block;}"], media.xs) : css(["", "{", "{& > svg{transform:rotate(0deg);}}}"], media.md, Icon);
});
export var StyledHomeLink = styled(Link).withConfig({
  displayName: "Breadcrumbstyled__StyledHomeLink",
  componentId: "nzzs8a-3"
})(["", "{& > svg{position:relative;", "}}:hover{", "{& > svg{:hover{fill:", ";}}}}"], Icon, function (_ref7) {
  var theme = _ref7.theme;
  return css(["top:", ";height:", ";width:", ";"], theme.spacing.base.xxs, theme.spacing.base.sm, theme.spacing.base.sm);
}, Icon, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.grey4;
});
//# sourceMappingURL=Breadcrumb.styled.js.map