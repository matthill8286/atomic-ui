import React from 'react';
import { Card } from "../../Atoms/Card";
import { Grid } from "../../Helper/Grid";
import { TabBar } from "../../Molecules/TabBar";
import { StyledCard } from "../../Atoms/Card/Card.styled";
import { styled, css } from "../../../styles/styled";
import { smoothScrollWithSelector } from "../../../utils";
var StyledGrid = styled(Grid).withConfig({
  displayName: "SiteMenu__StyledGrid",
  componentId: "sc-19s72rv-0"
})(["display:flex;>:first-child{flex-grow:1;overflow:hidden;}"]);
var StyledSiteMenuCard = styled(Card).withConfig({
  displayName: "SiteMenu__StyledSiteMenuCard",
  componentId: "sc-19s72rv-1"
})(["position:sticky;top:0;z-index:2;", "{", "}"], StyledCard, function (_ref) {
  var enableSemanticTheme = _ref.enableSemanticTheme,
      theme = _ref.theme,
      surfaceColor = _ref.surfaceColor;
  return enableSemanticTheme && css(["background-color:", ";color:", ";"], theme.color[surfaceColor], theme.color.textColor);
});
export var SiteMenu = React.memo(function (_ref2) {
  var isFixed = _ref2.isFixed,
      menuItems = _ref2.menuItems,
      activeItemId = _ref2.activeItemId,
      _ref2$scrollOffset = _ref2.scrollOffset,
      scrollOffset = _ref2$scrollOffset === void 0 ? 0 : _ref2$scrollOffset,
      onTracking = _ref2.onTracking,
      onChange = _ref2.onChange,
      changeDelay = _ref2.changeDelay,
      _ref2$enableSemanticT = _ref2.enableSemanticTheme,
      enableSemanticTheme = _ref2$enableSemanticT === void 0 ? false : _ref2$enableSemanticT,
      children = _ref2.children,
      _ref2$surfaceColor = _ref2.surfaceColor,
      surfaceColor = _ref2$surfaceColor === void 0 ? 'surfaceColor' : _ref2$surfaceColor;

  if (!menuItems || !menuItems.length) {
    return null;
  }

  var tabs = menuItems.map(function (item) {
    return {
      label: item.title,
      id: "tab-".concat(item.itemId),
      data: {
        anchor: item.itemId
      }
    };
  });

  var handleChange = function handleChange(id, data) {
    smoothScrollWithSelector("#".concat(data === null || data === void 0 ? void 0 : data.anchor), scrollOffset);
    var item = menuItems.find(function (i) {
      return i.itemId === data.anchor;
    });

    if (onTracking) {
      onTracking((item === null || item === void 0 ? void 0 : item.title) || '');
    }

    if (onChange) {
      onChange((item === null || item === void 0 ? void 0 : item.itemId) || '', (item === null || item === void 0 ? void 0 : item.title) || '');
    }
  };

  return menuItems && menuItems.length > 0 ? React.createElement(StyledSiteMenuCard, {
    elevation: 2,
    shape: "sharp",
    enableSemanticTheme: enableSemanticTheme,
    surfaceColor: surfaceColor
  }, React.createElement(StyledGrid, null, React.createElement(TabBar, {
    isFixed: isFixed,
    tabs: tabs,
    tabGroupName: "",
    noBorder: true,
    elevation: 0,
    onChange: handleChange,
    selected: activeItemId ? "tab-".concat(activeItemId) : undefined,
    changeDelay: changeDelay,
    enableSemanticTheme: enableSemanticTheme,
    surfaceColor: surfaceColor
  }), children)) : null;
});
//# sourceMappingURL=SiteMenu.js.map