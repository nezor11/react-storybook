import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "swiper/css";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { LazyImage } from "@/stories/components/atoms/LazyImage";
import { Link, LinkProps } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
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
}) => {
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.updateSize();
    }
  }, [swiperRef]);

  const handleClose = () => {
    onClose();
  };

  const formatCompanyName = (name: string) => {
    return name.replace(/_/g, " ");
  };

  const getRandomImages = () => {
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    return shuffledImages;
  };

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
    performance_optimization: "Performance Optimization",
    responsive_design: "Responsive Design",
    ux_ui_design: "UX/UI Consultancy",
    seo: "SEO Support",
    analytics_metrics: "Analytics & Metrics",
    security: "Security",
  };

  const mappedWorkDone = workDone.map((item) => nameMapping[item] || item);

  const domain = link?.href?.match(/https?:\/\/(www\.)?([^\/]+)/)[2];

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center modal-wrapper z-50 bg-white dark:bg-slate-950">
      <div className="modal-content-wrapper relative px-4 min-h-svh w-full max-w-full">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-white hover:text-gray-700 z-50 dark:bg-transparent opacity-75 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="meta-data-wrapper mx-auto mt-14 w-full lg:max-w-5xl">
          <div className="text-wrapper lg:absolute top-14 left-14 z-10 bg-white dark:bg-[#C0C1C5] p-8 rounded lg:max-w-xl">
            <div className="grid grid-cols-1 w-full">
              <TitleCopy text={title} mods="text-3xl uppercase" />
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
              <div className="grid grid-cols-4 w-full mt-8">
                <BodyCopy
                  tag="div"
                  text={description}
                  mods="col-span-full text-description"
                />
              </div>
            )}
            {link?.href && (
              <div className="mt-8 w-full link-text">
                <BodyCopy tag="span" text="More info at: " />
                <Link
                  href={link.href}
                  link_text={`${domain}`}
                  target="_blank"
                  rel="noreferrer noopener"
                />
              </div>
            )}
          </div>
        </div>
        {videoUrl && (
          <div className="video-wrapper">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={videoUrl}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      origin: "https://www.youtube.com",
                      showinfo: 0,
                      controls: 1,
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
        {!videoUrl && images.length > 0 && (
          <div className="slider-wrapper">
            <Swiper
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              onSwiper={(swiper) => {
                setSwiperReady(true);
              }}
              modules={[A11y, Autoplay, Navigation]}
              navigation={true}
            >
              {getRandomImages().map((image, index) => (
                <SwiperSlide key={index}>
                  <LazyImage
                    placeholderSrc="https://placehold.co/600x400"
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {mappedWorkDone.length > 0 && (
          <div className="workdone-wrapper mt-8 lg:absolute top-32 right-14 z-10 bg-white opacity-75 p-8 rounded">
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
          <div className="worktype-wrapper mt-8 lg:absolute bottom-32 right-14 z-10 bg-white opacity-75 p-4 rounded lg:max-w-xl">
            <BodyCopy
              tag="div"
              text={`${workType} - Project`}
              mods="col-span-full capitalize text-worktype"
              align="right"
            />
          </div>
        )}
        <div className="logos-wrapper mt-8 lg:absolute bottom-14 right-14 z-10 bg-white opacity-75 p-4 rounded">
          <SuspenseIconGallery iconsData={iconsData} />
        </div>
      </div>
    </div>
  );
};
