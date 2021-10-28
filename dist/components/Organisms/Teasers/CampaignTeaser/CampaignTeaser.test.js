import React from 'react';
import { Card } from "../../../Atoms/Card";
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from "../../../../testRenderer";
import { CampaignTeaser } from "./CampaignTeaser";
describe('CampaignTeaser', function () {
  it('renders correctly: default CampaignTeaser with minimal configuration', function () {
    var tree = renderWithThemeAndRouter(React.createElement(CampaignTeaser, {
      headline: "High standards require sensible processes",
      elevation: 0,
      lazyload: false
    }));
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly: default CampaignTeaser with maximum configuration', function () {
    var tree = renderWithThemeAndRouter(React.createElement(CampaignTeaser, {
      backgroundImage: "public/images/small.jpg",
      elevation: 0,
      backgroundVariant: "tongue",
      badgeActionType: "prominent",
      badges: [{
        id: 1,
        name: 'Featured'
      }, {
        id: 2,
        name: 'Sponsored'
      }],
      contentText: "Well, the answer is obvious: \u201CHe hasn\u2019t died yet.\u201D Fortunately, for us, Munger has kept on ticking.",
      featuredAssetImages: [{
        image: 'public/images/featured_assets/featured_asset_01.png'
      }, {
        image: 'public/images/featured_assets/featured_asset_03.png'
      }],
      headline: "High standards require sensible processes",
      orientation: "auto",
      assetImage: "public/images/teasers/product02.png",
      size: "auto",
      tags: ['73 assets', '23hours 18minutes', '3% completed'],
      lazyload: false
    }));
    expect(tree).toMatchSnapshot();
  });
  it('triggers click handler', function () {
    var clickHandler = jest.fn();
    var tree = mountWithThemeAndRouter(React.createElement(CampaignTeaser, {
      elevation: 0,
      headline: "High standards require sensible processes",
      onClick: clickHandler,
      lazyload: false
    }));
    tree.find(Card).simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });
});
//# sourceMappingURL=CampaignTeaser.test.js.map