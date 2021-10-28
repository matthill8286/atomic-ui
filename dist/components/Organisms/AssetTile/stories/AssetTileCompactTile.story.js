function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AssetTileLayout, newAssetMocks } from "./..";
import { StorybookWrapper } from "../../../../utils/StorybookWrapper";
import { AssetTileCompactTile } from "../AssetTileCompactTile";
import { styled } from "../../../../styles";
import { IconButton } from "../../../Atoms/Button";
import { Icon } from "../../../Atoms/Icon";
import { StyleguideBookmarkActive } from "../../../../svgs";
var StyledIconButton = styled(IconButton).withConfig({
  displayName: "AssetTileCompactTilestory__StyledIconButton",
  componentId: "sc-1w7uk9c-0"
})(["border:none;display:flex;padding:0;min-width:auto;justify-content:center;margin-right:20px;"]);
export default {
  title: 'Design System/Organisms/AssetTile/Compact',
  component: AssetTileCompactTile,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
};

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  return React.createElement(StorybookWrapper, null, children);
};

var Template = function Template(args) {
  return React.createElement(Wrapper, null, React.createElement(AssetTileCompactTile, _extends({}, args, {
    layout: AssetTileLayout.compact
  })));
};

export var Default = Template.bind({});
Default.args = {
  asset: newAssetMocks[0],
  orientation: 'landscape',
  renderAddToBookmarkButton: function renderAddToBookmarkButton() {
    return React.createElement(StyledIconButton, null, React.createElement(Icon, {
      color: "grey5",
      height: "md"
    }, React.createElement(StyleguideBookmarkActive, null)));
  }
};
//# sourceMappingURL=AssetTileCompactTile.story.js.map