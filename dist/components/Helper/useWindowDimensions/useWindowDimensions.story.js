import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useWindowDimensions } from "./useWindowDimensions";

var WithSizeHookComponent = function WithSizeHookComponent() {
  var _useWindowDimensions = useWindowDimensions(),
      height = _useWindowDimensions.height,
      width = _useWindowDimensions.width,
      breakpoint = _useWindowDimensions.breakpoint;

  return React.createElement("div", null, "Breakpoint: ".concat(breakpoint, " View width: ").concat(width, " View height: ").concat(height));
};

storiesOf('Design System/Helper/withSizeHook', module).add('Default', function () {
  return React.createElement(WithSizeHookComponent, null);
});
//# sourceMappingURL=useWindowDimensions.story.js.map