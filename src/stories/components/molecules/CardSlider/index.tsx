import React from "react";
import { LazyImage } from "../../atoms/LazyImage";

export interface CardSliderProps {
  iconsData?: { name: string; width: string; height: string }[];
}

export const IconGallery: React.FC<CardSliderProps> = () => {
  return (
    <div className="flex items-center flex-wrap">
      <LazyImage placeholderSrc={""} src={""} />
    </div>
  );
};
