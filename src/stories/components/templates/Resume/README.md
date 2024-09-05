import {
  InfoSection,
  InfoSectionObject,
} from "@/stories/components/organisms/InfoSection";
import { SliderSection } from "@/stories/components/organisms/SliderSection";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";

export interface SliderSectionObject extends InfoSectionObject {
  type: "sliderSection";
  slidesData: any[];
  slides?: any[];
}

export interface ResumeObject extends InfoSectionObject {
  resumeItems?: (InfoSectionObject | SliderSectionObject)[] | null;
}

type ResumeProps = ComponentPropsWithRef<"article"> & ResumeObject;

export const Resume = forwardRef<HTMLElement, ResumeProps>(
  ({ resumeItems, ...props }, ref) => {
    return (
      <article ref={ref} className={cn("my-10")} {...props}>
        {resumeItems &&
          resumeItems.map((item, index) => {
            switch (item.type) {
              case "infoSection":
                return <InfoSection key={index} {...item} />;
              case "sliderSection":
                const { slidesData, icons, title } =
                  item as SliderSectionObject;
                return (
                  <SliderSection
                    key={index}
                    slidesData={slidesData}
                    icons={icons}
                    title={title}
                  />
                );
              default:
                return <div key={index}>No data available</div>;
            }
          })}
      </article>
    );
  }
);
