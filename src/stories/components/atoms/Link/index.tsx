import React from "react";

export interface LinkProps {
  /** The link_text property is optional and can be a string.  */
  link_text: string;
  /** The href property is optional and can be a string.  */
  href: string;
  /** The target property is optional and can be a string.  */
  target?: string;
  /** The rel property is optional and can be a string. */
  rel: string;
  /** The mods property is optional and can be a string with tailwind or css classes. */
  mods?: string;
}

/** Renders a link component with customizable styles and variants. */
export const Link: React.FC<LinkProps> = ({
  link_text = "Link text",
  href = "https://google.com",
  target = "_blank",
  rel = "noreferrer noopener",
  mods = "visited:text-gray-800 hover:text-primary-500 focus:text-primary-500 active:text-primary-500",
  ...props
}: LinkProps) => {
  return (
    <a className={mods} href={href} target={target} rel={rel} {...props}>
      {link_text}
    </a>
  );
};
