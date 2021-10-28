function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { mountWithTheme } from "../../../testRenderer";
import { props as servicesProps } from "./FilterList.mocks";
import { FilterEntry, Filters, StyledSkeleton } from "./FilterList";

var addMockMethods = function addMockMethods(props) {
  return _objectSpread(_objectSpread({}, props), {}, {
    onChange: jest.fn(),
    onIconModalOpen: jest.fn()
  });
};

describe('<Filters />', function () {
  var props;
  beforeEach(function () {
    props = addMockMethods(servicesProps);
  });
  afterEach(function () {
    jest.resetAllMocks();
  });
  test('Renders without crashing', function () {
    var wrapper = mountWithTheme(React.createElement(Filters, props));
    expect(wrapper).toHaveLength(1);
  });
  test('Renders a Skeleton if loading', function () {
    var wrapper = mountWithTheme(React.createElement(Filters, _extends({}, props, {
      loading: true
    })));
    expect(wrapper.find(StyledSkeleton)).toHaveLength(1);
    expect(wrapper.find(FilterEntry)).toHaveLength(0);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
  test('Renders null if no items', function () {
    var wrapper = mountWithTheme(React.createElement(Filters, _extends({}, props, {
      items: []
    })));
    expect(wrapper.isEmptyRender()).toBe(true);
  });
  test('Renders the correct number of items', function () {
    var wrapper = mountWithTheme(React.createElement(Filters, props));
    expect(wrapper.find('StyledSkeleton')).toHaveLength(0);
    expect(wrapper.isEmptyRender()).toBe(false);
    expect(wrapper.find('FilterEntry')).toHaveLength(props.items.length);
  });
  describe('<StyledSkeleton />', function () {
    test('Renders without crashing', function () {
      var wrapper = mountWithTheme(React.createElement(StyledSkeleton, null));
      expect(wrapper).toHaveLength(1);
    });
  });
  describe('<FilterEntry />', function () {
    var entryProps;
    beforeEach(function () {
      entryProps = _objectSpread({}, props.items[1]);
    });
    test('Renders without crashing', function () {
      var wrapper = mountWithTheme(React.createElement(FilterEntry, _extends({}, props, {
        item: entryProps
      })));
      expect(wrapper).toHaveLength(1);
    });
    test('Adds a data-test attribute', function () {
      var wrapper = mountWithTheme(React.createElement(FilterEntry, _extends({}, props, {
        item: entryProps
      })));
      expect(wrapper.find('[data-test="ewb-filters-entry"]')).toHaveLength(2);
    });
  });
});
//# sourceMappingURL=FilterList.test.js.map