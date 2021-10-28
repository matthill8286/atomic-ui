import * as React from 'react';
import { StyledBox, StyledLabel1, StyledLabel2 } from "./TypoExampleBox.styled";
export var TypoExampleBox = function TypoExampleBox(_ref) {
  var children = _ref.children,
      labelTop = _ref.labelTop,
      labelBottom = _ref.labelBottom;
  return React.createElement(StyledBox, null, React.createElement(StyledLabel1, null, labelTop), children, React.createElement(StyledLabel2, null, labelBottom));
};
//# sourceMappingURL=TypoExampleBox.js.map