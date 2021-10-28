function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { number, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StorybookRouterWrapper } from "../../../../utils/StorybookWrapper";
import { ImageTeaser } from "./ImageTeaser";
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
  name: 'Sponsored',
  actionType: 'prominent'
}];
storiesOf('Design System/Organisms/Teasers/ImageTeaser', module).add('Default', function () {
  var knobs = function knobs() {
    return {
      badgeActionType: radios('Type', actionTypes, actionTypes['prominent']),
      finalImages: [getTransformedImageVersion('c8GLaIBVRa6EelN5baVr'), getTransformedImageVersion('OWr5QtrXQ1eHiwMdrDM7'), getTransformedImageVersion('fj7dbi1rSa2cGlaQqwDG'), getTransformedImageVersion('NPgqQFqR0uJ1XhB00sGg')]
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
  }, React.createElement(ImageTeaser, _extends({
    key: 'ImageTeaser_' + height
  }, knobs(), {
    badges: badges
  }))));
});
//# sourceMappingURL=ImageTeaser.story.js.map