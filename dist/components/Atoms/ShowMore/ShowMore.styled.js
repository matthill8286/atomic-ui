import { css, styled } from "../../../styles/styled";
export var Wrapper = styled.div.withConfig({
  displayName: "ShowMorestyled__Wrapper",
  componentId: "sc-188v62i-0"
})(function (_ref) {
  var visibleHeight = _ref.visibleHeight,
      isCollapsed = _ref.isCollapsed;

  if (!isCollapsed) {
    return '';
  }

  return css(["display:flex;position:relative;overflow-y:hidden;max-height:", "px;white-space:initial;"], visibleHeight);
});
export var LabelWrapper = styled.div.withConfig({
  displayName: "ShowMorestyled__LabelWrapper",
  componentId: "sc-188v62i-1"
})(function (_ref2) {
  var theme = _ref2.theme,
      labelAlignment = _ref2.labelAlignment,
      _ref2$fontColor = _ref2.fontColor,
      fontColor = _ref2$fontColor === void 0 ? 'grey5' : _ref2$fontColor,
      _ref2$fontWeight = _ref2.fontWeight,
      fontWeight = _ref2$fontWeight === void 0 ? 'semibold' : _ref2$fontWeight,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? 16 : _ref2$fontSize,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? 0 : _ref2$padding,
      lineHeight = _ref2.lineHeight;
  return css(["display:flex;cursor:pointer;color:", ";font-size:", "px;font-family:", ";font-weight:", ";justify-content:", ";align-items:flex-start;padding:0 ", "px;", ""], theme.color[fontColor], fontSize, theme.font.family.default, theme.font.weight[fontWeight], labelAlignment, padding, lineHeight ? "height: ".concat(lineHeight, "px;") : '');
});
export var FadeOutOverlay = styled.div.withConfig({
  displayName: "ShowMorestyled__FadeOutOverlay",
  componentId: "sc-188v62i-2"
})(function (_ref3) {
  var _ref3$fadeOutHeight = _ref3.fadeOutHeight,
      fadeOutHeight = _ref3$fadeOutHeight === void 0 ? 0 : _ref3$fadeOutHeight,
      _ref3$fadeOutBackgrou = _ref3.fadeOutBackgroundColor,
      fadeOutBackgroundColor = _ref3$fadeOutBackgrou === void 0 ? '#ffffff' : _ref3$fadeOutBackgrou;
  return css(["pointer-events:none;position:absolute;bottom:0;width:100%;height:", "px;background-image:linear-gradient(rgba(255,255,255,0),", ");"], fadeOutHeight, fadeOutBackgroundColor);
});
export var ContentWrapper = styled.div.withConfig({
  displayName: "ShowMorestyled__ContentWrapper",
  componentId: "sc-188v62i-3"
})(["width:100%;font-family:", ";white-space:initial;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.font.family.default;
});
export var FlexItem = styled.div.withConfig({
  displayName: "ShowMorestyled__FlexItem",
  componentId: "sc-188v62i-4"
})(["display:flex;"]);
//# sourceMappingURL=ShowMore.styled.js.map