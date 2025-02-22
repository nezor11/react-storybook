import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { forwardRef, memo } from "react";

const GraphqlIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "GraphQL", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      viewBox="0 0 32 32"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc && <desc id={`desc-${nanoid()}`}>{desc}</desc>}
      <title id={`${name}-${nanoid()}`}>{name}</title>
      <path
        d="M-.43 12.534h22.901v1.187H-.43z"
        style={{
          fill: "#e10098",
        }}
        transform="rotate(-59.999 11.02 13.127)"
      />
      <path
        d="M4.545 21.162h22.902v1.187H4.545z"
        style={{
          fill: "#e10098",
        }}
      />
      <path
        d="M10.43 18.008h1.187v13.227H10.43z"
        style={{
          fill: "#e10098",
        }}
        transform="rotate(-59.999 11.023 24.622)"
      />
      <path
        d="M20.381.771h1.187v13.227h-1.187z"
        style={{
          fill: "#e10098",
        }}
        transform="rotate(-59.999 20.974 7.384)"
      />
      <path
        d="M4.412 6.787h13.227v1.187H4.412z"
        style={{
          fill: "#e10098",
        }}
        transform="rotate(-30.001 11.026 7.38)"
      />
      <path
        d="M20.389 1.677h1.187v22.901h-1.187z"
        style={{
          fill: "#e10098",
        }}
        transform="rotate(-30.001 20.982 13.128)"
      />
      <path
        d="M5.454 9.386h1.187v13.228H5.454zM25.36 9.386h1.187v13.228H25.36z"
        style={{
          fill: "#e10098",
        }}
      />
      <path
        d="M15.222 24.097h11.504v1.037H15.222z"
        style={{
          fill: "#e10098",
        }}
        transform="rotate(-30.001 20.973 24.615)"
      />
      <path
        d="M28.12 23a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 28.12 23M8.2 11.5a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 8.2 11.5M3.88 23a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 3.88 23M23.8 11.5a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 23.8 11.5M16 30a2.5 2.5 0 1 1 2.5-2.5A2.493 2.493 0 0 1 16 30M16 6.991a2.5 2.5 0 1 1 2.5-2.5 2.493 2.493 0 0 1-2.5 2.5"
        style={{
          fill: "#e10098",
        }}
      />
    </svg>
  )
);

const MemoizedGraphqlIcon = memo(GraphqlIcon);

export default MemoizedGraphqlIcon;
