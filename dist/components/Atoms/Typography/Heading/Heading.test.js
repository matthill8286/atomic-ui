import React from 'react';
import { renderWithTheme } from "../../../../testRenderer";
import { Heading } from "./Heading";
describe('Heading', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(Heading, {
      scale: "level-1",
      fontFamily: "featured"
    }));
    expect(tree).toMatchSnapshot();
  });
  var scaleOptions = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];
  scaleOptions.forEach(function (scale) {
    it("should match snapshot with scale=\"".concat(scale, "\""), function () {
      var tree = renderWithTheme(React.createElement(Heading, {
        scale: scale
      }));
      expect(tree).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Heading.test.js.map