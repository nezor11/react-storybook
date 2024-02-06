import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";
import {
  CommonSection,
  InfoItem,
  InfoItemObject,
  InfoItemTexts,
} from "../../molecules/InfoItem";
import { TitleSection } from "../../molecules/TitleSection";
export interface InfoSectionObject extends CommonSection {
  sections?: InfoItemObject[] | null;
  info?: InfoItemTexts[];
}

type InfoSectionProps = ComponentPropsWithRef<"div"> & InfoSectionObject;

export const InfoSection = forwardRef<HTMLElement, InfoSectionProps>(
  ({ icon, title, subtitle, sections, ...props }, ref) => {
    // const iconName = icon || "";
    const titleText = title || "";
    const subtitleText = subtitle || ""; // Si subtitle es null o undefined, asigna una cadena vacía

    return (
      <section ref={ref} className={cn("my-20")} {...props}>
        {titleText !== "" && (
          <TitleSection
            header="h3"
            text={titleText}
            subtext={subtitleText}
            mods="uppercase"
          />
        )}
        {sections && (
          <>
            {sections.map((section, index) => (
              <InfoItem key={index} info={section.info} />
            ))}
          </>
        )}
      </section>
    );
  }
);
