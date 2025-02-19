import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const SitecoreIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "Sitecore", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      viewBox="0 0 31 31"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <g fill="#E43026">
        <path d="M15.4 0C6.9 0 0 6.9 0 15.5S6.9 31 15.4 31s15.4-6.9 15.4-15.5S23.9 0 15.4 0zm.2 26.7c-6.2 0-11.3-5.1-11.3-11.3 0-6.3 5-11.3 11.3-11.3 6.2 0 11.3 5.1 11.3 11.3-.1 6.3-5.1 11.3-11.3 11.3z" />
        <path d="M5.1 18.3s1.8 7.2 9.1 8c7.2.7 10.8-5.5 10.8-5.5l-1.9-1.2s-3 5.1-8.4 4.9c-5.4-.2-8.1-3.4-9.6-6.2z" />
        <path d="M8.9 22.4c1.6 1.2 3.5 1.8 5.8 1.8 5.1.2 8.1-4.7 8.1-4.8l.1-.2.2.1 1.8 1.1c1.7-2.7 1.3-5.8 1.3-5.8h-3.3s.3 4.9-5.7 7.7c-2.5 1.2-6.6 1-9.1-1 .1.2.3.6.8 1.1z" />
        <path d="M22.4 14.5v-.3h3.8C26.1 11.4 24 9 24 9l-4 2.4s2.5 1.9.2 6.3c-.8 1.5-2.5 3.2-4.1 3.9-1.9.9-3.4.9-3.4.9.2.1 2 .4 4.6-.7 5.3-2.1 5.1-7.1 5.1-7.3z" />
      </g>
    </svg>
  )
);

const MemoizedSitecoreIcon = memo(SitecoreIcon);

export default MemoizedSitecoreIcon;
