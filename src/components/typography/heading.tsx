import { cn } from '@/utils';
import { forwardRef } from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: '2xl' | 'xl' | 'lg' | 'md';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size = 'lg', ...props }, ref) => {
    switch (size) {
      case '2xl':
        return (
          <h1
            ref={ref}
            className={cn('craftbookHeading heading-2xl', className)}
            {...props}
          />
        );
      case 'xl':
        return (
          <h2
            ref={ref}
            className={cn('craftbookHeading heading-xl', className)}
            {...props}
          />
        );
      case 'lg':
        return (
          <h3
            ref={ref}
            className={cn('craftbookHeading heading-lg', className)}
            {...props}
          />
        );
      case 'md':
        return (
          <h4
            ref={ref}
            className={cn('craftbookHeading heading-md', className)}
            {...props}
          />
        );
      default:
        return <>{props.children}</>;
    }
  },
);

export { Heading };

export type { HeadingProps };
