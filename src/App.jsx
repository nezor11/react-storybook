import { Footer } from "@/stories/components/molecules/Footer";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
      .then((data) => {
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

      <div className="container py-10 mx-auto px-4 max-w-5xl">
        {latestResume && (
          <main key={latestResume._id}>
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
    </HelmetProvider>
  );
}

export default App;
