import { Card } from "../../../Atoms/Card";
import { StyledFeaturedAssetsContainer, StyledCard as ExternalStyledCard, StyledCardWrapper as ExternalCardWrapper } from "../../../Atoms/Card/Card.styled";
import { Link } from "../../../Atoms/Link";
import { StyledPicture } from "../../../Atoms/Picture/Picture.styled";
import { StyledTagWrapper } from "../../../Atoms/Tag/Tag.styled";
import { css, media, ALTERNATE, FILTERED, styled } from "../../../../styles";
export var TOP_CAROUSEL_HEIGHT_DESKTOP = 354;
export var TOP_CAROUSEL_HEIGHT_MOBILE = 250;
export var StyledWrapper = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledWrapper",
  componentId: "sc-1r1wqhv-0"
})(["width:100%;height:100%;", "{position:absolute;display:flex;z-index:1;right:0;top:0;transform:translateY(-50%);filter:drop-shadow(0 1px 1px gray);justify-content:flex-end;", "{display:flex;}}", ":hover ", "{transform:translateY(-50%);}"], StyledFeaturedAssetsContainer, media.sm, ExternalCardWrapper, StyledFeaturedAssetsContainer);
export var StyledCard = styled(Card).withConfig({
  displayName: "AssetTeaserstyled__StyledCard",
  componentId: "sc-1r1wqhv-1"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["width:100%;height:100%;outline:none;", "{overflow:visible;", "}"], ExternalStyledCard, theme.name === FILTERED && "overflow-x: hidden;");
});
export var StyledBadgeWrapper = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledBadgeWrapper",
  componentId: "sc-1r1wqhv-2"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["", " ", ""], theme.name === ALTERNATE && "\n    margin: 0 0 0 -1em;\n    transform: translateY(-50%);\n  ", theme.name === FILTERED && "\n    margin: 0 0 1em 0;\n  ");
});
export var StyledLink = styled(Link).withConfig({
  displayName: "AssetTeaserstyled__StyledLink",
  componentId: "sc-1r1wqhv-3"
})(["width:100%;height:100%;align-items:flex-start;"]);
export var StyledMainContainer = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledMainContainer",
  componentId: "sc-1r1wqhv-4"
})(function (_ref3) {
  var isClickable = _ref3.isClickable;
  return css(["", " display:flex;width:100%;flex-direction:column-reverse;justify-content:flex-end;transform:translateY(0px);", "{flex-direction:row;}"], isClickable ? 'cursor: pointer;' : 'cursor: initial;', media.md);
});
export var StyledInfoContainer = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledInfoContainer",
  componentId: "sc-1r1wqhv-5"
})(function (_ref4) {
  var hasAsset = _ref4.hasAsset,
      theme = _ref4.theme;
  return css(["display:flex;flex-direction:column;hyphens:auto;", " padding:", " 0 0 0;", "{flex:1;padding:0 ", " 0 0;}", ""], hasAsset && "height: 100%;", theme.spacing.base.sm, media.md, theme.spacing.base.md, theme.name === ALTERNATE && "\n      background: ".concat(theme.color.white, ";\n      padding: ").concat(theme.spacing.base.md, " ").concat(theme.spacing.base.sm, ";\n\n      ").concat(media.md, " {\n        padding: ").concat(theme.spacing.base.sm, ";\n        padding-top: 0;\n      }\n    "));
});
export var StyledInfoContainerContent = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledInfoContainerContent",
  componentId: "sc-1r1wqhv-6"
})(function (_ref5) {
  var hasBadges = _ref5.hasBadges,
      theme = _ref5.theme;
  return css(["{text-align:left;", "{width:", ";position:relative;", " z-index:2;}}"], media.md, theme.name === ALTERNATE ? "calc(100% + 40px)" : "100%", !hasBadges && "padding-top: ".concat(theme.spacing.base.md, ";"));
});
export var StyledInfoTextContainer = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledInfoTextContainer",
  componentId: "sc-1r1wqhv-7"
})(function (_ref6) {
  var theme = _ref6.theme;
  return css(["margin:", " 0 0 0;", "{margin:", " 0 0 0;", "}"], theme.spacing.base.xs, media.md, theme.spacing.base.sm, theme.name === ALTERNATE && "padding-right: ".concat(theme.spacing.base.xs));
});

var getAssetContainerHeight = function getAssetContainerHeight(fixedImageHeight) {
  return css(["", " ", ";}img{object-fit:contain;max-height:200px;", "{max-height:300px;padding:0;}}"], "height: ".concat(TOP_CAROUSEL_HEIGHT_MOBILE, "px;"), !fixedImageHeight && "\n      ".concat(media.md, " {\n        height: ").concat(TOP_CAROUSEL_HEIGHT_DESKTOP, "px;\n      "), media.md);
};

