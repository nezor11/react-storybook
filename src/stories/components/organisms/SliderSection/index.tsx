import { LinkProps } from "@/stories/components/atoms/Link";
import { CardSlide } from "@/stories/components/molecules/CardSlide";
import { IconGalleryProps } from "@/stories/components/molecules/IconGallery";
import { ImageData } from "@/stories/components/molecules/Modal";
import { TitleSection } from "@/stories/components/molecules/TitleSection";
import { cn } from "@/utils";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./index.css";

export interface SlideData {
  year: string;
  title: string;
  description: string;
  iconsData: { name: string; width: string; height: string }[];
  company: string;
  summary: string;
  workDone?: string;
  workType?: string | undefined;
  images?: ImageData[] | undefined;
  link?: LinkProps | undefined;
}

export interface SliderSectionProps {
  slidesData: SlideData[];
  icons?: IconGalleryProps;
  title?: string;
}

export const SliderSection: React.FC<SliderSectionProps> = ({
  slidesData,
  icons,
  title,
}) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const titleText = title || "";

  let iconsData: { name: string; width: string; height: string }[] = [];

  if (icons && icons.iconsData) {
    iconsData = icons.iconsData;
  }

  if (slidesData.length === 0) {
    return null;
  }

  return (
    <section className={cn("slider-section")}>
      {titleText !== "" && (
        <>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-5 lg:col-span-2">
              <TitleSection
                header="h3"
                text={titleText}
                mods="text-2xl lg:text-3xl uppercase text-primary-500 font-medium"
                iconsData={iconsData}
              />
            </div>
          </div>
          <div className="portfolio__slider">
            <Swiper
              spaceBetween={32}
              slidesPerView={"auto"}
              slidesPerGroupSkip={2}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              loop={true}
              centeredSlides={false}
              modules={[A11y, Keyboard]}
              onSwiper={setSwiperRef}
              onSlideChange={() => console.log("slide change")}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <CardSlide
                    year={slide.year}
                    title={slide.title}
                    description={slide.description}
                    iconsData={slide.iconsData}
                    company={slide.company}
                    summary={slide.summary}
                    images={slide.images}
                    workType={slide.workType}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </section>
  );
};
