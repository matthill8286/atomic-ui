import * as React from 'react';
import { create } from 'react-test-renderer';
import { useWindowDimensions } from "./useWindowDimensions";

var WithSizeHookComponent = function WithSizeHookComponent() {
  var _useWindowDimensions = useWindowDimensions(),
      height = _useWindowDimensions.height,
      width = _useWindowDimensions.width,
      breakpoint = _useWindowDimensions.breakpoint;

  return React.createElement("div", null, "Breakpoint: ".concat(breakpoint, " View width: ").concat(width, " View height: ").concat(height));
};

describe('withSizeHook', function () {
  it('finds the size from window', function () {
    global.window = {
      innerWidth: 850,
      innerHeight: 200
    };
    var comp = create(React.createElement(WithSizeHookComponent, null));
    var actual = comp.toJSON().children[0];
    expect(actual).toBe('Breakpoint: 1008 View width: 1024 View height: 768');
  });
});
//# sourceMappingURL=useWindowDimensions.test.js.map