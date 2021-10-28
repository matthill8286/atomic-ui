function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css, styled } from "../../../styles/styled";
var StyledBox = styled.div.withConfig({
  displayName: "FlexBox__StyledBox",
  componentId: "qbez1h-0"
})(["", " display:", ";flex-direction:", ";", ";", ";", ";", ";"], function (_ref) {
  var debug = _ref.debug;
  return debug && css(["border:1px solid green;padding:8px;"]);
}, function (_ref2) {
  var display = _ref2.display;
  return display;
}, function (_ref3) {
  var flexDirection = _ref3.flexDirection;
  return flexDirection;
}, function (_ref4) {
  var flexWrap = _ref4.flexWrap;
  return flexWrap && "flex-wrap: ".concat(flexWrap);
}, function (_ref5) {
  var justifyContent = _ref5.justifyContent;
  return justifyContent && "justify-content: ".concat(justifyContent);
}, function (_ref6) {
  var alignContent = _ref6.alignContent;
  return alignContent && "align-content: ".concat(alignContent);
}, function (_ref7) {
  var alignItems = _ref7.alignItems;
  return alignItems && "align-items: ".concat(alignItems);
});
export var FlexBox = function FlexBox(props) {
  var _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$display = props.display,
      display = _props$display === void 0 ? 'flex' : _props$display,
      _props$flexDirection = props.flexDirection,
      flexDirection = _props$flexDirection === void 0 ? 'row' : _props$flexDirection,
      flexWrap = props.flexWrap,
      justifyContent = props.justifyContent,
      alignContent = props.alignContent,
      alignItems = props.alignItems,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ["debug", "display", "flexDirection", "flexWrap", "justifyContent", "alignContent", "alignItems", "children"]);

  return React.createElement(StyledBox, _extends({
    debug: debug,
    display: display,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    justifyContent: justifyContent,
    alignContent: alignContent,
    alignItems: alignItems
  }, otherProps), children);
};
FlexBox.displayName = 'FlexBox';
var StyledFlexItem = styled.div.withConfig({
  displayName: "FlexBox__StyledFlexItem",
  componentId: "qbez1h-1"
})(["", " order:", ";flex:", ";align-self:", ";padding:", ";"], function (_ref8) {
  var debug = _ref8.debug;
  return debug && css(["border:1px solid blue;padding:8px;"]);
}, function (_ref9) {
  var order = _ref9.order;
  return order;
}, function (_ref10) {
  var flex = _ref10.flex;
  return flex;
}, function (_ref11) {
  var alignSelf = _ref11.alignSelf;
  return alignSelf;
}, function (_ref12) {
  var theme = _ref12.theme,
      padding = _ref12.padding;
  return padding ? "0 ".concat(theme.spacing.base.xs) : 0;
});
export var FlexItem = function FlexItem(props) {
  var children = props.children,
      debug = props.debug,
      _props$order = props.order,
      order = _props$order === void 0 ? 0 : _props$order,
      _props$flex = props.flex,
      flex = _props$flex === void 0 ? '0 1 auto' : _props$flex,
      _props$alignSelf = props.alignSelf,
      alignSelf = _props$alignSelf === void 0 ? 'auto' : _props$alignSelf,
      otherProps = _objectWithoutProperties(props, ["children", "debug", "order", "flex", "alignSelf"]);

  return React.createElement(StyledFlexItem, _extends({
    debug: debug,
    order: order,
    flex: flex,
    alignSelf: alignSelf
  }, otherProps), children);
};
FlexItem.displayName = 'FlexItem';
//# sourceMappingURL=FlexBox.js.map