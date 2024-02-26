import React, { useEffect, useRef, useState } from "react";

export interface LazyImageProps {
  placeholderSrc: string;
  placeholderClassName?: string;
  placeholderStyle?: React.CSSProperties;
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  placeholderSrc = "https://placehold.co/600x400",
  placeholderClassName,
  placeholderStyle,
  src,
  alt,
  className,
  style,
  width = 300,
  height = 300,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("");
  const placeholderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Initiating Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      // Set actual image source && unobserve when intersecting
      if (entries[0].isIntersecting) {
        setView(src);
        observer.unobserve(placeholderRef.current!);
      }
    });

    // observe for a placeholder image
    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    // Cleanup Observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <>
      {isLoading && (
        <img
          src={placeholderSrc}
          alt=""
          className={placeholderClassName}
          style={placeholderStyle}
          ref={placeholderRef}
          width={width}
          height={height}
        />
      )}
      <img
        src={view} // Gets src only when placeholder intersecting
        className={className}
        style={isLoading ? { display: "none" } : style}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        width={width}
        height={height}
      />
    </>
  );
};
