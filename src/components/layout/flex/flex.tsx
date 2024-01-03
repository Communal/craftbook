import { cn } from '@/utils';
import { forwardRef } from 'react';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * direction - defines the direction of the flexbox
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * gap - defines the amount of gap between children nodes in px
   */
  gap?: number;
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

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      children,
      style,
      direction = 'row',
      gap = 12,
      justifyContent = 'normal',
      alignItems = 'center',
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex', className)}
        style={{
          ...style,
          flexDirection: direction,
          gap: `${gap}px`,
          justifyContent: StyleProps.justifyContent[justifyContent],
          alignItems: StyleProps.alignItems[alignItems],
        }}
        {...props}>
        {children}
      </div>
    );
  },
);

export { Flex };

export type { FlexProps };
