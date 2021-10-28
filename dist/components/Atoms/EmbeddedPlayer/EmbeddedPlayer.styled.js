import { css, styled } from "../../../styles";
export var StyledRelativeEmbeddedParent = styled.div.withConfig({
  displayName: "EmbeddedPlayerstyled__StyledRelativeEmbeddedParent",
  componentId: "d95qmr-0"
})(function (_ref) {
  var aspect = _ref.aspect,
      maxHeight = _ref.maxHeight;
  return css(["position:relative;width:100%;max-height:", ";:before{content:'';display:block;padding-bottom:calc(100% / calc(", "));}>:first-child{position:absolute;top:0;left:0;width:100%;height:100%;}> img{height:auto;}"], maxHeight !== null && maxHeight !== void 0 ? maxHeight : '500px', aspect);
});
//# sourceMappingURL=EmbeddedPlayer.styled.js.map