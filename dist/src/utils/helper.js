import{useContext as r}from"react";import{saiyanTheme as t}from"../styles/sc-vars-saiyan.js";import{alternateTheme as o}from"../styles/sc-vars-alternate.js";import{ThemeContext as e}from"styled-components";var n=function(){return r(e).name===t.name},a=function(){return r(e).name===o.name},m=function(r){var t,o=r.color,e=r.theme;return(t="primary"===o?n()?o:"grey6":o)?e?e.color[t]:t:r.defaultColor},s=function(){return r(e)},c=/<.+?>/g;export{c as containsHtmlTags,m as getColor,a as isAlternateTheme,n as isSaiyanTheme,s as useTheme};
//# sourceMappingURL=helper.js.map