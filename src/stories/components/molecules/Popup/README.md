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
  ButtonCloseComponent,
}) => {
  const nameMapping: { [key: string]: string } = {
    front_end: "Frontend Development",
    front_end_frameworks: "Deal with Frontend Frameworks",
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
    performance_optimization: "Performance Optimization",
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

  const domain = link?.href?.match(/https?:\/\/(www\.)?([^\/]+)/)?.[2] || "";

  const handleClose = () => onClose();

  const formatCompanyName = (name: string) => name.replace(/_/g, " ");

  const randomizedImages = useMemo(
    () => images.sort(() => Math.random() - 0.5),
    [images]
  );

  return (
    <div className="min-h-screen min-w-screen overflow-hidden modal-content">
      <div className="fixed top-0 left-0 right-0 bottom-0 p-6 lg:p-0 lg:flex lg:items-center lg:justify-center modal-wrapper z-50 bg-white dark:bg-slate-950 overflow-y-auto">
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
        />
      </div>
    </div>
  );
};
