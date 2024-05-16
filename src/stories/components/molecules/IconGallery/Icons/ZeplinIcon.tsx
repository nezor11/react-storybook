import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const ZeplinIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      viewBox="0 0 2406.8 1923.8"
      ref={ref}
      aria-labelledby={name ? "title" : undefined}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id="desc">{desc}</desc>}
      {name && <title id="title">{name}</title>}
      <path
        fill="#fdbd39"
        d="m371 1326.4-125.9 46-6.7 374.5 435.8-159.2c-149.6-50.1-258.7-138.4-303.2-261.3"
      />
      <path
        fill="#f69833"
        d="M436.9 930.3 0 1089.9l245.1 282.6 125.9-46c-44.4-122.5-17-260.8 65.9-396.2"
      />
      <path
        fill="#fecf33"
        d="M1172 389.8C615.7 593 257 1012.4 371 1326.4l2014.5-735.9c-114-314-657.2-403.9-1213.5-200.7"
      />
      <path
        fill="#ee6723"
        d="M1584.4 1527.2c556.3-203.2 915.6-620.7 801-936.6L370.9 1326.4c114.6 316 657.2 404 1213.5 200.8"
      />
      <path
        fill="#f69833"
        d="M2385.4 590.5 371 1326.4c39.4 108.8 189.9 162.4 400.9 162.4 205.8 0 469.2-50.9 743.8-151.2 556.3-203.2 947.6-532.3 869.7-747.1"
      />
      <path
        fill="#fdbd39"
        d="M1984.5 428.2c-205.7 0-469.2 50.9-743.8 151.2-556.3 203.2-947.6 532.2-869.7 747l2014.5-735.9c-39.5-108.8-189.9-162.3-401-162.3"
      />
      <g fill="#ee6723">
        <path d="M1873.2 1766.8c-59.3 0-146.7-53.5-259.9-159.1-133.9-124.9-287.2-307.9-431.9-515.2C1036.8 885.2 918 678 846.8 508.9c-77.5-184.2-88.6-297.4-32.9-336.6 12.9-8.8 28.2-13.3 43.8-12.9 45.3 0 133.7 33.7 297 194.5l3.6 3.5-.5 5c-1.1 11.6-2.1 23.2-3 34.7l-1.8 22.7-16-16.1C961 226.4 883.6 207.3 858.4 207.3c-7.2 0-12.9 1.4-17 4.3-24.2 17-25.8 100.2 49.4 278.7 69.9 166 187 370.1 329.7 574.7 142.8 204.7 293.8 384.9 425.4 507.6 141.8 132.3 205.7 146.6 226.6 146.6 7.2 0 13-1.5 17.4-4.6 25.5-17.9 25.5-107-58.3-299.2l-3.9-8.8 8.4-4.6c8.4-4.6 16.6-9.1 24.2-13.5l10.1-5.7 4.7 10.6c59.4 136.2 115 309.3 42.1 360.5-12.9 8.8-28.3 13.3-44 12.9zm0-21v10.5z" />
        <path d="m1597.9 1521.4-.8 10.4c-14.1 174-51.1 383.2-147.7 391.7-2 .2-4 .2-5.9.2-65.6 0-127.7-94-184.4-279.3-53.8-175.4-95.5-410.8-117.4-662.9-22-252.1-21.7-491.2.9-673.3 24.6-198.4 71.4-302 139.2-308 2-.2 4.1-.3 6.1-.3 47.6 0 119.3 53.9 192.7 304.9l-47.9 9.2c-24.5-83.8-51.2-152-77.7-199-24.5-43.3-48.4-67.2-67.1-67.2-.6 0-1.2 0-1.9.1-29.4 2.6-72.2 73.8-96 266.2-22.2 178.8-22.5 414.4-.8 663.2 21.7 248.9 62.7 480.8 115.5 653 23.6 77.1 49.5 140.7 75 183.8 23.4 39.8 46.1 61.7 63.8 61.7.6 0 1.2 0 1.8-.1 28.1-2.4 81.1-76.6 103.4-337.5z" />
      </g>
    </svg>
  )
);

const MemoizedZeplinIcon: React.FC<IconProps> = memo(ZeplinIcon);

export default MemoizedZeplinIcon;
