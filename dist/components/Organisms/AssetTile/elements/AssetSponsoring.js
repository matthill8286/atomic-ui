function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useCallback, useRef, useState } from 'react';
import { Icon } from "../../../Atoms/Icon";
import { CopyText } from "../../../Atoms/Typography";
import { FlexItem } from "../../../Helper/FlexBox";
import { NotificationBox } from "../../../Molecules/NotificationBox";
import { css, styled } from "../../../../styles/styled";
import { StyleguideInfoOutlined } from "../../../../svgs";
export var AssetSponsoring = function AssetSponsoring(_ref) {
  var _iconRef$current;

  var sponsoringDetails = _ref.sponsoringDetails,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'tile' : _ref$layout,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? '350px' : _ref$maxWidth;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      tooltipVisible = _useState2[0],
      setTooltipVisible = _useState2[1];

  var iconRef = useRef(null);
  var arrowLeft = (((_iconRef$current = iconRef.current) === null || _iconRef$current === void 0 ? void 0 : _iconRef$current.offsetLeft) || 4) - 4;
  var handleTooltipChange = useCallback(function (newState) {
    return function (e) {
      e.preventDefault();
      e.stopPropagation();
      setTooltipVisible(newState);
    };
  }, []);
  var handleClick = useCallback(function (e) {
    if (!(e.target instanceof HTMLAnchorElement)) {
      e.preventDefault();
    }

    e.stopPropagation();
  }, []);
  return React.createElement(StyledSponsoringWrapper, {
    layout: layout
  }, React.createElement(StyledSponsoringInnerWrapper, {
    onClick: handleTooltipChange(!tooltipVisible)
  }, (sponsoringDetails === null || sponsoringDetails === void 0 ? void 0 : sponsoringDetails.label) && React.createElement(React.Fragment, null, React.createElement(CopyText, {
    toUpperCase: sponsoringDetails.showUppercase,
    fontSize: "sm",
    tag: "div",
    color: "grey4",
    margin: "0 4px 0 0"
  }, sponsoringDetails.label), React.createElement(Icon, {
    ref: iconRef,
    width: 12,
    height: 12,
    color: "grey4",
    display: "inline-flex",
    alignSelf: "center",
    onMouseEnter: handleTooltipChange(true),
    onMouseLeave: handleTooltipChange(false)
  }, React.createElement(StyleguideInfoOutlined, null))), tooltipVisible && React.createElement(NotificationBox, {
    onClick: handleClick,
    title: sponsoringDetails.title,
    body: sponsoringDetails.infoText,
    maxWidth: maxWidth,
    animation: "fadeIn",
    bodyFontSize: "xs",
    bodyMargin: "0",
    isClosable: true,
    color: "white",
    onClose: handleTooltipChange(false),
    tooltip: {
      arrowPosition: 'top-left',
      arrowleft: arrowLeft,
      left: 0,
      top: 30
    }
  })));
};
export var StyledSponsoringWrapper = styled(FlexItem).withConfig({
  displayName: "AssetSponsoring__StyledSponsoringWrapper",
  componentId: "g7ww8b-0"
})(function (_ref2) {
  var layout = _ref2.layout,
      theme = _ref2.theme;
  return css(["display:flex;align-items:center;margin-bottom:", ";margin-left:0;position:relative;min-width:0;"], layout === 'tile' ? theme.spacing.base.xs : '0');
});
var StyledSponsoringInnerWrapper = styled.div.withConfig({
  displayName: "AssetSponsoring__StyledSponsoringInnerWrapper",
  componentId: "g7ww8b-1"
})(["", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return "\n    display: flex;\n    margin-bottom: -".concat(theme.spacing.base.xs, ";\n    padding-bottom: ").concat(theme.spacing.base.xs, ";\n  ");
});
export var StyledSponsoringIconWrapper = styled.div.withConfig({
  displayName: "AssetSponsoring__StyledSponsoringIconWrapper",
  componentId: "g7ww8b-2"
})(["width:100%;display:flex;"]);
//# sourceMappingURL=AssetSponsoring.js.map