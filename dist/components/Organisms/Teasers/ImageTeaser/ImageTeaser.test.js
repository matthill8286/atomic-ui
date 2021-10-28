import React from 'react';
import { renderWithThemeAndRouter } from "../../../../testRenderer";
import { ImageTeaser } from "./ImageTeaser";
var images = ['public/images/teasers/500x560.jpg', 'public/images/teasers/700x560.jpg', 'public/images/teasers/1000x360.jpg', 'public/images/teasers/1200x360.jpg'];
describe('ImageTeaser', function () {
  it('renders correctly: default teaser with badges', function () {
    var tree = renderWithThemeAndRouter(React.createElement(ImageTeaser, {
      badges: [{
        id: 0,
        name: 'Featured'
      }, {
        id: 1,
        name: 'Live@@@'
      }],
      badgeActionType: "prominent",
      finalImages: images
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=ImageTeaser.test.js.map