import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const PortfolioIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "Portfolio", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      fill="#f43f5e"
      viewBox="0 -960 960 960"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path d="M160-80q-33 0-56.5-23.5T80-160v-600q0-33 23.5-56.5T160-840h40v-40q0-17 11.5-28.5T240-920h160q17 0 28.5 11.5T440-880v40h40q33 0 56.5 23.5T560-760h320v600H560q0 33-23.5 56.5T480-80H160Zm0-80h320v-80h320v-440H480v-80H160v600Zm200-120h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80ZM320-460Z" />
    </svg>
  )
);

const MemoizedPortfolioIcon = memo(PortfolioIcon);

export default MemoizedPortfolioIcon;
