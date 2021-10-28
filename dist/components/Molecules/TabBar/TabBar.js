function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useRef, useState } from 'react';
import { Icon } from "../../Atoms/Icon";
import { useWindowDimensions } from "../../Helper/useWindowDimensions";
import { StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
import { StyledArrowButton, StyledTabBar, StyledTabsContainer, StyledTabBarCard } from "./TabBar.styled";
import { TabItem } from "./TabItem";
export var TabBar = function TabBar(props) {
  var onChange = props.onChange,
      selected = props.selected,
      tabs = props.tabs,
      tabGroupName = props.tabGroupName,
      _props$enableSemantic = props.enableSemanticTheme,
      enableSemanticTheme = _props$enableSemantic === void 0 ? false : _props$enableSemantic,
      _props$surfaceColor = props.surfaceColor,
      surfaceColor = _props$surfaceColor === void 0 ? 'surfaceColor' : _props$surfaceColor,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 0 : _props$elevation,
      _props$noBorder = props.noBorder,
      noBorder = _props$noBorder === void 0 ? false : _props$noBorder,
      _props$isFixed = props.isFixed,
      isFixed = _props$isFixed === void 0 ? false : _props$isFixed,
      _props$changeDelay = props.changeDelay,
      changeDelay = _props$changeDelay === void 0 ? 1000 : _props$changeDelay,
      flexDirection = props.flexDirection,
      otherProps = _objectWithoutProperties(props, ["onChange", "selected", "tabs", "tabGroupName", "enableSemanticTheme", "surfaceColor", "elevation", "noBorder", "isFixed", "changeDelay", "flexDirection"]);

  var _useState = useState(selected || null),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasOverflow = _useState4[0],
      setHasOverflow = _useState4[1];

  var ref = useRef(null);

  var _useWindowDimensions = useWindowDimensions(),
      width = _useWindowDimensions.width;

  var handleTabClick = function handleTabClick(id, data) {
    setTab(id);

    if (onChange) {
      onChange(id, data);
    }
  };

  useEffect(function () {
    var handler = setTimeout(function () {
      if (tab !== selected && selected) {
        setTab(selected);
      }
    }, changeDelay);
    return function () {
      clearTimeout(handler);
    };
  }, [selected, changeDelay]);
  useEffect(function () {
    if (ref.current) {
      var _ref$current = ref.current,
          offsetWidth = _ref$current.offsetWidth,
          scrollWidth = _ref$current.scrollWidth;
      var hasWidthOverflow = offsetWidth < scrollWidth;

      if (hasOverflow !== hasWidthOverflow) {
        setHasOverflow(hasWidthOverflow);
      }
    }
  }, [tabs, width]);

  var handlePrevClick = function handlePrevClick() {
    if (ref.current) {
      ref.current.scrollBy({
        behavior: 'smooth',
        left: -200
      });
    }
  };

  var handleNextClick = function handleNextClick() {
    if (ref.current) {
      ref.current.scrollBy({
        behavior: 'smooth',
        left: 200
      });
    }
  };

  return React.createElement(StyledTabBar, {
    isFixed: isFixed
  }, React.createElement(StyledTabBarCard, _extends({
    elevation: elevation,
    shape: "rounded-small",
    noBorder: noBorder ? ['top', 'right', 'bottom', 'left'] : [],
    display: "flex",
    surfaceColor: surfaceColor,
    enableSemanticTheme: enableSemanticTheme
  }, otherProps), hasOverflow && React.createElement(StyledArrowButton, {
    actionType: "ghost",
    onClick: handlePrevClick,
    surfaceColor: surfaceColor,
    enableSemanticTheme: enableSemanticTheme
  }, React.createElement(Icon, {
    height: 16,
    width: 16,
    rotate: 180
  }, React.createElement(StyleguideArrow, null))), React.createElement(StyledTabsContainer, {
    flexDirection: flexDirection,
    ref: ref
  }, tabs.map(function (_ref) {
    var id = _ref.id,
        label = _ref.label,
        data = _ref.data,
        _ref$isDisabled = _ref.isDisabled,
        isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled;
    return React.createElement(TabItem, {
      key: id,
      id: id,
      label: label,
      data: data,
      tabGroupName: tabGroupName,
      isSelected: tab === id,
      isDisabled: isDisabled,
      onClick: handleTabClick,
      enableSemanticTheme: enableSemanticTheme,
      surfaceColor: surfaceColor
    });
  })), hasOverflow && React.createElement(StyledArrowButton, {
    actionType: "ghost",
    onClick: handleNextClick,
    enableSemanticTheme: enableSemanticTheme,
    surfaceColor: surfaceColor
  }, React.createElement(Icon, {
    height: 16,
    width: 16
  }, React.createElement(StyleguideArrow, null)))));
};
TabBar.displayName = 'TabBar';
//# sourceMappingURL=TabBar.js.map