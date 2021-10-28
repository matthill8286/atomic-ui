function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { ModalButtonGroup } from "./ModalButtonGroup";
describe('ModalButtonGroup', function () {
  var props = {
    primaryButtonProps: {
      buttonLabel: 'Call to action',
      actionType: 'primary',
      onClick: jest.fn()
    },
    secondaryButtonProps: {
      buttonLabel: 'Bookmark',
      actionType: 'outlined',
      onClick: jest.fn()
    }
  };
  it('Should render a ModalButtonGroup', function () {
    var tree = renderWithTheme(React.createElement(ModalButtonGroup, props));
    expect(tree).toMatchSnapshot();
  });
  it('Should render with alignment.', function () {
    var tree = renderWithTheme(React.createElement(ModalButtonGroup, _extends({
      buttonAlignment: "right"
    }, props)));
    expect(tree).toMatchSnapshot();
  });
  it('Should not render with no Button', function () {
    var tree = renderWithTheme(React.createElement(ModalButtonGroup, null));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=ModalButtonGroup.test.js.map