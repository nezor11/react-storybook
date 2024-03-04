import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { Link } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";

export interface InfoItemTexts {
  company: string;
  infoUrl?: string;
  date: string;
  jobTitle: string;
  jobDesc: string;
}

export interface CommonSection {
  title?: string;
  subtitle?: string;
}

export interface InfoItemObject {
  info: InfoItemTexts;
}

type InfoItemProps = ComponentPropsWithRef<"div"> &
  InfoItemObject & { subtitleEmpty: boolean };

export const InfoItem = forwardRef<HTMLDivElement, InfoItemProps>(
  ({ info, subtitleEmpty, ...props }, ref) => {
    const colSpanClass =
      subtitleEmpty && info.company ? "col-span-5 lg:col-span-3" : "col-span-5";

    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-5 gap-4 mb-5", colSpanClass)}
        {...props}
      >
        {info.company && (
          <>
            <div className="col-span-5 lg:col-span-2">
              {info.infoUrl ? (
                <>
                  <TitleCopy as="h5" mods="mb-2 font-medium">
                    <Link
                      href={info.infoUrl}
                      link_text={info.company}
                      rel="noreferrer noopener"
                    />
                  </TitleCopy>
                </>
              ) : (
                <TitleCopy
                  as="h5"
                  mods="mb-2 font-medium dark:text-white"
                  underline
                  text={info.company}
                />
              )}
              {info.date && (
                <TitleCopy
                  as="h6"
                  mods="mb-2 dark:text-white"
                  text={info.date}
                />
              )}
            </div>
          </>
        )}
        <div className={colSpanClass}>
          {info.jobTitle && (
            <>
              <TitleCopy
                as="h4"
                mods="mb-2 font-medium dark:text-white"
                text={info.jobTitle}
              />
            </>
          )}
          {info.jobDesc && (
            <>
              <BodyCopy tag="div" text={info.jobDesc} />
            </>
          )}
        </div>
      </div>
    );
  }
);
