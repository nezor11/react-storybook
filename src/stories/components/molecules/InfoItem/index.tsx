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
        className={cn("grid grid-cols-5 gap-4 mb-8", colSpanClass)}
        {...props}
      >
        {info.company && (
          <>
            <div className="col-span-5 lg:col-span-2 flex flex-row lg:flex-col flex-wrap -mb-4">
              {info.infoUrl ? (
                <>
                  <TitleCopy
                    as="h5"
                    mods="mb-2 font-medium text-base lg:text-xl dark:text-white"
                  >
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
                  mods="mb-2 font-medium text-base lg:text-xl dark:text-white"
                  underline
                  text={info.company}
                />
              )}
              {info.date && (
                <TitleCopy
                  as="h6"
                  mods="text-gray-400 dark:text-white ml-4 lg:ml-0"
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
                mods="mb-2 font-medium text-xl dark:text-white"
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
