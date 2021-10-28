function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { number, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StorybookRouterWrapper } from "../../../../utils/StorybookWrapper";
import { LinkImageTeaser } from "./LinkImageTeaser";
import { getTransformedImageVersion } from "../../../../utils/useGraphCmsImages";
var actionTypes = {
  prominent: 'prominent',
  secondary: 'secondary'
};
var badges = [{
  id: 0,
  name: 'Featured'
}, {
  id: 1,
  name: '100% Live!!!'
}];
storiesOf('Design System/Organisms/Teasers/LinkImageTeaser', module).add('Default', function () {
  var knobs = function knobs() {
    return {
      link: {
        to: text('Link To', '/'),
        href: text('Link href', '#'),
        isLinkBlank: false
      },
      badgeActionType: radios('Type', actionTypes, actionTypes['prominent']),
      images: {
        sm: getTransformedImageVersion('c8GLaIBVRa6EelN5baVr'),
        md: getTransformedImageVersion('OWr5QtrXQ1eHiwMdrDM7'),
        lg: getTransformedImageVersion('fj7dbi1rSa2cGlaQqwDG'),
        xl: getTransformedImageVersion('NPgqQFqR0uJ1XhB00sGg')
      }
    };
  };

  var height = number('height', 300, {
    range: true,
    min: 100,
    max: 600,
    step: 1
  });
  return React.createElement(StorybookRouterWrapper, null, React.createElement("div", {
    style: {
      height: height,
      width: '100%',
      display: 'flex'
    }
  }, React.createElement(LinkImageTeaser, _extends({
    key: 'ImageTeaser_' + height
  }, knobs(), {
    badges: badges
  }))));
});
//# sourceMappingURL=LinkImageTeaser.story.js.map