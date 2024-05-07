import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { LazyImage } from "@/stories/components/atoms/LazyImage";
import { Link, LinkProps } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "./index.css";

export interface ImageData {
  src: string;
  width: number;
  height: number;
}

interface ModalProps {
  onClose: () => void;
  title: string;
  company: string;
  year: string;
  description: string;
  images: ImageData[];
  workType: string;
  link?: LinkProps;
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  company,
  year,
  description,
  images,
  workType,
  link,
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

  const getRandomImages = () => {
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    return shuffledImages;
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white z-50 w-full h-full">
      <div className="modal-content-wrapper relative px-4 min-h-svh w-full max-w-full">
        <div className="meta-data-wrapper mx-auto w-full max-w-5xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-8 text-gray-500 hover:text-gray-700 z-50 bg-white opacity-75 rounded"
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
          <div className="text-wrapper absolute top-14 left-14 z-10 bg-white opacity-75 p-8 rounded max-w-xl">
            <div className="grid grid-cols-1 w-full">
              <TitleCopy text={title} mods="text-3xl uppercase" />
            </div>
            <div className="grid grid-cols-1 w-full justify-start">
              <div className="flex justify-start">
                <TitleCopy as="h6" text={company} mods="text-xl" /> -
                <TitleCopy as="h6" text={year} mods="text-xl" />
              </div>
            </div>
            <div className="grid grid-cols-4 w-full">
              <BodyCopy tag="div" text={description} mods="col-span-full" />
            </div>
            <div className="grid grid-cols-4 w-full">
              <BodyCopy tag="div" text="What I did:" mods="col-span-full" />
            </div>
            <div className="grid grid-cols-4 w-full">
              <Link
                href="https://www.google.com"
                link_text="More info"
                rel="noreferrer noopener"
              />
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => {
              console.log("MODAL SWIPPERRRRRRRR ------------> ", swiper);
              setSwiperReady(true);
            }}
            onSlideChange={() => console.log("slide change")}
          >
            {getRandomImages().map((image, index) => (
              <SwiperSlide key={index}>
                <LazyImage
                  placeholderSrc="https://placehold.co/600x400"
                  src={image.src}
                  width={image.width}
                  height={image.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
