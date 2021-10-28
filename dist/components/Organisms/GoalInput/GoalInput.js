import React from 'react';
import { InputRange } from "../../Molecules/InputRange";
import { breakpoints, styled } from "../../../styles";
import { Heading, Typo } from "../../Atoms/Typography";
import { useWindowDimensions } from "../../Helper/useWindowDimensions";
var InputContainer = styled.div.withConfig({
  displayName: "GoalInput__InputContainer",
  componentId: "sc-1wj4jhb-0"
})(["display:flex;flex-direction:column;width:95%;margin:0 auto;"]);
var RangeContainer = styled.div.withConfig({
  displayName: "GoalInput__RangeContainer",
  componentId: "sc-1wj4jhb-1"
})(["display:inline-flex;flex:1;"]);
var StyledInputRange = styled(InputRange).withConfig({
  displayName: "GoalInput__StyledInputRange",
  componentId: "sc-1wj4jhb-2"
})(["display:flex;flex-grow:1;"]);
var StyledTypo = styled(Typo).withConfig({
  displayName: "GoalInput__StyledTypo",
  componentId: "sc-1wj4jhb-3"
})(["align-self:center;height:100%;"]);
var InformationContainer = styled.div.withConfig({
  displayName: "GoalInput__InformationContainer",
  componentId: "sc-1wj4jhb-4"
})([""]);
export var GoalInput = function GoalInput(_ref) {
  var headline = _ref.headline,
      whereInputLabel = _ref.whereInputLabel,
      needInputLabel = _ref.needInputLabel,
      leftInputLabel = _ref.leftInputLabel,
      rightInputLabel = _ref.rightInputLabel,
      input = _ref.input,
      onProficiencyChange = _ref.onProficiencyChange,
      onImportanceChange = _ref.onImportanceChange,
      whereInputName = _ref.whereInputName,
      needInputName = _ref.needInputName,
      _ref$withBubble = _ref.withBubble,
      withBubble = _ref$withBubble === void 0 ? false : _ref$withBubble,
      _ref$showMarks = _ref.showMarks,
      showMarks = _ref$showMarks === void 0 ? false : _ref$showMarks;

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var isMobile = currentBreakpoint < breakpoints.lg;
  return React.createElement(InputContainer, null, React.createElement(InformationContainer, null, !isMobile && React.createElement(Heading, {
    scale: 'level-4',
    margin: 'xs 0',
    bold: true
  }, headline), React.createElement(Typo, {
    tag: 'div',
    color: 'grey4',
    fontSize: 'sm',
    padding: 'xs 0'
  }, whereInputLabel)), React.createElement(RangeContainer, null, React.createElement(StyledTypo, {
    tag: 'div',
    display: 'flex',
    color: 'grey4'
  }, leftInputLabel), React.createElement(StyledInputRange, {
    min: 0,
    max: 1,
    step: 0.1,
    markAmount: 1,
    name: whereInputName,
    onChange: onProficiencyChange,
    value: input.proficiency,
    showMarks: showMarks,
    withBubble: withBubble
  }), React.createElement(StyledTypo, {
    tag: 'div',
    display: 'flex',
    color: 'grey4'
  }, rightInputLabel)), React.createElement(InformationContainer, null, React.createElement(Typo, {
    tag: 'div',
    color: 'grey4',
    fontSize: 'sm',
    padding: 'xs 0'
  }, needInputLabel)), React.createElement(RangeContainer, null, React.createElement(StyledTypo, {
    tag: 'span',
    display: 'flex',
    color: 'grey4'
  }, leftInputLabel), React.createElement(StyledInputRange, {
    min: 0,
    max: 1,
    step: 0.1,
    markAmount: 1,
    name: needInputName,
    onChange: onImportanceChange,
    value: input.importance,
    showMarks: showMarks,
    withBubble: withBubble
  }), React.createElement(StyledTypo, {
    tag: 'span',
    display: 'flex',
    color: 'grey4'
  }, rightInputLabel)));
};
//# sourceMappingURL=GoalInput.js.map