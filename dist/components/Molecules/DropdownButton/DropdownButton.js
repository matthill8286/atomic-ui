import React from 'react';
import { Card } from "../../Atoms/Card";
import { Icon } from "../../Atoms/Icon";
import { CopyText } from "../../Atoms/Typography";
import { css, styled } from "../../../styles";
import { StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
import { Button } from "../../Atoms/Button";
import { Picture } from "../../Atoms/Picture";
import { isNonEmptyString } from "../../Helper/String";
export var StyledContainer = styled.div.withConfig({
  displayName: "DropdownButton__StyledContainer",
  componentId: "fppv5a-0"
})(["order:3;position:relative;"]);
export var StyledDropdown = styled(Card).attrs(function () {
  return {
    elevation: 2,
    shape: 'rounded-small',
    noBorder: 'none',
    padding: '0'
  };
}).withConfig({
  displayName: "DropdownButton__StyledDropdown",
  componentId: "fppv5a-1"
})(["position:", ";left:-100px;top:", ";width:280px;margin:", " 0 0 0;opacity:0;visibility:hidden;z-index:99;transform:translateY(-", ");transition:", ";", ""], function (_ref) {
  var isMobile = _ref.isMobile;
  return isMobile ? "relative" : "absolute";
}, function (_ref2) {
  var theme = _ref2.theme,
      isMobile = _ref2.isMobile;
  return isMobile ? 0 : theme.spacing.base.xxxl;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.base.sm;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.sm;
}, function (_ref5) {
  var _ref5$theme$transitio = _ref5.theme.transition,
      short = _ref5$theme$transitio.short,
      defaultEasing = _ref5$theme$transitio.defaultEasing;
  return "visibility ".concat(short, " ").concat(defaultEasing, ", opacity ").concat(short, " ").concat(defaultEasing, ", transform ").concat(short, " ").concat(defaultEasing);
}, function (_ref6) {
  var showDropdown = _ref6.showDropdown;
  return showDropdown ? css(["opacity:1;visibility:visible;transform:translateY(0);"]) : '';
});
var StyledButton = styled(Button).withConfig({
  displayName: "DropdownButton__StyledButton",
  componentId: "fppv5a-2"
})(["padding:0 ", ";align-items:center;background-color:transparent;border-color:transparent;border-radius:", ";cursor:pointer;:active,:focus{outline:none;}:hover{box-shadow:none;}", "{padding:0;}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){width:130px;}&::-moz-focus-inner{border:0;}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.base.xs;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.dimension.borderRadius1;
}, Icon);
var StyledContentGrid = styled.div.withConfig({
  displayName: "DropdownButton__StyledContentGrid",
  componentId: "fppv5a-3"
})(["display:flex;flex-wrap:wrap;"]);
var StyledLabel = styled(CopyText).attrs(function () {
  return {
    tag: 'span',
    bold: true,
    color: 'grey5',
    fontSize: 'sm'
  };
}).withConfig({
  displayName: "DropdownButton__StyledLabel",
  componentId: "fppv5a-4"
})(["justify-self:start;white-space:nowrap;"]);
var StyledIcon = styled(Icon).attrs(function () {
  return {
    color: 'grey5',
    alignContent: 'center'
  };
}).withConfig({
  displayName: "DropdownButton__StyledIcon",
  componentId: "fppv5a-5"
})(["margin:0;align-self:center;"]);
var StyledAdditionalLabel = styled(CopyText).attrs(function () {
  return {
    tag: 'span',
    color: 'grey5',
    lineHeight: 'sm'
  };
}).withConfig({
  displayName: "DropdownButton__StyledAdditionalLabel",
  componentId: "fppv5a-6"
})(["grid-column:1 / 3;justify-self:start;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:9em;min-height:", ";"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.font.lineHeight.sm;
});
var StyledPictureElement = styled(Picture).withConfig({
  displayName: "DropdownButton__StyledPictureElement",
  componentId: "fppv5a-7"
})(["img{border-radius:50%;}"]);
export var DropdownButton = function DropdownButton(_ref10) {
  var onClick = _ref10.onClick,
      additionalLabel = _ref10.additionalLabel,
      _ref10$isOpen = _ref10.isOpen,
      isOpen = _ref10$isOpen === void 0 ? false : _ref10$isOpen,
      label = _ref10.label,
      height = _ref10.height,
      width = _ref10.width,
      _ref10$secondaryIcon = _ref10.secondaryIcon,
      secondaryIcon = _ref10$secondaryIcon === void 0 ? false : _ref10$secondaryIcon,
      primaryIcon = _ref10.primaryIcon,
      className = _ref10.className,
      pictureSrc = _ref10.pictureSrc;
  return React.createElement(StyledButton, {
    className: className,
    actionType: "ghost",
    onClick: onClick
  }, React.createElement(StyledContentGrid, null, React.createElement(StyledLabel, null, label), !isNonEmptyString(pictureSrc) && primaryIcon && React.createElement(StyledIcon, {
    height: height || width,
    width: width,
    padding: "0"
  }, primaryIcon), isNonEmptyString(pictureSrc) && React.createElement(StyledPictureElement, {
    height: height || width,
    width: width,
    src: pictureSrc,
    alt: "Picture"
  }), secondaryIcon && React.createElement(StyledIcon, {
    width: 16,
    height: 16,
    rotate: isOpen ? 270 : 90,
    animate: true
  }, React.createElement(StyleguideArrow, null)), additionalLabel && React.createElement(StyledAdditionalLabel, null, additionalLabel)));
};
//# sourceMappingURL=DropdownButton.js.map