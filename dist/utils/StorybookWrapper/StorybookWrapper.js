import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { styled } from "../../styles/styled";
import { media } from "../../styles";
var StyledStorybookWrapper = styled.div.withConfig({
  displayName: "StorybookWrapper__StyledStorybookWrapper",
  componentId: "sc-19bhvoq-0"
})(["padding:20px 40px 40px;", "{padding:20px 0;}"], media.maxSm);
export var StorybookWrapper = StyledStorybookWrapper;
export var StorybookRouterWrapper = function StorybookRouterWrapper(_ref) {
  var children = _ref.children;
  return React.createElement(StyledStorybookWrapper, null, React.createElement(Router, null, children));
};
//# sourceMappingURL=StorybookWrapper.js.map