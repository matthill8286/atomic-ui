function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';
import { Icon } from "../../Atoms/Icon";
import { StyledCarousel, StyledCarouselHandler, StyledNavArrow } from "./SimpleCarousel.styled";
import { StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
export var SimpleCarousel = function SimpleCarousel(_ref) {
  var arrowsSurfaceColor = _ref.arrowsSurfaceColor,
      sliderSettings = _ref.sliderSettings,
      items = _ref.items,
      renderSlide = _ref.renderSlide,
      whiteDots = _ref.whiteDots,
      brightArrows = _ref.brightArrows,
      boxShadow = _ref.boxShadow,
      hasOverflow = _ref.hasOverflow,
      hasPadding = _ref.hasPadding,
      fixedWidth = _ref.fixedWidth,
      tileWidth = _ref.tileWidth,
      className = _ref.className,
      carouselRef = _ref.carouselRef;
  var firstClientX;
  var sliderRef = React.useRef(null);
  var minValue = 20;

  var rightDirection = function rightDirection(direction) {
    return direction < -Math.abs(minValue);
  };

  var leftDirection = function leftDirection(direction) {
    return direction > Math.abs(minValue);
  };

  var touchStart = function touchStart(e) {
    e.preventDefault();
    e.stopPropagation();
    firstClientX = e.touches[0].clientX;
  };

  var touchEnd = function touchEnd(e) {
    var clientX = Math.round(e.changedTouches[0].clientX - firstClientX);

    if (rightDirection(clientX)) {
      var _sliderRef$current;

      (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.slickNext();
    } else if (leftDirection(clientX)) {
      var _sliderRef$current2;

      (_sliderRef$current2 = sliderRef.current) === null || _sliderRef$current2 === void 0 ? void 0 : _sliderRef$current2.slickPrev();
    }
  };

  var renderArrows = function renderArrows(rotation) {
    return React.createElement(StyledNavArrow, null, React.createElement(Icon, {
      rotate: rotation,
      color: "white",
      padding: "sm"
    }, React.createElement(StyleguideArrow, {
      width: 30,
      height: 30
    })));
  };

  var customPaging = function customPaging() {
    return React.createElement("div", null);
  };

  var sliderConfig = function sliderConfig() {
    return _objectSpread(_objectSpread({
      focusOnSelect: false,
      nextArrow: renderArrows(0),
      prevArrow: renderArrows(180),
      customPaging: customPaging,
      responsive: [{
        breakpoint: 1007,
        settings: {
          swipe: false,
          swipeToSlide: false,
          draggable: false,
          touchMove: false
        }
      }, {
        breakpoint: 1008,
        settings: {
          swipeToSlide: true
        }
      }]
    }, sliderSettings), {}, {
      ref: function ref(e) {
        sliderRef.current = e;

        if (carouselRef) {
          carouselRef(e);
        }
      }
    });
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  var handleBeforeChange = useCallback(function () {
    setDragging(true);
  }, [setDragging]);
  var handleAfterChange = useCallback(function () {
    setDragging(false);
  }, [setDragging]);
  var handleOnItemClick = useCallback(function (e) {
    if (dragging) {
      e.stopPropagation();
    }
  }, [dragging]);

  var beforeChange = function beforeChange(currentSlide, nextSlide) {
    if (sliderSettings.beforeChange) sliderSettings.beforeChange(currentSlide, nextSlide);
    handleBeforeChange();
  };

  var afterChange = function afterChange(currentSlide) {
    if (sliderSettings.afterChange) sliderSettings.afterChange(currentSlide);
    handleAfterChange();
  };

  return React.createElement(StyledCarousel, {
    arrowsSurfaceColor: arrowsSurfaceColor,
    whiteDots: whiteDots,
    fixedWidth: fixedWidth,
    tileWidth: tileWidth,
    brightArrows: brightArrows,
    items: items,
    sliderSettings: sliderSettings,
    renderSlide: renderSlide,
    boxShadow: boxShadow,
    hasOverflow: hasOverflow,
    hasPadding: hasPadding,
    className: className,
    onTouchStart: touchStart,
    onTouchEnd: touchEnd
  }, React.createElement(Slider, _extends({}, sliderConfig(), {
    beforeChange: beforeChange,
    afterChange: afterChange
  }), items.map(function (entry, index) {
    return React.createElement(StyledCarouselHandler, {
      onClickCapture: handleOnItemClick,
      key: index,
      className: "ewb-slider--element"
    }, renderSlide(entry, index));
  })));
};
SimpleCarousel.displayName = 'SimpleCarousel';
//# sourceMappingURL=SimpleCarousel.js.map