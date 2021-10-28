import React from 'react';
import { Tag } from "../../../Atoms/Tag";
import { css, styled } from "../../../../styles/styled";
var StyledAssetFeatured = styled.div.withConfig({
  displayName: "AssetFeatured__StyledAssetFeatured",
  componentId: "sc-1n195du-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["position:absolute;z-index:20;display:flex;padding:0 ", ";bottom:", ";right:0;"], theme.spacing.base.sm, theme.spacing.base.sm);
});
export var AssetFeatured = function AssetFeatured(_ref2) {
  var featuredLabel = _ref2.featuredLabel,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'white' : _ref2$color,
      loading = _ref2.loading;

  if (!featuredLabel) {
    return null;
  }

  return React.createElement(StyledAssetFeatured, null, React.createElement(Tag, {
    weight: "bold",
    padding: {
      left: 'lg',
      right: 'lg'
    },
    text: featuredLabel,
    color: "white"
  }));
};
//# sourceMappingURL=AssetFeatured.js.map