import { cn } from "@/utils";
import { forwardRef } from "react";
import { Heading, Subtitle } from "..";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  withHeader?: boolean;
  title?: string;
  subtitle?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    children,
    withHeader = false,
    title = "",
    subtitle = "",
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-[24px] py-[18px] rounded-2xl shadow border-2 border-product-dark", className)}
        {...props}
      >
        {withHeader && <div className="pb-4">
          {title && <Heading size="xl">{title}</Heading>}
          {subtitle && <Subtitle size="md">{subtitle}</Subtitle>}
        </div>}
        {children}
      </div>
    )
  }
)

export {
  Card
}

export type {
  CardProps
}