import React, { CSSProperties, ReactNode } from "react";
import "./index.css";

interface TitleCopyProps {
  title: string;
  text: string;
  mods: string;
  styles?: CSSProperties;
  children?: ReactNode;
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
