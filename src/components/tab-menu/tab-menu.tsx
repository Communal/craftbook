import { forwardRef, useState } from 'react';
import { Box, Grid } from '..';
import { cn } from '@/utils';

interface TabMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[];
  currentOption: string;
  stretch?: boolean;
  updateSelection: (option: string) => void;
}

interface TabMenuOptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  label: string;
  isSelected: boolean;
}

const TabMenu = forwardRef<HTMLDivElement, TabMenuProps>(
  (
    {
      className,
      options,
      currentOption = '',
      stretch = false,
      updateSelection,
      ...props
    },
    ref,
  ) => {
    const [selectedOption, setSelectedOption] = useState<string>(
      currentOption || options[0],
    );

    return (
      <Box
        className={cn(
          'border-b pb-2',
          stretch && 'flex flex-row items-center justify-center',
        )}>
        <Grid
          ref={ref}
          className={cn('w-fit', stretch && 'w-full', className)}
          cols={options.length}
          alignItems="center"
          justifyContent={'center'}
          {...props}>
          {options.map((option, index) => {
            return (
              <TabMenuOption
                title={option}
                label={option}
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  updateSelection(option);
                }}
                isSelected={option === selectedOption}
              />
            );
          })}
        </Grid>
      </Box>
    );
  },
);

const TabMenuOption = forwardRef<HTMLButtonElement, TabMenuOptionProps>(
  ({ className, title, label, isSelected, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'tab-menu-option px-2 py-1 transition-all text-sm rounded-md',
          !isSelected && 'hover:bg-neutral-100',
          isSelected &&
          'bg-neutral-200',
          className,
        )}
        aria-label={label}
        {...props}>
        {title}
      </button>
    );
  },
);

export { TabMenu, TabMenuOption };

export type { TabMenuProps, TabMenuOptionProps };
