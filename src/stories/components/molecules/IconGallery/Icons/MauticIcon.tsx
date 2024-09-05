import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const MauticIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 349.779 349.779"
      ref={ref}
      aria-labelledby={name ? "title" : undefined}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id="desc">{desc}</desc>}
      {name && <title id="title">{name}</title>}
      <path
        fill="#425090"
        d="M174.89 349.779C78.612 349.779 0 271.462 0 174.89S78.612 0 174.89 0c23.26 0 45.931 4.417 67.129 13.543 5.889 2.65 8.833 9.422 6.478 15.605-2.649 5.888-9.421 8.833-15.604 6.477-18.549-7.655-37.98-11.482-58.002-11.482-83.323 0-151.041 67.718-151.041 151.041s67.717 151.041 151.04 151.041 151.041-67.718 151.041-151.041c0-17.96-2.944-35.332-9.127-51.819-2.355-6.183.883-12.955 7.066-15.31 6.183-2.355 12.954.883 15.31 7.066 7.066 19.138 10.6 39.453 10.6 60.063-.001 95.983-78.318 174.595-174.89 174.595"
      />
      <path
        fill="#FDB933"
        d="m251.44 156.93-27.086 28.264 15.015 63.302h34.153zm-11.187-83.618 9.421 9.422-74.784 79.201-63.891-65.658-36.803 152.219h34.154l20.315-84.5 46.225 50.347 98.927-107.76 9.422 9.716 9.421-53.292z"
      />
    </svg>
  )
);

const MemoizedMauticIcon: React.FC<IconProps> = memo(MauticIcon);

export default MemoizedMauticIcon;