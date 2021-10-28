import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { SimpleCarousel } from "./SimpleCarousel";
import { pictureEntries } from "./SimpleCarousel.data";
import { renderWithPictureComponent } from "./SimpleCarousel.story";
describe('SimpleCarousel', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(SimpleCarousel, {
      items: pictureEntries,
      renderSlide: renderWithPictureComponent,
      sliderSettings: {
        dots: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500
      }
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=SimpleCarousel.test.js.map