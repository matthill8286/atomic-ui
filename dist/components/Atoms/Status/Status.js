import { css, styled } from "../../../styles/styled";
export var Status = styled.div.withConfig({
  displayName: "Status",
  componentId: "sc-1bmsh6k-0"
})(["", ";width:", ";height:", ";background:", ";font-family:", ";font-size:", ";color:", ";border-radius:100%;text-align:center;display:flex;justify-content:center;align-items:center;"], function (_ref) {
  var withinIcon = _ref.withinIcon,
      theme = _ref.theme;
  return withinIcon && css(["position:absolute;margin-left:", ";margin-top:-", ";z-index:90;"], theme.spacing.base.xs, theme.spacing.base.xs);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.sm;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.base.sm;
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$type = _ref4.type,
      type = _ref4$type === void 0 ? 'primary' : _ref4$type;
  return theme.color[type];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.font.family.default;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.font.size.xxs;
}, function (_ref7) {
  var theme = _ref7.theme,
      _ref7$type = _ref7.type,
      type = _ref7$type === void 0 ? 'primary' : _ref7$type;
  return type === 'white' ? theme.color.grey6 : theme.color.white;
});
//# sourceMappingURL=Status.js.map