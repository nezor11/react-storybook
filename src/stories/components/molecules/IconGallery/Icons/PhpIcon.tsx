import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const PhpIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "PHP", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      preserveAspectRatio="xMidYMid"
      viewBox="0 -127 512 512"
      fill="#8993be"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path d="M116.448 54.116c22.287.187 38.436 6.612 48.449 19.266 10.013 12.653 13.316 29.937 9.916 51.849-1.32 10.013-4.25 19.833-8.783 29.466-4.346 9.633-10.387 18.32-18.133 26.066-9.446 9.82-19.55 16.054-30.316 18.7-10.766 2.646-21.912 3.967-33.433 3.967H50.15l-10.766 53.832H0L40.516 54.116h75.932Zm335.893 0c22.287.187 38.437 6.612 48.45 19.266 10.012 12.653 13.316 29.937 9.916 51.849-1.32 10.013-4.25 19.833-8.783 29.466-4.347 9.633-10.387 18.32-18.133 26.066-9.446 9.82-19.55 16.054-30.316 18.7-10.767 2.646-21.913 3.967-33.433 3.967h-34l-10.766 53.832h-39.383L376.41 54.116h75.932ZM258.775 0l-11.05 54.116h35.133c19.266.38 33.62 4.346 43.065 11.9 9.634 7.553 12.467 21.912 8.5 43.065L315.44 203.43h-39.666l18.133-90.099c1.887-9.446 1.32-16.15-1.7-20.116-3.02-3.967-9.536-5.95-19.55-5.95l-31.449-.283-23.233 116.448h-39.099L219.676 0h39.099ZM85.848 86.415a79.31 79.31 0 0 1-6.516.283h-5.724l-16.942 84.715c1.133.188 2.266.284 3.4.284h3.966c18.133.187 33.246-1.604 45.333-5.383 12.087-3.967 20.212-17.754 24.366-41.366 3.4-19.833 0-31.263-10.2-34.283-10.013-3.02-22.57-4.437-37.683-4.25Zm335.894 0a79.31 79.31 0 0 1-6.517.283h-5.724l-16.942 84.715c1.133.188 2.267.284 3.4.284h3.967c18.133.187 33.245-1.604 45.332-5.383 12.087-3.967 20.213-17.754 24.366-41.366 3.4-19.833 0-31.263-10.2-34.283-10.012-3.02-22.57-4.437-37.682-4.25Z" />
    </svg>
  )
);

const MemoizedPhpIcon = memo(PhpIcon);

export default MemoizedPhpIcon;
