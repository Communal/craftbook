import React, { ReactNode } from "react";
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "solid" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    variant?: "primary" | "secondary" | "solid" | "outline";
    size?: "sm" | "md" | "lg";
    strech?: boolean;
    icon?: ReactNode;
    iconDirection?: "left" | "right";
}
declare const Button: React.FunctionComponent<ButtonProps>;
export { Button };
