function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
export var useElementPosition = function useElementPosition(_ref) {
  var ref = _ref.ref,
      _ref$attachTo = _ref.attachTo,
      attachTo = _ref$attachTo === void 0 ? 'bottom-center' : _ref$attachTo,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 250 : _ref$delay;

  var _useState = useState({
    top: 0,
    left: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  useEffect(function () {
    var handleResize = function handleResize() {
      if (ref !== null && ref !== void 0 && ref.current) {
        var _document, _document2;

        var _ref$current$getBound = ref.current.getBoundingClientRect(),
            top = _ref$current$getBound.top,
            left = _ref$current$getBound.left,
            right = _ref$current$getBound.right;

        var verticalRefAdaption = attachTo !== null && attachTo !== void 0 && attachTo.includes('center') ? 0.5 * (right - left) : 0;
        var horizontalRefAdaption = attachTo !== null && attachTo !== void 0 && attachTo.includes('bottom') ? ref.current.offsetHeight : 0;
        var offsetLeft = (typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && window.pageXOffset || ((_document = document) === null || _document === void 0 ? void 0 : _document.documentElement.scrollLeft) || 0;
        var offsetTop = (typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && window.pageYOffset || ((_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.documentElement.scrollTop) || 0;
        var positionTop = "".concat(Math.round(top + horizontalRefAdaption + offsetTop), "px");
        var positionLeft = "".concat(Math.max(0, Math.round(left + verticalRefAdaption + offsetLeft)), "px");
        setPosition({
          top: positionTop,
          right: 'auto',
          bottom: 'auto',
          left: positionLeft
        });
      }
    };

    handleResize();
    var throttledHandle = throttle(handleResize, delay);
    window.addEventListener('resize', throttledHandle);
    return function () {
      return window.removeEventListener('resize', throttledHandle);
    };
  }, [ref, attachTo, delay, isVisible]);
  return {
    position: position,
    isVisible: isVisible,
    setIsVisible: setIsVisible
  };
};
//# sourceMappingURL=useElementPosition.js.map