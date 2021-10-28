import React from 'react';
import { AnimationOverview } from "./AnimationOverview";
import Readme from "./AnimationOverview.readme.md";
export default {
  title: 'General/Overviews',
  component: AnimationOverview,
  info: Readme
};

var Template = function Template(args) {
  return React.createElement(AnimationOverview, args);
};

export var Animations = Template.bind({});
Animations.args = {
  fillMode: 'backwards',
  easing: 'ease-out',
  infinite: false,
  transition: 'long'
};
Animations.argTypes = {};
//# sourceMappingURL=AnimationOverview.story.js.map