function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useRef, useState } from 'react';
export var withDropdownState = function withDropdownState(WrappedComponent, _ref) {
  var _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? 'ComponentName' : _ref$displayName;

  var WrapperComponent = function WrapperComponent(props) {
    var wrapperRef = useRef(null);

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showDropdown = _useState2[0],
        setShowDropdown = _useState2[1];

    var toggleDropdown = function toggleDropdown() {
      setShowDropdown(!showDropdown);
    };

    var handleClickOutside = function handleClickOutside(event) {
      var _wrapperRef$current;

      if (!((_wrapperRef$current = wrapperRef.current) !== null && _wrapperRef$current !== void 0 && _wrapperRef$current.contains(event.target))) {
        setShowDropdown(false);
      }
    };

    useEffect(function () {
      document.addEventListener('click', handleClickOutside, true);
      return function () {
        document.removeEventListener('click', handleClickOutside, true);
      };
    });
    return React.createElement("div", {
      ref: wrapperRef
    }, React.createElement(WrappedComponent, _extends({
      showDropdown: showDropdown,
      toggleDropdown: toggleDropdown
    }, props)));
  };

  WrapperComponent.displayName = displayName;
  return WrapperComponent;
};
//# sourceMappingURL=withDropdownState.js.map