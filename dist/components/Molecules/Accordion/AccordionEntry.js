import React from 'react';
import { Foldable } from "../../Atoms/Foldable";
import { IconMinusThin, IconPlusThin } from '@excelwithbusiness/webmobile-svg-library';
import { StyledAccordionEntry, StyledEntryContent, StyledIcon, StyledLabel, StyledLabelHeading } from "./Accordion.styled";

var toggleEntry = function toggleEntry(id, onChange) {
  onChange(id);
};

export var AccordionEntry = function AccordionEntry(_ref) {
  var title = _ref.title,
      details = _ref.details,
      id = _ref.id,
      onChange = _ref.onChange,
      _ref$customLabelHeadi = _ref.customLabelHeading,
      customLabelHeading = _ref$customLabelHeadi === void 0 ? {
    tag: 'div',
    fontSize: 'sm',
    bold: 'bold',
    margin: '0 sm',
    color: 'grey5'
  } : _ref$customLabelHeadi,
      labelPadding = _ref.labelPadding,
      entryPadding = _ref.entryPadding,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      looksOpenInitiallyFromBreakpoint = _ref.looksOpenInitiallyFromBreakpoint,
      _ref$isLarge = _ref.isLarge,
      isLarge = _ref$isLarge === void 0 ? false : _ref$isLarge,
      _ref$noBorderTop = _ref.noBorderTop,
      noBorderTop = _ref$noBorderTop === void 0 ? false : _ref$noBorderTop,
      _ref$withIconsOnRight = _ref.withIconsOnRight,
      withIconsOnRight = _ref$withIconsOnRight === void 0 ? true : _ref$withIconsOnRight,
      withCustomIcon = _ref.withCustomIcon,
      customIcon = _ref.customIcon;
  return React.createElement(StyledAccordionEntry, {
    id: id,
    noBorder: noBorderTop,
    className: isOpen ? 'ewb-accordion-open' : 'ewb-accordion-closed'
  }, React.createElement(StyledLabel, {
    "data-test": 'accordion-header',
    padding: labelPadding,
    isLarge: isLarge,
    withIconsOnRight: withIconsOnRight,
    onClick: function onClick() {
      return toggleEntry(id, onChange);
    }
  }, React.createElement(StyledIcon, {
    width: isLarge ? 28 : 24,
    height: isLarge ? 28 : 24,
    rotate: withCustomIcon && isOpen ? -90 : 90
  }, !withCustomIcon ? isOpen ? React.createElement(IconMinusThin, null) : React.createElement(IconPlusThin, null) : customIcon), title && React.createElement(StyledLabelHeading, {
    tag: customLabelHeading.tag,
    fontSize: customLabelHeading.size,
    color: customLabelHeading.color,
    margin: customLabelHeading.margin,
    isLarge: isLarge,
    weight: customLabelHeading.bold,
    withoutIconSpace: true,
    limitLines: 2
  }, title)), React.createElement(Foldable, {
    isOpen: isOpen,
    looksOpenInitiallyFromBreakpoint: looksOpenInitiallyFromBreakpoint
  }, React.createElement(StyledEntryContent, {
    tag: "div",
    isLarge: isLarge,
    padding: entryPadding
  }, details)));
};
//# sourceMappingURL=AccordionEntry.js.map