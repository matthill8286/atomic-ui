import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { CopyText } from "../Typography";
import { css, styled } from "../../../styles/styled";
export var linkStyles = css(["display:", ";align-items:center;width:max-content;color:", ";opacity:", ";text-decoration:none;cursor:", ";position:relative;border-bottom:", ";", ";padding:", ";&::after{content:'';position:absolute;display:", ";bottom:-2px;height:", "px;", " background-color:", ";transform-origin:right center;transform:scale(0,1);transition:transform 0.25s cubic-bezier(0.37,0.31,0.2,0.85);}", ""], function (_ref) {
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
  var isUnderlined = _ref5.isUnderlined,
      isInline = _ref5.isInline;
  return isUnderlined && isInline ? '1px solid' : '';
}, function (_ref6) {
  var theme = _ref6.theme,
      color = _ref6.color,
      isInline = _ref6.isInline;
  return isInline && color && "border-bottom-color: ".concat(theme.color[color]);
}, function (_ref7) {
  var theme = _ref7.theme,
      isInline = _ref7.isInline,
      isGrouped = _ref7.isGrouped;
  return !isInline || isGrouped ? theme.spacing.base.sm : 0;
}, function (_ref8) {
  var isUnderlined = _ref8.isUnderlined;
  return isUnderlined ? 'block' : 'none';
}, function (_ref9) {
  var isBold = _ref9.isBold;
  return isBold ? 2 : 1;
}, function (_ref10) {
  var isUnderlined = _ref10.isUnderlined;
  return isUnderlined ? widthAndPosForUnderline : '';
}, function (_ref11) {
  var theme = _ref11.theme,
      color = _ref11.color,
      isDisabled = _ref11.isDisabled;
  return isDisabled && theme.color.grey2 || color && theme.color[color] || theme.color.primary;
}, function (_ref12) {
  var isDisabled = _ref12.isDisabled;
  return !isDisabled && "\n    :hover {\n      &::after {\n        transform-origin: left center;\n        transform: scale(1, 1);\n      }\n    }\n  ";
});
export var StyledLinkAnchor = styled.a.withConfig({
  displayName: "Linkstyled__StyledLinkAnchor",
  componentId: "sc-1nr3djj-0"
})(["", ""], linkStyles);
export var StyledLinkButton = styled.button.withConfig({
  displayName: "Linkstyled__StyledLinkButton",
  componentId: "sc-1nr3djj-1"
})(["appearance:none;background:transparent;border:0;padding:0;", " line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;&::-moz-focus-inner{border:0;padding:0;}"], linkStyles);

var RouterLinkWrapper = function RouterLinkWrapper(_ref13) {
  var children = _ref13.children,
      className = _ref13.className,
      _ref13$to = _ref13.to,
      to = _ref13$to === void 0 ? '#' : _ref13$to,
      onClick = _ref13.onClick;
  return React.createElement(RouterLink, {
    onClick: onClick,
    className: className,
    to: to
  }, children);
};

export var StyledLinkRouter = styled(RouterLinkWrapper).withConfig({
  displayName: "Linkstyled__StyledLinkRouter",
  componentId: "sc-1nr3djj-2"
})(["", ""], linkStyles);
export var StyledIconWrapper = styled.span.withConfig({
  displayName: "Linkstyled__StyledIconWrapper",
  componentId: "sc-1nr3djj-3"
})(["margin-left:", ";margin-right:", ";& svg{height:", ";width:", ";}"], function (_ref14) {
  var hasIconRight = _ref14.hasIconRight,
      theme = _ref14.theme;
  return hasIconRight ? getIconMargin(theme) : '0px';
}, function (_ref15) {
  var hasIconLeft = _ref15.hasIconLeft,
      theme = _ref15.theme;
  return hasIconLeft ? getIconMargin(theme) : '0px';
}, function (_ref16) {
  var theme = _ref16.theme,
      isSmall = _ref16.isSmall;
  return getIconSize(theme, isSmall);
}, function (_ref17) {
  var theme = _ref17.theme,
      isSmall = _ref17.isSmall;
  return getIconSize(theme, isSmall);
});
export var Text = styled(CopyText).withConfig({
  displayName: "Linkstyled__Text",
  componentId: "sc-1nr3djj-4"
})(["display:", ";background-color:", ";color:", ";padding:", ";border-radius:", ";"], function (props) {
  return props.isInline ? 'inline' : 'block';
}, function (_ref18) {
  var theme = _ref18.theme,
      color = _ref18.color,
      isBranded = _ref18.isBranded;
  return isBranded && theme.color.primary;
}, function (_ref19) {
  var theme = _ref19.theme,
      isBranded = _ref19.isBranded,
      color = _ref19.color;
  return !isBranded ? color && theme.color[color] : theme.color.white;
}, function (_ref20) {
  var theme = _ref20.theme,
      isBranded = _ref20.isBranded;
  return isBranded && "".concat(theme.spacing.base.xs, " ").concat(theme.spacing.base.sm);
}, function (_ref21) {
  var isBranded = _ref21.isBranded,
      theme = _ref21.theme;
  return isBranded && theme.dimension.borderRadius6;
});
var widthAndPosForUnderline = css(function (_ref22) {
  var theme = _ref22.theme,
      isSmall = _ref22.isSmall,
      hasIconLeft = _ref22.hasIconLeft,
      hasIconRight = _ref22.hasIconRight;

  if (!hasIconLeft && !hasIconRight) {
    return css(["left:0;width:calc(100%);"]);
  }

  var leftOffset = getIconWidth(theme, isSmall);
  var iconWidth = getIconWidth(theme, isSmall, hasIconLeft && hasIconRight);
  var iconLeft = css(["left:", ";"], leftOffset);
  return css(["", " width:calc( 100% - ", " );"], hasIconLeft && iconLeft, iconWidth);
});

var getIconSize = function getIconSize(theme, isSmall) {
  return isSmall ? theme.font.lineHeight.xxs : theme.font.lineHeight.xs;
};

var getIconWidth = function getIconWidth(theme, isSmall, calculateForTwoIcons) {
  var iconSizeAsNum = parseInt(getIconSize(theme, isSmall));
  var iconMarginAsNum = parseInt(getIconMargin(theme));
  return (iconSizeAsNum + iconMarginAsNum) * (calculateForTwoIcons ? 2 : 1) + 'px';
};

var getIconMargin = function getIconMargin(theme) {
  return theme.spacing.base.xxs;
};
//# sourceMappingURL=Link.styled.js.map