import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { css, media, styled } from "../../../styles";
import { StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
export var StyledNavArrow = styled.div.withConfig({
  displayName: "NavArrow__StyledNavArrow",
  componentId: "sc-1kj6ppd-0"
})(["position:absolute;background:", ";fill:", ";border-radius:", ";box-shadow:", ";", " ", " cursor:pointer;z-index:3;display:none;", " ", "{display:none !important;}", "{", " ", "}", "{", " ", "}", " ", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.color.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.black;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dimension.borderRadius7;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dimension.elevationLevel3;
}, function (props) {
  return props.direction === 'next' && "right: ".concat(props.theme.spacing.base.lg, ";");
}, function (props) {
  return props.direction === 'prev' && "left: ".concat(props.theme.spacing.base.lg, ";");
}, function (props) {
  return props.showArrows === false && 'display: none !important;';
}, media.maxMd, media.lg, function (props) {
  return props.direction === 'next' && "right: ".concat(props.theme.spacing.base.xl, ";");
}, function (props) {
  return props.direction === 'prev' && "left: ".concat(props.theme.spacing.base.xl, ";");
}, media.xl, function (props) {
  return props.direction === 'next' && "right: ".concat(props.theme.spacing.base.xxl, ";");
}, function (props) {
  return props.direction === 'prev' && "left: ".concat(props.theme.spacing.base.xxl, ";");
}, function (props) {
  return props.fixedArrowPosition ? css(["", "{", " ", "}"], media.xxl, function (props) {
    return props.direction === 'next' && "right: calc(50% - ".concat(250 * 2.5 + 67, "px);");
  }, function (props) {
    return props.direction === 'prev' && "left: calc(50% - ".concat(250 * 2.5 + 67, "px);");
  }) : '';
}, function (props) {
  return !props.fixedArrowPosition && props.zeroArrowPosition && css(["", " ", ""], function (props) {
    return props.direction === 'next' && 'right: 0 !important;';
  }, function (props) {
    return props.direction === 'prev' && 'left: 0 !important;';
  });
});
export var NavArrow = React.forwardRef(function (_ref5, ref) {
  var direction = _ref5.direction,
      onClick = _ref5.onClick,
      showArrows = _ref5.showArrows,
      fixedArrowPosition = _ref5.fixedArrowPosition,
      zeroArrowPosition = _ref5.zeroArrowPosition;
  var rotation = direction === 'prev' ? 180 : 0;
  return React.createElement(StyledNavArrow, {
    direction: direction,
    ref: ref,
    onClick: onClick,
    showArrows: showArrows,
    fixedArrowPosition: fixedArrowPosition,
    zeroArrowPosition: zeroArrowPosition
  }, React.createElement(Icon, {
    rotate: rotation,
    color: "black",
    padding: "sm"
  }, React.createElement(StyleguideArrow, {
    width: 30,
    height: 30
  })));
});
//# sourceMappingURL=NavArrow.js.map