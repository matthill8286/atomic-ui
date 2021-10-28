import React from 'react';
import { DropdownButton } from "../DropdownButton";
import { media, styled } from "../../../styles";
import { IconUser as UserIcon } from '@excelwithbusiness/webmobile-svg-library';
export var StyledDropdownButton = styled(DropdownButton).withConfig({
  displayName: "NavigationButton__StyledDropdownButton",
  componentId: "gqdr9s-0"
})(["display:none;", "{display:inline;}"], media.sm);
export var NavigationButton = React.memo(function (_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      isOpen = _ref.isOpen,
      additionalLabel = _ref.additionalLabel,
      width = _ref.width,
      height = _ref.height,
      pictureSrc = _ref.pictureSrc;
  return React.createElement(StyledDropdownButton, {
    label: label,
    width: width || height,
    height: height,
    additionalLabel: additionalLabel,
    primaryIcon: React.createElement(UserIcon, {
      height: 40,
      width: 40
    }),
    isOpen: isOpen,
    onClick: onClick,
    pictureSrc: pictureSrc
  });
});
//# sourceMappingURL=NavigationButton.js.map