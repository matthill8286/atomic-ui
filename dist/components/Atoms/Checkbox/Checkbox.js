function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Selectable } from "../Selectable";
export var Checkbox = function Checkbox(_ref) {
  var props = _extends({}, _ref);

  return React.createElement(Selectable, _extends({
    type: "checkbox"
  }, props, {
    "data-test": 'checkbox'
  }));
};
//# sourceMappingURL=Checkbox.js.map