import e from"react";import{InfoHost as t,BoxHeading as r,BoxSubtitle as l}from"./ErrorBox.styled.js";import o from"../../../../node_modules/@excelwithbusiness/webmobile-svg-library/dist/components/icon/IconClearCircleOutlined.js";import{Card as n}from"../../Atoms/Card/CardV2.js";import{FlexBox as m,FlexItem as a}from"../../Helper/FlexBox/FlexBox.js";import{Icon as i}from"../../Atoms/Icon/Icon.js";import{Button as c}from"../../Atoms/Button/Button.js";var s=function(s){var u=s.title,d=s.subtitle,p=s.buttonLabel,f=s.onClick,E=s.isLoading;return e.createElement(n,{elevation:0,overflow:"hidden",padding:"md",shape:"rounded-small",surface:"white"},e.createElement(m,null,e.createElement(a,null,e.createElement(i,{color:"grey6"},e.createElement(o,null))),e.createElement(a,null,e.createElement(t,null,e.createElement(r,{bold:!0,color:"grey6",fontFamily:"default",margin:"",scale:"level-4",tag:"h1"},u),e.createElement(l,null,d),e.createElement(c,{onClick:function(e){return f?f(e):null},isLoading:E,actionType:"primary"},p)))))};s.displayName="ErrorBox";export{s as ErrorBox};
//# sourceMappingURL=ErrorBox.js.map