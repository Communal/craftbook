import { cn } from '@/utils';
import { Heart, Share } from 'lucide-react';
import { ButtonHTMLAttributes, MouseEvent, forwardRef, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '..';

export interface LikeButtonProps {
  count: number;
  isLiked: boolean;
}

export const LikeButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & LikeButtonProps
>(({ className, count = 0, ...props }, ref) => {
  const [isLiked, setIsLiked] = useState<boolean>(props.isLiked);

  const handleLinkAction = (e: MouseEvent<HTMLButtonElement>): void => {
    setIsLiked(!isLiked);
    // calling the prop.onClick if any
    props.onClick && props.onClick(e);
  };

  return (
    <span className="flex flex-row items-center gap-0.5 w-fit h-fit">
      <button
        ref={ref}
        className={cn(
          'p-1 rounded-full hover:bg-black/5 active:bg-black/10',
          className,
        )}
        onClick={handleLinkAction}
        {...props}>
        <Heart
          className={cn(
            'w-3.5 h-3.5',
            isLiked && 'text-transparent fill-red-500',
          )}
        />
      </button>
      <span className="like-count-wrapper text-sm text-neutral-800">
        {isLiked ? count + 1 : count}
      </span>
    </span>
  );
});

export const ShareButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            ref={ref}
            className={cn(
              'p-1 rounded-full hover:bg-black/5 active:bg-black/10',
              className,
            )}
            {...props}>
            <Share className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Share via</DropdownMenuLabel>
          <DropdownMenuItem>Twitter/X</DropdownMenuItem>
          <DropdownMenuItem>Instagram</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
});
