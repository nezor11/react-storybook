import{j as e}from"./jsx-runtime-9c4ae004.js";import{L as c}from"./index-b1aecd7c.js";import{C as m}from"./index-f48454fe.js";import{T as p}from"./index-83ae086d.js";import"./index-1b03fe98.js";import"./extends-e82ce7b2.js";import"./index-a4eac33a.js";import"./index-f96983da.js";const g={title:"Design System/Atoms/Link",component:c,parameters:{docs:{description:{component:"A link component that can be styled with tailwind classes. It accepts the following props: `link_text`, `mods`, `href`, `target`, `rel`."}}},tags:["autodocs"],argTypes:{link_text:{control:"text",description:"The text of the link element. By default, it is set to 'Link text'.",table:{defaultValue:{summary:"Link text"}}},mods:{control:"text",description:"The mods property is optional and can be a string with Tailwind CSS classes. By default, it is set to 'visited:text-purple-600'.",table:{defaultValue:{summary:"visited:text-purple-600"}}},href:{control:"text",description:"The URL of the link element. By default, it is set to 'https://carbon.sage.com'.",table:{defaultValue:{summary:"https://carbon.sage.com"}}},target:{control:"text",description:"The target of the link element. By default, it is set to '_blank'.",table:{defaultValue:{summary:"_blank"}}},rel:{control:"text",description:"The rel of the link element. By default, it is set to 'noreferrer noopener'.",table:{defaultValue:{summary:"noreferrer noopener"}}}}},t={args:{mods:"visited:text-purple-600",link_text:"Link text",href:"https://carbon.sage.com",target:"_blank",rel:"noreferrer noopener"}},r={parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{text:"Component source code:",mods:"text-base"}),e.jsx(m,{directoryPath:"src/stories/components/atoms/Link/"})]})};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    mods: "visited:text-purple-600",
    link_text: "Link text",
    href: "https://carbon.sage.com",
    target: "_blank",
    rel: "noreferrer noopener"
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <Code directoryPath="src/stories/components/atoms/Link/" />\r
    </>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["Default","SourceCode"];export{t as Default,r as SourceCode,C as __namedExportsOrder,g as default};
