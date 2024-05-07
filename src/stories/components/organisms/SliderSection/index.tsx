import { CardSlide } from "@/stories/components/molecules/CardSlide";
import { IconGalleryProps } from "@/stories/components/molecules/IconGallery";
import { ImageData } from "@/stories/components/molecules/Modal";
import { TitleSection } from "@/stories/components/molecules/TitleSection";
import { cn } from "@/utils";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface SlideData {
  year: string;
  title: string;
  description: string;
  iconsData: { name: string; width: string; height: string }[];
  company: string;
  summary: string;
  workType: string;
  images: ImageData[];
}

export interface SliderSectionProps {
  slidesData: SlideData[];
  icons?: IconGalleryProps;
  title?: string;
}

const SliderSection: React.FC<SliderSectionProps> = ({
  slidesData,
  icons,
  title,
}) => {
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
            <div className="col-span-5 lg:col-span-3"></div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            modules={[A11y]}
            onSwiper={(swiper) => console.log(swiper)}
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
        </>
      )}
    </section>
  );
};

export default SliderSection;
