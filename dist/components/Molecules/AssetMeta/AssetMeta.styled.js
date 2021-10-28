import { Button } from "../../Atoms/Button";
import { FlexBox } from "../../Helper/FlexBox";
import { CopyText, Icon } from "../../..";
import { styled } from "../../../styles/styled";
var IconButton = styled(Button).withConfig({
  displayName: "AssetMetastyled__IconButton",
  componentId: "obasho-0"
})(["display:grid;grid-template-columns:1fr auto 1fr;align-content:center;", "{padding:", ";}"], Icon, function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.xs;
});
export var LaunchButton = styled(IconButton).withConfig({
  displayName: "AssetMetastyled__LaunchButton",
  componentId: "obasho-1"
})(["margin-bottom:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.sm;
});
export var CompleteButton = styled(IconButton).withConfig({
  displayName: "AssetMetastyled__CompleteButton",
  componentId: "obasho-2"
})(["margin-bottom:", ";color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.base.sm;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.primary;
});
export var IconsWrapper = styled(FlexBox).withConfig({
  displayName: "AssetMetastyled__IconsWrapper",
  componentId: "obasho-3"
})(["margin-bottom:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.md;
});
export var CompetencyText = styled(CopyText).withConfig({
  displayName: "AssetMetastyled__CompetencyText",
  componentId: "obasho-4"
})(["margin-top:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.md;
});
export var StyledIframe = styled.iframe.withConfig({
  displayName: "AssetMetastyled__StyledIframe",
  componentId: "obasho-5"
})(["width:100%;height:100%;min-height:40em;padding-bottom:51%;position:relative;left:0;top:0;border:none;z-index:2;margin-top:10%;"]);
//# sourceMappingURL=AssetMeta.styled.js.map