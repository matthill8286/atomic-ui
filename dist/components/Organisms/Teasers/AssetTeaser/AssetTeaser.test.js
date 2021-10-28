import React from 'react';
import { Card } from "../../../Atoms/Card";
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from "../../../../testRenderer";
import { AssetTeaser } from "./AssetTeaser";
describe('TopTeaser', function () {
  it('renders correctly: default AssetTeaser with minimal configuration', function () {
    var tree = renderWithThemeAndRouter(React.createElement(AssetTeaser, {
      headline: "High standards require sensible processes",
      elevation: 0
    }));
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly: default AssetTeaser with maximum configuration', function () {
    var tree = renderWithThemeAndRouter(React.createElement(AssetTeaser, {
      backgroundImage: "public/images/small.jpg",
      elevation: 0,
      backgroundVariant: "tongue",
      contentText: "Well, the answer is obvious: \u201CHe hasn\u2019t died yet.\u201D Fortunately, for us, Munger has kept on ticking.",
      featuredAssetImages: [{
        image: 'public/images/featured_assets/featured_asset_01.png'
      }, {
        image: 'public/images/featured_assets/featured_asset_03.png'
      }],
      headline: "High standards require sensible processes",
      assetImage: "public/images/teasers/product02.png",
      tags: ['73 assets', '23hours 18minutes', '3% completed']
    }));
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly: AssetTeaser', function () {
    var tree = renderWithThemeAndRouter(React.createElement(AssetTeaser, {
      backgroundImage: "public/images/small.jpg",
      elevation: 0,
      backgroundVariant: "tongue",
      contentText: "Well, the answer is obvious: \u201CHe hasn\u2019t died yet.\u201D Fortunately, for us, Munger has kept on ticking.",
      featuredAssetImages: [{
        image: 'public/images/featured_assets/featured_asset_01.png'
      }, {
        image: 'public/images/featured_assets/featured_asset_03.png'
      }],
      headline: "High standards require sensible processes",
      tags: ['73 assets', '23hours 18minutes', '3% completed']
    }));
    expect(tree).toMatchSnapshot();
  });
  it('triggers click handler', function () {
    var clickHandler = jest.fn();
    var tree = mountWithThemeAndRouter(React.createElement(AssetTeaser, {
      elevation: 0,
      headline: "High standards require sensible processes",
      onClick: clickHandler
    }));
    tree.find(Card).simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });
});
//# sourceMappingURL=AssetTeaser.test.js.map