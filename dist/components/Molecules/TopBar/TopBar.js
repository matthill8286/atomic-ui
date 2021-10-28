import * as React from 'react';
import { Icon } from "../../Atoms/Icon";
import { Lists } from "../../Atoms/Lists";
import { Section } from "../../Atoms/Section";
import { CopyText } from "../../Atoms/Typography";
import { Cell, Grid, Row } from "../../Helper/Grid";
import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
import { IconCheckmarkCircle } from '@excelwithbusiness/webmobile-svg-library';
var StyledLists = styled(Lists).withConfig({
  displayName: "TopBar__StyledLists",
  componentId: "sc-15cmdf4-0"
})(["display:flex;flex-direction:row;z-index:1;> li{flex:1;display:none;justify-content:center;padding:", " 0;margin:0 ", ";overflow:hidden;> span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;> p{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}}&:nth-child(-n + 2){display:flex;}", "{&:nth-child(-n + 4){display:flex;}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.xxs;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.xxs;
}, media.lg);
var StyledIcon = styled(Icon).withConfig({
  displayName: "TopBar__StyledIcon",
  componentId: "sc-15cmdf4-1"
})(["svg{position:relative;top:5px;}"]);
var StyledSection = styled(Section).withConfig({
  displayName: "TopBar__StyledSection",
  componentId: "sc-15cmdf4-2"
})(["background:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.header.topBar;
});
export var TopBar = function TopBar(_ref4) {
  var entries = _ref4.entries;
  return React.createElement(StyledSection, {
    color: "white",
    paddingTop: {
      mobile: 'xs',
      tablet: 'xs'
    },
    paddingBottom: {
      mobile: 'xs',
      tablet: 'xs'
    }
  }, React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    colsXs: 4,
    colsSm: 8,
    colsMd: 8,
    colsLg: 12,
    colsXl: 12
  }, React.createElement(StyledLists, {
    icon: true
  }, entries.map(function (entry, index) {
    return React.createElement("li", {
      key: index
    }, React.createElement(StyledIcon, {
      height: 14,
      width: 14,
      color: "grey5"
    }, React.createElement(IconCheckmarkCircle, null)), React.createElement(CopyText, {
      color: "grey5",
      bold: true,
      fontSize: "sm",
      tag: "span"
    }, entry));
  }))))));
};
//# sourceMappingURL=TopBar.js.map