import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { NotificationBox } from "./NotificationBox";
describe('NotificationBox', function () {
  it('renders corretly', function () {
    var tree = renderWithTheme(React.createElement(NotificationBox, {
      buttons: [{
        actionBtnLabel: 'Lets do it...',
        onClick: jest.fn()
      }],
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
      hasTitleIcon: true,
      isClosable: true,
      onClose: jest.fn(),
      title: "This is the result of your last action!",
      type: "error"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=NotificationBox.test.js.map