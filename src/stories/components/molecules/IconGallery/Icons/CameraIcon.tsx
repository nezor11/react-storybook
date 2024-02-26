import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const CameraIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      viewBox="0 0 32 32"
      ref={ref}
      aria-labelledby={name ? "title" : undefined}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id="desc">{desc}</desc>}
      {name && <title id="title">{name}</title>}
      <path d="m28 7-15.004.017L13 4.062 5 4v3H3a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h25a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM7 6h4v3H7V6zm5 18.958a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm13.5-11.437a2 2 0 1 1-.001-3.999 2 2 0 0 1 .001 3.999zm-13.5.104a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
    </svg>
  )
);

const MemoizedIcon: React.FC<IconProps> = memo(CameraIcon);

export default MemoizedIcon;
