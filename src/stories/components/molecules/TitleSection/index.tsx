import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import React, { CSSProperties, ReactNode } from "react";
import { IconGallery, IconGalleryProps } from "../IconGallery";
import "./index.css";
export interface TitleSectionProps extends Omit<IconGalleryProps, "iconsData"> {
  header: string;
  text: string;
  subtext?: string;
  mods: string;
  styles?: CSSProperties;
  iconsData?: { name: string; width: string; height: string }[];
  children?: ReactNode;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  header = "h3",
  text = "Me cago en tus muelas",
  subtext = "",
  mods = "text-3xl uppercase mb-4",
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
        <IconGallery iconsData={iconsData} />
        <Header
          className={`text ${mods}`}
          style={styles}
          dangerouslySetInnerHTML={sanitizeHTML(text)}
          {...props}
        />
      </div>
      {subtext !== "" && <BodyCopy tag="p" mods="" text={subtext} />}
    </div>
  );
};
