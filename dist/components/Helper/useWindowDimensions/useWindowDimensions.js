function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import debounce from 'lodash/debounce';
import * as React from 'react';
import { breakpoints } from "../../../styles";
var breakpointNamesMapping = {
  1472: 'xxl',
  1232: 'xl',
  1008: 'lg',
  752: 'md',
  512: 'sm',
  0: 'xs'
};
export var getWindowDimensions = function getWindowDimensions() {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
      breakpoint: 0,
      breakpointName: 'sm'
    };
  }

  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;
  var breakpoint = Object.values(breakpoints).sort(function (a, b) {
    return b - a;
  }).find(function (w) {
    return width >= w;
  }) || 0;
  return {
    width: width,
    height: height,
    breakpoint: breakpoint,
    breakpointName: breakpointNamesMapping[breakpoint]
  };
};

var frameThrottle = function frameThrottle(func) {
  var frame;

  var cancel = function cancel() {
    if (frame !== undefined) cancelAnimationFrame(frame);
  };

  var throttled = function throttled() {
    if (frame !== undefined) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(func);
  };

  return [throttled, cancel];
};

export var useWindowDimensions = function useWindowDimensions() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;

  var _React$useState = React.useState(getWindowDimensions()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      windowDimensions = _React$useState2[0],
      setWindowDimensions = _React$useState2[1];

  React.useEffect(function () {
    if (typeof window === 'undefined') return;

    var update = function update() {
      return setWindowDimensions(getWindowDimensions());
    };

    var _ref = delay === 'frame' ? frameThrottle(update) : [debounce(update, delay)],
        _ref2 = _slicedToArray(_ref, 2),
        limitedUpdate = _ref2[0],
        cancel = _ref2[1];

    update();
    window.addEventListener('resize', limitedUpdate);
    return function () {
      window.removeEventListener('resize', limitedUpdate);
      cancel === null || cancel === void 0 ? void 0 : cancel();
    };
  }, [delay]);
  return windowDimensions;
};
//# sourceMappingURL=useWindowDimensions.js.map