// SectionRenderer.jsx
import React from "react";
import HeaderSection from "./HeaderSection";
import ResumeSection from "./ResumeSection";

const SectionRenderer = ({ section }) => {
  switch (section._type) {
    case "header":
      return <HeaderSection section={section} />;
    case "infoSection":
      return <ResumeSection section={section} />;
    default:
      return null;
  }
};

export default SectionRenderer;
