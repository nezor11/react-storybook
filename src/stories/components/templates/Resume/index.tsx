import {
  InfoSection,
  InfoSectionObject,
} from "@/stories/components/organisms/InfoSection";
import {
  SlideData,
  SliderSection,
} from "@/stories/components/organisms/SliderSection";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";

export interface ResumeObject extends InfoSectionObject {
  resumeItems?: (InfoSectionObject | SliderSectionObject)[] | null;
}

interface SliderSectionObject extends InfoSectionObject {
  slidesData?: SlideData[] | null;
}

type ResumeProps = ComponentPropsWithRef<"article"> & ResumeObject;

export const Resume = forwardRef<HTMLElement, ResumeProps>(
  ({ resumeItems, ...props }, ref) => {
    return (
      <article ref={ref} className={cn("my-10")} {...props}>
        {resumeItems && (
          <>
            {resumeItems.map((resumeItem, index) => (
              <React.Fragment key={index}>
                {resumeItem.type === "infoSection" && (
                  <InfoSection key={index} {...resumeItem} />
                )}
                {resumeItem.type === "sliderSection" && (
                  <SliderSection slidesData={[]} key={index} {...resumeItem} />
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </article>
    );
  }
);
