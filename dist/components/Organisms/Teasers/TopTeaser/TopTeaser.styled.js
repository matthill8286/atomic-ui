import { Typo } from "../../../Atoms/Typography";
import { media, spacing } from "../../../../styles";
import { css, styled } from "../../../../styles";
export var StyledHeroFeatureCopy = styled(Typo).withConfig({
  displayName: "TopTeaserstyled__StyledHeroFeatureCopy",
  componentId: "ind9xd-0"
})(function (_ref) {
  var theme = _ref.theme;
  var copy = theme.hero.copy;
  return css(["line-height:", ";font-weight:", ";inline-size:fit-content;", "{line-height:30px;}"], copy.font.height, copy.font.weight, media.maxMd);
});
export var StyledHeroFeatureIntro = styled(Typo).withConfig({
  displayName: "TopTeaserstyled__StyledHeroFeatureIntro",
  componentId: "ind9xd-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  var intro = theme.hero.intro;
  var spacing = theme.spacing;
  return css(["padding:", ";width:max-content;line-height:", ";font-weight:", ";text-transform:", ";"], spacing.base.sm, intro.font.height, intro.font.weight, intro.textTransform);
});
export var StyledText = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledText",
  componentId: "ind9xd-2"
})(["position:relative;flex-basis:100%;flex-wrap:wrap;padding:0;margin-top:", ";", "{flex-basis:calc(50% - 2 * ", ");padding:0 ", ";margin-top:0;}"], spacing.base.sm, media.md, spacing.base.md, spacing.base.sm);
export var StyledHeroContentContainer = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledHeroContentContainer",
  componentId: "ind9xd-3"
})(["display:flex;flex-basis:100%;flex-direction:row;padding:", ";margin:0;justify-content:flex-end;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.base.md;
});
export var StyledHeroFeatureSection = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledHeroFeatureSection",
  componentId: "ind9xd-4"
})(["", ""], function (_ref4) {
  var theme = _ref4.theme;
  return css(["position:absolute;top:50%;left:20%;width:65%;padding:", ";text-align:center;transform:translate(-20%,-50%);", "{width:95%;}"], theme.spacing.base.xs, media.maxMd);
});
export var StyledFeatureImage = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledFeatureImage",
  componentId: "ind9xd-5"
})(["order:unset;display:flex;padding:0 ", ";justify-content:center;", "{flex-basis:calc(50% - 2 * ", ");}"], spacing.base.sm, media.md, spacing.base.md);
export var StyledRow = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledRow",
  componentId: "ind9xd-6"
})(["flex-wrap:wrap;display:flex;margin:0;padding:0;align-items:center;justify-content:space-around;min-height:300px;background-image:", ";background-size:100% 100%;background-color:", ";"], function (_ref5) {
  var image = _ref5.image;
  return image && "url(".concat(image, ")");
}, function (_ref6) {
  var theme = _ref6.theme,
      color = _ref6.color;
  return color ? theme.color[color] : theme.color['white'];
});
export var StyledSection = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledSection",
  componentId: "ind9xd-7"
})(["", ""], function (_ref7) {
  var theme = _ref7.theme;
  return css(["position:absolute;top:50%;left:25%;width:fit-content;padding:", ";text-align:center;transform:translate(-25%,-50%);", "{top:0;position:relative;left:0;transform:translate(0,0);}"], theme.spacing.base.xs, media.maxMd);
});
export var StyledIconContainer = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledIconContainer",
  componentId: "ind9xd-8"
})(["max-width:100%;height:auto;justify-content:center;display:flex;> svg{height:auto;}"]);
export var StyledHeroContainer = styled.div.withConfig({
  displayName: "TopTeaserstyled__StyledHeroContainer",
  componentId: "ind9xd-9"
})(["display:flex;flex-basis:100%;flex-direction:row;padding:", ";margin:0;", "{flex-direction:column;}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.base.md;
}, media.maxMd);
//# sourceMappingURL=TopTeaser.styled.js.map