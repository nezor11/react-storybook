import React from "react";
import { IconGallery, IconGalleryProps } from "../IconGallery";

export const SuspenseIconGallery: React.FC<IconGalleryProps> = (props) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <IconGallery {...props} />
    </React.Suspense>
  );
};
