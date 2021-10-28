import { storiesOf } from '@storybook/react';
import React from 'react';
import Readme from "../../README.md";
import ScRules from "../../SCRULES.md";
storiesOf('General/Introduction', module).add('Readme', function () {
  return React.createElement("div", null);
}, {
  info: Readme
}).add('SC Rules', function () {
  return React.createElement("div", null);
}, {
  info: ScRules
});
//# sourceMappingURL=Introduction.story.js.map