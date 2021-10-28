function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyledModalFooter, StyledModalFooterButton, StyledModalFooterPrimary, StyledModalFooterSecondary } from "./ModalButtonGroup.styled";
export var ModalButtonGroup = function ModalButtonGroup(_ref) {
  var _ref$buttonAlignment = _ref.buttonAlignment,
      buttonAlignment = _ref$buttonAlignment === void 0 ? 'space-between' : _ref$buttonAlignment,
      primaryButtonProps = _ref.primaryButtonProps,
      secondaryButtonProps = _ref.secondaryButtonProps,
      buttonWidth = _ref.buttonWidth,
      _ref$showButtonSepara = _ref.showButtonSeparator,
      showButtonSeparator = _ref$showButtonSepara === void 0 ? true : _ref$showButtonSepara;

  if (!primaryButtonProps && !secondaryButtonProps) {
    return React.createElement(React.Fragment, null);
  }

  var handleClick = function handleClick(method) {
    return function (ev) {
      if (ev) ev.stopPropagation();
      if (method) method();
    };
  };

  return React.createElement(StyledModalFooter, {
    showButtonSeparator: showButtonSeparator,
    buttonAlignment: buttonAlignment,
    "data-test": "filtered-modal-footer-buttons"
  }, secondaryButtonProps && React.createElement(StyledModalFooterSecondary, {
    buttonAlignment: buttonAlignment
  }, React.createElement(StyledModalFooterButton, _extends({
    actionType: "secondary",
    "data-test": 'filtered-secondary-modal-footer-buttons',
    onClick: secondaryButtonProps.onClick ? handleClick(secondaryButtonProps.onClick) : undefined
  }, secondaryButtonProps), secondaryButtonProps.buttonLabel)), primaryButtonProps && React.createElement(StyledModalFooterPrimary, {
    buttonAlignment: buttonAlignment,
    buttonWidth: buttonWidth
  }, React.createElement(StyledModalFooterButton, _extends({
    actionType: "primary",
    fullWidth: !!buttonWidth,
    "data-test": "filtered-primary-modal-footer-buttons",
    onClick: primaryButtonProps.onClick ? handleClick(primaryButtonProps.onClick) : undefined
  }, primaryButtonProps), primaryButtonProps.buttonLabel)));
};
ModalButtonGroup.displayName = 'ModalButtonGroup';
//# sourceMappingURL=ModalButtonGroup.js.map