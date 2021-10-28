import React from 'react';
import { pulse } from "../../../styles/animation";
import { css, styled } from "../../../styles/styled";
export var StyledSkeletonBlockItem = styled.div.withConfig({
  displayName: "SkeletonBlockItem__StyledSkeletonBlockItem",
  componentId: "sc-1f38evo-0"
})(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      marginTop = _ref.marginTop,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? false : _ref$animated;
  return css(["position:relative;background-color:rgba(0,0,0,.1);", " ", " ", " ", ""], animated && css(["", ";"], pulse), marginTop && "margin-top: ".concat(marginTop, ";"), width && "width: ".concat(width, ";"), height && "height: ".concat(height, ";"));
});
export var SkeletonBlockItem = function SkeletonBlockItem() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    width: 'auto'
  };
  return React.createElement(StyledSkeletonBlockItem, props);
};
//# sourceMappingURL=SkeletonBlockItem.js.map