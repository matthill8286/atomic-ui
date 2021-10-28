function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { CopyText } from "../../Atoms/Typography";
import { StyledInputSearch, StyledInputSearchWrapper } from "./SearchButton.styled";
import { SearchButtonIcon } from "./SearchButtonIcon";
var mapStateToIconState = {
  valid: 'valid',
  error: 'error'
};
export var SearchButton = function SearchButton(props) {
  var _props$autofocus = props.autofocus,
      autofocus = _props$autofocus === void 0 ? false : _props$autofocus,
      className = props.className,
      errorMessage = props.errorMessage,
      iconLabel = props.iconLabel,
      searchIcon = props.searchIcon,
      inputIconSize = props.inputIconSize,
      searchProps = props.searchProps,
      inputRef = props.inputRef,
      _props$searchType = props.searchType,
      searchType = _props$searchType === void 0 ? 'text' : _props$searchType,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? '' : _props$margin,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onClickIcon = props.onClickIcon,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? '' : _props$padding,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Search' : _props$placeholder,
      _props$state = props.state,
      state = _props$state === void 0 ? 'idle' : _props$state,
      value = props.value;

  var onMouseEnterHandler = function onMouseEnterHandler(ev) {
    if (onMouseEnter) onMouseEnter(ev);
  };

  var onMouseLeaveHandler = function onMouseLeaveHandler(ev) {
    if (onMouseLeave) onMouseLeave(ev);
  };

  var onFocusHandler = function onFocusHandler(ev) {
    if (onFocus) onFocus(ev);
  };

  var onBlurHandler = function onBlurHandler(ev) {
    if (onBlur) onBlur(ev);
  };

  var onChangeHandler = function onChangeHandler(ev) {
    if (onChange) onChange(ev);
  };

  var onClickHandler = function onClickHandler(ev) {
    ev.stopPropagation();
    if (onClick) onClick(ev);
  };

  var onClickIconHandler = function onClickIconHandler(ev) {
    ev.stopPropagation();

    if (onClickIcon) {
      onClickIcon(ev);
    }
  };

  var showError = state === 'error' && errorMessage;
  var showIcon = state === 'valid' || state === 'error' || searchIcon;
  var iconState = mapStateToIconState[state] || 'default';

  var combinedSearchButtonProps = _objectSpread(_objectSpread({}, searchProps), {}, {
    placeholder: placeholder,
    autoFocus: autofocus,
    type: searchType,
    value: value,
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler,
    onClick: onClickHandler,
    onFocus: onFocusHandler,
    onChange: onChangeHandler,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onBlur: onBlurHandler
  });

  return React.createElement(StyledInputSearchWrapper, {
    className: className,
    margin: margin,
    padding: padding
  }, React.createElement(StyledInputSearch, _extends({}, combinedSearchButtonProps, {
    ref: inputRef
  })), showIcon && React.createElement(SearchButtonIcon, {
    icon: searchIcon,
    iconLabel: iconLabel,
    iconSize: inputIconSize,
    iconState: iconState,
    onClick: onClickIcon ? onClickIconHandler : undefined
  }), showError && React.createElement(CopyText, {
    tag: "span",
    color: "error",
    fontSize: "xxs"
  }, errorMessage));
};
SearchButton.displayName = 'SearchButton';
//# sourceMappingURL=SearchButton.js.map