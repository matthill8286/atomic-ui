import React from 'react';
import { Icon } from "../../../Atoms/Icon";
import { Like } from "../../../Atoms/Like";
import { css, styled } from "../../../../styles/styled";
import { IconLike } from '@excelwithbusiness/webmobile-svg-library';
var StyledAssetLikes = styled.div.withConfig({
  displayName: "AssetLikes__StyledAssetLikes",
  componentId: "c1mvvs-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["position:absolute;z-index:2;bottom:calc(", " - 4px);left:calc(", " + 1px);"], theme.spacing.base.md, theme.spacing.base.sm);
});
export var AssetLikes = function AssetLikes(_ref2) {
  var likes = _ref2.likes,
      _ref2$bold = _ref2.bold,
      bold = _ref2$bold === void 0 ? true : _ref2$bold,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'white' : _ref2$color,
      children = _ref2.children;

  if (!likes) {
    return null;
  }

  return React.createElement(StyledAssetLikes, null, React.createElement(Like, {
    color: color,
    bold: bold,
    likes: likes,
    iconLeft: React.createElement(Icon, {
      color: color
    }, React.createElement(IconLike, null))
  }, children));
};
//# sourceMappingURL=AssetLikes.js.map