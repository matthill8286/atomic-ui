import React from 'react';
import { Divider } from "../../Atoms/Divider";
import { Picture } from "../../Atoms/Picture";
import { CopyText } from "../../Atoms/Typography/CopyText";
import { FlexBox } from "../../Helper/FlexBox";
import { Row } from "../../Helper/Grid/Row";
import { useWindowDimensions } from "../../Helper/useWindowDimensions";
import { GroupedActionLinks } from "../../Molecules/ActionLink/GroupedActionLinks";
import { breakpoints } from "../../../styles";
import { StyledCopyText, StyledPicture, StyledFooterWrapper, StyledGroupedActionLinksWrapper, StyledGroupedActionLinks } from "./AppFooter.styled";
import { useTheme } from "../../../utils/helper";
export var AppFooter = function AppFooter(_ref) {
  var logoUrl = _ref.logoUrl,
      altText = _ref.altText,
      _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links,
      text = _ref.text,
      socialIcons = _ref.socialIcons;

  var _useWindowDimensions = useWindowDimensions(),
      currentBreakpoint = _useWindowDimensions.breakpoint;

  var _useTheme = useTheme(),
      footer = _useTheme.footer;

  var isMobile = currentBreakpoint < breakpoints.md;
  return React.createElement(React.Fragment, null, React.createElement(Divider, {
    color: "primary"
  }), React.createElement(StyledFooterWrapper, {
    padding: "".concat(footer.padding)
  }, React.createElement(Row, {
    noMargin: true
  }, React.createElement(StyledPicture, {
    colsXl: 3,
    colsLg: 6,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4,
    align: "middle"
  }, React.createElement(FlexBox, {
    justifyContent: "space-between"
  }, React.createElement(Picture, {
    src: logoUrl,
    alt: altText,
    width: "107px",
    height: "64px",
    objectFit: "contain"
  }), socialIcons)), React.createElement(StyledGroupedActionLinksWrapper, {
    colsXl: 6,
    colsLg: 6,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4,
    align: "middle"
  }, React.createElement(StyledGroupedActionLinks, null, links && React.createElement(GroupedActionLinks, {
    fontSize: isMobile ? 'xxs' : 'xs',
    color: "grey4",
    padding: '0 sm',
    links: links
  }))), React.createElement(StyledCopyText, {
    colsXl: 3,
    colsLg: 12,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4,
    align: "middle"
  }, React.createElement(CopyText, {
    tag: "span",
    fontSize: isMobile ? 'xxs' : 'xs'
  }, text)))));
};
//# sourceMappingURL=AppFooter.js.map