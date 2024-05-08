import { Footer, FooterProps } from "@/stories/components/organisms/Footer";
import { Header, User } from "@/stories/components/organisms/Header";
import { Resume, ResumeObject } from "@/stories/components/templates/Resume";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";

interface PageObject extends ResumeObject {
  dataHeaderObject?: User[] | null;
  dataResumeObject?: ResumeObject[] | null;
  dataFooterObject?: FooterProps | null; // Cambiado a un solo objeto, no un array
}

type PageProps = ComponentPropsWithRef<"div"> & PageObject;

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ dataHeaderObject, dataResumeObject, dataFooterObject, ...props }, ref) => {
    return (
      <div className={cn("container mx-auto px-4")} {...props} ref={ref}>
        <Header user={dataHeaderObject ? dataHeaderObject[0] : undefined} />
        <Resume resumeItems={dataResumeObject} />
        <Footer {...dataFooterObject} />
      </div>
    );
  }
);
