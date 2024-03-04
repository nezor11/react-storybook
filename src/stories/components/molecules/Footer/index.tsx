import { Link, LinkProps } from "@/stories/components/atoms/Link";
import { ButtonTailwind } from "@/stories/components/molecules/ButtonTailwind";
import React from "react";

export interface FooterProps {
  copy_right_text: string;
  mods?: string;
  my_link?: LinkProps;
}

export const Footer: React.FC<FooterProps> = ({
  copy_right_text = "Sage",
  my_link = { link_text: "", href: "", rel: "" },
  mods = "",
  ...props
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <div {...props}>
      <div className="flex items-center pb-10">
        <div className="grow border-b border-gray-600"></div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <p className="text-sm text-gray-600">
          &copy; {currentYear} {copy_right_text}
        </p>
        <div className="flex-none mt-10 lg:mt-0">
          <ButtonTailwind size="sm" variant="outline">
            {my_link ? <Link {...my_link} /> : null}
          </ButtonTailwind>
        </div>
      </div>
    </div>
  );
};
