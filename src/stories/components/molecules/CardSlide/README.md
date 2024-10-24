/**
 * CardSlide is a component that displays a card with various details such as year, title, image, company, summary, description, work type, video, and icons.
 *
 * Props:
 * - year: The year associated with the card.
 * - title: The title of the card.
 * - cardImage: The URL of the image to be displayed on the card.
 * - cardImageAlt: The alt text for the card image.
 * - cardImageWidth: The width of the card image. Default is 300.
 * - cardImageHeight: The height of the card image.
 * - infoUrl: The URL for more information.
 * - company: The name of the company associated with the card.
 * - summary: A brief summary of the card content.
 * - description: A detailed description of the card content.
 * - workType: The type of work associated with the card.
 * - videoUrl: The URL of the video to be played on the card.
 * - link: An object containing link properties.
 * - iconsData: An array of icon data objects.
 * - images: An array of image data objects.
 * - workDone: An array of work done descriptions.
 *
 * Example usage:
 * <CardSlide
 *   year="2021"
 *   title="Project Title"
 *   cardImage="https://example.com/image.jpg"
 *   cardImageAlt="Image description"
 *   cardImageWidth={300}
 *   cardImageHeight={200}
 *   infoUrl="https://example.com"
 *   company="Company Name"
 *   summary="This is a brief summary."
 *   description="This is a detailed description."
 *   workType="Development"
 *   videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *   link={{ href: "https://example.com", text: "Learn more" }}
 *   iconsData={[{ name: "icon1", width: "24", height: "24" }]}
 *   images={[{ src: "https://example.com/image1.jpg", alt: "Image 1" }]}
 *   workDone={["Task 1", "Task 2"]}
 * />
 */

import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import ButtonClose from "@/stories/components/atoms/ButtonClose";
import { LinkProps } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { SanityImageData } from "@/stories/components/molecules/Modal";
import { Popup } from "@/stories/components/molecules/Popup";
import { SuspenseIconGallery } from "@/stories/components/molecules/SuspenseIconGallery";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./index.css";

export interface IconData {
  name: string;
  width: string;
  height: string;
}

interface CardSlideProps {
  year: string;
  title: string;
  cardImage?: string;
  cardImageAlt?: string;
  cardImageWidth?: number;
  cardImageHeight?: number;
  infoUrl?: string;
  company?: string;
  summary?: string;
  description?: string;
  workType?: string;
  videoUrl?: string;
  link?: LinkProps;
  iconsData?: IconData[];
  images?: SanityImageData[];
  workDone?: string[];
}

const getRandomColor = () => {
  const colors = ["#569CD6", "#9D415D", "#9D9D9D", "#C19C00", "#69C33B"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const CardSlide: React.FC<CardSlideProps> = ({
  year,
  title,
  cardImage,
  cardImageAlt,
  cardImageWidth = 300,
  cardImageHeight,
  summary,
  description,
  company,
  iconsData,
  workType,
  link,
  images,
  workDone,
  videoUrl,
}) => {
  const getRandomHeight = () => {
    const heights = [200, 250, 300, 350];
    const randomIndex = Math.floor(Math.random() * heights.length);
    return heights[randomIndex];
  };

  cardImageHeight = getRandomHeight();

  const figcaptionRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [containerHeight, setContainerHeight] = useState(cardImageHeight);
  const borderColor = useRef(getRandomColor());

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const { naturalHeight } = e.currentTarget;
    setContainerHeight(naturalHeight);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <article
        className="card-slide portfolio__slide-content"
        onClick={openModal}
        style={{
          border: `3px solid ${borderColor.current}`,
        }}
      >
        <img
          src={
            cardImage ||
            `https://placehold.co/300x${Math.round(cardImageHeight)}`
          }
          width={cardImageWidth}
          height={cardImageHeight}
          onLoad={handleImageLoad}
          style={{
            height: `${containerHeight}px`,
            objectFit: "cover",
          }}
          alt={cardImageAlt || "Card image"}
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
          <div className="card-slide__icons-wrapper text-xl mb-0 px-12">
            <SuspenseIconGallery iconsData={iconsData} />
          </div>
        </div>
      </article>
      {showModal &&
        createPortal(
          <Popup
            title={title}
            company={company}
            year={year}
            description={description}
            images={images}
            workType={workType}
            workDone={workDone}
            link={link}
            iconsData={iconsData}
            videoUrl={videoUrl}
            onClose={closeModal}
            ButtonCloseComponent={ButtonClose}
          />,
          document.querySelector("body")!
        )}
    </>
  );
};
