import React from 'react';
import { Link } from "../../Atoms/Link";
import { media } from "../../../styles/media";
import { styled } from "../../../styles/styled";
var StyledProductCell = styled.div.withConfig({
  displayName: "ProductCell__StyledProductCell",
  componentId: "sc-1xxgijy-0"
})(["display:flex;flex-direction:column;min-width:100px;text-align:left;width:100%;", "{min-width:150px;}img{width:120px;margin-bottom:16px;}"], media.md);
export var ProductCell = function ProductCell(_ref) {
  var children = _ref.children,
      linkUrl = _ref.linkUrl;
  return React.createElement(Link, {
    to: linkUrl
  }, React.createElement(StyledProductCell, null, children));
};
//# sourceMappingURL=ProductCell.js.map