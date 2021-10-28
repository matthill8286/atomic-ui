import { css, media, saiyanTheme, styled } from "../../../styles";
import { Typo } from "../../Atoms/Typography";

var isFiltered = function isFiltered(theme) {
  return theme.name === saiyanTheme.name;
};

export var StyledInputRangeContainer = styled.div.withConfig({
  displayName: "InputRangestyled__StyledInputRangeContainer",
  componentId: "sc-1addokr-0"
})(["padding:", ";flex-grow:1;", "{padding:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.md;
}, media.maxSm, function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.spacing.base.md, " ").concat(theme.spacing.base.lg);
});
export var StyledInputRangeBubbleContainer = styled.div.withConfig({
  displayName: "InputRangestyled__StyledInputRangeBubbleContainer",
  componentId: "sc-1addokr-1"
})(["height:6rem;"]);
export var Animation = function Animation(_ref3) {
  var theme = _ref3.theme;
  return css(["animation:wobble 2s ease-in-out 1 alternate;@keyframes wobble{0%{transform:scale(1);}20%{transform:scale(1.15);}30%{transform:scale(1);}40%{transform:scale(1.1);}50%{transform:scale(1);}60%{transform:scale(1.05);}70%{transform:scale(1);}80%{transform:scale(1.02);}100%{transform:scale(1);}}"]);
};
export var StyledInputRangeBubblePosition = styled.output.withConfig({
  displayName: "InputRangestyled__StyledInputRangeBubblePosition",
  componentId: "sc-1addokr-2"
})(["", ""], function (_ref4) {
  var theme = _ref4.theme;
  return css(["width:", ";height:", ";position:relative;display:flex;justify-content:center;align-items:center;transform:translateX(-50%) ", ";", "{transform:translateX(-50%) ", ";}"], isFiltered(theme) ? "4rem" : "3.5rem", isFiltered(theme) ? "4rem" : "3.5rem", !isFiltered(theme) && " rotate(45deg)", media.maxMd, isFiltered(theme) ? " translateY(".concat(theme.spacing.base.sm, ")") : " translateY(".concat(theme.spacing.base.xs, ") rotate(45deg)"));
});
export var StyledInputRangeBubble = styled.output.withConfig({
  displayName: "InputRangestyled__StyledInputRangeBubble",
  componentId: "sc-1addokr-3"
})(["", ""], function (_ref5) {
  var theme = _ref5.theme,
      isSliding = _ref5.isSliding;
  return css(["box-sizing:border-box;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border:2px solid ", ";", " ", ""], theme.color.primary, isFiltered(theme) && "border-radius: 50%;", isSliding && Animation);
});
export var StyledInputRangeBubbleTypo = styled(Typo).withConfig({
  displayName: "InputRangestyled__StyledInputRangeBubbleTypo",
  componentId: "sc-1addokr-4"
})(["", ""], function (_ref6) {
  var theme = _ref6.theme;
  return css(["font-size:", ";transform:", ";line-height:", ";padding:0;", "{font-size:", ";}"], !isFiltered(theme) ? theme.font.size.md : theme.font.size.xl, !isFiltered(theme) ? " translateY(4px) rotate(-45deg)" : "translateY(0)", theme.font.lineHeight.xl, media.maxMd, !isFiltered(theme) ? theme.font.size.xs : theme.font.size.md);
});
export var StyledInputRangeThumb = styled.div.withConfig({
  displayName: "InputRangestyled__StyledInputRangeThumb",
  componentId: "sc-1addokr-5"
})(["-webkit-appearance:none;box-shadow:", ";height:1px;width:1px;background:", ";cursor:pointer;position:relative;&:after{content:'';position:absolute;height:", ";width:", ";margin-left:-", ";border-radius:50%;background:", ";border:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.dimension.elevationLevel1;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.primary;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.base.md;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.base.md;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.base.sm;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.color.white;
}, function (_ref13) {
  var theme = _ref13.theme;
  return "5px solid ".concat(theme.color.primary);
});

