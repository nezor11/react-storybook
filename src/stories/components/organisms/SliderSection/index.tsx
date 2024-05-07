import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardSlide } from "../../molecules/CardSlide";

// import Swiper core and required modules
import { A11y } from "swiper/modules";

export const SliderSection: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      modules={[A11y]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <CardSlide
          year={"2015"}
          title={"Fundació Pasqual Maragall"}
          description={"Caballo blanco caballo negroorl"}
          iconsData={[
            { name: "ViteIcon", width: "1em", height: "1em" },
            { name: "GitBranchIcon", width: "1em", height: "1em" },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlide
          year={"2022"}
          title={"Revlon"}
          description={"Quietooor a peich amatomaa la caidita caballo blanco"}
          iconsData={[{ name: "GitBranchIcon", width: "1em", height: "1em" }]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlide
          year={"2019"}
          title={"Vienduet"}
          description={"Por la gloria de mi madre"}
          iconsData={[
            { name: "CSS3Icon", width: "1em", height: "1em" },
            { name: "ViteIcon", width: "1em", height: "1em" },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlide
          year={"2023"}
          title={"Tourism of Tenerife"}
          description={"Torpedo al ataquerl hasta luego Lucas"}
          iconsData={[
            { name: "CSS3Icon", width: "1em", height: "1em" },
            { name: "ViteIcon", width: "1em", height: "1em" },
            { name: "GitBranchIcon", width: "1em", height: "1em" },
          ]}
        />
      </SwiperSlide>
    </Swiper>
  );
};
