import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const CsharpIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      fill="none"
      viewBox="0 0 32 32"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc ? <desc id={desc}>{desc}</desc> : null}
      {name ? <title id={name}>{name}</title> : null}
      <path
        fill="#7F3A86"
        d="M27.695 23c.188-.338.305-.72.305-1.061V10.06c0-.342-.117-.723-.305-1.061L16 16l11.695 7Z"
      />
      <path
        fill="#662579"
        d="m17.04 29.743 9.921-5.938c.286-.171.546-.467.734-.805L16 16 4.306 23c.188.338.448.634.734.805l9.921 5.938c.572.343 1.507.343 2.079 0Z"
      />
      <path
        fill="#9A5196"
        d="M27.695 9c-.189-.338-.448-.634-.734-.805l-9.922-5.938c-.571-.343-1.507-.343-2.078 0L5.039 8.195C4.468 8.537 4 9.377 4 10.061V21.94c0 .342.117.723.305 1.061L16 16l11.695-7Z"
      />
      <path
        fill="#fff"
        d="M16.038 24C11.606 24 8 20.411 8 16s3.606-8 8.038-8a8.076 8.076 0 0 1 6.881 3.862l-3.442 2.065A4.04 4.04 0 0 0 16.038 12c-2.216 0-4.019 1.794-4.019 4s1.803 4 4.02 4a4.04 4.04 0 0 0 3.432-1.917l3.45 2.053A8.076 8.076 0 0 1 16.038 24Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M25 13v.997h-2V13h-1v.997h-1V15h1v1.995h-1V18h1v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1.003h-1V13h-1Zm0 4v-2h-2v1.995L25 17Z"
        clipRule="evenodd"
      />
    </svg>
  )
);

const MemoizedIcon: React.FC<IconProps> = memo(CsharpIcon);

export default MemoizedIcon;
