import React, { startTransition, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BodyCopy } from "../../atoms/BodyCopy";
import { LazyImage } from "../../atoms/LazyImage";
import { TitleCopy } from "../../atoms/TitleCopy";
import { ImageData, Modal } from "../Modal";
import { SuspenseIconGallery } from "../SuspenseIconGallery";

import "./index.css";

interface IconData {
  name: string;
  width: string;
  height: string;
}

interface CardSlideProps {
  year: string;
  title: string;
  company: string;
  summary: string;
  description: string;
  iconsData: IconData[];
  images: ImageData[];
}

export const CardSlide: React.FC<CardSlideProps> = ({
  year,
  title,
  summary,
  description,
  company,
  iconsData,
  images,
}) => {
  const figcaptionRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null); // Referencia al elemento article
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Estado para controlar si la imagen se ha cargado

  useEffect(() => {
    const updatePaddingBottom = () => {
      if (figcaptionRef.current) {
        const figcaptionHeight = figcaptionRef.current.offsetHeight;
        setPaddingBottom(figcaptionHeight);
      }
    };

    startTransition(() => {
      updatePaddingBottom();
    });

    window.addEventListener("resize", updatePaddingBottom);

    return () => {
      window.removeEventListener("resize", updatePaddingBottom);
    };
  }, []);

  // Función para manejar la carga de la imagen
  const handleImageLoad = () => {
    if (figcaptionRef.current) {
      const figcaptionHeight = figcaptionRef.current.offsetHeight;
      setPaddingBottom(figcaptionHeight);
    }
    setImageLoaded(true); // Marcar la imagen como cargada
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Función para seleccionar una altura aleatoria del array
  const getRandomHeight = () => {
    const heights = [200, 250, 300, 350];
    const randomIndex = Math.floor(Math.random() * heights.length);
    return heights[randomIndex];
  };

  // Función para seleccionar un color aleatorio del array
  const getRandomColor = () => {
    const colors = ["#1E6CF8", "#9D415D", "#666666", "#9D9D9D"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const randomHeight = getRandomHeight();

  return (
    <>
      <article
        ref={articleRef}
        className="card-slide"
        style={{
          height: imageLoaded ? `${randomHeight + paddingBottom}px` : "auto",
        }}
        onClick={openModal}
      >
        <LazyImage
          placeholderSrc={`https://placehold.co/300x${randomHeight}`}
          src={`https://source.unsplash.com/random/300x${randomHeight}/?logo`}
          width={300}
          height={randomHeight}
          onImageLoad={handleImageLoad}
          style={{
            paddingBottom: `${paddingBottom}px`,
            borderColor: getRandomColor(),
          }}
        />
        <div className="card-meta w-80" ref={figcaptionRef}>
          <div className="card-meta__date-wrapper">
            <BodyCopy
              tag="span"
              text={year}
              size="sm"
              mods="relative bg-gray-50 text-gray-950 px-2 py-1 rounded z-10 opacity-50 date-wrapper"
            />
          </div>
          <TitleCopy
            text={title}
            as="h4"
            align="center"
            mods="text-xl mb-0 uppercase bg-white py-4"
          />
          <BodyCopy tag="p" text={summary} mods="mb-4 px-8" align="center" />
          <div className="card-slide__icons-wrapper text-xl mb-4 px-12">
            <SuspenseIconGallery iconsData={iconsData} />
          </div>
        </div>
      </article>
      {showModal &&
        createPortal(
          <Modal
            title={title}
            company={company}
            year={year}
            description={description}
            images={images}
            onClose={closeModal}
          />,
          document.querySelector("body")!
        )}
    </>
  );
};
