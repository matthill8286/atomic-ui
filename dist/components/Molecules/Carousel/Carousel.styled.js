import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";
export var StyledCarousel = styled.div.withConfig({
  displayName: "Carouselstyled__StyledCarousel",
  componentId: "sc-1i8nqk7-0"
})(["width:100%;position:relative;margin:0 auto;", " & .slick-slider.mms-th-slider{", "{margin-top:", ";}& .slick-list{width:90%;margin:0 auto;box-sizing:content-box;& .slick-track{& .slick-current{border:2px solid ", " !important;box-shadow:", ";}& .slick-slide{margin:0 ", ";padding:", ";box-sizing:border-box;border:1px solid ", ";border-radius:", ";& div[tabindex]{outline:0;}}}}& div[tabindex]{outline:0;position:relative;> img{position:absolute;width:40%;top:0;bottom:0;left:0;right:0;margin:auto;}}}& .slick-slider{position:relative;display:block;box-sizing:border-box;user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent;", "{&:hover{& .slick-arrow{&.slick-prev,&.slick-next{display:block !important;}}}}& .slick-list{position:relative;padding:", ";transform:translate3d(0,0,0);box-sizing:content-box;overflow:", ";margin:", ";& .slick-track{display:flex;position:relative;top:0;left:0;transform:translate3d(0,0,0);& .slick-slide{", ";display:flex;align-items:center;justify-content:center;-webkit-justify-content:center;", " height:auto;position:relative;float:left;& img{display:block;margin:auto;max-width:100%;}& > div{width:100%;height:100%;display:flex;}}}}", " & .slick-dots{position:relative;list-style:none;display:block;float:left;margin:", ";padding:", " 0;& li{position:relative;display:inline-block;padding:0;padding-bottom:", ";margin-left:", ";margin-right:", ";", "{&:hover{padding-bottom:0;margin-left:", ";margin-right:", ";&:first-child{margin-left:0;}& div{background-color:", ";border-color:", ";height:", ";width:", ";cursor:pointer;}}}&:first-child{margin-left:", ";}& div{border:0;background-color:", ";border-color:", ";border-radius:", ";display:block;height:", ";width:", ";outline:none;color:transparent;border-style:solid;border-width:1px;box-sizing:border-box;}&.slick-active{padding-bottom:0;margin-left:", ";margin-right:", ";&:first-child{margin-left:0;}& div{background-color:", ";border-color:", ";height:", ";width:", ";opacity:1;}}}}& > .slick-arrow{z-index:1;position:absolute;top:calc(50% + 16px);outline:0;transform:translateY(-50%);margin-top:", ";border:none;height:", ";width:", ";border-radius:", ";background:", ";& svg{position:relative;cursor:pointer;top:", ";left:", ";}&:hover{cursor:pointer;}&.slick-disabled{opacity:0;&:hover{cursor:default;}}&.slick-next{right:", ";", "{right:", ";}display:none !important;}&.slick-prev{right:", ";", "{left:", ";}display:none !important;}}}", ""], function (_ref) {
  var theme = _ref.theme,
      boxShadow = _ref.boxShadow;
  return boxShadow && "\n      & .slick-list {\n        box-shadow: ".concat(theme.dimension.elevationLevel2, ";\n      }\n  ");
}, media.sm, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.lg;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.error;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dimension.elevationLevel2;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.sm;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.sm;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.grey2;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.dimension.borderRadius1;
}, media.xl, function (_ref9) {
  var theme = _ref9.theme;
  return "0 0 ".concat(theme.spacing.base.sm, " 0");
}, function (_ref10) {
  var hasOverflow = _ref10.hasOverflow;
  return hasOverflow ? 'visible' : 'hidden';
}, function (_ref11) {
  var hasPadding = _ref11.hasPadding;
  return hasPadding ? '0 -10px' : '0';
}, function (_ref12) {
  var hasPadding = _ref12.hasPadding;
  return hasPadding && 'margin: 0 10px';
}, function (_ref13) {
  var fullHeight = _ref13.fullHeight;
  return fullHeight && css(["& > div{height:100%;& > div{height:100%;}}"]);
}, function (_ref14) {
  var hasThumbnails = _ref14.hasThumbnails;
  return !hasThumbnails ? "\n      & .slick-next, & .slick-prev {\n        display: none !important;\n      }\n      :hover{\n        & .slick-next, & .slick-prev {\n          display: block !important;\n        }\n      }\n    " : "\n        & .slick-next, & .slick-prev {\n          display: none !important;\n          ".concat(media.sm, " {\n          display: block !important;\n        }\n      }\n    ");
}, function (_ref15) {
  var theme = _ref15.theme;
  return "-".concat(theme.spacing.base.sm, " 0 0 0");
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.spacing.base.sm;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.spacing.base.xxs;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.spacing.base.xs;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.spacing.base.xs;
}, media.lg, function (_ref20) {
  var theme = _ref20.theme;
  return theme.spacing.base.xxs;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.spacing.base.xxs;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.color.primary;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.color.primary;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.spacing.base.sm;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.spacing.base.sm;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.spacing.base.xxs;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.color.grey2;
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.color.grey2;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.spacing.base.xs;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.spacing.base.xs;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.spacing.base.xs;
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.spacing.base.xxs;
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.spacing.base.xxs;
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.color.primary;
}, function (_ref35) {
  var theme = _ref35.theme;
  return theme.color.primary;
}, function (_ref36) {
  var theme = _ref36.theme;
  return theme.spacing.base.sm;
}, function (_ref37) {
  var theme = _ref37.theme;
  return theme.spacing.base.sm;
}, function (_ref38) {
  var theme = _ref38.theme,
      hasThumbnails = _ref38.hasThumbnails;
  return hasThumbnails ? 0 : "-".concat(theme.spacing.base.md);
}, function (_ref39) {
  var theme = _ref39.theme;
  return theme.spacing.base.lg;
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.spacing.base.lg;
}, function (_ref41) {
  var theme = _ref41.theme;
  return theme.dimension.borderRadius1;
}, function (_ref42) {
  var theme = _ref42.theme,
      hasThumbnails = _ref42.hasThumbnails;
  return hasThumbnails ? "transparent" : "".concat(theme.color.black);
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.spacing.base.xxs;
}, function (_ref44) {
  var theme = _ref44.theme;
  return theme.spacing.base.xxs;
}, function (_ref45) {
  var theme = _ref45.theme,
      hasThumbnails = _ref45.hasThumbnails;
  return hasThumbnails ? theme.spacing.base.sm : 0;
}, media.md, function (_ref46) {
  var theme = _ref46.theme,
      hasThumbnails = _ref46.hasThumbnails;
  return hasThumbnails ? 0 : "-".concat(theme.spacing.base.sm);
}, function (_ref47) {
  var theme = _ref47.theme,
      hasThumbnails = _ref47.hasThumbnails;
  return hasThumbnails ? theme.spacing.base.sm : 0;
}, media.md, function (_ref48) {
  var theme = _ref48.theme,
      hasThumbnails = _ref48.hasThumbnails;
  return hasThumbnails ? 0 : "-".concat(theme.spacing.base.sm);
}, function (_ref49) {
  var whiteDots = _ref49.whiteDots,
      theme = _ref49.theme;
  return whiteDots && "\n        & .slick-dots > li > div {\n            border-color: ".concat(theme.color.white, " !important;\n            background-color: transparent;\n        }\n        & .slick-dots .slick-active > div {\n            background-color: ").concat(theme.color.white, " !important;\n            border-color: ").concat(theme.color.white, " !important;\n        }\n      ");
});
export var StyledCarouselHandler = styled.div.withConfig({
  displayName: "Carouselstyled__StyledCarouselHandler",
  componentId: "sc-1i8nqk7-1"
})(["outline:none;"]);
//# sourceMappingURL=Carousel.styled.js.map