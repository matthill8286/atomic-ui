function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { StyledInputRange, StyledInputRangeBubble, StyledInputRangeBubbleContainer, StyledInputRangeBubblePosition, StyledInputRangeBubbleTypo, StyledInputRangeContainer, StyledInputRangeMarkLine, StyledInputRangeMarks, StyledInputRangeMarkTypo, StyledInputRangeThumb } from "./InputRange.styled";
export var InputRange = function InputRange(props) {
  var _props$name = props.name,
      name = _props$name === void 0 ? 'input-range' : _props$name,
      _props$step = props.step,
      step = _props$step === void 0 ? '0.1' : _props$step,
      _props$markAmount = props.markAmount,
      markAmount = _props$markAmount === void 0 ? 0 : _props$markAmount,
      _props$min = props.min,
      min = _props$min === void 0 ? '0' : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? '1' : _props$max,
      _props$value = props.value,
      value = _props$value === void 0 ? '1' : _props$value,
      _props$allowMoreThanM = props.allowMoreThanMax,
      allowMoreThanMax = _props$allowMoreThanM === void 0 ? false : _props$allowMoreThanM,
      _props$withBubble = props.withBubble,
      withBubble = _props$withBubble === void 0 ? true : _props$withBubble,
      _props$showMarks = props.showMarks,
      showMarks = _props$showMarks === void 0 ? false : _props$showMarks,
      onChange = props.onChange;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSliding = _useState2[0],
      setIsSliding = _useState2[1];

  var percentage = (+value - +min) * 100 / (+max - +min);

  var onChangeHandler = function onChangeHandler(ev) {
    if (onChange) {
      onChange(ev);
    }
  };

  var calcIntervalLabel = function calcIntervalLabel(interval) {
    return Math.round(interval * ((+max - +min) / markAmount) + +min);
  };

  return React.createElement(StyledInputRangeContainer, null, withBubble && React.createElement(StyledInputRangeBubbleContainer, null, React.createElement(StyledInputRangeBubblePosition, {
    style: {
      left: "".concat(percentage, "%")
    }
  }, React.createElement(StyledInputRangeBubble, {
    isSliding: isSliding
  }, React.createElement(StyledInputRangeBubbleTypo, {
    color: "primary",
    fontFamily: "default",
    limitLines: 1,
    tag: "span",
    weight: "regular"
  }, Math.round(parseFloat(value) * 10))))), React.createElement(StyledInputRangeThumb, {
    style: {
      left: "".concat(percentage, "%")
    }
  }), React.createElement(StyledInputRange, {
    type: "range",
    name: name,
    list: name,
    step: step,
    min: min,
    max: max,
    value: value,
    onMouseDown: function onMouseDown() {
      return setIsSliding(true);
    },
    onTouchStart: function onTouchStart() {
      return setIsSliding(true);
    },
    onMouseUp: function onMouseUp() {
      return setIsSliding(false);
    },
    onTouchEnd: function onTouchEnd() {
      return setIsSliding(false);
    },
    onChange: onChangeHandler
  }), showMarks && markAmount > 0 && React.createElement(StyledInputRangeMarks, null, Array.from({
    length: markAmount + 1
  }, function (_, interval) {
    return React.createElement(StyledInputRangeMarkLine, {
      key: interval,
      index: interval,
      markAmount: markAmount,
      left: (calcIntervalLabel(interval) - +min) * 100 / (+max - +min)
    }, React.createElement(StyledInputRangeMarkTypo, {
      weight: "semibold",
      fontSize: "lg",
      limitLines: 1
    }, calcIntervalLabel(interval), " ", allowMoreThanMax && interval === markAmount && '+'));
  })));
};
//# sourceMappingURL=InputRange.js.map