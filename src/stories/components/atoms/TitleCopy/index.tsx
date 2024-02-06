import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React, { CSSProperties } from "react";
import "./index.css";

const textStyles = cva("w-full text", {
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
  title: AllowedTagValues;
  text: string;
  align?: "left" | "center" | "right" | null | undefined;
  italic?: boolean;
  underline?: boolean;
  mods?: string;
  styles?: CSSProperties;
}

export const TitleCopy: React.FC<TitleCopyProps> = ({
  title = "h1",
  text = "Rodrigor",
  align = "left",
  italic = false,
  underline = false,
  mods = "text-xl",
  styles = {},
  ...props
}: TitleCopyProps) => {
  const Title = title as keyof JSX.IntrinsicElements;

  return (
    <Title
      className={cn(
        mods,
        textStyles({
          italic,
          underline,
          align,
        })
      )}
      style={styles}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};
