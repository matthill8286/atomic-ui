function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useRef, useState } from 'react';
import { Icon, SkeletonBlockItem } from "../../..";
import { ContentWrapper, FadeOutOverlay, FlexItem, LabelWrapper, Wrapper } from "./ShowMore.styled";
import { StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
export var ShowMore = function ShowMore(_ref) {
  var lineHeight = _ref.lineHeight,
      numOfLines = _ref.numOfLines,
      children = _ref.children,
      _ref$labelAlignment = _ref.labelAlignment,
      labelAlignment = _ref$labelAlignment === void 0 ? 'flex-start' : _ref$labelAlignment,
      _ref$labelNoLineHeigh = _ref.labelNoLineHeight,
      labelNoLineHeight = _ref$labelNoLineHeigh === void 0 ? false : _ref$labelNoLineHeigh,
      showMoreText = _ref.showMoreText,
      showLessText = _ref.showLessText,
      _ref$noShowLess = _ref.noShowLess,
      noShowLess = _ref$noShowLess === void 0 ? false : _ref$noShowLess,
      fadeOutHeight = _ref.fadeOutHeight,
      fadeOutBackgroundColor = _ref.fadeOutBackgroundColor,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 16 : _ref$fontSize,
      fontColor = _ref.fontColor,
      fontWeight = _ref.fontWeight,
      padding = _ref.padding,
      loading = _ref.loading;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isCollapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLargerContent = _useState4[0],
      setLargerContent = _useState4[1];

  var content = useRef(null);
  var displayLabel = isCollapsed || !noShowLess;

  var toggleCollapse = function toggleCollapse() {
    return setCollapsed(!isCollapsed);
  };

  var visibleHeight = numOfLines * lineHeight;
  useEffect(function () {
    var _content$current;

    if (visibleHeight < Number((_content$current = content.current) === null || _content$current === void 0 ? void 0 : _content$current.scrollHeight)) {
      setLargerContent(true);
    }
  }, [visibleHeight]);

  if (loading) {
    return React.createElement(SkeletonBlockItem, {
      width: "80%",
      height: "auto"
    });
  }

  return React.createElement(React.Fragment, null, React.createElement(Wrapper, {
    visibleHeight: visibleHeight,
    isCollapsed: isCollapsed
  }, React.createElement(ContentWrapper, {
    ref: content
  }, children), isLargerContent && isCollapsed && React.createElement(FadeOutOverlay, {
    fadeOutHeight: Math.min(fadeOutHeight || 0, visibleHeight),
    fadeOutBackgroundColor: fadeOutBackgroundColor
  })), isLargerContent && displayLabel && React.createElement(LabelWrapper, {
    labelAlignment: labelAlignment,
    fontSize: fontSize,
    fontColor: fontColor,
    fontWeight: fontWeight,
    onClick: toggleCollapse,
    padding: padding,
    lineHeight: labelNoLineHeight ? 0 : lineHeight
  }, React.createElement(FlexItem, null, isCollapsed ? showMoreText : showLessText, React.createElement(Icon, {
    rotate: isCollapsed ? 90 : -90,
    height: fontSize,
    width: fontSize,
    alignSelf: "center"
  }, React.createElement(StyleguideArrow, null)))));
};
//# sourceMappingURL=ShowMore.js.map