import {
  CommonSection,
  InfoItem,
  InfoItemObject,
  InfoItemTexts,
} from "@/stories/components/molecules/InfoItem";
import { TitleSection } from "@/stories/components/molecules/TitleSection";
import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";
export interface InfoSectionObject extends CommonSection {
  sections?: InfoItemObject[] | null;
  info?: InfoItemTexts[];
}

type InfoSectionProps = ComponentPropsWithRef<"div"> & InfoSectionObject;

export const InfoSection = forwardRef<HTMLElement, InfoSectionProps>(
  ({ icons, title, subtitle, sections, ...props }, ref) => {
    // const iconName = icon || "";
    const titleText = title || "";
    const subtitleText = subtitle || ""; // Si subtitle es null o undefined, asigna una cadena vacía

    return (
      <section ref={ref} className={cn("info-section")} {...props}>
        {titleText !== "" && subtitleText !== "" && (
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
              <TitleSection
                header="h3"
                text={titleText}
                subtext={subtitleText}
                mods="uppercase"
              />
            </div>
            {sections && (
              <>
                <div className="col-span-3">
                  {sections.map((section, index) => (
                    <InfoItem
                      key={index}
                      info={section.info}
                      subtitleEmpty={subtitleText === ""}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        {titleText !== "" && subtitleText === "" && sections && (
          <>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2">
                <TitleSection header="h3" text={titleText} mods="uppercase" />
              </div>
              <div className="col-span-3"></div>
            </div>
            {sections.map((section, index) => (
              <InfoItem
                key={index}
                info={section.info}
                subtitleEmpty={subtitleText === ""}
              />
            ))}
          </>
        )}
      </section>
    );
  }
);
