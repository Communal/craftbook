import React, { ReactNode } from "react"
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "craftbookComponent border flex flex-row items-center justify-center font-medium",
  {
    variants: {
      variant: {
        primary: "bg-product-primary text-white border-transparent hover:bg-product-primary-dimmed",
        secondary: "bg-product-secondary text-white border-transparent hover:bg-product-secondary-dimmed",
        solid: "bg-product-dark text-white border-transparent",
        outline: "bg-white text-product-dark border-neutral-200 hover:bg-product-light-dimmed",
      },
      size: {
        sm: "px-3 py-1.5 text-sm gap-1",
        md: "px-4 py-2 gap-1.5",
        lg: "px-5 py-2.5 text-lg gap-2"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  variant?: "primary" | "secondary" | "solid" | "outline";
  size?: "sm" | "md" | "lg";
  strech?: boolean;
  icon?: ReactNode;
  iconDirection?: "left" | "right";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  icon = null,
  iconDirection = "left",
  strech = false,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
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