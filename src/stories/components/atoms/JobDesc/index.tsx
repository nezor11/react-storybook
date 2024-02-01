import React, { CSSProperties, ReactNode } from "react";
import "./index.css";

interface JobDescProps {
  subtitle: string;
  text: string;
  mods: string;
  styles?: CSSProperties;
  children?: ReactNode;
}

export const SubtitleCopy: React.FC<JobDescProps> = ({
  subtitle = "h2",
  text = "Papaar papaar",
  mods = "text-6xl uppercase",
  styles = {},
  ...props
}: JobDescProps) => {
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
