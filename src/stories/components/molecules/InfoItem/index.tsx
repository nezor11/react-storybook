import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";

export interface InfoItemTexts {
  company: string;
  date: string;
  jobTitle: string;
  jobDesc: string;
}

export interface CommonSection {
  icon?: string;
  title?: string;
  subtitle?: string;
}

export interface InfoItemObject {
  info: InfoItemTexts;
}

type InfoItemProps = ComponentPropsWithRef<"div"> & InfoItemObject;

export const InfoItem = forwardRef<HTMLDivElement, InfoItemProps>(
  ({ info, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-5 gap-4 my-10")} {...props}>
        <div className="col-span-2">
          {info.company && (
            <>
              <TitleCopy
                title="h5"
                mods="mb-2 font-semibold"
                underline
                text={info.company}
              />
              {info.date && (
                <TitleCopy title="h6" mods="mb-2" text={info.date} />
              )}
            </>
          )}
        </div>
        <div className="col-span-3">
          {info.jobTitle && (
            <>
              <TitleCopy
                title="h4"
                mods="mb-2 font-semibold"
                text={info.jobTitle}
              />
            </>
          )}
          {info.jobDesc && (
            <>
              <BodyCopy tag="p" text={info.jobDesc} />
            </>
          )}
        </div>
      </div>
    );
  }
);
