import React from 'react';
import { Card } from "../../../Atoms/Card";
import { Picture } from "../../../Atoms/Picture";
export var ImageTeaser = function ImageTeaser(_ref) {
  var badges = _ref.badges,
      badgeActionType = _ref.badgeActionType,
      _ref$elevation = _ref.elevation,
      elevation = _ref$elevation === void 0 ? 0 : _ref$elevation,
      _ref$elevationHover = _ref.elevationHover,
      elevationHover = _ref$elevationHover === void 0 ? 4 : _ref$elevationHover,
      finalImages = _ref.finalImages;
  return React.createElement(Card, {
    elevation: elevation,
    elevationHover: elevationHover,
    shape: "rounded-small",
    display: "flex",
    fullHeight: true,
    badges: badges,
    badgeActionType: badgeActionType
  }, React.createElement(Picture, {
    src: finalImages[0],
    srcLg: finalImages[1],
    srcMd: finalImages[2],
    srcSm: finalImages[3],
    objectFit: "cover",
    height: "100%",
    width: "100%"
  }));
};
//# sourceMappingURL=ImageTeaser.js.map