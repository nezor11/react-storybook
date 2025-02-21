/**
 * SuspenseIconGallery is a component that wraps the IconGallery component with React.Suspense to handle lazy loading.
 *
 * Props:
 * - All props are passed down to the IconGallery component.
 *
 * Example usage:
 * <SuspenseIconGallery iconsData={[{ name: "icon1", width: "24", height: "24" }]} />
 */

import React from "react";
import { IconGallery, type IconGalleryProps } from "../IconGallery";

export const SuspenseIconGallery: React.FC<IconGalleryProps> = (props) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <IconGallery {...props} />
    </React.Suspense>
  );
};
