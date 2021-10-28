import { Icon } from "../../Atoms/Icon";
import { InfoText, Typo } from "../../Atoms/Typography";
import { media, spacing } from "../../../styles";
import { styled } from "../../../styles/styled";
import { AssetImage } from "./elements/AssetImage";
export var StyledAssetTileCompactWrapper = styled.div.withConfig({
  displayName: "AssetTileCompactstyled__StyledAssetTileCompactWrapper",
  componentId: "sc-1cwhhek-0"
})(["display:flex;flex-direction:row;justify-content:space-between;position:relative;padding:", " 0;"], spacing.base.xs);
export var StyledAssetTileCompactElementWrapper = styled.div.withConfig({
  displayName: "AssetTileCompactstyled__StyledAssetTileCompactElementWrapper",
  componentId: "sc-1cwhhek-1"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
export var StyledContentColumn = styled.div.withConfig({
  displayName: "AssetTileCompactstyled__StyledContentColumn",
  componentId: "sc-1cwhhek-2"
})(["min-width:0;flex-grow:1;position:relative;width:100%;", ""], function (_ref) {
  var hasIcon = _ref.hasIcon,
      theme = _ref.theme;
  return hasIcon ? "padding-left: ".concat(theme.spacing.base.xxs, ";") : '';
});
export var StyledAssetImage = styled(AssetImage).withConfig({
  displayName: "AssetTileCompactstyled__StyledAssetImage",
  componentId: "sc-1cwhhek-3"
})(["flex:1;margin:auto;align-content:center;justify-content:center;width:", ";height:", ";"], function (_ref2) {
  var width = _ref2.width;
  return width;
}, function (_ref3) {
  var height = _ref3.height;
  return height;
});
export var StyledContentList = styled.div.withConfig({
  displayName: "AssetTileCompactstyled__StyledContentList",
  componentId: "sc-1cwhhek-4"
})(["flex-grow:1;margin-left:", ";align-self:center;", "{flex-grow:1;margin-left:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.md;
}, media.maxMd, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.sm;
});
export var StyledRightIconsWrapper = styled.div.withConfig({
  displayName: "AssetTileCompactstyled__StyledRightIconsWrapper",
  componentId: "sc-1cwhhek-5"
})(["margin:", " 0;padding:", ";display:flex;cursor:pointer;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.xs;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.base.sm;
});
export var StyledIconsWrapper = styled.div.withConfig({
  displayName: "AssetTileCompactstyled__StyledIconsWrapper",
  componentId: "sc-1cwhhek-6"
})(["flex:1;display:inline-flex;"]);
export var StyledElementIcon = styled(Icon).withConfig({
  displayName: "AssetTileCompactstyled__StyledElementIcon",
  componentId: "sc-1cwhhek-7"
})(["cursor:pointer;display:inline;position:absolute;left:0;top:0;"]);
export var StyledRightIconsInfoText = styled(InfoText).withConfig({
  displayName: "AssetTileCompactstyled__StyledRightIconsInfoText",
  componentId: "sc-1cwhhek-8"
})(["white-space:nowrap;"]);
export var StyledInformationTypo = styled(Typo).withConfig({
  displayName: "AssetTileCompactstyled__StyledInformationTypo",
  componentId: "sc-1cwhhek-9"
})(["border-right:1px solid ", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.grey5;
});
//# sourceMappingURL=AssetTileCompact.styled.js.map