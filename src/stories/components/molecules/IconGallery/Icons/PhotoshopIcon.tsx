import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const PhotoshopIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "Photoshop", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      viewBox="0 -0.5 48 48"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path
        fill="#2861D3"
        fillRule="evenodd"
        d="M0 0h48v47H0V0Zm33.12 18.888c-1.724 0-2.313.878-2.313 1.603 0 .79.393 1.34 2.706 2.548 3.425 1.669 4.494 3.272 4.494 5.622 0 3.514-2.662 5.403-6.262 5.403-1.898 0-3.534-.395-4.472-.944-.153-.066-.175-.176-.175-.352V29.54c0-.22.11-.286.262-.176a8.06 8.06 0 0 0 4.385 1.296c1.724 0 2.444-.725 2.444-1.713 0-.79-.502-1.494-2.705-2.636-3.099-1.493-4.386-3.009-4.386-5.534 0-2.834 2.204-5.184 6.022-5.184 1.876 0 3.185.286 3.905.615.175.11.219.286.219.44v3.008c0 .176-.11.286-.328.22-.96-.615-2.378-.988-3.796-.988ZM14.356 21.5c.502.044.895.044 1.768.044 2.552 0 4.952-.9 4.952-4.392 0-2.79-1.723-4.195-4.625-4.195-.873 0-1.702.044-2.095.066V21.5ZM10.473 9.84c0-.153.305-.263.48-.263 1.396-.066 3.469-.11 5.629-.11 6.043 0 8.4 3.338 8.4 7.599 0 5.578-4.015 7.972-8.946 7.972-.829 0-1.112-.044-1.701-.044v8.434c0 .176-.066.264-.262.264h-3.338c-.175 0-.262-.066-.262-.264V9.84Z"
      />
    </svg>
  )
);

const MemoizedPhotoshopIcon = memo(PhotoshopIcon);

export default MemoizedPhotoshopIcon;
