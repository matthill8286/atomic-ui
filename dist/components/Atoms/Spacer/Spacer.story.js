import { storiesOf } from '@storybook/react';
import React from 'react';
import { FlexBox } from "../../Helper/FlexBox";
import { styled } from "../../../styles/styled";
import { Spacer } from "./Spacer";
import Readme from "./Spacer.readme.md";
var StyledBlock = styled.div.withConfig({
  displayName: "Spacerstory__StyledBlock",
  componentId: "ikh3l2-0"
})(["height:20px;width:100%;background:red;float:left;"]);
var StyledVerticalBlock = styled.div.withConfig({
  displayName: "Spacerstory__StyledVerticalBlock",
  componentId: "ikh3l2-1"
})(["height:100px;width:20px;background:red;float:left;"]);
storiesOf('Design System/Atoms/Spacer', module).add('Default', function () {
  return React.createElement(React.Fragment, null, React.createElement(StyledBlock, null), React.createElement(Spacer, {
    size: 'md'
  }), React.createElement(StyledBlock, null), React.createElement(Spacer, {
    size: 'xxxl'
  }), React.createElement(StyledBlock, null));
}, {
  info: Readme
}).add('Vertical', function () {
  return React.createElement(FlexBox, {
    flexDirection: "row"
  }, React.createElement(StyledVerticalBlock, null), React.createElement(Spacer, {
    direction: "vertical",
    size: 'md'
  }), React.createElement(StyledVerticalBlock, null), React.createElement(Spacer, {
    direction: "vertical",
    size: 'xxxl'
  }), React.createElement(StyledVerticalBlock, null));
}, {
  info: Readme
});
//# sourceMappingURL=Spacer.story.js.map