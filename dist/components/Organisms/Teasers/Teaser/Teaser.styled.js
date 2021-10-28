import { Icon } from "../../../Atoms/Icon";
import { css, media, styled } from "../../../../styles";
export var isPortrait = function isPortrait(orientation) {
  return orientation === 'portrait';
};
export var StyledTeaser = styled.div.withConfig({
  displayName: "Teaserstyled__StyledTeaser",
  componentId: "sc-1yrfa8c-0"
})(["height:calc(100% - ", ");display:flex;cursor:", ";margin-top:", ";", "{", "}& > div{width:100%;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.sm;
}, function (_ref2) {
  var hasLinkList = _ref2.hasLinkList,
      isOpen = _ref2.isOpen;
  return hasLinkList && isOpen ? 'inherit' : 'pointer';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.base.sm;
}, media.md, function (_ref4) {
  var orientation = _ref4.orientation,
      theme = _ref4.theme;
  return css(["height:", ";"], isPortrait(orientation) ? "calc(100% - ".concat(theme.spacing.base.sm, ")") : '300px');
});
export var StyledResponsiveContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledResponsiveContainer",
  componentId: "sc-1yrfa8c-1"
})(["display:flex;flex-direction:column;width:100%;", "{", "}"], media.md, function (_ref5) {
  var orientation = _ref5.orientation;
  return css(["flex-direction:", ";"], isPortrait(orientation) ? 'column' : 'row');
});
export var StyledPictureContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledPictureContainer",
  componentId: "sc-1yrfa8c-2"
})(function (_ref6) {
  var withImagePadding = _ref6.withImagePadding,
      orientation = _ref6.orientation,
      theme = _ref6.theme;
  return css(["display:flex;flex:0 0 auto;min-width:", ";", ";", ";padding-top:", ";padding-left:", ";padding-right:", ";padding-bottom:", ";height:280px;", "{max-width:", ";height:", ";}"], withImagePadding ? '176px' : '200px', withImagePadding && "justify-content: center", withImagePadding && "align-items: center", withImagePadding ? isPortrait(orientation) ? theme.spacing.base.lg : theme.spacing.base.md : '0px', withImagePadding ? theme.spacing.base.md : '0px', withImagePadding && isPortrait(orientation) ? theme.spacing.base.md : '0px', withImagePadding && isPortrait(orientation) ? theme.spacing.base.md : '0px', media.md, isPortrait(orientation) ? 'none' : '33%', isPortrait(orientation) ? '280px' : '100%');
});
export var StyledContentContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledContentContainer",
  componentId: "sc-1yrfa8c-3"
})(function (_ref7) {
  var theme = _ref7.theme;
  return css(["flex:2 1 auto;display:flex;flex-direction:column;padding:", " ", ";", "{padding:", " ", ";}"], theme.spacing.base.md, theme.spacing.base.sm, media.md, theme.spacing.base.lg, theme.spacing.base.md);
});
export var StyledHeadingContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledHeadingContainer",
  componentId: "sc-1yrfa8c-4"
})(["display:flex;", ";flex-direction:row;text-transform:", ";justify-content:space-between;cursor:pointer;"], function (_ref8) {
  var growHeadline = _ref8.growHeadline;
  return growHeadline && "flex: 1 0 auto";
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.heading.featured.textTransform;
});
export var StyledInfoTextContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledInfoTextContainer",
  componentId: "sc-1yrfa8c-5"
})(["margin:0;"]);
export var StyledInfoTextChildren = styled.div.withConfig({
  displayName: "Teaserstyled__StyledInfoTextChildren",
  componentId: "sc-1yrfa8c-6"
})(["margin-top:", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.base.sm;
});
export var StyledLinkListContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledLinkListContainer",
  componentId: "sc-1yrfa8c-7"
})(["margin-top:", ";"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.base.md;
});
export var StyledLinkListItemSpace = styled.div.withConfig({
  displayName: "Teaserstyled__StyledLinkListItemSpace",
  componentId: "sc-1yrfa8c-8"
})(["height:", ";"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.base.sm;
});
export var StyledTextLinkContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledTextLinkContainer",
  componentId: "sc-1yrfa8c-9"
})(function (_ref13) {
  var theme = _ref13.theme;
  return css(["margin-top:auto;padding-top:", ";", "{padding-top:", ";}"], theme.spacing.base.md, media.md, theme.spacing.base.lg);
});
export var StyledLinkContainer = styled.div.withConfig({
  displayName: "Teaserstyled__StyledLinkContainer",
  componentId: "sc-1yrfa8c-10"
})(function (_ref14) {
  var theme = _ref14.theme;
  return css(["display:flex;align-items:flex-start;justify-content:center;"]);
});
export var StyledIcon = styled(Icon).withConfig({
  displayName: "Teaserstyled__StyledIcon",
  componentId: "sc-1yrfa8c-11"
})(function (_ref15) {
  var theme = _ref15.theme,
      hasMarginLeft = _ref15.hasMarginLeft,
      hasMarginTop = _ref15.hasMarginTop;
  return css(["svg{height:", ";width:", ";transition:transform ", " ", ";", "{height:", ";width:", ";}}margin-left:", ";margin-top:", ";", "{margin-left:", ";}"], theme.font.size.sm, theme.font.size.sm, theme.transition.medium, theme.transition.defaultEasing, media.md, theme.font.size.xl, theme.font.size.xl, hasMarginLeft ? theme.spacing.base.sm : 0, hasMarginTop ? theme.spacing.base.sm : 0, media.md, hasMarginLeft ? theme.spacing.base.md : 0);
});
export var StyledDummyLink = styled.div.withConfig({
  displayName: "Teaserstyled__StyledDummyLink",
  componentId: "sc-1yrfa8c-12"
})(function (_ref16) {
  var theme = _ref16.theme;
  return css(["display:inline-block;margin-top:auto;padding-top:", ";position:relative;width:100%;", "{padding-top:", ";}"], theme.spacing.base.md, media.md, theme.spacing.base.lg);
});
//# sourceMappingURL=Teaser.styled.js.map