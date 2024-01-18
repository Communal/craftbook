import { cn } from "@/utils";
import { InputHTMLAttributes, forwardRef, useState } from "react";

interface OptionProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultSelected?: boolean;
}

const Option = forwardRef<HTMLInputElement, OptionProps>(
  ({
    className,
    defaultSelected = false,
    ...props
  }, ref) => {
    const [selected, setSelected] = useState<boolean>(false);
    return (
      <div className={cn(
        "craftbookOption",
        selected ? "optionSelected" : "optionUnSelected",
        className
      )}
        ref={ref}
        {...props}
      >

      </div>
    )
  }
)

export {
  Option
}

export type {
  OptionProps
}