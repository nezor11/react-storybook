// SectionRenderer.tsx
import React from "react";
import HeaderSection from "./HeaderSection";
import ResumeSection from "./ResumeSection";
import { Section } from "./utils/types/section";

interface Props {
  section: Section;
}

const SectionRenderer: React.FC<Props> = ({ section }) => {
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
