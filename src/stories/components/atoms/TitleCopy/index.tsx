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
  title = "div",
  text = "Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor",
  mods = "text-base",
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
