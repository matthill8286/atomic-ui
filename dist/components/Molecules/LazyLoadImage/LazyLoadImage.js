function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import 'intersection-observer';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { NativeLazyLoadOptions, Picture } from "../../Atoms/Picture";
import { StyledLazyImageWrapper } from "./LazyLoadImage.styled";
import { useNativeLazyLoading } from "./useNativeLazyLoading";
export var LazyLoadImage = function LazyLoadImage(_ref) {
  var _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,
      _ref$lazyLoad = _ref.lazyLoad,
      lazyLoad = _ref$lazyLoad === void 0 ? true : _ref$lazyLoad,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? '0px' : _ref$rootMargin,
      _ref$withLQIP = _ref.withLQIP,
      withLQIP = _ref$withLQIP === void 0 ? false : _ref$withLQIP,
      _ref$withNativeLoadin = _ref.withNativeLoading,
      withNativeLoading = _ref$withNativeLoadin === void 0 ? false : _ref$withNativeLoadin,
      props = _objectWithoutProperties(_ref, ["threshold", "lazyLoad", "rootMargin", "withLQIP", "withNativeLoading"]);

  var src = props.src,
      lowResSrc = props.lowResSrc,
      srcSm = props.srcSm,
      lowResSrcSm = props.lowResSrcSm,
      srcMd = props.srcMd,
      lowResSrcMd = props.lowResSrcMd,
      srcLg = props.srcLg,
      lowResSrcLg = props.lowResSrcLg,
      width = props.width,
      height = props.height,
      children = props.children;

  if (!lazyLoad) {
    return React.createElement(Picture, props, children);
  }

  var supportsLazyLoading = withNativeLoading && useNativeLazyLoading();

  var _useInView = useInView({
    threshold: threshold,
    triggerOnce: true,
    rootMargin: rootMargin
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  return React.createElement(StyledLazyImageWrapper, {
    ref: !supportsLazyLoading ? ref : undefined,
    width: width,
    height: height
  }, !withLQIP && (inView || supportsLazyLoading) ? React.createElement(Picture, _extends({}, props, {
    src: src,
    srcSm: srcSm,
    srcMd: srcMd,
    srcLg: srcLg,
    loading: supportsLazyLoading ? NativeLazyLoadOptions.Lazy : NativeLazyLoadOptions.Eager
  }), children) : null, withLQIP && React.createElement(Picture, _extends({}, props, {
    src: inView ? src : lowResSrc,
    srcSm: inView ? srcSm : lowResSrcSm,
    srcMd: inView ? srcMd : lowResSrcMd,
    srcLg: inView ? srcLg : lowResSrcLg
  }), children));
};
//# sourceMappingURL=LazyLoadImage.js.map