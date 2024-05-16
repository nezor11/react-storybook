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

// Mueve la exportación de la función mapInfoSection aquí
export const mapSliderSection = (slider: Slide) => {
  const { titleSection, sliderDetails, iconTitleDetails } = slider;

  let icons = null;
  if (iconTitleDetails) {
    icons = {
      iconsData: [
        {
          name: iconTitleDetails.name,
          width: iconTitleDetails.width ? `${iconTitleDetails.width}px` : "1em",
          height: iconTitleDetails.height
            ? `${iconTitleDetails.height}px`
            : "1em",
        },
      ],
    };
  }

  return {
    title: titleSection,
    icons: icons,
    slidesData: Array.isArray(sliderDetails)
      ? sliderDetails.map((slide) => ({
          ...slide,
          imageUrl: slide.imageUrl,
          imageAltText: slide.imageAltText,
          year: slide.workDate,
          title: slide.slideTitle,
          description: slide.slideDesc,
          iconsData: slide.icons
            ? [
                {
                  name: slide.icons.name,
                  width: slide.icons.width
                    ? `${slide.icons.width}px`
                    : undefined,
                  height: slide.icons.height
                    ? `${slide.icons.height}px`
                    : undefined,
                },
              ]
            : [],
          company: slide.company,
          summary: slide.slideSumary,
          workDone: slide.workDone,
          workType: slide.type,
          images: slide.images,
          link: { url: slide.infoUrl, text: "Learn more" },
        }))
      : [],
  };
};

const ResumeSlider: React.FC<Props> = ({ slider }) => {
  const formattedSliderData = [mapSliderSection(slider)];
  return <Resume resumeItems={formattedSliderData} />;
};

export default ResumeSlider;
