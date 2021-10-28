import { math } from 'polished';
import { css, styled } from "../../../styles/styled";
import { Typo } from "../Typography";
var skewFactor = 10;
var tailWidth = 10;

var resolveColor = function resolveColor(_ref) {
  var actionType = _ref.actionType,
      theme = _ref.theme;
  return actionType === 'disabled' ? theme.color.black : theme.color.primary;
};

export var skewLeft = function skewLeft(_ref2) {
  var actionType = _ref2.actionType,
      theme = _ref2.theme;
  return css(["&:before{content:'';position:absolute;top:0;left:0;width:", "px;height:", ";bottom:0;border-radius:", ";border-top-right-radius:0;border-bottom-right-radius:0;transform:skewX(-", "deg);transform-origin:bottom left;", "}"], tailWidth + 2, math(theme.font.size.xl + '+ 2px'), theme.dimension.borderRadius1, skewFactor, actionType === 'prominent' ? css(["background-color:", ";border:1px solid ", ";"], theme.color.primary, theme.color.primary) : css(["background-color:", ";border-left:1px solid ", ";border-top:1px solid ", ";border-bottom:1px solid ", ";"], theme.color.white, resolveColor, resolveColor, resolveColor));
};
export var skewRight = function skewRight(_ref3) {
  var actionType = _ref3.actionType,
      theme = _ref3.theme;
  return css(["&:after{content:'';position:absolute;top:0;right:2px;width:", "px;height:", ";bottom:0;border-radius:", ";border-top-left-radius:0;border-bottom-left-radius:0;transform:skewX(-", "deg);border:1px solid ", ";", "}"], tailWidth + 2, math(theme.font.size.xl + '+ 2px'), theme.dimension.borderRadius1, skewFactor, resolveColor, actionType === 'prominent' ? css(["background-color:", ";"], theme.color.primary) : css(["background-color:", ";border-left:none;"], theme.color.white));
};
export var StyledTypo = styled(Typo).withConfig({
  displayName: "Badgestyled__StyledTypo",
  componentId: "sc-1649si-0"
})(function (_ref4) {
  var actionType = _ref4.actionType,
      theme = _ref4.theme;
  return css(["", " ", " text-align:center;display:flex;align-items:center;padding-left:", ";padding-right:", ";margin-left:0;margin-right:", "px;box-sizing:content-box;height:", ";overflow:auto;"], actionType === 'prominent' ? css(["background-color:", ";color:", ";"], theme.color.primary, theme.color.white) : css(["background-color:", ";color:", ";"], theme.color.white, resolveColor), actionType === 'inverted' && css(["background-color:", ";color:", ";"], theme.color.grey6, theme.color.white), theme.spacing.base.md, theme.spacing.base.md, tailWidth - 1, math(theme.font.size.xl + ' + 2px'));
});
export var StyledBadgeLineWrapper = styled.div.withConfig({
  displayName: "Badgestyled__StyledBadgeLineWrapper",
  componentId: "sc-1649si-1"
})(["", ";"], function (_ref5) {
  var isBadgeLine = _ref5.isBadgeLine,
      theme = _ref5.theme;
  return isBadgeLine ? css(["display:flex;flex-direction:row;flex-wrap:wrap;overflow:hidden;height:", ";"], math(theme.font.size.xl + ' + 4px')) : "display: block";
});
export var StyledBadgeWrapper = styled.div.withConfig({
  displayName: "Badgestyled__StyledBadgeWrapper",
  componentId: "sc-1649si-2"
})(function (_ref6) {
  var theme = _ref6.theme;
  return css(["display:inline-block;position:relative;margin-right:", ";max-width:100%;"], theme.spacing.base.xs);
});
export var StyledOverflow = styled.div.withConfig({
  displayName: "Badgestyled__StyledOverflow",
  componentId: "sc-1649si-3"
})(["display:inline-block;text-overflow:ellipsis;overflow:hidden;"]);
//# sourceMappingURL=Badge.styled.js.map