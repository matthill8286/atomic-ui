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
import { NativeLazyLoadOptions, Picture } from "../../../Atoms/Picture";
import { Tag } from "../../../Atoms/Tag";
import { CopyText, Heading, HeadingFeatured } from "../../../Atoms/Typography";
import { media, ALTERNATE, styled, ThemeConsumer } from "../../../../styles";
import { spacing } from "../../../../styles/sc-vars-global";
import { StyledBackgroundImage, StyledCard, StyledBadgeWrapper, StyledFlexBottomContainer, StyledInfoContainer, StyledInfoContainerContent, StyledInfoTextContainer, StyledLink, StyledMainContainer, StyledPictureContainer, StyledAssetContainer, StyledRect, StyledTongue, StyledTopTeaserTagWrapper, StyledUpsetRect, StyledWrapper } from "./AssetTeaser.styled";
import { Badge } from "../../../Atoms/Badge";
var StyledFFSaturn = styled.div.withConfig({
  displayName: "AssetTeaser__StyledFFSaturn",
  componentId: "sc-1ut41nv-0"
})(["display:none;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.name === ALTERNATE && "\n  ".concat(media.md, " {\n    display: block;\n  }\n\n  > svg {\n    position: absolute;\n    left: -1px;\n    top: 0;\n    z-index: 1;\n    height: 100%;\n    width: auto;\n\n    ").concat(media.ie11, " {\n      width: 100px;\n      top: -7px;\n    }\n  }");
});

var Info = function Info(_ref2) {
  var contentText = _ref2.contentText,
      tags = _ref2.tags,
      limitLines = _ref2.limitLines;
  return React.createElement(StyledInfoTextContainer, null, React.createElement(CopyText, {
    fontSize: "sm",
    lineHeight: "sm",
    limitLines: limitLines ? limitLines : tags && tags.length > 0 ? 3 : 5,
    tag: "span"
  }, contentText));
};

