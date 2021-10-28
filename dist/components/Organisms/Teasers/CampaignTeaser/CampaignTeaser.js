function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Tag } from "../../../Atoms/Tag";
import { CopyText, Heading, HeadingFeatured } from "../../../Atoms/Typography";
import { useWindowDimensions } from "../../../Helper/useWindowDimensions";
import { LazyLoadImage } from "../../../Molecules/LazyLoadImage";
import { media, ALTERNATE, styled } from "../../../../styles";
import { breakpoints } from "../../../../styles/sc-vars-global";
import { StyledBackgroundImage, StyledCampaignTeaserTagWrapper, StyledCard, StyledFlexBottomContainer, StyledInfoContainer, StyledInfoContainerContent, StyledInfoTextContainer, StyledLink, StyledMainContainer, StyledPictureContainer, StyledAssetContainer, StyledRect, StyledTongue, StyledUpsetRect, StyledWrapper } from "./CampaignTeaser.styled";
import { useTheme } from 'styled-components';
import { LogoFiltered } from '@excelwithbusiness/webmobile-svg-library';
var StyledFilteredLogo = styled.div.withConfig({
  displayName: "CampaignTeaser__StyledFilteredLogo",
  componentId: "sc-8yfg30-0"
})(["display:none;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.name === ALTERNATE && "\n  ".concat(media.md, " {\n    display: block;\n  }\n\n  > svg {\n    position: absolute;\n    left: -1px;\n    bottom: 0;\n    z-index: 1;\n    height: 92px;\n    width: auto;\n\n    ").concat(media.ie11, " {\n      width: 95px;\n      top: -7px;\n    }\n  }");
});

var Info = function Info(_ref2) {
  var isPortrait = _ref2.isPortrait,
      limitLines = _ref2.limitLines,
      size = _ref2.size,
      contentText = _ref2.contentText,
      tags = _ref2.tags;

  if (!isPortrait && contentText) {
    return React.createElement(StyledInfoTextContainer, null, React.createElement(CopyText, {
      fontSize: getValueBySize(isPortrait, size, 'sm', 'sm', 'lg'),
      lineHeight: getValueBySize(isPortrait, size, 'md', 'md', 'lg'),
      limitLines: limitLines ? limitLines : tags && tags.length > 0 ? 3 : 5,
      tag: "span"
    }, contentText));
  } else {
    return null;
  }
};

var Tags = function Tags(_ref3) {
  var isPortrait = _ref3.isPortrait,
      tags = _ref3.tags,
      tagsOnMobile = _ref3.tagsOnMobile;

  if (tags && tags.length > 0) {
    return React.createElement(StyledFlexBottomContainer, null, React.createElement(StyledCampaignTeaserTagWrapper, {
      isPortrait: isPortrait,
      tagsOnMobile: tagsOnMobile,
      limitLines: 2
    }, tags.map(function (t, index) {
      return t && t.trim().length > 0 ? React.createElement(Tag, {
        key: 'Tag_' + t + index,
        text: t,
        marginBottom: true,
        marginRight: true
      }) : undefined;
    })));
  } else {
    return null;
  }
};

