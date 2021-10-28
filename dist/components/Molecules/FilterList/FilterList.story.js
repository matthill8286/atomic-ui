function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { withState } from '@dump247/storybook-state';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Filters } from "./FilterList";
import { props } from "./FilterList.mocks";
var initialState = {
  items: _toConsumableArray(props.items)
};

var knobs = function knobs(store) {
  return {
    onChange: function onChange(isChecked, id) {
      var newItems = store.state.items.map(function (item) {
        if (item.id === id) {
          return _objectSpread(_objectSpread({}, item), {}, {
            selected: !item.selected
          });
        }

        return item;
      });
      store.set({
        items: newItems
      });
    }
  };
};

storiesOf('Design System/Molecules/FilterList', module).add('Default', withState(_objectSpread({}, initialState), function (store) {
  return React.createElement(Filters, _extends({}, props, {
    items: store.state.items
  }, knobs(store)));
})).add('Disabled', withState(_objectSpread({}, initialState), function (store) {
  return React.createElement(Filters, _extends({}, props, {
    filterDisabled: true,
    items: store.state.items
  }, knobs(store)));
})).add('Loading', withState(_objectSpread({}, initialState), function (store) {
  return React.createElement(Filters, _extends({}, props, {
    items: store.state.items
  }, knobs(store), {
    loading: true
  }));
}));
//# sourceMappingURL=FilterList.story.js.map