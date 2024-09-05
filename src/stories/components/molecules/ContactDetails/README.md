/**
 * Renders a contact detail component.
 *
 * @component
 * @example
 * ```tsx
 * const contactDetail = {
 *   title: "Contact",
 *   phone: "123-456-7890",
 *   email: "example@example.com",
 *   address: "123 Main St, City, State"
 * };
 *
 * <ContactDetail contactDetail={contactDetail} />
 * ```
 */
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";
import Obfuscate from "react-obfuscate";
import "./index.css";

export interface ContactDetailTexts {
  /** The title property is required and can be a string. */
  title: string;
  /** The phone property is optional and can be a string. */
  phone?: string;
  /** The email property is optional and can be a string. */
  email?: string;
  /** The address property is optional and can be a string. */
  address?: string;
}

type ContactDetailProps = ComponentPropsWithRef<"div"> & {
  /** The contactDetail property is required and can be a ContactDetailTexts object. */
  contactDetail: ContactDetailTexts;
};

/** Renders a contact detail component. */
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
