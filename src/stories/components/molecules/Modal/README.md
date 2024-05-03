import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import React from "react";

interface ModalProps {
  onClose: () => void; // Propiedad para cerrar el modal
}

/**
 * Modal component.
 */
export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
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
        {/* <Swiper
          spaceBetween={32}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <LazyImage
              placeholderSrc="https://placehold.co/600x400"
              src="https://source.unsplash.com/random/600x400/?web-design"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyImage
              placeholderSrc="https://placehold.co/600x400"
              src="https://source.unsplash.com/random/600x400/?web-design"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyImage
              placeholderSrc="https://placehold.co/600x400"
              src="https://source.unsplash.com/random/600x400/?web-design"
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};