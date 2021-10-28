import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { saiyanTheme } from "../../../styles/sc-vars-saiyan";
import { Divider } from "./Divider";
var options = Object.keys(saiyanTheme.color);
var height = [5, 10, 12.5, 13, 15];

var knobs = function knobs() {
  return {
    color: select('Color', options, 'primary'),
    height: select('Height', height, height[5])
  };
};

storiesOf('Design System/Atoms/Divider', module).add('Default', function () {
  return React.createElement(Divider, knobs());
});
//# sourceMappingURL=Divider.story.js.map