import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const SuitcaseIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      fill="#f43f5e"
      viewBox="0 -960 960 960"
      ref={ref}
      aria-labelledby={name ? "title" : undefined}
      aria-describedby={desc ? "desc" : undefined}
      {...props}
    >
      {desc && <desc id="desc">{desc}</desc>}
      {name && <title id="title">{name}</title>}
      <path d="m440-260 160-160-160-160-56 56 104 104-104 104 56 56ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
    </svg>
  )
);

const MemoizedSuitcaseIcon: React.FC<IconProps> = memo(SuitcaseIcon);

export default MemoizedSuitcaseIcon;
