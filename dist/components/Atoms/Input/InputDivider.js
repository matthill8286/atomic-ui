import React from 'react';
import { Divider } from "../Divider";
import { styled } from "../../../styles/styled";
var StyledDivider = styled(Divider).withConfig({
  displayName: "InputDivider__StyledDivider",
  componentId: "sc-1054wef-0"
})(["height:2px;width:100%;margin-bottom:0;color:", ";margin-top:", ";"], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return theme.color[color];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.xxs;
});
export var InputDivider = function InputDivider(props) {
  return React.createElement(StyledDivider, props);
};
//# sourceMappingURL=InputDivider.js.map