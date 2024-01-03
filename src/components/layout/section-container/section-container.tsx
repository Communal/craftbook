import { cn } from '@/utils';
import { forwardRef } from 'react';

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('py-6', className)} {...props}>
        {children}
      </section>
    );
  },
);

export { SectionContainer };

export type { SectionContainerProps };
