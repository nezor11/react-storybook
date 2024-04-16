import frameImage from "@/assets/images/js-frame-photo-empty.png";
import {
  LazyImage,
  LazyImageProps,
} from "@/stories/components/atoms/LazyImage";
import React from "react";
import styled from "styled-components";

import "./index.css";

import maskImage from "@/assets/images/mask-photo.png";

interface StyledImageProps {
  masksrc: string;
}

const StyledImage = styled.img<StyledImageProps>`
  mask-image: ${(p) => `url("${p.masksrc}")`};
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export type FrameImageProps = {
  image: string;
  mask?: string;
  alt?: string;
  width?: number;
  height?: number;
  imageDetail?: LazyImageProps;
};

export const FrameImage: React.FC<FrameImageProps> = ({
  image: imageURL,
  mask: maskURL,
}: FrameImageProps) => {
  const maskFrameURL = maskURL || maskImage;

  return (
    <div className="frame-wrapper-image">
      <LazyImage
        placeholderSrc={frameImage}
        src={frameImage}
        alt="Frame Image"
      />
      <StyledImage
        className="content-image"
        src={imageURL}
        masksrc={maskFrameURL}
      />
    </div>
  );
};
