import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { GoalInput } from "./GoalInput";
import { goalInputMocks } from "./__mocks__/goalInputs";
describe('GoalInput', function () {
  it('should render', function () {
    var onChange = jest.fn();
    var wrapper = renderWithTheme(React.createElement(GoalInput, {
      whereInputName: 'test-goal',
      needInputName: 'test-need',
      needInputLabel: 'Where do you need to be:',
      headline: 'Can I manage you as well as I should?',
      whereInputLabel: 'Where are you now:',
      input: goalInputMocks[0],
      onProficiencyChange: onChange,
      onImportanceChange: onChange
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should fire change event', function () {
    var onChange = jest.fn();
    var wrapper = mountWithTheme(React.createElement(GoalInput, {
      whereInputName: 'where-input',
      needInputName: 'need-input',
      needInputLabel: 'Where do you need to be:',
      headline: 'Can I manage you as well as I should?',
      whereInputLabel: 'Where are you now:',
      input: goalInputMocks[0],
      onProficiencyChange: onChange,
      onImportanceChange: onChange
    }));
    var needInput = wrapper.find('input[name*="need-input"]');
    var whereInput = wrapper.find('input[name*="where-input"]');
    needInput.simulate('change');
    expect(onChange).toBeCalledTimes(1);
    whereInput.simulate('change');
    expect(onChange).toBeCalledTimes(2);
  });
});
//# sourceMappingURL=GoalInput.test.js.map