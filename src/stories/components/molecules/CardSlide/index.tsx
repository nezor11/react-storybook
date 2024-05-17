import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { LazyImage } from "@/stories/components/atoms/LazyImage";
import { LinkProps } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { Modal, SanityImageData } from "@/stories/components/molecules/Modal";
import { SuspenseIconGallery } from "@/stories/components/molecules/SuspenseIconGallery";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "./index.css";

interface IconData {
  name: string;
  width: string;
  height: string;
}

interface CardSlideProps {
  year: string;
  title: string;
  cardImage?: string;
  cardImageAlt?: string;
  cardImageWidht?: number;
  cardImageHeight?: number;
  infoUrl?: string;
  company?: string;
  summary?: string;
  description?: string;
  workType?: string;
  link?: LinkProps;
  iconsData?: IconData[];
  images?: SanityImageData[];
}

// Función para seleccionar una altura aleatoria del array
const getRandomHeight = () => {
  const heights = [200, 250, 300, 350];
  const randomIndex = Math.floor(Math.random() * heights.length);
  return heights[randomIndex];
};

// Función para seleccionar un color aleatorio del array
const getRandomColor = () => {
  const colors = ["#569CD6", "#9D415D", "#9D9D9D", "#C19C00"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const CardSlide: React.FC<CardSlideProps> = ({
  year,
  title,
  cardImage,
  cardImageAlt,
  cardImageWidht,
  cardImageHeight,
  summary,
  description,
  company,
  iconsData,
  workType,
  link,
  images,
}) => {
  const figcaptionRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null); // Referencia al elemento article
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Estado para controlar si la imagen se ha cargado

  // Generar altura y color aleatorio solo una vez
  const randomHeight = useRef(getRandomHeight());
  const randomColor = useRef(getRandomColor());

  useEffect(() => {
    const updatePaddingBottom = () => {
      if (figcaptionRef.current) {
        const figcaptionHeight = figcaptionRef.current.offsetHeight;
        setPaddingBottom(figcaptionHeight);
      }
    };

    updatePaddingBottom(); // Calcular la altura inicialmente

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

  if (!cardImage) {
    cardImageHeight = randomHeight.current;
    cardImage = `https://placehold.co/300x${cardImageHeight}`;
    cardImageWidht = 300;
    cardImageAlt = "Card image";
  } else {
    cardImageHeight = cardImageHeight - paddingBottom || randomHeight.current;
    cardImageWidht = cardImageWidht || 300;
    cardImageAlt = cardImageAlt || "Card image";
  }

  // console.log("cardImageHeight ------------>", cardImageHeight);

  return (
    <>
      <article
        ref={articleRef}
        className="card-slide portfolio__slide-content"
        style={{
          height: `${cardImageHeight + paddingBottom}px`, // Elimina el +20 adicional
        }}
        onClick={openModal}
      >
        <LazyImage
          placeholderSrc={`https://placehold.co/300x${cardImageHeight}`}
          src={cardImage}
          width={cardImageWidht}
          height={cardImageHeight} // Pasar la altura total calculada
          onImageLoad={handleImageLoad}
          style={{
            height: `${cardImageHeight + paddingBottom}px`,
            borderColor: randomColor.current,
            paddingBottom: `${paddingBottom}px`,
          }}
          alt={cardImageAlt}
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
            mods="dark:text-white text-xl mb-0 uppercase py-4 bg:white"
          />
          <BodyCopy
            tag="p"
            text={summary}
            mods="dark:text-white mb-4 px-8"
            align="center"
          />
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
            workType={workType}
            link={link}
            onClose={closeModal}
          />,
          document.querySelector("body")!
        )}
    </>
  );
};
