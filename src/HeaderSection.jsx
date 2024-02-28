// HeaderSection.js
import { Header } from "@/stories/components/organisms/Header";
import React from "react";

const HeaderSection = ({ section }) => {
  // Transformamos los íconos a la estructura esperada
  const iconsData = section.icons
    .map((iconGallery) => iconGallery.iconDetails)
    .map((icon) => ({
      name: icon.name,
      width: icon.width ? icon.width + "px" : "1em", // Asume "1em" como valor predeterminado si no está especificado
      height: icon.height ? icon.height + "px" : "1em", // Asume "1em" como valor predeterminado si no está especificado
    }));

  const contactInfo = section.contactDetails
    ? {
        title: section.contactDetails.title,
        phone: section.contactDetails.phone,
        email: section.contactDetails.email,
        address: section.contactDetails.address,
      }
    : {};

  const imageDetails = section.imageDetails
    ? {
        alt: "Descripción alternativa", // Ajusta según tus datos
        title: "Título de la imagen", // Ajusta según tus datos
        placeholderSrc: "https://placehold.co/400x400",
        placeholderClassName: "placeholder-image",
        src: section.imageDetails.url,
        className: "actual-image",
        width: section.imageDetails.metadata.dimensions.width,
        height: section.imageDetails.metadata.dimensions.height,
      }
    : null;

  //console.log("section -------------->", section);

  return (
    <Header
      key={section._key}
      user={{
        name: section.name,
        jobTitle: section.jobDescHeader,
        iconsData: iconsData,
        contactDetail: contactInfo,
        imageDetail: imageDetails,
      }}
    />
  );
};

export default HeaderSection;
