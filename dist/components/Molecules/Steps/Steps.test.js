import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Steps } from "./Steps";
describe('Steps', function () {
  var props = {
    activeStep: 0,
    completedStep: -1
  };
  it('should render', function () {
    var tree = renderWithTheme(React.createElement(Steps, props));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Steps.test.js.map