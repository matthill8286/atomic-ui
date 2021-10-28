import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Typo } from "../../Atoms/Typography";
import { Cell } from "./Cell";
import { Grid } from "./Grid";
import Readme from "./Grid.readme.md";
import { Row } from "./Row";

var Placeholder = function Placeholder(_ref) {
  var tint = _ref.tint,
      height = _ref.height;
  var styles = {
    padding: '1rem',
    background: tint ? '#333' : '#eee',
    minHeight: height ? height : '100px'
  };
  return React.createElement("div", {
    style: styles
  });
};

Placeholder.displayName = 'Placeholder';
storiesOf('Design System/Helper/MaterialGrid', module).add('12 column grid', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, new Array(12).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 1
    }, React.createElement(Placeholder, null, "Cell ", index + 1));
  })));
}, {
  info: Readme
}).add('Fixed Column Width', function () {
  return React.createElement(Grid, {
    fixedColumnWidth: true
  }, React.createElement(Row, null, new Array(12).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 1
    }, React.createElement(Placeholder, null, "Cell ", index + 1));
  })));
}, {
  info: Readme
}).add('Responsive grid with view port sizes', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 1")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 2")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 3")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 3")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 3
  }, React.createElement(Placeholder, null, "Cell 5")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 3
  }, React.createElement(Placeholder, null, "Cell 6"))));
}).add('with custom html tags', function () {
  return React.createElement(Grid, {
    tag: "section"
  }, React.createElement(Row, null, new Array(3).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 3,
      tag: "article"
    }, React.createElement(Placeholder, null, "Cell as article ", index + 1));
  })));
}).add('Alignment', function () {
  return React.createElement(Grid, {
    fixedColumnWidth: true,
    align: "right"
  }, React.createElement(Row, null, React.createElement(Cell, {
    align: "top"
  }, React.createElement(Placeholder, null, React.createElement(Typo, {
    tag: "p"
  }, "Cricket"))), React.createElement(Cell, {
    align: "middle"
  }, React.createElement(Placeholder, null, "Cricket")), React.createElement(Cell, {
    align: "bottom"
  }, React.createElement(Placeholder, null, "StarCraft"))));
}).add('Justify', function () {
  return React.createElement(Grid, {
    fixedColumnWidth: true
  }, React.createElement(Row, null, React.createElement(Cell, {
    justify: "flex-end",
    columns: 3
  }, "abc", React.createElement(Placeholder, null, "Tennis"), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null)), React.createElement(Cell, {
    justify: "flex-start",
    columns: 3
  }, "cde", React.createElement(Placeholder, null, "Cricket")), React.createElement(Cell, {
    justify: "center",
    columns: 3
  }, "fgh", React.createElement(Placeholder, null, "Poker")), React.createElement(Cell, {
    justify: "flex-end",
    columns: 3
  }, "ijk", React.createElement(Placeholder, null, "Football")), React.createElement(Cell, {
    justify: "stretch",
    columns: 12
  }, "lmn", React.createElement(Placeholder, null, "Football"))));
}).add('Dashboard Example', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 12,
    colsLg: 12,
    colsMd: 8,
    colsSm: 6
  }, React.createElement(Placeholder, null, "Header"))), React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 12,
    colsLg: 12,
    colsMd: 8,
    colsSm: 6
  }, React.createElement(Placeholder, null, "Headline"))), React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 1")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 2")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 3")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 4"))), React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 1")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 2")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 3")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 3"))), React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 1")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 2")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 3,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 3")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsMd: 8,
    colsSm: 8
  }, React.createElement(Placeholder, null, "Cell 3"))));
}).add('Inner Nesting Row', function () {
  return React.createElement(Row, null, new Array(3).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 3,
      tag: "article"
    }, React.createElement(Placeholder, null, "Cell as article ", index + 1));
  }));
}).add('Hide Column on Smaller Devices Example', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 9,
    colsLg: 9,
    colsSm: 8,
    colsMd: 8,
    order: 2
  }, React.createElement(Placeholder, null, "Cell 1")), React.createElement(Cell, {
    colsXl: 3,
    colsLg: 3,
    colsXs: 0,
    colsSm: 0,
    colsMd: 0,
    order: 1
  }, React.createElement(Placeholder, null, "Cell 2"))));
}).add('Text Image Component', function () {
  return React.createElement("div", null, React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 6,
    colsLg: 6,
    order: 2
  }, React.createElement(Placeholder, null, "Image")), React.createElement(Cell, {
    colsXl: 6,
    colsLg: 6,
    order: 1
  }, React.createElement(Placeholder, null, "Text"))), React.createElement(Row, null, React.createElement(Cell, {
    colsXl: 6,
    colsLg: 6,
    order: 1
  }, React.createElement(Placeholder, null, "Image")), React.createElement(Cell, {
    colsXl: 6,
    colsLg: 6,
    order: 2
  }, React.createElement(Placeholder, null, "Text"))));
}).add('No margin for Row', function () {
  return React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, new Array(12).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 1
    }, React.createElement(Placeholder, null, "Cell ", index + 1));
  })), React.createElement(Row, null, new Array(12).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 1
    }, React.createElement(Placeholder, {
      tint: true
    }, "Cell ", index + 1));
  })));
}).add('No padding for Grid', function () {
  return React.createElement(Grid, {
    noPadding: true
  }, React.createElement(Row, null, new Array(12).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 1
    }, React.createElement(Placeholder, null, "Cell ", index + 1));
  })), React.createElement(Row, null, new Array(12).fill(0).map(function (_, index) {
    return React.createElement(Cell, {
      key: index,
      columns: 1
    }, React.createElement(Placeholder, {
      tint: true
    }, "Cell ", index + 1));
  })));
});
//# sourceMappingURL=Grid.story.js.map