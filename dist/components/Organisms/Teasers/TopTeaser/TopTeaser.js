import React, { useContext } from 'react';
import { HeroBanner } from "../../HeroBanner";
import { Picture } from "../../../Atoms/Picture";
import { ThemeContext } from "../../../../styles";
import { StyledFeatureImage, StyledHeroContentContainer, StyledHeroFeatureSection, StyledIconContainer, StyledHeroFeatureCopy, StyledHeroFeatureIntro } from "./TopTeaser.styled";

var StyledFeaturedHeading = function StyledFeaturedHeading(_ref) {
  var children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary;
  var theme = useContext(ThemeContext);
  var _theme$hero$intro = theme.hero.intro,
      font = _theme$hero$intro.font,
      background = _theme$hero$intro.background;
  var _theme$hero$copy = theme.hero.copy,
      copyFont = _theme$hero$copy.font,
      copyBackground = _theme$hero$copy.background;
  return React.createElement(StyledHeroFeatureSection, null, primary && React.createElement(StyledHeroFeatureIntro, {
    textAlign: "left",
    color: "white",
    tag: "div",
    padding: "0",
    fontFamily: "default",
    margin: "0",
    fontSize: {
      desktop: font.size,
      tablet: 'sm',
      mobile: 'xs'
    },
    background: background,
    toUpperCase: true
  }, primary), secondary && React.createElement(StyledHeroFeatureCopy, {
    textAlign: "left",
    color: "white",
    weight: "bold",
    fontFamily: "default",
    margin: "0",
    tag: "div",
    padding: "sm",
    fontSize: {
      desktop: copyFont.size,
      tablet: 'xxxl',
      mobile: 'xl'
    },
    background: copyBackground
  }, secondary), children);
};

var FeaturedImage = function FeaturedImage(_ref2) {
  var svg = _ref2.svg,
      images = _ref2.images,
      objectFit = _ref2.objectFit;
  return React.createElement(StyledFeatureImage, null, images && React.createElement(Picture, {
    src: images.xl,
    srcLg: images.lg,
    srcMd: images.md,
    srcSm: images.sm,
    objectFit: 'fill',
    height: "100%",
    width: "100%"
  }), svg && React.createElement(StyledIconContainer, null, svg));
};

export var FeaturedContent = function FeaturedContent(_ref3) {
  var images = _ref3.images,
      content = _ref3.content,
      svg = _ref3.svg;
  var renderIntro = content !== null && content !== void 0 && content.primary ? "Hi ".concat(content.name || '', ", ").concat(content.primary) : null;
  var renderWithNoPrimary = !(content !== null && content !== void 0 && content.name) ? content === null || content === void 0 ? void 0 : content.primary : renderIntro;
  return React.createElement(React.Fragment, null, (images || svg) && React.createElement(StyledHeroContentContainer, null, React.createElement(FeaturedImage, {
    images: images,
    svg: svg
  })), React.createElement(StyledFeaturedHeading, {
    primary: renderWithNoPrimary,
    secondary: content === null || content === void 0 ? void 0 : content.secondary
  }));
};
export var TopTeaser = function TopTeaser(_ref4) {
  var badges = _ref4.badges,
      heroImages = _ref4.heroImages,
      content = _ref4.content,
      svg = _ref4.svg,
      badgeActionType = _ref4.badgeActionType,
      color = _ref4.color,
      images = _ref4.images,
      height = _ref4.height,
      link = _ref4.link,
      onClick = _ref4.onClick;
  return React.createElement(HeroBanner, {
    link: link,
    color: color,
    height: height,
    badges: badges,
    badgeActionType: badgeActionType,
    heroImages: heroImages,
    onClick: onClick
  }, React.createElement(FeaturedContent, {
    content: content,
    images: images,
    svg: svg
  }));
};
//# sourceMappingURL=TopTeaser.js.map