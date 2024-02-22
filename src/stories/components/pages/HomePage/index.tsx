import { Header, User } from "@/stories/components/organisms/Header";
import { Resume, ResumeObject } from "@/stories/components/templates/Resume";
import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";

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
            iconsData: [{ name: "CSS3Icon", width: "1em", height: "1em" }],
          }}
        />
        <Resume resumeItems={dataResumeObject} />
      </div>
    );
  }
);
