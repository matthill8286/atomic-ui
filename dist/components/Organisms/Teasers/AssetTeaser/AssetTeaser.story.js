function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { array, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StorybookRouterWrapper } from "../../../../utils/StorybookWrapper";
import { AssetTeaser } from "./AssetTeaser";
import { getTransformedImageVersion } from "../../../../utils/useGraphCmsImages";
var backgroundVariants = {
  tongue: 'tongue',
  upsetRect: 'upsetRect',
  rect: 'rect'
};
var assetImages = {
  none: '',
  Example1: getTransformedImageVersion('EDBzqhE5TZqIt0CEliLe'),
  Example2: getTransformedImageVersion('Qtv2VI72SrST9sPBGuuR'),
  Example3: getTransformedImageVersion('t0fyQbrNS8MT58anN0L1'),
  Example4: getTransformedImageVersion('Y6qb9VRp6F3PYl22H8gw'),
  Example5: getTransformedImageVersion('eT8kBosCTv2nQDoJdrpG'),
  Example6: getTransformedImageVersion('N1lYTvtBQo6DErnIwgpa')
};
var backgroundImages = {
  none: '',
  Example1: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
  Example2: getTransformedImageVersion('SdO6Eo51RZucKUK83Um7')
};
var backgroundImagesDesktop = {
  none: '',
  Example1: getTransformedImageVersion('9Tb7RERLG05a2NplB7Sw'),
  Example2: getTransformedImageVersion('1FfvDDFERwWh35wkpNky')
};
var featuredAssetImages = [{
  image: 'public/images/featured_assets/featured_asset_danone.png'
}, {
  image: 'public/images/featured_assets/featured_asset_lxp.jpg'
}];
storiesOf('Design System/Organisms/Teasers/Asset Teaser', module).add('Default', function () {
  var knobs = function knobs() {
    return {
      smallHeadline: text('smallHeadline', 'Featured Content'),
      headline: text('Headline', 'High standards require sensible processes'),
      contentText: text('ContentText', 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.'),
      assetImage: radios('Asset Image', assetImages, assetImages['none']),
      backgroundImage: radios('Background Image', backgroundImages, backgroundImages['Example1']),
      backgroundImageDesktop: radios('Background Image Desktop', backgroundImagesDesktop, backgroundImagesDesktop['none']),
      backgroundVariant: radios('Background Variants', backgroundVariants, backgroundVariants['tongue']),
      featuredAssetImages: featuredAssetImages,
      badges: [{
        id: 1,
        name: 'Playlist',
        actionType: 'prominent'
      }],
      tags: array('Tags', ['73 assets', '23hours 18minutes', '3% completed'], ',')
    };
  };

  return React.createElement(StorybookRouterWrapper, null, React.createElement(AssetTeaser, _extends({}, knobs(), {
    background: "white"
  })));
});
//# sourceMappingURL=AssetTeaser.story.js.map