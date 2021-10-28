import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Typo } from "../../Atoms/Typography";
import { styled } from "../../../styles/styled";
import { MediaStyleSwitch } from "./MediaStyleSwitch";
var SmallScreen = styled(Typo).withConfig({
  displayName: "MediaStyleSwitchstory__SmallScreen",
  componentId: "vif4zp-0"
})(["background:springgreen;padding:15px 30px;"]);
var MediumScreen = styled(Typo).withConfig({
  displayName: "MediaStyleSwitchstory__MediumScreen",
  componentId: "vif4zp-1"
})(["background:lightseagreen;padding:15px 30px;"]);
var LargeScreen = styled(Typo).withConfig({
  displayName: "MediaStyleSwitchstory__LargeScreen",
  componentId: "vif4zp-2"
})(["background:tomato;padding:15px 30px;"]);
storiesOf('Design System/Helper/MediaStyleSwitch', module).add('Default', function () {
  return React.createElement(React.Fragment, null, React.createElement(MediaStyleSwitch, {
    query: "maxSm",
    activeDisplay: "block",
    inactiveDisplay: "none"
  }, React.createElement(SmallScreen, null, "Small screen")), React.createElement(MediaStyleSwitch, {
    query: "@media (min-width: 513px) and (max-width: 1007px)",
    activeDisplay: "block",
    inactiveDisplay: "none"
  }, React.createElement(MediumScreen, null, "Medium screen")), React.createElement(MediaStyleSwitch, {
    query: "lg",
    activeDisplay: "block",
    inactiveDisplay: "none"
  }, React.createElement(LargeScreen, null, "Large screen")));
});
//# sourceMappingURL=MediaStyleSwitch.story.js.map