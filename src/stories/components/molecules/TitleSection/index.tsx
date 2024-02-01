import React, { CSSProperties, ReactNode } from "react";
import { BodyCopy } from "../../atoms/BodyCopy";
import "./index.css";

interface TitleSectionProps {
  header: string;
  text: string;
  mods: string;
  styles?: CSSProperties;
  children?: ReactNode;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  header = "h3",
  text = "Me cago en tus muelas",
  mods = "text-3xl text-uppercase",
  styles = {},
  ...props
}: TitleSectionProps) => {
  const Header = header as keyof JSX.IntrinsicElements;

  return (
    <div>
      <Header
        className={`text ${mods}`}
        style={styles}
        dangerouslySetInnerHTML={{ __html: text }}
        {...props}
      />
      <BodyCopy
        tag="p"
        mods="mt-4"
        text="Soft skills like problems-solving oriented to business and learning from different colleagues at all levels adapting to change fairly."
      />
    </div>
  );
};
