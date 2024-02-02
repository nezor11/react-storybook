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

  const sanitizeHTML = (html: string): { __html: string } => {
    // Puedes usar una librería como DOMPurify para una limpieza más segura
    // Ejemplo con DOMPurify: import DOMPurify from "dompurify";
    // const sanitizedHTML = DOMPurify.sanitize(html);

    // Por simplicidad, en este ejemplo, solo se utiliza __html
    return { __html: html };
  };

  return (
    <Tag
      className={`text ${mods}`}
      style={styles}
      dangerouslySetInnerHTML={sanitizeHTML(text)}
      {...props}
    />
  );
};
