function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import isEmpty from 'lodash/isEmpty';
import React, { useCallback } from 'react';
import { Button } from "../../Atoms/Button";
import { Divider } from "../../Atoms/Divider";
import { Picture } from "../../Atoms/Picture";
import { GroupedActionLinks } from "../../Molecules/ActionLink";
import { LanguageMenu } from "../../Molecules/LanguageMenu";
import { NavigationMenu } from "../../Molecules/NavigationMenu";
import { StyledActionItems, StyledHeaderWrapper, StyledItemWrapper, StyledLogo, StyledSection } from "./AppHeader.styled";
import { useTheme } from "../../../utils/helper";
export var AppHeaderComponent = React.memo(function (_ref) {
  var headerContent = _ref.headerContent,
      languages = _ref.languages,
      button = _ref.button,
      onButtonClick = _ref.onButtonClick,
      renderSearchBar = _ref.renderSearchBar,
      onLanguageChoice = _ref.onLanguageChoice,
      logoUrl = _ref.logoUrl,
      setFilter = _ref.setFilter,
      clearFilter = _ref.clearFilter,
      onLogoClick = _ref.onLogoClick,
      langIndex = _ref.langIndex,
      filter = _ref.filter;
  var internalLogoClick = useCallback(function () {
    return onLogoClick === null || onLogoClick === void 0 ? void 0 : onLogoClick();
  }, []);
  var internalLanguageSelection = useCallback(function (id) {
    return onLanguageChoice === null || onLanguageChoice === void 0 ? void 0 : onLanguageChoice(id);
  }, []);

  var _useTheme = useTheme(),
      header = _useTheme.header;

  return React.createElement(StyledSection, {
    color: "white"
  }, React.createElement(Divider, {
    color: "primary",
    height: "xs"
  }), React.createElement(StyledHeaderWrapper, {
    padding: "".concat(header.padding)
  }, logoUrl && React.createElement(StyledLogo, null, React.createElement(Picture, {
    alt: "thumbnail",
    onClick: function onClick() {
      return internalLogoClick();
    },
    src: logoUrl,
    width: "107px",
    height: "64px"
  })), React.createElement(StyledActionItems, null, (headerContent === null || headerContent === void 0 ? void 0 : headerContent.links) && !isEmpty(headerContent === null || headerContent === void 0 ? void 0 : headerContent.links) && React.createElement(StyledItemWrapper, null, React.createElement(GroupedActionLinks, {
    color: "grey4",
    padding: "0 sm",
    fontSize: "sm",
    links: _toConsumableArray(headerContent.links)
  })), (headerContent === null || headerContent === void 0 ? void 0 : headerContent.filter) && !isEmpty(headerContent === null || headerContent === void 0 ? void 0 : headerContent.filter) && (headerContent === null || headerContent === void 0 ? void 0 : headerContent.filter.enabled) && React.createElement(StyledItemWrapper, null, filter), (headerContent === null || headerContent === void 0 ? void 0 : headerContent.searchEnabled) && React.createElement(StyledItemWrapper, null, renderSearchBar), headerContent.languageMenuEnabled && (headerContent === null || headerContent === void 0 ? void 0 : headerContent.menus) && !isEmpty(headerContent === null || headerContent === void 0 ? void 0 : headerContent.menus) && React.createElement(StyledItemWrapper, null, React.createElement(NavigationMenu, {
    button: button,
    navActionList: _toConsumableArray(headerContent === null || headerContent === void 0 ? void 0 : headerContent.menus[0].links)
  })), Array.isArray(languages) && languages.length && React.createElement(StyledItemWrapper, null, React.createElement(LanguageMenu, {
    extendedLanguageHandler: function extendedLanguageHandler(item) {
      return internalLanguageSelection(item === null || item === void 0 ? void 0 : item.id);
    },
    languages: languages,
    setupCurrentIndex: langIndex
  })), button && button.href && React.createElement(StyledItemWrapper, null, React.createElement(Button, {
    actionType: "ghost",
    color: "grey5",
    size: "sm",
    onClick: onButtonClick,
    href: button.href
  }, button.actionLabel)))));
});
//# sourceMappingURL=AppHeader.js.map