function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import { Button } from "../../Atoms/Button";
import { Icon } from "../../Atoms/Icon";
import { styled } from "../../../styles/styled";
import { ThemeContext } from "../../../styles/styled";
import { IconArrowThin } from '@excelwithbusiness/webmobile-svg-library';
var StyledIcon = styled(Icon).withConfig({
  displayName: "BackToTop__StyledIcon",
  componentId: "sc-1eoil6d-0"
})(["padding:0;justify-content:center;"]);
var StyledBackToTop = styled(Button).withConfig({
  displayName: "BackToTop__StyledBackToTop",
  componentId: "sc-1eoil6d-1"
})(["position:fixed;bottom:", ";top:auto;right:", ";transition:transform 0.3s ease-in-out,box-shadow 0.3s ease-in-out,opacity 0.3s ease-in-out;opacity:", ";display:", ";z-index:5;transform:", ";", " &:focus,&:active{outline:none;border:none;}&:hover{box-shadow:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.md;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.md;
}, function (_ref3) {
  var visible = _ref3.visible;
  return visible === 'VISIBLE' ? '1' : '0.5';
}, function (_ref4) {
  var visible = _ref4.visible;
  return visible === 'HIDDEN' ? 'none' : 'inherit';
}, function (_ref5) {
  var visible = _ref5.visible;
  return visible === 'VISIBLE' || visible === 'TRANSPARENT' ? 'transform: translateX(0);' : 'transform: translateX(calc(100% + 30px));';
}, function (_ref6) {
  var visible = _ref6.visible;
  return visible === 'TRANSPARENT' ? "\n        &:hover{\n            opacity: 1;\n        }" : '0.5';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.dimension.elevationLevel1;
});
export var BackToTop = function BackToTop(_ref8) {
  var visible = _ref8.visible,
      onClick = _ref8.onClick,
      otherProps = _objectWithoutProperties(_ref8, ["visible", "onClick"]);

  var _ref9 = useContext(ThemeContext),
      button = _ref9.button;

  var smoothScroll = function smoothScroll(e) {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });

    if (onClick) {
      onClick(e);
    }
  };

  return React.createElement(StyledBackToTop, _extends({
    actionType: "prominent",
    round: button.isRound,
    squared: true,
    size: "sm",
    "aria-label": "Back to top",
    onClick: smoothScroll,
    visible: visible
  }, otherProps), React.createElement(StyledIcon, {
    rotate: 270,
    width: 24,
    height: 24,
    color: 'white'
  }, React.createElement(IconArrowThin, null)));
};
//# sourceMappingURL=BackToTop.js.map