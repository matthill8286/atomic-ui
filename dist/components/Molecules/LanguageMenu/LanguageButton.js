import React from 'react';
import { DropdownButton } from "../DropdownButton";
import { media, styled } from "../../../styles";
var StyledLanguageButton = styled(DropdownButton).withConfig({
  displayName: "LanguageButton__StyledLanguageButton",
  componentId: "sc-1ck6n9f-0"
})(["display:none;", "{display:block;}"], media.md);
export var LanguageButton = React.memo(function (_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      isOpen = _ref.isOpen,
      additionalLabel = _ref.additionalLabel,
      width = _ref.width,
      height = _ref.height,
      primaryIcon = _ref.primaryIcon;
  return React.createElement(StyledLanguageButton, {
    label: label,
    additionalLabel: additionalLabel,
    secondaryIcon: true,
    width: width || height,
    height: height,
    primaryIcon: primaryIcon,
    isOpen: isOpen,
    onClick: onClick
  });
});
//# sourceMappingURL=LanguageButton.js.map