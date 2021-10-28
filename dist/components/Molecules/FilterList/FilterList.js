function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Selectable } from "../../Atoms/Selectable";
import { StyledEntry, StyledEntryText, StyledSkeleton } from "./FilterList.styled";

var FilterEntry = function FilterEntry(_ref) {
  var onChange = _ref.onChange,
      freeLabel = _ref.freeLabel,
      item = _ref.item,
      filterDisabled = _ref.filterDisabled,
      onDisabledFiltersClick = _ref.onDisabledFiltersClick;
  var id = item.id,
      filterType = item.filterType,
      selected = item.selected;
  var inputId = "".concat(filterType, "-").concat(id);
  return React.createElement(StyledEntry, {
    "data-test": 'ewb-filters-entry',
    onClick: onDisabledFiltersClick,
    isDisabled: !!filterDisabled
  }, React.createElement(Selectable, {
    type: "checkbox",
    selectableId: inputId,
    name: inputId,
    label: "",
    value: id,
    isChecked: !!selected,
    state: filterDisabled ? 'disabled' : 'idle',
    onChangeValue: function onChangeValue(isCheck, value) {
      return onChange(isCheck, value);
    }
  }, React.createElement(StyledEntryText, null, item.name)));
};

var Filters = function Filters(props) {
  var items = props.items,
      loading = props.loading;
  return loading ? React.createElement(StyledSkeleton, null) : React.createElement(React.Fragment, null, items && items.length > 0 && items.map(function (item, index) {
    return React.createElement(FilterEntry, _extends({}, _objectSpread(_objectSpread({}, props), {
      index: index
    }), {
      item: item,
      key: index
    }));
  }));
};

export { Filters, StyledSkeleton, FilterEntry };
//# sourceMappingURL=FilterList.js.map