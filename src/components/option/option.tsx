import { cn } from "@/utils";
import { Check } from "lucide-react";
import { InputHTMLAttributes, MouseEvent, forwardRef, useState } from "react";

interface OptionProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultSelected?: boolean;
}

const Option = forwardRef<HTMLInputElement, OptionProps>(
  ({
    className,
    defaultSelected = false,
    children,
    ...props
  }, ref) => {
    const [selected, setSelected] = useState<boolean>(defaultSelected);

    const handleOptionClick = (e: MouseEvent<HTMLDivElement & HTMLInputElement>): void => {
      setSelected(!selected);
      // calling the prop.onClick if any
      props.onClick && props.onClick(e);
    };

    return (
      <div className={cn(
        "craftbookOption",
        selected ? "optionSelected" : "optionUnSelected",
        className
      )}
        ref={ref}
        role="checkbox"
        onClick={handleOptionClick}
        {...props}
      >
        {selected
          ? <Check className="w-4 h-4" />
          : <div className="rounded border border-neutral-300 w-4 h-4" />
        }
        {children}
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