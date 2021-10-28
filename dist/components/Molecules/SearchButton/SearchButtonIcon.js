function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { styled } from "../../../styles/styled";
import { IconCross, IconSearch } from '@excelwithbusiness/webmobile-svg-library';
import { IconButton } from "../../Atoms/Button";
var SearchIconWrapper = styled.div.withConfig({
  displayName: "SearchButtonIcon__SearchIconWrapper",
  componentId: "u4tsm2-0"
})(["top:14px;position:absolute;right:", ";height:100%;> button{background:none;border:none;margin:0;padding:0;top:0;outline:none;&:focus{svg{fill:", ";}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.sm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.grey4;
});
var mapStateToIcon = {
  default: React.createElement("div", null),
  valid: React.createElement(IconSearch, null),
  error: React.createElement(IconCross, null)
};
var mapStateToIconColor = {
  default: 'grey4',
  valid: 'success',
  error: 'error'
};
export var SearchButtonIcon = function SearchButtonIcon(props) {
  var icon = props.icon,
      _props$iconSize = props.iconSize,
      iconSize = _props$iconSize === void 0 ? {
    height: 20,
    width: 20
  } : _props$iconSize,
      iconState = props.iconState,
      onClick = props.onClick,
      iconLabel = props.iconLabel;
  var color = mapStateToIconColor[iconState];
  var iconComp = React.createElement(Icon, _extends({
    as: "span",
    color: color
  }, iconSize), icon ? icon : mapStateToIcon[iconState]);
  return React.createElement(SearchIconWrapper, null, onClick ? React.createElement(IconButton, {
    "aria-label": iconLabel,
    height: iconSize.height,
    isInputIcon: true,
    onClick: onClick,
    width: iconSize.width
  }, iconComp) : iconComp);
};
//# sourceMappingURL=SearchButtonIcon.js.map