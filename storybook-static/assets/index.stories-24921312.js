import{j as t}from"./jsx-runtime-9c4ae004.js";import{C as E}from"./index-f48454fe.js";import{T as I}from"./index-83ae086d.js";import"./index-1b03fe98.js";import"./extends-e82ce7b2.js";import"./index-a4eac33a.js";import"./index-f96983da.js";const L=({primary:k=!1,backgroundColor:z=null,radius:n,size:T="medium",label:j,...V})=>{const l="storybook-button",P=`storybook-button--${T}`,w=[l,P,k?"storybook-button--primary":"storybook-button--secondary",l.trim()],v={backgroundColor:z||void 0,borderRadius:n?`${n}px`:void 0};return t.jsx("button",{type:"button",className:w.join(" "),style:v,...V,children:j})},q={title:"Design System/Atoms/Button",component:L,tags:["autodocs"],parameters:{docs:{description:{component:"Button is a component that renders a button with customizable text, size, and styles. It is used to trigger an action when clicked. It accepts the following props: `primary`, `backgroundColor`, `size`, `label`, and `onClick`."}}},argTypes:{primary:{control:"boolean",description:"The primary property is optional and can be a boolean. By default, it is set to false.",table:{defaultValue:{summary:!0}}},backgroundColor:{control:"color",type:"string",description:"The background color of the button.",table:{defaultValue:{summary:"transparent"}}},size:{control:{type:"radio"},options:["small","medium","large"],type:"string",description:"The size of the button. By default, it is set to medium.",table:{defaultValue:{summary:"medium"}}},label:{control:"text",description:"The text of the button. By default, it is set to Button.",table:{defaultValue:{summary:"Button"}}},radius:{control:"number",description:"The border radius of the button.",type:"number",table:{defaultValue:{summary:0}}}}},e={args:{primary:!0,label:"Button"}},o={args:{label:"Button"}},r={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}},a={parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},render:()=>t.jsxs(t.Fragment,{children:[t.jsx(I,{text:"Component source code:",mods:"text-base"}),t.jsx(E,{directoryPath:"src/stories/components/atoms/Button/"})]})};var c,i,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,y,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,B,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(h=(B=s.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var x,C,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => <>\r
      <TitleCopy text="Component source code:" mods="text-base" />\r
      <Code directoryPath="src/stories/components/atoms/Button/" />\r
    </>
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const G=["Primary","Secondary","Large","Small","SourceCode"];export{r as Large,e as Primary,o as Secondary,s as Small,a as SourceCode,G as __namedExportsOrder,q as default};
