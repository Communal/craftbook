import { cn } from '@/utils';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  strech?: boolean;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      icon = null,
      iconDirection = 'left',
      strech = false,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // default button styles
          'craftbookButton',
          // variant based button styles
          variant === 'primary' && 'button-primary',
          variant === 'secondary' && 'button-secondary',
          variant === 'solid' && 'button-solid',
          variant === 'outline' && 'button-outline',
          // size based button styles
          size === 'sm' && 'button-sm',
          size === 'md' && 'button-md',
          size === 'lg' && 'button-lg',
          strech && 'button-stretched',
          props.disabled && 'button-disabled',
          className,
        )}
        {...props}>
        {iconDirection === 'left' && icon}
        {children}
        {iconDirection === 'right' && icon}
      </button>
    );
  },
);

type IconButtonGenerics = Pick<ButtonProps, 'variant'> &
  Pick<ButtonProps, 'size'> &
  Pick<ButtonProps, 'strech'>;

interface IconButtonProps
  extends IconButtonGenerics,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      size = 'md',
      variant = 'primary',
      strech = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // default button styles
          'craftbookButton',
          // variant based button styles
          variant === 'primary' && 'button-primary',
          variant === 'secondary' && 'button-secondary',
          variant === 'solid' && 'button-solid',
          variant === 'outline' && 'button-outline',
          // size based button styles
          size === 'sm' && 'p-3 rounded-lg',
          size === 'md' && 'p-4 rounded-xl',
          size === 'lg' && 'p-5 rounded-2xl',
          strech && 'w-full',
          props.disabled && 'button-disabled',
          className,
        )}
        {...props}>
        {children}
      </button>
    );
  },
);

export { Button, IconButton };

export type { ButtonProps };
