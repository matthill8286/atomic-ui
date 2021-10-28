function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Breadcrumb } from "./Breadcrumb";
var paths = [{
  name: 'Dashboard',
  link: '/dashboard',
  isRouterLink: true
}, {
  name: 'Learning Asset',
  link: '/learning-asset/3215',
  isRouterLink: true
}, {
  name: 'Learning Asset: Watch about Genomes',
  link: '/learning-asset/3215-watch-about-genomes',
  isRouterLink: true
}];

var knobs = function knobs() {
  return {
    margin: text('margin', 'lg sm'),
    padding: text('padding', 'lg sm')
  };
};

storiesOf('Design System/Molecules/Breadcrumb', module).add('Default', function () {
  return React.createElement(Breadcrumb, _extends({}, knobs(), {
    paths: paths,
    hideLastElement: boolean('Hide Last Element', false)
  }));
}).add('Default as Skeleton', function () {
  return React.createElement(Breadcrumb, {
    loading: true,
    paths: []
  });
});
//# sourceMappingURL=Breadcrumb.story.js.map