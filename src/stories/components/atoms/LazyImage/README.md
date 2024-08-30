import React, { CSSProperties, useEffect, useRef, useState } from "react";
import "./index.css";

export interface LazyImageProps {
  placeholderSrc: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  onImageLoad?: () => void;
  style?: CSSProperties;
  lazy?: boolean; // Nuevo prop para controlar el lazy loading
}

export const LazyImage: React.FC<LazyImageProps> = ({
  placeholderSrc,
  src,
  alt,
  width,
  height,
  onImageLoad,
  style,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      if (imageRef.current) {
        imageRef.current.src = src; // Actualizar el src manualmente
        onImageLoad?.();
      }
    };

    return () => {
      img.onload = null;
    };
  }, [src, onImageLoad]);

  const containerStyles: CSSProperties = {
    position: "relative",
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "100%",
  };

  const imageStylesPlaceHolder: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: loaded ? "none" : "block", // Ocultar placeholder cuando la imagen está cargada
    ...style,
  };

  const imageStyles: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: loaded ? "block" : "none", // Mostrar imagen solo cuando está cargada
    ...style,
  };

  return (
    <div className="image-container" style={containerStyles}>
      <figure className="image-wrapper">
        <img
          src={placeholderSrc}
          width={width}
          height={height}
          style={imageStylesPlaceHolder}
          alt={`${alt}-placeholder`}
        />
        <img
          ref={imageRef}
          src={placeholderSrc} // Inicialmente usa el placeholder
          alt={alt}
          style={imageStyles}
          loading="eager"
          width={width}
          height={height}
        />
      </figure>
    </div>
  );
};
