import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";

interface ResumeObject {
  resume: Object;
}

type ResumeProps = ComponentPropsWithRef<"article"> & ResumeObject;

export const Resume = forwardRef<HTMLElement, ResumeProps>(
  ({ resume, ...props }, ref) => {
    return (
      <article ref={ref} className={cn("my-10")} {...props}>
        {resume && <></>}
      </article>
    );
  }
);
