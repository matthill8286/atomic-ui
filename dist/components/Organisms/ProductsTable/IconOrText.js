import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { CopyText } from "../../Atoms/Typography/CopyText";
import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
import { IconCross, IconDone } from "../../../svgs";
var IconOrTextWrapper = styled.div.withConfig({
  displayName: "IconOrText__IconOrTextWrapper",
  componentId: "sc-1usgs68-0"
})(["text-align:center;svg{max-width:15px;max-height:15px;fill:", ";}", "{text-align:left;}"], function (_ref) {
  var theme = _ref.theme,
      textType = _ref.textType;
  return textType === 'check true' ? theme.color.success : theme.color.error;
}, media.sm);
export var IconOrText = function IconOrText(_ref2) {
  var textType = _ref2.textType;

  var getIconOrText = function getIconOrText() {
    return textType === 'check true' ? React.createElement(Icon, {
      className: "mms-pds-table__check-icon"
    }, React.createElement(IconDone, null)) : textType === 'check false' ? React.createElement(Icon, {
      className: 'mms-pds-table__cross-icon'
    }, React.createElement(IconCross, {
      viewBox: "0 0 100 100"
    })) : React.createElement(CopyText, {
      tag: 'span',
      fontSize: 'sm'
    }, textType);
  };

  return React.createElement(IconOrTextWrapper, {
    textType: textType
  }, getIconOrText());
};
//# sourceMappingURL=IconOrText.js.map