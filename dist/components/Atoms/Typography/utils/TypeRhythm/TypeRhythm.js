import React from 'react';
import { styled } from "../../../../../styles/styled";
var StyledTypeRhythm = styled.div.withConfig({
  displayName: "TypeRhythm__StyledTypeRhythm",
  componentId: "aba9t-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme,
      visible = _ref.visible;
  return visible && "\n      background-size: ".concat(theme.spacing.base.sm, " ").concat(theme.spacing.base.sm, ";\n      background-image: linear-gradient(\n        0deg,\n        #eab 0%,\n        #eab 25%,\n        #fff 25%,\n        #fff 50%,\n        #eab 50%,\n        #eab 75%,\n        #fff 75%,\n        #fff 100%\n      );\n    ");
});
export var TypeRhythm = function TypeRhythm(_ref2) {
  var children = _ref2.children,
      _ref2$visible = _ref2.visible,
      visible = _ref2$visible === void 0 ? true : _ref2$visible;
  return React.createElement(StyledTypeRhythm, {
    visible: visible
  }, children);
};
//# sourceMappingURL=TypeRhythm.js.map