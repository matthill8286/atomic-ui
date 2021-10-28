import { css, styled } from "../../../styles";
import ReactPlayer from 'react-player';
export var StyledVideoWrapper = styled.div.withConfig({
  displayName: "VideoPlayerstyled__StyledVideoWrapper",
  componentId: "sc-1myzs5b-0"
})(function (_ref) {
  var aspect = _ref.aspect;
  return css(["position:relative;height:100%;width:100%;:before{content:'';display:block;padding-bottom:calc(100% / calc(", "));}> img{height:auto;}"], aspect);
});
export var StyledVideoPlayer = styled(ReactPlayer).withConfig({
  displayName: "VideoPlayerstyled__StyledVideoPlayer",
  componentId: "sc-1myzs5b-1"
})(["position:absolute;width:100%;height:100%;left:0;top:0;border:none;iframe{", ";}"], function (_ref2) {
  var theme = _ref2.theme,
      rounded = _ref2.rounded;
  return rounded ? "border-radius: ".concat(theme.dimension.borderRadius2, " !important;") : undefined;
});
//# sourceMappingURL=VideoPlayer.styled.js.map