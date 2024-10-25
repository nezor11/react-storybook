/**
 * Popup is a component that displays a popup with various details such as title, company, year, description, images, work done, work type, video URL, link, and icons data.
 *
 * Props:
 * - onClose: A function to handle the close action of the popup.
 * - title: The title of the popup.
 * - company: The name of the company. Optional, defaults to "Nezor Houze".
 * - year: The year associated with the popup. Optional.
 * - description: The description of the popup. Optional.
 * - images: An array of image data objects. Optional.
 * - workDone: An array of work done items. Optional.
 * - workType: The type of work. Optional, defaults to "Personal".
 * - videoUrl: The URL of the video. Optional.
 * - link: An object containing link properties. Optional.
 * - iconsData: An array of icon data objects. Optional.
 * - ButtonCloseComponent: A React component for the close button.
 *
 * Example usage:
 * <Popup
 *   onClose={() => console.log("Popup closed")}
 *   title="Project Title"
 *   company="Company Name"
 *   year="2022"
 *   description="Project Description"
 *   images={[{ src: "image1.jpg", width: 100, height: 100, alt: "Image 1" }]}
 *   workDone={["front_end", "back_end"]}
 *   workType="Client"
 *   videoUrl="https://example.com/video"
 *   link={{ href: "https://example.com", text: "Example Link" }}
 *   iconsData={[{ name: "icon1", width: "24", height: "24" }]}
 *   ButtonCloseComponent={({ onClick }) => <button onClick={onClick}>Close</button>}
 * />
 */

import { ContentSlider } from "@/stories/components/atoms/ContentSlider";
import { LinkProps } from "@/stories/components/atoms/Link";
import { IconData } from "@/stories/components/molecules/CardSlide";
import React, { useMemo } from "react";
import "./index.css";

export interface SanityImageData {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface PopupProps {
  onClose: () => void;
  title: string;
  company?: string;
  year?: string;
  description?: string;
  images?: SanityImageData[];
  workDone?: string[];
  workType?: string;
  videoUrl?: string;
  link?: LinkProps;
  iconsData?: IconData[];
  backgroundColor?: string;
  ButtonCloseComponent: React.FC<{ onClick: () => void }>;
}

export const Popup: React.FC<PopupProps> = ({
  onClose,
  title,
  company = "Nezor Houze",
  year,
  description,
  images = [],
  workDone = [],
  workType = "Personal",
  link,
  iconsData,
  videoUrl,
  backgroundColor,
  ButtonCloseComponent,
}) => {
  const nameMapping: { [key: string]: string } = {
    front_end: "Frontend Development",
    front_end_frameworks: "Frontend Frameworks",
    back_end: "Backend Development",
    back_end_frameworks: "Backend Frameworks",
    full_stack: "Full Stack Development",
    databases: "Databases",
    cms: "CMS",
    ecommerce: "E-commerce",
    mobile_app: "Mobile App Development",
    game_dev: "Game Development",
    machine_learning: "Machine Learning",
    data_science: "Data Science",
    artificial_intelligence: "Artificial Intelligence",
    cloud_computing: "Cloud Computing",
    dev_ops: "DevOps",
    blockchain: "Blockchain",
    iot: "Internet of Things",
    cybersecurity: "Cybersecurity",
    servers_hosting: "Servers & Hosting",
    testing_debugging: "Testing & Debugging",
    version_control: "Version Control",
    maintenance_updates: "Maintenance & Updates",
    performance_optimization: "Performance",
    responsive_design: "Responsive Design",
    ux_ui_design: "UX/UI Consultancy",
    seo: "SEO Support",
    analytics_metrics: "Analytics & Metrics",
    security: "Security",
  };

  const mappedWorkDone = useMemo(
    () => workDone.map((item) => nameMapping[item] || item),
    [workDone]
  );

  const handleClose = () => onClose();

  const randomizedImages = useMemo(
    () => images.sort(() => Math.random() - 0.5),
    [images]
  );

  return (
    <div className="min-h-screen min-w-screen overflow-hidden popup-content">
      <div className="fixed top-0 left-0 right-0 bottom-0 p-6 lg:p-0 lg:flex lg:items-center lg:justify-center modal-wrapper z-50 bg-white dark:bg-slate-950 lg:overflow-hidden">
        <ButtonCloseComponent onClick={handleClose} />
        <ContentSlider
          title={title}
          company={company}
          year={year}
          description={description}
          workType={workType}
          workDone={mappedWorkDone}
          link={link}
          iconsData={iconsData}
          videoUrl={videoUrl}
          images={randomizedImages}
          backgroundColor={backgroundColor}
        />
      </div>
    </div>
  );
};
