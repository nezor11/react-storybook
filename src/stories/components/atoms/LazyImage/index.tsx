import React, { CSSProperties, useState } from "react";

export interface LazyImageProps {
  placeholderSrc: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  placeholderSrc,
  src,
  alt,
  width,
  height,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const containerStyles: CSSProperties = {
    position: "relative",
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "100%",
  };

  const imageStyles: CSSProperties = {
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "100%",
    objectFit: "cover",
  };

  return (
    <div style={containerStyles}>
      {!loaded && (
        <img
          src={placeholderSrc}
          alt={`${alt}-placeholder`}
          style={imageStyles}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          ...imageStyles,
          display: loaded ? "block" : "none",
        }}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
};
