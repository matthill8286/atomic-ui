import { css, styled } from "../../../styles/styled";
var StyledArrow = css(["", ""], function (_ref) {
  var theme = _ref.theme,
      arrowsSurfaceColor = _ref.arrowsSurfaceColor,
      _ref$brightArrows = _ref.brightArrows,
      brightArrows = _ref$brightArrows === void 0 ? false : _ref$brightArrows;
  return css(["background:", ";display:none !important;:hover{display:block !important;}& svg{fill:", " !important;}", ""], brightArrows ? theme.color.white : theme.color.black, brightArrows ? theme.color.black : theme.color.white, arrowsSurfaceColor && css(["background-color:", ";"], theme.color[arrowsSurfaceColor]));
});
export var StyledCarouselHandler = styled.div.withConfig({
  displayName: "SimpleCarouselstyled__StyledCarouselHandler",
  componentId: "nboeil-0"
})(["outline:none;"]);
export var StyledCarousel = styled.div.withConfig({
  displayName: "SimpleCarouselstyled__StyledCarousel",
  componentId: "nboeil-1"
})(["width:100%;position:relative;margin:0 auto;", " & .slick-slider{position:relative;display:block;box-sizing:border-box;user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent;& .slick-list{position:relative;padding:", ";transform:translate3d(0,0,0);box-sizing:content-box;overflow:", ";margin:", ";& .slick-track{display:flex;justify-content:center;position:relative;top:0;left:0;transform:translate3d(0,0,0);margin-left:0;margin-right:auto;& .slick-slide{display:flex;align-items:center;justify-content:center;-webkit-justify-content:center;height:auto;position:relative;float:left;", ";", ";& img{display:block;margin:auto;max-width:100%;}& > div{width:", ";height:100%;display:flex;}}}}:hover{& .slick-next,& .slick-prev{display:block !important;}& .slick-next{right:-1%;}& .slick-prev{left:-1%;}}& .slick-dots{position:absolute;top:0;right:", ";max-height:", ";width:fit-content;list-style:none;display:block;text-align:center;margin:", ";& li{position:relative;display:inline-block;padding:0;margin-right:", ";& div{background-color:transparent;border-color:", ";border-radius:", ";display:block;height:", ";width:", ";outline:none;color:transparent;border-style:solid;border-width:1px;box-sizing:border-box;&:hover{cursor:pointer;}}&.slick-active div{background:", ";opacity:1;}}}}& .slick-arrow{::before{content:unset;}z-index:1;position:absolute;top:50%;outline:0;transform:translateY( calc(-50% - 19px) );border:none;& svg{position:relative;}&:hover{cursor:pointer;}&.slick-disabled{opacity:0;&:hover{cursor:default;}}&.slick-next{", ";right:3%;border-radius:", ";}&.slick-prev{", ";left:3%;border-radius:", ";}}", ""], function (_ref2) {
  var theme = _ref2.theme,
      boxShadow = _ref2.boxShadow;
  return boxShadow && css(["& .slick-list{box-shadow:", ";}"], theme.dimension.elevationLevel2);
}, function (_ref3) {
  var theme = _ref3.theme;
  return "0 0 ".concat(theme.spacing.base.sm, " 0");
}, function (_ref4) {
  var hasOverflow = _ref4.hasOverflow;
  return hasOverflow ? 'visible' : 'hidden';
}, function (_ref5) {
  var hasPadding = _ref5.hasPadding;
  return hasPadding ? '0 -12px' : '0';
}, function (_ref6) {
  var hasPadding = _ref6.hasPadding;
  return hasPadding && 'margin: 0 12px';
}, function (_ref7) {
  var fixedWidth = _ref7.fixedWidth,
      tileWidth = _ref7.tileWidth;
  return fixedWidth && "min-width: ".concat(tileWidth, "px !important");
}, function (_ref8) {
  var _ref9;

  var fixedWidth = _ref8.fixedWidth,
      tileWidth = _ref8.tileWidth;
  return fixedWidth ? (_ref9 = "".concat(tileWidth, "px")) !== null && _ref9 !== void 0 ? _ref9 : '100%' : '100%';
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing.base.xs;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.base.sm;
}, function (_ref12) {
  var theme = _ref12.theme;
  return "-".concat(theme.spacing.base.sm, " auto 0 auto");
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing.base.sm;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.color.primary;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing.base.xs;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.spacing.base.xs;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.spacing.base.xs;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.color.primary;
}, StyledArrow, function (_ref19) {
  var theme = _ref19.theme;
  return theme.dimension.borderRadius5;
}, StyledArrow, function (_ref20) {
  var theme = _ref20.theme;
  return theme.dimension.borderRadius5;
}, function (_ref21) {
  var whiteDots = _ref21.whiteDots,
      theme = _ref21.theme;
  return whiteDots && css(["& .slick-dots{top:85%;padding:0 !important;}& .slick-dots > li > div{border-color:", " !important;background-color:transparent;}& .slick-dots .slick-active > div{background-color:", " !important;border-color:", " !important;}"], theme.color.white, theme.color.white, theme.color.white);
});
export var StyledNavArrow = styled.div.withConfig({
  displayName: "SimpleCarouselstyled__StyledNavArrow",
  componentId: "nboeil-2"
})(["position:absolute;background:", ";fill:", ";border-radius:", ";box-shadow:", ";height:", ";width:", ";cursor:pointer;z-index:3;display:none;"], function (_ref22) {
  var theme = _ref22.theme;
  return theme.color.white;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.color.grey6;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.dimension.borderRadius7;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.dimension.elevationLevel3;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.spacing.base.xxxl;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.spacing.base.xxxl;
});
//# sourceMappingURL=SimpleCarousel.styled.js.map