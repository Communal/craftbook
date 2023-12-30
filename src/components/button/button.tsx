import React, { ReactNode } from "react";
import { cn } from "../../utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "solid" | "outline";
  size?: "sm" | "md" | "lg";
  strech?: boolean;
  icon?: ReactNode;
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
        "craftbookComponent border flex flex-row items-center justify-center font-medium",
        // variant based button styles
        variant === "primary" && "button-primary",
        variant === "secondary" && "button-secondary",
        variant === "solid" && "button-solid",
        variant === "outline" && "button-outline",
        // size based button styles
        size === "sm" && "button-sm",
        size === "md" && "button-md",
        size === "lg" && "button-lg",
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