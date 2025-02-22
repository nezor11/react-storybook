import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const UmbracoIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "Umbraco", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      aria-hidden="true"
      viewBox="0 0 14 14"
      fill="#3341ab"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path d="M1 7c0-3.239 2.682-5.84 6-5.84S13 3.76 13 7c0 3.238-2.682 5.84-6 5.84S1 10.24 1 7Zm5.867 1.99a8.519 8.519 0 0 1-1.38-.106 1.1 1.1 0 0 1-.77-.584c-.133-.293-.212-.769-.186-1.407 0-.344.027-.663.052-.982.054-.318.08-.583.133-.797l.053-.212v-.026c0-.053-.053-.107-.106-.107l-.77-.106h-.026c-.052 0-.106.053-.133.08 0 .052-.026.08-.052.186-.054.239-.08.451-.133.743a6.358 6.358 0 0 0-.08 1.035s-.026.08 0 .717c.026.638.133 1.142.345 1.54.212.371.558.663 1.062.823.505.16 1.194.24 2.071.24h.107c.876 0 1.566-.08 2.07-.24.504-.159.85-.451 1.062-.823.213-.397.32-.902.346-1.54.026-.637 0-.717 0-.717 0-.371-.052-.717-.08-1.034-.053-.319-.08-.532-.133-.744-.027-.106-.027-.159-.053-.185 0-.053-.052-.08-.133-.08h-.026l-.77.106c-.053 0-.107.054-.107.107v.026l.053.212c.053.213.079.478.133.796.053.32.053.638.053.983 0 .637-.053 1.088-.186 1.406-.133.293-.397.505-.77.584-.319.08-.796.107-1.38.107h-.266V8.99z" />
    </svg>
  )
);

const MemoizedUmbracoIcon = memo(UmbracoIcon);

export default MemoizedUmbracoIcon;
