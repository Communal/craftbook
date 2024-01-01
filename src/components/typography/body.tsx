import { cn } from '@/utils';
import { forwardRef } from 'react';

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'lg' | 'md' | 'sm' | 'xs';
}

const Body = forwardRef<HTMLParagraphElement, BodyProps>(
  ({ className, children, size = 'sm', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'craftbookBody',
          size === 'lg' && 'body-lg',
          size === 'md' && 'body-md',
          size === 'sm' && 'body-sm',
          size === 'xs' && 'body-xs',
          className,
        )}
        {...props}>
        {children}
      </p>
    );
  },
);

export { Body };

export type { BodyProps };
