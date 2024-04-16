import{j as e}from"./jsx-runtime-9c4ae004.js";import{L as l}from"./index-3d3d0923.js";import{C as m}from"./index-f48454fe.js";import{T as d}from"./index-83ae086d.js";import"./index-1b03fe98.js";import"./extends-e82ce7b2.js";import"./index-a4eac33a.js";import"./index-f96983da.js";const C={title:"Design System/Atoms/Lazy Image",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"LazyImage is a component that renders an image with a placeholder. It is used to display an image in a page or section. It accepts the following props: `placeholderSrc`, `src`, `alt`, `width`, and `height`."}}},argTypes:{placeholderSrc:{control:"text",description:"The placeholder image source. By default, it is set to a placeholder image from placehold.co.",table:{defaultValue:{summary:"https://placehold.co/600x400"}}},src:{control:"text",description:"The image source. By default, it is set to a random image from unsplash.com.",table:{defaultValue:{summary:"https://source.unsplash.com/random/600x400/?mountain"}}},alt:{control:"text",description:"The alt text of the image. By default, it is set to Alt text string.",table:{defaultValue:{summary:"Alt text"}}},width:{control:"number",description:"The width of the image. By default, it is set to 600.",table:{defaultValue:{summary:600}}},height:{control:"number",description:"The height of the image. By default, it is set to 400.",table:{defaultValue:{summary:400}}}}},t={args:{placeholderSrc:"https://placehold.co/600x400",src:"https://source.unsplash.com/random/600x400/?mountain",alt:"Alt text",width:600,height:400}},o={parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{text:"Component source code:",mods:"text-base"}),e.jsx(m,{directoryPath:"src/stories/components/atoms/Lazyimage/"})]})};var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    placeholderSrc: "https://placehold.co/600x400",
    src: "https://source.unsplash.com/random/600x400/?mountain",
    alt: "Alt text",
    width: 600,
    height: 400
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,c,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <Code directoryPath="src/stories/components/atoms/Lazyimage/" />\r
    </>
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const S=["Default","SourceCode"];export{t as Default,o as SourceCode,S as __namedExportsOrder,C as default};
