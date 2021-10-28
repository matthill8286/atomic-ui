import React, { useEffect, useRef } from 'react';
import { useDropdownState } from "../../Helper/useDropdownState";
import { StyledContainer, StyledDropdown } from "../DropdownButton/DropdownButton";
import { NavigationButton } from "./NavigationButton";
import { NavigationMenuList } from "./NavigationMenuList";
import { CopyText } from "../../Atoms/Typography";
import { breakpoints, styled } from "../../../styles";
import { useWindowDimensions } from "../../Helper";
export var StyledCopy = styled(CopyText).withConfig({
  displayName: "NavigationMenu__StyledCopy",
  componentId: "sc-1lzowzu-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme;
  return "\n    display: flex;\n    width: 100%;\n\n    :hover {\n        cursor: pointer;\n    }\n  ";
});
export var NavigationMenu = function NavigationMenu(_ref2) {
  var className = _ref2.className,
      _ref2$navActionList = _ref2.navActionList,
      navActionList = _ref2$navActionList === void 0 ? [] : _ref2$navActionList,
      button = _ref2.button,
      testIdSuffix = _ref2.testIdSuffix,
      extendedNavigationHandler = _ref2.extendedNavigationHandler,
      _ref2$iconAsMainUi = _ref2.iconAsMainUi,
      iconAsMainUi = _ref2$iconAsMainUi === void 0 ? true : _ref2$iconAsMainUi,
      initialLink = _ref2.initialLink,
      copyColor = _ref2.copyColor,
      pictureSrc = _ref2.pictureSrc;

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

    if (extendedNavigationHandler) {
      extendedNavigationHandler(item);
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
  var myNavigationContent = React.createElement(NavigationMenuList, {
    navActionList: navActionList,
    actionButton: button,
    flexed: true,
    padding: "sm",
    onClick: handleMenuItemClick
  });
  return React.createElement(StyledContainer, {
    className: className,
    ref: element,
    "data-test": "navigation-dropdown-".concat(testIdSuffix)
  }, iconAsMainUi ? React.createElement(NavigationButton, {
    height: 40,
    width: 40,
    "data-test": "ewb-app-header-navigation-button",
    onClick: onToggleDropdown,
    isOpen: showDropdown,
    pictureSrc: pictureSrc
  }) : React.createElement(StyledCopy, {
    color: copyColor,
    fontSize: "sm",
    margin: "auto",
    "data-test": "ewb-header-navigation-link",
    onClick: onToggleDropdown
  }, initialLink), React.createElement(StyledDropdown, {
    isMobile: isMobile,
    surface: "white",
    showDropdown: showDropdown
  }, myNavigationContent));
};
//# sourceMappingURL=NavigationMenu.js.map