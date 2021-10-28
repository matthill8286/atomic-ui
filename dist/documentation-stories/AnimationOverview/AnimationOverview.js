function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { Button } from "../../components/Atoms/Button";
import { fadeIn, fadeOut, fadeScaleKeyframe, newspaperKeyframe, shake, slideFromBottomKeyframe, slideFromRightKeyframe, superScaledKeyframe } from "../../styles";
import { AnimationBox, AnimationContainer } from "./AnimationOverview.styled";
var animations = [{
  keyframes: fadeIn,
  name: 'fadeIn'
}, {
  keyframes: fadeOut,
  name: 'fadeOut'
}, {
  keyframes: shake,
  name: 'shake'
}, {
  keyframes: fadeScaleKeyframe,
  name: 'fadeScale'
}, {
  keyframes: slideFromRightKeyframe,
  name: 'slideFromRight'
}, {
  keyframes: slideFromBottomKeyframe,
  name: 'slideFromBottom'
}, {
  keyframes: superScaledKeyframe,
  name: 'superScaled'
}, {
  keyframes: newspaperKeyframe,
  name: 'newspaper'
}];
export var AnimationOverview = function AnimationOverview(_ref) {
  var _ref$transition = _ref.transition,
      transition = _ref$transition === void 0 ? 'defaultEasing' : _ref$transition,
      _ref$infinite = _ref.infinite,
      infinite = _ref$infinite === void 0 ? false : _ref$infinite,
      _ref$fillMode = _ref.fillMode,
      fillMode = _ref$fillMode === void 0 ? 'none' : _ref$fillMode,
      _ref$easing = _ref.easing,
      easing = _ref$easing === void 0 ? 'ease-in' : _ref$easing;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var inc = React.useCallback(function () {
    return setCount(count + 1);
  }, [count, setCount]);
  return React.createElement(React.Fragment, null, !infinite && React.createElement(Button, {
    size: "sm",
    actionType: "outlined",
    onClick: inc
  }, "Replay Animation"), animations.map(function (_ref2) {
    var keyframes = _ref2.keyframes,
        name = _ref2.name;
    return React.createElement(AnimationContainer, {
      key: name
    }, name, React.createElement(AnimationBox, {
      key: transition + fillMode + easing + (infinite ? 'y' : 'n') + count,
      infinite: infinite,
      keyframes: keyframes,
      transition: transition,
      fillMode: fillMode,
      easing: easing
    }));
  }));
};
//# sourceMappingURL=AnimationOverview.js.map