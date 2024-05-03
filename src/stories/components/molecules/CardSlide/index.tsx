import React, { startTransition, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BodyCopy } from "../../atoms/BodyCopy";
import { LazyImage } from "../../atoms/LazyImage";
import { TitleCopy } from "../../atoms/TitleCopy";
import { Modal } from "../Modal";
import { SuspenseIconGallery } from "../SuspenseIconGallery";

import "./index.css";

interface CardSlideProps {}

export const CardSlide: React.FC<CardSlideProps> = () => {
  const figcaptionRef = useRef<HTMLDivElement>(null);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

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

  const handleImageLoad = () => {
    if (figcaptionRef.current) {
      const figcaptionHeight = figcaptionRef.current.offsetHeight;
      setPaddingBottom(figcaptionHeight);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <article className="card-slide" onClick={openModal}>
        <LazyImage
          placeholderSrc="https://placehold.co/300x400"
          src="https://source.unsplash.com/random/300x400/?logo"
          width={300}
          height={400}
          onImageLoad={handleImageLoad}
          style={{ paddingBottom: `${paddingBottom + 50}px` }}
        />
        <div className="card-meta -top-8 w-80" ref={figcaptionRef}>
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
            text="Condemor a gramenawer por la gloria de mi madre amatomaa."
            mods="mb-4 px-8"
            align="center"
          />
          <div className="card-slide__icons-wrapper text-xl mb-4 px-12">
            <SuspenseIconGallery
              iconsData={[
                { name: "CSS3Icon", width: "1em", height: "1em" },
                { name: "ViteIcon", width: "1em", height: "1em" },
                { name: "GitBranchIcon", width: "1em", height: "1em" },
              ]}
            />
          </div>
        </div>
      </article>
      {showModal &&
        createPortal(
          <Modal onClose={closeModal} />,
          document.querySelector("body")!
        )}
    </>
  );
};