var Background = function Background(_ref4) {
  var isPortrait = _ref4.isPortrait,
      backgroundVariant = _ref4.backgroundVariant,
      image = _ref4.image,
      lazyloadBackgroundImage = _ref4.lazyloadBackgroundImage,
      size = _ref4.size,
      hasAsset = _ref4.hasAsset,
      theme = _ref4.theme;

  var _useInView = useInView({
    triggerOnce: true,
    threshold: 0.2
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var hasQueryParams = (image === null || image === void 0 ? void 0 : image.indexOf('?')) !== -1;
  var lowQualityImagePlaceholder = image ? "".concat(image).concat(hasQueryParams ? '&' : '?', "q=1") : undefined;

  if (theme === ALTERNATE) {
    return React.createElement(StyledRect, {
      ref: ref,
      image: image,
      inView: inView,
      lazyLoadImage: lowQualityImagePlaceholder,
      lazyLoading: lazyloadBackgroundImage
    });
  } else {
    switch (backgroundVariant) {
      case 'tongue':
        return React.createElement(StyledTongue, {
          ref: ref,
          height: getValueBySize(isPortrait, size, 104, 144, 160),
          isPortrait: isPortrait,
          hasAsset: hasAsset
        }, React.createElement(StyledBackgroundImage, {
          image: image,
          inView: inView,
          lazyLoadImage: lowQualityImagePlaceholder,
          lazyLoading: lazyloadBackgroundImage,
          hasAsset: hasAsset
        }));

      case 'upsetRect':
        return React.createElement(StyledUpsetRect, {
          ref: ref,
          image: image
        });

      case 'rect':
        return React.createElement(StyledRect, {
          ref: ref,
          image: image,
          inView: inView,
          lazyLoadImage: lowQualityImagePlaceholder,
          lazyLoading: lazyloadBackgroundImage
        });

      default:
        return null;
    }
  }
};

export var CampaignTeaser = function CampaignTeaser(_ref5) {
  var smallHeadline = _ref5.smallHeadline,
      headline = _ref5.headline,
      contentText = _ref5.contentText,
      assetImage = _ref5.assetImage,
      backgroundImage = _ref5.backgroundImage,
      borderColor = _ref5.borderColor,
      lazyload = _ref5.lazyload,
      lazyloadBackgroundImage = _ref5.lazyloadBackgroundImage,
      lazyloadLowQuality = _ref5.lazyloadLowQuality,
      badges = _ref5.badges,
      _ref5$badgeActionType = _ref5.badgeActionType,
      badgeActionType = _ref5$badgeActionType === void 0 ? 'secondary' : _ref5$badgeActionType,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 'auto' : _ref5$size,
      _ref5$orientation = _ref5.orientation,
      orientation = _ref5$orientation === void 0 ? 'auto' : _ref5$orientation,
      tags = _ref5.tags,
      _ref5$backgroundVaria = _ref5.backgroundVariant,
      backgroundVariant = _ref5$backgroundVaria === void 0 ? 'upsetRect' : _ref5$backgroundVaria,
      _ref5$elevation = _ref5.elevation,
      elevation = _ref5$elevation === void 0 ? 0 : _ref5$elevation,
      elevationHover = _ref5.elevationHover,
      link = _ref5.link,
      _ref5$isStageTeaser = _ref5.isStageTeaser,
      isStageTeaser = _ref5$isStageTeaser === void 0 ? false : _ref5$isStageTeaser,
      _ref5$fixedImageHeigh = _ref5.fixedImageHeight,
      fixedImageHeight = _ref5$fixedImageHeigh === void 0 ? false : _ref5$fixedImageHeigh,
      _ref5$tagsOnMobile = _ref5.tagsOnMobile,
      tagsOnMobile = _ref5$tagsOnMobile === void 0 ? true : _ref5$tagsOnMobile,
      limitLines = _ref5.limitLines,
      onClick = _ref5.onClick,
      clickableWithoutLink = _ref5.clickableWithoutLink,
      rest = _objectWithoutProperties(_ref5, ["smallHeadline", "headline", "contentText", "assetImage", "backgroundImage", "borderColor", "lazyload", "lazyloadBackgroundImage", "lazyloadLowQuality", "badges", "badgeActionType", "size", "orientation", "tags", "backgroundVariant", "elevation", "elevationHover", "link", "isStageTeaser", "fixedImageHeight", "tagsOnMobile", "limitLines", "onClick", "clickableWithoutLink"]);

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.sm;
  var isPortrait = orientation === 'portrait';
  var isClickable = !!onClick && clickableWithoutLink || !!(link !== null && link !== void 0 && link.href);
  var cardShape = 'rounded-big';
  var linkTarget = link !== null && link !== void 0 && link.isLinkBlank ? '_blank' : '_self';
  var theme = useTheme();
  return React.createElement(StyledLink, {
    to: link === null || link === void 0 ? void 0 : link.to,
    href: link === null || link === void 0 ? void 0 : link.href,
    onClick: onClick,
    underline: false,
    target: linkTarget
  }, React.createElement(StyledWrapper, {
    hasAsset: !!assetImage
  }, React.createElement(StyledCard, _extends({
    elevation: elevation,
    elevationHover: elevationHover,
    shape: cardShape,
    display: "flex",
    badges: badges,
    badgeActionType: badgeActionType,
    borderColor: borderColor,
    fullHeight: true,
    overflow: "hidden"
  }, rest), React.createElement(StyledMainContainer, {
    isPortrait: isPortrait,
    isClickable: isClickable
  }, React.createElement(StyledInfoContainer, null, React.createElement(StyledInfoContainerContent, null, smallHeadline && React.createElement(Heading, {
    lineHeight: "sm",
    margin: "0",
    scale: "level-5",
    tag: "p",
    uppercase: true,
    weight: "semibold"
  }, smallHeadline), React.createElement(HeadingFeatured, {
    fixedMdSize: true,
    limitLines: 2
  }, headline), React.createElement(Info, {
    contentText: contentText,
    isPortrait: isPortrait,
    limitLines: limitLines,
    size: size,
    tags: tags
  }), React.createElement(Tags, {
    isPortrait: isPortrait,
    tagsOnMobile: tagsOnMobile,
    tags: tags
  }))), React.createElement(StyledAssetContainer, {
    size: size,
    isPortrait: isPortrait,
    isStageTeaser: isStageTeaser,
    fixedImageHeight: fixedImageHeight,
    hasAsset: !!assetImage
  }, React.createElement(StyledFilteredLogo, null, React.createElement(LogoFiltered, null)), React.createElement(Background, {
    size: size,
    isPortrait: isPortrait,
    image: backgroundImage,
    lazyloadBackgroundImage: lazyloadBackgroundImage,
    lazyloadLowQuality: lazyloadLowQuality,
    backgroundVariant: backgroundVariant,
    hasAsset: !!assetImage,
    theme: theme === null || theme === void 0 ? void 0 : theme.name
  }), assetImage && React.createElement(StyledPictureContainer, {
    isStageTeaser: isStageTeaser
  }, React.createElement(LazyLoadImage, {
    src: assetImage,
    height: isMobile ? undefined : '100%',
    lazyLoad: lazyload
  })))))));
};

function getValueBySize(isPortrait, size, small, medium, large) {
  if (size === 'auto' && isPortrait) {
    return small;
  }

  switch (size) {
    case 'small':
      return small;

    case 'medium':
      return medium;

    case 'large':
      return large;

    default:
      return medium;
  }
}
//# sourceMappingURL=CampaignTeaser.js.map