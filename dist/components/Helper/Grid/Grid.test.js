import * as React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { Cell, Offset } from "./Cell";
import { Grid } from "./Grid";
import { Row } from "./Row";
describe('MaterialGrid', function () {
  var components = {
    Grid: Grid,
    Row: Row,
    Cell: Cell,
    Offset: Offset
  };
  describe('Grid component', function () {
    it('renders a div per default', function () {
      var tree = renderWithTheme(React.createElement(Grid, null));
      expect(tree).toMatchSnapshot();
    });
    it('renders with Rows and Cells (children)', function () {
      var tree = renderWithTheme(React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, null), React.createElement(Cell, null), React.createElement(Cell, null), React.createElement(Cell, null)), React.createElement(Row, null, React.createElement(Cell, null), React.createElement(Cell, null), React.createElement(Cell, null), React.createElement(Cell, null))));
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Cell component', function () {
    it('renders with custom responsive column count for view ports', function () {
      var tree = renderWithTheme(React.createElement(Cell, {
        colsXs: 4,
        colsSm: 8,
        colsMd: 8,
        colsLg: 12,
        colsXl: 12
      }));
      expect(tree).toMatchSnapshot();
    });
    it('renders with column order', function () {
      var tree = renderWithTheme(React.createElement(Cell, {
        order: 2
      }));
      expect(tree).toMatchSnapshot();
    });
    it('renders hidden with view port columns count set to 0', function () {
      var tree = renderWithTheme(React.createElement(Cell, {
        colsXs: 0,
        colsSm: 0,
        colsMd: 0,
        colsLg: 0,
        colsXl: 0
      }));
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Offset component', function () {
    it('renders with custom responsive column count for view ports', function () {
      var tree = renderWithTheme(React.createElement(Cell, {
        colsXs: 4,
        colsSm: 8,
        colsMd: 8,
        colsLg: 12,
        colsXl: 12
      }));
      expect(tree).toMatchSnapshot();
    });
    it('renders with column order', function () {
      var tree = renderWithTheme(React.createElement(Cell, {
        order: 2
      }));
      expect(tree).toMatchSnapshot();
    });
    it('renders hidden with view port columns count set to 0', function () {
      var tree = renderWithTheme(React.createElement(Cell, {
        colsXs: 0,
        colsSm: 0,
        colsMd: 0,
        colsLg: 0,
        colsXl: 0
      }));
      expect(tree).toMatchSnapshot();
    });
    it('renders hidden with no values, because of default props', function () {
      var tree = renderWithTheme(React.createElement(Offset, null));
      expect(tree).toMatchSnapshot();
    });
  });
  describe('additional customizations', function () {
    describe('with custom tags', function () {
      Object.keys(components).forEach(function (key) {
        it("renders ".concat(key, " with custom tag name"), function () {
          var Component = components[key];
          var tagName = 'section';
          var tree = renderWithTheme(React.createElement(Component, {
            tag: tagName
          }));
          expect(tree).toMatchSnapshot();
        });
      });
    });
  });
});
//# sourceMappingURL=Grid.test.js.map