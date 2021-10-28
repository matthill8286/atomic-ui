import { Icon } from "../../Atoms/Icon";
import { Typo } from "../../Atoms/Typography/Typo/Typo";
import { css, styled } from "../../../styles/styled";
export var StyledContainer = styled.div.withConfig({
  displayName: "Dropdownstyled__StyledContainer",
  componentId: "sc-14o982p-0"
})(["position:relative;cursor:pointer;", ";"], function (_ref) {
  var theme = _ref.theme;
  return css(["& label{margin-top:", ";margin-left:", ";line-height:", ";font-size:", ";color:", ";position:relative;}"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.base.xs;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.base.xs;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.font.lineHeight.md;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.font.size.md;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.color.black;
  });
});
export var StyledDropdown = styled.div.withConfig({
  displayName: "Dropdownstyled__StyledDropdown",
  componentId: "sc-14o982p-1"
})(["", ""], function (_ref7) {
  var theme = _ref7.theme,
      hasLabel = _ref7.hasLabel,
      withBackground = _ref7.withBackground;
  return css(["width:100%;position:relative;display:inline-block;margin-top:", ";line-height:", ";box-shadow:", ";border-radius:", ";", ";& span{margin-left:20px;}& + hr{height:2px;width:100%;margin-top:2px;}"], hasLabel ? theme.font.lineHeight.xxxs : 0, theme.font.lineHeight.xxxl, theme.dimension.elevationLevel1, theme.dimension.borderRadius2, withBackground && "background-color: ".concat(theme.color.white));
});
export var StyledTypo = styled(Typo).withConfig({
  displayName: "Dropdownstyled__StyledTypo",
  componentId: "sc-14o982p-2"
})(["max-width:calc(100% - 16px);"]);
export var StyledIcon = styled(Icon).withConfig({
  displayName: "Dropdownstyled__StyledIcon",
  componentId: "sc-14o982p-3"
})(["", ""], function (_ref8) {
  var iconLeft = _ref8.iconLeft;
  return css(["pointer-events:none;position:absolute;top:50%;right:", ";transform:translateY(-50%);"], iconLeft ? "40px" : "20px");
});
export var StyledDone = styled(Icon).withConfig({
  displayName: "Dropdownstyled__StyledDone",
  componentId: "sc-14o982p-4"
})(["pointer-events:none;position:absolute;left:20px;"]);
export var StyledList = styled.ol.withConfig({
  displayName: "Dropdownstyled__StyledList",
  componentId: "sc-14o982p-5"
})(["", ""], function (_ref9) {
  var active = _ref9.active,
      isSearchable = _ref9.isSearchable,
      theme = _ref9.theme,
      iconLeft = _ref9.iconLeft;
  return "\n    min-width: 100%;\n    ".concat(iconLeft ? "" : "max-width: 100%;", "\n    max-height: 320px;\n    overflow-y: ").concat(iconLeft ? "hidden" : "scroll", ";\n    position: absolute;\n    top: ").concat(isSearchable ? "66px" : "50px", ";\n    z-index: 3;\n    list-style: none;\n    padding: ").concat(iconLeft ? 0 : theme.spacing.base.xs, " 0;\n    margin: ").concat(theme.spacing.base.sm, " 0;\n    box-shadow: ").concat(theme.dimension.elevationLevel2, ";\n    background-color: white;\n    border-radius: ").concat(iconLeft ? '0 0 8px 8px' : theme.dimension.borderRadius2, ";\n    transform: scaleY(0);\n    transform: ").concat(active && 'scaleY(1)', ";\n    transform-origin: 0 0;\n    transition: transform ").concat(theme.transition.short, " ease;\n    ").concat(iconLeft ? "right: 0;" : "", "\n    overflow-x: hidden;\n  ");
});
export var StyledDropdownOption = styled.li.withConfig({
  displayName: "Dropdownstyled__StyledDropdownOption",
  componentId: "sc-14o982p-6"
})(["", ""], function (_ref10) {
  var theme = _ref10.theme,
      checkmark = _ref10.checkmark;
  return "\n    display: ".concat(checkmark ? "inline-flex" : "block", ";\n    align-items: center;\n    max-width: 100%;\n    min-width: 100%;\n    padding: ").concat(theme.spacing.base.xs, " ").concat(theme.spacing.base.sm, ";\n    background: ").concat(theme.color.white, ";\n    hyphens: auto;\n    text-align: left;\n    ").concat(checkmark ? "padding-left: 45px;" : "", "\n\n    &:hover {\n      cursor: pointer;\n      background: ").concat(theme.color.grey1, ";\n    }\n  ");
});
export var StyledSearchableDropdownWrapper = styled.div.withConfig({
  displayName: "Dropdownstyled__StyledSearchableDropdownWrapper",
  componentId: "sc-14o982p-7"
})(["position:relative;"]);
export var StyledFieldWrapper = styled.div.withConfig({
  displayName: "Dropdownstyled__StyledFieldWrapper",
  componentId: "sc-14o982p-8"
})(["display:inline-block;", " padding:0 12px;margin-top:", ";", " border-radius:", ";box-shadow:", ";position:relative;width:100%;"], function (_ref11) {
  var theme = _ref11.theme,
      noBorder = _ref11.noBorder;
  return !noBorder && "border: 1px solid ".concat(theme.color.grey5, ";");
}, function (_ref12) {
  var hasLabel = _ref12.hasLabel,
      theme = _ref12.theme;
  return hasLabel ? theme.spacing.base.sm : 0;
}, function (_ref13) {
  var theme = _ref13.theme,
      noBorder = _ref13.noBorder;
  return !noBorder && "border: 1px solid ".concat(theme.color.grey5, ";");
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.dimension.borderRadius3;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.dimension.elevationLevel1;
});
export var StyledDropdownSelect = styled.select.withConfig({
  displayName: "Dropdownstyled__StyledDropdownSelect",
  componentId: "sc-14o982p-9"
})(["appearance:none;background-color:transparent;border:none;box-shadow:none;cursor:pointer;display:block;font-size:", ";font-family:", ";", ";outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;z-index:2;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.font.size.sm;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.font.family.default;
}, function (_ref18) {
  var theme = _ref18.theme;
  return css(["padding:calc(", " * 3) 0;"], theme.spacing.base.xxs);
});
//# sourceMappingURL=Dropdown.styled.js.map