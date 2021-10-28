import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { StepIcon } from "./StepIcon";
describe('StepIcon', function () {
  var props = {
    active: true,
    completed: true,
    color: 'primary',
    variant: 'prominent',
    stepNumber: '1'
  };
  it('should render', function () {
    var tree = renderWithTheme(React.createElement(StepIcon, props));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=StepIcon.test.js.map