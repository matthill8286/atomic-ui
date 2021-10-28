import React from 'react';
import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
var StyledImageAndTextCell = styled.div.withConfig({
  displayName: "ImageAndTextCell__StyledImageAndTextCell",
  componentId: "xicnlc-0"
})(["display:flex;justify-content:center;min-width:100px;text-align:center;align-items:center;img{margin-right:8px;max-width:25px;}", "{text-align:left;justify-content:left;}"], media.sm);
export var ImageAndTextCell = function ImageAndTextCell(_ref) {
  var children = _ref.children;
  return React.createElement(StyledImageAndTextCell, null, children);
};
//# sourceMappingURL=ImageAndTextCell.js.map