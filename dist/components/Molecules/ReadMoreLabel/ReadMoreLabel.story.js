function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CopyText } from "../../Atoms/Typography";
import { styled } from "../../../styles/styled";
import { ReadMoreLabel } from "./ReadMoreLabel";
import { Checkbox } from "../../Atoms/Checkbox/Checkbox";
import { boolean, number, text } from '@storybook/addon-knobs';
import { props } from "../FilterList/FilterList.mocks";
import { Filters } from "../FilterList";
var StyledCopyText = styled(CopyText).withConfig({
  displayName: "ReadMoreLabelstory__StyledCopyText",
  componentId: "sc-1wsfpqg-0"
})(["margin:0;"]);

var knobs = function knobs() {
  return {
    isOpen: boolean('Is Open', false),
    showMoreLabel: text('Show More', 'Show'),
    showLessLabel: text('Show Less', 'Less'),
    collapsedHeight: number('Collapse Height', 40)
  };
};

var baseArgs = {
  isOpen: false,
  collapsedHeight: 40,
  htmlFor: 'id',
  showMoreLabel: 'Show More',
  showLessLabel: 'Show Less'
};

var Default = function Default(_ref) {
  var args = _extends({}, _ref);

  var _React$useState = React.useState(!!args.isOpen),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  return React.createElement(ReadMoreLabel, _extends({}, args, {
    isOpen: isOpen,
    onChange: function onChange(collapsed) {
      setIsOpen(!collapsed);
    }
  }), React.createElement(StyledCopyText, {
    bold: true,
    withMargins: true,
    margin: "0"
  }, "Lorem Ipsum is simply dummy text"), React.createElement(StyledCopyText, null, "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
};

var initialState = {
  items: _toConsumableArray(props.items)
};

var CheckboxTemplate = function CheckboxTemplate(_ref2) {
  var args = _extends({}, _ref2);

  var _React$useState3 = React.useState(!!args.isOpen),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isOpen = _React$useState4[0],
      setIsOpen = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isChecked = _React$useState6[0],
      setIsChecked = _React$useState6[1];

  return React.createElement(ReadMoreLabel, _extends({}, args, {
    isOpen: isOpen,
    onChange: function onChange(collapsed) {
      setIsOpen(!collapsed);
    }
  }), React.createElement(Filters, _extends({}, props, {
    items: initialState.items,
    onChange: function onChange() {
      return setIsChecked(true);
    }
  })));
};

var Template = function Template(_ref3) {
  var args = _extends({}, _ref3);

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isChecked = _React$useState8[0],
      setIsChecked = _React$useState8[1];

  var _React$useState9 = React.useState(!!args.isOpen),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      isOpen = _React$useState10[0],
      setIsOpen = _React$useState10[1];

  return React.createElement(Checkbox, {
    name: "checkbox",
    selectableId: "selectableId",
    onChangeValue: function onChangeValue(checked) {
      setIsChecked(checked);
    },
    isChecked: isChecked,
    label: React.createElement(ReadMoreLabel, _extends({}, args, {
      isOpen: isOpen,
      onClick: function onClick() {
        setIsChecked(!isChecked);
      },
      onChange: function onChange(collapsed) {
        setIsOpen(!collapsed);
      }
    }), React.createElement(StyledCopyText, {
      bold: true,
      withMargins: true,
      margin: "0"
    }, "Lorem Ipsum is simply dummy text"), React.createElement(StyledCopyText, null, "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))
  });
};

storiesOf('Design System/Molecules/Read More Label', module).add('Default', function () {
  return React.createElement(Default, {
    htmlFor: "id",
    collapsedHeight: 40,
    showLessLabel: 'Show Less',
    showMoreLabel: 'Show More'
  });
}).add('Template', function () {
  return React.createElement(Template, {
    htmlFor: "id",
    collapsedHeight: 40,
    showLessLabel: 'Show Less',
    showMoreLabel: 'Show More'
  });
}).add('Filter Template', function () {
  return React.createElement(CheckboxTemplate, {
    htmlFor: "id",
    collapsedHeight: 80,
    showLessLabel: 'Show Less',
    showMoreLabel: 'Show More'
  });
});
//# sourceMappingURL=ReadMoreLabel.story.js.map