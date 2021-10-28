import { Card } from "../../../Atoms/Card";
import { StyledFeaturedAssetsContainer } from "../../../Atoms/Card/Card.styled";
import { Link } from "../../../Atoms/Link";
import { StyledTagWrapper } from "../../../Atoms/Tag/Tag.styled";
import { css, media, ALTERNATE, styled } from "../../../../styles";
export var TOP_CAROUSEL_HEIGHT_DESKTOP = 320;
export var TOP_CAROUSEL_HEIGHT_MOBILE = 160;

var campaignTeaserAssets = function campaignTeaserAssets() {
  return css(["", "{display:flex;position:absolute;z-index:1;right:0;top:-24px;justify-content:flex-end;& > div{display:none;", "{display:block;}}& > div:first-child{display:block;}}"], StyledFeaturedAssetsContainer, media.tablet);
};

export var StyledWrapper = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledWrapper",
  componentId: "sc-2wwq8b-0"
})(function (_ref) {
  var hasAsset = _ref.hasAsset;
  return css(["display:flex;height:100%;width:100%;transform:translateY(0px);flex:1;", " ", "{", "{img{width:100%;}}}"], hasAsset ? campaignTeaserAssets : '', media.ie11, StyledFeaturedAssetsContainer);
});
export var StyledLink = styled(Link).withConfig({
  displayName: "CampaignTeaserstyled__StyledLink",
  componentId: "sc-2wwq8b-1"
})(["width:100%;height:100%;"]);
export var StyledCard = styled(Card).withConfig({
  displayName: "CampaignTeaserstyled__StyledCard",
  componentId: "sc-2wwq8b-2"
})(["width:100%;height:100%;outline:none;"]);
export var StyledMainContainer = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledMainContainer",
  componentId: "sc-2wwq8b-3"
})(function (_ref2) {
  var isPortrait = _ref2.isPortrait,
      isClickable = _ref2.isClickable;
  return css(["", " display:flex;width:100%;flex-direction:column-reverse;justify-content:flex-end;transform:translateY(0px);", "{flex-direction:", ";}"], isClickable ? 'cursor: pointer;' : 'cursor: initial;', media.md, isPortrait ? 'column-reverse' : 'row');
});

var styledInfoContainerPadding = function styledInfoContainerPadding(theme) {
  return css(["padding:", " ", ";", "{padding:", " ", ";}"], theme.spacing.base.xs, theme.spacing.base.sm, media.md, theme.spacing.base.lg, theme.spacing.base.md);
};

export var StyledInfoContainer = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledInfoContainer",
  componentId: "sc-2wwq8b-4"
})(function (_ref3) {
  var theme = _ref3.theme;
  return css(["display:flex;flex-direction:column;hyphens:auto;", "{flex:1;}", " ", ""], media.md, styledInfoContainerPadding(theme), theme.name === ALTERNATE && "\n      background: ".concat(theme.color.white, ";\n      padding: ").concat(theme.spacing.base.md, " ").concat(theme.spacing.base.sm, ";\n      \n      ").concat(media.md, " {\n        padding: ").concat(theme.spacing.base.sm, ";\n      }\n    "));
});
export var StyledInfoContainerContent = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledInfoContainerContent",
  componentId: "sc-2wwq8b-5"
})(["text-align:left;", "{width:", ";position:relative;z-index:2;}"], media.md, function (_ref4) {
  var theme = _ref4.theme;
  return theme.name === ALTERNATE ? "calc(100% + 10px)" : "100%";
});
export var StyledInfoTextContainer = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledInfoTextContainer",
  componentId: "sc-2wwq8b-6"
})(function (_ref5) {
  var theme = _ref5.theme;
  return css(["margin:", " 0 0 0;", "{margin:", " 0 0 0;", "}"], theme.spacing.base.xs, media.md, theme.spacing.base.sm, theme.name === ALTERNATE && "padding-right: ".concat(theme.spacing.base.xl));
});

var getAssetContainerHeight = function getAssetContainerHeight(size, isPortrait, fixedImageHeight, hasAsset) {
  if (fixedImageHeight) {
    return css(["", " ", "{", ";}img{object-fit:contain;max-height:500px;", "{max-height:500px;padding:0;}}"], hasAsset ? '' : 'min-height: 230px;', media.md, !fixedImageHeight && css(["height:", "px;"], TOP_CAROUSEL_HEIGHT_DESKTOP), media.md);
  }

  return css(["min-height:256px;", "{min-height:", ";}"], media.md, isPortrait ? '256px' : size === 'large' ? '400px' : '352px');
};

export var StyledAssetContainer = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledAssetContainer",
  componentId: "sc-2wwq8b-7"
})(function (_ref6) {
  var theme = _ref6.theme,
      size = _ref6.size,
      isPortrait = _ref6.isPortrait,
      isStageTeaser = _ref6.isStageTeaser,
      fixedImageHeight = _ref6.fixedImageHeight,
      hasAsset = _ref6.hasAsset;
  return css(["display:flex;justify-content:center;", " position:relative;width:100%;", ""], isStageTeaser ? css(["flex:1 0 15%;"]) : css(["", "{flex:2;}"], media.md), getAssetContainerHeight(size, isPortrait, fixedImageHeight, hasAsset));
});
export var StyledPictureContainer = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledPictureContainer",
  componentId: "sc-2wwq8b-8"
})(function (_ref7) {
  var theme = _ref7.theme,
      isStageTeaser = _ref7.isStageTeaser;
  return css(["display:flex;z-index:2;", " ", "{margin:", ";margin-left:", ";}img{object-fit:contain;max-height:250px;", "{max-height:300px;}}", ""], !isStageTeaser && css(["", "{padding:8px;}"], media.maxMd), media.md, theme.spacing.base.md, theme.spacing.base.xl, media.md, isStageTeaser && css(["margin:", ";", "{display:flex;flex-direction:column;justify-content:center;margin:", ";margin-right:", ";}img{max-height:320px;}"], theme.spacing.base.md, media.md, theme.spacing.base.lg, theme.spacing.base.md));
});

