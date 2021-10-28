function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from "../../../Atoms/Card";
import { Foldable } from "../../../Atoms/Foldable";
import { Icon } from "../../../Atoms/Icon";
import { Link } from "../../../Atoms/Link";
import { Picture } from "../../../Atoms/Picture";
import { SkeletonBlockItem, SkeletonInlineItem } from "../../../Atoms/Skeleton";
import { CopyText, HeadingFeatured } from "../../../Atoms/Typography";
import { useWindowDimensions } from "../../../Helper/useWindowDimensions";
import { DANONE } from "../../../../styles";
import { breakpoints } from "../../../../styles/sc-vars-global";
import { IconArrow } from "../../../../svgs";
import { isAlternateTheme, useTheme } from "../../../../utils/helper";
import { useGraphCmsImages } from "../../../../utils/useGraphCmsImages";
import { isPortrait, StyledContentContainer, StyledDummyLink, StyledHeadingContainer, StyledIcon, StyledInfoTextChildren, StyledInfoTextContainer, StyledLinkContainer, StyledLinkListContainer, StyledLinkListItemSpace, StyledPictureContainer, StyledResponsiveContainer, StyledTeaser, StyledTextLinkContainer } from "./Teaser.styled";
var DEFAULT_LINE_LIMIT = 2;

var Image = function Image(_ref) {
  var image = _ref.image,
      withImagePadding = _ref.withImagePadding,
      orientation = _ref.orientation,
      loading = _ref.loading,
      alt = _ref.alt;

  if (image) {
    return React.createElement(StyledPictureContainer, {
      withImagePadding: withImagePadding,
      orientation: orientation
    }, loading ? React.createElement(SkeletonBlockItem, {
      height: "100%",
      width: "100%"
    }) : React.createElement(Picture, {
      alt: alt,
      src: image,
      height: "100%",
      width: "100%",
      objectFit: withImagePadding ? 'contain' : 'cover'
    }));
  }

  return null;
};

var MainHeading = function MainHeading(_ref2) {
  var headline = _ref2.headline,
      _ref2$headlineLimitLi = _ref2.headlineLimitLines,
      headlineLimitLines = _ref2$headlineLimitLi === void 0 ? DEFAULT_LINE_LIMIT : _ref2$headlineLimitLi,
      loading = _ref2.loading,
      orientation = _ref2.orientation;

  var _useTheme = useTheme(),
      name = _useTheme.name;

  if (loading) {
    return React.createElement(SkeletonInlineItem, {
      fontSize: "xl",
      length: 15
    });
  }

  return React.createElement(HeadingFeatured, {
    fixedMdSize: name === DANONE,
    fixedSize: isPortrait(orientation) ? 'xl' : undefined,
    limitLines: headlineLimitLines
  }, headline);
};

var MainLink = function MainLink(_ref3) {
  var color = _ref3.color,
      decorationColor = _ref3.decorationColor,
      _ref3$dummyMainLink = _ref3.dummyMainLink,
      dummyMainLink = _ref3$dummyMainLink === void 0 ? false : _ref3$dummyMainLink,
      isSmall = _ref3.isSmall,
      loading = _ref3.loading,
      mainLink = _ref3.mainLink;

  if (mainLink && mainLink.label) {
    var kindOfLink = mainLink.to ? {
      to: mainLink.to
    } : {
      href: mainLink.href
    };
    return loading ? React.createElement(StyledTextLinkContainer, {
      isSmall: isSmall
    }, React.createElement(SkeletonBlockItem, {
      height: "20px",
      width: "100px"
    })) : React.createElement(StyledTextLinkContainer, {
      isSmall: isSmall
    }, React.createElement(Link, _extends({
      fontSize: "sm",
      iconLeft: React.createElement(Icon, {
        color: decorationColor || 'primary'
      }, React.createElement(IconArrow, null)),
      scale: "small"
    }, decorationColor && {
      decorationColor: decorationColor
    }, color && {
      color: color
    }, kindOfLink), mainLink.label));
  } else if (dummyMainLink) {
    return React.createElement(StyledDummyLink, null, "\xA0");
  }

  return null;
};

