import { Footer } from "@/stories/components/molecules/Footer";
import { Resume } from "@/utils/types/resume";
import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeContext } from "./contexts";
import SectionRenderer from "./SectionRenderer";
import { sanityAPI } from "./utils/setup/sanitySetup";
import { ThemeContextInterface } from "./utils/types/theme";

// Componente para los elementos cargados desde el JSON
const ResumeContent = ({ latestResume }: { latestResume: Resume }) => {
  return (
    <>
      <main key={latestResume._id}>
        {latestResume.pageBuilder.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
        {latestResume.pageBuilder[0] && (
          <Footer
            copy_right_text={latestResume.title}
            last_updated={latestResume._updatedAt}
            contact_details={latestResume.pageBuilder[0].contactDetails}
            my_link={{
              link_text: "Download PDF Resume",
              href: latestResume.pdfResumeUrl,
              target: "_blank",
              rel: "canonical",
            }}
          />
        )}
      </main>
    </>
  );
};

function App() {
  const [resumes, setResumes] = useState<Resume[] | null>(null);
  const [latestResume, setLatestResume] = useState<Resume | null>(null);

  const { darkTheme, toggleTheme } = useContext(
    ThemeContext
  ) as ThemeContextInterface;

  useEffect(() => {
    sanityAPI
      .fetch<Resume[]>(
        `*[_type == "resume"]{
          _id,
          title,
          _updatedAt,
          "pageBuilder": pageBuilder[]{
            ...,
            icons[] {
              "iconDetails": icons->{
                name,
                width,
                height,
              }
            },
            "iconTitleDetails": iconTitle->{
              name,
              width,
              height,
            },
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
            }
          },
          "pdfResumeUrl": pdfResume.asset->url,
          slug
        }`
      )
      .then((data: Resume[]) => {
        setResumes(data);
        const lastResume = data.shift();
        setLatestResume(lastResume);
      })
      .catch(console.error);
  }, []);

  return (
    <HelmetProvider>
      {latestResume && (
        <Helmet>
          <title>
            Jorge Martínez Ortiz - Frontend Developer, Designer, Creator,
            Frontender, Trainer
          </title>
          <meta
            name="description"
            content="Detail-oriented designer, creator, and developer with a passion for usability and frontend. Skilled in content management systems and committed to creating a positive work environment."
          />
          {/* <!-- Twitter Card --> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@JorgeMartinez" />
          <meta
            name="twitter:title"
            content="Jorge Martínez Ortiz - Designer, Creator, Developer, Trainer"
          />
          <meta
            name="twitter:description"
            content="Detail-oriented designer, creator, and developer with a passion for usability and frontend. Skilled in content management systems and committed to creating a positive work environment."
          />
          {/* <!-- Add Twitter Image if available --> */}
          {/* <!-- <meta name="twitter:image" content="URL_TO_IMAGE"/> --> */}

          {/* <!-- Open Graph (OG) --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="URL_TO_RESUME" />
          <meta
            property="og:title"
            content="Jorge Martínez Ortiz - Designer, Creator, Developer, Trainer"
          />
          <meta
            property="og:description"
            content="Detail-oriented designer, creator, and developer with a passion for usability and frontend. Skilled in content management systems and committed to creating a positive work environment."
          />
          {/* <!-- Add OG Image if available --> */}
          {/* <!-- <meta property="og:image" content="URL_TO_IMAGE"/> --></meta> */}
        </Helmet>
      )}

      <div className="container py-10 mx-auto px-4 max-w-5xl bg-bgColor text-textColor">
        <h1 className="text-3xl">Theme {darkTheme ? "dark" : "light"}</h1>
        <button
          onClick={toggleTheme}
          className="mt-2 w-full rounded-none bg-bgColor p-2 text-center text-2xl uppercase tracking-[3px] text-textColor transition-all duration-300 ease-in-out hover:rounded-lg"
        >
          Toggle
        </button>
        {/* Renderizar los elementos cargados desde el JSON */}
        {latestResume && <ResumeContent latestResume={latestResume} />}
      </div>
    </HelmetProvider>
  );
}

export default App;
