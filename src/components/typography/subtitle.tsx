import { cn } from '@/utils';
import { forwardRef } from 'react';

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'md' | 'sm' | 'xs';
}

const Subtitle = forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ className, children, size = 'md', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'craftbookSubtitle',
          size === 'md' && 'subtitle-md',
          size === 'sm' && 'subtitle-sm',
          size === 'xs' && 'subtitle-xs',
          className,
        )}
        {...props}>
        {children}
      </p>
    );
  },
);

export { Subtitle };

export type { SubtitleProps };
