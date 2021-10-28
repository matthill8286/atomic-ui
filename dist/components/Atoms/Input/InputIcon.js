function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Icon } from "../Icon";
import { defaultSpacing } from "../../../styles";
import { styled } from "../../../styles/styled";
import { IconClose, IconEdit } from '@excelwithbusiness/webmobile-svg-library';
import { IconButton } from "../Button/IconButton";
var StyledIconWrapper = styled.div.withConfig({
  displayName: "InputIcon__StyledIconWrapper",
  componentId: "sc-1nqqb8v-0"
})(["position:absolute;top:", ";right:", ";height:100%;> button{background:none;border:none;margin:0;padding:0;top:", "px;outline:none;&:focus{svg{fill:", ";}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.sm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.sm;
}, 3.5 * defaultSpacing, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.black;
});
var mapStateToIcon = {
  default: React.createElement("div", null),
  valid: React.createElement(IconClose, null),
  error: React.createElement(IconEdit, null)
};
var mapStateToIconColor = {
  default: 'grey3',
  valid: 'success',
  error: 'error'
};
export var InputIcon = function InputIcon(props) {
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
  return React.createElement(StyledIconWrapper, null, onClick ? React.createElement(IconButton, {
    "aria-label": iconLabel,
    height: iconSize.height,
    isInputIcon: true,
    onClick: onClick,
    width: iconSize.width
  }, iconComp) : iconComp);
};
//# sourceMappingURL=InputIcon.js.map