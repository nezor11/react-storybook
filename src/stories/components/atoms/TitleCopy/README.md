/**
 * TitleCopy is a component that renders a title or copy element with customizable tag, text, and styles.
 *
 * Props:
 * - as: The HTML tag to be used for the title. Default is "h1".
 * - text: The text content to be displayed for the title. Default is "Rodrigor".
 * - align: The alignment of the text. Can be "left", "center", or "right". Default is "left".
 * - italic: Whether the text should be italicized. Default is false.
 * - underline: Whether the text should be underlined. Default is false.
 * - mods: Additional CSS classes to be applied to the title.
 * - styles: Additional CSS styles to be applied to the title.
 * - children: The child elements to be rendered inside the title.
 *
 * Example usage:
 * <TitleCopy
 *   as="h2"
 *   text="This is a title"
 *   align="center"
 *   italic={true}
 *   underline={true}
 *   mods="custom-class"
 *   styles={{ color: "blue" }}
 * >
 *   <span>Child element</span>
 * </TitleCopy>
 */

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
  /** The as property is optional and can be either an AllowedTagValues ("h1", "h2", "h3", "h4", "h5", "h6").  */
  as?: AllowedTagValues | React.ComponentType<any>;
  /** The text property is optional and can be a string.  */
  text?: string;
  /** The align property is optional and can be either "left", "center", "right", null, or undefined.  */
  align?: "left" | "center" | "right" | null | undefined;
  /** The italic property is optional and can be a boolean.  */
  italic?: boolean;
  /** The underline property is optional and can be a boolean.  */
  underline?: boolean;
  /** The mods property is optional and can be a string with tailwind or css classes. */
  mods?: string;
  /** The styles property is optional and can be a CSSProperties object. */
  styles?: CSSProperties;
  /** The children property is optional and can be a ReactNode. */
  children?: ReactNode; // Admitir elementos hijos
}

/** Renders a title or copy component with customizable styles and variants. */
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
