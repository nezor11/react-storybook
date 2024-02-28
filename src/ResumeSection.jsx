import { Resume } from "@/stories/components/templates/Resume";
import blocksToHtml from "@sanity/block-content-to-html";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";

// Definir tu projectId y dataset
const projectId = "6zr8au58";
const dataset = "production";

// Función para construir la URL de la imagen desde el objeto de imagen de Sanity
const builder = imageUrlBuilder({ projectId, dataset });

const urlFor = (source) => builder.image(source);

const ResumeSection = ({ section }) => {
  const mapInfoSection = (section) => {
    const { titleSection, subtitleSection, sections, iconTitleDetails } =
      section;

    return {
      title: titleSection,
      subtitle: subtitleSection,
      icons: iconTitleDetails
        ? {
            iconsData: [
              {
                name: iconTitleDetails.name,
                width: iconTitleDetails.width
                  ? iconTitleDetails.width + "px"
                  : "1em",
                height: iconTitleDetails.height
                  ? iconTitleDetails.height + "px"
                  : "1em",
              },
            ],
          }
        : {},
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
        const dateText =
          finishYear && startYear !== finishYear
            ? `${startYear} > ${finishYear}`
            : `${startYear} > Current`;

        const imageUrl =
          imageDetails && imageDetails.url
            ? urlFor(imageDetails).width(800).height(600).url()
            : null;

        // console.log("jobDesc Original:", jobDesc);
        const consolidatedJobDescHtml = blocksToHtml({
          blocks: jobDesc,
          projectId: projectId,
          dataset: dataset,
        });
        // console.log("jobDesc HTML:", consolidatedJobDescHtml);

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

  // console.log("ResumeSection:", mapInfoSection(section));

  return <Resume key={section._key} resumeItems={[mapInfoSection(section)]} />;
};

export default ResumeSection;
