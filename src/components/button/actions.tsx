import { cn } from '@/utils';
import { Bookmark, Heart, MessageCircle, Share } from 'lucide-react';
import { ButtonHTMLAttributes, MouseEvent, forwardRef, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '..';
import { motion } from 'framer-motion';

export interface LikeButtonProps {
  count: number;
  isLiked: boolean;
}

export interface CommentButtonProps {
  count: number;
}

export const LikeButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & LikeButtonProps
>(({ className, count = 0, ...props }, ref) => {
  const [isLiked, setIsLiked] = useState<boolean>(props.isLiked);

  const handleLikeAction = (e: MouseEvent<HTMLButtonElement>): void => {
    setIsLiked(!isLiked);
    // calling the prop.onClick if any
    props.onClick && props.onClick(e);
  };

  return (
    <span
      className="flex flex-row items-center gap-0.5 w-fit h-fit"
      ref={ref}
      {...props}>
      <motion.button
        className={cn(
          'p-1 rounded-full hover:bg-black/5 active:bg-black/10',
          className,
        )}
        onClick={handleLikeAction}
        whileTap={{
          scale: 2,
        }}
        transition={{
          type: 'spring',
          bounce: 0.65,
        }}>
        <Heart
          className={cn(
            'w-3.5 h-3.5',
            isLiked && 'text-transparent fill-red-500',
          )}
        />
      </motion.button>
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
              'p-1 rounded-full hover:bg-black/5 active:bg-black/10 w-fit',
              className,
            )}
            {...props}>
            <Share className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel>Share via</DropdownMenuLabel>
          <DropdownMenuItem>Twitter/X</DropdownMenuItem>
          <DropdownMenuItem>Instagram</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
});

export const CommentButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & CommentButtonProps
>(({ className, count = 0, ...props }, ref) => {
  return (
    <span className="flex flex-row items-center gap-0.5 w-fit h-fit">
      <button
        ref={ref}
        className={cn(
          'p-1 rounded-full hover:bg-black/5 active:bg-black/10',
          className,
        )}
        {...props}>
        <MessageCircle className={cn('w-3.5 h-3.5')} />
      </button>
      <span className="comment-count-wrapper text-sm text-neutral-800">
        {count}
      </span>
    </span>
  );
});

export const SaveButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { isSavedAlready: boolean }
>(({ className, isSavedAlready = false, ...props }, ref) => {
  const [isSaved, setIsSaved] = useState<boolean>(isSavedAlready);

  const handleSaveAction = (e: MouseEvent<HTMLButtonElement>): void => {
    setIsSaved(!isSaved);
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
        onClick={handleSaveAction}
        {...props}>
        <Bookmark
          className={cn(
            'w-4 h-4',
            isSaved && 'text-transparent fill-yellow-500',
          )}
        />
      </button>
    </span>
  );
});