var Chevron = function Chevron(_ref4) {
  var isAlternate = _ref4.isAlternate,
      isFoldable = _ref4.isFoldable,
      isOpen = _ref4.isOpen,
      _ref4$isSmall = _ref4.isSmall,
      isSmall = _ref4$isSmall === void 0 ? true : _ref4$isSmall,
      mainLink = _ref4.mainLink;

  if (isFoldable) {
    return React.createElement(StyledLinkContainer, {
      isSmall: isSmall
    }, React.createElement(StyledIcon, {
      height: "sm",
      width: "sm",
      color: isAlternate ? 'grey4' : 'primary',
      rotate: isOpen ? 0 : 180,
      isSmall: isSmall,
      hasMarginLeft: true
    }, React.createElement(IconArrow, null)));
  } else if (mainLink && !mainLink.label && (mainLink.to || mainLink.href)) {
    return React.createElement(StyledLinkContainer, {
      isSmall: isSmall
    }, React.createElement(StyledIcon, {
      height: "sm",
      width: "sm",
      color: "primary",
      isSmall: isSmall,
      hasMarginLeft: true
    }, React.createElement(IconArrow, null)));
  } else {
    return null;
  }
};

var ContentText = function ContentText(_ref5) {
  var contentText = _ref5.contentText,
      children = _ref5.children,
      loading = _ref5.loading;

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.sm;

  if (loading) {
    return React.createElement(React.Fragment, null, React.createElement(SkeletonInlineItem, {
      margin: "md 0 xxs"
    }), React.createElement(SkeletonBlockItem, {
      height: "20px",
      width: "200px"
    }));
  }

  if (contentText || children) {
    return React.createElement(StyledInfoTextContainer, null, contentText && React.createElement(CopyText, {
      limitLines: 5,
      fontSize: "sm",
      lineHeight: isMobile ? 'xs' : 'sm',
      margin: "sm 0 0 0"
    }, contentText), children && React.createElement(StyledInfoTextChildren, null, children));
  } else {
    return null;
  }
};

var LinkList = function LinkList(_ref6) {
  var linkList = _ref6.linkList;

  if (linkList && linkList.length > 0) {
    var linkComponents = new Array();

    for (var i = 0; i < linkList.length; i++) {
      var l = linkList[i];

      if (i > 0) {
        linkComponents.push(React.createElement(StyledLinkListItemSpace, {
          key: 'space_' + l.label
        }));
      }

      linkComponents.push(React.createElement(Link, {
        key: l.label + '_' + l.to,
        scale: "large",
        to: l.to
      }, l.label));
    }

    return React.createElement(StyledLinkListContainer, null, linkComponents);
  } else {
    return null;
  }
};

var FoldableWrapper = function FoldableWrapper(_ref7) {
  var children = _ref7.children,
      isFoldable = _ref7.isFoldable,
      isOpen = _ref7.isOpen;

  if (isFoldable) {
    return React.createElement(Foldable, {
      isOpen: isOpen
    }, children);
  } else {
    return React.createElement(React.Fragment, null, children);
  }
};

