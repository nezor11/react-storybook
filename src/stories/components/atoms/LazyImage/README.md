/**
 * LazyImage is a component that renders an image element with lazy loading functionality. It displays a placeholder image until the actual image is loaded.
 *
 * Props:
 * - placeholderSrc: The source URL of the placeholder image to be displayed while the actual image is loading.
 * - src: The source URL of the actual image to be loaded.
 * - alt: The alt text for the image. Default is an empty string.
 * - width: The width of the image in pixels. Default is undefined.
 * - height: The height of the image in pixels. Default is undefined.
 * - onImageLoad: A callback function to be called when the actual image has finished loading.
 * - style: Additional CSS styles to be applied to the image container.
 * - lazy: Boolean indicating if the image should be lazily loaded. Default is true.
 *
 * Example usage:
 * <LazyImage
 *   placeholderSrc="placeholder.jpg"
 *   src="image.jpg"
 *   alt="Description of the image"
 *   width={300}
 *   height={200}
 *   onImageLoad={handleImageLoad}
 *   style={{ borderRadius: '8px' }}
 *   lazy={true}
 * />
 */

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
