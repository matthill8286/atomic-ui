import React, { useRef } from 'react';
import { CopyText } from "../../Atoms/Typography";
import { StyledTabBarItemContainer } from "./TabBar.styled";
export var TabItem = function TabItem(props) {
  var id = props.id,
      label = props.label,
      data = props.data,
      className = props.className,
      tabGroupName = props.tabGroupName,
      _props$enableSemantic = props.enableSemanticTheme,
      enableSemanticTheme = _props$enableSemantic === void 0 ? false : _props$enableSemantic,
      _props$surfaceColor = props.surfaceColor,
      surfaceColor = _props$surfaceColor === void 0 ? 'surfaceColor' : _props$surfaceColor,
      _props$isDisabled = props.isDisabled,
      isDisabled = _props$isDisabled === void 0 ? false : _props$isDisabled,
      _props$isSelected = props.isSelected,
      isSelected = _props$isSelected === void 0 ? false : _props$isSelected,
      onClick = props.onClick;
  var ref = useRef(null);

  var handleTabClick = function handleTabClick(e) {
    e.preventDefault();

    if (!isDisabled && onClick) {
      onClick(id, data);
    }
  };

  if (isSelected && ref.current) {
    var rect = ref.current.getBoundingClientRect();

    if (rect.right < 0 || rect.left > window.innerWidth) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }

  return React.createElement(StyledTabBarItemContainer, {
    onClick: handleTabClick,
    ref: ref,
    className: className,
    surfaceColor: surfaceColor,
    enableSemanticTheme: enableSemanticTheme
  }, React.createElement("input", {
    id: id,
    name: tabGroupName,
    type: "radio",
    checked: isSelected,
    disabled: isDisabled,
    readOnly: true
  }), React.createElement(CopyText, {
    tag: "label",
    htmlFor: id,
    disabled: isDisabled
  }, label));
};
TabItem.displayName = 'TabItem';
//# sourceMappingURL=TabItem.js.map