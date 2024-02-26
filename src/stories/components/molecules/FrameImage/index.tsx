import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";

type FrameImageProps = ComponentPropsWithRef<"div">;

export const FrameImage = forwardRef<HTMLDivElement, FrameImageProps>(
  ({ ...props }, ref) => {
    return <div ref={ref} className={cn("m-0 p-0")} {...props}></div>;
  }
);
