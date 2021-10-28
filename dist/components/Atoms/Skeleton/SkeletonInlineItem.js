function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { pulse } from "../../../styles/animation";
import { css, styled } from "../../../styles/styled";
import { Typo } from "../Typography";
export var StyledSkeletonInlineItem = styled(Typo).withConfig({
  displayName: "SkeletonInlineItem__StyledSkeletonInlineItem",
  componentId: "sc-1fwttpi-0"
})(["", " ", " color:rgba(0,0,0,0);background-color:rgba(0,0,0,0.1);width:unset;&::before{content:'';display:block;}"], function (_ref) {
  var _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? false : _ref$animated;
  return animated && css(["", ";"], pulse);
}, function (_ref2) {
  var tag = _ref2.tag,
      newLine = _ref2.newLine;
  return !tag && "display: ".concat(newLine ? 'table' : 'inline-block', ";");
});
export var SkeletonInlineItem = function SkeletonInlineItem(_ref3) {
  var _ref3$length = _ref3.length,
      length = _ref3$length === void 0 ? 12 : _ref3$length,
      text = _ref3.text,
      props = _objectWithoutProperties(_ref3, ["length", "text"]);

  return React.createElement(StyledSkeletonInlineItem, props, text || 'a'.repeat(length));
};
//# sourceMappingURL=SkeletonInlineItem.js.map