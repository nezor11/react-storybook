import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import TypeScriptIcon from "@/stories/components/atoms/Icons/TypeScriptIcon";
import React, { CSSProperties, ReactNode } from "react";
import "./index.css";

interface TitleSectionProps {
  header: string;
  text: string;
  subtext?: string;
  mods: string;
  styles?: CSSProperties;
  children?: ReactNode;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  header = "h3",
  text = "Me cago en tus muelas",
  subtext = "",
  mods = "text-3xl uppercase",
  styles = {},
  ...props
}: TitleSectionProps) => {
  const Header = header as keyof JSX.IntrinsicElements;

  const sanitizeHTML = (html: string): { __html: string } => {
    return { __html: html };
  };

  return (
    <div>
      <div className="flex items-center">
        <TypeScriptIcon width="2em" height="2em" />
        <Header
          className={`text ${mods}`}
          style={styles}
          dangerouslySetInnerHTML={sanitizeHTML(text)}
          {...props}
        />
      </div>
      {subtext !== "" && <BodyCopy tag="p" mods="mt-4" text={subtext} />}
    </div>
  );
};
