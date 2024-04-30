import React, { useEffect, useRef, useState } from "react";
import { BodyCopy } from "../../atoms/BodyCopy";
import { LazyImage } from "../../atoms/LazyImage";
import { TitleCopy } from "../../atoms/TitleCopy";
import { IconGallery } from "../IconGallery";

import "./index.css";

interface CardSlideProps {}

export const CardSlide: React.FC<CardSlideProps> = () => {
  const figcaptionRef = useRef<HTMLDivElement>(null);
  const [paddingBottom, setPaddingBottom] = useState(0);

  useEffect(() => {
    const updatePaddingBottom = () => {
      if (figcaptionRef.current) {
        const figcaptionHeight = figcaptionRef.current.offsetHeight;
        setPaddingBottom(figcaptionHeight);
      }
    };

    updatePaddingBottom();
    window.addEventListener("resize", updatePaddingBottom);

    return () => {
      window.removeEventListener("resize", updatePaddingBottom);
    };
  }, []);

  const handleImageLoad = () => {
    if (figcaptionRef.current) {
      const figcaptionHeight = figcaptionRef.current.offsetHeight;
      setPaddingBottom(figcaptionHeight);
    }
  };

  return (
    <figure className="card-slide">
      <BodyCopy
        tag="span"
        text="2018"
        size="sm"
        mods="absolute top-3 right-4 bg-gray-50 text-gray-950 px-2 py-1 rounded z-10 opacity-50"
      />
      <LazyImage
        placeholderSrc="https://placehold.co/300x400"
        src="https://source.unsplash.com/random/300x400/?logo"
        width={300}
        height={400}
        onImageLoad={handleImageLoad}
        style={{ paddingBottom: `${paddingBottom}px` }}
      />
      <figcaption ref={figcaptionRef}>
        <TitleCopy
          text="Fundació Pasqual Maragall"
          as="h4"
          align="center"
          mods="text-xl mb-2 uppercase"
        />
        <div className="card-slide__icons-wrapper text-xl mb-4">
          <IconGallery />
        </div>
      </figcaption>
    </figure>
  );
};
