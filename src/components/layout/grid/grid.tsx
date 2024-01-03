import { cn } from '@/utils';
import { forwardRef } from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * cols - defines the number of columns in grid
   */
  cols?: number;
  /**
   * rowGap - defines the amount of row-gap in px
   */
  rowGap?: number;
  /**
   * colGap - defines the amount of col-gap in px
   */
  colGap?: number;
  /**
   * alignItems - options to align items in a grid
   */
  alignItems?: 'center' | 'start' | 'end';
  /**
   * justifyContent - options to justify the content/elements in a grid
   */
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'normal'
    | 'stretch';
}

const StyleProps = {
  alignItems: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
  },
  justifyContent: {
    normal: 'normal',
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    stretch: 'stretch',
  },
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      children,
      cols = 1,
      style,
      rowGap = 12,
      colGap = 12,
      justifyContent = 'normal',
      alignItems = 'center',
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('grid', className)}
        style={{
          ...style,
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          rowGap: `${rowGap}px`,
          columnGap: `${colGap}px`,
          justifyContent: StyleProps.justifyContent[justifyContent],
          alignItems: StyleProps.alignItems[alignItems],
        }}
        {...props}>
        {children}
      </div>
    );
  },
);

export { Grid };

export type { GridProps };
