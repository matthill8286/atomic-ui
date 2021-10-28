import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { StepConnector } from "./StepConnector";
describe('StepConnector', function () {
  var props = {
    active: false,
    prevActive: false,
    color: 'primary',
    variant: 'prominent',
    completed: false,
    elementPosition: 'first'
  };
  it('should render', function () {
    var tree = renderWithTheme(React.createElement(StepConnector, props));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=StepConnector.test.js.map