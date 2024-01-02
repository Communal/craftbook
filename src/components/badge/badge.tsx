import { cn } from '@/utils';
import { forwardRef } from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> { }

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn('craftbookBadge', className)} {...props}>
        {children}
      </span>
    );
  },
);

export { Badge };

export type { BadgeProps };
