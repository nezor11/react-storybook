import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const ViteIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
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
        fill="url(#a)"
        d="m29.884 6.146-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"
      />
      <path
        fill="url(#b)"
        d="M22.264 2.007 12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222 7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={6}
          x2={235}
          y1={33}
          y2={344}
          gradientTransform="translate(1.34 1.894) scale(.07142)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41D1FF" />
          <stop offset={1} stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={194.651}
          x2={236.076}
          y1={8.818}
          y2={292.989}
          gradientTransform="translate(1.34 1.894) scale(.07142)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEA83" />
          <stop offset={0.083} stopColor="#FFDD35" />
          <stop offset={1} stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  )
);

const MemoizedIcon: React.FC<IconProps> = memo(ViteIcon);

export default MemoizedIcon;