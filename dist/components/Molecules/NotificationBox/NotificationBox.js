function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Card } from "../../Atoms/Card";
import { Icon } from "../../Atoms/Icon";
import { Link } from "../../Atoms/Link";
import { CopyText } from "../../Atoms/Typography/CopyText";
import { IconArrow, IconCheckmarkCircleOutlined, IconClear, IconClearCircleOutlined, IconInfoOutlined } from '@excelwithbusiness/webmobile-svg-library';
import { NotificationContentSort } from "./NotificationBox.interface";
import { StyledArrow, StyledBodyHtml, StyledButton, StyledButtonDiv, StyledCopyTextDiv, StyledLinkDiv, StyledNotificationBoxWrapper, StyledNotificationClose, StyledNotificationHeadline } from "./NotificationBoxStyled";
export var NotificationBox = React.forwardRef(function (_ref, ref) {
  var body = _ref.body,
      _ref$bodyFontSize = _ref.bodyFontSize,
      bodyFontSize = _ref$bodyFontSize === void 0 ? 'sm' : _ref$bodyFontSize,
      bodyMargin = _ref.bodyMargin,
      _ref$buttonLayout = _ref.buttonLayout,
      buttonLayout = _ref$buttonLayout === void 0 ? 'column' : _ref$buttonLayout,
      buttons = _ref.buttons,
      _ref$cardShape = _ref.cardShape,
      cardShape = _ref$cardShape === void 0 ? 'rounded-small' : _ref$cardShape,
      hasTitleIcon = _ref.hasTitleIcon,
      _ref$isTitleFontBold = _ref.isTitleFontBold,
      isTitleFontBold = _ref$isTitleFontBold === void 0 ? true : _ref$isTitleFontBold,
      titleIconSelfAlign = _ref.titleIconSelfAlign,
      isClosable = _ref.isClosable,
      rootPosition = _ref.rootPosition,
      maxWidth = _ref.maxWidth,
      links = _ref.links,
      onClose = _ref.onClose,
      title = _ref.title,
      tooltip = _ref.tooltip,
      type = _ref.type,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? NotificationContentSort.LinksButtons : _ref$sort,
      _ref$alignLinks = _ref.alignLinks,
      alignLinks = _ref$alignLinks === void 0 ? 'left' : _ref$alignLinks,
      otherProps = _objectWithoutProperties(_ref, ["body", "bodyFontSize", "bodyMargin", "buttonLayout", "buttons", "cardShape", "hasTitleIcon", "isTitleFontBold", "titleIconSelfAlign", "isClosable", "rootPosition", "maxWidth", "links", "onClose", "title", "tooltip", "type", "sort", "alignLinks"]);

  var renderIcon = function renderIcon(type) {
    switch (type) {
      case 'info':
        return React.createElement(IconInfoOutlined, null);

      case 'success':
        return React.createElement(IconCheckmarkCircleOutlined, null);

      case 'alert':
        return React.createElement(IconInfoOutlined, null);

      case 'error':
        return React.createElement(IconClearCircleOutlined, null);

      default:
        return React.createElement(IconInfoOutlined, null);
    }
  };

  var getIconLeft = function getIconLeft(iconLeft) {
    if (iconLeft === null) return undefined;
    if (iconLeft === undefined) return React.createElement(Icon, {
      color: "grey6"
    }, React.createElement(IconArrow, null));
    return iconLeft;
  };

  var renderLinks = function renderLinks() {
    return Boolean(links === null || links === void 0 ? void 0 : links.length) && React.createElement(StyledLinkDiv, {
      alignLinks: alignLinks
    }, links.map(function (_ref2) {
      var label = _ref2.label,
          iconLeft = _ref2.iconLeft,
          linkProps = _objectWithoutProperties(_ref2, ["label", "iconLeft"]);

      return React.createElement(Link, _extends({
        iconLeft: getIconLeft(iconLeft),
        color: "grey4",
        decorationColor: "grey4",
        key: label,
        scale: "large"
      }, linkProps), label);
    }));
  };

  var arrowPos = tooltip === null || tooltip === void 0 ? void 0 : tooltip.arrowPosition.split('-');
  var padding = tooltip ? {
    mobile: 'sm',
    tablet: 'md',
    top: 'md'
  } : 'md';
  return React.createElement(StyledNotificationBoxWrapper, _extends({
    "data-test": "notification-box",
    tooltip: tooltip,
    type: type,
    rootPosition: rootPosition,
    maxWidth: maxWidth,
    ref: ref
  }, otherProps), React.createElement(StyledNotificationClose, {
    onClick: onClose
  }, React.createElement(Icon, {
    width: 16,
    height: 16,
    color: 'grey6'
  }, isClosable && React.createElement(IconClear, null))), arrowPos && React.createElement(StyledArrow, {
    arrowLeft: tooltip === null || tooltip === void 0 ? void 0 : tooltip.arrowleft,
    arrowPosition: arrowPos
  }), React.createElement(Card, {
    elevation: 1,
    padding: padding,
    shape: cardShape,
    surface: "white"
  }, title && React.createElement(StyledNotificationHeadline, null, hasTitleIcon && React.createElement(Icon, {
    width: 16,
    height: 16,
    color: "grey6",
    alignSelf: titleIconSelfAlign
  }, renderIcon(type)), React.createElement(CopyText, {
    "data-test": "notification-box-title",
    color: "grey6",
    display: "flex",
    tag: "div",
    bold: isTitleFontBold
  }, title)), body && React.createElement(StyledCopyTextDiv, {
    margin: bodyMargin
  }, React.createElement(CopyText, {
    "data-test": "notification-box-body",
    fontSize: bodyFontSize,
    margin: bodyMargin
  }, React.createElement(StyledBodyHtml, {
    dangerouslySetInnerHTML: {
      __html: body
    }
  }))), sort === NotificationContentSort.LinksButtons && renderLinks(), buttons && buttons.length > 0 && React.createElement(StyledButtonDiv, {
    buttonLayout: buttonLayout
  }, buttons.map(function (_ref3) {
    var actionBtnLabel = _ref3.actionBtnLabel,
        _ref3$actionType = _ref3.actionType,
        actionType = _ref3$actionType === void 0 ? 'inverted' : _ref3$actionType,
        buttonProps = _objectWithoutProperties(_ref3, ["actionBtnLabel", "actionType"]);

    return React.createElement(StyledButton, _extends({
      actionType: actionType,
      fullWidth: true,
      key: actionBtnLabel,
      size: "sm"
    }, buttonProps), actionBtnLabel);
  })), sort === NotificationContentSort.ButtonsLinks && renderLinks()));
});
//# sourceMappingURL=NotificationBox.js.map