function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { Typo } from "../../components/Atoms/Typography";
import { FlexBox } from "../../components/Helper";
import { styled } from "../../styles/styled";
import { useTheme } from "../../utils/helper";
var Container = styled.div.withConfig({
  displayName: "ColorPalette__Container",
  componentId: "sc-1xwyp45-0"
})(["display:grid;grid-gap:", ";grid-template-columns:repeat(auto-fit,minmax(150px,1fr));"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.md;
});
var Color = styled.div.withConfig({
  displayName: "ColorPalette__Color",
  componentId: "sc-1xwyp45-1"
})(["border-radius:100%;width:50px;height:50px;margin:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return "0 ".concat(theme.spacing.base.xs, " 0 0");
});
export var ColorPalette = function ColorPalette() {
  var theme = useTheme();
  var colors = Object.entries(theme.color);
  return React.createElement(Container, null, colors.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        backgroundColor = _ref4[1];

    return React.createElement(FlexBox, {
      key: key,
      flexDirection: "row",
      alignItems: "center"
    }, React.createElement(Color, {
      style: {
        backgroundColor: backgroundColor
      }
    }), React.createElement(Typo, null, key));
  }));
};
//# sourceMappingURL=ColorPalette.js.map