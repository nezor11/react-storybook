import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import DOMPurify from "dompurify";
import React, { CSSProperties } from "react";
import ReactHtmlParser from "react-html-parser";
import "./index.css";

const textStyles = cva("text", {
  variants: {
    emphasis: {
      low: "text-gray-600 dark:text-white font-light",
      high: "text-red-600 font-extrabold",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
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
    size: "base",
    align: "left",
  },
});

type AllowedTagValues = "div" | "span" | "p";
interface BodyCopyProps {
  tag: AllowedTagValues;
  text: string;
  mods?: string;
  align?: "left" | "center" | "right" | null | undefined;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | null | undefined;
  emphasis?: "low" | "high" | null | undefined;
  italic?: boolean;
  underline?: boolean;
  weight?:
    | "thin"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "black"
    | null
    | undefined;
  styles?: CSSProperties;
}

export const BodyCopy: React.FC<BodyCopyProps> = ({
  tag = "div",
  text = "Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor",
  mods = "text-base dark:text-white",
  styles = {},
  align = "left",
  size = "base",
  emphasis = null,
  italic = false,
  underline = false,
  weight = "normal",
  ...props
}: BodyCopyProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  const sanitizedHTML = DOMPurify.sanitize(text);

  const classes = cn(
    mods,
    textStyles({
      size,
      weight,
      emphasis,
      italic,
      underline,
      align,
    })
  );

  // console.log("mods:", mods);
  // console.log("classes:", classes);

  return (
    <Tag className={classes} style={styles} {...props}>
      {ReactHtmlParser(sanitizedHTML)}
    </Tag>
  );
};
