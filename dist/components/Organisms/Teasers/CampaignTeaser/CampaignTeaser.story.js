import { array, boolean, radios, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StorybookRouterWrapper } from "../../../../utils/StorybookWrapper";
import { CampaignTeaser } from "./CampaignTeaser";
import { getTransformedImageVersion } from "../../../../utils/useGraphCmsImages";
var actionTypes = {
  disabled: 'disabled',
  prominent: 'prominent',
  secondary: 'secondary'
};
var sizes = {
  auto: 'auto',
  small: 'small',
  medium: 'medium',
  large: 'large'
};
var orientations = {
  auto: 'auto',
  portrait: 'portrait'
};
var elevations = [0, 1, 2, 3, 4];
var backgroundVariants = {
  tongue: 'tongue',
  upsetRect: 'upsetRect',
  rect: 'rect'
};
var assetImages = {
  none: '',
  Example1: getTransformedImageVersion('EDBzqhE5TZqIt0CEliLe'),
  Example2: getTransformedImageVersion('XhMIsyGQCa35lOttXGbA'),
  Example3: getTransformedImageVersion('t0fyQbrNS8MT58anN0L1'),
  Example4: getTransformedImageVersion('Y6qb9VRp6F3PYl22H8gw')
};
var backgroundImages = {
  none: '',
  Example1: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
  Example2: getTransformedImageVersion('NPgqQFqR0uJ1XhB00sGg')
};
var featuredAssetImages = [{
  image: 'public/images/featured_assets/featured_asset_danone.png'
}, {
  image: 'public/images/featured_assets/featured_asset_lxp.jpg'
}];
storiesOf('Design System/Organisms/Teasers/CampaignTeaser', module).add('Default', function () {
  var withFeaturedAssets = boolean('With Featured Assets', true);

  var knobs = function knobs() {
    return {
      isStageTeaser: boolean('Show as StageTeaser', false),
      fixedImageHeight: boolean('Fixed Image Height', false),
      smallHeadline: text('smallHeadline', 'Sponsored Playlist'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 1),
      headline: text('Headline', 'High standards require sensible processes'),
      contentText: text('ContentText', 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.'),
      assetImage: radios('Asset Image', assetImages, assetImages['none']),
      backgroundImage: radios('Background Image', backgroundImages, backgroundImages['Example1']),
      lazyloadBackgroundImage: boolean('Lazyload Image', true),
      backgroundVariant: radios('Background Variants', backgroundVariants, backgroundVariants['tongue']),
      featuredAssetImages: withFeaturedAssets ? featuredAssetImages : undefined,
      badges: [{
        id: 1,
        name: 'Featured'
      }, {
        id: 2,
        name: 'Sponsored',
        actionType: 'disabled'
      }, {
        id: 3,
        name: 'Third Badge'
      }, {
        id: 3,
        name: 'Fourth Badge'
      }],
      badgeActionType: radios('Badge type', actionTypes, actionTypes['secondary']),
      size: radios('Size', sizes, sizes['auto']),
      orientation: radios('Orientation', orientations, orientations['auto']),
      tags: array('Tags', ['73 assets', '23hours 18minutes', '3% completed'], ',')
    };
  };

  return React.createElement(StorybookRouterWrapper, null, React.createElement(CampaignTeaser, knobs()));
}).add('Less content', function () {
  var knobs = function knobs() {
    return {
      headline: text('Headline', 'High standards require sensible processes'),
      contentText: text('ContentText', 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.'),
      elevation: 0,
      assetImage: radios('Asset Image', assetImages, assetImages['none']),
      backgroundImage: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
      badgeActionType: 'secondary',
      size: radios('Size', sizes, sizes['auto']),
      orientation: 'auto'
    };
  };

  return React.createElement(StorybookRouterWrapper, null, React.createElement(CampaignTeaser, knobs()));
});
//# sourceMappingURL=CampaignTeaser.story.js.map