var getPricePosition = function getPricePosition(theme, isPortrait) {
  return css(["right:", ";bottom:0;", "{right:", ";bottom:", ";}", "{left:0;}"], theme.spacing.base.sm, media.md, isPortrait ? theme.spacing.base.sm : theme.spacing.base.md, isPortrait ? '0px' : theme.spacing.base.lg, media.ie11);
};

export var StyledPriceContainer = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledPriceContainer",
  componentId: "sc-2wwq8b-9"
})(function (_ref8) {
  var theme = _ref8.theme,
      isPortrait = _ref8.isPortrait;
  return css(["position:absolute;z-index:2;", ""], getPricePosition(theme, isPortrait));
});

var getTongueHeightAndPosition = function getTongueHeightAndPosition(theme, hasAsset, height) {
  return css(["border-bottom-left-radius:", "px;border-top-left-radius:", "px;margin-top:", ";height:", "px;"], height / 5, height / 25, theme.spacing.base.xxxxl, height);
};

var StyledBackgroundCommonStyles = css(["position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover;"]);
export var StyledBackgroundImage = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledBackgroundImage",
  componentId: "sc-2wwq8b-10"
})(function (_ref9) {
  var image = _ref9.image,
      theme = _ref9.theme,
      inView = _ref9.inView,
      lazyLoadImage = _ref9.lazyLoadImage,
      hasAsset = _ref9.hasAsset,
      _ref9$lazyLoading = _ref9.lazyLoading,
      lazyLoading = _ref9$lazyLoading === void 0 ? false : _ref9$lazyLoading;
  return css(["position:absolute;width:calc(100% + 16px);right:16px;height:100%;transform:skew(-10.3deg);::after{content:'';", " ", "}::before{content:'';", " ", " ", " background-color:", ";}"], StyledBackgroundCommonStyles, (inView || !lazyLoading) && image !== undefined && "background-image: url('".concat(image, "');"), StyledBackgroundCommonStyles, !hasAsset && lazyLoadImage !== undefined && "filter: blur(8px);", lazyLoadImage !== undefined && "background-image: url('".concat(lazyLoadImage, "');"), theme.color.primary);
});
export var StyledTongue = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledTongue",
  componentId: "sc-2wwq8b-11"
})(function (_ref10) {
  var height = _ref10.height,
      theme = _ref10.theme,
      hasAsset = _ref10.hasAsset;
  return css(["overflow:hidden;position:absolute;right:-16px;width:100%;", " transform:skew(10.3deg);"], getTongueHeightAndPosition(theme, hasAsset, height));
});
export var StyledUpsetRect = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledUpsetRect",
  componentId: "sc-2wwq8b-12"
})(function (_ref11) {
  var image = _ref11.image,
      theme = _ref11.theme;
  return css(["position:absolute;background-size:cover;background-repeat:no-repeat;", ";background-position:50%;background-color:", ";width:100%;height:100%;z-index:-1;min-height:256px;", "{left:0;}"], css(["background-image:url('", "');"], image), theme.color.primary, media.ie11);
});
export var StyledRect = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledRect",
  componentId: "sc-2wwq8b-13"
})(function (_ref12) {
  var image = _ref12.image,
      theme = _ref12.theme,
      inView = _ref12.inView,
      lazyLoadImage = _ref12.lazyLoadImage,
      lazyLoading = _ref12.lazyLoading;
  return css(["overflow:hidden;position:absolute;top:0;left:0;width:100%;height:100%;::after{content:'';", " ", "}::before{content:'';", " ", " ", " background-color:", ";}"], StyledBackgroundCommonStyles, (inView || !lazyLoading) && image !== undefined && "background-image: url('".concat(image, "');"), StyledBackgroundCommonStyles, lazyLoadImage !== undefined && "filter: blur(8px);", lazyLoadImage !== undefined && "background-image: url('".concat(lazyLoadImage, "');"), theme.color.primary);
});
export var StyledFlexBottomContainer = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledFlexBottomContainer",
  componentId: "sc-2wwq8b-14"
})(["display:flex;flex:1;margin-top:auto;flex-direction:column-reverse;"]);

var tagWrapperStyles = function tagWrapperStyles(theme, isPortrait) {
  return css(["margin-top:", ";", "{margin-top:", ";}"], theme.spacing.base.sm, media.md, isPortrait ? theme.spacing.base.sm : theme.spacing.base.lg);
};

export var StyledCampaignTeaserTagWrapper = styled.div.withConfig({
  displayName: "CampaignTeaserstyled__StyledCampaignTeaserTagWrapper",
  componentId: "sc-2wwq8b-15"
})(function (_ref13) {
  var theme = _ref13.theme,
      isPortrait = _ref13.isPortrait,
      tagsOnMobile = _ref13.tagsOnMobile,
      limitLines = _ref13.limitLines;
  return css(["max-height:calc((", " - 1px) * ", ");overflow:hidden;", " ", "{display:inline-flex;}", " flex-wrap:wrap;", ""], theme.spacing.base.lg, limitLines, theme.name === ALTERNATE && "max-width: 85%;", StyledTagWrapper, !tagsOnMobile && "\n      display: none;\n\n      ".concat(media.md, " {\n        display: block;\n      }\n    "), tagWrapperStyles(theme, isPortrait));
});
//# sourceMappingURL=CampaignTeaser.styled.js.map