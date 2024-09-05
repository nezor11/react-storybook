import React, { useEffect, useMemo, useRef, useState } from "react";

import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { ImageSlider } from "@/stories/components/atoms/ImageSlider";
import { Link, LinkProps } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { VideoPlayer } from "@/stories/components/atoms/VideoPlayer";
import { IconData } from "@/stories/components/molecules/CardSlide";
import { SuspenseIconGallery } from "@/stories/components/molecules/SuspenseIconGallery";

import "./index.css";

export interface SanityImageData {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface ModalProps {
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
  ButtonCloseComponent: React.FC<{ onClick: () => void }>; // Propiedad para pasar el componente del botón de cierre
}

export const Modal: React.FC<ModalProps> = ({
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
  const dragItemRef = useRef<HTMLDivElement | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [highlightedElements, setHighlightedElements] = useState<Set<Element>>(
    new Set()
  );

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaQueryChange = () => setIsLgScreen(mediaQuery.matches);
    setIsLgScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (!isLgScreen) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement;
            if (entry.isIntersecting && !highlightedElements.has(element)) {
              element.classList.add("highlighted");
              setHighlightedElements((prev) => new Set(prev).add(element));
            }
          });
        },
        { threshold: 0.5 }
      );

      const elements = document.querySelectorAll(".absolute-element");
      elements.forEach((element) => observer.observe(element));

      return () => {
        elements.forEach((element) => observer.unobserve(element));
      };
    }
  }, [isLgScreen, highlightedElements]);

  const handleClose = () => onClose();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLgScreen) return;
    const element = e.currentTarget;
    dragItemRef.current = element;
    dragOffset.current = {
      x: e.clientX - element.getBoundingClientRect().left,
      y: e.clientY - element.getBoundingClientRect().top,
    };
    setDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging && dragItemRef.current) {
      dragItemRef.current.style.position = "absolute";
      dragItemRef.current.style.left = `${e.clientX - dragOffset.current.x}px`;
      dragItemRef.current.style.top = `${e.clientY - dragOffset.current.y}px`;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    dragItemRef.current = null;
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const formatCompanyName = (name: string) => name.replace(/_/g, " ");

  const randomizedImages = useMemo(
    () => images.sort(() => Math.random() - 0.5),
    [images]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleReady = () => setLoading(false);

  return (
    <div className="min-h-screen min-w-screen overflow-hidden modal-content">
      <div className="fixed top-0 left-0 right-0 bottom-0 p-6 lg:p-0 lg:flex lg:items-center lg:justify-center modal-wrapper z-50 bg-white dark:bg-slate-950 overflow-y-auto">
        <ButtonCloseComponent onClick={handleClose} />

        <div
          className="meta-data-wrapper mt-0 lg:mt-0 w-full lg:absolute top-14 left-14 z-10 bg-white p-8 rounded lg:max-w-xl max-h-fit absolute-element"
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-wrapper">
            <div className="grid grid-cols-1 w-full">
              <TitleCopy
                text={title}
                mods="text-xl font-semibold lg:text-3xl uppercase"
              />
            </div>
            <div className="grid grid-cols-1 w-full justify-start">
              <div className="flex justify-start">
                <TitleCopy
                  as="h6"
                  text={formatCompanyName(company)}
                  mods="text-xl capitalize"
                />
                <span className="mx-2 relative top-1">/</span>
                <TitleCopy as="h6" text={year} mods="text-xl" />
              </div>
            </div>
            {description && (
              <div className="custom-scrollbar overflow-y-scroll">
                <div className="grid grid-cols-4 w-full mt-8 max-h-60">
                  <BodyCopy
                    tag="div"
                    text={description}
                    mods="col-span-full text-description"
                  />
                </div>
              </div>
            )}
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
          </div>
        </div>

        {mappedWorkDone.length > 0 && (
          <div
            className="workdone-wrapper w-full mt-8 lg:absolute top-[10%] right-14 z-10 bg-white p-8 rounded absolute-element lg:max-w-max"
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <TitleCopy text="What I did" mods="text-xl" />
            <ul className="col-span-full text-workdone mt-4 mb-2 list-arrows">
              {mappedWorkDone.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {workType && (
          <div
            className="worktype-wrapper w-full mt-8 lg:absolute bottom-32 right-14 z-10 bg-white p-4 rounded absolute-element lg:max-w-max lg:min-h-14 lg:max-h-14"
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <BodyCopy
              tag="div"
              text={`${workType} - Project`}
              mods="col-span-full capitalize text-worktype"
              align="right"
            />
          </div>
        )}

        <div
          className="logos-wrapper w-full mt-8 lg:absolute bottom-14 right-14 z-10 bg-white p-4 rounded absolute-element lg:max-w-max lg:min-h-14 lg:max-h-16"
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SuspenseIconGallery iconsData={iconsData} />
        </div>

        {videoUrl && <VideoPlayer videoUrl={videoUrl} onReady={handleReady} />}

        {!videoUrl && images.length > 0 && (
          <ImageSlider className="slider-wrapper" images={images} />
        )}
      </div>
    </div>
  );
};
