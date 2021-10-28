import React from 'react';
import { ActionLink, GroupedActionLinks } from "../ActionLink";
import { styled } from "../../../styles";
export var StyledNavigationMenuOption = styled(GroupedActionLinks).withConfig({
  displayName: "NavigationMenuList__StyledNavigationMenuOption",
  componentId: "sc-1lqsar5-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme;
  return "\n    display: flex;\n    width: 100%;\n\n    :hover {\n      > a + span {\n        color: ".concat(theme.color.grey6, ";\n      }\n    }\n  ");
});
export var StyledActionLink = styled(ActionLink).withConfig({
  displayName: "NavigationMenuList__StyledActionLink",
  componentId: "sc-1lqsar5-1"
})(["", ""], function (_ref2) {
  var theme = _ref2.theme;
  return "\n    display: flex;\n    width: 100%;\n    color: ".concat(theme.color.grey6, ";\n    border-top: 1px solid ").concat(theme.color.grey2, ";\n\n    :hover {\n      cursor: pointer;\n      background: ").concat(theme.color.grey2, ";\n    }\n");
});
export var NavigationMenuList = function NavigationMenuList(props) {
  var navActionList = props.navActionList,
      onClick = props.onClick,
      actionButton = props.actionButton,
      flexed = props.flexed,
      padding = props.padding;
  if (!(navActionList !== null && navActionList !== void 0 && navActionList.length) && !actionButton) return null;
  return React.createElement("div", {
    onClick: onClick
  }, React.createElement(StyledNavigationMenuOption, {
    flexed: flexed,
    links: navActionList,
    fontSize: "sm",
    color: "grey5",
    padding: padding
  }), (actionButton === null || actionButton === void 0 ? void 0 : actionButton.actionLabel) && React.createElement(StyledActionLink, {
    color: "grey5",
    onClick: (actionButton === null || actionButton === void 0 ? void 0 : actionButton.onClick) || undefined,
    href: actionButton.href,
    target: "_self"
  }, actionButton === null || actionButton === void 0 ? void 0 : actionButton.actionLabel));
};
//# sourceMappingURL=NavigationMenuList.js.map