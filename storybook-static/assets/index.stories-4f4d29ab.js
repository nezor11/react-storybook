import{j as e}from"./jsx-runtime-9c4ae004.js";import{B as u}from"./index-53f277a3.js";import{C as g}from"./index-f48454fe.js";import{T as y}from"./index-83ae086d.js";import"./index-1b03fe98.js";import"./index-a4eac33a.js";import"./index-f96983da.js";import"./extends-e82ce7b2.js";const S={title:"Design System/Atoms/Body Copy",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"BodyCopy is a component that renders a text element. It is used to display text in a page or section. It accepts the following props: `tag`, `text`, `size`, `weight`, `align`, `emphasis`, `italic`, `underline`, and `mods`."}}},argTypes:{tag:{options:["div","span","p"],control:{type:"select"},table:{defaultValue:{summary:"p"}},description:"The tag of the text element. By default, it is set to p."},mods:{control:"text",description:"The mods property is optional and can be a string with Tailwind CSS classes. By default, it is set to text-base dark:text-white.",table:{defaultValue:{summary:"text-base dark:text-white"}}},text:{control:"text",description:"The text of the text element. By default, it is set to empty string.",type:"string",table:{defaultValue:{summary:"Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor"}}},size:{options:["sm","base","lg","xl","2xl","3xl"],control:{type:"select"},type:"string",description:"The size of the text element. By default, it is set to base. The options are sm, base, lg, xl, 2xl, and 3xl.",table:{defaultValue:{summary:"base"}}},weight:{options:["thin","normal","medium","semibold","bold","black"],control:{type:"select"},description:"The weight of the text element. By default, it is set to normal. The options are thin, normal, medium, semibold, bold, and black.",type:"string",table:{defaultValue:{summary:"normal"}}},align:{options:["left","center","right"],control:{type:"radio"},type:"string",description:"The alignment of the text element. By default, it is set to left. The options are left, center, and right.",table:{defaultValue:{summary:"left"}}},emphasis:{options:["none","low","high"],control:{type:"radio"},defaultValue:"none",description:"The emphasis of the text element. By default, it is set to none. The options are none, low, and high.",type:"string",table:{defaultValue:{summary:"none"}}},italic:{control:{type:"boolean"},description:"The italic property is optional and can be a boolean. By default, it is set to false.",type:"boolean",table:{defaultValue:{summary:!1}}},underline:{control:{type:"boolean"},description:"The underline property is optional and can be a boolean. By default, it is set to false.",type:"boolean",table:{defaultValue:{summary:!1}}}}},t={args:{tag:"p",mods:"text-base dark:text-white"}},o={args:{tag:"strong",weight:"bold",mods:"text-base dark:text-white",text:"Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor"}},a={parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{text:"Component source code:",mods:"text-base"}),e.jsx(g,{directoryPath:"src/stories/components/atoms/BodyCopy/"}),","]})};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    tag: "p",
    mods: "text-base dark:text-white"
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tag: "strong",
    weight: "bold",
    mods: "text-base dark:text-white",
    text: "Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor"
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      <Code directoryPath="src/stories/components/atoms/BodyCopy/" />,\r
    </>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const V=["Paragraph","StrongParagraph","SourceCode"];export{t as Paragraph,a as SourceCode,o as StrongParagraph,V as __namedExportsOrder,S as default};
