import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const PortfolioIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      xmlSpace="preserve"
      viewBox="0 0 511.999 511.999"
      ref={ref}
      aria-labelledby={name ? "title" : undefined}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id="desc">{desc}</desc>}
      {name && <title id="title">{name}</title>}
      <path d="M281.914 386.02c-7.902 4.413-16.864 6.746-25.914 6.746s-18.012-2.333-25.912-6.745L0 257.548v188.9c0 9.784 7.932 17.717 17.717 17.717h476.566c9.784 0 17.717-7.932 17.717-17.717v-188.9L281.914 386.02z" />
      <path d="M494.282 119.334H346.354V65.551c0-9.784-7.932-17.717-17.717-17.717H183.363c-9.784 0-17.717 7.932-17.717 17.717v53.783H17.718C7.932 119.333 0 127.265 0 137.05v69.515a17.718 17.718 0 0 0 9.081 15.47l215.031 120.067v-39.835c0-5.808 4.708-10.516 10.516-10.516h42.747c5.808 0 10.516 4.708 10.516 10.516v39.836l215.03-120.068a17.72 17.72 0 0 0 9.08-15.469v-69.515c-.002-9.785-7.934-17.717-17.719-17.717zm-183.363-.001H201.081V83.899H310.92v35.434z" />
    </svg>
  )
);

const MemoizedIcon: React.FC<IconProps> = memo(PortfolioIcon);

export default MemoizedIcon;
