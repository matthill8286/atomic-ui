function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { CopyText, Heading } from "../../Typography";
import { FlexBox, FlexItem, Spacer } from "../../../..";
import { styled } from "../../../../styles/styled";
import { InfoText as InfoLine } from "../../Typography/InfoText";
var headingProps = {
  scale: 'level-5',
  tag: 'p',
  color: 'black',
  lineHeight: 'sm',
  fontFamily: 'default'
};
export var StyledTableDescription = styled(CopyText).withConfig({
  displayName: "CustomTableMockElements__StyledTableDescription",
  componentId: "sc-1ogzbj3-0"
})(["margin-left:12px;"]);
export var StyledTableDataWrapper = styled(FlexItem).withConfig({
  displayName: "CustomTableMockElements__StyledTableDataWrapper",
  componentId: "sc-1ogzbj3-1"
})(["margin-left:12px;"]);
export var TableTitle = function TableTitle(_ref) {
  var assetName = _ref.assetName,
      provider = _ref.provider;
  return React.createElement(React.Fragment, null, React.createElement(Heading, _extends({}, headingProps, {
    margin: "0",
    limitLines: 2,
    "data-test": "asset-title"
  }), React.createElement(CopyText, {
    fontSize: "sm",
    tag: "span",
    bold: true,
    "data-test": "asset-provider"
  }, provider), assetName.replace(provider || '', '')));
};
export var TableWithDescription = function TableWithDescription(_ref2) {
  var assetWithTitle = _ref2.assetWithTitle,
      description = _ref2.description;
  return React.createElement(React.Fragment, null, React.createElement(TableTitle, assetWithTitle), description && React.createElement(FlexBox, {
    flexDirection: "row"
  }, React.createElement(StyledTableDescription, {
    fontSize: "sm",
    tag: "span",
    "data-test": "asset-description"
  }, description)));
};
export var TableData = function TableData(_ref3) {
  var asset = _ref3.asset,
      subTexts = _ref3.subTexts;
  return React.createElement(React.Fragment, null, React.createElement(TableWithDescription, asset), React.createElement(Spacer, {
    size: "xs"
  }), asset.description ? React.createElement(FlexBox, {
    flexDirection: "row"
  }, React.createElement(StyledTableDataWrapper, null, subTexts.map(function (subText, index) {
    return React.createElement(CopyText, {
      key: index,
      fontSize: "xxs",
      limitLines: 0,
      margin: "",
      tag: "p"
    }, subText);
  }))) : subTexts.map(function (subText, index) {
    return React.createElement(CopyText, {
      key: index,
      fontSize: "xxs",
      limitLines: 0,
      margin: "",
      tag: "p"
    }, subText);
  }));
};
export var CustomText = function CustomText(_ref4) {
  var text = _ref4.text,
      _ref4$textWeight = _ref4.textWeight,
      textWeight = _ref4$textWeight === void 0 ? 'semibold' : _ref4$textWeight,
      _ref4$fontSize = _ref4.fontSize,
      fontSize = _ref4$fontSize === void 0 ? 'xs' : _ref4$fontSize,
      additionalInfo = _ref4.additionalInfo,
      _ref4$additionalInfoT = _ref4.additionalInfoTextAlign,
      additionalInfoTextAlign = _ref4$additionalInfoT === void 0 ? 'right' : _ref4$additionalInfoT;
  return React.createElement(React.Fragment, null, React.createElement(Heading, {
    tag: "h1",
    scale: "level-2",
    weight: textWeight,
    fontSize: fontSize
  }, text), additionalInfo && React.createElement(InfoLine, {
    fontSize: 'xs',
    textAlign: additionalInfoTextAlign
  }, additionalInfo));
};
//# sourceMappingURL=CustomTableMockElements.js.map