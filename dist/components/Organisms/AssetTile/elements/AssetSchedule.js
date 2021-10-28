import React from 'react';
import { Tag } from "../../../Atoms/Tag";
import { css, styled } from "../../../../styles/styled";
import { StyleguideCalendar, IconLiveLabel } from '@excelwithbusiness/webmobile-svg-library';
import { Icon } from "../../../Atoms/Icon";
export var StyledIcon = styled(Icon).withConfig({
  displayName: "AssetSchedule__StyledIcon",
  componentId: "sc-1dy8qgi-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["position:absolute;z-index:25;padding-left:", ";top:4px;left:0;"], theme.spacing.base.md);
});
export var StyledLiveLabel = styled(Icon).withConfig({
  displayName: "AssetSchedule__StyledLiveLabel",
  componentId: "sc-1dy8qgi-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["position:absolute;z-index:25;padding-left:", ";top:0;left:0;"], theme.spacing.base.sm);
});
var StyledAssetSchedule = styled.div.withConfig({
  displayName: "AssetSchedule__StyledAssetSchedule",
  componentId: "sc-1dy8qgi-2"
})(function (_ref3) {
  var theme = _ref3.theme;
  return css(["position:absolute;z-index:20;display:flex;padding:0 ", ";top:", ";left:0;"], theme.spacing.base.sm, theme.spacing.base.sm);
});
var StyledTag = styled(Tag).withConfig({
  displayName: "AssetSchedule__StyledTag",
  componentId: "sc-1dy8qgi-3"
})(["border-radius:6px;background-color:rgba(0,0,0,0.5);border-color:transparent;span{font-size:12px;line-height:17px;}"]);
export var AssetSchedule = function AssetSchedule(_ref4) {
  var timebox = _ref4.timebox,
      color = _ref4.color;
  var startTime = new Date(timebox === null || timebox === void 0 ? void 0 : timebox.start);
  var endTime = new Date(timebox === null || timebox === void 0 ? void 0 : timebox.end);
  var currentTime = new Date();
  var date = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  var time = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    hourCycle: 'h12'
  });
  var formattedDate = date.format(startTime);
  var formattedTime = time.format(startTime).toLocaleUpperCase();
  var tn = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var fullStart = "".concat(formattedDate, ", ").concat(formattedTime, " ").concat(tn);
  var beforeScheduledTime = currentTime.getTime() < startTime.getTime();
  var startScheduledTime = currentTime.getTime() > startTime.getTime();
  var duringScheduledTime = currentTime.getTime() < endTime.getTime();
  var showTimeSchedule = beforeScheduledTime && (duringScheduledTime || !(timebox !== null && timebox !== void 0 && timebox.end));
  var showTimeLive = startScheduledTime && (duringScheduledTime || !(timebox !== null && timebox !== void 0 && timebox.end));
  return React.createElement(StyledAssetSchedule, null, showTimeSchedule && !showTimeLive && React.createElement(React.Fragment, null, React.createElement(StyledIcon, {
    color: "white",
    width: "sm",
    height: "sm"
  }, React.createElement(StyleguideCalendar, null)), React.createElement(StyledTag, {
    weight: "bold",
    padding: {
      left: 'lg',
      right: 'xs'
    },
    text: fullStart,
    color: color
  })), showTimeLive && React.createElement(StyledLiveLabel, {
    color: "transparent",
    width: 62,
    height: 23
  }, React.createElement(IconLiveLabel, null)));
};
//# sourceMappingURL=AssetSchedule.js.map