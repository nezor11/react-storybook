// SliderSection.tsx
import { LinkProps } from "@/stories/components/atoms/Link";
import { CardSlide } from "@/stories/components/molecules/CardSlide";
import { IconGalleryProps } from "@/stories/components/molecules/IconGallery";
import { TitleSection } from "@/stories/components/molecules/TitleSection";
import { cn } from "@/utils";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./index.css";

export interface SlideData {
  alt?: string;
  year?: string;
  title: string;
  description?: string;
  iconsData?: { name: string; width: string; height: string }[];
  company?: string;
  summary?: string;
  workDone?: string[];
  videoUrl?: string;
  workType?: string | undefined;
  images: { src: string; width: number; height: number; alt?: string }[];
  link?: LinkProps;
  imageDetails?: any;
  cardImageAlt?: string;
  cardImageWidth?: number;
  cardImageHeight?: number;
  imageUrl?: string;
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
  if (!slidesData) {
    console.error("SliderSection requires slidesData prop");
    return null; // Retorna null o un componente de error/placerholder
  }

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
            <div className="swiper-wrapper-portfolio">
              <Swiper
                loopAdditionalSlides={8}
                loopPreventsSliding={true}
                width={100}
                spaceBetween={32}
                slidesPerView={"auto"}
                slidesPerGroupSkip={2}
                grabCursor={false}
                direction={"horizontal"}
                keyboard={{
                  enabled: true,
                  onlyInViewport: false,
                }}
                loop={true}
                centeredSlides={false}
                slidesOffsetBefore={0}
                modules={[A11y, Keyboard, Mousewheel]}
                onSwiper={setSwiperRef}
                // freeMode={{
                //   enabled: true,
                //   sticky: true,
                //   momentum: true,
                //   momentumRatio: 0.5,
                //   momentumVelocityRatio: 0.5,
                //   momentumBounce: true,
                //   momentumBounceRatio: 1,
                // }}
                // mousewheel={{
                //   enabled: true,
                //   releaseOnEdges: true,
                //   sensitivity: 2,
                // }}
                breakpoints={{
                  769: {
                    slidesOffsetBefore: 300,
                    centeredSlides: true,
                  },
                }}
                // onSlideChange={() => console.log("slide change")}
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
                      workDone={slide.workDone}
                      videoUrl={slide.videoUrl}
                      cardImage={slide.imageUrl}
                      cardImageAlt={slide.alt}
                      cardImageHeight={slide.imageDetails?.height}
                      link={slide.link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
