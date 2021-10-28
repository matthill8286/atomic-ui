export var getActionLinkType = function getActionLinkType(quickAction) {
  if (quickAction.href) {
    return {
      href: quickAction.href
    };
  } else if (quickAction.to) {
    return {
      to: quickAction.to
    };
  }
};
//# sourceMappingURL=helper.js.map