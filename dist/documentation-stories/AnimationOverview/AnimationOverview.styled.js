import { css, styled } from "../../styles";
export var AnimationBox = styled.div.withConfig({
  displayName: "AnimationOverviewstyled__AnimationBox",
  componentId: "sc-11f8iw5-0"
})(["animation:", ";width:100px;height:100px;margin:18px;background-color:", ";"], function (_ref) {
  var keyframes = _ref.keyframes,
      infinite = _ref.infinite,
      fillMode = _ref.fillMode,
      transition = _ref.transition,
      easing = _ref.easing,
      theme = _ref.theme;
  return css(["", " ", " ", " ", " ", ""], keyframes, theme.transition[transition], infinite ? 'infinite' : '', easing, fillMode);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.grey3;
});
export var AnimationContainer = styled.div.withConfig({
  displayName: "AnimationOverviewstyled__AnimationContainer",
  componentId: "sc-11f8iw5-1"
})(["font-family:", ";margin-top:12px;display:inline-flex;flex:1;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.font.family.default;
});
//# sourceMappingURL=AnimationOverview.styled.js.map