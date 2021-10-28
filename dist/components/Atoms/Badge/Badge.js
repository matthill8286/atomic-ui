import * as React from 'react';
import { StyledBadgeLineWrapper, StyledBadgeWrapper, StyledOverflow, StyledTypo } from "./Badge.styled";
export var Badge = function Badge(_ref) {
  var _ref$actionType = _ref.actionType,
      actionType = _ref$actionType === void 0 ? 'inverted' : _ref$actionType,
      badges = _ref.badges,
      isBadgeLine = _ref.isBadgeLine,
      className = _ref.className;
  return React.createElement(StyledBadgeLineWrapper, {
    isBadgeLine: true,
    className: className
  }, badges && badges.map(function (badge, i) {
    if (!badge) {
      return null;
    }

    return React.createElement(StyledBadgeWrapper, {
      key: "badge-".concat(badge.name, "-").concat(i),
      actionType: badge.actionType || actionType,
      isFirst: i === 0,
      isBadgeLine: isBadgeLine
    }, React.createElement(StyledTypo, {
      weight: "regular",
      fontSize: 'xxs',
      margin: "0",
      actionType: badge.actionType || actionType
    }, React.createElement(StyledOverflow, null, badge.name)));
  }));
};
//# sourceMappingURL=Badge.js.map