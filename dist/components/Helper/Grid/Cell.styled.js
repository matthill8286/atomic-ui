import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
import { gutterWidth } from "./constants";

var getXsCols = function getXsCols(_ref) {
  var columns = _ref.columns,
      colsXs = _ref.colsXs;
  var cols = colsXs !== undefined ? colsXs : columns;

  if (cols !== undefined) {
    switch (cols) {
      case 0:
        return "\n          display: none;\n        ";

      case 1:
        return css(["width:calc(25% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 1;}"], gutterWidth.xs);

      case 2:
        return css(["width:calc(50% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 2;}"], gutterWidth.xs);

      case 3:
        return css(["width:calc(75% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 3;}"], gutterWidth.xs);

      default:
        return css(["width:calc(100% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 4;}"], gutterWidth.xs);
    }
  }
};

var getSmMdCols = function getSmMdCols(md) {
  return function (_ref2) {
    var columns = _ref2.columns,
        colsSm = _ref2.colsSm,
        colsMd = _ref2.colsMd;
    var cols;

    if (md) {
      cols = colsMd !== undefined ? colsMd : columns;
    } else {
      cols = colsSm !== undefined ? colsSm : columns;
    }

    var gutter = md ? gutterWidth.md : gutterWidth.sm;

    if (cols !== undefined) {
      switch (cols) {
        case 0:
          return "\n          display: none;\n        ";

        case 1:
          return css(["width:calc(12.5% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 1;}"], gutter);

        case 2:
          return css(["width:calc(25% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 2;}"], gutter);

        case 3:
          return css(["width:calc(37.5% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 3;}"], gutter);

        case 4:
          return css(["width:calc(50% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 4;}"], gutter);

        case 5:
          return css(["width:calc(62.5% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 5;}"], gutter);

        case 6:
          return css(["width:calc(75% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 6;}"], gutter);

        case 7:
          return css(["width:calc(87.5% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 7;}"], gutter);

        default:
          return css(["width:calc(100% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 8;}"], gutter);
      }
    }
  };
};

var getLgXlCols = function getLgXlCols(xl) {
  return function (_ref3) {
    var columns = _ref3.columns,
        colsLg = _ref3.colsLg,
        colsXl = _ref3.colsXl;
    var cols;

    if (xl) {
      cols = colsXl !== undefined ? colsXl : columns;
    } else {
      cols = colsLg !== undefined ? colsLg : columns;
    }

    var gutter = xl ? gutterWidth.xl : gutterWidth.lg;

    if (cols !== undefined) {
      switch (cols) {
        case 0:
          return "\n          display: none;\n        ";

        case 1:
          return css(["width:calc(8.33333% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 1;}"], gutter);

        case 2:
          return css(["width:calc(16.66667% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 2;}"], gutter);

        case 3:
          return css(["width:calc(25% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 3;}"], gutter);

        case 4:
          return css(["width:calc(33.33333% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 4;}"], gutter);

        case 5:
          return css(["width:calc(41.66667% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 5;}"], gutter);

        case 6:
          return css(["width:calc(50% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 6;}"], gutter);

        case 7:
          return css(["width:calc(58.33333% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 7;}"], gutter);

        case 8:
          return css(["width:calc(66.66667% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 8;}"], gutter);

        case 9:
          return css(["width:calc(75% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 9;}"], gutter);

        case 10:
          return css(["width:calc(83.33333% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 10;}"], gutter);

        case 11:
          return css(["width:calc(91.66667% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 11;}"], gutter);

        default:
          return css(["width:calc(100% - ", "px);@supports (display:grid){width:auto;grid-column-end:span 12;}"], gutter);
      }
    }
  };
};

export var StyledCell = styled.div.withConfig({
  displayName: "Cellstyled__StyledCell",
  componentId: "sc-1vxs3ia-0"
})(["flex-grow:1;box-sizing:border-box;margin:calc(", "px / 2);width:calc(100% - ", "px);@supports (display:grid){margin:0;width:auto;grid-column-end:span 4;}", " ", "{display:", ";margin:calc(", "px / 2);width:calc(50% - ", "px);@supports (display:grid){margin:0;width:auto;grid-column-end:span 4;}", "}", "{display:", ";margin:calc(", "px / 2);width:calc(50% - ", "px);@supports (display:grid){margin:0;width:auto;grid-column-end:span 4;}", "}", "{display:", ";margin:calc(", "px / 2);width:calc(33.33333% - ", "px);@supports (display:grid){margin:0;width:auto;grid-column-end:span 4;}", "}", "{display:", ";margin:calc(", "px / 2);width:calc(33.33333% - ", "px);@supports (display:grid){margin:0;width:auto;grid-column-end:span 4;}", "}", "{", "}", " ", " ", " ", ""], gutterWidth.xs, gutterWidth.xs, getXsCols, media.sm, function (_ref4) {
  var alignHeight = _ref4.alignHeight;
  return alignHeight ? "flex" : "block";
}, gutterWidth.sm, gutterWidth.sm, getSmMdCols(false), media.md, function (_ref5) {
  var alignHeight = _ref5.alignHeight;
  return alignHeight ? "flex" : "block";
}, gutterWidth.md, gutterWidth.md, getSmMdCols(true), media.lg, function (_ref6) {
  var alignHeight = _ref6.alignHeight;
  return alignHeight ? "flex" : "block";
}, gutterWidth.lg, gutterWidth.lg, getLgXlCols(false), media.xl, function (_ref7) {
  var alignHeight = _ref7.alignHeight;
  return alignHeight ? "flex" : "block";
}, gutterWidth.xl, gutterWidth.xl, getLgXlCols(true), media.ie11, function (_ref8) {
  var noMargin = _ref8.noMargin;
  return noMargin && "\n        margin: 0;\n    ";
}, function (_ref9) {
  var order = _ref9.order;
  return order && css(["order:", ";"], order);
}, function (_ref10) {
  var align = _ref10.align;

  if (align) {
    switch (align) {
      case 'bottom':
        return "\n            align-self: flex-end;\n\n            @supports (display: grid) {\n              align-self: end;\n            }\n            ";

      case 'middle':
        return "\n            align-self: center;\n          ";

      case 'top':
        return "\n          align-self: flex-start;\n\n            @supports (display: grid) {\n              align-self: start;\n            }\n          ";

      default:
        return '';
    }
  }
}, function (_ref11) {
  var justify = _ref11.justify;

  if (justify) {
    switch (justify) {
      case 'flex-end':
        return "\n            justify-self: flex-end;\n\n            @supports (display: grid) {\n              justify-self: end;\n            }\n            ";

      case 'stretch':
        return "\n            justify-self: stretch;\n          ";

      case 'center':
        return "\n            justify-self: center;\n          ";

      case 'flex-start':
        return "\n          justify-self: flex-start;\n\n            @supports (display: grid) {\n              justify-self: start;\n            }\n          ";

      default:
        return '';
    }
  }
}, function (_ref12) {
  var alignHeight = _ref12.alignHeight;
  return alignHeight && "display: flex;\n      > div {\n        flex: 1\n      }";
});
//# sourceMappingURL=Cell.styled.js.map