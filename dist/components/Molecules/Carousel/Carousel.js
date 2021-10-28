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

import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Badge } from "../../Atoms/Badge";
import { Icon } from "../../Atoms/Icon";
import { IconArrow } from "../../../svgs";
import { StyledCarousel, StyledCarouselHandler } from "./Carousel.styled";
export var Carousel = function Carousel(_ref) {
  var className = _ref.className,
      sliderSettings = _ref.sliderSettings,
      items = _ref.items,
      renderSlide = _ref.renderSlide,
      hasThumbnails = _ref.hasThumbnails,
      badges = _ref.badges,
      whiteDots = _ref.whiteDots,
      boxShadow = _ref.boxShadow,
      hasOverflow = _ref.hasOverflow,
      hasPadding = _ref.hasPadding,
      fullHeight = _ref.fullHeight;
  var firstClientX;
  var clientX;
  var carouselDom;
  var slider1;
  var slider2;

  var _useState = useState(slider1),
      _useState2 = _slicedToArray(_useState, 2),
      nav1 = _useState2[0],
      setCountNav1 = _useState2[1];

  var _useState3 = useState(slider2),
      _useState4 = _slicedToArray(_useState3, 2),
      nav2 = _useState4[0],
      setCountNav2 = _useState4[1];

  var touchStart = function touchStart(e) {
    firstClientX = e.touches[0].clientX;
  };

  var preventTouch = function preventTouch(e) {
    var minValue = 5;
    clientX = e.touches[0].clientX - firstClientX;

    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }

    return true;
  };

  useEffect(function () {
    if (carouselDom) {
      carouselDom.addEventListener('touchstart', touchStart);
      carouselDom.addEventListener('touchmove', preventTouch, {
        passive: false
      });
    }

    if (hasThumbnails) {
      setCountNav1(slider1);
      setCountNav2(slider2);
    }
  }, []);

  var renderArrows = function renderArrows(rotation) {
    if (hasThumbnails) {
      return React.createElement(Icon, {
        rotate: rotation,
        color: 'black',
        width: 24,
        height: 24
      }, React.createElement(IconArrow, null));
    } else {
      return React.createElement(Icon, {
        rotate: rotation,
        color: 'white',
        width: 24,
        height: 24
      }, React.createElement(IconArrow, null));
    }
  };

  var customPaging = function customPaging() {
    return React.createElement("div", null);
  };

  var sliderConfig = function sliderConfig() {
    var hasThumbnails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return hasThumbnails ? _objectSpread({
      asNavFor: nav2,
      ref: function ref(slider) {
        return slider1 = slider;
      },
      slidesToShow: 1,
      arrows: false,
      swipeToSlide: true,
      focusOnSelect: true
    }, sliderSettings) : _objectSpread({
      nextArrow: renderArrows(90),
      prevArrow: renderArrows(270),
      customPaging: customPaging
    }, sliderSettings);
  };

  var sliderThumbnailImageConfig = _objectSpread({
    ref: function ref(slider) {
      return slider2 = slider;
    },
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: nav1,
    dots: true,
    className: 'mms-th-slider'
  }, sliderConfig(false));

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      dragging = _useState6[0],
      setDragging = _useState6[1];

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
    className: className,
    whiteDots: whiteDots,
    ref: function ref(elem) {
      return carouselDom = elem;
    },
    hasThumbnails: hasThumbnails,
    items: items,
    sliderSettings: sliderSettings,
    renderSlide: renderSlide,
    boxShadow: boxShadow,
    hasOverflow: hasOverflow,
    hasPadding: hasPadding,
    fullHeight: fullHeight
  }, badges && badges.length > 0 && React.createElement(Badge, {
    badges: badges
  }), React.createElement(Slider, _extends({}, sliderConfig(hasThumbnails), {
    beforeChange: beforeChange,
    afterChange: afterChange
  }), items.map(function (entry, index) {
    return React.createElement(StyledCarouselHandler, {
      onClickCapture: handleOnItemClick,
      key: index
    }, renderSlide(entry, index, false));
  })), hasThumbnails && React.createElement(Slider, _extends({}, sliderThumbnailImageConfig, {
    beforeChange: beforeChange,
    afterChange: afterChange
  }), items && items.map(function (entry, index) {
    return renderSlide && React.createElement(StyledCarouselHandler, {
      onClickCapture: handleOnItemClick,
      key: index
    }, renderSlide(entry, index, true));
  })));
};
Carousel.displayName = 'Carousel';
//# sourceMappingURL=Carousel.js.map