import React from "react";
import HeaderSection from "./HeaderSection";
import ResumeSection from "./ResumeSection";
import ResumeSlider from "./ResumeSlider";
import { Section, Slide } from "./utils/types/section";

interface Props {
  section?: Section | Slide;
}

const SectionRenderer: React.FC<Props> = ({ section }) => {
  switch (section._type) {
    case "header":
      return <HeaderSection section={section as Section} />;
    case "infoSection":
      return <ResumeSection section={section as Section} />;
    case "sliderSection":
      return <ResumeSlider slider={section as Slide} />;
    default:
      return null;
  }
};

export default SectionRenderer;
