function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleguideCheckmarkSquare } from '@excelwithbusiness/webmobile-svg-library';
import { Icon } from "../Icon";
import { CopyText } from "../Typography";
import { StyledButtonLabel, StyledButtonText, StyledCopyText, StyledFocusedIndicator, StyledIcon, StyledLabel, StyledNativeSelectable, StyledRadioMark, StyledSelectableButton, StyledSelectableButtonContentWrapper, StyledSelectableContent, StyledSelectableContentWrapper } from "./Selectable.styled";
export var Selectable = function Selectable(_ref) {
  var children = _ref.children,
      displayType = _ref.displayType,
      errorMessage = _ref.errorMessage,
      icon = _ref.icon,
      isChecked = _ref.isChecked,
      label = _ref.label,
      selectableId = _ref.selectableId,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'idle' : _ref$state,
      onChangeValue = _ref.onChangeValue,
      _ref$selectableSize = _ref.selectableSize,
      selectableSize = _ref$selectableSize === void 0 ? 'large' : _ref$selectableSize,
      type = _ref.type,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      name = _ref.name,
      otherProps = _objectWithoutProperties(_ref, ["children", "displayType", "errorMessage", "icon", "isChecked", "label", "selectableId", "state", "onChangeValue", "selectableSize", "type", "value", "name"]);

  var onInputChange = function onInputChange(event) {
    onChangeValue(event.target.checked, event.target.value);
  };

  var isCheckedValue = isChecked && {
    checked: isChecked
  };
  var showError = state === 'error' && errorMessage;
  var SelectableRadio = React.createElement(StyledLabel, _extends({
    key: selectableId + isChecked,
    selectableSize: selectableSize,
    state: state,
    type: type,
    htmlFor: selectableId
  }, otherProps), React.createElement(StyledNativeSelectable, _extends({
    id: selectableId
  }, isCheckedValue, {
    type: type,
    name: name,
    value: value,
    state: state,
    selectableSize: selectableSize,
    onChange: function onChange(e) {
      return onInputChange(e);
    }
  })), type === 'checkbox' && React.createElement(StyledIcon, {
    selectableSize: selectableSize,
    state: state
  }, React.createElement(StyleguideCheckmarkSquare, {
    fill: 'primary'
  })), type === 'radio' && React.createElement(StyledRadioMark, {
    selectableSize: selectableSize,
    state: state
  }), React.createElement(StyledSelectableContentWrapper, null, React.createElement(StyledCopyText, {
    padding: "0 0 0 xs",
    fontSize: selectableSize === 'large' ? 'sm' : 'xs',
    lineHeight: selectableSize === 'large' ? 'sm' : 'xs'
  }, children || label), showError && React.createElement(CopyText, {
    tag: "div",
    color: "error",
    fontSize: "xxs",
    margin: "xs 0 0 0",
    padding: "0 0 0 xs"
  }, errorMessage)), React.createElement(StyledFocusedIndicator, null));
  var SelectableButton = React.createElement(StyledButtonLabel, {
    key: selectableId + isChecked,
    htmlFor: selectableId
  }, React.createElement(StyledSelectableButton, _extends({
    id: selectableId
  }, isCheckedValue, {
    type: type,
    name: name,
    value: value,
    onChange: function onChange(e) {
      return onInputChange(e);
    }
  })), React.createElement(StyledSelectableButtonContentWrapper, {
    elevation: isChecked ? 1 : 0,
    shape: "rounded-small",
    surface: isChecked ? 'selected' : 'white',
    padding: {
      top: 'xs',
      right: 'sm',
      bottom: 'xs',
      left: 'sm'
    }
  }, React.createElement(StyledSelectableContent, null, React.createElement(Icon, {
    height: selectableSize === 'large' ? 14 : 12,
    width: selectableSize === 'large' ? 14 : 12
  }, icon), React.createElement(StyledButtonText, {
    bold: isChecked,
    color: isChecked ? 'black' : 'grey4',
    fontSize: selectableSize === 'large' ? 'sm' : 'xs',
    lineHeight: selectableSize === 'large' ? 'sm' : 'xs'
  }, children || label))), React.createElement(StyledFocusedIndicator, null));
  return displayType === 'button' ? SelectableButton : SelectableRadio;
};
//# sourceMappingURL=Selectable.js.map