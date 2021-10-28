import InputMask from 'react-input-mask';
import { Icon } from "../Icon";
import { defaultSpacing } from "../../../styles";
import { getBoxDimension } from "../../../styles/sc-shared-functions";
import { styled } from "../../../styles/styled";
export var StyledInputWrapper = styled.div.withConfig({
  displayName: "Inputstyled__StyledInputWrapper",
  componentId: "sc-1ycm54d-0"
})(["display:inline-flex;flex-direction:column;position:relative;vertical-align:top;width:100%;", " ", " ", "{position:absolute;right:0;top:", "px;outline:none;&:focus{svg{fill:", ";}}}"], function (_ref) {
  var margin = _ref.margin,
      theme = _ref.theme;
  return margin && "margin: ".concat(getBoxDimension(theme, margin), ";");
}, function (_ref2) {
  var padding = _ref2.padding,
      theme = _ref2.theme;
  return padding && "padding: ".concat(getBoxDimension(theme, padding), ";");
}, Icon, 3.5 * defaultSpacing, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.black;
});
export var StyledInput = styled.input.withConfig({
  displayName: "Inputstyled__StyledInput",
  componentId: "sc-1ycm54d-1"
})(["border:0;box-sizing:content-box;display:block;font-size:", ";font-family:", ";margin:", " 0 0 0;box-shadow:", ";border-radius:", ";background-color:", ";min-width:0;width:100%;padding:", ";line-height:", ";outline:none;position:relative;-webkit-tap-highlight-color:transparent;::placeholder{opacity:0;}:focus::placeholder{opacity:1;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.font.size.sm;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.font.family.default;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.md;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.dimension.elevationLevel2;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.dimension.borderRadius3;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.white;
}, function (_ref10) {
  var theme = _ref10.theme;
  return "".concat(theme.spacing.base.xs, " ").concat(theme.spacing.base.sm, ";");
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.font.lineHeight.xl;
});
export var StyledInputArea = styled.textarea.withConfig({
  displayName: "Inputstyled__StyledInputArea",
  componentId: "sc-1ycm54d-2"
})(["border:0;box-sizing:content-box;display:block;font-size:", ";font-family:", ";margin:", " 0 0 0;box-shadow:", ";border-radius:", ";background-color:", ";min-width:0;width:100%;line-height:", ";outline:none;position:relative;-webkit-tap-highlight-color:transparent;::placeholder{opacity:0;}:focus::placeholder{opacity:1;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.font.size.sm;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.font.family.default;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing.base.md;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.dimension.elevationLevel2;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.dimension.borderRadius3;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.color.white;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.font.lineHeight.sm;
});
export var StyledInputMask = styled(InputMask).withConfig({
  displayName: "Inputstyled__StyledInputMask",
  componentId: "sc-1ycm54d-3"
})(["border:0;box-sizing:content-box;display:block;font-size:", ";font-family:", ";margin:", " 0 0 0;min-width:0;width:100%;height:", ";line-height:", ";outline:none;position:relative;background:transparent;-webkit-tap-highlight-color:transparent;::placeholder{opacity:0;}:focus::placeholder{opacity:1;}"], function (_ref19) {
  var theme = _ref19.theme;
  return theme.font.size.sm;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.font.family.default;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.spacing.base.md;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.spacing.base.md;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.font.lineHeight.sm;
});
export var StyledHelpWrapper = styled.div.withConfig({
  displayName: "Inputstyled__StyledHelpWrapper",
  componentId: "sc-1ycm54d-4"
})(["margin-top:", ";"], function (_ref24) {
  var theme = _ref24.theme,
      inputStyle = _ref24.inputStyle;
  return inputStyle === 'dense' ? theme.spacing.base.xxs : theme.spacing.base.xs;
});
//# sourceMappingURL=Input.styled.js.map