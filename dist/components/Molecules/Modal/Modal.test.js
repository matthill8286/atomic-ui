import * as React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { Modal } from "./Modal";
describe('Modal', function () {
  var ModalContent = 'Modal';
  it('Should render a Modal', function () {
    var tree = renderWithTheme(React.createElement(Modal, null, ModalContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Modal with size', function () {
    var tree = renderWithTheme(React.createElement(Modal, {
      size: "lg"
    }, ModalContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Modal with two buttons', function () {
    var tree = renderWithTheme(React.createElement(Modal, {
      primaryButtonProps: {
        buttonLabel: 'Call to action',
        onClick: jest.fn()
      },
      secondaryButtonProps: {
        buttonLabel: 'Schließen',
        onClick: jest.fn()
      },
      size: "lg"
    }, ModalContent));
    expect(tree).toMatchSnapshot();
  });
  it('should render the title', function () {
    var title = 'Lorem Title';
    var tree = mountWithTheme(React.createElement(Modal, {
      title: title
    }, ModalContent));
    expect(tree.text()).toContain(title);
  });
  describe('Close Button in Header', function () {
    it('is rendered by default', function () {
      var tree = mountWithTheme(React.createElement(Modal, null, ModalContent));
      expect(tree.find('[data-test="modal-close-button"]').length).toBeGreaterThan(0);
    });
    it('is not rendered if hideCloseButton is passed', function () {
      var tree = mountWithTheme(React.createElement(Modal, {
        hideCloseButton: true
      }, ModalContent));
      expect(tree.find('[data-test="modal-close-button"]')).toHaveLength(0);
    });
  });
});
//# sourceMappingURL=Modal.test.js.map