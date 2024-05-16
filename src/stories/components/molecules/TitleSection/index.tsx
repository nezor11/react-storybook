/**
 * A component that displays a title section with an optional icon gallery and subtext.
 *
 * @remarks
 * This component is used to render a title section with an optional icon gallery and subtext.
 *
 * @example
 * ```tsx
 * <TitleSection
 *   header="Title"
 *   text="This is the main text"
 *   subtext="This is the subtext"
 *   mods="text-3xl uppercase text-primary-500 font-medium"
 *   styles={{ color: "red" }}
 *   iconsData={[{ name: "icon1", width: "24px", height: "24px" }]}
 * />
 * ```
 *
 * @param props - The component props.
 * @returns The rendered TitleSection component.
 */

import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import React, { CSSProperties } from "react";
import { IconGallery, IconGalleryProps } from "../IconGallery";
import "./index.css";

/**
 * Props for the TitleSection component.
 */
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

  /**
   * Sanitizes HTML by creating an object with a "__html" property.
   *
   * @param html - The HTML string to sanitize.
   * @returns An object with a "__html" property containing the sanitized HTML.
   */
  const sanitizeHTML = (html: string): { __html: string } => {
    return { __html: html };
  };

  return (
    <div>
      <div className="flex items-center mb-0 lg:mb-6">
        {iconsData && iconsData.length > 0 && (
          <div className="text-2xl lg:text-3xl flex mr-1">
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
        <BodyCopy
          tag="p"
          size="sm"
          emphasis="low"
          mods="mt-4 lg:mt-0"
          italic
          text={subtext}
        />
      )}
    </div>
  );
};
