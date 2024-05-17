// ResumeSlider.tsx
import {
  Resume,
  SliderSectionObject,
} from "@/stories/components/templates/Resume";
import { InfoSlide, Slide } from "@/utils/types/section";
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

export const mapSliderSection = (slider: Slide) => {
  const { titleSection, sliderDetails, iconTitleDetails } = slider;

  console.log("sliderDetails ***************** ", sliderDetails);

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

  // Asegurarse de que sliderDetails es un array
  const slides = Array.isArray(sliderDetails?.slides)
    ? sliderDetails.slides
    : [];

  console.log("slides before map: ", slides);

  const slidesData = slides.map((slide: InfoSlide) => {
    // Verificar la estructura de cada slide antes de retornarlo
    const slideData = {
      imageUrl: slide.slideDetails.slideImage?.src || null,
      imageWidth: slide.slideDetails.slideImage?.width || null,
      imageHeight: slide.slideDetails.slideImage?.height || null,
      imageAltText: slide.slideDetails.slideImage?.alt || null,
      year:
        new Date(slide.slideDetails.workDate).getFullYear().toString() || "",
      title: slide.slideDetails.slideTitle || "",
      name: slide.slideDetails.name || "",
      iconsData: slide.slideDetails.icons
        ? slide.slideDetails.icons.map((icon) => ({
            name: icon.icon.name || "",
            width: icon.icon.width || "",
            height: icon.icon.height || "",
          }))
        : [],
      company: slide.slideDetails.company || "",
      summary: slide.slideDetails.slideSummary || "",
      description: slide.slideDetails.slideDesc || "",
      workDone: slide.slideDetails.workDone || [],
      workType: slide.slideDetails.type || "",
      images: slide.slideDetails.images || [],
      link: { url: slide.slideDetails.infoUrl || "", text: "Learn more" },
    };

    console.log("slideData: ", slideData);
    return slideData;
  });

  return {
    title: titleSection,
    icons: icons,
    slidesData: slidesData,
  };
};

const ResumeSlider: React.FC<Props> = ({ slider }) => {
  const formattedSliderData: SliderSectionObject = {
    ...mapSliderSection(slider),
    type: "sliderSection",
  };

  console.log("formattedSliderData --------------->", formattedSliderData);

  return <Resume resumeItems={[formattedSliderData]} />;
};

export default ResumeSlider;
