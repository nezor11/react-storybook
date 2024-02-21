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
          pageBuilder,
          pdfResume,
          slug,
      }`
      )
      .then((data) => {
        setResumes(data);
        const lastResume = data.shift();
        setLatestResume(lastResume);
      })
      .catch(console.error);
  }, []);

  const mapInfoSection = (section) => {
    const { titleSection, subtitleSection, sections } = section;
    return {
      title: titleSection,
      subtitle: subtitleSection,
      sections: sections.map((infoItem) => {
        const {
          subtitleSection,
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
        const finishYear = finishDateObj ? finishDateObj.getFullYear() : null;

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

  const renderSection = (section) => {
    switch (section._type) {
      case "header":
        const { name, jobDesc } = section;
        return (
          <Header
            key={section._key}
            user={{ name: section.name, jobTitle: section.jobDesc }}
          />
        );
      case "infoSection":
        return (
          <Resume key={section._key} resumeItems={[mapInfoSection(section)]} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container py-20 mx-auto px-4">
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
