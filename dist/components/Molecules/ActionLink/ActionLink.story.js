import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ActionLink } from "./ActionLink";
var actionLinkChildren = 'Action link';

var Template = function Template(args) {
  return React.createElement(ActionLink, args);
};

storiesOf('Design System/Molecules/Action Link', module).add('Single', function () {
  return React.createElement(Template, null, actionLinkChildren);
});
storiesOf('Design System/Molecules/Action Link', module).add('On Click', function () {
  return React.createElement(Template, {
    onClick: action('Action Link clicked')
  }, actionLinkChildren);
});
//# sourceMappingURL=ActionLink.story.js.map