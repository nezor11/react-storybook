import createTripleSlider from "@/stories/assets/scripts/triple-slider";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/controller";
import "./index.css";

interface ImageSliderProps {
  images: {
    src?: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  className?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  className,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (images.length > 0 && sliderRef.current) {
      createTripleSlider(sliderRef.current);
    }
  }, [images]);

  return (
    <div className={`triple-slider ${className || ""}`} ref={sliderRef}>
      <div className="swiper">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide">
              <img
                className="bg-image"
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
