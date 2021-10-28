import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Picture } from "./Picture";
var IMAGE_URL = 'https://learn.filtered.com/hubfs/magpie%20client%20images%20and%20files/Procter%20and%20Gamble/instead%20of%20coming%20soon.png';
describe('Picture', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Picture, {
      src: IMAGE_URL,
      alt: "Lorem ipsum"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Picture.test.js.map