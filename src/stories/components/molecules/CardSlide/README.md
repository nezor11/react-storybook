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
    <article className="card-slide">
      <LazyImage
        placeholderSrc="https://placehold.co/300x400"
        src="https://source.unsplash.com/random/300x400/?logo"
        width={300}
        height={400}
        onImageLoad={handleImageLoad}
        style={{ paddingBottom: `${paddingBottom + 50}px` }}
      />
      <div className="card-meta" ref={figcaptionRef}>
        <BodyCopy
          tag="span"
          text="2018"
          size="sm"
          mods="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-50 text-gray-950 px-2 py-1 rounded z-10 opacity-50"
        />
        <TitleCopy
          text="Fundació Pasqual Maragall"
          as="h4"
          align="center"
          mods="text-xl mb-0 uppercase bg-white py-4"
        />
        <BodyCopy
          tag="p"
          text="A gramenawer quietooor condemor a gramenawer por la gloria de mi madre amatomaa no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito."
          mods="mb-4 px-8"
          align="center"
        />
        <div className="card-slide__icons-wrapper text-xl mb-4 px-12">
          <IconGallery />
        </div>
      </div>
    </article>
  );
};
