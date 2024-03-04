import { Link, LinkProps } from "@/stories/components/atoms/Link";
import { ButtonTailwind } from "@/stories/components/molecules/ButtonTailwind";
import {
  ContactDetail,
  ContactDetailTexts,
} from "@/stories/components/molecules/ContactDetails";
import React from "react";

export interface FooterProps {
  copy_right_text: string;
  mods?: string;
  last_updated?: Date | string;
  my_link?: LinkProps;
  contact_details?: ContactDetailTexts;
}

export const Footer: React.FC<FooterProps> = ({
  copy_right_text = "Sage",
  my_link = { link_text: "", href: "", rel: "" },
  contact_details = { title: "", email: "", phone: "" },
  last_updated = "",
  mods = "",
  ...props
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const lastUpdated = last_updated ? formatDate(last_updated.toString()) : null;

  return (
    <div {...props}>
      <div className="flex items-center pb-10">
        <div className="grow border-b border-gray-600"></div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start justify-between">
        <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between">
          <div>
            {last_updated && (
              <>
                <p className="text-sm">
                  <em className="text-gray-600">Last updated: {lastUpdated}</em>
                </p>
              </>
            )}
            <p className="text-sm text-gray-600">
              &copy; {currentYear} {copy_right_text}
            </p>
          </div>
          <div className="mt-0 lg:mt-6">
            {contact_details && (
              <ContactDetail contactDetail={contact_details} />
            )}
          </div>
        </div>
        <div className="flex-none mt-10 lg:mt-0">
          <ButtonTailwind size="sm" variant="outline">
            {my_link ? <Link {...my_link} /> : null}
          </ButtonTailwind>
        </div>
      </div>
    </div>
  );
};
