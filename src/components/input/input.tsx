import { forwardRef } from 'react';
import { cn } from '@/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  stretch?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, stretch = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'craftbookInput',
          stretch && 'w-full',
          props.disabled &&
            'hover:cursor-not-allowed text-neutral-300 border-neutral-100',
          className,
        )}
        {...props}
      />
    );
  },
);

export { Input };

export type { InputProps };