var InputRangeThumbArea = function InputRangeThumbArea(_ref14) {
  var theme = _ref14.theme;
  return css(["::-webkit-slider-thumb{-webkit-appearance:none;height:1px;width:1px;border-radius:50%;border:2px solid ", ";transform:translateY(", ") scale(", ");", "{transform:translateY(", ") scale(", ");}opacity:0;cursor:pointer;}::-moz-range-thumb{-webkit-appearance:none;height:1px;width:1px;border:2px solid ", ";transform:scale(", ");border-radius:50%;opacity:0;border:none;cursor:pointer;}::-ms-thumb{-webkit-appearance:none;height:1px;width:1px;border:2px solid ", ";border-radius:50%;opacity:0;cursor:pointer;}"], theme.color.white, theme.spacing.base.xxs, theme.defaultSpacing * 4, media.maxMd, theme.spacing.base.xxs, theme.defaultSpacing * 2, theme.color.white, theme.defaultSpacing * 4, theme.color.white);
};

var StyledInputRangeTrack = function StyledInputRangeTrack(_ref15) {
  var theme = _ref15.theme;
  return css(["::-webkit-slider-runnable-track{width:100%;height:", ";cursor:pointer;background:", ";box-shadow:", ";border-radius:", ";}:focus::-webkit-slider-runnable-track{background:", ";}::-moz-range-track{width:100%;height:", ";cursor:pointer;background:", ";box-shadow:", ";border-radius:", ";}::-ms-track{width:100%;height:", "px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent;}::-ms-fill-lower{background:", ";box-shadow:", ";border-radius:", ";}::-ms-fill-upper{background:", ";box-shadow:", ";border-radius:", ";}:focus::-ms-fill-lower{background:", ";}:focus::-ms-fill-upper{background:", ";}"], theme.spacing.base.xs, theme.color.grey2, theme.dimension.elevationLevel1, theme.dimension.borderRadius1, theme.color.grey2, theme.spacing.base.xs, theme.color.grey2, theme.dimension.elevationLevel1, theme.dimension.borderRadius1, theme.spacing.base.xs, theme.color.grey2, theme.dimension.elevationLevel1, theme.dimension.borderRadius1, theme.color.grey2, theme.dimension.elevationLevel1, theme.dimension.borderRadius1, theme.color.grey2, theme.color.grey2);
};

export var StyledInputRange = styled.input.withConfig({
  displayName: "InputRangestyled__StyledInputRange",
  componentId: "sc-1addokr-6"
})(["width:100%;height:", ";-webkit-appearance:none;:focus{outline:none;}", " ", ""], function (_ref16) {
  var theme = _ref16.theme;
  return theme.spacing.base.lg;
}, InputRangeThumbArea, StyledInputRangeTrack);
export var StyledInputRangeMarks = styled.div.withConfig({
  displayName: "InputRangestyled__StyledInputRangeMarks",
  componentId: "sc-1addokr-7"
})(["position:relative;padding-bottom:4rem;"]);
export var StyledInputRangeMarkLine = styled.div.withConfig({
  displayName: "InputRangestyled__StyledInputRangeMarkLine",
  componentId: "sc-1addokr-8"
})(["left:", "%;top:-4px;position:absolute;height:", ";width:1px;background-color:", ";", "{display:", ";}", "{display:", ";}"], function (_ref17) {
  var left = _ref17.left;
  return left;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.spacing.base.md;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.color.grey3;
}, media.maxMd, function (_ref20) {
  var index = _ref20.index,
      markAmount = _ref20.markAmount;
  var showFirstLastAndEverySecond = index === 0 || index === markAmount || index % 2 === 0;
  return showFirstLastAndEverySecond ? 'block' : 'none';
}, media.maxSm, function (_ref21) {
  var index = _ref21.index,
      markAmount = _ref21.markAmount;
  var showFirstLastAndEveryFifth = index === 0 || index === markAmount || index % 5 === 0;
  return showFirstLastAndEveryFifth ? 'block' : 'none';
});
export var StyledInputRangeMarkTypo = styled(Typo).withConfig({
  displayName: "InputRangestyled__StyledInputRangeMarkTypo",
  componentId: "sc-1addokr-9"
})(["position:absolute;max-width:unset;overflow:unset;text-overflow:ellipsis;top:", ";transform:translateX(-50%);"], function (_ref22) {
  var theme = _ref22.theme;
  return theme.spacing.base.md;
});
//# sourceMappingURL=InputRange.styled.js.map