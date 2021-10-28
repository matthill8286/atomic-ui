import React from 'react';
import { CopyText } from "../../Atoms/Typography";
import { IconDone } from '@excelwithbusiness/webmobile-svg-library';
import { StyledDone, StyledDropdownOption } from "./Dropdown.styled";
export var DropdownOption = function DropdownOption(props) {
  var active = props.active,
      label = props.label,
      onClick = props.onClick,
      checkmark = props.checkmark;
  return React.createElement(StyledDropdownOption, {
    active: active,
    onClick: onClick,
    checkmark: checkmark
  }, checkmark && active && React.createElement(StyledDone, {
    width: 16,
    height: 16,
    color: "grey5"
  }, React.createElement(IconDone, null)), React.createElement(CopyText, {
    tag: "strong",
    color: active ? 'grey6' : 'grey4',
    fontSize: "sm"
  }, label));
};
DropdownOption.displayName = 'DropdownOption';
//# sourceMappingURL=DropdownOption.js.map