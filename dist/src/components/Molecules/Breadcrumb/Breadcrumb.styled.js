import{skeleton as e}from"../../../styles/animation.js";import{media as t}from"../../../styles/media.js";import{margin as i,padding as n}from"../../../styles/sc-shared-functions.js";import{styled as r,css as o}from"../../../styles/styled.js";import{Link as s}from"../../Atoms/Link/Link.js";import{Icon as m}from"../../Atoms/Icon/Icon.js";var a=r.div.withConfig({displayName:"Breadcrumbstyled__StyledBreadcrumb",componentId:"rbbeph-0"})([""," "," text-indent:",";"," min-height:",";"],i,n,(function(e){return e.isLoading&&"-9999px"}),(function(t){return t.isLoading&&e}),(function(e){return e.theme.font.lineHeight.sm})),d=r.ul.withConfig({displayName:"Breadcrumbstyled__StyledUl",componentId:"rbbeph-1"})(["display:flex;margin:0;padding:0;"]),l=r.li.withConfig({displayName:"Breadcrumbstyled__StyledLi",componentId:"rbbeph-2"})(["display:inline-block;margin-right:",";color:",";",""],(function(e){return e.theme.spacing.base.xs}),(function(e){return e.theme.color.grey4}),(function(e){return e.isLastButOne?o(["","{","{& > svg{transform:rotate(0deg);}}}"],t.md,m):o(["display:none;","{display:inline-block;}"],t.xs)})),p=r(s).withConfig({displayName:"Breadcrumbstyled__StyledHomeLink",componentId:"rbbeph-3"})(["","{& > svg{position:relative;","}}:hover{","{& > svg{:hover{fill:",";}}}}"],m,(function(e){var t=e.theme;return o(["top:",";height:",";width:",";"],t.spacing.base.xxs,t.spacing.base.sm,t.spacing.base.sm)}),m,(function(e){return e.theme.color.grey4}));export{a as StyledBreadcrumb,p as StyledHomeLink,l as StyledLi,d as StyledUl};
//# sourceMappingURL=Breadcrumb.styled.js.map