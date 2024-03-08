/**
 * Renders a subtitle with customizable tag, text, and styles.
 *
 * @component
 * @example
 * ```tsx
 * <SubtitleCopy subtitle="h2" text="Papaar papaar" mods="text-3xl uppercase" styles={{ color: 'red' }} />
 * ```
 */

import React, { CSSProperties } from "react";
import "./index.css";

type AllowedTagValues = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SubtitleCopyProps {
  /** The subtitle property is optional and can be an AllowedTagValues ("h1", "h2", "h3", "h4", "h5", "h6").  */
  subtitle: AllowedTagValues;
  /** The text property is optional and can be a string.  */
  text: string;
  /** The mods property is optional and can be a string with tailwind or css classes. */
  mods: string;
  /** The styles property is optional and can be a CSSProperties object. */
  styles?: CSSProperties;
}

/** Renders a subtitle with customizable tag, text, and styles. */
export const SubtitleCopy: React.FC<SubtitleCopyProps> = ({
  subtitle = "h2",
  text = "Papaar papaar",
  mods = "text-3xl uppercase",
  styles = {},
  ...props
}: SubtitleCopyProps) => {
  const SubTitle = subtitle as keyof JSX.IntrinsicElements;

  return (
    <SubTitle
      className={`text ${mods}`}
      style={styles}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};
