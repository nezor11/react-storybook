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
  href = "https://carbon.sage.com",
  target = "_blank",
  rel = "noreferrer noopener",
  mods = "visited:text-purple-600",
  ...props
}: LinkProps) => {
  return (
    <a className={mods} href={href} target={target} rel={rel} {...props}>
      {link_text}
    </a>
  );
};
