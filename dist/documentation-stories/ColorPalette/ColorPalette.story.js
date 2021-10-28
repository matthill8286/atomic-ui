import React from 'react';
import { ColorPalette } from "./ColorPalette";
import Readme from "./ColorPalette.readme.md";
export default {
  title: 'General/Overviews',
  component: ColorPalette,
  info: Readme
};

var Template = function Template() {
  return React.createElement(ColorPalette, null);
};

export var ColorPaletteDefault = Template.bind({});
//# sourceMappingURL=ColorPalette.story.js.map