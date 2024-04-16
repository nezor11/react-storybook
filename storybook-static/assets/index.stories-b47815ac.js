import{j as e}from"./jsx-runtime-9c4ae004.js";import{B as g}from"./index-119c52f6.js";import{L as f}from"./index-b1aecd7c.js";import{C as h}from"./index-73b17a70.js";import"./index-1b03fe98.js";import"./index-a4eac33a.js";import"./index-f96983da.js";import"./extends-e82ce7b2.js";import"./index-f6b105ee.js";const u=({copy_right_text:c="Sage",my_link:a={link_text:"",href:"",rel:""},contact_details:n={title:"",email:"",phone:""},last_updated:r="",mods:j="",...i})=>{const m=new Date().getFullYear(),d=r?(x=>{const p={day:"numeric",month:"long",year:"numeric"};return new Date(x).toLocaleDateString(void 0,p)})(r.toString()):null;return e.jsxs("footer",{...i,children:[e.jsx("div",{className:"flex items-center pb-6",children:e.jsx("div",{className:"grow border-b border-gray-600"})}),n&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"contact-wrapper mt-0 mb-6",children:[e.jsx(h,{contactDetail:n})," "]})}),e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-start justify-between",children:[e.jsx("div",{className:"flex flex-row lg:flex-col items-center lg:items-start justify-between",children:e.jsxs("div",{children:[r&&e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-sm",children:e.jsxs("em",{className:"text-gray-600",children:["Last updated: ",d]})})}),e.jsxs("p",{className:"text-sm text-gray-600",children:["© ",m," ",c]})]})}),e.jsx("div",{className:"flex-none mt-10 lg:mt-0",children:e.jsx(g,{size:"sm",variant:"outline",children:a?e.jsx(f,{...a}):null})})]})]})},S={title:"Design System/Organisms/Footer",component:u,tags:["autodocs"],argTypes:{copy_right_text:{control:"text",defaultValue:"Google"},mods:{control:"text",defaultValue:""},my_link:{control:"object",defaultValue:{link_text:"Link text",href:"https://carbon.sage.com",target:"_blank",rel:"noreferrer noopener"}}}},t={args:{mods:"",copy_right_text:"Google",my_link:{link_text:"Link text",href:"https://carbon.sage.com",target:"_blank",rel:"noreferrer noopener"},contact_details:{title:"Casa Barcelona",phone:"+34609457202",email:"contact@nezor.es",address:"08025 Barcelona"}}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    mods: "",
    copy_right_text: "Google",
    my_link: {
      link_text: "Link text",
      href: "https://carbon.sage.com",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    contact_details: {
      title: "Casa Barcelona",
      phone: "+34609457202",
      email: "contact@nezor.es",
      address: "08025 Barcelona"
    }
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,S as default};
