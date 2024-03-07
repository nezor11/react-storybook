import { ButtonTailwind } from "@/stories/components/molecules/ButtonTailwind";
import { IconGalleryProps } from "@/stories/components/molecules/IconGallery";
import {
  CommonSection,
  InfoItem,
  InfoItemObject,
  InfoItemTexts,
} from "@/stories/components/molecules/InfoItem";
import { TitleSection } from "@/stories/components/molecules/TitleSection";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef, useState } from "react";
export interface InfoSectionObject extends CommonSection {
  sections?: InfoItemObject[] | null;
  info?: InfoItemTexts[];
  icons?: IconGalleryProps;
}

type InfoSectionProps = ComponentPropsWithRef<"div"> & InfoSectionObject;

export const InfoSection = forwardRef<HTMLElement, InfoSectionProps>(
  ({ icons, title, subtitle, sections, ...props }, ref) => {
    const titleText = title || "";
    const subtitleText = subtitle || ""; // Si subtitle es null o undefined, asigna una cadena vacía

    let iconsData: { name: string; width: string; height: string }[] = [];

    if (icons && icons.iconsData) {
      iconsData = icons.iconsData;
    }

    const initialItemsToShow = 2;
    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

    const handleLoadMore = () => {
      setItemsToShow(itemsToShow + initialItemsToShow);
    };

    return (
      <section ref={ref} className={cn("info-section")} {...props}>
        {titleText !== "" && subtitleText !== "" && (
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-5 lg:col-span-2">
              <TitleSection
                header="h3"
                text={titleText}
                subtext={subtitleText}
                mods="text-2xl lg:text-3xl uppercase text-primary-500 font-medium"
                iconsData={iconsData}
              />
            </div>
            {sections && (
              <>
                <div className="col-span-5 lg:col-span-3">
                  {sections.slice(0, itemsToShow).map((section, index) => (
                    <InfoItem
                      key={index}
                      info={section.info}
                      subtitleEmpty={subtitleText === ""}
                    />
                  ))}
                </div>
                {sections.length > itemsToShow && (
                  <div className="col-span-5 text-right">
                    <ButtonTailwind
                      onClick={handleLoadMore}
                      size="sm"
                      variant="ghost"
                      className="w-32"
                    >
                      Load More
                    </ButtonTailwind>
                  </div>
                )}
              </>
            )}
          </div>
        )}
        {titleText !== "" && subtitleText === "" && sections && (
          <>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-5 lg:col-span-2">
                <TitleSection
                  header="h3"
                  text={titleText}
                  mods="text-2xl lg:text-3xl uppercase text-primary-500 font-medium"
                  iconsData={iconsData}
                />
              </div>
              <div className="col-span-5 lg:col-span-3"></div>
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
