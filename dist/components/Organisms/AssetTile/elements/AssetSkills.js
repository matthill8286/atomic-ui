import React from 'react';
import { Tag } from "../../../Atoms/Tag";
import { css, styled } from "../../../../styles/styled";
var StyledAssetSkill = styled.div.withConfig({
  displayName: "AssetSkills__StyledAssetSkill",
  componentId: "fryplj-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["display:inline-flex;justify-content:flex-end;"]);
});
export var AssetSkills = function AssetSkills(_ref2) {
  var competencyLabel = _ref2.competencyLabel,
      skills = _ref2.skills,
      onSkillsClick = _ref2.onSkillsClick,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'grey5' : _ref2$color,
      loading = _ref2.loading;

  if (!skills || !skills.length || loading) {
    return null;
  }

  var text = "".concat(skills.length, " ").concat(skills.length === 1 ? competencyLabel || 'skill' : "".concat(competencyLabel || 'skill', "s"), " ");
  return React.createElement(StyledAssetSkill, null, React.createElement(Tag, {
    weight: "bold",
    padding: {
      left: 'lg',
      right: 'lg'
    },
    text: text,
    color: color
  }));
};
//# sourceMappingURL=AssetSkills.js.map