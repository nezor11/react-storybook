import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { LazyImage } from "@/stories/components/atoms/LazyImage";
import { Link, LinkProps } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { IconData } from "@/stories/components/molecules/CardSlide";
import { SuspenseIconGallery } from "@/stories/components/molecules/SuspenseIconGallery";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

  // Function to shuffle and get random images
  const getRandomImages = () => {
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    return shuffledImages;
  };

  const nameMapping: { [key: string]: string } = {
    front_end: "Front End Development",
    front_end_frameworks: "Front End Frameworks",
    back_end: "Back End Development",
    servers_hosting: "Servers & Hosting",
    testing_debugging: "Testing & Debugging",
    version_control: "Version Control",
    maintenance_updates: "Maintenance & Updates",
    performance_optimization: "Performance Optimization",
    responsive_design: "Responsive Design",
    ux_ui_design: "UX/UI Consultancy",
    seo: "SEO",
    analytics_metrics: "Analytics & Metrics",
    security: "Security",
  };

  const mappedWorkDone = workDone.map((item) => nameMapping[item] || item);

  console.log("Modal render link", link);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center modal-wrapper z-50 bg-white dark:bg-slate-950">
      <div className="modal-content-wrapper relative px-4 min-h-svh w-full max-w-full">
        <div className="meta-data-wrapper mx-auto w-full max-w-5xl">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 dark:text-white hover:text-gray-700 z-50 dark:bg-transparent opacity-75 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <div className="text-wrapper absolute top-14 left-14 z-10 bg-white opacity-75 p-8 rounded max-w-xl overflow-y-scroll">
            <div className="grid grid-cols-1 w-full">
              <TitleCopy text={title} mods="text-3xl uppercase" />
            </div>
            <div className="grid grid-cols-1 w-full justify-start">
              <div className="flex justify-start">
                <TitleCopy as="h6" text={company} mods="text-xl capitalize" />
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
              <div className="mt-8 w-full">
                <Link
                  href={link.href}
                  link_text={`More info at: ${link.href}`}
                  mods="text-link"
                  rel="noreferrer noopener"
                />
              </div>
            )}
          </div>
        </div>

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
            modules={[A11y, Autoplay]}
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
        {mappedWorkDone.length > 0 && (
          <div className="workdone-wrapper absolute top-32 right-14 z-10 bg-white opacity-75 p-8 rounded">
            <TitleCopy text="What I did" mods="text-xl" />
            <ul className="col-span-full text-workdone mt-4 mb-2">
              {mappedWorkDone.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {workType && (
          <div className="worktype-wrapper absolute bottom-32 right-14 z-10 bg-white opacity-75 p-4 rounded max-w-xl">
            <BodyCopy
              tag="div"
              text={`${workType} - Project`}
              mods="col-span-full capitalize text-worktype"
            />
          </div>
        )}
        <div className="logos-wrapper absolute bottom-14 right-14 z-10 bg-white opacity-75 p-4 rounded">
          <SuspenseIconGallery iconsData={iconsData} />
        </div>
      </div>
    </div>
  );
};
