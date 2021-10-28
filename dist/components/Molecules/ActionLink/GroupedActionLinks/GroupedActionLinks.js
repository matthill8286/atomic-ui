function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useRef } from 'react';
import { breakpoints, css, styled } from "../../../../styles";
import { useDropdownState, useWindowDimensions } from "../../../Helper";
import { StyledDropdown } from "../../DropdownButton";
import { ActionLink } from "../ActionLink";
import { getActionLinkType } from "../helper";
var StyledWrapper = styled.div.withConfig({
  displayName: "GroupedActionLinks__StyledWrapper",
  componentId: "h8zf61-0"
})(function (_ref) {
  var theme = _ref.theme,
      flexed = _ref.flexed;
  return css(["list-style:none;display:", ";margin-top:0;margin-right:", ";:hover{cursor:pointer;", ";}"], flexed ? "flex" : "inline-flex", !flexed ? theme.spacing.base.sm : 0, flexed && "background: ".concat(theme.color.grey2, ";"));
});
var StyleDropdownWrapper = styled.div.withConfig({
  displayName: "GroupedActionLinks__StyleDropdownWrapper",
  componentId: "h8zf61-1"
})(["display:flex;"]);
var StyledReference = styled.div.withConfig({
  displayName: "GroupedActionLinks__StyledReference",
  componentId: "h8zf61-2"
})(["position:relative;display:flex;flex-grow:1;> a{flex-grow:1;}"]);
export var GroupedActionLinks = function GroupedActionLinks(_ref2) {
  var links = _ref2.links,
      fontSize = _ref2.fontSize,
      color = _ref2.color,
      padding = _ref2.padding,
      _ref2$flexed = _ref2.flexed,
      flexed = _ref2$flexed === void 0 ? false : _ref2$flexed,
      testIdSuffix = _ref2.testIdSuffix,
      dropdownFlexed = _ref2.dropdownFlexed;

  var _useDropdownState = useDropdownState(),
      element = _useDropdownState.element,
      toggleDropdown = _useDropdownState.toggleDropdown,
      showDropdown = _useDropdownState.showDropdown;

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.md;
  var ref = useRef(null);

  var onToggleDropdown = function onToggleDropdown() {
    toggleDropdown();
  };

  var handleMenuItemClick = function handleMenuItemClick(item) {
    if (showDropdown) {
      toggleDropdown();
    }
  };

  var handleClickOutside = function handleClickOutside(event) {
    var _ref$current;

    if (!((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.target)) && showDropdown) {
      toggleDropdown();
    }
  };

  useEffect(function () {
    document.addEventListener('click', handleClickOutside);
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  var ActionMenuContent = function ActionMenuContent(_ref3) {
    var navActionList = _ref3.navActionList;
    return React.createElement(GroupedActionLinks, {
      flexed: dropdownFlexed,
      links: navActionList,
      fontSize: "sm",
      color: "grey5",
      key: "GroupedActionLinks",
      padding: padding
    });
  };

  return React.createElement(React.Fragment, null, links.map(function (quickAction, index) {
    var _quickAction$links, _quickAction$links2, _quickAction$links3;

    var linkProp = getActionLinkType(quickAction);
    return React.createElement(StyledWrapper, {
      key: "Link-".concat(index++, "|").concat(quickAction.id),
      padding: padding,
      flexed: flexed
    }, React.createElement(StyledReference, {
      ref: element,
      "data-test": "grouped-action-links-".concat(testIdSuffix)
    }, React.createElement(ActionLink, _extends({
      key: quickAction.id,
      inline: !flexed,
      color: color,
      fontSize: fontSize,
      branded: quickAction.branded,
      target: quickAction.target,
      onClick: quickAction !== null && quickAction !== void 0 && (_quickAction$links = quickAction.links) !== null && _quickAction$links !== void 0 && _quickAction$links.length ? onToggleDropdown : quickAction.onClick
    }, !(quickAction !== null && quickAction !== void 0 && (_quickAction$links2 = quickAction.links) !== null && _quickAction$links2 !== void 0 && _quickAction$links2.length) ? linkProp : {}), quickAction.actionLabel), (quickAction === null || quickAction === void 0 ? void 0 : (_quickAction$links3 = quickAction.links) === null || _quickAction$links3 === void 0 ? void 0 : _quickAction$links3.length) > 0 && React.createElement(StyleDropdownWrapper, {
      key: "InnerLink-".concat(index++, "|").concat(quickAction.id)
    }, React.createElement(StyledDropdown, {
      isMobile: isMobile,
      surface: "white",
      showDropdown: showDropdown
    }, React.createElement(ActionMenuContent, {
      navActionList: quickAction.links
    })))));
  }));
};
//# sourceMappingURL=GroupedActionLinks.js.map