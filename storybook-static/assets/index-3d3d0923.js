import{j as o}from"./jsx-runtime-9c4ae004.js";import{r as x}from"./index-1b03fe98.js";const y=({placeholderSrc:t,src:n,alt:a,width:e,height:s})=>{const[r,l]=x.useState(!1),c=()=>{l(!0)},p={position:"relative",width:e?`${e}px`:"100%",height:s?`${s}px`:"100%"},i={width:e?`${e}px`:"100%",height:s?`${s}px`:"100%",objectFit:"cover"};return o.jsx("div",{style:p,children:o.jsxs("figure",{className:"image-wrapper",style:i,children:[!r&&o.jsx("img",{src:t,width:e,height:s,alt:`${a}-placeholder`}),o.jsx("img",{src:n,alt:a,style:{display:r?"block":"none"},onLoad:c,loading:"lazy",width:e,height:s})]})})};export{y as L};
