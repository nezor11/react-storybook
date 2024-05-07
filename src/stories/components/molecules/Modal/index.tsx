import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BodyCopy } from "../../atoms/BodyCopy";
import { LazyImage } from "../../atoms/LazyImage";
import { TitleCopy } from "../../atoms/TitleCopy";

import "./index.css";

interface ModalProps {
  onClose: () => void; // Propiedad para cerrar el modal
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const swiperRef = useRef(null); // Usa useRef para mantener una referencia al componente Swiper
  const [swiperReady, setSwiperReady] = useState(false); // Estado para controlar si Swiper está listo
  const images = [
    "https://source.unsplash.com/random/600x400/?web-design",
    "https://source.unsplash.com/random/600x400/?web-development",
    "https://source.unsplash.com/random/600x400/?programming",
    "https://source.unsplash.com/random/600x400/?car",
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.updateSize(); // Actualiza el tamaño de Swiper
    }
  }, [swiperRef]);

  const handleClose = () => {
    onClose();
  };

  // Función para obtener una lista aleatoria de imágenes
  const getRandomImages = () => {
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    return shuffledImages;
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white z-50 w-full h-full">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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
      <div className="content-wrapper px-4">
        <div className="text-wrapper">
          <div className="grid grid-cols-1 w-full">
            <TitleCopy text="AGM Abogados" mods="text-3xl uppercase" />
          </div>
          <div className="grid grid-cols-1 w-full justify-start">
            <div className="flex justify-start">
              <TitleCopy as="h6" text="Novicell" mods="text-xl" /> -
              <TitleCopy as="h6" text="2017" mods="text-xl" />
            </div>
          </div>
          <div className="grid grid-cols-4 w-full">
            <BodyCopy
              tag="div"
              text="Me cago en tus muelas"
              mods="col-span-full"
            />
          </div>
        </div>
        <div className="slider-wrapper">
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => {
              console.log(swiper);
              setSwiperReady(true); // Establece swiperReady como true cuando Swiper está listo
            }}
            onSlideChange={() => console.log("slide change")}
          >
            {/* Mapea las imágenes aleatorias dentro de SwiperSlide */}
            {getRandomImages().map((image, index) => (
              <SwiperSlide key={index}>
                <LazyImage
                  placeholderSrc="https://placehold.co/600x400"
                  src={image}
                  width={600}
                  height={400}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
