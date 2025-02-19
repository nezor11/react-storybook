import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const IllustratorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "Illustrator", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      viewBox="0 0 14 14"
      fill="#ff9c0a"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path d="M1 1v12h12V1H1Zm6.33 9.041-.51-1.595H5.033l-.485 1.595h-1.06l1.804-5.628h1.31l1.83 5.628H7.329zm2.672 0H8.966V5.975h1.036v4.066zm-.526-4.65c-.343 0-.568-.243-.568-.552 0-.317.234-.56.577-.56.35 0 .567.243.576.56 0 .31-.226.551-.585.551Zm-3.558-.16h-.017c-.083.327-.167.719-.267 1.053L5.2 7.67h1.444l-.442-1.386c-.109-.343-.2-.727-.284-1.052Z" />
    </svg>
  )
);

const MemoizedIllustratorIcon = memo(IllustratorIcon);

export default MemoizedIllustratorIcon;
