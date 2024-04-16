import{j as t}from"./jsx-runtime-9c4ae004.js";import{B as f}from"./index-119c52f6.js";import{C as B}from"./index-f48454fe.js";import{T as b}from"./index-83ae086d.js";import"./index-1b03fe98.js";import"./index-a4eac33a.js";import"./index-f96983da.js";import"./extends-e82ce7b2.js";const z={title:"Design System/Atoms/Button Tailwind",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"Button is a component that renders a button with customizable text, size, and styles. It is used to trigger an action when clicked. It accepts the following props: `variant`, `children`, `onClick`."}}},argTypes:{variant:{control:{type:"select"},options:["solid","outline","ghost"],type:"string",description:"The variant of the button. By default, it is set to solid.",table:{defaultValue:{summary:"solid"}}},size:{control:{type:"select"},options:["sm","md","lg"],type:"string",description:"The size of the button. By default, it is set to md.",table:{defaultValue:{summary:"md"}}},children:{control:"text",type:"string",description:"The text of the button. By default, it is set to Button.",table:{defaultValue:{summary:"Button"}}},onClick:{type:"function",description:"The onClick event of the button."}}},e={args:{variant:"solid",children:"Button"}},o={args:{variant:"outline",children:"Button"}},r={args:{variant:"ghost",children:"Button"}},s={parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},render:()=>t.jsxs(t.Fragment,{children:[t.jsx(b,{text:"Component source code:",mods:"text-base"}),t.jsx(B,{directoryPath:"src/stories/components/atoms/ButtonTailwind/"})]})};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    children: "Button"
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Button"
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Button"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      <Code directoryPath="src/stories/components/atoms/ButtonTailwind/" />\r
    </>
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const O=["Solid","Outline","Ghost","SourceCode"];export{r as Ghost,o as Outline,e as Solid,s as SourceCode,O as __namedExportsOrder,z as default};
