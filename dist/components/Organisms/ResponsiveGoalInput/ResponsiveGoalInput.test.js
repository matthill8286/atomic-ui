import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { ResponsiveGoalInput } from "./index";
import { goalInputMocks } from "../GoalInput/__mocks__/goalInputs";
var onChange = jest.fn();
describe('GoalSlider', function () {
  it('should render', function () {
    var wrapper = renderWithTheme(React.createElement(ResponsiveGoalInput, {
      whereInputName: 'test-goal',
      needInputName: 'test-need',
      needInputLabel: 'Where do you need to be:',
      headline: 'Can I manage you as well as I should?',
      whereInputLabel: 'Where are you now:',
      input: goalInputMocks[0],
      onProficiencyChange: onChange,
      onImportanceChange: onChange,
      isOpenInitially: false
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=ResponsiveGoalInput.test.js.map