export var Teaser = function Teaser(_ref8) {
  var badgeActionType = _ref8.badgeActionType,
      badges = _ref8.badges,
      children = _ref8.children,
      color = _ref8.color,
      contentText = _ref8.contentText,
      decorationColor = _ref8.decorationColor,
      borderColor = _ref8.borderColor,
      _ref8$dummyMainLink = _ref8.dummyMainLink,
      dummyMainLink = _ref8$dummyMainLink === void 0 ? false : _ref8$dummyMainLink,
      _ref8$elevation = _ref8.elevation,
      elevation = _ref8$elevation === void 0 ? 0 : _ref8$elevation,
      _ref8$elevationHover = _ref8.elevationHover,
      elevationHover = _ref8$elevationHover === void 0 ? 4 : _ref8$elevationHover,
      _ref8$foldable = _ref8.foldable,
      foldable = _ref8$foldable === void 0 ? 'never' : _ref8$foldable,
      _ref8$growHeadline = _ref8.growHeadline,
      growHeadline = _ref8$growHeadline === void 0 ? false : _ref8$growHeadline,
      headline = _ref8.headline,
      _ref8$headlineLimitLi = _ref8.headlineLimitLines,
      headlineLimitLines = _ref8$headlineLimitLi === void 0 ? DEFAULT_LINE_LIMIT : _ref8$headlineLimitLi,
      icon = _ref8.icon,
      image = _ref8.image,
      altText = _ref8.altText,
      _ref8$lazyloadLowQual = _ref8.lazyloadLowQuality,
      lazyloadLowQuality = _ref8$lazyloadLowQual === void 0 ? false : _ref8$lazyloadLowQual,
      linkList = _ref8.linkList,
      _ref8$loading = _ref8.loading,
      loading = _ref8$loading === void 0 ? false : _ref8$loading,
      mainLink = _ref8.mainLink,
      onClick = _ref8.onClick,
      _ref8$orientation = _ref8.orientation,
      orientation = _ref8$orientation === void 0 ? 'auto' : _ref8$orientation,
      _ref8$withImagePaddin = _ref8.withImagePadding,
      withImagePadding = _ref8$withImagePaddin === void 0 ? false : _ref8$withImagePaddin,
      _ref8$contentful = _ref8.contentful,
      contentful = _ref8$contentful === void 0 ? false : _ref8$contentful,
      rest = _objectWithoutProperties(_ref8, ["badgeActionType", "badges", "children", "color", "contentText", "decorationColor", "borderColor", "dummyMainLink", "elevation", "elevationHover", "foldable", "growHeadline", "headline", "headlineLimitLines", "icon", "image", "altText", "lazyloadLowQuality", "linkList", "loading", "mainLink", "onClick", "orientation", "withImagePadding", "contentful"]);

  var _useWindowDimensions2 = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions2.breakpoint;

  var history = useHistory();
  var isMobile = currentBreakpoint < breakpoints.sm;
  var isFoldable = foldable === 'always' || foldable === 'mobile' && isMobile;

  var _useState = useState(!isFoldable),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var hasLinkList = !!linkList && linkList.length > 0;
  var isAlternate = isAlternateTheme();
  var onTeaserClick = React.useCallback(function (event) {
    if (typeof onClick === 'function') {
      onClick(event);
    }

    if (isFoldable && !isOpen) {
      setOpen(true);
      return;
    }

    if (isFoldable && isOpen && (!mainLink || !mainLink.label) && !hasLinkList) {
      setOpen(false);
      return;
    }

    if (!isFoldable && mainLink) {
      if (mainLink.to) return history.push(mainLink.to);
      if (mainLink.href) return window.location.href = mainLink.href;
    }
  }, [hasLinkList, history, isFoldable, isOpen, mainLink, onClick, setOpen]);
  var onHeadingClick = React.useCallback(function () {
    if (isFoldable && isOpen) {
      setOpen(false);
    }
  }, [isFoldable, isOpen, setOpen]);

  var _useGraphCmsImages = useGraphCmsImages([image], !lazyloadLowQuality),
      _useGraphCmsImages2 = _slicedToArray(_useGraphCmsImages, 2),
      finalImages = _useGraphCmsImages2[0],
      ref = _useGraphCmsImages2[1];

  return React.createElement(StyledTeaser, _extends({
    ref: ref,
    onClick: onTeaserClick,
    hasLinkList: hasLinkList,
    isOpen: isOpen,
    orientation: orientation
  }, rest), React.createElement(Card, {
    elevation: elevation,
    elevationHover: hasLinkList ? 0 : elevationHover,
    shape: "rounded-big",
    display: "flex",
    badges: badges,
    borderColor: borderColor,
    badgeActionType: badgeActionType
  }, React.createElement(StyledResponsiveContainer, {
    orientation: orientation
  }, React.createElement(Image, {
    image: finalImages[0],
    withImagePadding: withImagePadding,
    orientation: orientation,
    loading: loading,
    alt: altText
  }), React.createElement(StyledContentContainer, null, React.createElement(StyledHeadingContainer, {
    onClick: onHeadingClick,
    growHeadline: growHeadline
  }, React.createElement(MainHeading, {
    headline: headline,
    headlineLimitLines: headlineLimitLines,
    loading: loading,
    orientation: orientation
  }), React.createElement(Chevron, {
    isAlternate: isAlternate,
    isFoldable: isFoldable,
    isOpen: isOpen,
    mainLink: mainLink
  })), icon && React.createElement(StyledIcon, {
    color: "primary",
    hasMarginTop: true
  }, icon), React.createElement(FoldableWrapper, {
    isFoldable: isFoldable,
    isOpen: isOpen
  }, React.createElement(ContentText, {
    contentText: contentText,
    loading: loading
  }, children), React.createElement(LinkList, {
    linkList: linkList
  }), React.createElement(MainLink, {
    color: color,
    decorationColor: decorationColor,
    dummyMainLink: dummyMainLink,
    loading: loading,
    mainLink: mainLink
  }))))));
};
//# sourceMappingURL=Teaser.js.map