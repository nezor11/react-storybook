/**
 * Resume is a component that displays a resume with various sections, including info sections and slider sections.
 *
 * Props:
 * - resumeItems: An optional array of InfoSectionObject or SliderSectionObject representing the sections to be displayed in the resume.
 *
 * Example usage:
 * <Resume
 *   resumeItems={[
 *     {
 *       type: "infoSection",
 *       title: "About Me",
 *       subtitle: "A brief introduction",
 *       sections: [{ title: "Background", content: "I am a software engineer." }]
 *     },
 *     {
 *       type: "sliderSection",
 *       title: "My Projects",
 *       slidesData: [
 *         {
 *           title: "Project 1",
 *           description: "Description of project 1",
 *           images: [{ src: "project1.jpg", width: 800, height: 600 }]
 *         },
 *         {
 *           title: "Project 2",
 *           description: "Description of project 2",
 *           images: [{ src: "project2.jpg", width: 800, height: 600 }]
 *         }
 *       ]
 *     }
 *   ]}
 * />
 */

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
