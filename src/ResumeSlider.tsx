// ResumeSlider.tsx
import { Resume } from "@/stories/components/templates/Resume";
import { Slide } from "@/utils/types/section";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";

interface Props {
  slider: Slide;
}

// Definir tu projectId y dataset
const projectId = "6zr8au58";
const dataset = "production";

// Función para construir la URL de la imagen desde el objeto de imagen de Sanity
const builder = imageUrlBuilder({ projectId, dataset });

const urlFor = (source: any) => builder.image(source);

const ResumeSlider: React.FC<Props> = ({ slider }) => {
  const mapInfoSection = (slider: Slide) => {
    const { titleSection, sliderDetails, iconTitleDetails } = slider;

    return {
      title: titleSection,
      icons: iconTitleDetails
        ? [
            {
              name: slider.iconTitleDetails.name,
              width: slider.iconTitleDetails.width
                ? slider.iconTitleDetails.width + "px"
                : "1em",
              height: slider.iconTitleDetails.height
                ? slider.iconTitleDetails.height + "px"
                : "1em",
            },
          ]
        : [],
      slidesData:
        sliderDetails?.map((slide) => ({
          ...slide,
          imageUrl: slide.imageUrl,
          imageAltText: slide.imageAltText,
        })) || [],
    };
  };

  return <Resume key={slider._key} resumeItems={[mapInfoSection(slider)]} />;
};

export default ResumeSlider;
