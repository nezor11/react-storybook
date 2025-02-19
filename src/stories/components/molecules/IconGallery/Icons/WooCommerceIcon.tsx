import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const WooCommerceIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "WooCommerce", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc ? "desc" : undefined}
      preserveAspectRatio="xMidYMid"
      viewBox="0 -51.5 256 256"
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path
        fill="#7F54B3"
        fillRule="evenodd"
        d="M232.138 0H23.759C10.572 0-.103 10.78.001 23.862v79.542c0 13.187 10.676 23.863 23.863 23.863h98.694l45.11 25.118-10.258-25.118h74.728c13.187 0 23.862-10.676 23.862-23.863V23.862C256 10.675 245.325 0 232.138 0ZM19.364 18.42c-2.93.21-5.128 1.256-6.594 3.245-1.465 1.883-1.988 4.29-1.674 7.012 6.175 39.248 11.931 65.726 17.269 79.437 2.093 5.023 4.5 7.431 7.326 7.222 4.396-.315 9.629-6.385 15.804-18.211 3.244-6.699 8.268-16.746 15.07-30.143 5.652 19.781 13.397 34.643 23.13 44.586 2.722 2.825 5.548 4.081 8.268 3.872 2.408-.21 4.292-1.465 5.548-3.768 1.046-1.988 1.465-4.291 1.256-6.907-.628-9.524.314-22.816 2.93-39.876 2.721-17.583 6.07-30.247 10.152-37.782.837-1.57 1.151-3.14 1.047-5.024-.21-2.407-1.256-4.395-3.245-5.965-1.988-1.57-4.186-2.303-6.593-2.094-3.035.21-5.338 1.675-6.908 4.605-6.489 11.827-11.094 30.98-13.815 57.563C84.358 66.145 81.01 54.32 78.392 40.4c-1.15-6.175-3.977-9.106-8.582-8.792-3.14.21-5.756 2.303-7.85 6.28L39.04 81.53c-3.768-15.176-7.326-33.7-10.57-55.574-.733-5.443-3.768-7.955-9.106-7.536Zm201.68 7.536c7.431 1.57 12.978 5.547 16.746 12.14 3.349 5.652 5.023 12.455 5.023 20.619 0 10.78-2.72 20.618-8.163 29.618-6.28 10.467-14.443 15.7-24.595 15.7-1.78 0-3.663-.21-5.652-.629-7.43-1.57-12.978-5.546-16.746-12.14-3.349-5.756-5.023-12.664-5.023-20.723 0-10.78 2.721-20.618 8.163-29.514 6.385-10.466 14.548-15.699 24.596-15.699 1.779 0 3.663.21 5.651.628Zm-4.395 56.62c3.872-3.453 6.488-8.581 7.954-15.489.418-2.407.732-5.023.732-7.744 0-3.036-.628-6.28-1.884-9.525-1.57-4.081-3.663-6.28-6.175-6.802-3.767-.733-7.43 1.36-10.884 6.489-2.826 3.977-4.606 8.163-5.547 12.454-.524 2.407-.733 5.024-.733 7.64 0 3.035.628 6.28 1.884 9.524 1.57 4.082 3.663 6.28 6.175 6.803 2.616.523 5.442-.628 8.478-3.35Zm-44.481-44.48c-3.768-6.593-9.42-10.57-16.746-12.14-1.989-.419-3.872-.628-5.652-.628-10.047 0-18.21 5.233-24.595 15.7-5.443 8.895-8.163 18.733-8.163 29.513 0 8.06 1.674 14.967 5.023 20.723 3.768 6.594 9.315 10.57 16.746 12.14 1.988.419 3.872.628 5.652.628 10.152 0 18.315-5.232 24.595-15.699 5.442-9 8.163-18.839 8.163-29.618 0-8.164-1.675-14.967-5.023-20.618ZM158.98 67.088c-1.465 6.908-4.082 12.036-7.954 15.49-3.035 2.721-5.86 3.872-8.477 3.35-2.512-.524-4.606-2.722-6.175-6.804-1.256-3.244-1.884-6.489-1.884-9.524 0-2.616.209-5.233.733-7.64.941-4.291 2.72-8.477 5.546-12.454 3.455-5.129 7.118-7.222 10.885-6.49 2.512.524 4.605 2.722 6.175 6.803 1.256 3.245 1.884 6.49 1.884 9.525 0 2.72-.21 5.337-.733 7.744Z"
      />
    </svg>
  )
);

const MemoizedWooCommerceIcon = memo(WooCommerceIcon);

export default MemoizedWooCommerceIcon;
