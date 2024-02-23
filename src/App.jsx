import { Header } from "@/stories/components/organisms/Header";
import { Resume } from "@/stories/components/templates/Resume";
import { useEffect, useState } from "react";
import { sanityAPI } from "./sanitySetup";

function App() {
  const [resumes, setResumes] = useState(null);
  const [latestResume, setLatestResume] = useState(null);

  useEffect(() => {
    sanityAPI
      .fetch(
        `*[_type == "resume"]{
          _id,
          title,
          "pageBuilder": pageBuilder[]{
            ...,
            // Condición para expandir sólo si el bloque contiene íconos
            icons[] {
              ...,
              "iconDetails": icons->{
                // Aquí especificamos los campos que queremos de los íconos
                name,
                width,
                height,
              }
            },
            // Seguimos la referencia de iconTitle para obtener sus detalles
            "iconTitleDetails": iconTitle->{
              name,
              width,
              height,
            },
            // Nuevo: Seguir la referencia de contactDetails
            "contactDetails": contactDetails->{
              title,
              phone,
              email,
              address
            },
            "imageDetails": image.asset->{
              url,
              metadata {
                dimensions
              }
              // Suponiendo que alt y title están disponibles en los metadatos o en algún otro campo
              // alt,
              // title,
            }
          },
          pdfResume,
          slug
        }`
      )
      .then((data) => {
        setResumes(data);
        const lastResume = data.shift();
        setLatestResume(lastResume);

        console.log("lastResume ------------------->", lastResume);
      })
      .catch(console.error);
  }, []);

  const renderSection = (section) => {
    switch (section._type) {
      case "header":
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
              url: section.imageDetails.url,
              alt: "Descripción alternativa", // Ajusta según tus datos
              title: "Título de la imagen", // Ajusta según tus datos
              width: section.imageDetails.metadata.dimensions.width,
              height: section.imageDetails.metadata.dimensions.height,
            }
          : null;

        return (
          <Header
            key={section._key}
            user={{
              name: section.name,
              jobTitle: section.jobDesc,
              iconsData: iconsData,
              contactDetail: contactInfo,
            }}
          />
        );
      case "infoSection":
        const mapInfoSection = (section) => {
          const { titleSection, subtitleSection, sections, iconTitleDetails } =
            section;

          // Transformar iconTitleDetails en el formato esperado
          const iconTitleInfo = iconTitleDetails
            ? {
                name: iconTitleDetails.name,
                width: iconTitleDetails.width
                  ? iconTitleDetails.width + "px"
                  : "1em", // Asume "1em" como valor predeterminado si no está especificado
                height: iconTitleDetails.height
                  ? iconTitleDetails.height + "px"
                  : "1em", // Asume "1em" como valor predeterminado si no está especificado
              }
            : null;

          return {
            title: titleSection,
            subtitle: subtitleSection,
            icons: iconTitleInfo ? { iconsData: [iconTitleInfo] } : {}, // Si iconTitleInfo es nulo, pasa un objeto vacío
            sections: sections.map((infoItem) => {
              const {
                company,
                infoUrl,
                startDate,
                finishDate,
                jobTitle,
                jobDesc,
              } = infoItem;

              // Parsear las fechas a objetos Date
              const startDateObj = new Date(startDate);
              const finishDateObj = finishDate ? new Date(finishDate) : null;

              // Obtener los años
              const startYear = startDateObj.getFullYear();
              const finishYear = finishDateObj
                ? finishDateObj.getFullYear()
                : null;

              // Determinar el texto para la fecha
              let dateText = `${startYear}`;
              if (finishYear && startYear !== finishYear) {
                dateText += ` > ${finishYear}`;
              } else if (!finishYear) {
                dateText += " > Current";
              }

              return {
                info: {
                  company,
                  infoUrl,
                  date: dateText,
                  jobTitle,
                  jobDesc: jobDesc[0]?.children[0]?.text || "",
                },
              };
            }),
          };
        };
        return (
          <Resume key={section._key} resumeItems={[mapInfoSection(section)]} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container py-10 mx-auto px-4">
      {latestResume && (
        <main key={latestResume._id}>
          <p>Title: {latestResume.title}</p>
          {/* <pre>{JSON.stringify(latestResume.pageBuilder, null, 2)}</pre> */}
          {latestResume.pageBuilder.map((section, index) =>
            renderSection(section)
          )}
        </main>
      )}
    </div>
  );
}

export default App;
