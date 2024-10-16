import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { Link, LinkProps } from "@/stories/components/atoms/Link";
import { SubtitleCopy } from "@/stories/components/atoms/SubtitleCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { VideoPlayer } from "@/stories/components/atoms/VideoPlayer";
import { IconData } from "@/stories/components/molecules/CardSlide";
import { SanityImageData } from "@/stories/components/molecules/Modal";
import { SuspenseIconGallery } from "@/stories/components/molecules/SuspenseIconGallery";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SliderClip from "./SliderClip";
import "./index.css";

interface ContentSliderProps {
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
  className?: string;
}

export const ContentSlider: React.FC<ContentSliderProps> = ({
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
  className,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  const formatCompanyName = (name: string) => name.replace(/_/g, " ");

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

  useEffect(() => {
    if (!videoUrl) {
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          new SliderClip(sliderRef.current);
        }
      }, 100); // Pequeño retardo para asegurar que el DOM esté listo

      return () => clearTimeout(timer); // Limpiar el temporizador
    }
  }, [videoUrl]);

  const handleReady = () => setLoading(false);

  const domain = link?.href?.match(/https?:\/\/(www\.)?([^\/]+)/)?.[2] || "";

  return (
    <section className="intro">
      <div className="left p-4 lg:p-16 lg:pb-0">
        <div>
          <div className="lg:-mb-4 flex">
            <SubtitleCopy
              text={formatCompanyName(company)}
              mods="text-base lg:text-2xl uppercase text-primary-500 font-medium"
              subtitle="h4"
            />
            <SubtitleCopy
              text={year}
              mods="text-base lg:text-xl uppercase text-primary-500 font-medium ml-2 leading-8"
              subtitle="h4"
            />
          </div>
          <TitleCopy text={title} align="left" mods="text-header" />
          <BodyCopy text={description} tag="div" />
          {link?.href && (
            <div className="mt-8 w-full link-text">
              <BodyCopy tag="span" text="More info at: " />
              <Link
                href={link.href}
                link_text={domain}
                target="_blank"
                rel="noreferrer noopener"
              />
            </div>
          )}
          {workType && (
            <BodyCopy
              tag="div"
              text={`${workType} - Project`}
              mods="col-span-full capitalize text-worktype mt-8 font-bold"
              align="right"
            />
          )}
          {mappedWorkDone.length > 0 && (
            <div className="workdone-wrapper w-full mt-8 text-right">
              <ul className="col-span-full text-workdone mt-4 mb-2 list-arrows">
                {mappedWorkDone.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="logos-wrapper w-full mt-8 lg:mt-16 mb-8 lg:mb-0 text-3xl [&_svg]:mx-1">
            <SuspenseIconGallery iconsData={iconsData} />
          </div>
        </div>
      </div>

      <div className={`slider ${className || ""}`} ref={sliderRef}>
        {videoUrl ? (
          <div className="px-4 flex flex-col justify-center content-center h-full">
            <div>
              <VideoPlayer videoUrl={videoUrl} onReady={handleReady} />
            </div>
          </div>
        ) : (
          <>
            <ul>
              {images.map((image, index) => (
                <li
                  key={index}
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  <div className="center-y">
                    <SubtitleCopy
                      text={`Slider Title ${index + 1}`}
                      mods="text-xl uppercase text-primary-500 font-medium -mb-4"
                      subtitle="h4"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <nav>
              {images.map((_, index) => (
                <a key={index}></a>
              ))}
            </nav>
          </>
        )}
      </div>
    </section>
  );
};
