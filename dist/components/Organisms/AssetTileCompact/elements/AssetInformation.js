import React from 'react';
import { CopyText, Typo } from "../../../Atoms/Typography";
import { FlexBox } from "../../../Helper/FlexBox";
import { media, styled } from "../../../../styles";
export var StyledAssetInformation = styled.div.withConfig({
  displayName: "AssetInformation__StyledAssetInformation",
  componentId: "sc-1s19ts4-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme;
  return "\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    margin: auto;\n    padding: ".concat(theme.spacing.base.xxs, " 0;\n    padding-left: 0;\n    hyphens: auto;\n    cursor: pointer;\n    text-align: left;\n    align-self: center;\n    \n    ").concat(media.maxSm, " {\n        padding: 0 ").concat(theme.spacing.base.sm, ";\n    }\n  ");
});
export var StyledInformationTypo = styled(Typo).withConfig({
  displayName: "AssetInformation__StyledInformationTypo",
  componentId: "sc-1s19ts4-1"
})(["border-right:1px solid ", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.grey5;
});
export var AssetInformation = function AssetInformation(props) {
  var label = props.label,
      provider = props.provider,
      type = props.type,
      competency = props.competency,
      onClick = props.onClick;
  return React.createElement(StyledAssetInformation, {
    onClick: onClick
  }, React.createElement(CopyText, {
    bold: true,
    tag: "div",
    color: 'grey6',
    fontSize: "sm",
    margin: "0"
  }, label), React.createElement(FlexBox, {
    display: "inline-flex"
  }, React.createElement(StyledInformationTypo, {
    display: "inline-flex",
    tag: "div",
    color: 'grey4',
    fontSize: "xs",
    padding: "0 sm 0 0"
  }, provider), React.createElement(StyledInformationTypo, {
    display: "inline-flex",
    tag: "div",
    color: 'grey4',
    fontSize: "xs",
    padding: "0 sm"
  }, type), React.createElement(Typo, {
    display: "inline-flex",
    tag: "div",
    color: 'grey4',
    fontSize: "xs",
    padding: "0 sm"
  }, competency)));
};
AssetInformation.displayName = 'AssetInformation';
//# sourceMappingURL=AssetInformation.js.map