import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from "../../Atoms/Card";
import { Picture } from "../../Atoms/Picture";
import { media, styled } from "../../../styles";
var StyledHeroImageWrapper = styled.div.withConfig({
  displayName: "HeroBanner__StyledHeroImageWrapper",
  componentId: "sc-1245j3y-0"
})(["cursor:", ";width:100%;display:flex;height:", ";", "{height:", ";}", "{height:", ";}"], function (_ref) {
  var isLinking = _ref.isLinking;
  return isLinking ? 'pointer' : 'default';
}, function (_ref2) {
  var height = _ref2.height;
  return height && height.mobile && "".concat(height.mobile, "px");
}, media.md, function (_ref3) {
  var height = _ref3.height;
  return height && height.tablet && "".concat(height.tablet, "px");
}, media.lg, function (_ref4) {
  var height = _ref4.height;
  return height && height.desktop && "".concat(height.desktop, "px");
});
export var HeroBanner = function HeroBanner(_ref5) {
  var badges = _ref5.badges,
      link = _ref5.link,
      badgeActionType = _ref5.badgeActionType,
      height = _ref5.height,
      color = _ref5.color,
      heroImages = _ref5.heroImages,
      _ref5$elevation = _ref5.elevation,
      elevation = _ref5$elevation === void 0 ? 0 : _ref5$elevation,
      _ref5$elevationHover = _ref5.elevationHover,
      elevationHover = _ref5$elevationHover === void 0 ? 4 : _ref5$elevationHover,
      children = _ref5.children,
      onClick = _ref5.onClick;
  var history = useHistory();

  var onTileClick = function onTileClick(event) {
    if (typeof onClick === 'function') {
      onClick(event);
    }

    if (link !== null && link !== void 0 && link.to) return history.push(link.to);
    if (link !== null && link !== void 0 && link.href) return window.location.href = link.href;
  };

  var ref = useRef(null);
  var addElevationHover = link !== null && link !== void 0 && link.to || link !== null && link !== void 0 && link.href ? elevationHover : 0;
  return React.createElement(StyledHeroImageWrapper, {
    ref: ref,
    onClick: onTileClick,
    height: height,
    isLinking: !!(link !== null && link !== void 0 && link.to) || !!(link !== null && link !== void 0 && link.href)
  }, React.createElement(Card, {
    elevation: elevation,
    elevationHover: addElevationHover,
    shape: "rounded-small",
    surface: color,
    display: "flex",
    noBorder: 'none',
    fullHeight: true,
    contentWidth: "100%",
    badges: badges,
    badgeActionType: badgeActionType
  }, heroImages && React.createElement(Picture, {
    src: heroImages.xl,
    srcLg: heroImages.lg,
    srcMd: heroImages.md,
    srcSm: heroImages.sm,
    objectFit: "cover",
    height: "100%",
    width: "100%"
  }), children));
};
//# sourceMappingURL=HeroBanner.js.map