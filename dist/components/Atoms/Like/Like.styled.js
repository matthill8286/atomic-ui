import { CopyText } from "../Typography";
import { styled } from "../../../styles/styled";
export var StyledLike = styled.div.withConfig({
  displayName: "Likestyled__StyledLike",
  componentId: "sc-1mvgahr-0"
})(["display:", ";align-items:center;width:fit-content;color:", ";opacity:", ";text-decoration:none;cursor:", ";position:relative;padding:", ";border-bottom:", ";", ""], function (_ref) {
  var isInline = _ref.isInline;
  return isInline ? "inline-flex" : 'flex';
}, function (_ref2) {
  var theme = _ref2.theme,
      isDisabled = _ref2.isDisabled,
      isInline = _ref2.isInline;
  return isDisabled && theme.color.grey2 || isInline && 'inherit' || theme.color.grey4;
}, function (_ref3) {
  var theme = _ref3.theme,
      isDisabled = _ref3.isDisabled;
  return isDisabled ? theme.polished.inactive : "1.0";
}, function (_ref4) {
  var isDisabled = _ref4.isDisabled,
      cursor = _ref4.cursor;
  return isDisabled ? 'initial' : cursor || 'pointer';
}, function (_ref5) {
  var theme = _ref5.theme;
  return "".concat(theme.spacing.base.xxs, " ").concat(theme.spacing.base.xs);
}, function (_ref6) {
  var isUnderlined = _ref6.isUnderlined,
      isInline = _ref6.isInline,
      theme = _ref6.theme;
  return isUnderlined && isInline ? "1px solid ".concat(theme.color.grey2) : '';
}, function (_ref7) {
  var isDisabled = _ref7.isDisabled,
      isInline = _ref7.isInline;
  return !isDisabled && !isInline && "\n    :hover {\n      &::after {\n        transform-origin: left center;\n        transform: scale(1, 1);\n      }\n    }\n  ";
});

var getIconSize = function getIconSize(theme, isSmall) {
  return isSmall ? theme.font.lineHeight.xxs : theme.font.lineHeight.xs;
};

var getIconMargin = function getIconMargin(theme) {
  return theme.spacing.base.xxs;
};

export var StyledIconWrapper = styled.span.withConfig({
  displayName: "Likestyled__StyledIconWrapper",
  componentId: "sc-1mvgahr-1"
})(["margin-left:", ";margin-right:", ";& svg{height:", ";width:", ";}"], function (_ref8) {
  var hasIconRight = _ref8.hasIconRight,
      theme = _ref8.theme;
  return hasIconRight ? getIconMargin(theme) : '0px';
}, function (_ref9) {
  var hasIconLeft = _ref9.hasIconLeft,
      theme = _ref9.theme;
  return hasIconLeft ? getIconMargin(theme) : '0px';
}, function (_ref10) {
  var theme = _ref10.theme,
      isSmall = _ref10.isSmall;
  return getIconSize(theme, isSmall);
}, function (_ref11) {
  var theme = _ref11.theme,
      isSmall = _ref11.isSmall;
  return getIconSize(theme, isSmall);
});
export var Text = styled(CopyText).withConfig({
  displayName: "Likestyled__Text",
  componentId: "sc-1mvgahr-2"
})(["display:", ";"], function (props) {
  return props.isInline ? 'inline' : 'block';
});
export var Likes = styled(CopyText).withConfig({
  displayName: "Likestyled__Likes",
  componentId: "sc-1mvgahr-3"
})(["display:", ";margin-right:5px;"], function (props) {
  return props.isInline ? 'inline' : 'block';
});
//# sourceMappingURL=Like.styled.js.map