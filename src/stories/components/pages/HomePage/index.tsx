import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";
import { Header, User } from "../../organisms/Header";
import { Resume, ResumeObject } from "../../templates/Resume";

interface PageObject extends ResumeObject {
  dataHeaderObject?: User[];
  dataResumeObject?: ResumeObject[] | null;
}

type PageProps = ComponentPropsWithRef<"div"> & PageObject;

export const Page = forwardRef<HTMLElement, PageProps>(
  ({ dataHeaderObject, dataResumeObject, ...props }) => {
    return (
      <div className={cn("container py-20 mx-auto px-4")} {...props}>
        <Header
          user={{
            name: "Jane Doe",
            jobTitle: "Frontender",
          }}
        />
        <Resume resumeItems={dataResumeObject} />
      </div>
    );
  }
);
