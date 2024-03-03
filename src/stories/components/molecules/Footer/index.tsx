import { Button } from "@/stories/components/molecules/Button";
import React from "react";

export interface FooterProps {
  link_text: string;
  href: string;
  target?: string;
  rel: string;
  mods?: string;
}

export const Footer: React.FC<FooterProps> = ({
  link_text = "Link text",
  href = "https://carbon.sage.com",
  target = "_blank",
  rel = "noreferrer noopener",
  mods = "",
  ...props
}: FooterProps) => {
  return (
    <div>
      <div className="flex items-center pb-10">
        <div className="grow border-b border-gray-600"></div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">&copy; 2021 Sage</p>
        <Button label="Download PDF Resume" size="small" />
      </div>
    </div>
  );
};
