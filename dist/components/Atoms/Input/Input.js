function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { CopyText } from "../Typography";
import { StyledHelpWrapper, StyledInput, StyledInputMask, StyledInputWrapper } from "./Input.styled";
import { InputDivider } from "./InputDivider";
import { InputIcon } from "./InputIcon";
import { InputLabel } from "./InputLabel";
var mapStateToColor = {
  idle: 'grey3',
  valid: 'success',
  error: 'error',
  disabled: 'grey2'
};
var mapStateToIconState = {
  valid: 'valid',
  error: 'error'
};
export var Input = function Input(props) {
  var _props$autofocus = props.autofocus,
      autofocus = _props$autofocus === void 0 ? false : _props$autofocus,
      className = props.className,
      errorMessage = props.errorMessage,
      helper = props.helper,
      helpText = props.helpText,
      iconLabel = props.iconLabel,
      inputIcon = props.inputIcon,
      inputIconSize = props.inputIconSize,
      inputMaskProps = props.inputMaskProps,
      inputMaskRef = props.inputMaskRef,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      _props$inputStyle = props.inputStyle,
      inputStyle = _props$inputStyle === void 0 ? 'default' : _props$inputStyle,
      _props$inputType = props.inputType,
      inputType = _props$inputType === void 0 ? 'text' : _props$inputType,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
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
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$state = props.state,
      state = _props$state === void 0 ? 'idle' : _props$state,
      value = props.value;

  var _useState = useState(!!value),
      _useState2 = _slicedToArray(_useState, 2),
      shrink = _useState2[0],
      changeShrink = _useState2[1];

  var _useState3 = useState(autofocus),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocus = _useState4[0],
      changeFocus = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isHover = _useState6[0],
      changeHover = _useState6[1];

  React.useEffect(function () {
    changeShrink(isFocus || !!value);
  }, [value]);

  var onMouseEnterHandler = function onMouseEnterHandler(ev) {
    if (!['error', 'disabled'].includes(state)) {
      changeHover(true);
    }

    if (onMouseEnter) onMouseEnter(ev);
  };

  var onMouseLeaveHandler = function onMouseLeaveHandler(ev) {
    if (onMouseLeave) onMouseLeave(ev);
    changeHover(false);
  };

  var onFocusHandler = function onFocusHandler(ev) {
    if (onFocus) onFocus(ev);
    changeShrink(true);
    changeFocus(true);
  };

  var onBlurHandler = function onBlurHandler(ev) {
    if (onBlur) onBlur(ev);

    if (!value) {
      changeShrink(false);
    }

    changeFocus(false);
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
  var showIcon = state === 'valid' || state === 'error' || inputIcon;
  var color = isFocus || isHover ? 'grey5' : mapStateToColor[state];
  var iconState = mapStateToIconState[state] || 'default';
  var isRequired = !!(inputProps !== null && inputProps !== void 0 && inputProps.required);

  var combinedInputProps = _objectSpread(_objectSpread({}, inputProps), {}, {
    placeholder: placeholder,
    autoFocus: autofocus,
    type: inputType,
    value: value,
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler,
    onClick: onClickHandler,
    onFocus: onFocusHandler,
    onChange: onChangeHandler,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onBlur: onBlurHandler,
    disabled: state === 'disabled'
  });

  var isAriaInvalid = state === 'error' ? true : false;
  var ariaAttrs = {
    'aria-invalid': isAriaInvalid,
    'aria-required': isRequired,
    required: isRequired
  };
  return React.createElement(StyledInputWrapper, {
    className: className,
    margin: margin,
    padding: padding
  }, React.createElement(InputLabel, {
    color: color,
    htmlFor: inputProps === null || inputProps === void 0 ? void 0 : inputProps.id,
    inputStyle: inputStyle,
    label: label,
    shrink: shrink
  }, inputMaskProps ? React.createElement(StyledInputMask, _extends({}, inputMaskProps, combinedInputProps, ariaAttrs, {
    "data-test": inputMaskProps === null || inputMaskProps === void 0 ? void 0 : inputMaskProps.name,
    ref: inputMaskRef
  })) : React.createElement(StyledInput, _extends({}, combinedInputProps, ariaAttrs, {
    "data-test": inputProps === null || inputProps === void 0 ? void 0 : inputProps.name,
    ref: inputRef
  }))), showIcon && React.createElement(InputIcon, {
    icon: inputIcon,
    iconLabel: iconLabel,
    iconSize: inputIconSize,
    iconState: iconState,
    onClick: onClickIcon ? onClickIconHandler : undefined
  }), showError && React.createElement(InputDivider, {
    color: color
  }), showError && React.createElement(StyledHelpWrapper, {
    inputStyle: inputStyle
  }, React.createElement(CopyText, {
    tag: "span",
    color: "error",
    fontSize: "xxs"
  }, errorMessage)), helper && React.createElement(StyledHelpWrapper, {
    inputStyle: inputStyle
  }, helper), helpText && React.createElement(StyledHelpWrapper, {
    inputStyle: inputStyle
  }, React.createElement(CopyText, {
    tag: "span",
    fontSize: "xxs"
  }, helpText)));
};
Input.displayName = 'Input';
//# sourceMappingURL=Input.js.map