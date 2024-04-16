import{j as e}from"./jsx-runtime-9c4ae004.js";import{T as d}from"./index-83ae086d.js";import{C as p}from"./index-f48454fe.js";import"./index-1b03fe98.js";import"./index-a4eac33a.js";import"./index-f96983da.js";import"./extends-e82ce7b2.js";const g={title:"Design System/Atoms/Title Copy",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"TitleCopy is a component that renders a title with customizable tag, text, and styles. It is used to display a title in a page or section. It is a wrapper around the HTML heading tags (h1, h2, h3, h4, h5, h6). It accepts the following props: `as`, `text`, `align`, `italic`, `underline`, and `mods`."}}},argTypes:{as:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"},description:"The tag of the title element. By default, it is set to h1.",table:{defaultValue:{summary:"h1"}}},mods:{control:"text",description:"The mods property is optional and can be a string with Tailwind CSS classes. By default, it is set to text-6xl.",table:{defaultValue:{summary:"text-6xl"}}},text:{control:"text",type:"string",description:"The text of the title element. By default, it is set to Rodrigor.",table:{defaultValue:{summary:"Rodrigor"}}},align:{options:["left","center","right"],control:{type:"radio"},type:"string",description:"The alignment of the title element. By default, it is set to left.",table:{defaultValue:{summary:"left"}}},italic:{control:{type:"boolean"},type:"boolean",description:"The italic property is optional and can be a boolean. By default, it is set to false.",table:{defaultValue:{summary:!1}}},underline:{control:{type:"boolean"},type:"boolean",description:"The underline property is optional and can be a boolean. By default, it is set to false.",table:{defaultValue:{summary:!1}}}}},t={args:{as:"h1",mods:"text-6xl"}},o={parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{text:"Component source code:",mods:"text-base"}),e.jsx(p,{directoryPath:"src/stories/components/atoms/TitleCopy/"})]})};var a,s,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    as: "h1",
    mods: "text-6xl"
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var n,i,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <Code directoryPath="src/stories/components/atoms/TitleCopy/" />\r
    </>
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["Default","SourceCode"];export{t as Default,o as SourceCode,b as __namedExportsOrder,g as default};
