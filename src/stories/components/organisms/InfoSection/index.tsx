import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";
import { InfoItem } from "../../molecules/InfoItem";
import { TitleSection } from "../../molecules/TitleSection";

interface InfoSectionObject {
  section: Object;
}

type InfoSectionProps = ComponentPropsWithRef<"div"> & InfoSectionObject;

export const InfoSection = forwardRef<HTMLElement, InfoSectionProps>(
  ({ section, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("mx-20")} {...props}>
        <TitleSection header="h3" text="Profile" mods="uppercase" />
        <InfoItem
          info={{
            company: "Novicell",
            date: "2020 > Current",
            jobTitle: "Front-end developer",
            jobDesc:
              "Work with APIs and get into .NET world (Umbraco, Sitecore) for the views. In-depth knowledge of Vue and Nuxt. Deal with Figma designs.",
          }}
        />
      </section>
    );
  }
);
