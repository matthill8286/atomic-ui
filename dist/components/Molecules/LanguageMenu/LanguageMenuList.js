import React from 'react';
import { Icon } from "../../Atoms/Icon";
import { CopyText } from "../../Atoms/Typography";
import { styled } from "../../../styles";
import { IconDone } from '@excelwithbusiness/webmobile-svg-library';
var StyledTickIcon = styled(Icon).withConfig({
  displayName: "LanguageMenuList__StyledTickIcon",
  componentId: "sc-12birvz-0"
})(["pointer-events:none;position:absolute;top:14px;left:22px;"]);
export var StyledLanguageMenuOption = styled.div.withConfig({
  displayName: "LanguageMenuList__StyledLanguageMenuOption",
  componentId: "sc-12birvz-1"
})(["", ""], function (_ref) {
  var theme = _ref.theme;
  return "\n    display: block;\n    position: relative;\n    max-width: 100%;\n    background: ".concat(theme.color.white, ";\n    padding: ").concat(theme.spacing.base.sm, " ").concat(theme.spacing.base.sm, " ").concat(theme.spacing.base.sm, " ").concat(theme.spacing.base.xxxl, ";\n    hyphens: auto;\n    text-align: left;\n\n    &:hover {\n      cursor: pointer;\n      background: ").concat(theme.color.grey2, ";\n      > div {\n        color: ").concat(theme.color.grey6, ";\n      }\n      }\n  ");
});
export var LanguageMenuList = function LanguageMenuList(props) {
  var _onClick = props.onClick,
      languages = props.languages,
      currentIndex = props.currentIndex;
  return languages.map(function (language, index) {
    var active = index === currentIndex;
    return React.createElement(StyledLanguageMenuOption, {
      onClick: function onClick() {
        return _onClick(index, language);
      },
      key: language.id
    }, active && React.createElement(StyledTickIcon, {
      width: 24,
      height: 24,
      color: "grey5"
    }, React.createElement(IconDone, null)), React.createElement(CopyText, {
      tag: "div",
      fontSize: "xs",
      weight: "regular",
      lineHeight: "xs",
      color: "grey5",
      margin: "0"
    }, language.label));
  });
};
LanguageMenuList.displayName = 'LanguageMenuList';
//# sourceMappingURL=LanguageMenuList.js.map