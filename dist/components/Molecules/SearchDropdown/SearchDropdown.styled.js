import { Typo } from "../../Atoms/Typography/Typo/Typo";
import { media, styled } from "../../../styles";
export var StyledSearchList = styled.ol.withConfig({
  displayName: "SearchDropdownstyled__StyledSearchList",
  componentId: "sc-1havyp7-0"
})(["", ""], function (_ref) {
  var active = _ref.active,
      isSearchable = _ref.isSearchable,
      theme = _ref.theme;
  return "\n    max-width: 80%;\n    max-height: 280px;\n    overflow-y: scroll;\n    position: absolute;\n    top: ".concat(isSearchable ? "96px" : "97px", ";\n    left: 0;\n    right: 0;\n    z-index: 3;\n    list-style: none;\n    padding: 0;\n    margin: auto;\n    box-shadow: ").concat(theme.dimension.elevationLevel2, ";\n    background-color: white;\n    border-radius: ").concat(theme.dimension.borderRadius2, ";\n    transform: scaleY(0);\n    transform: ").concat(active && 'scaleY(1)', ";\n    transform-origin: 0 0;\n    transition: transform ").concat(theme.transition.short, " ease;\n  ");
});
export var StyledSearchDropdownOption = styled.li.withConfig({
  displayName: "SearchDropdownstyled__StyledSearchDropdownOption",
  componentId: "sc-1havyp7-1"
})(["", ""], function (_ref2) {
  var theme = _ref2.theme;
  return "\n    display: block;\n    max-width: 100%;\n    margin: auto;\n    background: ".concat(theme.color.white, ";\n    padding: ").concat(theme.spacing.base.sm, " ").concat(theme.spacing.base.lg, ";\n    border-bottom: 1px solid ").concat(theme.color.grey2, ";\n    hyphens: auto;\n    text-align: left;\n\n    &:hover {\n      cursor: pointer;\n      background: ").concat(theme.color.grey3, ";\n\n      > div:first-child {\n          font-weight: bold;\n          color: ").concat(theme.color.grey6, ";\n        }\n      }\n  ");
});
export var StyledBorderedTypo = styled(Typo).withConfig({
  displayName: "SearchDropdownstyled__StyledBorderedTypo",
  componentId: "sc-1havyp7-2"
})(["border-right:1px solid ", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.grey2;
});
export var StyledTypo = styled(Typo).withConfig({
  displayName: "SearchDropdownstyled__StyledTypo",
  componentId: "sc-1havyp7-3"
})(["min-width:calc(100% - 16px);"]);
export var StyledSearchDropdownWrapper = styled.div.withConfig({
  displayName: "SearchDropdownstyled__StyledSearchDropdownWrapper",
  componentId: "sc-1havyp7-4"
})(["position:relative;display:none;height:48px;", "{display:flex;}"], media.md);
//# sourceMappingURL=SearchDropdown.styled.js.map