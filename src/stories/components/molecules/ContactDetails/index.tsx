import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";
import Obfuscate from "react-obfuscate";

export interface ContactDetailTexts {
  title: string;
  phone?: string;
  email?: string;
  address?: string;
}

type ContactDetailProps = ComponentPropsWithRef<"div"> & {
  contactDetail: ContactDetailTexts;
};

export const ContactDetail = forwardRef<HTMLDivElement, ContactDetailProps>(
  ({ contactDetail, ...props }, ref) => {
    const slugify = (str: string) =>
      str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const classContactDetail = slugify(contactDetail.title);
    const addresUrlEncoded = contactDetail.address.replace(/ /g, "+");

    return (
      <div ref={ref} className={(cn("m-0 p-0"), classContactDetail)} {...props}>
        <ul>
          {contactDetail.phone && (
            <li className="mb-0 text-gray-400 text-sm">
              <Obfuscate tel={contactDetail.phone} />
            </li>
          )}
          {contactDetail.email && (
            <li className="mb-0 text-gray-400 text-sm">
              <Obfuscate email={contactDetail.email} />
            </li>
          )}
          {contactDetail.address && (
            <li className="mb-0 text-gray-400 text-sm">
              <a
                href={`https://maps.google.com/maps?q=${addresUrlEncoded}`}
                target="_blank"
              >
                {contactDetail.address}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
);
