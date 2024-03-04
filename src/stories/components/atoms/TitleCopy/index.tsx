import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React, { CSSProperties, ReactNode } from "react";
import "./index.css";

const textStyles = cva("text", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

type AllowedTagValues = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface TitleCopyProps {
  as?: AllowedTagValues | React.ComponentType<any>;
  text?: string;
  align?: "left" | "center" | "right" | null | undefined;
  italic?: boolean;
  underline?: boolean;
  mods?: string;
  styles?: CSSProperties;
  children?: ReactNode; // Admitir elementos hijos
}

export const TitleCopy: React.FC<TitleCopyProps> = ({
  as: Tag = "h1",
  text = "Rodrigor",
  align = "left",
  italic = false,
  underline = false,
  mods = "text-xl dark:text-white",
  styles = {},
  children,
  ...props
}: TitleCopyProps) => {
  const titleContent = children || (
    <span dangerouslySetInnerHTML={{ __html: text }} />
  );
  return (
    <Tag
      className={cn(
        mods,
        textStyles({
          italic,
          underline,
          align,
        })
      )}
      style={styles}
      {...props}
    >
      {titleContent}
    </Tag>
  );
};
