function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Button } from "../../Atoms/Button";
import { Cell, Grid, Row } from "../../Helper/Grid";
import { css, styled } from "../../../styles/styled";
import { useWindowDimensions } from "../../Helper";
import { breakpoints, media } from "../../../styles";
var StyledCookieWrapper = styled.div.withConfig({
  displayName: "CookieLayer__StyledCookieWrapper",
  componentId: "sc-2f9r60-0"
})(["position:", ";bottom:0;left:0;width:100%;z-index:200;box-sizing:border-box;& a{color:", ";:hover{color:", ";}}"], function (_ref) {
  var position = _ref.position;
  return position;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.grey5;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.primary;
});
var StyledButton = styled(Button).withConfig({
  displayName: "CookieLayer__StyledButton",
  componentId: "sc-2f9r60-1"
})(["display:inline-flex;flex-flow:column;margin-right:", ";", "{margin:", " 0;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.md;
}, media.maxSm, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.xs;
});
var StyledCookieFooter = styled.div.withConfig({
  displayName: "CookieLayer__StyledCookieFooter",
  componentId: "sc-2f9r60-2"
})(["", ""], function (_ref6) {
  var showButtonSeparator = _ref6.showButtonSeparator,
      theme = _ref6.theme,
      buttonType = _ref6.buttonAlignment;
  return css(["border-top:1px solid ", ";padding-top:", ";width:100%;display:flex;flex-direction:row;", " ", " ", " ", "{flex-direction:column-reverse;}"], showButtonSeparator ? theme.color.grey2 : "transparent", function (_ref7) {
    var theme = _ref7.theme;
    return theme.spacing.base.lg;
  }, buttonType === 'space-between' && "\n      justify-content: space-between;\n    ", buttonType === 'right' && "\n      justify-content: flex-end;\n    ", buttonType === 'center' && "\n      justify-content: center;\n      width: 100%;\n      margin: 0 auto;\n    ", media.maxSm);
});
var StyledCookieFooterPrimary = styled.div.withConfig({
  displayName: "CookieLayer__StyledCookieFooterPrimary",
  componentId: "sc-2f9r60-3"
})(["", " ", " ", ""], function (_ref8) {
  var buttonType = _ref8.buttonAlignment;
  return buttonType === 'space-between' && "\n    text-align: right;\n    ";
}, function (_ref9) {
  var buttonType = _ref9.buttonAlignment;
  return buttonType === 'right' && "\n    text-align: right;\n    ";
}, function (_ref10) {
  var buttonType = _ref10.buttonAlignment,
      buttonWidth = _ref10.buttonWidth,
      theme = _ref10.theme;
  return buttonType === 'center' ? "\n      margin: 0 auto 0;\n      width: ".concat(typeof buttonWidth === 'number' ? "".concat(buttonWidth, "px ") : '100%', "\n    ") : "\n      margin: 0 ".concat(theme.spacing.base.md, "\n    ");
});
var StyledCookieFooterSecondary = styled.div.withConfig({
  displayName: "CookieLayer__StyledCookieFooterSecondary",
  componentId: "sc-2f9r60-4"
})(["", ""], function (_ref11) {
  var theme = _ref11.theme,
      buttonType = _ref11.buttonAlignment;
  return css(["", " ", " ", "{margin-top:", ";margin-right:0;}"], buttonType === 'right' && "\n      margin-right: ".concat(theme.spacing.base.md, ";\n    "), buttonType === 'center' ? "\n      margin: 0 ".concat(theme.spacing.base.xs, " 0 auto;\n       width: 100%;\n    ") : "\n      margin: 0 ".concat(theme.spacing.base.md, "\n    "), media.maxSm, function (_ref12) {
    var theme = _ref12.theme;
    return theme.spacing.base.sm;
  });
});
var StyledCookieFooterButton = styled(Button).withConfig({
  displayName: "CookieLayer__StyledCookieFooterButton",
  componentId: "sc-2f9r60-5"
})(["width:100%;margin:0 auto;max-width:400px;", "{width:100%;}"], media.maxSm);
export var CookieButtonGroup = function CookieButtonGroup(_ref13) {
  var _ref13$buttonAlignmen = _ref13.buttonAlignment,
      buttonAlignment = _ref13$buttonAlignmen === void 0 ? 'space-between' : _ref13$buttonAlignmen,
      primaryButtonProps = _ref13.primaryButtonProps,
      secondaryButtonProps = _ref13.secondaryButtonProps,
      buttonWidth = _ref13.buttonWidth,
      _ref13$showButtonSepa = _ref13.showButtonSeparator,
      showButtonSeparator = _ref13$showButtonSepa === void 0 ? true : _ref13$showButtonSepa;

  if (!primaryButtonProps && !secondaryButtonProps) {
    return React.createElement(React.Fragment, null);
  }

  var handleClick = function handleClick(method) {
    return function (ev) {
      if (ev) ev.stopPropagation();
      if (method) method();
    };
  };

  return React.createElement(StyledCookieFooter, {
    showButtonSeparator: showButtonSeparator,
    buttonAlignment: buttonAlignment,
    "data-test": "filtered-modal-footer-buttons"
  }, secondaryButtonProps && React.createElement(StyledCookieFooterSecondary, {
    buttonAlignment: buttonAlignment
  }, React.createElement(StyledCookieFooterButton, _extends({
    actionType: "secondary",
    "data-test": 'filtered-secondary-modal-footer-buttons',
    onClick: secondaryButtonProps.onClick ? handleClick(secondaryButtonProps.onClick) : undefined
  }, secondaryButtonProps), secondaryButtonProps.buttonLabel)), primaryButtonProps && React.createElement(StyledCookieFooterPrimary, {
    buttonAlignment: buttonAlignment,
    buttonWidth: buttonWidth
  }, React.createElement(StyledCookieFooterButton, _extends({
    actionType: "primary",
    fullWidth: !!buttonWidth,
    "data-test": "filtered-primary-modal-footer-buttons",
    onClick: primaryButtonProps.onClick ? handleClick(primaryButtonProps.onClick) : undefined
  }, primaryButtonProps), primaryButtonProps.buttonLabel)));
};
export var CookieLayer = function CookieLayer(_ref14) {
  var _ref14$position = _ref14.position,
      position = _ref14$position === void 0 ? 'fixed' : _ref14$position,
      mainContent = _ref14.mainContent,
      _ref14$buttonAlignmen = _ref14.buttonAlignment,
      buttonAlignment = _ref14$buttonAlignmen === void 0 ? 'space-between' : _ref14$buttonAlignmen,
      primaryButtonProps = _ref14.primaryButtonProps,
      secondaryButtonProps = _ref14.secondaryButtonProps,
      showButtonSeparator = _ref14.showButtonSeparator,
      otherProps = _objectWithoutProperties(_ref14, ["position", "mainContent", "buttonAlignment", "primaryButtonProps", "secondaryButtonProps", "showButtonSeparator"]);

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.sm;
  return React.createElement(StyledCookieWrapper, _extends({
    position: position
  }, otherProps), React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 12
  }, mainContent, React.createElement(CookieButtonGroup, {
    primaryButtonProps: primaryButtonProps,
    secondaryButtonProps: secondaryButtonProps,
    buttonAlignment: buttonAlignment,
    showButtonSeparator: showButtonSeparator
  })))));
};
//# sourceMappingURL=CookieLayer.js.map