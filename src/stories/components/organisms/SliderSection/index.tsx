import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardSlide } from "../../molecules/CardSlide";

// import Swiper core and required modules
import { A11y, Navigation } from "swiper/modules";

export const SliderSection: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      modules={[Navigation, A11y]}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <CardSlide />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlide />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlide />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlide />
      </SwiperSlide>
    </Swiper>
  );
};
