import React from 'react';
import { css, styled } from "../../../styles/styled";
import { CopyText } from "../Typography";
var StyledInputLabelWrapper = styled.div.withConfig({
  displayName: "InputLabel__StyledInputLabelWrapper",
  componentId: "jwa22m-0"
})(["margin-right:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.lg;
});
var StyledLabel = styled(CopyText).withConfig({
  displayName: "InputLabel__StyledLabel",
  componentId: "jwa22m-1"
})(["position:absolute;margin-top:", ";transform-origin:top left;transition:color ", " cubic-bezier(0,0,0.2,1) 0ms,top ", " cubic-bezier(0,0,0.2,1) 0ms;", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.xxs;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.transition.medium;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.transition.medium;
}, function (_ref5) {
  var shrink = _ref5.shrink,
      theme = _ref5.theme;
  return shrink ? css(["top:0;transform-origin:top left;"]) : css(["top:", ";transform-origin:top left;"], theme.font.lineHeight.sm);
});
export var InputLabel = function InputLabel(props) {
  var children = props.children,
      color = props.color,
      htmlFor = props.htmlFor,
      inputStyle = props.inputStyle,
      label = props.label,
      shrink = props.shrink;
  var fontSize = shrink ? 'xxs' : inputStyle === 'dense' ? 'xs' : 'sm';
  return React.createElement(StyledInputLabelWrapper, null, React.createElement(StyledLabel, {
    tag: "label",
    color: color,
    fontSize: fontSize,
    lineHeight: "xs",
    shrink: shrink,
    htmlFor: htmlFor
  }, label), children);
};
//# sourceMappingURL=InputLabel.js.map