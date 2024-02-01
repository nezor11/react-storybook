import { ComponentPropsWithRef, forwardRef } from "react";
import { InfoItem } from "../../molecules/InfoItem";

interface InfoSectionObject {
  section: InfoItemObject;
}

type InfoSectionProps = ComponentPropsWithRef<"div"> & InfoSectionObject;

export const InfoSection = forwardRef<HTMLDivElement, InfoSectionProps>(
  ({ section, ...props }, ref) => {
    return (
      <InfoItem
        info={{
          company: "Novicell",
          date: "2020 > Current",
          jobTitle: "Front-end developer",
          jobDesc:
            "Work with APIs and get into .NET world (Umbraco, Sitecore) for the views. In-depth knowledge of Vue and Nuxt. Deal with Figma designs.",
        }}
      />
    );
  }
);
