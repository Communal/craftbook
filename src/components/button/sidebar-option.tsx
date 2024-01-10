import { cn } from "@/utils";
import { forwardRef } from "react";

const SidebarOption = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("flex flex-row items-center justify-start gap-2 w-full px-4 py-2 rounded-full",
          "hover:bg-black/5 active:bg-black/10",
          className
        )}
        {...props}
      />
    )
  }
)

export {
  SidebarOption
}