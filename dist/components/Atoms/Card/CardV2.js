function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Badge } from "../Badge";
import { StyledBadgeLineWrapper, StyledCard, StyledCardWrapper, StyledDivider, StyledFeaturedAssetsContainer, StyledFeaturedAssetSpacing, StyledFeaturedAssetsPicture } from "./Card.styled";

var FeaturedAsset = function FeaturedAsset(_ref) {
  var image = _ref.image;
  return React.createElement(StyledFeaturedAssetSpacing, null, React.createElement(Card, {
    center: true,
    elevation: 1,
    display: "flex",
    shape: "rounded-small",
    padding: "xs",
    noBorder: ['bottom', 'top', 'right', 'left']
  }, React.createElement(StyledFeaturedAssetsPicture, {
    src: image,
    height: "32px",
    objectFit: "contain",
    width: "auto"
  })));
};

var FeaturedAssetRow = function FeaturedAssetRow(_ref2) {
  var floatingAssetRow = _ref2.floatingAssetRow,
      featuredAssetImages = _ref2.featuredAssetImages;

  if (featuredAssetImages && featuredAssetImages.length > 0) {
    var featuredAssets = featuredAssetImages.map(function (fa, index) {
      return React.createElement(FeaturedAsset, _extends({
        key: 'FeaturedAsset_' + fa.image + index
      }, fa));
    });
    return React.createElement(StyledFeaturedAssetsContainer, null, featuredAssets);
  } else {
    return null;
  }
};

export var Card = function Card(_ref3) {
  var ariaLabel = _ref3.ariaLabel,
      ariaLabelledby = _ref3.ariaLabelledby,
      children = _ref3.children,
      _ref3$center = _ref3.center,
      center = _ref3$center === void 0 ? false : _ref3$center,
      contentWidth = _ref3.contentWidth,
      _ref3$elevation = _ref3.elevation,
      elevation = _ref3$elevation === void 0 ? 0 : _ref3$elevation,
      elevationHover = _ref3.elevationHover,
      _ref3$fullHeight = _ref3.fullHeight,
      fullHeight = _ref3$fullHeight === void 0 ? false : _ref3$fullHeight,
      _ref3$noBorder = _ref3.noBorder,
      noBorder = _ref3$noBorder === void 0 ? [] : _ref3$noBorder,
      borderColor = _ref3.borderColor,
      _ref3$borderWidth = _ref3.borderWidth,
      borderWidth = _ref3$borderWidth === void 0 ? 1 : _ref3$borderWidth,
      _ref3$showDivider = _ref3.showDivider,
      showDivider = _ref3$showDivider === void 0 ? false : _ref3$showDivider,
      _ref3$floatingAssetRo = _ref3.floatingAssetRow,
      floatingAssetRow = _ref3$floatingAssetRo === void 0 ? false : _ref3$floatingAssetRo,
      dividerWidth = _ref3.dividerWidth,
      padding = _ref3.padding,
      margin = _ref3.margin,
      shape = _ref3.shape,
      _ref3$surface = _ref3.surface,
      surface = _ref3$surface === void 0 ? 'white' : _ref3$surface,
      _ref3$textColor = _ref3.textColor,
      textColor = _ref3$textColor === void 0 ? 'black' : _ref3$textColor,
      overflow = _ref3.overflow,
      _ref3$display = _ref3.display,
      display = _ref3$display === void 0 ? 'block' : _ref3$display,
      flexDirection = _ref3.flexDirection,
      _ref3$badges = _ref3.badges,
      badges = _ref3$badges === void 0 ? [] : _ref3$badges,
      _ref3$badgeActionType = _ref3.badgeActionType,
      badgeActionType = _ref3$badgeActionType === void 0 ? 'prominent' : _ref3$badgeActionType,
      onClick = _ref3.onClick,
      className = _ref3.className,
      featuredAssetImages = _ref3.featuredAssetImages,
      otherProps = _objectWithoutProperties(_ref3, ["ariaLabel", "ariaLabelledby", "children", "center", "contentWidth", "elevation", "elevationHover", "fullHeight", "noBorder", "borderColor", "borderWidth", "showDivider", "floatingAssetRow", "dividerWidth", "padding", "margin", "shape", "surface", "textColor", "overflow", "display", "flexDirection", "badges", "badgeActionType", "onClick", "className", "featuredAssetImages"]);

  var a11yProps = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    tabIndex: 0
  };
  var card = React.createElement(StyledCard, _extends({
    borderColor: borderColor,
    borderWidth: borderWidth,
    center: center,
    display: display,
    elevation: elevation,
    elevationHover: elevationHover,
    contentWidth: contentWidth,
    flexDirection: flexDirection,
    margin: margin,
    noBorder: noBorder,
    overflow: overflow,
    padding: padding,
    shape: shape,
    showDivider: showDivider,
    surface: surface,
    textColor: textColor
  }, onClick ? _objectSpread({}, a11yProps) : {}), children);
  return React.createElement(StyledCardWrapper, _extends({
    className: className,
    elevationHover: elevationHover,
    fullHeight: fullHeight,
    onClick: onClick
  }, onClick ? _objectSpread({}, a11yProps) : {}, otherProps), badges && badges.length > 0 ? React.createElement(React.Fragment, null, React.createElement(StyledBadgeLineWrapper, null, React.createElement(Badge, {
    badges: badges,
    isBadgeLine: true,
    actionType: badgeActionType
  })), card) : card, showDivider && React.createElement(StyledDivider, {
    dividerWidth: dividerWidth
  }), React.createElement(FeaturedAssetRow, {
    floatingAssetRow: floatingAssetRow,
    featuredAssetImages: featuredAssetImages
  }));
};
//# sourceMappingURL=CardV2.js.map