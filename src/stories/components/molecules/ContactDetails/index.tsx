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
      <div
        ref={ref}
        className={(cn("text-center"), classContactDetail)}
        {...props}
      >
        {contactDetail.phone && <p className="mb-2">{contactDetail.phone}</p>}
        {contactDetail.email && <p className="mb-2">{contactDetail.email}</p>}
        {contactDetail.address && (
          <p className="mb-2">{contactDetail.address}</p>
        )}
      </div>
    );
  }
);
