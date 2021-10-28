import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Link } from "../../Atoms/Link";
import { TopBar } from "./TopBar";
var stories = storiesOf('Design System/Molecules/TopBar', module);
var entries = ['Virtual Gathering', 'Conference Zone', 'Recommended Assets', React.createElement(Link, {
  href: "www.google.com",
  inline: true,
  bold: true,
  fontSize: "sm",
  color: "grey5",
  decorationColor: "grey5",
  key: "link"
}, "Test")];
stories.add('Default', function () {
  return React.createElement(TopBar, {
    entries: entries
  });
});
//# sourceMappingURL=TopBar.story.js.map