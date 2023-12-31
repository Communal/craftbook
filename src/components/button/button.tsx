import { cn } from "@/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "solid" | "outline";
  size?: "sm" | "md" | "lg";
  strech?: boolean;
  icon?: React.ReactNode;
  iconDirection?: "left" | "right";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconDirection = "left",
  strech = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        // default button styles
        "craftbookComponent border flex flex-row items-center justify-center font-medium transition-all hover:scale-95",
        // variant based button styles
        variant === "primary" && "bg-product-primary text-white border-transparent hover:bg-product-primary-dimmed",
        variant === "secondary" && "bg-product-secondary text-white border-transparent hover:bg-product-secondary-dimmed",
        variant === "solid" && "bg-product-dark text-white border-transparent",
        variant === "outline" && "bg-white text-product-dark border-neutral-200 hover:bg-product-light-dimmed",
        // size based button styles
        size === "sm" && "px-3 py-1.5 text-sm gap-1 rounded-lg",
        size === "md" && "px-4 py-2 gap-1.5 rounded-xl",
        size === "lg" && "px-5 py-2.5 text-lg gap-2 rounded-2xl",
        className
      )}
      {...props}
    >
      {iconDirection === "left" && icon}
      {children}
      {iconDirection === "right" && icon}
    </button>
  )
}

export {
  Button
}