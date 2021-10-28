function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { css, styled } from "../../../styles/styled";
var StyledCollapse = styled.div.withConfig({
  displayName: "Collapse__StyledCollapse",
  componentId: "sc-3d9emd-0"
})(["", " position:relative;cursor:pointer;& > *{cursor:pointer;}"], function (_ref) {
  var theme = _ref.theme,
      isOpen = _ref.isOpen,
      collapsedHeight = _ref.collapsedHeight;
  return isOpen ? css(["height:auto;overflow:initial;"]) : css(["height:", ";overflow:hidden;"], collapsedHeight ? "".concat(collapsedHeight, "px") : theme.spacing.base.sm);
});
export var Collapse = function Collapse(_ref2) {
  var children = _ref2.children,
      _ref2$isOpen = _ref2.isOpen,
      isOpen = _ref2$isOpen === void 0 ? true : _ref2$isOpen,
      _ref2$isControlled = _ref2.isControlled,
      isControlled = _ref2$isControlled === void 0 ? false : _ref2$isControlled,
      _ref2$collapsedHeight = _ref2.collapsedHeight,
      collapsedHeight = _ref2$collapsedHeight === void 0 ? 0 : _ref2$collapsedHeight,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick,
      _ref2$onChange = _ref2.onChange,
      onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange;

  var _React$useState = React.useState(isOpen),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var previousIsOpen = React.useRef(isOpen);
  React.useEffect(function () {
    if (isOpen !== previousIsOpen.current && isOpen !== open) {
      setOpen(isOpen);
    }

    previousIsOpen.current = isOpen;
  }, [isOpen, open]);

  var handleClick = function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();

    if (!isControlled) {
      setOpen(!open);
    }

    onClick();
    onChange(!open);
  };

  return React.createElement(StyledCollapse, {
    isOpen: open,
    collapsedHeight: collapsedHeight,
    onClick: handleClick
  }, children);
};
//# sourceMappingURL=Collapse.js.map