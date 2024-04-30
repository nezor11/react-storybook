import React, { CSSProperties, useEffect, useRef, useState } from "react";
import "./index.css";

export interface LazyImageProps {
  placeholderSrc: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  onImageLoad?: () => void;
  style?: CSSProperties; // Agregar la prop style al tipo de interfaz
}

export const LazyImage: React.FC<LazyImageProps> = ({
  placeholderSrc,
  src,
  alt,
  width,
  height,
  onImageLoad,
  style, // Aceptar la prop style
}) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      onImageLoad?.();
    };

    if (imageRef.current?.complete) {
      handleLoad();
    }

    return () => {
      imageRef.current?.removeEventListener("load", handleLoad);
    };
  }, [onImageLoad]);

  const containerStyles: CSSProperties = {
    position: "relative",
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "100%",
    ...style, // Aplicar la prop style al contenedor
  };

  const imageStyles: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: loaded ? "block" : "none",
  };

  return (
    <div style={containerStyles}>
      <figure className="image-wrapper">
        {!loaded && (
          <img
            src={placeholderSrc}
            width={width}
            height={height}
            alt={`${alt}-placeholder`}
          />
        )}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          style={imageStyles}
          onLoad={onImageLoad}
          loading="lazy"
          width={width}
          height={height}
        />
      </figure>
    </div>
  );
};
