import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardSlide } from "../../molecules/CardSlide";
import { ImageData } from "../../molecules/Modal";

// import Swiper core and required modules
import { A11y } from "swiper/modules";

interface SlideData {
  year: string;
  title: string;
  description: string;
  iconsData: { name: string; width: string; height: string }[];
  company: string;
  summary: string;
  images: ImageData[];
}

export const SliderSection: React.FC<{ slidesData: SlideData[] }> = ({
  slidesData,
}) => {
  return (
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
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
