import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const WebPackIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "WebPack", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      preserveAspectRatio="xMidYMid"
      viewBox="-17 0 290 290"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path
        fill="#FFF"
        d="m128 .048 128 72.405V217.31l-128 72.405L0 217.31V72.453z"
      />
      <path
        fill="#8ED6FB"
        d="m233.153 212.287-100.902 57.14V224.99l62.889-34.632 38.013 21.929Zm6.907-6.231V86.654l-36.902 21.3v76.8l36.902 21.302Zm-217.6 6.23 100.903 57.094v-44.438l-62.889-34.584-38.014 21.929Zm-6.907-6.23V86.654l36.903 21.3v76.8l-36.903 21.302Zm4.3-127.13 103.51-58.543v42.99L57.045 99.84l-.532.29-36.66-21.205Zm215.86 0L132.251 20.382v42.99l66.27 36.515.531.29 36.661-21.253Z"
      />
      <path
        fill="#1C78C0"
        d="m123.363 214.847-62.02-34.15v-67.574l62.02 35.792v65.932Zm8.888 0 62.02-34.101v-67.623l-62.02 35.792v65.932ZM65.497 105.298l62.31-34.246 62.26 34.246-62.26 35.937-62.31-35.937Z"
      />
    </svg>
  )
);

const MemoizedWebPackIcon = memo(WebPackIcon);

export default MemoizedWebPackIcon;
