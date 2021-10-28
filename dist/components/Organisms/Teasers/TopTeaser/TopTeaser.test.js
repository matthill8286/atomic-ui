import React from 'react';
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from "../../../../testRenderer";
import { TopTeaser } from "./TopTeaser";
var images = {
  sm: 'public/images/teasers/500x560.jpg',
  md: 'public/images/teasers/700x560.jpg',
  lg: 'public/images/teasers/1000x360.jpg',
  xl: 'public/images/teasers/1200x360.jpg'
};
var content = {
  intro: 'Hi',
  seperator: ',',
  headline: 'Welcome to',
  copy: 'Digital Agility at Filtered',
  name: 'Matthew'
};
describe('TopTeaser', function () {
  it('renders correctly: default teaser with badges', function () {
    var tree = renderWithThemeAndRouter(React.createElement(TopTeaser, {
      color: "primary",
      link: {
        to: '#'
      },
      content: content,
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
    var tree = mountWithThemeAndRouter(React.createElement(TopTeaser, {
      color: "primary",
      content: content,
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
//# sourceMappingURL=TopTeaser.test.js.map