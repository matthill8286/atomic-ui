import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { CopyText } from "../../Atoms/Typography/CopyText";
import { media } from "../../../styles";
import { css, styled } from "../../../styles/styled";
import { IconArticle } from '@excelwithbusiness/webmobile-svg-library';
var StyledLabel = styled(CopyText).withConfig({
  displayName: "NativeDropdown__StyledLabel",
  componentId: "sc-1opskuf-0"
})(["position:relative;display:block;width:calc(100% - ", ");height:", ";padding:0 12px;", " border-radius:", ";box-shadow:", ";", "{width:", ";height:", ";padding:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.md;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.xxl;
}, function (_ref3) {
  var theme = _ref3.theme,
      noBorder = _ref3.noBorder;
  return !noBorder && "border: 2px solid ".concat(theme.color.grey5, ";");
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dimension.borderRadius3;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.dimension.elevationLevel2;
}, media.mobile, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.lg;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.base.lg;
});
var StyledSelect = styled.select.withConfig({
  displayName: "NativeDropdown__StyledSelect",
  componentId: "sc-1opskuf-1"
})(["appearance:none;border:none;display:block;overflow:hidden;outline:none;white-space:nowrap;text-overflow:ellipsis;background-color:transparent;box-shadow:none;cursor:pointer;width:100%;height:", ";padding:", " 0;z-index:1;color:", ";", "{width:", ";height:", ";padding:0;color:transparent;}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.base.xxl;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.base.xs;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.black;
}, media.mobile, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.base.lg;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.base.lg;
});
var IconCss = css(["position:absolute;z-index:-1;"]);
var StyledIcon = styled(Icon).withConfig({
  displayName: "NativeDropdown__StyledIcon",
  componentId: "sc-1opskuf-2"
})(["", " background-color:", ";right:14px;top:14px;", "{right:6px;top:6px;", "}"], IconCss, function (_ref13) {
  var theme = _ref13.theme,
      withBgColor = _ref13.withBgColor;
  return withBgColor ? theme.color.white : 'transparent';
}, media.mobile, function (_ref14) {
  var hasMobileIcon = _ref14.hasMobileIcon;
  return hasMobileIcon && 'display: none;';
});
var StyledMobileIcon = styled(Icon).withConfig({
  displayName: "NativeDropdown__StyledMobileIcon",
  componentId: "sc-1opskuf-3"
})(["", " background-color:", ";top:0;display:none;", "{display:block;}"], IconCss, function (_ref15) {
  var theme = _ref15.theme,
      withBgColor = _ref15.withBgColor;
  return withBgColor ? theme.color.white : 'transparent';
}, media.mobile);
export var NativeDropdown = function NativeDropdown(props) {
  var className = props.className,
      children = props.children,
      icon = props.icon,
      iconMobile = props.iconMobile,
      _props$iconRotate = props.iconRotate,
      iconRotate = _props$iconRotate === void 0 ? 90 : _props$iconRotate,
      _props$iconMobileRota = props.iconMobileRotate,
      iconMobileRotate = _props$iconMobileRota === void 0 ? 90 : _props$iconMobileRota,
      _props$noBorder = props.noBorder,
      noBorder = _props$noBorder === void 0 ? false : _props$noBorder,
      _props$withBgColor = props.withBgColor,
      withBgColor = _props$withBgColor === void 0 ? true : _props$withBgColor,
      margin = props.margin,
      padding = props.padding,
      onChange = props.onChange,
      value = props.value;
  return React.createElement(StyledLabel, {
    className: className,
    margin: margin,
    padding: padding,
    fontSize: "sm",
    lineHeight: "sm",
    noBorder: noBorder,
    tag: "label"
  }, React.createElement(StyledSelect, {
    value: value,
    onChange: onChange
  }, children), React.createElement(StyledIcon, {
    rotate: iconRotate,
    withBgColor: withBgColor,
    width: 20,
    height: 20,
    hasMobileIcon: !!iconMobile
  }, icon ? icon : React.createElement(IconArticle, null)), iconMobile && React.createElement(StyledMobileIcon, {
    rotate: iconMobileRotate,
    withBgColor: withBgColor,
    width: 20,
    height: 20
  }, iconMobile));
};
NativeDropdown.displayName = 'NativeDropdown';
//# sourceMappingURL=NativeDropdown.js.map