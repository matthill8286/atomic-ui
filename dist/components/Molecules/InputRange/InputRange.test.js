import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { InputRange } from "./InputRange";
describe('InputRange', function () {
  it('should render', function () {
    var wrapper = renderWithTheme(React.createElement(InputRange, null));
    expect(wrapper).toMatchSnapshot();
  });
  it('should fire change event', function () {
    var onChange = jest.fn();
    var wrapper = mountWithTheme(React.createElement(InputRange, {
      onChange: onChange
    }));
    var input = wrapper.find('input');
    input.simulate('change');
    expect(onChange).toBeCalledTimes(1);
  });
});
//# sourceMappingURL=InputRange.test.js.map