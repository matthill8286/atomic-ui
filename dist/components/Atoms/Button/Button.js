function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyledAnchorButton, StyledButton, StyledLoadingIndicator, StyledRouterButton } from "./Button.styled";
import { ButtonCheckmarkCircle } from "./ButtonCheckmarkCircle";
var buttonColours = {
  secondary: 'black',
  inverted: 'black',
  lightBorder: 'black',
  darkBorder: 'black',
  ghost: 'black',
  outlined: 'primary',
  primary: 'white',
  prominent: 'white'
};
export var Button = function Button(_ref) {
  var _ref$actionType = _ref.actionType,
      actionType = _ref$actionType === void 0 ? 'prominent' : _ref$actionType,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$round = _ref.round,
      round = _ref$round === void 0 ? false : _ref$round,
      _ref$squared = _ref.squared,
      squared = _ref$squared === void 0 ? false : _ref$squared,
      _ref$curved = _ref.curved,
      curved = _ref$curved === void 0 ? false : _ref$curved,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isFlat = _ref.isFlat,
      isFlat = _ref$isFlat === void 0 ? false : _ref$isFlat,
      _ref$elevated = _ref.elevated,
      elevated = _ref$elevated === void 0 ? false : _ref$elevated,
      _ref$showCheckmark = _ref.showCheckmark,
      showCheckmark = _ref$showCheckmark === void 0 ? false : _ref$showCheckmark,
      weight = _ref.weight,
      onClick = _ref.onClick,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      to = _ref.to,
      href = _ref.href,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      className = _ref.className,
      id = _ref.id,
      otherProps = _objectWithoutProperties(_ref, ["actionType", "children", "disabled", "round", "squared", "curved", "fullWidth", "isLoading", "isFlat", "elevated", "showCheckmark", "weight", "onClick", "size", "to", "href", "type", "className", "id"]);

  var handleOnClick = function handleOnClick(ev) {
    ev.stopPropagation();

    if (disabled || isLoading) {
      return;
    }

    if (onClick) {
      onClick(ev);
    }
  };

  var renderLoading = function renderLoading(actionType) {
    var color = buttonColours[actionType];
    return React.createElement(StyledLoadingIndicator, {
      isVisible: true,
      size: 20,
      color: color
    });
  };

  if (href) {
    return React.createElement(StyledAnchorButton, _extends({
      actionType: actionType,
      size: size,
      type: type,
      fullWidth: fullWidth,
      disabled: disabled,
      round: round,
      squared: squared,
      curved: curved,
      elevated: elevated,
      weight: weight,
      href: href,
      isLoading: isLoading,
      className: className,
      id: id
    }, otherProps), children, isLoading && !disabled && renderLoading(actionType));
  }

  if (to != null && to !== '') {
    return React.createElement(StyledRouterButton, _extends({
      actionType: actionType,
      size: size,
      type: type,
      fullWidth: fullWidth,
      disabled: disabled,
      round: round,
      squared: squared,
      curved: curved,
      elevated: elevated,
      weight: weight,
      isLoading: isLoading,
      to: to,
      className: className,
      id: id
    }, otherProps), children, isLoading && !disabled && renderLoading(actionType));
  }

  return React.createElement(StyledButton, _extends({
    actionType: actionType,
    size: size,
    type: type,
    isFlat: isFlat,
    fullWidth: fullWidth,
    disabled: disabled,
    round: round,
    squared: squared,
    curved: curved,
    elevated: elevated,
    weight: weight,
    isLoading: isLoading,
    onClick: handleOnClick,
    className: className,
    id: id
  }, otherProps), children, showCheckmark && React.createElement(ButtonCheckmarkCircle, null), isLoading && !disabled && renderLoading(actionType));
};
//# sourceMappingURL=Button.js.map