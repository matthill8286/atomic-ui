function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { CopyText, Heading } from "../Typography";
import * as React from 'react';
import { Collapse } from "./Collapse";
import { storiesOf } from '@storybook/react';

var Template = function Template(_ref) {
  var args = _extends({}, _ref);

  return React.createElement(Collapse, args, React.createElement(Heading, {
    scale: "level-3"
  }, "Lorem Ipsum is simply dummy text"), React.createElement(CopyText, null, "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
};

var baseArgs = {
  isOpen: true,
  collapsedHeight: 28
};
storiesOf('Design System/Molecules/Collapse', module).add('Default', function () {
  return React.createElement(Template, baseArgs);
});
//# sourceMappingURL=Collapse.story.js.map