import {
  Resume,
  SliderSectionObject,
} from "@/stories/components/templates/Resume";
import { InfoSlide, Slide } from "@/utils/types/section";
import blocksToHtml from "@sanity/block-content-to-html";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";

interface Props {
  slider: Slide;
}

const projectId = "6zr8au58";
const dataset = "production";

const builder = imageUrlBuilder({ projectId, dataset });

const urlFor = (source: any) => builder.image(source);

const ResumeSlider: React.FC<Props> = ({ slider }) => {
  const mapSliderSection = (slider: Slide) => {
    const { titleSection, sliderDetails, iconTitleDetails } = slider;

    let icons = null;
    if (iconTitleDetails) {
      icons = {
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
      };
    }

    const slides = Array.isArray(sliderDetails?.slides)
      ? sliderDetails.slides
      : [];

    const slidesData = slides.map((slide: InfoSlide) => {
      const slideDesc = slide.slideDetails.slideDesc ?? [];

      const consolidatedJobDescHtml = blocksToHtml({
        blocks: slideDesc,
        projectId: projectId,
        dataset: dataset,
      });

      return {
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
        description: consolidatedJobDescHtml || "",
        workDone: slide.slideDetails.workDone || [],
        workType: slide.slideDetails.type || "",
        backgroundColor: slide.slideDetails.backgroundColor || "",
        videoUrl: slide.slideDetails.videoUrl || "",
        images: slide.slideDetails.images || [],
        link: { href: slide.slideDetails.infoUrl || "", text: "More Info" },
      };
    });

    return {
      title: titleSection,
      icons: icons,
      slidesData: slidesData,
    };
  };

  const formattedSliderData: SliderSectionObject = {
    ...mapSliderSection(slider),
    type: "sliderSection",
  };

  return <Resume resumeItems={[formattedSliderData]} />;
};

export default ResumeSlider;
