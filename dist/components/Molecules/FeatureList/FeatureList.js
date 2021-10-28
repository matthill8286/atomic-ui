import React from 'react';
import { Divider } from "../../Atoms/Divider";
import { CopyText } from "../../Atoms/Typography";
import { FlexBox } from "../../Helper/FlexBox";
import { Cell, Grid, Row } from "../../Helper/Grid";
import { styled } from "../../../styles";
export var ListWrapper = styled.div.withConfig({
  displayName: "FeatureList__ListWrapper",
  componentId: "he7pei-0"
})(["padding-top:", ";padding-bottom:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.sm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.sm;
});
export var FeatureList = function FeatureList(_ref3) {
  var list = _ref3.list;

  if (!list || !Array.isArray(list) || !list.length) {
    return null;
  }

  return React.createElement(FlexBox, {
    display: "flex",
    flexDirection: "column"
  }, list.map(function (item, idx) {
    return item.label !== '' && item.label ? React.createElement(React.Fragment, {
      key: "FeatureList-".concat(item.label, "-").concat(idx)
    }, React.createElement(ListWrapper, null, React.createElement(Grid, {
      noPadding: true
    }, React.createElement(Row, {
      noMargin: true
    }, React.createElement(Cell, {
      columns: 6,
      colsMd: 4,
      colsSm: 4,
      colsXs: 2
    }, React.createElement(CopyText, {
      weight: "semibold",
      color: "grey5",
      margin: "0"
    }, item.label)), React.createElement(Cell, {
      columns: 6,
      colsMd: 4,
      colsSm: 4,
      colsXs: 2
    }, React.createElement(CopyText, {
      color: "grey5",
      margin: "0"
    }, item.value))))), React.createElement(Divider, {
      color: "grey2",
      height: 1
    })) : null;
  }));
};
FeatureList.displayName = 'FeatureList';
//# sourceMappingURL=FeatureList.js.map