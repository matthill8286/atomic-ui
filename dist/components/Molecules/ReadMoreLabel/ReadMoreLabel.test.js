import React from 'react';
import { mountWithTheme } from "../../../testRenderer";
import { Collapse } from "../../Atoms/Collapse/Collapse";
import { CopyText } from "../../Atoms/Typography";
import { ReadMoreLabel } from "./ReadMoreLabel";
describe('<ReadMoreLabel> Atom', function () {
  test('renders correct open state', function () {
    var wrapper = mountWithTheme(React.createElement(ReadMoreLabel, {
      htmlFor: "id",
      isOpen: true,
      showMoreLabel: "more more",
      showLessLabel: "less less"
    }, "A label"));
    expect(wrapper.find(ReadMoreLabel).prop('isOpen')).toEqual(true);
  });
  test('renders correct collapsed state', function () {
    var wrapper = mountWithTheme(React.createElement(ReadMoreLabel, {
      htmlFor: "id",
      isOpen: false,
      collapsedHeight: 24,
      showMoreLabel: "show more",
      showLessLabel: "show less"
    }, "A label"));
    expect(wrapper.find(ReadMoreLabel).prop('isOpen')).toEqual(false);
    expect(wrapper.find(ReadMoreLabel).prop('collapsedHeight')).toEqual(24);
  });
  test('emits onClick events', function () {
    var mockClickHandler = jest.fn();
    var wrapper = mountWithTheme(React.createElement(ReadMoreLabel, {
      htmlFor: "id",
      isOpen: false,
      onClick: mockClickHandler,
      showMoreLabel: "show more",
      showLessLabel: "show less"
    }, "A label"));
    wrapper.find(Collapse).simulate('click');
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
  test('emits onChange events', function () {
    var mockChangeHandler = jest.fn();
    var wrapper = mountWithTheme(React.createElement(ReadMoreLabel, {
      htmlFor: "id",
      isOpen: false,
      onChange: mockChangeHandler,
      showMoreLabel: "show more",
      showLessLabel: "show less"
    }, "A label"));
    wrapper.find(CopyText).simulate('click');
    expect(mockChangeHandler).toHaveBeenCalledTimes(1);
    expect(mockChangeHandler).toHaveBeenCalledWith(false);
    wrapper.find(CopyText).simulate('click');
    expect(mockChangeHandler).toHaveBeenCalledTimes(2);
    expect(mockChangeHandler).toHaveBeenCalledWith(true);
  });
});
//# sourceMappingURL=ReadMoreLabel.test.js.map