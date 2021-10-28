function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { forwardRef, useImperativeHandle } from 'react';
import { useContext, useEffect, useReducer } from 'react';
import { useWindowDimensions } from "../../Helper/useWindowDimensions";
import { AccordionEntry } from "./AccordionEntry";
import { ThemeContext } from "../../../styles/styled";

var openEntriesReducer = function openEntriesReducer(state, action) {
  switch (action.type) {
    case 'open':
      return action.shouldCloseOthers ? [action.id] : state.concat(action.id);

    case 'close':
      return state.filter(function (id) {
        return id !== action.id;
      });

    case 'openBatch':
      return action.entries.reduce(function (acc, entry, index) {
        return acc.concat(entry.id || index.toString());
      }, []);

    case 'checkNewEntries':
      return state.concat(action.entries.filter(function (entry) {
        return typeof entry.id === 'string' && entry.isOpenInitially;
      }).map(function (_ref) {
        var id = _ref.id;
        return id;
      }));

    default:
      return state;
  }
};

var getInitialState = function getInitialState(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 3),
      openedIndex = _ref3[0],
      isUnfoldable = _ref3[1],
      entries = _ref3[2];

  if (isUnfoldable) {
    return entries.reduce(function (acc, entry, index) {
      return entry.isOpenInitially || openedIndex === index ? acc.concat(entry.id || index.toString()) : acc;
    }, []);
  }

  var openEntry = entries.find(function (entry) {
    return !!entry.isOpenInitially;
  });

  if (openEntry) {
    return [openEntry.id || entries.indexOf(openEntry).toString()];
  }

  if (openedIndex > -1 && openedIndex < entries.length) {
    return [entries[openedIndex].id || openedIndex.toString()];
  }

  return [];
};

export var Accordion = forwardRef(function (_ref4, ref) {
  var entries = _ref4.entries,
      _ref4$isUnfoldable = _ref4.isUnfoldable,
      isUnfoldable = _ref4$isUnfoldable === void 0 ? false : _ref4$isUnfoldable,
      _ref4$openedIndex = _ref4.openedIndex,
      openedIndex = _ref4$openedIndex === void 0 ? -1 : _ref4$openedIndex,
      onChange = _ref4.onChange,
      isExpandedFrom = _ref4.isExpandedFrom,
      isLarge = _ref4.isLarge,
      customLabelHeading = _ref4.customLabelHeading,
      _ref4$withIconsOnRigh = _ref4.withIconsOnRight,
      withIconsOnRight = _ref4$withIconsOnRigh === void 0 ? false : _ref4$withIconsOnRigh,
      labelPadding = _ref4.labelPadding,
      entryPadding = _ref4.entryPadding,
      _ref4$withCustomIcon = _ref4.withCustomIcon,
      withCustomIcon = _ref4$withCustomIcon === void 0 ? false : _ref4$withCustomIcon,
      customIcon = _ref4.customIcon,
      otherProps = _objectWithoutProperties(_ref4, ["entries", "isUnfoldable", "openedIndex", "onChange", "isExpandedFrom", "isLarge", "customLabelHeading", "withIconsOnRight", "labelPadding", "entryPadding", "withCustomIcon", "customIcon"]);

  var _useReducer = useReducer(openEntriesReducer, [openedIndex, isUnfoldable, entries], getInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      idsOfOpenEntries = _useReducer2[0],
      dispatch = _useReducer2[1];

  useEffect(function () {
    if (openedIndex > -1 && !idsOfOpenEntries.includes("".concat(openedIndex))) {
      dispatch({
        type: 'open',
        id: "".concat(openedIndex),
        shouldCloseOthers: !isUnfoldable
      });
    }
  }, [openedIndex]);
  var knownEntryIds = React.useRef(entries.map(function (_ref5) {
    var id = _ref5.id;
    return id;
  }));
  var entriesNotYetInitialized = entries.filter(function (entry) {
    return !knownEntryIds.current.includes(entry.id);
  });
  knownEntryIds.current = _toConsumableArray(entries.map(function (_ref6) {
    var id = _ref6.id;
    return id;
  }));

  if (entriesNotYetInitialized.length > 0) {
    dispatch({
      type: 'checkNewEntries',
      entries: entriesNotYetInitialized
    });
  }

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var theme = useContext(ThemeContext);
  var isExpandedFromBreakpoint = isExpandedFrom ? theme.breakpoints[isExpandedFrom] : undefined;

  var _onChange = function _onChange(id) {
    var isOpen = idsOfOpenEntries.includes(id);

    if (isOpen) {
      dispatch({
        type: 'close',
        id: id
      });
    } else {
      dispatch({
        type: 'open',
        id: id,
        shouldCloseOthers: !isUnfoldable
      });
    }

    if (onChange) {
      onChange({
        index: entries.findIndex(function (entry) {
          return entry.id === id;
        }) || +id,
        eventType: isOpen ? 'HIDE' : 'SHOW'
      });
    }
  };

  useEffect(function () {
    if (currentBreakpoint >= isExpandedFromBreakpoint) {
      dispatch({
        type: 'openBatch',
        entries: entries
      });
    }
  }, []);
  useImperativeHandle(ref, function () {
    return {
      openEntryById: function openEntryById(id) {
        var isOpen = idsOfOpenEntries.includes(id);

        if (!isOpen) {
          _onChange(id);
        }
      }
    };
  });
  return entries ? React.createElement("section", otherProps, entries.map(function (entry, index) {
    var id = entry.id || index.toString();
    var isOpen = idsOfOpenEntries.includes(id);
    return React.createElement(AccordionEntry, {
      isLarge: isLarge,
      entryPadding: entryPadding,
      details: entry.details,
      id: id,
      isOpen: isOpen,
      key: id,
      looksOpenInitiallyFromBreakpoint: isExpandedFromBreakpoint,
      onChange: _onChange,
      labelPadding: labelPadding,
      title: entry.title,
      customLabelHeading: customLabelHeading,
      noBorderTop: entry.noBorderTop,
      withIconsOnRight: withIconsOnRight,
      withCustomIcon: withCustomIcon,
      customIcon: customIcon
    });
  })) : null;
});
//# sourceMappingURL=Accordion.js.map