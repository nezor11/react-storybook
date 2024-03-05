import React, { CSSProperties, useState } from "react";
import "./index.css";

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
      <figure className="image-wrapper" style={imageStyles}>
        {!loaded && (
          <img
            src={placeholderSrc}
            width={width}
            height={height}
            alt={`${alt}-placeholder`}
          />
        )}
        <img
          src={src}
          alt={alt}
          style={{
            display: loaded ? "block" : "none",
          }}
          onLoad={handleLoad}
          loading="lazy"
          width={width}
          height={height}
        />
      </figure>
    </div>
  );
};
