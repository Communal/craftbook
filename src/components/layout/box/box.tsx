import { cn } from '@/utils';
import { forwardRef } from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    );
  },
);

export { Box };

export type { BoxProps };