var Tags = function Tags(_ref3) {
  var tags = _ref3.tags;

  if (tags && tags.length > 0) {
    return React.createElement(StyledFlexBottomContainer, null, React.createElement(StyledTopTeaserTagWrapper, {
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
  var backgroundVariant = _ref4.backgroundVariant,
      image = _ref4.image,
      imageDesktop = _ref4.imageDesktop,
      lazyloadBackgroundImage = _ref4.lazyloadBackgroundImage,
      hasAsset = _ref4.hasAsset,
      theme = _ref4.theme;

  var _useInView = useInView({
    triggerOnce: true
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var hasQueryParams = (image === null || image === void 0 ? void 0 : image.indexOf('?')) !== -1;
  var imageUrl = imageDesktop ? imageDesktop : image;
  var lazyLoadImage = imageUrl ? "".concat(imageUrl).concat(hasQueryParams ? '&' : '?', "q=1") : undefined;

  if (theme === ALTERNATE) {
    return React.createElement(StyledRect, {
      ref: ref,
      image: imageUrl,
      inView: inView,
      lazyLoadImage: lazyLoadImage,
      hasAsset: hasAsset,
      lazyloadBackgroundImage: lazyloadBackgroundImage
    });
  } else {
    switch (backgroundVariant) {
      case 'tongue':
        return React.createElement(StyledTongue, {
          ref: ref,
          height: 140
        }, React.createElement(StyledBackgroundImage, {
          image: imageUrl,
          inView: inView,
          lazyLoadImage: lazyLoadImage,
          hasAsset: hasAsset,
          lazyloadBackgroundImage: lazyloadBackgroundImage
        }));

      case 'upsetRect':
        return React.createElement(StyledUpsetRect, {
          ref: ref,
          image: imageUrl,
          hasAsset: hasAsset
        });

      case 'rect':
        return React.createElement(StyledRect, {
          ref: ref,
          image: imageUrl,
          inView: inView,
          lazyLoadImage: lazyLoadImage,
          hasAsset: hasAsset,
          lazyloadBackgroundImage: lazyloadBackgroundImage
        });
    }
  }
};

var MainHeading = function MainHeading(_ref5) {
  var headline = _ref5.headline,
      themeName = _ref5.themeName,
      limitLines = _ref5.limitLines;
  return React.createElement(HeadingFeatured, {
    fixedMdSize: themeName === ALTERNATE,
    limitLines: limitLines
  }, headline);
};

export var AssetTeaser = function AssetTeaser(_ref6) {
  var smallHeadline = _ref6.smallHeadline,
      _ref6$background = _ref6.background,
      background = _ref6$background === void 0 ? 'grey' : _ref6$background,
      headline = _ref6.headline,
      contentText = _ref6.contentText,
      assetImage = _ref6.assetImage,
      backgroundImage = _ref6.backgroundImage,
      backgroundImageDesktop = _ref6.backgroundImageDesktop,
      lazyload = _ref6.lazyload,
      lazyloadBackgroundImage = _ref6.lazyloadBackgroundImage,
      tags = _ref6.tags,
      limitLines = _ref6.limitLines,
      _ref6$backgroundVaria = _ref6.backgroundVariant,
      backgroundVariant = _ref6$backgroundVaria === void 0 ? 'upsetRect' : _ref6$backgroundVaria,
      _ref6$elevation = _ref6.elevation,
      elevation = _ref6$elevation === void 0 ? 0 : _ref6$elevation,
      elevationHover = _ref6.elevationHover,
      link = _ref6.link,
      _ref6$fixedImageHeigh = _ref6.fixedImageHeight,
      fixedImageHeight = _ref6$fixedImageHeigh === void 0 ? false : _ref6$fixedImageHeigh,
      onClick = _ref6.onClick,
      _ref6$clickableWithou = _ref6.clickableWithoutLink,
      clickableWithoutLink = _ref6$clickableWithou === void 0 ? true : _ref6$clickableWithou,
      badges = _ref6.badges,
      rest = _objectWithoutProperties(_ref6, ["smallHeadline", "background", "headline", "contentText", "assetImage", "backgroundImage", "backgroundImageDesktop", "lazyload", "lazyloadBackgroundImage", "tags", "limitLines", "backgroundVariant", "elevation", "elevationHover", "link", "fixedImageHeight", "onClick", "clickableWithoutLink", "badges"]);

  var isClickable = !!onClick && clickableWithoutLink || !!(link !== null && link !== void 0 && link.href);
  return React.createElement(ThemeConsumer, null, function (theme) {
    return React.createElement(StyledLink, {
      to: link === null || link === void 0 ? void 0 : link.to,
      href: link === null || link === void 0 ? void 0 : link.href,
      onClick: onClick,
      underline: false
    }, React.createElement(StyledWrapper, null, React.createElement(StyledCard, _extends({
      elevation: elevation,
      elevationHover: elevationHover,
      display: "flex",
      fullHeight: true,
      noBorder: 'none',
      surface: background,
      badges: []
    }, rest), React.createElement(StyledMainContainer, {
      isClickable: isClickable
    }, React.createElement(StyledInfoContainer, {
      backgroundVariant: backgroundVariant,
      hasTags: !!tags && tags.length > 0,
      hasAsset: !!assetImage
    }, badges && badges.length > 0 && React.createElement(StyledBadgeWrapper, null, React.createElement(Badge, {
      actionType: "secondary",
      badges: badges
    })), React.createElement(StyledInfoContainerContent, {
      hasBadges: Boolean(badges && badges.length > 0)
    }, smallHeadline && React.createElement(Heading, {
      tag: "p",
      scale: "level-5",
      weight: "semibold",
      lineHeight: "sm",
      limitLines: 1,
      limitWidth: (theme === null || theme === void 0 ? void 0 : theme.name) === ALTERNATE ? '300px' : '350px',
      margin: "0 0 ".concat(spacing.base.xs, " 0"),
      uppercase: true
    }, smallHeadline), React.createElement(MainHeading, {
      headline: headline,
      themeName: theme === null || theme === void 0 ? void 0 : theme.name,
      limitLines: 2
    }), React.createElement(Info, {
      contentText: contentText,
      tags: tags,
      limitLines: limitLines
    }), React.createElement(Tags, {
      tags: tags
    }))), React.createElement(StyledAssetContainer, {
      fixedImageHeight: fixedImageHeight
    }, React.createElement(Background, {
      image: backgroundImage,
      imageDesktop: backgroundImageDesktop,
      lazyloadBackgroundImage: lazyloadBackgroundImage,
      backgroundVariant: backgroundVariant,
      hasAsset: !!assetImage,
      theme: theme === null || theme === void 0 ? void 0 : theme.name
    }), assetImage && React.createElement(StyledPictureContainer, null, React.createElement(Picture, {
      src: assetImage,
      height: "100%",
      loading: lazyload ? NativeLazyLoadOptions.Lazy : NativeLazyLoadOptions.Eager
    })))))));
  });
};
//# sourceMappingURL=AssetTeaser.js.map