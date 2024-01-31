import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";
import { Text } from "../../atoms/Text";

interface InfoItemTexts {
  company: string;
  date: string;
  jobTitle: string;
  jobDesc: string;
}
interface InfoItemObject {
  info: InfoItemTexts;
}

type InfoItemProps = ComponentPropsWithRef<"div"> & InfoItemObject;

export const InfoItem = forwardRef<HTMLDivElement, InfoItemProps>(
  ({ info, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-2 gap-4")} {...props}>
        <div>
          {info.company ? (
            <>
              <Text
                as="h5"
                weight={"bold"}
                size={"xl"}
                underline
                className="mb-2"
              >
                {info.company}
              </Text>
            </>
          ) : (
            <></>
          )}

          <Text as="h6" size={"sm"}>
            {info.date}
          </Text>
        </div>
        <div>
          <Text as="h4" weight={"bold"} size={"xl"} className="mb-2">
            {info.jobTitle}
          </Text>
          <Text as="p">{info.jobDesc}</Text>
        </div>
      </div>
    );
  }
);
