import {
  InfoSection,
  InfoSectionObject,
} from "@/stories/components/organisms/InfoSection";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";

export interface ResumeObject extends InfoSectionObject {
  resumeItems?: InfoSectionObject[] | null;
}

type ResumeProps = ComponentPropsWithRef<"article"> & ResumeObject;

export const Resume = forwardRef<HTMLElement, ResumeProps>(
  ({ resumeItems, ...props }, ref) => {
    return (
      <article ref={ref} className={cn("my-10")} {...props}>
        {resumeItems && (
          <>
            {resumeItems.map((resumeItem, index) => (
              <InfoSection key={index} {...resumeItem} />
            ))}
          </>
        )}
      </article>
    );
  }
);
