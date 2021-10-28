import React from 'react';
import { Card } from "../../../Atoms/Card";
import { StyledCardWrapper } from "../AssetTile.styled";
export var AssetCard = function AssetCard(_ref) {
  var children = _ref.children,
      fullHeight = _ref.fullHeight,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      noBorder = _ref.noBorder,
      onClick = _ref.onClick,
      badges = _ref.badges,
      borderColor = _ref.borderColor,
      cardHeight = _ref.cardHeight,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === void 0 ? 'hidden' : _ref$overflow,
      _ref$elevationHover = _ref.elevationHover,
      elevationHover = _ref$elevationHover === void 0 ? 3 : _ref$elevationHover;
  return React.createElement(Card, {
    elevation: 0,
    elevationHover: isDisabled ? 0 : elevationHover,
    shape: "rounded-big",
    overflow: overflow,
    onClick: onClick,
    surface: "white",
    padding: undefined,
    fullHeight: fullHeight,
    cardHeight: cardHeight,
    noBorder: noBorder ? 'none' : undefined,
    badges: badges,
    borderColor: borderColor
  }, React.createElement(StyledCardWrapper, {
    isDisabled: isDisabled
  }, children));
};
//# sourceMappingURL=AssetCard.js.map