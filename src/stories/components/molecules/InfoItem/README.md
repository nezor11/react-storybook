/**
 * Renders the InfoItem component.
 * @param info - The InfoItemTexts object containing the information for the InfoItem.
 * @param subtitleEmpty - Indicates whether the subtitle is empty.
 * @param props - Additional props for the InfoItem component.
 * @param ref - Ref for the InfoItem component.
 * @returns The rendered InfoItem component.
 */

import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { Link } from "@/stories/components/atoms/Link";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";

/**
 * Interface for the texts used in the InfoItem component.
 */
export interface InfoItemTexts {
  company: string;
  infoUrl?: string;
  date: string;
  jobTitle: string;
  jobDesc: string;
}

/**
 * Interface for the common section used in the InfoItem component.
 */
export interface CommonSection {
  title?: string;
  subtitle?: string;
}

/**
 * Interface for the InfoItem object used in the InfoItem component.
 */
export interface InfoItemObject {
  info: InfoItemTexts;
}

/**
 * Props for the InfoItem component.
 */
type InfoItemProps = ComponentPropsWithRef<"div"> &
  InfoItemObject & { subtitleEmpty: boolean };

/**
 * InfoItem component.
 */
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
                    mods="mb-2 font-medium text-base lg:text-xl dark:text-white mr-2"
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
                  mods="mb-2 font-medium text-base lg:text-xl dark:text-white mr-2"
                  underline
                  text={info.company}
                />
              )}
              {info.date && (
                <TitleCopy
                  as="h6"
                  mods="text-gray-400 dark:text-white mb-2"
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
