import{slicedToArray as e,objectSpread2 as o,extends as n}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import r,{useState as t}from"react";import{StyledInputWrapper as i,StyledInputMask as a,StyledInput as l,StyledHelpWrapper as u}from"./Input.styled.js";import{InputDivider as c}from"./InputDivider.js";import{InputIcon as p}from"./InputIcon.js";import{InputLabel as s}from"./InputLabel.js";import{CopyText as d}from"../Typography/CopyText/CopyText.js";var m={idle:"grey3",valid:"success",error:"error",disabled:"grey2"},f={valid:"valid",error:"error"},v=function(v){var y=v.autofocus,g=void 0!==y&&y,E=v.className,b=v.errorMessage,S=v.helper,x=v.helpText,h=v.iconLabel,I=v.inputIcon,C=v.inputIconSize,j=v.inputMaskProps,k=v.inputMaskRef,M=v.inputProps,T=v.inputRef,L=v.inputStyle,P=void 0===L?"default":L,z=v.inputType,F=void 0===z?"text":z,K=v.label,q=void 0===K?"":K,B=v.margin,D=void 0===B?"":B,N=v.onBlur,w=v.onChange,R=v.onClick,U=v.onClickIcon,_=v.onFocus,A=v.onKeyDown,H=v.onKeyUp,G=v.onMouseEnter,J=v.onMouseLeave,O=v.padding,Q=void 0===O?"":O,V=v.placeholder,W=void 0===V?"":V,X=v.state,Y=void 0===X?"idle":X,Z=v.value,$=t(!!Z),ee=e($,2),oe=ee[0],ne=ee[1],re=t(g),te=e(re,2),ie=te[0],ae=te[1],le=t(!1),ue=e(le,2),ce=ue[0],pe=ue[1];r.useEffect((function(){ne(ie||!!Z)}),[Z]);var se="error"===Y&&b,de="valid"===Y||"error"===Y||I,me=ie||ce?"grey5":m[Y],fe=f[Y]||"default",ve=!(null==M||!M.required),ye=o(o({},M),{},{placeholder:W,autoFocus:g,type:F,value:Z,onMouseEnter:function(e){["error","disabled"].includes(Y)||pe(!0),G&&G(e)},onMouseLeave:function(e){J&&J(e),pe(!1)},onClick:function(e){e.stopPropagation(),R&&R(e)},onFocus:function(e){_&&_(e),ne(!0),ae(!0)},onChange:function(e){w&&w(e)},onKeyUp:H,onKeyDown:A,onBlur:function(e){N&&N(e),Z||ne(!1),ae(!1)},disabled:"disabled"===Y}),ge={"aria-invalid":"error"===Y,"aria-required":ve,required:ve};return r.createElement(i,{className:E,margin:D,padding:Q},r.createElement(s,{color:me,htmlFor:null==M?void 0:M.id,inputStyle:P,label:q,shrink:oe},j?r.createElement(a,n({},j,ye,ge,{"data-test":null==j?void 0:j.name,ref:k})):r.createElement(l,n({},ye,ge,{"data-test":null==M?void 0:M.name,ref:T}))),de&&r.createElement(p,{icon:I,iconLabel:h,iconSize:C,iconState:fe,onClick:U?function(e){e.stopPropagation(),U&&U(e)}:void 0}),se&&r.createElement(c,{color:me}),se&&r.createElement(u,{inputStyle:P},r.createElement(d,{tag:"span",color:"error",fontSize:"xxs"},b)),S&&r.createElement(u,{inputStyle:P},S),x&&r.createElement(u,{inputStyle:P},r.createElement(d,{tag:"span",fontSize:"xxs"},x)))};v.displayName="Input";export{v as Input};
//# sourceMappingURL=Input.js.map
