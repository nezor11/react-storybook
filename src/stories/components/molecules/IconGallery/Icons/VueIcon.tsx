import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const VueIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      viewBox="0 0 122.88 106.42"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc ? <desc id={desc}>{desc}</desc> : null}
      {name ? <title id={name}>{name}</title> : null}
      <path
        d="M75.63 0 61.44 24.58 47.25 0H0l61.44 106.42L122.88 0H75.63z"
        style={{
          fill: "#4dba87",
        }}
      />
      <path
        d="M75.63 0 61.44 24.58 47.25 0H24.58l36.86 63.85L98.3 0H75.63z"
        style={{
          fill: "#425466",
        }}
      />
    </svg>
  )
);

const MemoizedIcon: React.FC<IconProps> = memo(VueIcon);

export default MemoizedIcon;
