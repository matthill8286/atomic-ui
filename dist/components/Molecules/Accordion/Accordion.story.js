function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withState } from '@dump247/storybook-state';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import uniqueId from 'lodash/uniqueId';
import React from 'react';
import { Button } from "../../Atoms/Button";
import { Accordion } from "./Accordion";
import Readme from "./Accordion.readme.md";
var ENTRIES_1 = [{
  title: 'Recommendations',
  id: 'recommendations',
  details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea\n              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n              sadipscing elitr, sed diam"
}, {
  title: 'Long Asset Content',
  id: 'technicals',
  details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea\n              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n              sadipscing elitr, sed diam".repeat(10)
}, {
  title: 'Asset Description',
  id: 'description',
  details: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\n              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed\n              diam"
}, {
  title: 'Recommendations '.repeat(2),
  id: 'recommendations-2',
  details: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\n              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed\n              diam"
}];
var searchEntriesProps = {
  customLabelHeading: {
    bold: 'bold',
    size: 'xl',
    tag: 'span',
    margin: '0'
  },
  entries: [{
    noBorderTop: true,
    details: '<Section />',
    title: 'Dashboard',
    isOpenInitially: true,
    id: 'section-dashboard'
  }, {
    noBorderTop: false,
    details: '<Section />',
    title: 'Recommendations',
    isOpenInitially: true,
    id: 'section-reco'
  }],
  entryPadding: 'xs 0 sm 0',
  isUnfoldable: true,
  withIconsOnRight: true
};
storiesOf('Design System/Molecules/Accordion', module).add('default', function () {
  return React.createElement(Accordion, {
    entries: ENTRIES_1,
    isLarge: boolean('isLarge', false),
    withIconsOnRight: boolean('Icons on right', true)
  });
}, {
  info: Readme
}).add('with custom heading', function () {
  return React.createElement(Accordion, {
    entries: ENTRIES_1,
    isLarge: boolean('isLarge', false),
    customLabelHeading: {
      tag: 'h2',
      size: 'lg',
      bold: 'bold',
      margin: select('label margin', ['', '0', 'xl', 'xl 0', 'md xl xxl xl', 'sm', '0'], 'sm')
    }
  });
}, {
  info: Readme
}).add('without heading titles', function () {
  return React.createElement(Accordion, {
    entries: ENTRIES_1.map(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        title: undefined,
        noBorderTop: false
      });
    }),
    isLarge: boolean('isLarge', false),
    customLabelHeading: {
      tag: 'h2',
      size: 'lg',
      bold: 'bold',
      margin: select('label margin', ['', '0', 'xl', 'xl 0', 'md xl xxl xl', '0'], '0')
    }
  });
}, {
  info: Readme
}).add('with custom entry and label padding', function () {
  return React.createElement(Accordion, {
    entries: ENTRIES_1.map(function (e, i) {
      return i === 2 ? _objectSpread(_objectSpread({}, e), {}, {
        isOpenInitially: true
      }) : e;
    }),
    isLarge: boolean('isLarge', false),
    labelPadding: select('label padding', ['', '0', 'xl', 'xl 0', 'md xl xxl xl', '0'], ''),
    entryPadding: select('entry padding', ['', '0', 'lg', 'xl', 'xl 0', 'md xl xxl xl', '0'], 'md xl xxl xl'),
    customLabelHeading: {
      tag: 'h2',
      size: 'lg',
      bold: 'bold',
      margin: select('heading margin', ['', '0', 'lg', 'xl', 'xl 0', 'md xl xxl xl', '0'], 'lg')
    }
  });
}, {
  info: Readme
}).add('multiple open entries allowed', function () {
  return React.createElement(Accordion, {
    entries: ENTRIES_1.map(function (entry) {
      return _objectSpread(_objectSpread({}, entry), {}, {
        isOpenInitially: true
      });
    }),
    isLarge: boolean('isLarge', false),
    isUnfoldable: true
  });
}, {
  info: Readme
}).add('dynamic example', withState({
  entries: searchEntriesProps.entries
}, function (store) {
  var addEntry = function addEntry(entry) {
    store.set({
      entries: [].concat(_toConsumableArray(store.state.entries), [entry])
    });
  };

  return React.createElement(React.Fragment, null, React.createElement(Button, {
    onClick: function onClick() {
      var id = uniqueId('another-entry-');
      var newEntry = {
        id: id,
        details: "hallooooo ".concat(id),
        title: id,
        isOpenInitially: true
      };
      addEntry(newEntry);
    }
  }, "Add entry initially open"), React.createElement(Button, {
    onClick: function onClick() {
      var id = uniqueId('another-entry-');
      var newEntry = {
        id: id,
        details: "hallooooo ".concat(id),
        title: id,
        isOpenInitially: false
      };
      addEntry(newEntry);
    }
  }, "Add entry initially close"), React.createElement(Accordion, _extends({}, searchEntriesProps, {
    entries: store.state.entries,
    isLarge: boolean('isLarge', false)
  })));
}), {
  info: Readme
}).add('second entry initially open', function () {
  return React.createElement(Accordion, {
    entries: ENTRIES_1.map(function (e, i) {
      return i === 1 ? _objectSpread(_objectSpread({}, e), {}, {
        isOpenInitially: true
      }) : e;
    }),
    isLarge: boolean('isLarge', false)
  });
}, {
  info: Readme
}).add('expanded from breakpoint', function () {
  return React.createElement(React.Fragment, null, React.createElement(Accordion, {
    entries: [{
      title: 'expanded from sm',
      details: 'expanded from sm'
    }],
    isExpandedFrom: "sm"
  }), React.createElement(Accordion, {
    entries: [{
      title: 'expanded from md',
      details: 'expanded from md'
    }],
    isExpandedFrom: "md"
  }), React.createElement(Accordion, {
    entries: [{
      title: 'expanded from lg',
      details: 'expanded from lg'
    }],
    isExpandedFrom: "lg"
  }), React.createElement(Accordion, {
    entries: [{
      title: 'expanded from xl',
      details: 'expanded from xl'
    }],
    isExpandedFrom: "xl"
  }), React.createElement(Accordion, {
    entries: [{
      title: 'expanded from xxl',
      details: 'expanded from xxl'
    }],
    isExpandedFrom: "xxl"
  }));
}, {
  info: Readme
});
//# sourceMappingURL=Accordion.story.js.map