import { cn } from "@/utils";
import { forwardRef } from "react";

interface UppercaseHeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  light?: boolean;
}

const UppercaseHeading = forwardRef<HTMLParagraphElement, UppercaseHeadingProps>(
  ({ className, children, light = false, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "craftbookUppercaseHeading",
          (!light ? "uppercaseHeading" : "uppercaseHeading-light"),
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

export {
  UppercaseHeading
}

export type {
  UppercaseHeadingProps
}