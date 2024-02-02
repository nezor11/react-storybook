import React, { CSSProperties } from "react";
import "./index.css";

type AllowedTagValues = "div" | "span" | "p";
interface BodyCopyProps {
  tag: AllowedTagValues;
  text: string;
  mods: string;
  styles?: CSSProperties;
}

export const BodyCopy: React.FC<BodyCopyProps> = ({
  tag = "div",
  text = "Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor",
  mods = "text-base",
  styles = {},
  ...props
}: BodyCopyProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`text ${mods}`}
      style={styles}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};
