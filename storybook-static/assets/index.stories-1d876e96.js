import{j as t}from"./jsx-runtime-9c4ae004.js";import{S as c}from"./index-87355a56.js";import{T as l}from"./index-83ae086d.js";import{C as d}from"./index-f48454fe.js";import"./index-1b03fe98.js";import"./index-a4eac33a.js";import"./index-f96983da.js";import"./extends-e82ce7b2.js";const f={title:"Design System/Atoms/Subtitle Copy",component:c,parameters:{docs:{description:{component:"SubtitleCopy is a component that renders a subtitle with customizable tag, text, and styles. It is used to display a subtitle in a page or section. It is a wrapper around the HTML heading tags (h1, h2, h3, h4, h5, h6). It accepts the following props: `subtitle`, `text`, `mods`, and `styles`."}}},tags:["autodocs"],argTypes:{subtitle:{description:"The subtitle property is optional and can be an AllowedTagValues ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'). By default, it is set to 'h2'.",options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"},defaultValue:"h2"},text:{description:"The text property is optional and can be a string. By default, it is set to 'Papaar papaar'.",control:"text",value:"Papaar papaar",type:"string"},mods:{description:"The mods property is optional and can be a string with tailwind or css classes. By default, it is set to 'text-3xl uppercase'.",control:"text",value:"text-3xl uppercase",type:"string"},styles:{description:"The styles property is optional and can be a CSSProperties object. By default, it is set to an empty object.",control:"object",value:{},type:"string"}}},e={args:{subtitle:"h2"}},o={parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},render:()=>t.jsxs(t.Fragment,{children:[t.jsx(l,{text:"Component source code:",mods:"text-base"}),t.jsx(d,{directoryPath:"src/stories/components/atoms/SubtitleCopy/"})]})};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    subtitle: "h2"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var n,i,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <Code directoryPath="src/stories/components/atoms/SubtitleCopy/" />\r
    </>
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const S=["Default","SourceCode"];export{e as Default,o as SourceCode,S as __namedExportsOrder,f as default};
