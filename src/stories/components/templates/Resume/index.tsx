import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";
import { InfoSection, InfoSectionObject } from "../../organisms/InfoSection";

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
