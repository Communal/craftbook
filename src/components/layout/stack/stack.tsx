import { forwardRef } from 'react';
import { Grid, GridProps } from '..';
import { cn } from '@/utils';

interface StackProps extends React.HTMLAttributes<HTMLDivElement>, GridProps {}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      rowGap = 12,
      colGap = 12,
      alignItems = 'center',
      justifyContent = 'normal',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Grid
        ref={ref}
        className={cn('', className)}
        cols={1}
        rowGap={rowGap}
        colGap={colGap}
        alignItems={alignItems}
        justifyContent={justifyContent}
        {...props}>
        {children}
      </Grid>
    );
  },
);

export { Stack };

export type { StackProps };
