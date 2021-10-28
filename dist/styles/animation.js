import { css, keyframes } from "./styled";
export var fadeIn = keyframes(["from{opacity:0;}to{opacity:1;}"]);
export var fadeOut = keyframes(["from{opacity:1;}to{opacity:0;}"]);
export var placeHolderShimmer = keyframes(["0%{background-position:-468px 0;}100%{background-position:568px 0;}"]);
export var rotateBackward = keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(-360deg);}"]);
export var rotateForward = keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var pulsing = keyframes(["0%{background-position:0% 0%}100%{background-position:-135% 0%}"]);
export var shake = keyframes(["10%,90%{transform:translate3d(-1px,0,0);}20%,80%{transform:translate3d(2px,0,0);}30%,50%,70%{transform:translate3d(-4px,0,0);}40%,60%{transform:translate3d(4px,0,0);}"]);
export var fadeScaleKeyframe = keyframes(["from{transform:scale(0.7);opacity:0;}to{transform:scale(1);opacity:1;}"]);
export var slideFromRightKeyframe = keyframes(["from{transform:translateX(0);transition:all 0.3s cubic-bezier(0.25,0.5,0.5,0.9);opacity:0;}to{transform:translateX(-50%);opacity:1;transition:all 0.3s cubic-bezier(0.25,0.5,0.5,0.9);}"]);
export var slideFromBottomKeyframe = keyframes(["from{transform:translateY(20%) translateX(-50%);opacity:0;}to{transform:translateY(0) translateX(-50%);opacity:1;}"]);
export var newspaperKeyframe = keyframes(["from{transform:scale(0) rotate(720deg) translateX(-50%);opacity:0;}to{transform:scale(1) rotate(0deg) translateX(-50%);opacity:1;}"]);
export var fallKeyframe = keyframes(["from{transform:translateZ(600px) rotateX(20deg) translateX(-50%);opacity:0;}to{transform:translateZ(0px) rotateX(0deg) translateX(-50%);opacity:1;}"]);
export var superScaledKeyframe = keyframes(["from{transform:scale(2) translateX(-50%) translateY(0);opacity:0;}to{transform:scale(1) translateX(-50%) translateY(0);opacity:1;}"]);
export var pulse = css(["position:relative;height:100%;width:100%;background:#eee;background-image:linear-gradient(to right,#eee 8%,#ddd 18%,#eee 33%);background:linear-gradient(-90deg,#efefef 0%,#fcfcfc 50%,#efefef 100%);background-size:400% 400%;animation:", " 1.2s ease-in-out infinite;"], pulsing);
export var skeleton = css(["background:#eee;background-image:linear-gradient(to right,#eee 8%,#ddd 18%,#eee 33%);-webkit-background-size:800px 104px;background-size:1000px 104px;position:relative;display:block;width:100%;animation:", " 1.25s infinite ease-in forwards;"], placeHolderShimmer);
export var fadingIn = css(["animation:", " ", " ease-in forwards;transform:translateX(-50%);"], fadeIn, function (_ref) {
  var theme = _ref.theme;
  return theme.transition.long;
});
export var fadingOut = css(["animation:", " ", " ease-in forwards;transform:translateX(-50%);"], fadeOut, function (_ref2) {
  var theme = _ref2.theme;
  return theme.transition.long;
});
export var newspaper = css(["animation:", " ", " ease-in forwards;"], newspaperKeyframe, function (_ref3) {
  var theme = _ref3.theme;
  return theme.transition.long;
});
export var superScaled = css(["animation:", " ", " ease-in forwards;"], superScaledKeyframe, function (_ref4) {
  var theme = _ref4.theme;
  return theme.transition.long;
});
export var slideFromRight = css(["animation:", " ", " ease-in forwards;"], slideFromRightKeyframe, function (_ref5) {
  var theme = _ref5.theme;
  return theme.transition.long;
});
export var slideFromBottom = css(["animation:", " ", " ease-in forwards;"], slideFromBottomKeyframe, function (_ref6) {
  var theme = _ref6.theme;
  return theme.transition.long;
});
export var shaking = css(["animation:", " 1s cubic-bezier(0.36,0.07,0.19,0.97) both;animation-delay:1s;transform:translate3d(0,0,0);"], shake);
export var falling = css(["perspective:1300px;transform-style:preserve-3d;animation:", " ", " ease-in forwards;"], fallKeyframe, function (_ref7) {
  var theme = _ref7.theme;
  return theme.transition.long;
});
//# sourceMappingURL=animation.js.map