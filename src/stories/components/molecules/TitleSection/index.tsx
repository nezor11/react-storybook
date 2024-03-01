import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import React, { CSSProperties } from "react";
import { IconGallery, IconGalleryProps } from "../IconGallery";
import "./index.css";
export interface TitleSectionProps extends Omit<IconGalleryProps, "iconsData"> {
  header: string;
  text: string;
  subtext?: string;
  mods: string;
  styles?: CSSProperties;
  iconsData?: { name: string; width: string; height: string }[];
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  header = "h3",
  text = "Me cago en tus muelas",
  subtext = "",
  mods = "text-3xl uppercase text-primary-500 font-medium",
  styles = {},
  iconsData = [],
  ...props
}: TitleSectionProps) => {
  const Header = header as keyof JSX.IntrinsicElements;

  const sanitizeHTML = (html: string): { __html: string } => {
    return { __html: html };
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        {iconsData && (
          <div className="text-3xl flex mr-1">
            <IconGallery iconsData={iconsData} />
          </div>
        )}
        <Header
          className={`info-section__text ${mods}`}
          style={styles}
          dangerouslySetInnerHTML={sanitizeHTML(text)}
          {...props}
        />
      </div>
      {subtext !== "" && (
        <BodyCopy tag="p" size="sm" emphasis="low" italic text={subtext} />
      )}
    </div>
  );
};
