import { Heading } from "../../Atoms/Typography";
import { FlexBox } from "../../Helper/FlexBox";
import { Grid } from "../../Helper/Grid";
import { css, media, styled } from "../../../styles";
var articleStageBackgroundCommonStyles = css(["content:' ';display:none;position:absolute;width:100%;top:0;z-index:-1;", "{display:block;}"], media.sm);
export var StyledProgressWrapper = styled.div.withConfig({
  displayName: "PlaylistStagestyled__StyledProgressWrapper",
  componentId: "sc-1r894en-0"
})(["position:absolute;bottom:", ";left:0;right:0;"], function (_ref) {
  var isSmall = _ref.isSmall;
  return isSmall ? '-4px' : '-8px';
});
export var StyledPlaylistStageTitle = styled.div.withConfig({
  displayName: "PlaylistStagestyled__StyledPlaylistStageTitle",
  componentId: "sc-1r894en-1"
})(["", ""], function (_ref2) {
  var theme = _ref2.theme,
      withImage = _ref2.withImage,
      isRoundBorder = _ref2.isRoundBorder,
      isSkewedBorder = _ref2.isSkewedBorder;
  var color = theme.color,
      dimension = theme.dimension,
      spacing = theme.spacing;
  var borderRadius1 = dimension.borderRadius1;
  var selected = color.selected,
      white = color.white;
  var md = spacing.base.md;
  return css(["background-color:", ";box-sizing:border-box;color:", ";padding:", ";position:relative;max-width:780px;margin:0 auto;z-index:1;border-radius:0 ", " ", " 0;box-shadow:", ";", "{width:calc(100% - 71px);border-top-right-radius:", "px;border-bottom-right-radius:", "px;box-shadow:", ";}", "{border-radius:", ";box-shadow:", ";h1{height:inherit;}}", " ", ""], withImage ? white : 'transparent', selected, withImage ? md : 0, borderRadius1, borderRadius1, withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07);' : 'none', media.sm, 160 / 25, 160 / 5, withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07);' : 'none', media.md, borderRadius1, withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07);' : 'none', isRoundBorder && css(["&:after{", " transform:skew(-19.7deg);height:100%;right:-50px;border-top-right-radius:", "px;border-bottom-right-radius:", "px;box-shadow:", ";background:", ";}"], articleStageBackgroundCommonStyles, 160 / 25, 160 / 5, withImage ? '8px 0 8px 0 rgba(0, 0, 0, 0.07);' : 'none', white), isSkewedBorder && css(["&:before{", " transform:skew(25deg);height:50%;right:-50px;background:", ";}&:after{", " transform:skew(-25deg);height:50%;top:50%;right:-50px;box-shadow:", ";background:", ";}"], articleStageBackgroundCommonStyles, withImage ? white : 'transparent', articleStageBackgroundCommonStyles, withImage ? '8px 8px 8px 0 rgba(0, 0, 0, 0.07)' : 'none', withImage ? white : 'transparent'));
});
export var StyledPlaylistStageGrid = styled(Grid).withConfig({
  displayName: "PlaylistStagestyled__StyledPlaylistStageGrid",
  componentId: "sc-1r894en-2"
})(["position:absolute;left:0;right:0;bottom:-46px;"]);
export var StyledPlaylistStage = styled.div.withConfig({
  displayName: "PlaylistStagestyled__StyledPlaylistStage",
  componentId: "sc-1r894en-3"
})(["", ""], function (_ref3) {
  var theme = _ref3.theme;
  return css(["margin-bottom:", ";position:relative;"], theme.spacing.base.xxxl);
});
export var StyledHeadingArticle = styled(Heading).withConfig({
  displayName: "PlaylistStagestyled__StyledHeadingArticle",
  componentId: "sc-1r894en-4"
})(["", ""], function (_ref4) {
  var theme = _ref4.theme,
      breadcrumbPath = _ref4.breadcrumbPath;
  return css(["margin:0;font-size:", ";", "{margin:0 0 ", " 0;font-size:", ";line-height:", ";}", "{margin:0 0 ", " 0;font-size:", ";line-height:", ";}"], theme.font.size.xl, media.md, breadcrumbPath ? theme.spacing.base.sm : 0, theme.font.size.lg, theme.spacing.base.lg, media.mobile, breadcrumbPath ? theme.spacing.base.xs : 0, theme.font.size.sm, theme.spacing.base.md);
});
export var StyledBreadcrumbWrapper = styled.div.withConfig({
  displayName: "PlaylistStagestyled__StyledBreadcrumbWrapper",
  componentId: "sc-1r894en-5"
})(["display:none;", "{display:block;}"], media.md);
export var StyledBacklinkWrapper = styled(FlexBox).withConfig({
  displayName: "PlaylistStagestyled__StyledBacklinkWrapper",
  componentId: "sc-1r894en-6"
})(["display:flex;margin:0 0 8px;& > *:not(:first-child){margin:0 4px;}"]);
export var StyledAssetTileMetaWrapper = styled(FlexBox).withConfig({
  displayName: "PlaylistStagestyled__StyledAssetTileMetaWrapper",
  componentId: "sc-1r894en-7"
})(["margin:0 auto;", "{margin:0 auto;}"], media.maxSm);
export var StyledContentWrapper = styled(FlexBox).withConfig({
  displayName: "PlaylistStagestyled__StyledContentWrapper",
  componentId: "sc-1r894en-8"
})(["max-width:80%;margin:0 auto;padding-left:", ";padding-right:", ";", "{margin:", " auto;padding:0;width:100%;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.lg;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.lg;
}, media.maxMd, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.base.xs;
});
//# sourceMappingURL=PlaylistStage.styled.js.map