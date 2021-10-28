import { lighten } from 'polished';
import { Card } from "../Card";
import { Icon } from "../Icon";
import { CopyText } from "../Typography/CopyText";
import { styled } from "../../../styles/styled";

var getSelectableSize = function getSelectableSize(selectableSize) {
  return selectableSize === 'large' ? '24px' : '20px';
};

var getSelectableFillingColor = function getSelectableFillingColor(state, theme) {
  return state === 'disabled' ? theme.color.grey4 : theme.color.primary;
};

export var StyledIcon = styled(Icon).withConfig({
  displayName: "Selectablestyled__StyledIcon",
  componentId: "l7eb6r-0"
})(["display:none;position:absolute;top:0;left:0;width:", ";height:", ";svg{fill:", ";height:100%;}"], function (_ref) {
  var selectableSize = _ref.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref2) {
  var selectableSize = _ref2.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref3) {
  var theme = _ref3.theme,
      state = _ref3.state;
  return getSelectableFillingColor(state, theme);
});
export var StyledRadioMark = styled.span.withConfig({
  displayName: "Selectablestyled__StyledRadioMark",
  componentId: "l7eb6r-1"
})(["width:", ";height:", ";position:absolute;display:none;&:before{content:'';background:", ";width:", ";height:", ";border-radius:50%;}"], function (_ref4) {
  var selectableSize = _ref4.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref5) {
  var selectableSize = _ref5.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref6) {
  var state = _ref6.state,
      theme = _ref6.theme;
  return getSelectableFillingColor(state, theme);
}, function (_ref7) {
  var selectableSize = _ref7.selectableSize;
  return selectableSize === 'large' ? '12px' : '10px';
}, function (_ref8) {
  var selectableSize = _ref8.selectableSize;
  return selectableSize === 'large' ? '12px' : '10px';
});
export var StyledLabel = styled.label.withConfig({
  displayName: "Selectablestyled__StyledLabel",
  componentId: "l7eb6r-2"
})(["cursor:pointer;position:relative;top:0;", " display:flex;height:100%;align-items:center;&:before{content:'';top:0;position:absolute;width:", ";height:", ";border-radius:", ";border:solid 1px ", ";background-color:", ";box-sizing:border-box;}"], function (_ref9) {
  var state = _ref9.state,
      inactive = _ref9.theme.polished.inactive;
  return state === 'disabled' && "\n    pointer-events: none;\n    opacity: ".concat(inactive, ";\n  ");
}, function (_ref10) {
  var selectableSize = _ref10.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref11) {
  var selectableSize = _ref11.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref12) {
  var theme = _ref12.theme,
      type = _ref12.type;
  return type === 'radio' ? '50%' : theme.dimension.borderRadius1;
}, function (_ref13) {
  var theme = _ref13.theme,
      state = _ref13.state;
  return state === 'error' ? theme.color.error : theme.color.grey4;
}, function (_ref14) {
  var theme = _ref14.theme,
      state = _ref14.state;
  return state === 'disabled' ? lighten(theme.polished.inactive, theme.color.grey3) : theme.color.white;
});
export var StyledFocusedIndicator = styled.span.withConfig({
  displayName: "Selectablestyled__StyledFocusedIndicator",
  componentId: "l7eb6r-3"
})(["display:inline-block;"]);
export var StyledNativeSelectable = styled.input.withConfig({
  displayName: "Selectablestyled__StyledNativeSelectable",
  componentId: "l7eb6r-4"
})(["width:", ";height:", ";position:relative;z-index:-1;display:flex;align-items:center;justify-content:center;opacity:0;flex-shrink:0;", ";", ";&:focus ~ ", "{width:", ";height:", ";box-shadow:", ";position:absolute;top:0;z-index:-1;border-radius:", ";left:0;}"], function (_ref15) {
  var selectableSize = _ref15.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref16) {
  var selectableSize = _ref16.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref17) {
  var type = _ref17.type;
  return type === 'checkbox' && "&:checked + ".concat(StyledIcon, " {\n      display: inline-block;\n      text-align: center;\n  }");
}, function (_ref18) {
  var type = _ref18.type;
  return type === 'radio' && "&:checked + ".concat(StyledRadioMark, " {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      left: 0;\n      top: 0;\n  }");
}, StyledFocusedIndicator, function (_ref19) {
  var selectableSize = _ref19.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref20) {
  var selectableSize = _ref20.selectableSize;
  return getSelectableSize(selectableSize);
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.dimension.elevationLevel1;
}, function (_ref22) {
  var type = _ref22.type;
  return type === 'checkbox' ? '4px' : '50%';
});
export var StyledCopyText = styled(CopyText).attrs(function () {
  return {
    tag: 'div'
  };
}).withConfig({
  displayName: "Selectablestyled__StyledCopyText",
  componentId: "l7eb6r-5"
})(["width:100%;"]);
export var StyledSelectableContentWrapper = styled.div.withConfig({
  displayName: "Selectablestyled__StyledSelectableContentWrapper",
  componentId: "l7eb6r-6"
})(["width:100%;"]);
export var StyledSelectableButton = styled.input.withConfig({
  displayName: "Selectablestyled__StyledSelectableButton",
  componentId: "l7eb6r-7"
})(["display:none;"]);
export var StyledSelectableContent = styled.div.withConfig({
  displayName: "Selectablestyled__StyledSelectableContent",
  componentId: "l7eb6r-8"
})(["display:flex;align-items:center;"]);
export var StyledSelectableButtonContentWrapper = styled(Card).withConfig({
  displayName: "Selectablestyled__StyledSelectableButtonContentWrapper",
  componentId: "l7eb6r-9"
})(["& > div{display:flex;justify-content:center;height:40px;}"]);
export var StyledButtonLabel = styled.label.withConfig({
  displayName: "Selectablestyled__StyledButtonLabel",
  componentId: "l7eb6r-10"
})(["cursor:pointer;"]);
export var StyledButtonText = styled(CopyText).attrs(function () {
  return {
    tag: 'div'
  };
}).withConfig({
  displayName: "Selectablestyled__StyledButtonText",
  componentId: "l7eb6r-11"
})(["line-height:", ";margin-left:", ";width:100%;"], function (_ref23) {
  var theme = _ref23.theme;
  return theme.font.lineHeight.sm;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.spacing.base.xxs;
});
//# sourceMappingURL=Selectable.styled.js.map