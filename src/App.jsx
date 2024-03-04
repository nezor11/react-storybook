import { Footer } from "@/stories/components/molecules/Footer";
import { useEffect, useState } from "react";
import SectionRenderer from "./SectionRenderer";
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
          _updatedAt,
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
          "pdfResumeUrl": pdfResume.asset->url,
          slug
        }`
      )
      .then((data) => {
        setResumes(data);
        const lastResume = data.shift();
        setLatestResume(lastResume);

        // console.log("lastResume ------------------->", lastResume);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container py-10 mx-auto px-4 max-w-5xl">
      {latestResume && (
        <main key={latestResume._id}>
          {/* <pre>{JSON.stringify(latestResume.pageBuilder, null, 2)}</pre> */}
          {latestResume.pageBuilder.map((section, index) => (
            <SectionRenderer key={index} section={section} />
          ))}
          <Footer
            copy_right_text={latestResume.title}
            last_updated={latestResume._updatedAt}
            contact_details={latestResume.pageBuilder[0].contactDetails}
            my_link={{
              link_text: "Download PDF Resume",
              href: latestResume.pdfResumeUrl,
              target: "_blank",
            }}
          />
        </main>
      )}
    </div>
  );
}

export default App;
