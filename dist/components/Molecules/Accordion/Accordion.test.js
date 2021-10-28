function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { Accordion } from "./Accordion";
var ENTRIES_1 = [{
  title: 'Produktbewertungen',
  id: 'ratings',
  details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea\n              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n              sadipscing elitr, sed diam"
}, {
  title: 'Technische Daten',
  id: 'technicals',
  details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea\n              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n              sadipscing elitr, sed diam",
  isOpenInitially: true
}, {
  title: 'Produktbeschreibung',
  id: 'description',
  details: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\n              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed\n              diam"
}, {
  title: 'ProduktbeschreibungProduktbeschreibungProduktbeschreibungProduktbeschreibung',
  id: 'production-2',
  details: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\n              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed\n              diam"
}];
describe('Accordion', function () {
  it('renders accordion with initial open entry correctly', function () {
    var tree = renderWithTheme(React.createElement(Accordion, {
      entries: ENTRIES_1
    }));
    expect(tree).toMatchSnapshot();
  });
  it('can render all entries open dependant on breakpoint', function () {
    var tree = renderWithTheme(React.createElement(Accordion, {
      isExpandedFrom: "sm",
      entries: ENTRIES_1
    }));
    expect(tree).toMatchSnapshot();
  });
  it('has a large variant', function () {
    var tree = renderWithTheme(React.createElement(Accordion, {
      isLarge: true,
      entries: ENTRIES_1
    }));
    expect(tree).toMatchSnapshot();
  });
  it('should not render heading h2 element when title undefined', function () {
    var wrapper = mountWithTheme(React.createElement(Accordion, {
      isLarge: true,
      entries: ENTRIES_1.map(function (e) {
        return _objectSpread(_objectSpread({}, e), {}, {
          title: undefined
        });
      })
    }));
    expect(wrapper.find('h2')).toHaveLength(0);
  });
});
//# sourceMappingURL=Accordion.test.js.map