export var StyledAssetContainer = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledAssetContainer",
  componentId: "sc-1r1wqhv-8"
})(function (_ref7) {
  var theme = _ref7.theme,
      fixedImageHeight = _ref7.fixedImageHeight;
  return css(["display:flex;justify-content:center;position:relative;width:100%;min-height:250px;", " ", "{flex:", ";}", "{flex:", ";}"], getAssetContainerHeight(fixedImageHeight), media.md, theme.name === ALTERNATE ? 4 : 2, media.xl, theme.name === ALTERNATE ? 3 : 2);
});
var topTeaserLazyLoadPictureStyle = css(["", "{height:100%;}"], StyledPicture);
export var StyledPictureContainer = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledPictureContainer",
  componentId: "sc-1r1wqhv-9"
})(["", ""], function (_ref8) {
  var theme = _ref8.theme;
  return css(["display:flex;z-index:1;padding:8px;height:250px;", "{margin:0 ", " 0 ", ";height:unset;}img{height:100%;}", ""], media.md, theme.spacing.base.md, theme.spacing.base.xl, topTeaserLazyLoadPictureStyle);
});
export var StyledBackgroundImage = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledBackgroundImage",
  componentId: "sc-1r1wqhv-10"
})(function (_ref9) {
  var image = _ref9.image,
      theme = _ref9.theme,
      inView = _ref9.inView,
      lazyLoadImage = _ref9.lazyLoadImage,
      hasAsset = _ref9.hasAsset,
      lazyloadBackgroundImage = _ref9.lazyloadBackgroundImage;
  return css(["position:absolute;width:calc(100% + 16px);right:16px;height:100%;transform:skew(-10.3deg);::after{content:'';", " ", "}::before{content:'';", " ", " ", " background-color:", ";}"], StyledRectCommonStyles, (inView || !lazyloadBackgroundImage) && image !== undefined && "background-image: url('".concat(image, "');"), StyledRectCommonStyles, !hasAsset && "filter: blur(8px);", lazyLoadImage !== undefined && "background-image: url('".concat(lazyLoadImage, "');"), theme.color.primary);
});
export var StyledTongue = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledTongue",
  componentId: "sc-1r1wqhv-11"
})(function () {
  return css(["overflow:hidden;position:absolute;right:-24px;width:100%;transform:skew(10.3deg);margin-top:0;height:", "px;border-bottom-left-radius:", "px;border-top-left-radius:", "px;", "{right:-32px;height:", "px;border-bottom-left-radius:", "px;border-top-left-radius:", "px;}"], TOP_CAROUSEL_HEIGHT_MOBILE, TOP_CAROUSEL_HEIGHT_MOBILE / 5, TOP_CAROUSEL_HEIGHT_MOBILE / 25, media.md, TOP_CAROUSEL_HEIGHT_DESKTOP, TOP_CAROUSEL_HEIGHT_DESKTOP / 5, TOP_CAROUSEL_HEIGHT_DESKTOP / 25);
});
export var StyledUpsetRect = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledUpsetRect",
  componentId: "sc-1r1wqhv-12"
})(function (_ref10) {
  var image = _ref10.image,
      imageDesktop = _ref10.imageDesktop,
      theme = _ref10.theme,
      hasAsset = _ref10.hasAsset;
  return css(["position:absolute;background-size:cover;background-repeat:no-repeat;background-image:url('", "');background-position:50%;background-color:", ";width:100%;height:100%;z-index:-1;min-height:256px;", "{left:0;}", "::before{content:'';position:absolute;display:block;background:#fff;width:100%;height:", ";bottom:", ";transform:", ";", "{width:100%;height:", ";bottom:", ";transform:", ";top:auto;left:auto;}}"], image, theme.color.primary, media.ie11, imageDesktop && "\n      ".concat(media.md, " {\n        background-image: url(").concat(imageDesktop, ");\n      }"), hasAsset ? '150px' : '65px', hasAsset ? '-60px' : '-45px', hasAsset ? 'skew(0,-10.3deg)' : 'skew(0,-2.5deg)', media.md, hasAsset ? '150px' : '65px', hasAsset ? '-70px' : '-55px', hasAsset ? 'skew(0,-10.3deg);' : 'skew(0,-2.5deg);');
});
var StyledRectCommonStyles = css(["position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover;"]);
export var StyledRect = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledRect",
  componentId: "sc-1r1wqhv-13"
})(function (_ref11) {
  var image = _ref11.image,
      theme = _ref11.theme,
      inView = _ref11.inView,
      lazyLoadImage = _ref11.lazyLoadImage,
      hasAsset = _ref11.hasAsset,
      lazyloadBackgroundImage = _ref11.lazyloadBackgroundImage;
  return css(["overflow:hidden;", "::after{content:'';", " ", "}::before{content:'';", " ", " ", " background-color:", ";}"], StyledRectCommonStyles, StyledRectCommonStyles, (inView || !lazyloadBackgroundImage) && image !== undefined && "background-image: url('".concat(image, "');"), StyledRectCommonStyles, !hasAsset && "filter: blur(8px);", lazyLoadImage !== undefined && "background-image: url('".concat(lazyLoadImage, "');"), theme.color.primary);
});
export var StyledFlexBottomContainer = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledFlexBottomContainer",
  componentId: "sc-1r1wqhv-14"
})(function (_ref12) {
  var theme = _ref12.theme;
  return css(["display:flex;flex:1;margin-top:auto;flex-direction:column;padding-top:", ";"], theme.spacing.base.xs);
});
export var StyledTopTeaserTagWrapper = styled.div.withConfig({
  displayName: "AssetTeaserstyled__StyledTopTeaserTagWrapper",
  componentId: "sc-1r1wqhv-15"
})(function (_ref13) {
  var theme = _ref13.theme,
      limitLines = _ref13.limitLines;
  return css(["max-height:calc(", " * ", ");overflow:hidden;flex-wrap:wrap;", " ", "{display:inline-flex;margin-bottom:0;margin-top:8px;}"], theme.spacing.base.lg, limitLines, theme.name === ALTERNATE && "\n      ".concat(media.xl, " {\n        max-width: 85%;\n      }"), StyledTagWrapper);
});
//# sourceMappingURL=AssetTeaser.styled.js.map