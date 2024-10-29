import { Resume } from "@/stories/components/templates/Resume";
import type { Section } from "@/utils/types/section";
import blocksToHtml from "@sanity/block-content-to-html";
import imageUrlBuilder from "@sanity/image-url";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface Props {
  section: Section;
}

// Definir tu projectId y dataset
const projectId = "6zr8au58";
const dataset = "production";

// Function to build the image URL from the Sanity image object
const builder = imageUrlBuilder({ projectId, dataset });

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const urlFor = (source: any) => {
  // Use the appropriate type
  return builder.image(source);
};

// Exporta la función mapInfoSection aquí
export const mapInfoSection = (section: Section) => {
  const { titleSection, subtitleSection, sections, iconTitleDetails } = section;

  let icons = null;

  if (iconTitleDetails) {
    icons = {
      name: iconTitleDetails.name,
      width: iconTitleDetails.width ? `${iconTitleDetails.width}px` : "1em",
      height: iconTitleDetails.height ? `${iconTitleDetails.height}px` : "1em",
      iconsData: [iconTitleDetails], // Ensure iconsData is an array
    };
  }

  return {
    title: titleSection,
    subtitle: subtitleSection,
    icons: icons,
    sections: sections.map((infoItem) => {
      const {
        company,
        infoUrl,
        startDate,
        finishDate,
        jobTitle,
        jobDesc,
        imageDetails,
      } = infoItem;

      const startDateObj = new Date(startDate);
      const finishDateObj = finishDate ? new Date(finishDate) : null;
      const startYear = startDateObj.getFullYear();
      const finishYear = finishDateObj ? finishDateObj.getFullYear() : null;

      let dateText = `${startYear} > Current`;

      if (finishDateObj) {
        const finishYear = finishDateObj.getFullYear();
        dateText =
          startYear !== finishYear ? `${startYear} > ${finishYear}` : dateText;
      }

      if (startYear === finishYear) {
        dateText = startYear.toString();
      }

      const imageUrl = imageDetails?.url
        ? urlFor(imageDetails).width(800).height(600).url()
        : null;

      const consolidatedJobDescHtml = blocksToHtml({
        blocks: jobDesc,
        projectId: projectId,
        dataset: dataset,
      });

      return {
        info: {
          company,
          infoUrl,
          date: dateText,
          jobTitle,
          jobDesc: consolidatedJobDescHtml,
          imageDetails: imageUrl
            ? { src: imageUrl, alt: "Image Alt Text" }
            : null,
        },
      };
    }),
  };
};

const ResumeSection: React.FC<Props> = ({ section }) => {
  return (
    <Resume
      key={section._key}
      resumeItems={[{ ...mapInfoSection(section), type: "infoSection" }]}
    />
  );
};

export default ResumeSection;
