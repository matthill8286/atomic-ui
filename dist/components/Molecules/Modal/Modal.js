import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import * as React from 'react';
import { Heading } from "../../Atoms/Typography";
import { StyleguideClose } from '@excelwithbusiness/webmobile-svg-library';
import { useWindowDimensions } from "../../Helper/useWindowDimensions";
import { ModalButtonGroup } from "../ModalButtonGroup";
import { ModalWrapper, StlyedLeftContent, StyledIcon, StyledModalBackground, StyledModalContent, StyledModalDesktopWrapper, StyledModalHeader, StyledModalInnerWrapper } from "./Modal.styled";
export var ModalHeading = function ModalHeading(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return React.createElement(Heading, {
    margin: "0",
    textAlign: "center",
    weight: "semibold",
    scale: "level-3",
    tag: "h1",
    color: color
  }, children);
};
export var Modal = function Modal(_ref2) {
  var _ref2$buttonAlignment = _ref2.buttonAlignment,
      buttonAlignment = _ref2$buttonAlignment === void 0 ? 'space-between' : _ref2$buttonAlignment,
      children = _ref2.children,
      className = _ref2.className,
      contentBgColor = _ref2.contentBgColor,
      onClose = _ref2.onClose,
      animation = _ref2.animation,
      _ref2$position = _ref2.position,
      position = _ref2$position === void 0 ? 'top' : _ref2$position,
      primaryButtonProps = _ref2.primaryButtonProps,
      secondaryButtonProps = _ref2.secondaryButtonProps,
      showButtonSeparator = _ref2.showButtonSeparator,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'lg' : _ref2$size,
      title = _ref2.title,
      _ref2$paddingSize = _ref2.paddingSize,
      paddingSize = _ref2$paddingSize === void 0 ? 'md' : _ref2$paddingSize,
      _ref2$withScrollableC = _ref2.withScrollableContent,
      withScrollableContent = _ref2$withScrollableC === void 0 ? false : _ref2$withScrollableC,
      _ref2$hideCloseButton = _ref2.hideCloseButton,
      hideCloseButton = _ref2$hideCloseButton === void 0 ? false : _ref2$hideCloseButton,
      _ref2$isWhite = _ref2.isWhite,
      isWhite = _ref2$isWhite === void 0 ? false : _ref2$isWhite,
      _ref2$canClose = _ref2.canClose,
      canClose = _ref2$canClose === void 0 ? true : _ref2$canClose;

  var _useWindowDimensions = useWindowDimensions(),
      breakpointName = _useWindowDimensions.breakpointName;

  var modalDesktopWrapper = React.useRef(null);
  var modalInnerWrapper = React.useRef(null);
  var modalWrapper = React.useRef(null);
  React.useEffect(function () {
    if (breakpointName === 'xs') {
      disableBodyScroll(modalDesktopWrapper === null || modalDesktopWrapper === void 0 ? void 0 : modalDesktopWrapper.current);
    } else if (withScrollableContent) {
      disableBodyScroll(modalInnerWrapper === null || modalInnerWrapper === void 0 ? void 0 : modalInnerWrapper.current);
    } else {
      disableBodyScroll(modalWrapper === null || modalWrapper === void 0 ? void 0 : modalWrapper.current);
    }

    return function () {
      return clearAllBodyScrollLocks();
    };
  }, [modalDesktopWrapper, modalInnerWrapper, modalWrapper, breakpointName, withScrollableContent]);

  var handleClick = function handleClick(method) {
    return function (ev) {
      if (ev) {
        ev.stopPropagation();
      }

      if (method) method();
    };
  };

  var hasTitle = !!title;

  var renderHeaderContent = function renderHeaderContent() {
    return React.createElement(React.Fragment, null, !hideCloseButton && React.createElement(StlyedLeftContent, null), hasTitle && React.createElement("div", null, typeof title === 'string' ? React.createElement(ModalHeading, null, title) : React.createElement(React.Fragment, null, title)), !hideCloseButton && React.createElement(StyledIcon, {
      width: 30,
      height: 30,
      color: "grey5",
      onClick: handleClick(onClose)
    }, React.createElement(StyleguideClose, {
      "data-test": "modal-close-button"
    })));
  };

  return React.createElement(ModalWrapper, {
    id: "filtered-styled-modal-wrapper",
    className: className,
    ref: modalWrapper
  }, React.createElement(StyledModalBackground, {
    isWhite: isWhite,
    onClick: canClose ? handleClick(onClose) : undefined
  }), React.createElement(StyledModalInnerWrapper, {
    paddingSize: paddingSize,
    contentBgColor: contentBgColor,
    size: size,
    position: position,
    animation: animation,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    },
    withScrollableContent: withScrollableContent,
    ref: modalInnerWrapper
  }, React.createElement(StyledModalHeader, {
    hasTitle: hasTitle
  }, renderHeaderContent()), React.createElement(StyledModalDesktopWrapper, {
    id: "filtered-styled-modal-desktop-wrapper",
    ref: modalDesktopWrapper
  }, React.createElement(StyledModalContent, null, children), React.createElement(ModalButtonGroup, {
    buttonAlignment: buttonAlignment,
    primaryButtonProps: primaryButtonProps,
    secondaryButtonProps: secondaryButtonProps,
    showButtonSeparator: showButtonSeparator
  }))));
};
Modal.displayName = 'Modal';
//# sourceMappingURL=Modal.js.map