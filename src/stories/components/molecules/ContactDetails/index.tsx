import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";

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

    return (
      <div ref={ref} className={(cn("m-0 p-0"), classContactDetail)} {...props}>
        <ul>
          {contactDetail.phone && (
            <li className="mb-1">{contactDetail.phone}</li>
          )}
          {contactDetail.email && (
            <li className="mb-1">{contactDetail.email}</li>
          )}
          {contactDetail.address && (
            <li className="mb-1">{contactDetail.address}</li>
          )}
        </ul>
      </div>
    );
  }
);
