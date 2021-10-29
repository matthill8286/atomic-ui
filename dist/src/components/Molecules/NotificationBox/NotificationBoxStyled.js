import{fadingIn as t,fadingOut as i,shaking as n}from"../../../styles/animation.js";import{media as o}from"../../../styles/media.js";import{margin as e}from"../../../styles/sc-shared-functions.js";import{styled as a,css as r}from"../../../styles/styled.js";import{Icon as c}from"../../Atoms/Icon/Icon.js";import{Button as s}from"../../Atoms/Button/Button.js";var d=a.div.withConfig({displayName:"NotificationBoxStyled__StyledNotificationHeadline",componentId:"sc-1p0qr7g-0"})(["display:flex;align-items:center;","{margin-right:",";> svg{position:relative;","{width:24px;height:24px;}}}"],c,(function(t){return t.theme.spacing.base.xs}),o.md),p=a.div.withConfig({displayName:"NotificationBoxStyled__StyledCopyTextDiv",componentId:"sc-1p0qr7g-1"})(["margin-top:",";"," &:first-child{&,> *{margin-top:0;}}&:last-child > *{margin-bottom:0;}"],(function(t){return t.theme.spacing.base.xs}),e),m=a(s).withConfig({displayName:"NotificationBoxStyled__StyledButton",componentId:"sc-1p0qr7g-2"})([""]),l=r(["flex-direction:row;& ",":first-child{margin-right:",";}& ",":last-child{margin-left:",";}"],m,(function(t){return t.theme.spacing.base.xs}),m,(function(t){return t.theme.spacing.base.xs})),f=r(["& ",":nth-child(n + 2){margin-top:",";}"],m,(function(t){return t.theme.spacing.base.xs})),u=a.div.withConfig({displayName:"NotificationBoxStyled__StyledButtonDiv",componentId:"sc-1p0qr7g-3"})(["display:flex;align-items:center;flex-direction:column;justify-content:center;margin-top:",";",""],(function(t){return t.theme.spacing.base.md}),(function(t){return"row"===t.buttonLayout?l:f})),g=a.div.withConfig({displayName:"NotificationBoxStyled__StyledLinkDiv",componentId:"sc-1p0qr7g-4"})(["display:flex;align-items:start;flex-direction:column;justify-content:start;font-size:",";"," + &{margin-top:",";}",""],(function(t){return t.theme.font.size.sm}),u,(function(t){return t.theme.spacing.base.sm}),(function(t){return"center"===t.alignLinks&&r(["> a,button{margin:0 auto;}"])})),h=a.button.withConfig({displayName:"NotificationBoxStyled__StyledNotificationClose",componentId:"sc-1p0qr7g-5"})(["appearance:none;border:0;padding:0;margin:0;border-radius:0;background:transparent;position:absolute;cursor:pointer;right:0;top:0;z-index:1;width:",";height:",";display:flex;place-items:center;place-content:center;&:focus{outline:0;user-focus:none;}"],(function(t){return t.theme.spacing.base.lg}),(function(t){return t.theme.spacing.base.lg})),x=a.div.withConfig({displayName:"NotificationBoxStyled__StyledNotificationBoxWrapper",componentId:"sc-1p0qr7g-6"})([""," min-width:0;z-index:25;","{max-width:","px;","}"," ",""],(function(t){var i=t.rootPosition;return"position: "+(i?"".concat(i,";"):"absolute")+";"}),o.sm,(function(t){return 64*t.theme.defaultSpacing}),(function(t){var i=t.maxWidth;return i&&"max-width: ".concat(i,";")}),(function(t){var i=t.maxWidth;return i&&"max-width: ".concat(i,";")}),(function(o){var e=o.animation,a=o.title,c=o.tooltip;return["fadeIn"===e&&t,"fadeOut"===e&&i,"shake"===e&&n,!a&&r(["p:first-child{margin-top:0;}"]),c&&r(["top:","px;left:","px;width:",";"],c.top,c.left,c.width?"".concat(c.width,"px"):"inherit")]})),y=a.span.withConfig({displayName:"NotificationBoxStyled__StyledArrow",componentId:"sc-1p0qr7g-7"})(["position:absolute;background-color:",";border-radius:",";border:none;height:20px;margin:0;padding:0;transform:rotate(45deg);width:20px;",""],(function(t){return t.theme.color.white}),(function(t){return t.theme.dimension.borderRadius1}),(function(t){var i=t.arrowLeft,n=t.arrowPosition,o=t.theme;return["top"===n[0]?"top: -".concat(o.spacing.base.xs,";"):"bottom: -".concat(o.spacing.base.xs,";"),"left"===n[1]?"left: ".concat(o.spacing.base.md,";"):"right: ".concat(o.spacing.base.md,";"),i&&"left: ".concat(i,"px; right: auto;")]})),b=a.span.withConfig({displayName:"NotificationBoxStyled__StyledBodyHtml",componentId:"sc-1p0qr7g-8"})(["color:inherit;a,a:hover,a:focus,a:active{color:inherit;}"]);export{y as StyledArrow,b as StyledBodyHtml,m as StyledButton,u as StyledButtonDiv,p as StyledCopyTextDiv,g as StyledLinkDiv,x as StyledNotificationBoxWrapper,h as StyledNotificationClose,d as StyledNotificationHeadline};
//# sourceMappingURL=NotificationBoxStyled.js.map