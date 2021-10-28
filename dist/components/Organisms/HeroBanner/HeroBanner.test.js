import React from 'react';
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from "../../../testRenderer";
import { HeroBanner } from "./HeroBanner";
var images = {
  sm: 'public/images/teasers/500x560.jpg',
  md: 'public/images/teasers/700x560.jpg',
  lg: 'public/images/teasers/1000x360.jpg',
  xl: 'public/images/teasers/1200x360.jpg'
};
describe('HeroBanner', function () {
  it('renders correctly: default teaser with badges', function () {
    var tree = renderWithThemeAndRouter(React.createElement(HeroBanner, {
      color: "primary",
      link: {
        to: '#'
      },
      height: {
        desktop: 400,
        mobile: 350,
        tablet: 375
      },
      badges: [{
        id: 0,
        name: 'New'
      }, {
        id: 1,
        name: '100% Free!'
      }],
      badgeActionType: "prominent",
      heroImages: images
    }));
    expect(tree).toMatchSnapshot();
  });
  it('triggers click handler', function () {
    var clickHandler = jest.fn();
    var tree = mountWithThemeAndRouter(React.createElement(HeroBanner, {
      color: "primary",
      height: {
        desktop: 400,
        mobile: 350,
        tablet: 375
      },
      link: {
        to: '#'
      },
      heroImages: images,
      onClick: clickHandler
    }));
    tree.simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });
});
//# sourceMappingURL=HeroBanner.test.js.map