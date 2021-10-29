import{toConsumableArray as e}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import n from"../../../../node_modules/lodash/isEmpty.js";import l,{useCallback as t}from"react";import{StyledSection as r,StyledHeaderWrapper as o,StyledLogo as i,StyledActionItems as a,StyledItemWrapper as u}from"./AppHeader.styled.js";import{useTheme as m}from"../../../utils/helper.js";import{NavigationMenu as c}from"../../Molecules/NavigationMenu/NavigationMenu.js";import{LanguageMenu as s}from"../../Molecules/LanguageMenu/LanguageMenu.js";import{Divider as d}from"../../Atoms/Divider/Divider.js";import{Picture as g}from"../../Atoms/Picture/Picture.js";import{GroupedActionLinks as p}from"../../Molecules/ActionLink/GroupedActionLinks/GroupedActionLinks.js";import{Button as f}from"../../Atoms/Button/Button.js";var v=l.memo((function(v){var h=v.headerContent,E=v.languages,k=v.button,A=v.onButtonClick,j=v.renderSearchBar,L=v.onLanguageChoice,b=v.logoUrl;v.setFilter,v.clearFilter;var y=v.onLogoClick,C=v.langIndex,M=v.filter,x=t((function(){return null==y?void 0:y()}),[]),B=t((function(e){return null==L?void 0:L(e)}),[]),H=m().header;return l.createElement(r,{color:"white"},l.createElement(d,{color:"primary",height:"xs"}),l.createElement(o,{padding:"".concat(H.padding)},b&&l.createElement(i,null,l.createElement(g,{alt:"thumbnail",onClick:function(){return x()},src:b,width:"107px",height:"64px"})),l.createElement(a,null,(null==h?void 0:h.links)&&!n(null==h?void 0:h.links)&&l.createElement(u,null,l.createElement(p,{color:"grey4",padding:"0 sm",fontSize:"sm",links:e(h.links)})),(null==h?void 0:h.filter)&&!n(null==h?void 0:h.filter)&&(null==h?void 0:h.filter.enabled)&&l.createElement(u,null,M),(null==h?void 0:h.searchEnabled)&&l.createElement(u,null,j),h.languageMenuEnabled&&(null==h?void 0:h.menus)&&!n(null==h?void 0:h.menus)&&l.createElement(u,null,l.createElement(c,{button:k,navActionList:e(null==h?void 0:h.menus[0].links)})),Array.isArray(E)&&E.length&&l.createElement(u,null,l.createElement(s,{extendedLanguageHandler:function(e){return B(null==e?void 0:e.id)},languages:E,setupCurrentIndex:C})),k&&k.href&&l.createElement(u,null,l.createElement(f,{actionType:"ghost",color:"grey5",size:"sm",onClick:A,href:k.href},k.actionLabel)))))}));export{v as AppHeaderComponent};
//# sourceMappingURL=AppHeader.js.map
