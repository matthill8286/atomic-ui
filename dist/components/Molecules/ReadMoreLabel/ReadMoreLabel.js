function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { styled } from "../../../styles/styled";
import { Collapse } from "../../Atoms/Collapse/Collapse";
import { CopyText } from "../../Atoms/Typography";
import { Label } from "../../Atoms/Label/Label";
var StyledActionText = styled(CopyText).withConfig({
  displayName: "ReadMoreLabel__StyledActionText",
  componentId: "sc-1u8b6ri-0"
})(["margin:0;text-decoration:underline;cursor:pointer;"]);
export var ReadMoreLabel = function ReadMoreLabel(_ref) {
  var children = _ref.children,
      htmlFor = _ref.htmlFor,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$collapsedHeight = _ref.collapsedHeight,
      collapsedHeight = _ref$collapsedHeight === void 0 ? 0 : _ref$collapsedHeight,
      showMoreLabel = _ref.showMoreLabel,
      showLessLabel = _ref.showLessLabel,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {
    return undefined;
  } : _ref$onClick,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {
    return undefined;
  } : _ref$onChange;

  var _React$useState = React.useState(!isOpen),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      collapsed = _React$useState2[0],
      setCollapsed = _React$useState2[1];

  var previousIsOpen = React.useRef(isOpen);
  React.useEffect(function () {
    if (isOpen !== previousIsOpen.current && isOpen !== collapsed) {
      setCollapsed(!isOpen);
    }

    previousIsOpen.current = isOpen;
  }, [isOpen, collapsed]);

  var toggleCollapsed = function toggleCollapsed(event) {
    event.preventDefault();
    event.stopPropagation();
    setCollapsed(!collapsed);
    onChange(!collapsed);
  };

  var handleClick = function handleClick() {
    onClick();
  };

  return React.createElement("div", null, React.createElement(Collapse, {
    isOpen: !collapsed,
    isControlled: true,
    collapsedHeight: collapsedHeight,
    onClick: handleClick
  }, React.createElement(Label, {
    htmlFor: htmlFor
  }, children)), React.createElement(StyledActionText, {
    onClick: toggleCollapsed
  }, collapsed ? showMoreLabel : showLessLabel));
};
//# sourceMappingURL=ReadMoreLabel.js.map