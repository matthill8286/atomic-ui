import { styled } from "../../../styles/styled";
export var StyledToolTipWrapper = styled.div.withConfig({
  displayName: "ToolTipstyled__StyledToolTipWrapper",
  componentId: "sc-1x0ov9r-0"
})(["position:relative;display:inline-block;cursor:pointer;"]);
export var StyledToolTipContent = styled.div.withConfig({
  displayName: "ToolTipstyled__StyledToolTipContent",
  componentId: "sc-1x0ov9r-1"
})(["background:", ";padding:10px 0;border-radius:", ";"], function (_ref) {
  var theme = _ref.theme,
      primary = _ref.primary;
  return primary ? theme.color.grey4 : theme.color.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dimension.borderRadius2;
});
export var StyledToolTip = styled.div.withConfig({
  displayName: "ToolTipstyled__StyledToolTip",
  componentId: "sc-1x0ov9r-2"
})(["border-radius:", ";box-sizing:border-box;display:inline-block;position:absolute;margin-top:20px;padding:0 ", ";z-index:10;left:50%;width:120px;transform:translateX(-50%);background:", ";box-shadow:", ";&::before{content:'';box-shadow:", ";background:", ";display:block;position:absolute;width:14px;top:-7px;z-index:-1;left:50%;margin-left:-7px;height:14px;transform:rotate(45deg);}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.dimension.borderRadius2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.xs;
}, function (_ref5) {
  var theme = _ref5.theme,
      primary = _ref5.primary;
  return primary ? theme.color.grey4 : theme.color.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.dimension.elevationLevel2;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.dimension.elevationLevel2;
}, function (_ref8) {
  var theme = _ref8.theme,
      primary = _ref8.primary;
  return primary ? theme.color.grey4 : theme.color.white;
});
//# sourceMappingURL=ToolTip.styled.js.map