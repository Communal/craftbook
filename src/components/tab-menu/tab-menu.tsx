import { forwardRef, useState } from 'react';
import { Box, Grid } from '..';
import { cn } from '@/utils';

interface TabMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[];
  currentOption: string;
  stretch?: boolean;
}

interface TabMenuOptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  label: string;
  isSelected: boolean;
}

const TabMenu = forwardRef<HTMLDivElement, TabMenuProps>(
  ({ className, options, currentOption = '', stretch = false, ...props }, ref) => {
    const [selectedOption, setSelectedOption] = useState<string>(
      currentOption || options[0],
    );

    return (
      <Box className={cn("border-b", stretch && "flex flex-row items-center justify-center")}>
        <Grid
          ref={ref}
          className={cn('w-fit', className)}
          cols={options.length}
          alignItems="center"
          justifyContent='center'
          {...props}>
          {options.map((option, index) => {
            return (
              <TabMenuOption
                title={option}
                label={option}
                key={index}
                onClick={() => {
                  setSelectedOption(option);
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
          'tab-menu-option px-3 py-1.5 transition-all w-fit',
          !isSelected && 'hover:border-b-2 hover:border-black/10',
          isSelected &&
          'border-b-2 border-b-black drop-shadow-lg before:outline-none',
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
