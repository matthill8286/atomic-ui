import React from 'react';
import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
var StyledMediaStyleSwitch = styled.div.withConfig({
  displayName: "MediaStyleSwitch__StyledMediaStyleSwitch",
  componentId: "sc-1p310g0-0"
})(function (_ref) {
  var query = _ref.query,
      activeCSS = _ref.activeCSS,
      inactiveCSS = _ref.inactiveCSS,
      inactiveDisplay = _ref.inactiveDisplay,
      activeDisplay = _ref.activeDisplay;
  return query ? css(["", " ", " ", ""], inactiveDisplay ? css(["display:", ";"], inactiveDisplay) : '', inactiveCSS ? css(["", ";"], inactiveCSS) : '', css(["", "{", " ", ";}"], typeof media[query] === 'undefined' ? query : media[query], activeDisplay ? css(["display:", ";"], activeDisplay) : '', activeCSS ? css(["", ";"], activeCSS) : '')) : '';
});
export var MediaStyleSwitch = function MediaStyleSwitch(props) {
  return React.createElement(StyledMediaStyleSwitch, props);
};
//# sourceMappingURL=MediaStyleSwitch.js.map