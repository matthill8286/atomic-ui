import { Button } from "../../Atoms/Button";
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
export var StyledModalFooter = styled.div.withConfig({
  displayName: "ModalButtonGroupstyled__StyledModalFooter",
  componentId: "g6jske-0"
})(["", ""], function (_ref) {
  var showButtonSeparator = _ref.showButtonSeparator,
      theme = _ref.theme,
      buttonType = _ref.buttonAlignment;
  return css(["border-top:1px solid ", ";padding-top:", ";width:100%;display:flex;flex-direction:row;", " ", " ", " ", "{flex-direction:column-reverse;}"], showButtonSeparator ? theme.color.grey2 : "transparent", function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.base.lg;
  }, buttonType === 'space-between' && "\n      justify-content: space-between;\n    ", buttonType === 'right' && "\n      justify-content: flex-end;\n    ", buttonType === 'center' && "\n      justify-content: center;\n      width: 85%;\n      margin: 0 auto;\n    ", media.maxSm);
});
export var StyledModalFooterPrimary = styled.div.withConfig({
  displayName: "ModalButtonGroupstyled__StyledModalFooterPrimary",
  componentId: "g6jske-1"
})(["", " ", " ", ""], function (_ref3) {
  var buttonType = _ref3.buttonAlignment;
  return buttonType === 'space-between' && "\n    text-align: right;\n    ";
}, function (_ref4) {
  var buttonType = _ref4.buttonAlignment;
  return buttonType === 'right' && "\n    text-align: right;\n    ";
}, function (_ref5) {
  var buttonType = _ref5.buttonAlignment,
      buttonWidth = _ref5.buttonWidth,
      theme = _ref5.theme;
  return buttonType === 'center' ? "\n      margin: 0 auto 0 ".concat(theme.spacing.base.xs, ";\n      width: ").concat(typeof buttonWidth === 'number' ? "".concat(buttonWidth, "px ") : '100%', "\n    ") : "\n      margin: 0 ".concat(theme.spacing.base.md, "\n    ");
});
export var StyledModalFooterSecondary = styled.div.withConfig({
  displayName: "ModalButtonGroupstyled__StyledModalFooterSecondary",
  componentId: "g6jske-2"
})(["", ""], function (_ref6) {
  var theme = _ref6.theme,
      buttonType = _ref6.buttonAlignment;
  return css(["", " ", " ", "{margin-top:", ";margin-right:0;}"], buttonType === 'right' && "\n      margin-right: ".concat(theme.spacing.base.md, ";\n    "), buttonType === 'center' ? "\n      margin: 0 ".concat(theme.spacing.base.xs, " 0 auto;\n       width: 100%;\n    ") : "\n      margin: 0 ".concat(theme.spacing.base.md, "\n    "), media.maxSm, function (_ref7) {
    var theme = _ref7.theme;
    return theme.spacing.base.sm;
  });
});
export var StyledModalFooterButton = styled(Button).withConfig({
  displayName: "ModalButtonGroupstyled__StyledModalFooterButton",
  componentId: "g6jske-3"
})(["width:100%;margin:0 auto;max-width:400px;", "{width:100%;}"], media.maxSm);
//# sourceMappingURL=ModalButtonGroup.styled.js.map