function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useRef, useState } from 'react';
import { useDropdownState } from "../../Helper/useDropdownState";
import { StyledContainer, StyledDropdown } from "../DropdownButton/DropdownButton";
import { LanguageButton } from "./LanguageButton";
import { LanguageMenuList } from "./LanguageMenuList";
import { StyleguideGlobeThin } from "../../../svgs";
export var LanguageMenu = function LanguageMenu(_ref) {
  var className = _ref.className,
      _ref$languages = _ref.languages,
      languages = _ref$languages === void 0 ? [] : _ref$languages,
      testIdSuffix = _ref.testIdSuffix,
      extendedLanguageHandler = _ref.extendedLanguageHandler,
      _ref$setupCurrentInde = _ref.setupCurrentIndex,
      setupCurrentIndex = _ref$setupCurrentInde === void 0 ? -1 : _ref$setupCurrentInde,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === void 0 ? false : _ref$isMobile;

  var _useDropdownState = useDropdownState(),
      element = _useDropdownState.element,
      toggleDropdown = _useDropdownState.toggleDropdown,
      showDropdown = _useDropdownState.showDropdown;

  var _useState = useState(setupCurrentIndex),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var ref = useRef(null);

  var onToggleDropdown = function onToggleDropdown() {
    toggleDropdown();
  };

  var handleLanguageClick = function handleLanguageClick(index, item) {
    if (showDropdown) {
      toggleDropdown();
    }

    setCurrentIndex(index);

    if (extendedLanguageHandler) {
      extendedLanguageHandler(item);
    }
  };

  var handleClickOutside = function handleClickOutside(event) {
    var _ref$current;

    if (!((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.target)) && showDropdown) {
      toggleDropdown();
    }
  };

  useEffect(function () {
    document.addEventListener('click', handleClickOutside);
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  var myLanguageContent = React.createElement(LanguageMenuList, {
    languages: languages,
    onClick: handleLanguageClick,
    currentIndex: currentIndex
  });
  return React.createElement(StyledContainer, {
    className: className,
    ref: element,
    "data-test": "language-dropdown-".concat(testIdSuffix)
  }, React.createElement(LanguageButton, {
    "data-test": "ewb-app-header-language-button",
    onClick: onToggleDropdown,
    isOpen: showDropdown,
    primaryIcon: React.createElement(StyleguideGlobeThin, null)
  }), React.createElement(StyledDropdown, {
    isMobile: isMobile,
    showDropdown: showDropdown
  }, myLanguageContent));
};
//# sourceMappingURL=LanguageMenu.js.map