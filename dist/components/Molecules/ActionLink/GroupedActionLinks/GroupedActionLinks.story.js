function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { saiyanTheme } from "../../../../styles";
import { GroupedActionLinks } from "./GroupedActionLinks";
import { actionLinks, actionToLinks } from "./GroupedActionLinks.mocks";
var sizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

var knobs = function knobs() {
  return {
    fontSize: select('Font Size', sizes, sizes[3]),
    color: select('Color', Object.keys(saiyanTheme.color), 'grey4'),
    padding: text('padding', 'lg sm')
  };
};

var Template = function Template(args) {
  return React.createElement(GroupedActionLinks, args);
};

storiesOf('Design System/Molecules/Action Link', module).add('Grouped Inline', function () {
  return React.createElement(Template, _extends({
    flexed: false,
    links: actionLinks
  }, knobs()));
}).add('Grouped Inline with To', function () {
  return React.createElement(Template, _extends({
    flexed: false,
    links: actionToLinks
  }, knobs()));
}).add('Grouped Flexed', function () {
  return React.createElement(Template, _extends({
    flexed: true,
    dropdownFlexed: true,
    links: actionLinks
  }, knobs()));
});
//# sourceMappingURL=GroupedActionLinks.story.js.map