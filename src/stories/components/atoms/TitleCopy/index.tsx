import React, { CSSProperties } from "react";
import "./index.css";

type AllowedTagValues = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleCopyProps {
  title: AllowedTagValues;
  text: string;
  mods: string;
  styles?: CSSProperties;
}

export const TitleCopy: React.FC<TitleCopyProps> = ({
  title = "h1",
  text = "Rodrigor",
  mods = "text-6xl",
  styles = {},
  ...props
}: TitleCopyProps) => {
  const Title = title as keyof JSX.IntrinsicElements;

  return (
    <Title
      className={`text ${mods}`}
      style={styles}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};
