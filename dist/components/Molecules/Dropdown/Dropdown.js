function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { CopyText } from "../../Atoms/Typography";
import { withDropdownState } from "../../Helper/withDropdownState";
import { IconArrow, StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
import { StyledContainer, StyledDropdown, StyledDropdownSelect, StyledFieldWrapper, StyledIcon, StyledList, StyledTypo } from "./Dropdown.styled";
import { DropdownOption } from "./DropdownOption";

var DropdownWithoutState = function DropdownWithoutState(props) {
  var autoComplete = props.autoComplete,
      initialIndex = props.initialIndex,
      label = props.label,
      _props$listType = props.listType,
      listType = _props$listType === void 0 ? 'custom' : _props$listType,
      onChange = props.onChange,
      placeholder = props.placeholder,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      showDropdown = props.showDropdown,
      toggleDropdown = props.toggleDropdown,
      withBackground = props.withBackground,
      noBorder = props.noBorder;
  var setupCurrentIndex = -1;
  var lastIndexOfOptions = options.length - 1;

  if (initialIndex === 0 || !!initialIndex) {
    if (initialIndex >= 0 && initialIndex <= lastIndexOfOptions) {
      setupCurrentIndex = initialIndex;
    }
  }

  var _useState = useState(setupCurrentIndex),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var _useState3 = useState(function () {
    return currentIndex !== -1;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      isFilled = _useState4[0],
      setFill = _useState4[1];

  var handleItemClick = function handleItemClick(index) {
    return function () {
      setCurrentIndex(index);
      setFill(true);
      if (onChange) onChange(index);
    };
  };

  var handleSelectChange = function handleSelectChange(ev) {
    var index = options.findIndex(function (_ref) {
      var id = _ref.id;
      return id === ev.target.value;
    });

    if (index !== -1) {
      handleItemClick(index)();
    }
  };

  var selectedItem = options.find(function (o, i) {
    return i === currentIndex;
  });
  return React.createElement(StyledContainer, {
    onClick: toggleDropdown
  }, label && React.createElement(CopyText, {
    tag: "label",
    color: isFilled ? 'grey5' : 'grey4',
    "data-label-filled": isFilled
  }, label), listType === 'custom' ? React.createElement(StyledDropdown, {
    hasLabel: !!label,
    withBackground: withBackground
  }, React.createElement(StyledTypo, {
    fontSize: "sm",
    limitLines: 1,
    lineHeight: "sm",
    tag: "span"
  }, currentIndex !== -1 ? options[currentIndex].label : placeholder), React.createElement(StyledIcon, {
    rotate: showDropdown ? -90 : 90
  }, React.createElement(StyleguideArrow, {
    width: 'md',
    height: 'md'
  })), React.createElement(StyledList, {
    active: !!showDropdown,
    isSearchable: false
  }, options.map(function (item, index) {
    return React.createElement(DropdownOption, {
      key: index,
      active: index === currentIndex,
      label: item.label,
      onClick: handleItemClick(index)
    });
  }))) : React.createElement(StyledFieldWrapper, {
    noBorder: noBorder,
    hasLabel: !!label
  }, React.createElement(StyledDropdownSelect, _extends({
    listType: listType,
    onChange: handleSelectChange
  }, selectedItem !== null && selectedItem !== void 0 && selectedItem.id ? {
    value: selectedItem.id
  } : {}, autoComplete ? {
    autoComplete: autoComplete
  } : {}), options.map(function (item, i) {
    return React.createElement("option", {
      key: item.id || "dropdown-".concat(i),
      value: item.id
    }, item.label);
  })), React.createElement(StyledIcon, {
    width: 16,
    height: 16,
    rotate: 90
  }, React.createElement(IconArrow, null))));
};

export var Dropdown = withDropdownState(DropdownWithoutState, {
  displayName: 'Dropdown'
});
//# sourceMappingURL=Dropdown.js.map