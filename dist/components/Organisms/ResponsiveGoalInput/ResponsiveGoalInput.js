import * as React from 'react';
import { Accordion } from "../../Molecules/Accordion";
import { MediaStyleSwitch } from "../../Helper/MediaStyleSwitch";
import { GoalInput } from "../GoalInput/GoalInput";
import { StyleguideArrow } from '@excelwithbusiness/webmobile-svg-library';
export var ResponsiveGoalInput = function ResponsiveGoalInput(_ref) {
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
      withBubble = _ref.withBubble,
      showMarks = _ref.showMarks,
      _ref$isOpenInitially = _ref.isOpenInitially,
      isOpenInitially = _ref$isOpenInitially === void 0 ? false : _ref$isOpenInitially;
  var goalInputOptions = [{
    title: headline,
    id: input.id.toString(),
    details: React.createElement(GoalInput, {
      input: input,
      headline: headline,
      whereInputLabel: whereInputLabel,
      needInputLabel: needInputLabel,
      leftInputLabel: leftInputLabel,
      rightInputLabel: rightInputLabel,
      onProficiencyChange: onProficiencyChange,
      onImportanceChange: onImportanceChange,
      whereInputName: whereInputName,
      needInputName: needInputName,
      withBubble: withBubble,
      showMarks: showMarks
    }),
    isOpenInitially: isOpenInitially,
    noBorderTop: true
  }];

  if (!input) {
    return null;
  }

  return React.createElement(React.Fragment, null, React.createElement(MediaStyleSwitch, {
    query: "lg",
    activeDisplay: "block",
    inactiveDisplay: "none"
  }, React.createElement(GoalInput, {
    input: input,
    headline: headline,
    whereInputLabel: whereInputLabel,
    needInputLabel: needInputLabel,
    leftInputLabel: leftInputLabel,
    rightInputLabel: rightInputLabel,
    onProficiencyChange: onProficiencyChange,
    onImportanceChange: onImportanceChange,
    whereInputName: whereInputName,
    needInputName: needInputName,
    withBubble: withBubble,
    showMarks: showMarks
  })), React.createElement(MediaStyleSwitch, {
    query: "maxLg",
    activeDisplay: "block",
    inactiveDisplay: "none"
  }, React.createElement(Accordion, {
    entries: goalInputOptions,
    isLarge: false,
    withIconsOnRight: true,
    withCustomIcon: true,
    customIcon: React.createElement(StyleguideArrow, null)
  })));
};
//# sourceMappingURL=ResponsiveGoalInput.js.map