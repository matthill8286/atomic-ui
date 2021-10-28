import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Link } from "../Link";
import { StorybookWrapper } from "../../../utils/StorybookWrapper";
import { ToolTip } from "./ToolTip";
import { Icon } from "../Icon";
import { StyleguideInfoOutlined } from "../../../svgs";

var knobs = function knobs(primary) {
  return {
    content: text('Content', 'Lorem Ipsum'),
    primary: boolean('Primary', !!primary)
  };
};

storiesOf('Design System/Atoms/ToolTip', module).add('Default', function () {
  return React.createElement(StorybookWrapper, null, React.createElement(ToolTip, knobs(), React.createElement(Link, {
    underline: false
  }, "Link")));
}).add('Primary', function () {
  return React.createElement(StorybookWrapper, null, React.createElement(ToolTip, knobs(true), React.createElement(Link, {
    underline: false
  }, "Link")));
}).add('Icon', function () {
  return React.createElement(StorybookWrapper, null, React.createElement(ToolTip, knobs(), React.createElement(Icon, null, React.createElement(StyleguideInfoOutlined, {
    height: "xs",
    width: "xs"
  }))));
});
//# sourceMappingURL=ToolTip.story.js.map