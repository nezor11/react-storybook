import React, { CSSProperties, ReactNode } from "react";
import "./index.css";

type AllowedTagValues = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SubtitleCopyProps {
  subtitle: AllowedTagValues;
  text: string;
  mods: string;
  styles?: CSSProperties;
  children?: ReactNode;
}

export const SubtitleCopy: React.FC<SubtitleCopyProps> = ({
  subtitle = "h2",
  text = "Papaar papaar",
  mods = "text-6xl uppercase",
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
