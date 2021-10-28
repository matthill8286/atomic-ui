import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Label } from "./Label";
import Readme from "./Label.readme.md";
var stories = storiesOf('Design System/Atoms/Label', module);
var options = {
  info: Readme
};
stories.add('Default', function () {
  return React.createElement(Label, {
    htmlFor: "field-1"
  }, "A label");
}, options);
//# sourceMappingURL=Label.story.js.map