import * as React from 'react';
import { Typo } from "../Typography";
import { StyledAnchorTag, StyledTagWrapper } from "./Tag.styled";

var TagText = function TagText(_ref) {
  var color = _ref.color,
      children = _ref.children,
      weight = _ref.weight;
  return React.createElement(Typo, {
    weight: weight,
    color: !color ? 'grey3' : color,
    fontSize: 'xs',
    lineHeight: "xxs"
  }, children);
};

export var Tag = function Tag(_ref2) {
  var text = _ref2.text,
      href = _ref2.href,
      targetBlank = _ref2.targetBlank,
      marginBottom = _ref2.marginBottom,
      marginRight = _ref2.marginRight,
      color = _ref2.color,
      weight = _ref2.weight,
      padding = _ref2.padding,
      className = _ref2.className;
  return React.createElement(StyledTagWrapper, {
    className: className,
    marginBottom: marginBottom,
    marginRight: marginRight,
    hasLink: !!href,
    padding: padding,
    color: color
  }, href ? React.createElement(StyledAnchorTag, {
    href: href,
    target: targetBlank ? '_blank' : undefined
  }, React.createElement(TagText, {
    weight: weight,
    color: color
  }, text)) : React.createElement(TagText, {
    color: color
  }, text));
};
//# sourceMappingURL=Tag.js.map