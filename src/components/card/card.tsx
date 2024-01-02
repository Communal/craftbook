import { cn } from '@/utils';
import { forwardRef } from 'react';
import { Heading, Subtitle } from '..';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  withHeader?: boolean;
  title?: string;
  subtitle?: string;
  fit?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      withHeader = false,
      title = '',
      subtitle = '',
      fit = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'craftbookCard',
          fit && 'w-fit',
          className,
        )}
        {...props}>
        {withHeader && (
          <div className="pb-4">
            {title && <Heading size="xl">{title}</Heading>}
            {subtitle && <Subtitle size="md">{subtitle}</Subtitle>}
          </div>
        )}
        {children}
      </div>
    );
  },
);

export { Card };

export type { CardProps };
