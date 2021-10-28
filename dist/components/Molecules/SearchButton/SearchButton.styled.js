import { Icon } from "../../Atoms/Icon";
import { getBoxDimension } from "../../../styles/sc-shared-functions";
import { styled } from "../../../styles/styled";
export var StyledInputSearchWrapper = styled.div.withConfig({
  displayName: "SearchButtonstyled__StyledInputSearchWrapper",
  componentId: "sc-19igbac-0"
})(["display:inline-flex;flex-direction:column;position:relative;vertical-align:top;width:100%;max-width:300px;border-radius:", ";border:1px solid ", ";", " ", " ", "{position:absolute;right:0;top:0;outline:none;&:focus{svg{fill:", ";}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.dimension.borderRadius8;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.grey2;
}, function (_ref3) {
  var margin = _ref3.margin,
      theme = _ref3.theme;
  return margin && "margin: ".concat(getBoxDimension(theme, margin), ";");
}, function (_ref4) {
  var padding = _ref4.padding,
      theme = _ref4.theme;
  return padding && "padding: ".concat(getBoxDimension(theme, padding), ";");
}, Icon, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.grey2;
});
export var StyledInputSearch = styled.input.withConfig({
  displayName: "SearchButtonstyled__StyledInputSearch",
  componentId: "sc-19igbac-1"
})(["border:0;box-sizing:border-box;display:block;font-size:", ";font-family:", ";padding-left:", ";padding-right:", ";margin:0;min-width:0;width:100%;height:", ";line-height:", ";outline:none;position:relative;background:transparent;-webkit-tap-highlight-color:transparent;::placeholder{color:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.font.size.sm;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.font.family.default;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.base.sm;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.base.lg;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.base.xxl;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.font.lineHeight.md;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.color.grey5;
});
//# sourceMappingURL=SearchButton.styled.js.map