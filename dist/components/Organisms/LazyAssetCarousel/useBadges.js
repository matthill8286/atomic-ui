var isBadgeType = function isBadgeType(badge) {
  return typeof badge !== null;
};

export var useBadges = function useBadges(_ref) {
  var asset = _ref.asset,
      playlistView = _ref.playlistView,
      _ref$showBadges = _ref.showBadges,
      showBadges = _ref$showBadges === void 0 ? true : _ref$showBadges;
  var badges = playlistView === 'collection' && (asset === null || asset === void 0 ? void 0 : asset.__typename) && [{
    name: asset === null || asset === void 0 ? void 0 : asset.__typename,
    actionType: 'prominent'
  }].filter(isBadgeType) || [];

  if (showBadges) {
    return badges;
  }

  return [];
};
//# sourceMappingURL=useBadges.js.map