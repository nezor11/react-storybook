import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const WordpressIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      xmlSpace="preserve"
      viewBox="0 0 96.24 96.24"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc ? <desc id={desc}>{desc}</desc> : null}
      {name ? <title id={name}>{name}</title> : null}
      <path d="M48.122 0C21.587 0 .001 21.585.001 48.118c0 26.535 21.587 48.122 48.12 48.122 26.532 0 48.117-21.587 48.117-48.122C96.239 21.586 74.654 0 48.122 0zM4.857 48.118a43.085 43.085 0 0 1 3.746-17.606l20.638 56.544C14.81 80.042 4.857 65.243 4.857 48.118zm43.265 43.267c-4.247 0-8.346-.623-12.222-1.763l12.98-37.719 13.301 36.433c.086.215.191.411.308.596a43.204 43.204 0 0 1-14.367 2.453zm5.961-63.551c2.604-.137 4.953-.412 4.953-.412 2.33-.276 2.057-3.701-.277-3.564 0 0-7.007.549-11.532.549-4.25 0-11.396-.549-11.396-.549-2.332-.137-2.604 3.427-.273 3.564 0 0 2.208.275 4.537.412l6.74 18.469-9.468 28.395-15.752-46.863c2.608-.136 4.952-.412 4.952-.412 2.33-.275 2.055-3.702-.278-3.562 0 0-7.004.549-11.53.549a94.6 94.6 0 0 1-2.784-.052C19.709 12.611 33.008 4.856 48.122 4.856c11.265 0 21.519 4.306 29.215 11.357-.187-.01-.368-.035-.562-.035-4.248 0-7.264 3.702-7.264 7.679 0 3.564 2.055 6.582 4.248 10.146 1.647 2.882 3.567 6.585 3.567 11.932 0 3.704-1.422 8-3.293 13.986l-4.315 14.421-15.635-46.508zm15.788 57.682 13.215-38.208c2.471-6.171 3.29-11.106 3.29-15.497 0-1.591-.104-3.07-.292-4.449a43.011 43.011 0 0 1 5.301 20.758c-.001 15.96-8.653 29.896-21.514 37.396z" />
    </svg>
  )
);

const MemoizedIcon: React.FC<IconProps> = memo(WordpressIcon);

export default MemoizedIcon;
