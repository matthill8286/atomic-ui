function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import * as React from 'react';
import { Icon } from "../../Atoms/Icon";
import { Link } from "../../Atoms/Link";
import { IconForwardSlash, StyleguideHomeVs } from '@excelwithbusiness/webmobile-svg-library';
import { StyledBreadcrumb, StyledHomeLink, StyledLi, StyledUl } from "./Breadcrumb.styled";
import { useWindowDimensions } from "../../Helper";

var _renderSEOMeta = function _renderSEOMeta(paths, homeLink) {
  var breadcrumbSeoPaths = _toConsumableArray(paths);

  var homeBreadcrumbPath = {
    name: 'home',
    link: homeLink
  };
  breadcrumbSeoPaths.unshift(homeBreadcrumbPath);
  var meta = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbSeoPaths.map(function (seoPath, i) {
      return {
        '@type': 'ListItem',
        position: i + 1,
        name: seoPath.name,
        item: seoPath.link + (i === breadcrumbSeoPaths.length - 1 ? '#top' : '')
      };
    })
  };
  return React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(meta)
    }
  });
};

export var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      margin = _ref.margin,
      padding = _ref.padding,
      paths = _ref.paths,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$homeLink = _ref.homeLink,
      homeLink = _ref$homeLink === void 0 ? '/' : _ref$homeLink,
      _ref$hideLastElement = _ref.hideLastElement,
      hideLastElement = _ref$hideLastElement === void 0 ? false : _ref$hideLastElement,
      _ref$isHomeRouterLink = _ref.isHomeRouterLink,
      isHomeRouterLink = _ref$isHomeRouterLink === void 0 ? true : _ref$isHomeRouterLink,
      _ref$homeValue = _ref.homeValue,
      homeValue = _ref$homeValue === void 0 ? 'Home' : _ref$homeValue,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? 'grey5' : _ref$textColor,
      _ref$linkColor = _ref.linkColor,
      linkColor = _ref$linkColor === void 0 ? 'grey5' : _ref$linkColor,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === void 0 ? 'grey5' : _ref$iconColor,
      decorationColor = _ref.decorationColor,
      otherProps = _objectWithoutProperties(_ref, ["className", "margin", "padding", "paths", "loading", "homeLink", "hideLastElement", "isHomeRouterLink", "homeValue", "textColor", "linkColor", "iconColor", "decorationColor"]);

  var _useWindowDimensions = useWindowDimensions(),
      breakpointName = _useWindowDimensions.breakpointName;

  var smallScreens = ['xs', undefined].includes(breakpointName);
  var visiblePaths = hideLastElement || smallScreens ? _toConsumableArray(paths).slice(0, -1) : paths;
  return React.createElement(React.Fragment, null, _renderSEOMeta(paths, homeLink), React.createElement(StyledBreadcrumb, _extends({
    className: className,
    margin: margin,
    padding: padding,
    isLoading: loading,
    "data-test": "filtered-breadcrumb-ul",
    "data-paths-count": paths.length
  }, otherProps), React.createElement(StyledUl, null, React.createElement(StyledLi, {
    isLastButOne: false
  }, React.createElement(StyledHomeLink, _extends({
    inline: true
  }, isHomeRouterLink ? {
    to: homeLink
  } : {
    href: homeLink
  }, {
    fontSize: "xs",
    underline: false,
    iconLeft: React.createElement(Icon, {
      height: "sm",
      width: "sm",
      color: iconColor
    }, !loading && React.createElement(StyleguideHomeVs, {
      fill: iconColor
    }))
  }))), visiblePaths && visiblePaths.map(function (item, index) {
    var isLast = visiblePaths.length - 1 === index && !hideLastElement;
    var isLastButOne = visiblePaths.length - 2 === index;
    return React.createElement(StyledLi, {
      key: item.name,
      isLastButOne: isLastButOne
    }, React.createElement(Link, _extends({
      fontSize: "sm",
      inline: true,
      underline: false,
      disabled: !smallScreens && isLast,
      decorationColor: decorationColor,
      iconLeft: React.createElement(Icon, {
        color: iconColor
      }, !loading && React.createElement(IconForwardSlash, null))
    }, item.isRouterLink ? {
      to: item.link
    } : {
      href: item.link
    }), item.name));
  }))));
};
Breadcrumb.displayName = 'Breadcrumb';
//# sourceMappingURL=Breadcrumb.js.map