import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const NuxtIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 32 32"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc ? <desc id={desc}>{desc}</desc> : null}
      {name === undefined ? (
        <title id={name}>{"file_type_nuxt"}</title>
      ) : name ? (
        <title id={name}>{name}</title>
      ) : null}
      <path
        d="M10.648 25.734a1.465 1.465 0 0 1-.157-.942H3.847l9.869-17.375 4.159 7.41 1.308-.976-4.107-7.384A1.752 1.752 0 0 0 13.7 5.56a1.531 1.531 0 0 0-1.343.924l-10 17.593a1.729 1.729 0 0 0-.087 1.656 1.526 1.526 0 0 0 1.456.706H12.1a1.523 1.523 0 0 1-1.456-.7Z"
        style={{
          fill: "#00c58e",
        }}
      />
      <path
        d="M29.636 24.112 21.589 9.823a1.692 1.692 0 0 0-1.351-.907 1.489 1.489 0 0 0-1.308.907l-1.064 1.7v3.3l2.371-4.071 7.951 14.071h-3.025a1.377 1.377 0 0 1-.122.837l-.026.052a1.729 1.729 0 0 1-1.456.732h4.734a1.72 1.72 0 0 0 1.456-.732 1.548 1.548 0 0 0-.122-1.6Z"
        style={{
          fill: "#108775",
        }}
      />
      <path
        d="m25.233 25.7.026-.052.07-.139a1.278 1.278 0 0 0 .061-.7 2.11 2.11 0 0 0-.27-.724l-6.286-10.9-.95-1.656h-.017l-.959 1.648-6.277 10.9a2.18 2.18 0 0 0-.244.715 1.438 1.438 0 0 0 .148.942 1.563 1.563 0 0 0 1.482.7h11.708a1.79 1.79 0 0 0 1.508-.741Zm-7.367-10.864L23.62 24.8H12.112Z"
        style={{
          fill: "#2f495e",
        }}
      />
    </svg>
  )
);

const MemoizedNuxtIcon: React.FC<IconProps> = memo(NuxtIcon);

export default MemoizedNuxtIcon;
