import React, { Children, useMemo } from 'react';
import { Portal, Modal, Button, styled, Icon } from "../../../index";
import { useMultiViewModalState, useMultiViewModalAction } from "./MultiViewModal.store";
import { StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
var StyledBackButton = styled(Button).withConfig({
  displayName: "MultiViewModal__StyledBackButton",
  componentId: "sc-74wakc-0"
})(["padding-left:0;"]);
var StyledBackArrow = styled(Icon).withConfig({
  displayName: "MultiViewModal__StyledBackArrow",
  componentId: "sc-74wakc-1"
})(["padding:0 !important;position:relative;left:-7px;"]);
export var MultiViewModal = function MultiViewModal(_ref) {
  var targetId = _ref.targetId,
      children = _ref.children,
      withScrollableContent = _ref.withScrollableContent,
      backButtonText = _ref.backButtonText,
      _ref$hideCloseButton = _ref.hideCloseButton,
      hideCloseButton = _ref$hideCloseButton === void 0 ? false : _ref$hideCloseButton,
      _ref$canClose = _ref.canClose,
      canClose = _ref$canClose === void 0 ? true : _ref$canClose,
      _ref$showBackButton = _ref.showBackButton,
      showBackButton = _ref$showBackButton === void 0 ? true : _ref$showBackButton;

  var _useMultiViewModalSta = useMultiViewModalState(),
      isActive = _useMultiViewModalSta.isActive,
      activeViewId = _useMultiViewModalSta.activeViewId,
      hasBackButton = _useMultiViewModalSta.hasBackButton;

  var _useMultiViewModalAct = useMultiViewModalAction(),
      goHome = _useMultiViewModalAct.goHome,
      close = _useMultiViewModalAct.close;

  var activeChild = useMemo(function () {
    return Children.toArray(children).find(function (child) {
      return child.props.id === activeViewId;
    });
  }, [children, activeViewId]);
  if (!isActive) return null;
  return React.createElement(Portal, {
    targetRootId: targetId
  }, React.createElement(Modal, {
    onClose: close,
    canClose: canClose,
    primaryButtonProps: activeChild === null || activeChild === void 0 ? void 0 : activeChild.props.primaryButtonProps,
    secondaryButtonProps: activeChild === null || activeChild === void 0 ? void 0 : activeChild.props.secondaryButtonProps,
    withScrollableContent: withScrollableContent,
    hideCloseButton: hideCloseButton
  }, React.createElement(React.Fragment, null, hasBackButton && showBackButton && React.createElement(StyledBackButton, {
    actionType: "ghost",
    onClick: goHome
  }, React.createElement(StyledBackArrow, {
    rotate: 180,
    width: "sm",
    height: "sm"
  }, React.createElement(StyleguideArrow, null)), backButtonText), activeChild)));
};
MultiViewModal.displayName = 'MultiViewModal';
//# sourceMappingURL=MultiViewModal.js.map