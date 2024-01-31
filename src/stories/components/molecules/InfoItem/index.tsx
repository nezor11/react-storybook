import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const infoItemStyles = cva();

type InfoItemProps = ComponentProps<"infoItem"> &
  VariantProps<typeof infoItemStyles>;

export const ButtonTailwind = forwardRef<HTMLButtonElement, InfoItemProps>(
  ({ ...props }, ref) => {
    return <button ref={ref} className={cn(infoItemStyles({}))} {...props} />;
  }
);
