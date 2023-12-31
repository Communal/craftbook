import { cn } from "@/utils";
import { forwardRef } from "react";

interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "lg" | "md" | "sm";
}

const Headline = forwardRef<HTMLHeadingElement, HeadlineProps>(
  ({
    className,
    children,
    size = "md",
    ...props
  }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "craftbookHeadline",
          size === "lg" && "headline-lg",
          size === "md" && "headline-md",
          size === "sm" && "headline-sm",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    )
  }
)

export {
  Headline
}

export type {
  HeadlineProps
}