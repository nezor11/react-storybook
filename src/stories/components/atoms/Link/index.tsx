import React from "react";

export interface LinkProps {
  link_text: string;
  href: string;
  target?: string;
  rel: string;
  mods?: string;
}

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
