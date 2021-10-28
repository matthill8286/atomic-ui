import React from 'react';
import { Button } from "../../Atoms/Button";
import { Heading } from "../../Atoms/Typography";
import { ShowMore } from "../../Atoms/ShowMore";
export var CallToActionElement = function CallToActionElement(_ref) {
  var element = _ref.element,
      showMore = _ref.showMore,
      showReadMore = _ref.showReadMore,
      richTextCopy = _ref.richTextCopy;
  return React.createElement(React.Fragment, null, React.createElement(Heading, {
    scale: "level-1",
    tag: "h1",
    weight: "regular",
    margin: "0",
    padding: undefined
  }, element === null || element === void 0 ? void 0 : element.headline), showReadMore && showMore ? React.createElement(ShowMore, {
    lineHeight: 19,
    fontSize: 14,
    fontColor: "grey5",
    fadeOutBackgroundColor: "white",
    labelAlignment: "flex-end",
    fadeOutHeight: 35,
    numOfLines: (showMore === null || showMore === void 0 ? void 0 : showMore.numOfLines) || 4,
    showMoreText: showMore === null || showMore === void 0 ? void 0 : showMore.showMoreText,
    showLessText: showMore === null || showMore === void 0 ? void 0 : showMore.showLessText
  }, richTextCopy) : richTextCopy, (element === null || element === void 0 ? void 0 : element.buttonLabel) && React.createElement(Button, {
    href: element === null || element === void 0 ? void 0 : element.href,
    to: element === null || element === void 0 ? void 0 : element.route,
    actionType: "primary",
    size: "md",
    weight: "bold"
  }, element === null || element === void 0 ? void 0 : element.buttonLabel));
};
//# sourceMappingURL=CallToActionElement.js.map