/**
 * Renders a title or copy component with customizable styles and variants.
 *
 * @component
 * @example
 * ```tsx
 * <TitleCopy text="Hello, World!" align="center" italic underline />
 * ```
 *
 * @param {object} props - The component props.
 * @param {string} [props.as="h1"] - The HTML tag to be used for the component.
 * @param {string} [props.text="Rodrigor"] - The text content of the component.
 * @param {string} [props.align="left"] - The alignment of the text. Can be "left", "center", "right", null, or undefined.
 * @param {boolean} [props.italic=false] - Whether the text should be italicized.
 * @param {boolean} [props.underline=false] - Whether the text should be underlined.
 * @param {string} [props.mods="text-xl dark:text-white"] - Additional CSS classes to be applied to the component.
 * @param {object} [props.styles={}] - Additional inline styles to be applied to the component.
 * @param {ReactNode} [props.children] - The child elements of the component.
 * @returns {JSX.Element} The rendered TitleCopy component.
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
