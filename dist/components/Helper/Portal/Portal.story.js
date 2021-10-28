import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Portal } from "./Portal";
storiesOf('Design System/Helper/Portal', module).add('Default', function () {
  var showModal = boolean('Show Modal', false);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    id: "target-container"
  }, "Some content"), showModal && React.createElement(Portal, {
    targetRootId: "target-container"
  }, React.createElement("p", null, "Portal Content")));
});
//# sourceMappingURL=Portal.story.js.map