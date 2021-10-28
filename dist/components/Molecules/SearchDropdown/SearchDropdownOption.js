import React, { forwardRef } from 'react';
import { CopyText, Typo } from "../../Atoms/Typography";
import { FlexBox } from "../../Helper/FlexBox";
import { StyledBorderedTypo, StyledSearchDropdownOption } from "./SearchDropdown.styled";
export var SearchDropdownOption = forwardRef(function (props, ref) {
  var active = props.active,
      label = props.label,
      provider = props.provider,
      type = props.type,
      competency = props.competency,
      onClick = props.onClick;
  return React.createElement(StyledSearchDropdownOption, {
    active: active,
    onClick: onClick,
    ref: ref
  }, React.createElement(CopyText, {
    tag: "div",
    color: active ? 'grey6' : 'grey4',
    bold: active,
    fontSize: "sm",
    margin: "0 0 xs 0"
  }, label), React.createElement(FlexBox, {
    display: "inline-flex"
  }, React.createElement(StyledBorderedTypo, {
    display: "inline-flex",
    tag: "div",
    color: 'grey4',
    fontSize: "xs",
    padding: "0 sm 0 0"
  }, provider), React.createElement(StyledBorderedTypo, {
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
});
SearchDropdownOption.displayName = 'SearchDropdownOption';
//# sourceMappingURL=SearchDropdownOption.js.map