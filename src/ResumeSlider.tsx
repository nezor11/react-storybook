/**
 * This file contains the ResumeSlider component and related utility functions.
 *
 * The ResumeSlider component is responsible for rendering a slider section of a resume.
 * It uses data from the Sanity CMS to dynamically generate the content.
 *
 * The utility functions in this file include:
 * - urlFor: A function to build the image URL from the Sanity image object.
 * - mapSliderSection: A function to map the slider data to the expected structure.
 *
 * Props:
 * - slider: An object of type Section that contains the data for the resume slider section.
 *
 * Example usage:
 *
 * <ResumeSlider slider={sliderData} />
 *
 * Where `sliderData` is an object containing the necessary data for the resume slider section.
 */

import type { SlideData } from "@/stories/components/organisms/SliderSection";
import type { SliderSectionObject } from "@/stories/components/templates/Resume";
import { Resume } from "@/stories/components/templates/Resume";
import type { Section } from "@/utils/types/section";
import blocksToHtml from "@sanity/block-content-to-html";
import imageUrlBuilder from "@sanity/image-url";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

// Configuración del cliente de Sanity
const projectId = "6zr8au58";
const dataset = "production";

const builder = imageUrlBuilder({ projectId, dataset });

const urlFor = (source: unknown) => {
  return builder.image(source);
};

interface LinkProps {
  href: string;
  text: string;
  link_text: string;
  rel: string;
}

// Mapea los datos de `slider` a la estructura `SliderSectionObject`
const mapSliderSection = (slider: Section): SliderSectionObject => {
  const { titleSection, sliderDetails, iconTitleDetails } = slider;

  const icons = iconTitleDetails
    ? {
        iconsData: [
          {
            name: iconTitleDetails.name,
            width: iconTitleDetails.width
              ? `${iconTitleDetails.width}px`
              : "1em",
            height: iconTitleDetails.height
              ? `${iconTitleDetails.height}px`
              : "1em",
          },
        ],
      }
    : null;

  const slides = Array.isArray(sliderDetails?.slides)
    ? sliderDetails.slides
    : [];

  const slidesData: SlideData[] = slides.map((slide) => {
    const slideDesc = slide.slideDetails.slideDesc ?? [];
    const consolidatedJobDescHtml = blocksToHtml({
      blocks: slideDesc,
      projectId: projectId,
      dataset: dataset,
    });

    return {
      imageUrl: slide.slideDetails.slideImage?.src || "",
      imageWidth: slide.slideDetails.slideImage?.width || undefined,
      imageHeight: slide.slideDetails.slideImage?.height || undefined,
      imageAltText: slide.slideDetails.slideImage?.alt || "",
      year: new Date(slide.slideDetails.workDate).getFullYear().toString(),
      title: slide.slideDetails.slideTitle || "",
      name: slide.slideDetails.name || "",
      iconsData: slide.slideDetails.icons
        ? slide.slideDetails.icons.map((icon) => ({
            name: icon.icon.name || "",
            width: icon.icon.width ? `${icon.icon.width}` : "1em",
            height: icon.icon.height ? `${icon.icon.height}` : "1em",
          }))
        : [],
      company: slide.slideDetails.company || "",
      summary: slide.slideDetails.slideSummary || "",
      description: consolidatedJobDescHtml,
      workDone: slide.slideDetails.workDone || [],
      workType: slide.slideDetails.type || "",
      backgroundColor: slide.slideDetails.backgroundColor || "",
      videoUrl: slide.slideDetails.videoUrl || "",
      images: slide.slideDetails.images || [],
      link: {
        href: slide.slideDetails.infoUrl || "",
        text: "More Info",
        link_text: slide.slideDetails.linkText || "More Info",
        rel: slide.slideDetails.rel || "noopener noreferrer",
      },
    };
  });

  return {
    type: "sliderSection",
    title: titleSection,
    icons,
    slidesData,
  };
};

const ResumeSlider: React.FC<{ slider: Section }> = ({ slider }) => {
  const formattedSliderData: SliderSectionObject = mapSliderSection(slider);

  return <Resume resumeItems={[formattedSliderData]} />;
};

export default ResumeSlider;
