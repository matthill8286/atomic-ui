import{media as n}from"../../../styles/media.js";import{getBoxDimension as t}from"../../../styles/sc-shared-functions.js";import{styled as o,css as e}from"../../../styles/styled.js";import{Typo as c}from"../../Atoms/Typography/Typo/Typo.js";import{Icon as i}from"../../Atoms/Icon/Icon.js";import{CopyText as a}from"../../Atoms/Typography/CopyText/CopyText.js";var r=o.section.withConfig({displayName:"Accordionstyled__StyledAccordionEntry",componentId:"sc-9osld1-0"})((function(n){var t=n.noBorder,o=n.theme;return"\n  ".concat(t?"":"border-top: ".concat(o.dimension.borderWidth," solid ").concat("Alternate"===o.name?"#8B8F91":o.color.grey2),"\n")})),s=o.div.withConfig({displayName:"Accordionstyled__StyledLabel",componentId:"sc-9osld1-1"})((function(o){var e=o.padding,c=o.theme,i=o.withIconsOnRight,a=o.isLarge;return" \n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    font-family: ".concat(c.font.family.default,";\n    padding: ").concat(a?c.spacing.base.md:c.spacing.base.sm," 0;\n    ").concat(i?"flex-direction: row-reverse; justify-content: space-between;":"","\n    ").concat(e?"padding: ".concat(t(c,e)||0,";"):"","\n    ").concat(n.maxSm," {\n      flex-direction: row-reverse;\n      justify-content: space-between;\n    }\n")})),d=o(c).withConfig({displayName:"Accordionstyled__StyledLabelHeading",componentId:"sc-9osld1-2"})(["word-break:break-word;max-height:",";-webkit-line-clamp:4;"],(function(n){var t=n.theme;return e(["calc("," * 4)"],t.spacing.base.md)})),m=o(i).withConfig({displayName:"Accordionstyled__StyledIcon",componentId:"sc-9osld1-3"})(["svg{transition:",";}"],(function(n){var t=n.theme;return"transform ".concat(t.transition.medium," ").concat(t.transition.defaultEasing)})),l=o(a).withConfig({displayName:"Accordionstyled__StyledEntryContent",componentId:"sc-9osld1-4"})((function(n){var o=n.padding,e=n.theme,c=n.isLarge;return" \n    padding: ".concat(c?e.spacing.base.md:e.spacing.base.sm,";\n    ").concat(o?"padding: ".concat(t(e,o)||0,";"):"","\n    font-weight: ").concat((function(n){return n.theme.font.weight.regular}),"\n")}));export{r as StyledAccordionEntry,l as StyledEntryContent,m as StyledIcon,s as StyledLabel,d as StyledLabelHeading};
//# sourceMappingURL=Accordion.styled.js.map