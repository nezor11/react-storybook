import { Header, User } from "@/stories/components/organisms/Header";
import { Resume, ResumeObject } from "@/stories/components/templates/Resume";
import { cn } from "@/utils";
import React, { ComponentPropsWithRef, forwardRef } from "react";

interface PageObject extends ResumeObject {
  dataHeaderObject?: User[];
  dataResumeObject?: ResumeObject[] | null;
}

type PageProps = ComponentPropsWithRef<"div"> & PageObject;

export const Page = forwardRef<HTMLElement, PageProps>(
  ({ dataHeaderObject, dataResumeObject, ...props }) => {
    return (
      <div className={cn("container mx-auto px-4")} {...props}>
        <Header
          user={{
            name: "Jane Doe",
            jobTitle: "Frontender",
            iconsData: [
              { name: "CSS3Icon", width: "1em", height: "1em" },
              { name: "ViteIcon", width: "1em", height: "1em" },
              { name: "GitBranchIcon", width: "1em", height: "1em" },
            ],
            contactDetail: {
              title: "Casa Barcelona",
              phone: "+3468080202",
              email: "hola@micorreo.es",
              address: "08025 Barcelona",
            },
            imageDetail: {
              image: "https://source.unsplash.com/random/300x300/?face",
              alt: "Alt text",
              width: 300,
              height: 300,
            },
          }}
        />
        <Resume resumeItems={dataResumeObject} />
      </div>
    );
  }
);
